import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  beforeModel() {
    this.store.createRecord('song', {
      id: 1,
      name: 'Kid A',
    });
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
