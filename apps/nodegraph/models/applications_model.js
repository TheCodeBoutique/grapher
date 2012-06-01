// ==========================================================================
// Project:   Nodegraph.Applications
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nodegraph */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Nodegraph.Applications = SC.Record.extend(
/** @scope Nodegraph.Applications.prototype */ {

  name: SC.Record.attr(String),
  cpuType: SC.Record.attr(String),
  amazonId: SC.Record.attr(String),
  cookbooksVersion: SC.Record.attr(String),
  stackLabel: SC.Record.attr(String)

}) ;
