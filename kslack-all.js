(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kslack-core.js', './kotlin-kotlin-stdlib.js', './ktor-ktor-client-core.js', './kslack-stream.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kslack-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-client-core.js'), require('./kslack-stream.js'));
  else {
    if (typeof globalThis['kslack-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kslack:all'. Its dependency 'kslack-core' was not found. Please, check whether 'kslack-core' is loaded prior to 'work.socialhub.kslack:all'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kslack:all'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'work.socialhub.kslack:all'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kslack:all'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'work.socialhub.kslack:all'.");
    }
    if (typeof globalThis['kslack-stream'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kslack:all'. Its dependency 'kslack-stream' was not found. Please, check whether 'kslack-stream' is loaded prior to 'work.socialhub.kslack:all'.");
    }
    globalThis['work.socialhub.kslack:all'] = factory(typeof globalThis['work.socialhub.kslack:all'] === 'undefined' ? {} : globalThis['work.socialhub.kslack:all'], globalThis['kslack-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-client-core'], globalThis['kslack-stream']);
  }
}(function (_, kotlin_work_socialhub_kslack_core, kotlin_kotlin, kotlin_io_ktor_ktor_client_core, kotlin_work_socialhub_kslack_stream) {
  'use strict';
  //region block: imports
  var SlackFactory_instance = kotlin_work_socialhub_kslack_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.ac;
  var initMetadataForObject = kotlin_kotlin.$_$.ib;
  var defineProp = kotlin_kotlin.$_$.ua;
  var VOID = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(KslackFactory, 'KslackFactory');
  //endregion
  function KslackFactory() {
  }
  protoOf(KslackFactory).instance = function () {
    return SlackFactory_instance.createInstance();
  };
  var KslackFactory_instance;
  function KslackFactory_getInstance() {
    return KslackFactory_instance;
  }
  //region block: init
  KslackFactory_instance = new KslackFactory();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var work = _.work || (_.work = {});
    var socialhub = work.socialhub || (work.socialhub = {});
    var kslack = socialhub.kslack || (socialhub.kslack = {});
    defineProp(kslack, 'KslackFactory', KslackFactory_getInstance, VOID, true);
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  kotlin_work_socialhub_kslack_core.$jsExportAll$(_);
  kotlin_work_socialhub_kslack_stream.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=kslack-all.js.map
