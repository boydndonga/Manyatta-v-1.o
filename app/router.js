import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('discover', function() {
    this.route('search');
    this.route('singleHome');
  });
  this.route('profile', function() {
    this.route('add');
  });
});

export default Router;
