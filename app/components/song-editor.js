import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SongEditorComponent extends Component {
  @action
  addChannel() {
    this.args.song.channels.createRecord();
  }

  @action
  deleteChannel(channel) {
    this.args.song.channels.removeObject(channel);
  }
}
