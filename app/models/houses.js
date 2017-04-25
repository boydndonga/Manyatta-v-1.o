import DS from 'ember-data';

export default DS.Model.extend({
  /*defining attributes of houses and their relationship*/

  house - name: DS.attr('string'),
  house - description: DS.attr('string'),
  tel - number: DS.attr('number'),
  city: DS.attr('string'),
  street: DS.attr('string'),
  rules: DS.attr('string'),
  ammenities: DS.attr('string'),
  price: DS.attr('string'),

  reviews: DS.hasMany('review'),
  bookings: DS.hasMany('booking'),
  users: DS.belongsTo('user')

});
