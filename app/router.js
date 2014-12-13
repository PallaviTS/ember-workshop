import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('post',{path: '/post'});
  this.resource('post/detail', { path: 'post/:post_id' });
});

export default Router;
