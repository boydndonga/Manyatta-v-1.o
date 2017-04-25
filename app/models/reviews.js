import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr('string'),

  houses: belongsTo('house'),
  users: belongsTo('user')

});
