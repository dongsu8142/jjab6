import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';
import logging from '../../utils/logging';

export default class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client: DiscordClient) {
    logging('ready', 'Bot has logged in.')
  }
}