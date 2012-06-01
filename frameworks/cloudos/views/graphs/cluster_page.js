COS.clusterGraph = SC.Page.design ({
  
  interfaceView:  SC.View.design({
    layout: { centerX: 0, centerY: 0, height: 611, width: 1034 },
    childViews: ['application', 'lines'],
    
    lines: COS.ClusterLines.design ({
    }),
    
    application: SC.View.design({
      classNames: ['silver_gradient', 'standardRadius', 'z_5'],
      layout: { centerX: 0, centerY: 0, height: 50, width: 400 },
      childViews: ['applicationLabel'],
      
      applicationLabel: SC.LabelView.design({
        classNames: ['text_style', 'text_large', 'text_center'],
        layout: { centerX: 0, centerY: 0, height: 21, width: 400 },
        value: 'Application Name'
      }),
      
    }),
    
  })
  
});