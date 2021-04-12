// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildDelete
import { Guild } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";
import log from "../utils/logging";

export default class GuildDeleteEvent extends BaseEvent {
  constructor() {
    super("guildDelete");
  }

  async run(client: DiscordClient, guild: Guild) {
    client
      .db("guilds")
      .where({ guildId: String(guild.id) })
      .del()
      .then((res) => {
        log("guilddeleteevent", "서버정보를 지웠습니다.");
      })
      .catch((err) => {
        log(
          "guilddelete_vent",
          "서버정보를 지우는 과정에서 에러가 발생했습니다."
        );
      });
  }
}
