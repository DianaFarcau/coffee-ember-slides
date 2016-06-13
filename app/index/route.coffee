`import Ember from 'ember'`

IndexRoute = Ember.Route.extend
  model: ->
    return @store.findAll('layout')
 
`export default IndexRoute`
