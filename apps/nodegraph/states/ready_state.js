Nodegraph.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Nodegraph.getPath('mainPage.mainPane').append();
    Nodegraph.viewsController.set('currentView', COS.clusterGraph.interfaceView);
		this.invokeLater(this.fadeIn, 500);
  },

	fadeIn: function() {
	  Nodegraph.getPath('mainPage.mainPane.textureView').animate('opacity', 1.0, {duration: 0.8,timing:'ease-in-out'});
	},

  exitState: function() {
    Nodegraph.getPath('mainPage.mainPane').remove();
  }

});

