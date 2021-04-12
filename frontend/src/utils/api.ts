import axios from "axios";
const url = "http://localhost:3000/api";

export function getUserDetails() {
  return axios.get(`${url}/auth`, { withCredentials: true });
}

export function getGuilds() {
  return axios.get(`${url}/discord/guilds`, { withCredentials: true });
}

export function getGuildConfig(guildId: string) {
  return axios.get(`${url}/discord/guilds/${guildId}/config`, {
    withCredentials: true,
  });
}

export function updateGuildPrefix(guildId: string, prefix: string) {
  return axios.put(
    `${url}/discord/guilds/${guildId}/prefix`,
    { prefix },
    { withCredentials: true }
  );
}

export function updateGuildDefalteRole(guildId: string, defaultRole: string) {
  return axios.put(
    `${url}/discord/guilds/${guildId}/roles/defalte`,
    { defaultRole },
    { withCredentials: true }
  );
}

export function getGuildRoles(guildId: string) {
  return axios.get(`${url}/discord/guilds/${guildId}/roles`, {
    withCredentials: true,
  });
}
