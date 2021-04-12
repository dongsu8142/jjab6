import CryptoJS from "crypto-js";
import { Guild } from "./type";

export function getMutualGuilds(userGuilds: Guild[], botGuilds: Guild[]) {
  const validGuilds = userGuilds.filter(
    (guild) => (guild.permissions & 0x20) === 0x20
  );
  const included: Guild[] = [];
  const excluded = validGuilds.filter((guild) => {
    const findGuild = botGuilds.find((g) => g.id === guild.id);
    if (!findGuild) return guild;
    included.push(findGuild);
  });
  return { excluded, included };
}

export function encrypt(token: string) {
  return CryptoJS.AES.encrypt(token, process.env.SECRET_PASSPHRASE!);
}

export function decrypt(token: string) {
  return CryptoJS.AES.decrypt(token, process.env.SECRET_PASSPHRASE!);
}
