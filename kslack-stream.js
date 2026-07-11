(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kslack-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kslack-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kslack-core'] === 'undefined') {
      throw new Error("Error loading module 'kslack-stream'. Its dependency 'kslack-core' was not found. Please, check whether 'kslack-core' is loaded prior to 'kslack-stream'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kslack-stream'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kslack-stream'.");
    }
    globalThis['kslack-stream'] = factory(typeof globalThis['kslack-stream'] === 'undefined' ? {} : globalThis['kslack-stream'], globalThis['kslack-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_work_socialhub_kslack_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var SlackStreamImpl = kotlin_work_socialhub_kslack_core.$_$.b;
  var protoOf = kotlin_kotlin.$_$.ac;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForObject = kotlin_kotlin.$_$.ib;
  var defineProp = kotlin_kotlin.$_$.ua;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(SlackStreamFactory, 'SlackStreamFactory');
  //endregion
  function SlackStreamFactory() {
  }
  protoOf(SlackStreamFactory).efq = function (token) {
    return new SlackStreamImpl(token);
  };
  protoOf(SlackStreamFactory).instance = function (token, $super) {
    token = token === VOID ? null : token;
    return $super === VOID ? this.efq(token) : $super.efq.call(this, token);
  };
  var SlackStreamFactory_instance;
  function SlackStreamFactory_getInstance() {
    return SlackStreamFactory_instance;
  }
  //region block: init
  SlackStreamFactory_instance = new SlackStreamFactory();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var work = _.work || (_.work = {});
    var socialhub = work.socialhub || (work.socialhub = {});
    var kslack = socialhub.kslack || (socialhub.kslack = {});
    var stream = kslack.stream || (kslack.stream = {});
    defineProp(stream, 'SlackStreamFactory', SlackStreamFactory_getInstance, VOID, true);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=kslack-stream.js.map
