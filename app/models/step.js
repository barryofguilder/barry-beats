import Model, { attr } from '@ember-data/model';

export default class StepModel extends Model {
  @attr('number', { defaultValue: 0 }) volume;
}
