import db from "./db";

db.schema
  .createTable("users", (table) => {
    table.string("discordId").notNullable();
    table.string("discordTag").notNullable();
    table.string("avatar").notNullable();
    table.json("guilds").notNullable();
  })
  .createTable("OAuth2Credentials", (table) => {
    table.string("accessToken").notNullable();
    table.string("refreshToken").notNullable();
    table.string("discordId").notNullable();
  })
  .then(() => {
    console.log("완료");
    process.exit();
  });
