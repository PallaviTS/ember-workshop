import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    savePost: function(){
      // this.store.createRecord('post', this.get('model'));
      console.info(this.get('ownerName'));


    }
  }
});
