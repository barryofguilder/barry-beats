import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  beforeModel() {
    const kidA = this.store.createRecord('song', {
      id: 1,
      name: 'Kid A',
    });
    const kick = kidA.channels.createRecord({ sound: 'kick' });
    kick.steps.createRecord();
    kick.steps.createRecord();
    kick.steps.createRecord();
    kick.steps.createRecord();

    const clap = kidA.channels.createRecord({ sound: 'clap' });
    clap.steps.createRecord();
    clap.steps.createRecord();
    clap.steps.createRecord();
    clap.steps.createRecord();

    this.store.createRecord('song', {
      id: 2,
      name: 'Treefingers',
    });
    this.store.createRecord('song', {
      id: 3,
      name: 'Rounded',
    });
  }
}
