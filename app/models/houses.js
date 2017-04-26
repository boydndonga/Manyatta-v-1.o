import DS from 'ember-data';

export default DS.Model.extend({
  /*defining attributes of houses and their relationship*/

  houseName: DS.attr('string'),
  houseDescription: DS.attr('string'),
  telNumber: DS.attr('number'),
  city: DS.attr('string'),
  street: DS.attr('string'),
  rules: DS.attr('string'),
  ammenities: DS.attr('string'),
  price: DS.attr('string'),

  reviews: DS.hasMany('review', {
    async: true
  }),
  bookings: DS.hasMany('booking', {
    async: true
  }),
  user: DS.belongsTo('user', {
    async: true
  })

});
