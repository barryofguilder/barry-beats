import Model, { attr, hasMany } from '@ember-data/model';

export default class SongModel extends Model {
  @attr name;
  @attr('number', { defaultValue: 120 }) tempo;

  @hasMany channels;
}
