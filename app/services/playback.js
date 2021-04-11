import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default class PlaybackService extends Service {
  @tracked song;
  @tracked tickCount = 0;
  @tracked isPlaying = false;

  get bar() {
    return Math.floor(this.tickCount / 16) + 1;
  }

  get beat() {
    return Math.floor((this.tickCount / 4) % 4) + 1;
  }

  get sixteenth() {
    return (this.tickCount % 4) + 1;
  }

  get interval() {
    return 1000 / ((this.song.tempo / 60) * 4);
  }

  @action
  play() {
    this.tickCount = 0;
    this.isPlaying = true;
    this.tick.perform();
  }

  @action
  stop() {
    this.isPlaying = false;
  }

  @action
  decreaseTempo() {
    this.song.tempo -= 5;
  }

  @action
  increaseTempo() {
    this.song.tempo += 5;
  }

  @task
  *tick() {
    if (!this.isPlaying) {
      return;
    }

    // play a sound

    yield timeout(this.interval);

    this.tickCount++;
    this.tick.perform();
  }
}
