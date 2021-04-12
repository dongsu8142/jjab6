import fetch from "node-fetch";
import db from "../database/db";
import { decrypt } from "./utils";
import CryptoJS from "crypto-js";
const TOKEN = process.env.BOT_TOKEN;
const url = "https://discord.com/api/v8";

export async function getBotGuilds() {
  const response = await fetch(`${url}/users/@me/guilds`, {
    method: "GET",
    headers: {
      Authorization: `Bot ${TOKEN}`,
    },
  });
  return response.json();
}

export async function getGuildRoles(guildId: string) {
  const response = await fetch(`${url}/guilds/${guildId}/roles`, {
    method: "GET",
    headers: {
      Authorization: `Bot ${TOKEN}`,
    },
  });
  return response.json();
}

export async function getUserGuilds(discordId: string) {
  const credentials = (await db("OAuth2Credentials").where({ discordId }))[0];
  if (!credentials) throw new Error("No credentials");
  const decryptedAccessToken = credentials.accessToken;
  const decrypted = decrypt(decryptedAccessToken);
  const accessToken = decrypted.toString(CryptoJS.enc.Utf8);
  const response = await fetch(`${url}/users/@me/guilds`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.json();
}
