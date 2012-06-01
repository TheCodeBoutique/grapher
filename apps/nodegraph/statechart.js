Nodegraph.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('Nodegraph.ReadyState'),
  // someOtherState: SC.State.plugin('Nodegraph.SomeOtherState')

});