import Model, { attr } from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class StepModel extends Model {
  @attr('number', { defaultValue: 0 }) volume;

  @tracked isPlaying = false;
}
