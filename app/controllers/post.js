import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    savePost: function(){

      this.store.createRecord('post', {
        id: Math.floor(Math.random() * (10000 - 1)) + 10000,
        ownerName: this.get('ownerName'),
        from: this.get('from'),
        to: this.get('to'),
        contactNo: this.get('contactNo')
      });

      this.transitionToRoute('index');



    }
  }
});
