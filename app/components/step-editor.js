import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class StepEditorComponent extends Component {
  @action
  cycleVolume() {
    const step = this.args.step;

    if (step.volume === 1) {
      step.volume = 0;
    } else if (step.volume === 0.5) {
      step.volume = 1;
    } else {
      step.volume = 0.5;
    }
  }
}
