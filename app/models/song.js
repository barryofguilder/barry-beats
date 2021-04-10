import Model, { attr } from '@ember-data/model';

export default class SongModel extends Model {
  @attr name;
}
