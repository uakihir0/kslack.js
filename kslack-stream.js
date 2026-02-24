(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kslack-stream'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kslack-stream'.");
    }
    globalThis['kslack-stream'] = factory(typeof globalThis['kslack-stream'] === 'undefined' ? {} : globalThis['kslack-stream'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.qb;
  var initMetadataForInterface = kotlin_kotlin.$_$.va;
  var VOID = kotlin_kotlin.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.xa;
  var defineProp = kotlin_kotlin.$_$.ka;
  var initMetadataForClass = kotlin_kotlin.$_$.ra;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SlackStream, 'SlackStream');
  initMetadataForObject(SlackStreamFactory, 'SlackStreamFactory');
  initMetadataForClass(SlackStreamImpl, 'SlackStreamImpl', VOID, VOID, [SlackStream]);
  //endregion
  function SlackStream() {
  }
  function SlackStreamFactory() {
  }
  protoOf(SlackStreamFactory).zm = function (token) {
    return new SlackStreamImpl(token);
  };
  protoOf(SlackStreamFactory).instance = function (token, $super) {
    token = token === VOID ? '' : token;
    return $super === VOID ? this.zm(token) : $super.zm.call(this, token);
  };
  var SlackStreamFactory_instance;
  function SlackStreamFactory_getInstance() {
    return SlackStreamFactory_instance;
  }
  function SlackStreamImpl(token) {
    this.an_1 = token;
  }
  protoOf(SlackStreamImpl).token = function () {
    return this.an_1;
  };
  //region block: init
  SlackStreamFactory_instance = new SlackStreamFactory();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$kslack = $work$socialhub.kslack || ($work$socialhub.kslack = {});
    var $work$socialhub$kslack$stream = $work$socialhub$kslack.stream || ($work$socialhub$kslack.stream = {});
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$kslack = $work$socialhub.kslack || ($work$socialhub.kslack = {});
    var $work$socialhub$kslack$stream = $work$socialhub$kslack.stream || ($work$socialhub$kslack.stream = {});
    defineProp($work$socialhub$kslack$stream, 'SlackStreamFactory', SlackStreamFactory_getInstance, VOID, true);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=kslack-stream.js.map
