import { Client, ClientOptions, Collection } from 'discord.js';
import BaseEvent from '../utils/structures/BaseEvent';
import BaseCommand from '../utils/structures/BaseCommand';
import db from '../db/db';
import { Knex } from 'knex';

export default class DiscordClient extends Client {

  private _db = db;
  private _commands = new Collection<string, BaseCommand>();
  private _events = new Collection<string, BaseEvent>();

  constructor(options?: ClientOptions) {
    super(options);
  }

  get commands(): Collection<string, BaseCommand> { return this._commands; }
  get events(): Collection<string, BaseEvent> { return this._events; }
  get db(): Knex<any, unknown[]> { return this._db; }
}
