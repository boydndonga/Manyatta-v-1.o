import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  avatar: DS.attr('string'),
  occupation: DS.attr('string'),
  identification: DS.attr('string'),

  houses: DS.hasMany('house', {
    async: true
  }),
  reviews: DS.hasMany('review', {
    async: true
  }),
  bookings: DS.hasMany('booking', {
    async: true
  })

});
