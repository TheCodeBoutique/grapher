// ==========================================================================
// Project:   Nodegraph - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nodegraph */

// This page describes the main user interface for your application.  
Nodegraph.mainPage = SC.Page.design({

    // The main pane is made visible on screen as soon as your app is loaded.
    // Add childViews to this pane for views to display immediately on page
    // load.
    mainPane: SC.MainPane.design({
        classNames: ['base_color'],
        childViews: ['textureView'],

        textureView: SC.View.design({
            classNames: ['texture no_opacity'],
            layout: { top: 0, right: 0, bottom: 0, left: 0 },
            childViews: ['leftView', 'detailedView'],

            leftView: COS.InformationView.design({
                layout: { centerY: 0, left: 10, height: 650, width: 300 },
            }),

            detailedView: SC.View.design({
                layout: { top: 0, right: 0, bottom: 0, left: 300 },
                childViews: ['navView', 'nodeView'],

                navView: SC.View.design({
                    layout: { top: 5, centerX: 0, height: 30, width: 320 },
                    childViews: ['clusterGraph', 'treeGraph', 'roundGraph'],

                    clusterGraph: SC.ButtonView.design({
                        classNames: ['text_style', 'empty_button'],
                        layout: { centerX: 0, left: 0, height: 25, width: 100 },
                        title: 'Cluster Graph',
                        action: 'myMethod',
                        target: 'MyApp.Controller'
                    }),

                    treeGraph: SC.ButtonView.design({
                        classNames: ['text_style', 'empty_button'],
                        layout: { centerX: 0, left: 110, height: 25, width: 100 },
                        title: 'Tree Graph',
                        action: 'showTreeGraph',
                        target: 'Nodegraph.statehchart'
                    }),

                    roundGraph: SC.ButtonView.design({
                        classNames: ['text_style', 'empty_button'],
                        layout: { centerX: 0, right: 0, height: 25, width: 100 },
                        title: 'Round Graph',
                        action: 'myMethod',
                        target: 'MyApp.Controller'
                    })

                }), //navView

                nodeView: SC.ContainerView.design({
                    layout: { top: 45, right: 10, bottom: 10, left: 0 },
                    nowShowingBinding: 'Nodegraph.viewsController.currentView'
                })

            })

        })

    })

});

	
