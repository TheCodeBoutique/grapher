// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

COS.InformationView = SC.View.extend({
    /** @scope COS.InformationView.prototype */
    layout: { top: 0, left: 0, bottom: 0, right: 0 },
    childViews: ['guideView', 'detailedInformationView'],

    guideView: SC.View.design({
        classNames: ['opaqueBase', 'standardRadius', 'innerShadow' ],
        layout: { top: 40, left: 10, height: 95, width: 120 },

        render: function(context) {
            context.push([
                '<div class="header_style header_positioning absolute ">', "Guide:", '</div>',
                '<div class="vertical_line_dark absolute ">', '</div>',
                '<div class="text_style application_text_positioning absolute ">', "Applications", '</div>',
                '<div class="circle_shape absolute ">', '</div>',
                '<div class="vertical_line_light line_one absolute ">', '</div>',
                '<div class="text_style utilities_text_positioning absolute ">', "Utilities", '</div>',
                '<div class="square_shape absolute ">', '</div>',
            ].join(''))
        },

    }),

    detailedInformationView: SC.View.design({
        classNames: ['opaqueBase', 'standardRadius', 'innerShadow', ],
        layout: { top: 160, left: 0, height: 450, width: 250 },
        childViews: ['nameText', 'cpuText', 'amazonIDText', 'cookbooksText', 'stackText'],

        nameText: SC.LabelView.design({
            classNames: ['text_style', 'text_med'],
            layout: { top: 40, left: 10, height: 25, width: 200},
            valueBinding: 'Nodegraph.utillitieSelectionController.name'
        }),

        cpuText: SC.LabelView.design({
            classNames: ['text_style', 'text_med'],
            layout: { top: 75, left: 10, height: 25, width: 200},
            valueBinding: 'Nodegraph.utillitieSelectionController.cpuType'
        }),

        amazonIDText: SC.LabelView.design({
            classNames: ['text_style', 'text_med'],
            layout: { top: 110, left: 10, height: 25, width: 200},
            valueBinding: 'Nodegraph.utillitieSelectionController.amazonId'
        }),

        cookbooksText: SC.LabelView.design({
            classNames: ['text_style', 'text_med'],
            layout: { top: 145, left: 10, height: 25, width: 200},
            valueBinding: 'Nodegraph.utillitieSelectionController.cookbooksVersion'
        }),

        stackText: SC.LabelView.design({
            classNames: ['text_style', 'text_med'],
            layout: { top: 180, left: 10, height: 25, width: 200},
            valueBinding: 'Nodegraph.utillitieSelectionController.stackLabel'
        }),

        render: function(context) {

            context.push([
                '<div class="header_style header_positioning absolute ">', "Detailed Information:", '</div>',
                '<div class="vertical_line_dark absolute ">', '</div>',
                '<div class="vertical_line_light line_one absolute ">', '</div>',
                '<div class="vertical_line_light line_two absolute ">', '</div>',
                '<div class="vertical_line_light line_three absolute ">', '</div>',
                '<div class="vertical_line_light line_four absolute ">', '</div>',
                '<div class="vertical_line_light line_five absolute ">', '</div>',
            ].join(''))
        },

    }),

});