import DS from 'ember-data';

export default DS.Model.extend({
  shapeType: DS.attr('string'),
  content: DS.attr('string'),
  x: DS.attr('string'),
  y: DS.attr('string'),
  width: DS.attr('string'),
  height: DS.attr('string'),
  layout: DS.belongsTo('layout')
});
