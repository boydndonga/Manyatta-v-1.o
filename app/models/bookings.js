import DS from 'ember-data';

export default DS.Model.extend({
      /*defining attributes of bookings and their relationship*/

      check - in: DS.attr('date'),
      check - out: DS.attr('date'),
      price: DS.attr('number'),
      occupants: DS.attr('number'),

      user: belongsTo('user', {
          async: true
        },
        house: belongsTo('house', {
          async: true
        })

      });
