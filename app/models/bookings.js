import DS from 'ember-data';

export default DS.Model.extend({
      /*defining attributes of bookings and their relationship*/

      checkIn: DS.attr('date'),
      checkOut: DS.attr('date'),
      price: DS.attr('number'),
      occupants: DS.attr('number'),

      user: DS.belongsTo('user', {
          async: true
        }),
        house: DS.belongsTo('house', {
          async: true
        })

      });
