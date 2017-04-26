import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel:function(){
    return this.get('session').fetch().catch(function(){});
  },
  actions:{
    signUp(provider){
      this.get('session').open('firebase', { provider: provider}).then(function(data) {

      });
    }
  }
});
