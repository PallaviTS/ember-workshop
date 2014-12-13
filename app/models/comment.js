import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post'),
  name: DS.attr('string'),
  comment: DS.attr('string'),
  contactNo: DS.attr('string')
});
