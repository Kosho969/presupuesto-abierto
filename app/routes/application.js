import Ember from 'ember';

export default Ember.Route.extend({
  spreadsheet: Ember.inject.service(),

  // fb: Ember.inject.service(),

  // beforeModel() {
  //   this.get('fb').FBInit();
  // },

  model() {
    return this.store.findAll('audiencia');
  },

  setupController(controller, model) {
    this._super(controller, model);
  }
});