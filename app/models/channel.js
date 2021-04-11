import Model, { attr, hasMany } from '@ember-data/model';

export default class ChannelModel extends Model {
  @attr('string', { defaultValue: 'kick' }) sound;

  @hasMany steps;

  setTickCount(tickCount) {
    if (this.steps.length === 0) {
      return;
    }

    this.steps.forEach((step) => (step.isPlaying = false));

    var activeStepIndex = tickCount % this.steps.length;
    let activeStep = this.steps.objectAt(activeStepIndex);
    activeStep.isPlaying = true;
  }

  getPlayingNote() {
    if (this.steps.length === 0) {
      return;
    }

    const playingStep = this.steps.find((step) => step.isPlaying);

    if (playingStep.volume > 0) {
      return {
        sound: this.sound,
        volume: playingStep.volume,
      };
    }
  }
}
