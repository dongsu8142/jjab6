// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
import { Guild } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";
import logging from "../utils/logging";

export default class GuildCreateEvent extends BaseEvent {
  constructor() {
    super("guildCreate");
  }

  async run(client: DiscordClient, guild: Guild) {
    client.db.schema.hasTable("guilds").then((exists) => {
      if (!exists) {
        return client.db.schema.createTable("guilds", (table) => {
          table.string("guildId").notNullable();
          table.string("prefix").notNullable();
        });
      }
    });

    client
      .db("guilds")
      .insert({ guildId: String(guild.id), prefix: "=" })
      .then((res) => {
        logging("guildcreateevent", "서버정보를 생성했습니다.");
      })
      .catch((err) => {
        logging(
          "guildcreateevent",
          "서버정보를 생성하는 과정에서 에러가 발생했습니다."
        );
      });
  }
}
