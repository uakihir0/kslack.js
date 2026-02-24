(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './ktor-ktor-utils.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./ktor-ktor-utils.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-events'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-events'.");
    }
    globalThis['ktor-ktor-events'] = factory(typeof globalThis['ktor-ktor-events'] === 'undefined' ? {} : globalThis['ktor-ktor-events'], globalThis['ktor-ktor-utils'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_io_ktor_ktor_utils, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var LockFreeLinkedListNode = kotlin_io_ktor_ktor_utils.$_$.f;
  var initMetadataForClass = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.b;
  var CopyOnWriteHashMap = kotlin_io_ktor_ktor_utils.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.of;
  var equals = kotlin_kotlin.$_$.la;
  var addSuppressed = kotlin_kotlin.$_$.bg;
  var Unit_instance = kotlin_kotlin.$_$.w4;
  var protoOf = kotlin_kotlin.$_$.qb;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(HandlerRegistration, 'HandlerRegistration', VOID, LockFreeLinkedListNode);
  initMetadataForClass(Events, 'Events', Events);
  initMetadataForClass(EventDefinition, 'EventDefinition', EventDefinition);
  //endregion
  function HandlerRegistration() {
  }
  function Events() {
    this.r35_1 = new CopyOnWriteHashMap();
  }
  protoOf(Events).s35 = function (definition, value) {
    var exception = null;
    var tmp0_safe_receiver = this.r35_1.p2n(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListHead.forEach' call
      var tmp = tmp0_safe_receiver.h20();
      var cur = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      while (!equals(cur, tmp0_safe_receiver)) {
        if (cur instanceof HandlerRegistration) {
          var registration = cur;
          try {
            var tmp_0 = registration.u35_1;
            (typeof tmp_0 === 'function' ? tmp_0 : THROW_CCE())(value);
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              var tmp0_safe_receiver_0 = exception;
              var tmp_1;
              if (tmp0_safe_receiver_0 == null) {
                tmp_1 = null;
              } else {
                addSuppressed(tmp0_safe_receiver_0, e);
                tmp_1 = Unit_instance;
              }
              if (tmp_1 == null) {
                // Inline function 'kotlin.run' call
                exception = e;
              }
            } else {
              throw $p;
            }
          }
        }
        cur = cur.n2o();
      }
    }
    var tmp1_safe_receiver = exception;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp1_safe_receiver;
    }
  };
  function EventDefinition() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventDefinition;
  _.$_$.b = Events;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-events.js.map
