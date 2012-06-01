// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

COS.CanvasView = SC.View.extend({
    /** @scope COS.ClusterLines.prototype */
    layout: { top: 0, left: 0, bottom: 0, right: 0 },
    render: function(context, firstTime) {
        var canvas = this.get('canvas');
        if (!canvas) {
            var f = this.get('frame');
            context.push('<canvas width="%@" height="%@"></canvas>'.fmt(f.width, f.height));
            this.invokeLast(this.draw); // TODO: This would be more proper in didCreateLayer.
            return;
        } else {
            var w = this.$().width(), h = this.$().height(); // Using frame would probably be faster here, but its width seems to be off by two pixels sometimes.
            if (canvas.width !== w) canvas.width = w;
            if (canvas.height !== h) canvas.height = h;
        }
        // Do the real business.
        this.draw();
    },

    // Convenience method.
    canvas: function() {
        return this.$('canvas')[0];
    }.property(),

    // Override this function to draw your drawings.
    draw: function() {


    }

});