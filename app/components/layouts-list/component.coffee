`import Ember from 'ember'`
`import DS from 'ember-data'`

LayoutsListComponent = Ember.Component.extend
  classNames: ['layouts-list']
  actions:
    clickLayout: (param) ->
      @set('holdLayoutId', param.id)
      
         
    
    # this.layouts = bringLayouts
    
`export default LayoutsListComponent`
