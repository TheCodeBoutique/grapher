// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©1256-2011 Strobe Inc. and contributors.
//            Portions ©1258-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

COS.ClusterView = SC.View.extend({
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
        this.set('paper', paper);


        //rect is 15 less the line
        var boxLeftPosition = 570;
        var boxYPosition = 280;
        var lineLeftPostion = 585;
        var lineYPosition = 300;
        var lineHeight = 50;
        var i = 0;
        var b = 0;

        // This is the logic that makes the Top Nodes go Up //
        for (i; i < 5; i++) {
            paper.rect(lineLeftPostion, lineYPosition, 5, lineHeight).attr("fill", "#666666");
            paper.rect(boxLeftPosition, boxYPosition, 35, 35).data("i", i).attr("fill", "#6fee6f").mousemove(function(e) {
                var content = Nodegraph.utillitiesController.content.objectAt(this.data("i"));
                Nodegraph.utillitieSelectionController.set('content', content);
                var tip = SC.$('#tip');
                tip.css("left", e.clientX - 320).css("top", e.clientY - 125).css('visibility', 'visible');
                tip.html(content.get('name'));
            }).mouseout(function(e) {
                    var tip = SC.$('#tip');
                    tip.css('visibility', 'hidden');
                });

            boxLeftPosition += 50;
            lineLeftPostion += 50;
            lineYPosition -= 15;
            boxYPosition -= 15;
            lineHeight += 15;

        }

        // This is the logic that makes the Top Nodes go Down //
        for (i; i < 11; i++) {
            paper.rect(lineLeftPostion, lineYPosition, 5, lineHeight).attr("fill", "#666666");
            paper.rect(boxLeftPosition, boxYPosition, 35, 35).data("i", i).attr("fill", "#6fee6f").mousemove(function(e) {
                var content = Nodegraph.utillitiesController.content.objectAt(this.data("i"));
                Nodegraph.utillitieSelectionController.set('content', content);
                var tip = SC.$('#tip');
                tip.css("left", e.clientX - 320).css("top", e.clientY - 125).css('visibility', 'visible');
                tip.html(content.get('name'));
            }).mouseout(function(e) {
                    var tip = SC.$('#tip');
                    tip.css('visibility', 'hidden');
                });

            boxLeftPosition += 50;
            lineLeftPostion += 50;
            lineYPosition += 15;
            boxYPosition += 15;
            lineHeight -= 15;

        }

        // This is the logic that makes the Bottom Nodes go Up //
        var boxLowerLeftPosition = 570;
        var boxLowerYPosition = 410;
        var bottomlineLeftPostion = 585;
        var bottomLineYPosition = 375;
        var bottomLineHeight = 50;

        for (i; i < 16; i++) {
            paper.rect(bottomlineLeftPostion, bottomLineYPosition, 5, bottomLineHeight).attr("fill", "#666666");
            paper.rect(boxLowerLeftPosition, boxLowerYPosition, 35, 35).data("i", i).attr("fill", "#6fee6f").mousemove(function(e) {
                var content = Nodegraph.utillitiesController.content.objectAt(this.data("i"));
                Nodegraph.utillitieSelectionController.set('content', content);
                var tip = SC.$('#tip');
                tip.css("left", e.clientX - 320).css("top", e.clientY - 125).css('visibility', 'visible');
                tip.html(content.get('name'));
            }).mouseout(function(e) {
                    var tip = SC.$('#tip');
                    tip.css('visibility', 'hidden');
                });

            bottomlineLeftPostion += 50;
            bottomLineHeight += 15;
            boxLowerLeftPosition += 50;
            boxLowerYPosition += 15;

        }

        // This is the logic that makes the Bottom Nodes go Down //
        for (i; i < 22; i++) {
            paper.rect(bottomlineLeftPostion, bottomLineYPosition, 5, bottomLineHeight).attr("fill", "#666666");
            paper.rect(boxLowerLeftPosition, boxLowerYPosition, 35, 35).data("i", i).attr("fill", "#6fee6f").mousemove(function(e) {
                var content = Nodegraph.utillitiesController.content.objectAt(this.data("i"));
                Nodegraph.utillitieSelectionController.set('content', content);
                var tip = SC.$('#tip');
                tip.css("left", e.clientX - 320).css("top", e.clientY - 125).css('visibility', 'visible');
                tip.html(content.get('name'));
            }).mouseout(function(e) {
                    var tip = SC.$('#tip');
                    tip.css('visibility', 'hidden');
                });

            bottomlineLeftPostion += 50;
            bottomLineHeight -= 15;
            boxLowerLeftPosition += 50;
            boxLowerYPosition -= 15;

        }


        // This is the logic that makes the Bottom Left Application Nodes //
        var circleLineLeft = 570;
        var circleYPosition = 380;
        var startingAngle = 15;
        var circleRadius = 20;
        var startingCircleXpos = 525;
        var startingCircleYpos = 520;
        var circleLinesBottomLeftLength = 140
        var c = 0;

        for (c; c < 4; c++) {
            paper.rect(circleLineLeft, circleYPosition, 5, circleLinesBottomLeftLength).attr("fill", "#CCCCCC").rotate(startingAngle, circleLineLeft, circleYPosition);
            startingAngle += 20;

            paper.circle(startingCircleXpos, startingCircleYpos, circleRadius).data("i", c).attr("fill", "#b4ffb4").mousemove(function(e) {
                var content = Nodegraph.applicationsController.content.objectAt(this.data("i"));
                Nodegraph.utillitieSelectionController.set('content', content);
                var tip = SC.$('#tip');
                tip.css("left", e.clientX - 320).css("top", e.clientY - 125).css('visibility', 'visible');
                tip.html(content.get('name'));
            })

                .mouseout(function(e) {
                    var tip = SC.$('#tip');
                    tip.css('visibility', 'hidden');
                });

            startingCircleXpos -= 15;
            startingCircleYpos -= 40;
            circleLinesBottomLeftLength -= 20;
        }

        // This is the logic that makes the Top Left Application Nodes //
        var circleLineTopLeft = 570;
        var circleYTopPosition = 320;
        var startingTopAngle = 160;
        var circleRadius = 20;
        var startingCircleXpos = 520;
        var startingCircleYpos = 220;
        var circleLinesBottomLeftLength = 140;

        for (c; c < 8; c++) {
            paper.rect(circleLineTopLeft, circleYTopPosition, 5, circleLinesBottomLeftLength).attr("fill", "#CCCCCC").rotate(startingTopAngle, circleLineTopLeft, circleYTopPosition);
            startingTopAngle += 20;

            paper.circle(startingCircleXpos, startingCircleYpos, circleRadius).data("i", c).attr("fill", "#b4ffb4").mousemove(function(e) {
                var content = Nodegraph.applicationsController.content.objectAt(this.data("i"));
                Nodegraph.utillitieSelectionController.set('content', content);
                var tip = SC.$('#tip');
                tip.css("left", e.clientX - 320).css("top", e.clientY - 125).css('visibility', 'visible');
                tip.html(content.get('name'));
            })

                .mouseout(function(e) {
                    var tip = SC.$('#tip');
                    tip.css('visibility', 'hidden');
                });

            startingCircleXpos -= 15;
            startingCircleYpos += 43;
            circleLinesBottomLeftLength -= 20;
            startingTopAngle -= 41;
        }

        this._bottomRightSection(paper, c);
        this._topRightSection(paper, c);

    },

    _topRightSection: function(paper, c) {
        // This is the logic that makes the Bottom Left Application Nodes //
        var circleLineLeft = 1110;
        var circleYPosition = 390;
        var startingAngle = 185;
        var circleRadius = 20;
        var startingCircleXpos = 1125;
        var startingCircleYpos = 545;
        var circleLinesBottomLeftLength = 140;
        for (c = 0; c < 4; c++) {
            var bigCircles = paper.set();
            bigCircles.push(
                paper.rect(1110, 350, 5, 140).attr("fill", "#CCCCCC"),
                paper.circle(1112, 495, 20).data("i", c).attr({"fill": "#b4ffb4", cursor: "pointer"}).mousemove(function(e) {
                    var content = Nodegraph.applicationsController.content.objectAt(this.data("i"));
                    Nodegraph.utillitieSelectionController.set('content', content);
                    var tip = SC.$('#tip');
                    tip.css("left", e.clientX - 320).css("top", e.clientY - 125).css('visibility', 'visible');
                    tip.html(content.get('name'));
                }).mouseout(function(e) {
                        var tip = SC.$('#tip');
                        tip.css('visibility', 'hidden');
                    })
            )
            bigCircles.rotate(startingAngle, 1110, 350);
            startingAngle += 25;
        }

    },

    _bottomRightSection: function(paper, c) {

        // This is the logic that makes the Bottom Left Application Nodes //
        var circleLineLeft = 1110;
        var circleYPosition = 390;
        var startingAngle = 295;
        var circleRadius = 20;
        var startingCircleXpos = 1125;
        var startingCircleYpos = 545;
        var circleLinesBottomLeftLength = 140
        for (c = 0; c < 4; c++) {
            var bigCircles = paper.set();
            bigCircles.push(
                paper.rect(1110, 390, 5, 140).attr("fill", "#CCCCCC"),
                paper.circle(1115, 545, 20).data("i", c).attr({"fill": "#b4ffb4", cursor: "pointer"}).mousemove(function(e) {
                    var content = Nodegraph.applicationsController.content.objectAt(this.data("i"));
                    Nodegraph.utillitieSelectionController.set('content', content);
                    var tip = SC.$('#tip');
                    tip.css("left", e.clientX - 320).css("top", e.clientY - 125).css('visibility', 'visible');
                    tip.html(content.get('name'));
                }).mouseout(function(e) {
                        var tip = SC.$('#tip');
                        tip.css('visibility', 'hidden');
                    })
            );
            bigCircles.rotate(startingAngle, circleLineLeft, circleYPosition);
            startingAngle += 20;
        }

    }
});
