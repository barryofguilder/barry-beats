import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  beforeModel() {
    this._createIMightBeWrong();
  }

  _createIMightBeWrong() {
    const song = this.store.createRecord('song', {
      id: 1,
      name: 'I Might Be Wrong',
      tempo: 110,
    });

    song.createChannel(
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      'kick'
    );
    song.createChannel(
      [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
      'snare'
    );
    song.createChannel(
      [0, 0, 1, 0, 0, 0.5, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      'hihat_closed'
    );
    song.createChannel(
      [0, 0, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0],
      'hihat_open'
    );
  }
}
