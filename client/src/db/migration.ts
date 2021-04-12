import db from "./db";

db.schema
  .createTable("guilds", (table) => {
    table.string("guildId").notNullable();
    table.string("prefix").notNullable();
    table.string("defaultRole").notNullable();
  })
  .then(() => {
    console.log("완료");
    process.exit();
  });
