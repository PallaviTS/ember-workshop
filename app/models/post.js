import DS from 'ember-data';

export default DS.Model.extend({
  ownerName: DS.attr('string'),
  to: DS.attr('string'),
  from: DS.attr('string'),
  contactNo: DS.attr('number')
});
