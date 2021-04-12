export interface User {
  discordId: string;
  discordTag: string;
  avatar: string;
  guilds: Guild[];
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
