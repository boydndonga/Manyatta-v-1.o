import DS from 'ember-data';

export default DS.Model.extend({
  /*defining attributes of reviews and their relationship*/

  comment: DS.attr('string'),

  house: DS.belongsTo('house', {
    async: true
  }),
  user: DS.belongsTo('user', {
    async: true
  })

});
