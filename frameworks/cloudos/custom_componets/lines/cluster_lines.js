// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

COS.ClusterLines = SC.View.extend({
/** @scope COS.ClusterLines.prototype */
  layout: { top: 0, left: 0, bottom: 0, right: 0 },
  childViews: ['utilityLineMiddle', 'utilityLineLeftOne', 'utilityLineLeftTwo', 'utilityLineLeftThree', 'utilityLineRightOne', 'utilityLineRightTwo', 'utilityLineRightThree', 'utilityLineRightCorner', 'utilityLineRightCornerTwo', 'utilityLineRightCornerThree', 'utilityLineRightCornerFour', 'utilityLineRightBottomCorner', 'utilityLineRightBottomCornerTwo', 'utilityLineRightBottomCornerThree', 'utilityLineRightBottomCornerFour', 'utilityLineLeftCorner', 'utilityLineLeftCornerTwo', 'utilityLineLeftCornerThree', 'utilityLineLeftCornerFour', 'utilityLineLeftBottomCorner', 'utilityLineLeftBottomCornerTwo', 'utilityLineLeftBottomCornerThree', 'utilityLineLeftBottomCornerFour' ],
  
  /* Middle */
  utilityLineMiddle: SC.View.design({
    backgroundColor: "gray",
    layout: { centerX: 0, centerY: 0, height: 350, width: 5},
  }),
  
  /* Left */
  utilityLineLeftOne: SC.View.design({
    backgroundColor: "gray",
    layout: { centerX: -50, centerY: 0, height: 300, width: 5},
  }),
  
  utilityLineLeftTwo: SC.View.design({
    backgroundColor: "gray",
    layout: { centerX: -100, centerY: 0, height: 250, width: 5},
  }),
  
  utilityLineLeftThree: SC.View.design({
    backgroundColor: "gray",
    layout: { centerX: -150, centerY: 0, height: 200, width: 5},
  }),
  
  /* Right */
  utilityLineRightOne: SC.View.design({
    backgroundColor: "gray",
    layout: { centerX: 50, centerY: 0, height: 300, width: 5},
  }),
  
  utilityLineRightTwo: SC.View.design({
    backgroundColor: "gray",
    layout: { centerX: 100, centerY: 0, height: 250, width: 5},
  }),
  
  utilityLineRightThree: SC.View.design({
    backgroundColor: "gray",
    layout: { centerX: 150, centerY: 0, height: 200, width: 5},
  }),
  
  /* Top Right Slanted */
  utilityLineRightCorner: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_one'],
    layout: { centerX: 190, centerY: -50, height: 100, width: 5},
  }),  
  
  utilityLineRightCornerTwo: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_two'],
    layout: { centerX: 230, centerY: -50, height: 100, width: 5},
  }),
  
  utilityLineRightCornerThree: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_three'],
    layout: { centerX: 230, centerY: -28, height: 150, width: 5},
  }),
  
  utilityLineRightCornerFour: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_four'],
    layout: { centerX: 230, centerY: -15, height: 150, width: 5},
  }),
  
  /* Bottom Right Slanted */
  utilityLineRightBottomCorner: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_bottom_right_one'],
    layout: { centerX: 190, centerY: 50, height: 100, width: 5},
  }),  
  
  utilityLineRightBottomCornerTwo: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_bottom_right_two'],
    layout: { centerX: 230, centerY: 50, height: 100, width: 5},
  }),
  
  utilityLineRightBottomCornerThree: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_bottom_right_three'],
    layout: { centerX: 230, centerY: 28, height: 150, width: 5},
  }),
  
  utilityLineRightBottomCornerFour: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_bottom_right_four'],
    layout: { centerX: 230, centerY: 15, height: 150, width: 5},
  }),
  
  /* Top Left Slanted */
  utilityLineLeftCorner: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_left_one'],
    layout: { centerX: -190, centerY: -50, height: 100, width: 5},
  }),  
  
  utilityLineLeftCornerTwo: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_left_two'],
    layout: { centerX: -230, centerY: -50, height: 100, width: 5},
  }),
  
  utilityLineLeftCornerThree: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_left_three'],
    layout: { centerX: -230, centerY: -28, height: 150, width: 5},
  }),
  
  utilityLineLeftCornerFour: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_left_four'],
    layout: { centerX: -230, centerY: -15, height: 150, width: 5},
  }),
  
  /* Bottom Left Slanted */
  utilityLineLeftBottomCorner: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_bottom_left_one'],
    layout: { centerX: -190, centerY: 50, height: 100, width: 5},
  }),  
  
  utilityLineLeftBottomCornerTwo: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_bottom_left_two'],
    layout: { centerX: -230, centerY: 50, height: 100, width: 5},
  }),
 
  utilityLineLeftBottomCornerThree: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_bottom_left_three'],
    layout: { centerX: -230, centerY: 28, height: 150, width: 5},
  }),
  
  utilityLineLeftBottomCornerFour: SC.View.design({
    backgroundColor: "gray",
    classNames: ['slanted_bottom_left_four'],
    layout: { centerX: -230, centerY: 15, height: 150, width: 5},
  }),
  
});