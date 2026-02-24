(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kslack-core.js', './kotlin-kotlin-stdlib.js', './kslack-stream.js', './ktor-ktor-client-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kslack-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kslack-stream.js'), require('./ktor-ktor-client-core.js'));
  else {
    if (typeof globalThis['kslack-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kslack:all'. Its dependency 'kslack-core' was not found. Please, check whether 'kslack-core' is loaded prior to 'work.socialhub.kslack:all'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kslack:all'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'work.socialhub.kslack:all'.");
    }
    if (typeof globalThis['kslack-stream'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kslack:all'. Its dependency 'kslack-stream' was not found. Please, check whether 'kslack-stream' is loaded prior to 'work.socialhub.kslack:all'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kslack:all'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'work.socialhub.kslack:all'.");
    }
    globalThis['work.socialhub.kslack:all'] = factory(typeof globalThis['work.socialhub.kslack:all'] === 'undefined' ? {} : globalThis['work.socialhub.kslack:all'], globalThis['kslack-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kslack-stream'], globalThis['ktor-ktor-client-core']);
  }
}(function (_, kotlin_work_socialhub_kslack_core, kotlin_kotlin, kotlin_work_socialhub_kslack_stream, kotlin_io_ktor_ktor_client_core) {
  'use strict';
  //region block: imports
  var SlackFactory_instance = kotlin_work_socialhub_kslack_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.qb;
  var initMetadataForObject = kotlin_kotlin.$_$.xa;
  var defineProp = kotlin_kotlin.$_$.ka;
  var VOID = kotlin_kotlin.$_$.b;
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
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$kslack = $work$socialhub.kslack || ($work$socialhub.kslack = {});
    defineProp($work$socialhub$kslack, 'KslackFactory', KslackFactory_getInstance, VOID, true);
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_work_socialhub_kslack_stream.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  kotlin_work_socialhub_kslack_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=kslack-all.js.map
