// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

COS.ClusterLines = COS.CanvasView.extend({
    /** @scope COS.ClusterLines.prototype */
    layout: { top: 0, left: 0, bottom: 0, right: 0 },
    yPos: 300,
    box1PosY: 120,
    box2PosY: 432,
    draw: function() {
        // Get canvas.  Needed to draw on.
        var left = 290;
        var height = -50;
        var yPos = this.get('yPos');
        var boxLeft = 268;
        var boxPosY = 216;

        for (var i = 0; i < 8; i++) {
            var canvas = this.get('canvas');
            if (!canvas) return;

            console.log("boxLeft",boxLeft);
            console.log("left",boxLeft);


            if (i >= 4) {
                left = 455;
                boxLeft = 434;
                for (i; i < 8; i++) {

                    height += 40;
                    left += 56;

                    boxLeft += 56;
                    boxPosY += 42;

                    var context = canvas.getContext('2d');
                    context.clearRect(0, 0, 100, 100);
                    context.fillStyle = "#666666";
                    context.fillRect(left, yPos, 5, height);

                    //one box
                    context.beginPath();
                    context.rect(boxLeft, boxPosY, 44, 44);
                    context.fillStyle = '#6fee6f';
                    context.fill();
                    context.lineWidth = 1;
                    context.strokeStyle = '666666';
                    context.stroke();

                    //bottom box
                    context.beginPath();
                    context.rect(boxLeft, boxPosY, 44, 44);
                    context.fillStyle = '#6fee6f';
                    context.fill();
                    context.lineWidth = 1;
                    context.strokeStyle = '666666';
                    context.stroke();
                }
            }


            var context = canvas.getContext('2d');
            context.clearRect(0, 0, 100, 100);
            context.fillStyle = "#666666";
            context.fillRect(left, yPos, 5, height);

            //one box
            context.beginPath();
            context.rect(boxLeft, boxPosY, 44, 44);
            context.fillStyle = '#6fee6f';
            context.fill();
            context.lineWidth = 1;
            context.strokeStyle = '666666';
            context.stroke();

            //bottom box
            context.beginPath();
            context.rect(boxLeft, boxPosY, 44, 44);
            context.fillStyle = '#6fee6f';
            context.fill();
            context.lineWidth = 1;
            context.strokeStyle = '666666';
            context.stroke();


            boxPosY -= 42;
            left += 56;
            height -= 40;

            boxLeft += 56;
        }

        //draw angles
        context.clearRect(0, 0, 100, 100);
        context.fillStyle = "#cccccc";
        context.rotate(Math.PI / 4);
        context.fillRect(710, -290, 5, -125);

        //circle
        context.beginPath();
        context.arc(710, -415,  20, 0 , 2 * Math.PI, false);
        context.closePath();
        context.lineWidth = 1;
        context.fillStyle = "#6fee6f";
        context.fill();
        context.strokeStyle = "666666";
        context.stroke();


    }

});