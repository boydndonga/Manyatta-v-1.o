import DS from 'ember-data';

export default DS.Model.extend({
  /*defining attributes of reviews and their relationship*/

  comment: DS.attr('string'),

  house: belongsTo('house', {
    async: true
  }),
  user: belongsTo('user', {
    async: true
  })

});
