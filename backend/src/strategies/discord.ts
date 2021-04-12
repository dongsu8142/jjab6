import passport from "passport";
import DiscordStrategy from "passport-discord";
import db from "../database/db";
import { encrypt, decrypt } from "../utils/utils";

passport.serializeUser((user, done) => {
  done(null, user.discordId);
});

passport.deserializeUser(async (discordId, done) => {
  try {
    const user = (await db("users").where({ discordId }))[0];
    return user ? done(null, user) : done(null, null);
  } catch (err) {
    console.log(err);
    done(err, null);
  }
});
passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID || "",
      clientSecret: process.env.CLIENT_SECRET || "",
      callbackURL: process.env.CALLBACK_URL,
      scope: ["identify", "guilds"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const encryptedAccessToken = encrypt(accessToken).toString();
      const encryptedRefreshToken = encrypt(refreshToken).toString();
      const { id, username, discriminator, avatar, guilds } = profile;
      try {
        if ((await db("users").where({ discordId: id }))[0]) {
          if ((await db("OAuth2Credentials").where({ discordId: id }))[0]) {
            await db("OAuth2Credentials")
              .update({
                accessToken: encryptedAccessToken,
                refreshToken: encryptedRefreshToken,
              })
              .where({ discordId: id });
          } else {
            await db("OAuth2Credentials").insert({
              discordId: id,
              accessToken: encryptedAccessToken,
              refreshToken: encryptedRefreshToken,
            });
          }
          await db("users")
            .update({
              discordTag: `${username}#${discriminator}`,
              avatar,
              guilds: JSON.stringify(guilds),
            })
            .where({ discordId: id });
          const user = (await db("users").where({ discordId: id }))[0];
          return done(null, user);
        } else {
          await db("users").insert({
            discordId: id,
            discordTag: `${username}#${discriminator}`,
            avatar,
            guilds: JSON.stringify(guilds),
          });
          await db("OAuth2Credentials").insert({
            discordId: id,
            accessToken: encryptedAccessToken,
            refreshToken: encryptedRefreshToken,
          });
          const user = (await db("users").where({ discordId: id }))[0];
          return done(null, user);
        }
      } catch (err) {
        return done(err, undefined);
      }
    }
  )
);

interface UserInterface {
  discordId: string;
  discordTag: string;
  avatar: string;
  guilds: JSON;
}

declare global {
  namespace Express {
    export interface User extends UserInterface {}
  }
}
