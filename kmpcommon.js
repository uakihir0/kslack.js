(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kmpcommon'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kmpcommon'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'kmpcommon'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'kmpcommon'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kmpcommon'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kmpcommon'.");
    }
    globalThis.kmpcommon = factory(typeof kmpcommon === 'undefined' ? {} : kmpcommon, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ng;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var to = kotlin_kotlin.$_$.rg;
  var Unit_instance = kotlin_kotlin.$_$.w4;
  var toMap = kotlin_kotlin.$_$.y7;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.p5;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var toString = kotlin_kotlin.$_$.tb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var get_booleanOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var get_double = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var get_doubleOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var get_float = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var get_floatOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var get_long = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var get_longOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var get_intOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var protoOf = kotlin_kotlin.$_$.qb;
  var JsonDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var isInterface = kotlin_kotlin.$_$.gb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var getKClassFromExpression = kotlin_kotlin.$_$.hc;
  var println = kotlin_kotlin.$_$.b9;
  var Enum = kotlin_kotlin.$_$.df;
  var Long = kotlin_kotlin.$_$.if;
  var THROW_CCE = kotlin_kotlin.$_$.of;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var initMetadataForObject = kotlin_kotlin.$_$.xa;
  var VOID = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(AnySerializer, 'AnySerializer', VOID, VOID, [KSerializer]);
  //endregion
  function toAny($this, _this__u8e3s4) {
    if (_this__u8e3s4 instanceof JsonPrimitive) {
      var tmp;
      if (_this__u8e3s4.y19()) {
        tmp = _this__u8e3s4.z19();
      } else if (!(get_intOrNull(_this__u8e3s4) == null)) {
        tmp = get_int(_this__u8e3s4);
      } else if (!(get_longOrNull(_this__u8e3s4) == null)) {
        tmp = get_long(_this__u8e3s4);
      } else if (!(get_floatOrNull(_this__u8e3s4) == null)) {
        tmp = get_float(_this__u8e3s4);
      } else if (!(get_doubleOrNull(_this__u8e3s4) == null)) {
        tmp = get_double(_this__u8e3s4);
      } else if (!(get_booleanOrNull(_this__u8e3s4) == null)) {
        tmp = get_boolean(_this__u8e3s4);
      } else {
        throw IllegalStateException_init_$Create$("Can't deserialize unknown type: " + toString(_this__u8e3s4));
      }
      return tmp;
    } else {
      if (_this__u8e3s4 instanceof JsonArray) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
        var _iterator__ex2g4s = _this__u8e3s4.t();
        while (_iterator__ex2g4s.u()) {
          var item = _iterator__ex2g4s.v();
          var tmp$ret$0 = toAny(AnySerializer_getInstance(), item);
          destination.c1(tmp$ret$0);
        }
        return destination;
      } else {
        if (_this__u8e3s4 instanceof JsonObject) {
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_0 = ArrayList_init_$Create$(_this__u8e3s4.d1());
          // Inline function 'kotlin.collections.iterator' call
          var _iterator__ex2g4s_0 = _this__u8e3s4.l1().t();
          while (_iterator__ex2g4s_0.u()) {
            var item_0 = _iterator__ex2g4s_0.v();
            var tmp$ret$4 = to(item_0.m1(), toAny(AnySerializer_getInstance(), item_0.n1()));
            destination_0.c1(tmp$ret$4);
          }
          return toMap(destination_0);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  function AnySerializer$additionalSerializer$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return false;
  }
  function AnySerializer() {
    AnySerializer_instance = this;
    var tmp = this;
    tmp.i4w_1 = AnySerializer$additionalSerializer$lambda;
    this.j4w_1 = buildClassSerialDescriptor('Any', []);
  }
  protoOf(AnySerializer).bn = function () {
    return this.j4w_1;
  };
  protoOf(AnySerializer).dn = function (decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!isInterface(decoder, JsonDecoder)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var element = decoder.x19();
    return toAny(this, element);
  };
  protoOf(AnySerializer).k4w = function (encoder, value) {
    if (typeof value === 'number') {
      encoder.cr(value);
    } else {
      if (value instanceof Long) {
        encoder.dr(value);
      } else {
        if (typeof value === 'number') {
          encoder.br(value);
        } else {
          if (typeof value === 'number') {
            encoder.er(value);
          } else {
            if (typeof value === 'number') {
              encoder.fr(value);
            } else {
              if (typeof value === 'string') {
                encoder.hr(value);
              } else {
                if (typeof value === 'boolean') {
                  encoder.zq(value);
                } else {
                  if (value instanceof Enum) {
                    encoder.hr(toString(this));
                  } else {
                    if (!this.i4w_1(encoder, value)) {
                      println("Can't serialize unknown type: " + toString(getKClassFromExpression(value)));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  protoOf(AnySerializer).cn = function (encoder, value) {
    return this.k4w(encoder, !(value == null) ? value : THROW_CCE());
  };
  var AnySerializer_instance;
  function AnySerializer_getInstance() {
    if (AnySerializer_instance == null)
      new AnySerializer();
    return AnySerializer_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnySerializer_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kmpcommon.js.map
