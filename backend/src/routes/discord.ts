import { Guild } from "../utils/type";
import { getMutualGuilds } from "../utils/utils";
import { Router } from "express";
import db from "../database/db";
import { getBotGuilds, getGuildRoles, getUserGuilds } from "../utils/api";
const router = Router();

router.get("/guilds", async (req, res) => {
  try {
    const guilds: Guild[] = await getBotGuilds();
    const user = (
      await db("users").where({ discordId: req.user?.discordId })
    )[0];
    if (user) {
      const userGuilds: Guild[] = await getUserGuilds(req.user?.discordId!);
      const mutualGuilds = getMutualGuilds(userGuilds, guilds);
      res.send(mutualGuilds);
    } else {
      return res.status(401).send({ message: "Unauthorized" });
    }
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.put("/guilds/:guildId/prefix", async (req, res) => {
  const { prefix } = req.body;
  const { guildId } = req.params;
  if (!prefix) return res.status(400).send({ message: "Bad Required" });
  try {
    const update = await db("guilds").update({ prefix }).where({ guildId });
    return update >= 1
      ? res.send(await db("guilds").where({ guildId }))
      : res.status(400).send({ message: "Could not find document" });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/guilds/:guildId/config", async (req, res) => {
  const { guildId } = req.params;
  try {
    const config = (await db("guilds").where({ guildId }))[0];
    return config
      ? res.send(config)
      : res.status(404).send({ message: "Not found" });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/guilds/:guildId/roles", async (req, res) => {
  const { guildId } = req.params;
  try {
    const roles = await getGuildRoles(guildId);
    res.send(roles);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.put("/guilds/:guildId/roles/defalte", async (req, res) => {
  const { defaultRole } = req.body;
  const { guildId } = req.params;
  if (!defaultRole) return res.status(400).send({ message: "Bad Required" });
  try {
    const update = await db("guilds")
      .update({ defaultRole })
      .where({ guildId });
    return update >= 1
      ? res.send(await db("guilds").where({ guildId }))
      : res.status(400).send({ message: "Could not find document" });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

export default router;
