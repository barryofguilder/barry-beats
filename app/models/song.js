import Model, { attr, hasMany } from '@ember-data/model';

export default class SongModel extends Model {
  @attr name;
  @attr('number', { defaultValue: 120 }) tempo;

  @hasMany channels;

  setTickCount(tickCount) {
    this.channels.forEach((channel) => channel.setTickCount(tickCount));
  }

  createChannel(volumes, sound) {
    const channel = this.channels.createRecord({ sound });

    volumes.forEach((volume) => {
      channel.steps.createRecord({ volume });
    });
  }

  getPlayingNotes() {
    let sounds = [];

    this.channels.forEach((channel) => {
      const sound = channel.getPlayingNote();

      if (sound) {
        sounds.push(sound);
      }
    });

    return sounds;
  }
}
