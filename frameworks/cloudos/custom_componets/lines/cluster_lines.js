// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

COS.ClusterLines = SC.View.extend({
    layout: { centerX: 0, centerY: 0, left: 0, right: 0},
    layerId: "",
    fill: "",
    stroke: "",
    image: "",
    paper: null,
    text: '',

    /**
     * Create nodes - to create nodes simple add a new paper.rect with the cords that you want to position
     * your line. ie - paper.rect(x,y,height,width)
     * add attr to give it a color using fill, combine att with rect to build svg
     * paper.rect().attr('fill', 'fff')
     */
    didCreateLayer: function() {
        var paper = Raphael(0, 0, window.screen.width, window.screen.height); //build canvas
        var line = paper.rect(540, 220, 10, 90).attr("fill", "#666666");
        this.set('paper', paper);


        //rect is 15 less the line
        var leftBox = 525;
        var heightBox = 200;
        var lineLeft = 540;
        var lineYpos = 220;
        var lineHeight = 90;
        var i = 0;
        var b = 0;
        //go up
        for (i; i < 5; i++) {
            paper.rect(lineLeft, lineYpos, 10, lineHeight).attr("fill", "#666666");
            paper.rect(leftBox, heightBox, 40, 40).data("i", i).attr("fill", "#6fee6f").mousemove(function(e) {
                var content = Nodegraph.utillitiesController.content.objectAt(this.data("i"));
                Nodegraph.utillitieSelectionController.set('content', content);
                var tip = SC.$('#tip');
                tip.css("left", e.clientX - 250).css("top", e.clientY).css('visibility', 'visible');
                tip.html(content.get('name'));
            }).mouseout(function(e) {
                    var tip = SC.$('#tip');
                    tip.css('visibility', 'hidden');
                });

            leftBox += 50;
            lineLeft += 50;
            lineYpos -= 20;
            heightBox -= 20;
            lineHeight += 20;

        }

        //go down
        for (i; i < 11; i++) {
            paper.rect(lineLeft, lineYpos, 10, lineHeight).attr("fill", "#666666");
            paper.rect(leftBox, heightBox, 40, 40).data("i", i).attr("fill", "#6fee6f").mousemove(function(e) {
                var content = Nodegraph.utillitiesController.content.objectAt(this.data("i"));
                Nodegraph.utillitieSelectionController.set('content', content);
                var tip = SC.$('#tip');
                tip.css("left", e.clientX - 250).css("top", e.clientY).css('visibility', 'visible');
                tip.html(content.get('name'));
            }).mouseout(function(e) {
                    var tip = SC.$('#tip');
                    tip.css('visibility', 'hidden');
                });

            leftBox += 50;
            lineLeft += 50;
            lineYpos += 20;
            heightBox += 20;
            lineHeight -= 20;

        }

        //upside down up
        var bottomLeftBox = 525;
        var bottomHeightBox = 405;

        var bottomLineLeft = 540;
        var bottomLineYpos = 345;
        var bottomLineHeight = 90;

        for (i; i < 16; i++) {
            paper.rect(bottomLineLeft, bottomLineYpos, 10, bottomLineHeight).attr("fill", "#666666");
            paper.rect(bottomLeftBox, bottomHeightBox, 40, 40).data("i", i).attr("fill", "#6fee6f").mousemove(function(e) {
                var content = Nodegraph.utillitiesController.content.objectAt(this.data("i"));
                Nodegraph.utillitieSelectionController.set('content', content);
                var tip = SC.$('#tip');
                tip.css("left", e.clientX - 250).css("top", e.clientY).css('visibility', 'visible');
                tip.html(content.get('name'));
            }).mouseout(function(e) {
                    var tip = SC.$('#tip');
                    tip.css('visibility', 'hidden');
                });

            bottomLineLeft += 50;
            bottomLineHeight += 20;

            bottomLeftBox += 50;
            bottomHeightBox += 20;

        }

        for (i; i < 22; i++) {
            paper.rect(bottomLineLeft, bottomLineYpos, 10, bottomLineHeight).attr("fill", "#666666");
            paper.rect(bottomLeftBox, bottomHeightBox, 40, 40).data("i", i).attr("fill", "#6fee6f").mousemove(function(e) {
                var content = Nodegraph.utillitiesController.content.objectAt(this.data("i"));
                Nodegraph.utillitieSelectionController.set('content', content);
                var tip = SC.$('#tip');
                tip.css("left", e.clientX - 250).css("top", e.clientY).css('visibility', 'visible');
                tip.html(content.get('name'));
            }).mouseout(function(e) {
                    var tip = SC.$('#tip');
                    tip.css('visibility', 'hidden');
                });

            bottomLineLeft += 50;
            bottomLineHeight -= 20;

            bottomLeftBox += 50;
            bottomHeightBox -= 20;

        }

    }
});