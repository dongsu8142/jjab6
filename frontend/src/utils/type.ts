export interface User {
  discordId: string;
  discordTag: string;
  avatar: string;
  guilds: Guild[];
}

export interface MenuGuild {
  included: Guild[];
  excluded: Guild[];
}

export interface Guild {
  id: string;
  icon: string;
  name: string;
  owner: boolean;
  features: string[];
  permissions: number;
  permissions_new?: string;
}

export interface Role {
  color: number;
  hoist: boolean;
  id: string;
  managed: boolean;
  mentionable: boolean;
  name: string;
  permissions: string;
  position: string;
  tags?: {
    bot_id?: string;
  };
}

export interface GuildConfig {
  guildId: string;
  prefix: string;
  defaultRole: string;
}
