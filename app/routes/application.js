import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel:function(){
    return this.get('session').fetch().catch(function(){});
  },
  actions:{
    signUp(email,password){
      this.get('session').open('firebase',{
        provider:'password',
        email:email,
        password:password
      });
    }
  }
});
