import Ember from 'ember';

export default Ember.Component.extend({

  actions:{
    signUp(){
      var email=this.get("email");
      var password=this.get("password");

      this.sendAction("signUpCreds", email,password);
    }
  }
});
