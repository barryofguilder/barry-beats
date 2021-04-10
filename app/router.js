import EmberRouter from '@ember/routing/router';
import config from 'barry-beats/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('songs', function () {
    this.route('song', { path: ':song_id' });
  });
  this.route('pads');
});
