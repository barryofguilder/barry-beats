import Model, { attr, hasMany } from '@ember-data/model';

export default class ChannelModel extends Model {
  @attr('string', { defaultValue: 'kick' }) sound;

  @hasMany steps;
}
