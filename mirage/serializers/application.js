import DS from 'ember-data';

export default DS.JSONSerializer.extend({  
  JSONSerializer: function(store, type, payload) {
  // payload is {delete: true} and then ember data wants to go ahead and set
  // the new properties, return null so it doesn't try to do that
  return null;
}
});
