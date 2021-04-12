import { registerCommands, registerEvents } from "./utils/registry";
import config from "./config.json";
import DiscordClient from "./client/client";
const client = new DiscordClient({});

(async () => {
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  await client.login(config.token);
})();
