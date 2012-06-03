COS.RaphaelView = SC.View.extend({
    render: function(context) {

    },

    didCreateLayer: function() {
        var paper = Raphael(10, 50, 320, 200);
        var circle = paper.circle(50, 40, 10);
        circle.attr("fill", "#f00");
        circle.attr("stroke", "#fff");
        this.draw();
    },

    draw: function() {

    },

    mouseEntered:function(evt) {
        /**
         * setup the glow effect
         * @param {Hash}
            */
        var glow = {width:3, fill:true, opacity:0, offsetx:0,offsety:0, color:'#454B54'};

        /**
         * add them to private to be removed later
         */
        this._text = this.paper.text(15, 32, this.get('text'));
        this._glow = this.paper.bottom.glow(glow);
        return YES;
    },

    mouseExited:function(evt) {
        this._glow.remove();
        this._text.remove();
        return YES;
    }

});