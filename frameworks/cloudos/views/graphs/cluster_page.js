COS.clusterGraph = SC.Page.design({

    interfaceView: SC.View.design({
        layout: { centerX: 0, centerY: 0, height: 611, width: 1034 },
        childViews: ['application', 'lines'],
        render: function(context) {
            context.push('<div id="tip" style="position: absolute; left: 0px; top: 0px; height: 20px; width: 100px; background-color: #000000; border: 1px solid black; text-align: center; border-radius: 5px; color: #ffffff; z-index: 1200; visibility: hidden;"></div>');
        },

        lines: COS.ClusterLines.design({}),

        application: SC.View.design({
            classNames: ['silver_gradient', 'standardRadius', 'z_5'],
            layout: { centerX: 5, centerY: 0, height: 50, width: 550 },
            childViews: ['applicationLabel'],

            applicationLabel: SC.LabelView.design({
                classNames: ['text_style', 'text_large', 'text_center'],
                layout: { centerX: 0, centerY: 0, height: 21, width: 400 },
                value: 'Application Name'
            })

        })

    })

});