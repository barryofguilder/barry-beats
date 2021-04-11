import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ChannelEditorComponent extends Component {
  @action
  addStep() {
    this.args.channel.steps.createRecord();
  }
}
