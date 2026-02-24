(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-io.js', './kotlinx-atomicfu.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-io.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    globalThis['ktor-ktor-utils'] = factory(typeof globalThis['ktor-ktor-utils'] === 'undefined' ? {} : globalThis['ktor-ktor-utils'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-io'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var protoOf = kotlin_kotlin.$_$.qb;
  var initMetadataForInterface = kotlin_kotlin.$_$.va;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l4;
  var arrayOf = kotlin_kotlin.$_$.cg;
  var createKType = kotlin_kotlin.$_$.gc;
  var Unit_instance = kotlin_kotlin.$_$.w4;
  var VOID = kotlin_kotlin.$_$.b;
  var isBlank = kotlin_kotlin.$_$.ed;
  var toString = kotlin_kotlin.$_$.tb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var getStringHashCode = kotlin_kotlin.$_$.pa;
  var initMetadataForClass = kotlin_kotlin.$_$.ra;
  var THROW_CCE = kotlin_kotlin.$_$.of;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var equals = kotlin_kotlin.$_$.la;
  var hashCode = kotlin_kotlin.$_$.qa;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.f5;
  var KtMutableMap = kotlin_kotlin.$_$.i5;
  var ensureNotNull = kotlin_kotlin.$_$.gg;
  var Entry = kotlin_kotlin.$_$.e5;
  var isInterface = kotlin_kotlin.$_$.gb;
  var toString_0 = kotlin_kotlin.$_$.qg;
  var charArray = kotlin_kotlin.$_$.ea;
  var charCodeAt = kotlin_kotlin.$_$.fa;
  var toString_1 = kotlin_kotlin.$_$.l2;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.m8;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Element = kotlin_kotlin.$_$.v8;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var get_size = kotlin_io_ktor_ktor_io.$_$.a1;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var concatToString = kotlin_kotlin.$_$.rc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.p5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var KtSet = kotlin_kotlin.$_$.k5;
  var KtMutableSet = kotlin_kotlin.$_$.j5;
  var initMetadataForObject = kotlin_kotlin.$_$.xa;
  var Enum = kotlin_kotlin.$_$.df;
  var toList = kotlin_kotlin.$_$.v7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var firstOrNull = kotlin_kotlin.$_$.m6;
  var addAll = kotlin_kotlin.$_$.l5;
  var emptyMap = kotlin_kotlin.$_$.j6;
  var getBooleanHashCode = kotlin_kotlin.$_$.na;
  var equals_0 = kotlin_kotlin.$_$.zc;
  var setOf = kotlin_kotlin.$_$.n7;
  var charSequenceLength = kotlin_kotlin.$_$.ha;
  var charSequenceGet = kotlin_kotlin.$_$.ga;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b1;
  var get_lastIndex = kotlin_kotlin.$_$.jd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.i2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k2;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.lg;
  var Long = kotlin_kotlin.$_$.if;
  var initMetadataForCompanion = kotlin_kotlin.$_$.sa;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var objectCreate = kotlin_kotlin.$_$.pb;
  var equalsLong = kotlin_kotlin.$_$.l9;
  var Comparable = kotlin_kotlin.$_$.ze;
  var enumEntries = kotlin_kotlin.$_$.z8;
  var CoroutineImpl = kotlin_kotlin.$_$.x8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ta;
  var KtMutableList = kotlin_kotlin.$_$.h5;
  var toMutableList = kotlin_kotlin.$_$.z7;
  var ArrayList = kotlin_kotlin.$_$.x4;
  var KMutableProperty1 = kotlin_kotlin.$_$.lc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.oa;
  var emptyList = kotlin_kotlin.$_$.i6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.y6;
  var last = kotlin_kotlin.$_$.a7;
  var mutableListOf = kotlin_kotlin.$_$.f7;
  var anyToString = kotlin_kotlin.$_$.z9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var extendThrowable = kotlin_kotlin.$_$.ma;
  var captureStack = kotlin_kotlin.$_$.ca;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var Companion_instance = kotlin_kotlin.$_$.r4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m2;
  var createFailure = kotlin_kotlin.$_$.fg;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.n2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o2;
  var Continuation = kotlin_kotlin.$_$.r8;
  var intercepted = kotlin_kotlin.$_$.j8;
  var KProperty1 = kotlin_kotlin.$_$.nc;
  var lazy_0 = kotlin_kotlin.$_$.mg;
  var toNumber = kotlin_kotlin.$_$.x9;
  var isNaN_0 = kotlin_kotlin.$_$.kg;
  var numberToLong = kotlin_kotlin.$_$.t9;
  var IllegalStateException = kotlin_kotlin.$_$.hf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.p1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ng;
  //endregion
  //region block: pre-declaration
  function get(key) {
    var tmp0_elvis_lhs = this.e2l(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key.toString());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function set(key, value) {
    this.g2l(key, value);
  }
  initMetadataForInterface(Attributes, 'Attributes');
  initMetadataForClass(AttributeKey, 'AttributeKey');
  initMetadataForClass(CaseInsensitiveMap, 'CaseInsensitiveMap', CaseInsensitiveMap, VOID, [KtMutableMap]);
  initMetadataForClass(Entry_0, 'Entry', VOID, VOID, [Entry]);
  initMetadataForClass(SilentSupervisor$$inlined$CoroutineExceptionHandler$1, VOID, VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  initMetadataForClass(DelegatingMutableSet$iterator$1);
  initMetadataForClass(DelegatingMutableSet, 'DelegatingMutableSet', VOID, VOID, [KtMutableSet]);
  initMetadataForObject(PlatformUtils, 'PlatformUtils');
  initMetadataForClass(Platform, 'Platform');
  initMetadataForObject(Jvm, 'Jvm', VOID, Platform);
  initMetadataForObject(Native, 'Native', VOID, Platform);
  initMetadataForClass(Js, 'Js', VOID, Platform);
  initMetadataForClass(WasmJs, 'WasmJs', VOID, Platform);
  initMetadataForClass(JsPlatform, 'JsPlatform', VOID, Enum);
  initMetadataForClass(StringValuesBuilderImpl, 'StringValuesBuilderImpl', StringValuesBuilderImpl);
  function get_0(name) {
    var tmp0_safe_receiver = this.z2m(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.t2m().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var k = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.n1();
      body(k, v);
    }
    return Unit_instance;
  }
  initMetadataForInterface(StringValues, 'StringValues');
  initMetadataForClass(StringValuesImpl, 'StringValuesImpl', StringValuesImpl, VOID, [StringValues]);
  initMetadataForClass(StringValuesSingleImpl$entries$1, VOID, VOID, VOID, [Entry]);
  initMetadataForClass(StringValuesSingleImpl, 'StringValuesSingleImpl', VOID, VOID, [StringValues]);
  initMetadataForClass(CaseInsensitiveString, 'CaseInsensitiveString');
  initMetadataForClass(ChannelIOException, 'ChannelIOException', VOID, IOException);
  initMetadataForClass(CopyOnWriteHashMap, 'CopyOnWriteHashMap', CopyOnWriteHashMap);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GMTDate, 'GMTDate', VOID, VOID, [Comparable], VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(WeekDay, 'WeekDay', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Month, 'Month', VOID, Enum);
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode');
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(Removed, 'Removed');
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForCoroutine($proceedLoopCOROUTINE$, CoroutineImpl);
  initMetadataForClass(PipelineContext, 'PipelineContext', VOID, VOID, [CoroutineScope], [1, 0]);
  initMetadataForClass(DebugPipelineContext, 'DebugPipelineContext', VOID, PipelineContext, VOID, [1, 0]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(PhaseContent, 'PhaseContent');
  initMetadataForClass(Pipeline, 'Pipeline', VOID, VOID, VOID, [2]);
  initMetadataForClass(PipelinePhase, 'PipelinePhase');
  initMetadataForClass(InvalidPhaseException, 'InvalidPhaseException', VOID, Error);
  initMetadataForClass(PipelinePhaseRelation, 'PipelinePhaseRelation');
  initMetadataForClass(After, 'After', VOID, PipelinePhaseRelation);
  initMetadataForClass(Before, 'Before', VOID, PipelinePhaseRelation);
  initMetadataForObject(Last, 'Last', VOID, PipelinePhaseRelation);
  initMetadataForClass(SuspendFunctionGun$continuation$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForClass(SuspendFunctionGun, 'SuspendFunctionGun', VOID, PipelineContext, VOID, [0, 1]);
  initMetadataForClass(TypeInfo, 'TypeInfo');
  initMetadataForClass(InvalidTimestampException, 'InvalidTimestampException', VOID, IllegalStateException);
  initMetadataForClass(AttributesJs, 'AttributesJs', AttributesJs, VOID, [Attributes]);
  initMetadataForClass(KtorSimpleLogger$1);
  initMetadataForClass(LogLevel, 'LogLevel', VOID, Enum);
  //endregion
  function Attributes() {
  }
  function AttributeKey(name, type) {
    var tmp;
    if (type === VOID) {
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().hb();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().hb(), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$0 = tmp_1;
      tmp = new TypeInfo(tmp_0, tmp$ret$0);
    } else {
      tmp = type;
    }
    type = tmp;
    this.l2l_1 = name;
    this.m2l_1 = type;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.l2l_1;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      var message = "Name can't be blank";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.l2l_1;
  };
  protoOf(AttributeKey).hashCode = function () {
    var result = getStringHashCode(this.l2l_1);
    result = imul(result, 31) + this.m2l_1.hashCode() | 0;
    return result;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttributeKey))
      return false;
    if (!(this.l2l_1 === other.l2l_1))
      return false;
    if (!this.m2l_1.equals(other.m2l_1))
      return false;
    return true;
  };
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = other.k2l().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      _this__u8e3s4.g2l(element instanceof AttributeKey ? element : THROW_CCE(), other.d2l(element));
    }
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$DelegatingMutableSet) {
    return $this$DelegatingMutableSet.n2l_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$DelegatingMutableSet) {
    return caseInsensitive($this$DelegatingMutableSet);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$DelegatingMutableSet) {
    return new Entry_0($this$DelegatingMutableSet.m1().n2l_1, $this$DelegatingMutableSet.n1());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$DelegatingMutableSet) {
    return new Entry_0(caseInsensitive($this$DelegatingMutableSet.m1()), $this$DelegatingMutableSet.n1());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.p2l_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CaseInsensitiveMap).d1 = function () {
    return this.p2l_1.d1();
  };
  protoOf(CaseInsensitiveMap).e1a = function (key) {
    return this.p2l_1.l2(new CaseInsensitiveString(key));
  };
  protoOf(CaseInsensitiveMap).l2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.e1a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).q2l = function (value) {
    return this.p2l_1.m2(value);
  };
  protoOf(CaseInsensitiveMap).m2 = function (value) {
    if (!!(value == null))
      return false;
    return this.q2l(!(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).g1a = function (key) {
    return this.p2l_1.n2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).n2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.g1a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).r = function () {
    return this.p2l_1.r();
  };
  protoOf(CaseInsensitiveMap).t2 = function () {
    this.p2l_1.t2();
  };
  protoOf(CaseInsensitiveMap).r2l = function (key, value) {
    return this.p2l_1.q2(caseInsensitive(key), value);
  };
  protoOf(CaseInsensitiveMap).q2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.r2l(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).s2l = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = from.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var key = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.n1();
      this.r2l(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).s2 = function (from) {
    return this.s2l(from);
  };
  protoOf(CaseInsensitiveMap).t2l = function (key) {
    return this.p2l_1.r2(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).r2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.t2l((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).o2 = function () {
    var tmp = this.p2l_1.o2();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  protoOf(CaseInsensitiveMap).l1 = function () {
    var tmp = this.p2l_1.l1();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  protoOf(CaseInsensitiveMap).p2 = function () {
    return this.p2l_1.p2();
  };
  protoOf(CaseInsensitiveMap).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.p2l_1, this.p2l_1);
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    return hashCode(this.p2l_1);
  };
  function Entry_0(key, value) {
    this.u2l_1 = key;
    this.v2l_1 = value;
  }
  protoOf(Entry_0).m1 = function () {
    return this.u2l_1;
  };
  protoOf(Entry_0).n1 = function () {
    return this.v2l_1;
  };
  protoOf(Entry_0).hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.u2l_1)) | 0) + hashCode(ensureNotNull(this.v2l_1)) | 0;
  };
  protoOf(Entry_0).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !isInterface(other, Entry);
    }
    if (tmp)
      return false;
    return equals(other.m1(), this.u2l_1) && equals(other.n1(), this.v2l_1);
  };
  protoOf(Entry_0).toString = function () {
    return toString_0(this.u2l_1) + '=' + toString_0(this.v2l_1);
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = charCodeAt(_this__u8e3s4, tmp_2);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2 = toString_1(_this__u8e3s4).toLowerCase();
    return charCodeAt(tmp$ret$2, 0) === _this__u8e3s4;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    parent = parent === VOID ? null : parent;
    var tmp = SupervisorJob(parent);
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    var tmp$ret$0 = new SilentSupervisor$$inlined$CoroutineExceptionHandler$1();
    return tmp.nf(tmp$ret$0);
  }
  function SilentSupervisor$$inlined$CoroutineExceptionHandler$1() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(SilentSupervisor$$inlined$CoroutineExceptionHandler$1).z1t = function (context, exception) {
    return Unit_instance;
  };
  function get_digits() {
    _init_properties_Crypto_kt__txayzl();
    return digits;
  }
  var digits;
  function generateNonce(size) {
    _init_properties_Crypto_kt__txayzl();
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    while (get_size(builder) < size) {
      writeText(builder, generateNonce_0());
    }
    return readByteArray(builder, size);
  }
  function hex(bytes) {
    _init_properties_Crypto_kt__txayzl();
    var result = charArray(imul(bytes.length, 2));
    var resultIndex = 0;
    var digits = get_digits();
    var inductionVariable = 0;
    var last = bytes.length;
    while (inductionVariable < last) {
      var element = bytes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var b = element & 255;
      var _unary__edvuaz = resultIndex;
      resultIndex = _unary__edvuaz + 1 | 0;
      result[_unary__edvuaz] = digits[b >> 4];
      var _unary__edvuaz_0 = resultIndex;
      resultIndex = _unary__edvuaz_0 + 1 | 0;
      result[_unary__edvuaz_0] = digits[b & 15];
    }
    return concatToString(result);
  }
  var properties_initialized_Crypto_kt_8g5vqb;
  function _init_properties_Crypto_kt__txayzl() {
    if (!properties_initialized_Crypto_kt_8g5vqb) {
      properties_initialized_Crypto_kt_8g5vqb = true;
      digits = toCharArray('0123456789abcdef');
    }
  }
  function DelegatingMutableSet$iterator$1(this$0) {
    this.y2l_1 = this$0;
    this.x2l_1 = this$0.z2l_1.t();
  }
  protoOf(DelegatingMutableSet$iterator$1).u = function () {
    return this.x2l_1.u();
  };
  protoOf(DelegatingMutableSet$iterator$1).v = function () {
    return this.y2l_1.a2m_1(this.x2l_1.v());
  };
  protoOf(DelegatingMutableSet$iterator$1).f4 = function () {
    return this.x2l_1.f4();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.z2l_1 = delegate;
    this.a2m_1 = convertTo;
    this.b2m_1 = convert;
    this.c2m_1 = this.z2l_1.d1();
  }
  protoOf(DelegatingMutableSet).d2m = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var _iterator__ex2g4s = _this__u8e3s4.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$0 = this.b2m_1(item);
      destination.c1(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).e2m = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var _iterator__ex2g4s = _this__u8e3s4.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$0 = this.a2m_1(item);
      destination.c1(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).d1 = function () {
    return this.c2m_1;
  };
  protoOf(DelegatingMutableSet).f2m = function (element) {
    return this.z2l_1.c1(this.b2m_1(element));
  };
  protoOf(DelegatingMutableSet).c1 = function (element) {
    return this.f2m((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).g2m = function (elements) {
    return this.z2l_1.i1(this.d2m(elements));
  };
  protoOf(DelegatingMutableSet).i1 = function (elements) {
    return this.g2m(elements);
  };
  protoOf(DelegatingMutableSet).t2 = function () {
    this.z2l_1.t2();
  };
  protoOf(DelegatingMutableSet).h2m = function (element) {
    return this.z2l_1.h2(this.b2m_1(element));
  };
  protoOf(DelegatingMutableSet).h2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.h2m((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).i2m = function (elements) {
    return this.z2l_1.i2(this.d2m(elements));
  };
  protoOf(DelegatingMutableSet).i2 = function (elements) {
    return this.i2m(elements);
  };
  protoOf(DelegatingMutableSet).r = function () {
    return this.z2l_1.r();
  };
  protoOf(DelegatingMutableSet).t = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  protoOf(DelegatingMutableSet).hashCode = function () {
    return hashCode(this.z2l_1);
  };
  protoOf(DelegatingMutableSet).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !isInterface(other, KtSet);
    }
    if (tmp)
      return false;
    var elements = this.e2m(this.z2l_1);
    var tmp_0;
    if (other.i2(elements)) {
      // Inline function 'kotlin.collections.containsAll' call
      tmp_0 = elements.i2(other);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(DelegatingMutableSet).toString = function () {
    return toString(this.e2m(this.z2l_1));
  };
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var platform = get_platform(this);
    var tmp_0;
    if (platform instanceof Js) {
      tmp_0 = platform.k2m_1.equals(JsPlatform_Browser_getInstance());
    } else {
      if (platform instanceof WasmJs) {
        tmp_0 = platform.j2m_1.equals(JsPlatform_Browser_getInstance());
      } else {
        tmp_0 = false;
      }
    }
    tmp.l2m_1 = tmp_0;
    var tmp_1 = this;
    var platform_0 = get_platform(this);
    var tmp_2;
    if (platform_0 instanceof Js) {
      tmp_2 = platform_0.k2m_1.equals(JsPlatform_Node_getInstance());
    } else {
      if (platform_0 instanceof WasmJs) {
        tmp_2 = platform_0.j2m_1.equals(JsPlatform_Node_getInstance());
      } else {
        tmp_2 = false;
      }
    }
    tmp_1.m2m_1 = tmp_2;
    var tmp_3 = this;
    var tmp_4 = get_platform(this);
    tmp_3.n2m_1 = tmp_4 instanceof Js;
    var tmp_5 = this;
    var tmp_6 = get_platform(this);
    tmp_5.o2m_1 = tmp_6 instanceof WasmJs;
    this.p2m_1 = equals(get_platform(this), Jvm_getInstance());
    this.q2m_1 = equals(get_platform(this), Native_getInstance());
    this.r2m_1 = get_isDevelopmentMode(this);
    this.s2m_1 = true;
  }
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  var JsPlatform_Browser_instance;
  var JsPlatform_Node_instance;
  var JsPlatform_entriesInitialized;
  function JsPlatform_initEntries() {
    if (JsPlatform_entriesInitialized)
      return Unit_instance;
    JsPlatform_entriesInitialized = true;
    JsPlatform_Browser_instance = new JsPlatform('Browser', 0);
    JsPlatform_Node_instance = new JsPlatform('Node', 1);
  }
  function Jvm() {
    Jvm_instance = this;
    Platform.call(this);
  }
  protoOf(Jvm).toString = function () {
    return 'Jvm';
  };
  protoOf(Jvm).hashCode = function () {
    return 1051825272;
  };
  protoOf(Jvm).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Jvm))
      return false;
    return true;
  };
  var Jvm_instance;
  function Jvm_getInstance() {
    if (Jvm_instance == null)
      new Jvm();
    return Jvm_instance;
  }
  function Native() {
    Native_instance = this;
    Platform.call(this);
  }
  protoOf(Native).toString = function () {
    return 'Native';
  };
  protoOf(Native).hashCode = function () {
    return -1059277600;
  };
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Native))
      return false;
    return true;
  };
  var Native_instance;
  function Native_getInstance() {
    if (Native_instance == null)
      new Native();
    return Native_instance;
  }
  function Js(jsPlatform) {
    Platform.call(this);
    this.k2m_1 = jsPlatform;
  }
  protoOf(Js).toString = function () {
    return 'Js(jsPlatform=' + this.k2m_1.toString() + ')';
  };
  protoOf(Js).hashCode = function () {
    return this.k2m_1.hashCode();
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    if (!this.k2m_1.equals(other.k2m_1))
      return false;
    return true;
  };
  function WasmJs() {
  }
  function JsPlatform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function JsPlatform_Browser_getInstance() {
    JsPlatform_initEntries();
    return JsPlatform_Browser_instance;
  }
  function JsPlatform_Node_getInstance() {
    JsPlatform_initEntries();
    return JsPlatform_Node_instance;
  }
  function Platform() {
  }
  function toMap(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.t2m();
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp = element.m1();
      var tmp$ret$1 = toList(element.n1());
      destination.q2(tmp, tmp$ret$1);
    }
    return destination;
  }
  function appendAll(_this__u8e3s4, builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = builder.t2m().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var name = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var values = element.n1();
      _this__u8e3s4.u2m(name, values);
    }
    return _this__u8e3s4;
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.w2m_1.n2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$_0();
      $this.x2m(name);
      // Inline function 'kotlin.collections.set' call
      $this.w2m_1.q2(name, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.u2m(name, values);
      return Unit_instance;
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.v2m_1 = caseInsensitiveName;
    this.w2m_1 = this.v2m_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  protoOf(StringValuesBuilderImpl).y2m = function () {
    return this.v2m_1;
  };
  protoOf(StringValuesBuilderImpl).z2m = function (name) {
    return this.w2m_1.n2(name);
  };
  protoOf(StringValuesBuilderImpl).a2n = function () {
    return this.w2m_1.o2();
  };
  protoOf(StringValuesBuilderImpl).r = function () {
    return this.w2m_1.r();
  };
  protoOf(StringValuesBuilderImpl).t2m = function () {
    return unmodifiable(this.w2m_1.l1());
  };
  protoOf(StringValuesBuilderImpl).b2n = function (name, value) {
    this.c2n(value);
    var list = ensureListForKey(this, name);
    list.t2();
    list.c1(value);
  };
  protoOf(StringValuesBuilderImpl).g1a = function (name) {
    var tmp0_safe_receiver = this.z2m(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).d2n = function (name, value) {
    this.c2n(value);
    ensureListForKey(this, name).c1(value);
  };
  protoOf(StringValuesBuilderImpl).e2n = function (stringValues) {
    stringValues.f2n(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).u2m = function (name, values) {
    // Inline function 'kotlin.let' call
    var list = ensureListForKey(this, name);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      this.c2n(element);
    }
    addAll(list, values);
  };
  protoOf(StringValuesBuilderImpl).g2n = function (name) {
    this.w2m_1.r2(name);
  };
  protoOf(StringValuesBuilderImpl).t2 = function () {
    this.w2m_1.t2();
  };
  protoOf(StringValuesBuilderImpl).x2m = function (name) {
  };
  protoOf(StringValuesBuilderImpl).c2n = function (value) {
  };
  function StringValues() {
  }
  function listForKey($this, name) {
    return $this.i2n_1.n2(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.h2n_1 = caseInsensitiveName;
    var tmp;
    if (this.h2n_1) {
      tmp = caseInsensitiveMap();
    } else {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = values.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var key = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.n1();
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = value.d1();
      var list = ArrayList_init_$Create$(size);
      // Inline function 'kotlin.repeat' call
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$4 = value.e1(index);
          list.c1(tmp$ret$4);
        }
         while (inductionVariable < size);
      // Inline function 'kotlin.collections.set' call
      newMap.q2(key, list);
    }
    this.i2n_1 = newMap;
  }
  protoOf(StringValuesImpl).y2m = function () {
    return this.h2n_1;
  };
  protoOf(StringValuesImpl).g1a = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).z2m = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).a2n = function () {
    return unmodifiable(this.i2n_1.o2());
  };
  protoOf(StringValuesImpl).r = function () {
    return this.i2n_1.r();
  };
  protoOf(StringValuesImpl).t2m = function () {
    return unmodifiable(this.i2n_1.l1());
  };
  protoOf(StringValuesImpl).f2n = function (body) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.i2n_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.m1();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.n1();
      body(key, value);
    }
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.h2n_1 + ') ' + toString(this.t2m());
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.h2n_1 === other.y2m()))
      return false;
    return entriesEquals(this.t2m(), other.t2m());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.t2m(), imul(31, getBooleanHashCode(this.h2n_1)));
  };
  function StringValuesSingleImpl$entries$1(this$0) {
    this.j2n_1 = this$0.m2n_1;
    this.k2n_1 = this$0.n2n_1;
  }
  protoOf(StringValuesSingleImpl$entries$1).m1 = function () {
    return this.j2n_1;
  };
  protoOf(StringValuesSingleImpl$entries$1).n1 = function () {
    return this.k2n_1;
  };
  protoOf(StringValuesSingleImpl$entries$1).toString = function () {
    return this.j2n_1 + '=' + toString(this.k2n_1);
  };
  protoOf(StringValuesSingleImpl$entries$1).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals(other.m1(), this.j2n_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.n1(), this.k2n_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StringValuesSingleImpl$entries$1).hashCode = function () {
    return getStringHashCode(this.j2n_1) ^ hashCode(this.k2n_1);
  };
  function StringValuesSingleImpl(caseInsensitiveName, name, values) {
    this.l2n_1 = caseInsensitiveName;
    this.m2n_1 = name;
    this.n2n_1 = values;
  }
  protoOf(StringValuesSingleImpl).y2m = function () {
    return this.l2n_1;
  };
  protoOf(StringValuesSingleImpl).z2m = function (name) {
    return equals_0(this.m2n_1, name, this.y2m()) ? this.n2n_1 : null;
  };
  protoOf(StringValuesSingleImpl).t2m = function () {
    return setOf(new StringValuesSingleImpl$entries$1(this));
  };
  protoOf(StringValuesSingleImpl).r = function () {
    return false;
  };
  protoOf(StringValuesSingleImpl).a2n = function () {
    return setOf(this.m2n_1);
  };
  protoOf(StringValuesSingleImpl).toString = function () {
    return 'StringValues(case=' + !this.y2m() + ') ' + toString(this.t2m());
  };
  protoOf(StringValuesSingleImpl).hashCode = function () {
    return entriesHashCode(this.t2m(), imul(31, getBooleanHashCode(this.y2m())));
  };
  protoOf(StringValuesSingleImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.y2m() === other.y2m()))
      return false;
    return entriesEquals(this.t2m(), other.t2m());
  };
  protoOf(StringValuesSingleImpl).f2n = function (body) {
    return body(this.m2n_1, this.n2n_1);
  };
  protoOf(StringValuesSingleImpl).g1a = function (name) {
    return equals_0(name, this.m2n_1, this.y2m()) ? firstOrNull(this.n2n_1) : null;
  };
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var it = charSequenceGet(_this__u8e3s4, index);
          if (!(toLowerCasePreservingASCII(it) === it)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    var capacity = _this__u8e3s4.length;
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    this_0.bc(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.s(toLowerCasePreservingASCII(charCodeAt(original, index_0)));
      }
       while (!(index_0 === last_0));
    return this_0.toString();
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= ch ? ch <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= ch ? ch <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2 = toString_1(ch).toLowerCase();
      tmp = charCodeAt(tmp$ret$2, 0);
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this.n2l_1 = content;
    var temp = 0;
    var indexedObject = this.n2l_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = charCodeAt(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = imul(temp, 31);
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2 = toString_1(element).toLowerCase();
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(tmp$ret$2, 0);
      temp = tmp + Char__toInt_impl_vasixd(this_0) | 0;
    }
    this.o2l_1 = temp;
  }
  protoOf(CaseInsensitiveString).equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2l_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.n2l_1, true)) === true;
  };
  protoOf(CaseInsensitiveString).hashCode = function () {
    return this.o2l_1;
  };
  protoOf(CaseInsensitiveString).toString = function () {
    return this.n2l_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function ChannelIOException() {
  }
  function CopyOnWriteHashMap() {
    this.o2n_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).p2n = function (key) {
    return this.o2n_1.kotlinx$atomicfu$value.n2(key);
  };
  function GMTDate$Companion$$childSerializers$_anonymous__gyfycy() {
    return createSimpleEnumSerializer('io.ktor.util.date.WeekDay', values());
  }
  function GMTDate$Companion$$childSerializers$_anonymous__gyfycy_0() {
    return createSimpleEnumSerializer('io.ktor.util.date.Month', values_0());
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, GMTDate$Companion$$childSerializers$_anonymous__gyfycy);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q2n_1 = [null, null, null, tmp_1, null, null, lazy(tmp_2, GMTDate$Companion$$childSerializers$_anonymous__gyfycy_0), null, null];
    this.r2n_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('io.ktor.util.date.GMTDate', this, 9);
    tmp0_serialDesc.rx('seconds', false);
    tmp0_serialDesc.rx('minutes', false);
    tmp0_serialDesc.rx('hours', false);
    tmp0_serialDesc.rx('dayOfWeek', false);
    tmp0_serialDesc.rx('dayOfMonth', false);
    tmp0_serialDesc.rx('dayOfYear', false);
    tmp0_serialDesc.rx('month', false);
    tmp0_serialDesc.rx('year', false);
    tmp0_serialDesc.rx('timestamp', false);
    this.s2n_1 = tmp0_serialDesc;
  }
  protoOf($serializer).t2n = function (encoder, value) {
    var tmp0_desc = this.s2n_1;
    var tmp1_output = encoder.dq(tmp0_desc);
    var tmp2_cached = Companion_getInstance().q2n_1;
    tmp1_output.nr(tmp0_desc, 0, value.u2n_1);
    tmp1_output.nr(tmp0_desc, 1, value.v2n_1);
    tmp1_output.nr(tmp0_desc, 2, value.w2n_1);
    tmp1_output.ur(tmp0_desc, 3, tmp2_cached[3].n1(), value.x2n_1);
    tmp1_output.nr(tmp0_desc, 4, value.y2n_1);
    tmp1_output.nr(tmp0_desc, 5, value.z2n_1);
    tmp1_output.ur(tmp0_desc, 6, tmp2_cached[6].n1(), value.a2o_1);
    tmp1_output.nr(tmp0_desc, 7, value.b2o_1);
    tmp1_output.or(tmp0_desc, 8, value.c2o_1);
    tmp1_output.eq(tmp0_desc);
  };
  protoOf($serializer).cn = function (encoder, value) {
    return this.t2n(encoder, value instanceof GMTDate ? value : THROW_CCE());
  };
  protoOf($serializer).dn = function (decoder) {
    var tmp0_desc = this.s2n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_local7 = 0;
    var tmp12_local8 = new Long(0, 0);
    var tmp13_input = decoder.dq(tmp0_desc);
    var tmp14_cached = Companion_getInstance().q2n_1;
    if (tmp13_input.tq()) {
      tmp4_local0 = tmp13_input.iq(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.iq(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.iq(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.pq(tmp0_desc, 3, tmp14_cached[3].n1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.iq(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.iq(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.pq(tmp0_desc, 6, tmp14_cached[6].n1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.iq(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.jq(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.uq(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.iq(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.iq(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.iq(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.pq(tmp0_desc, 3, tmp14_cached[3].n1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.iq(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.iq(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.pq(tmp0_desc, 6, tmp14_cached[6].n1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.iq(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.jq(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.eq(tmp0_desc);
    return GMTDate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer).bn = function () {
    return this.s2n_1;
  };
  protoOf($serializer).ky = function () {
    var tmp0_cached = Companion_getInstance().q2n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[3].n1(), IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[6].n1(), IntSerializer_getInstance(), LongSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, $this) {
    if (!(511 === (511 & seen0))) {
      throwMissingFieldException(seen0, 511, $serializer_getInstance().s2n_1);
    }
    $this.u2n_1 = seconds;
    $this.v2n_1 = minutes;
    $this.w2n_1 = hours;
    $this.x2n_1 = dayOfWeek;
    $this.y2n_1 = dayOfMonth;
    $this.z2n_1 = dayOfYear;
    $this.a2o_1 = month;
    $this.b2o_1 = year;
    $this.c2o_1 = timestamp;
    return $this;
  }
  function GMTDate_init_$Create$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker) {
    return GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, objectCreate(protoOf(GMTDate)));
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance();
    this.u2n_1 = seconds;
    this.v2n_1 = minutes;
    this.w2n_1 = hours;
    this.x2n_1 = dayOfWeek;
    this.y2n_1 = dayOfMonth;
    this.z2n_1 = dayOfYear;
    this.a2o_1 = month;
    this.b2o_1 = year;
    this.c2o_1 = timestamp;
  }
  protoOf(GMTDate).d2o = function (other) {
    return this.c2o_1.f3(other.c2o_1);
  };
  protoOf(GMTDate).d = function (other) {
    return this.d2o(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.u2n_1 + ', minutes=' + this.v2n_1 + ', hours=' + this.w2n_1 + ', dayOfWeek=' + this.x2n_1.toString() + ', dayOfMonth=' + this.y2n_1 + ', dayOfYear=' + this.z2n_1 + ', month=' + this.a2o_1.toString() + ', year=' + this.b2o_1 + ', timestamp=' + this.c2o_1.toString() + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.u2n_1;
    result = imul(result, 31) + this.v2n_1 | 0;
    result = imul(result, 31) + this.w2n_1 | 0;
    result = imul(result, 31) + this.x2n_1.hashCode() | 0;
    result = imul(result, 31) + this.y2n_1 | 0;
    result = imul(result, 31) + this.z2n_1 | 0;
    result = imul(result, 31) + this.a2o_1.hashCode() | 0;
    result = imul(result, 31) + this.b2o_1 | 0;
    result = imul(result, 31) + this.c2o_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    if (!(this.u2n_1 === other.u2n_1))
      return false;
    if (!(this.v2n_1 === other.v2n_1))
      return false;
    if (!(this.w2n_1 === other.w2n_1))
      return false;
    if (!this.x2n_1.equals(other.x2n_1))
      return false;
    if (!(this.y2n_1 === other.y2n_1))
      return false;
    if (!(this.z2n_1 === other.z2n_1))
      return false;
    if (!this.a2o_1.equals(other.a2o_1))
      return false;
    if (!(this.b2o_1 === other.b2o_1))
      return false;
    if (!equalsLong(this.c2o_1, other.c2o_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_0() {
  }
  protoOf(Companion_0).e2o = function (ordinal) {
    return get_entries().e1(ordinal);
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_instance;
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
  }
  var $ENTRIES;
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.h2o_1 = value;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_1() {
  }
  protoOf(Companion_1).e2o = function (ordinal) {
    return get_entries_0().e1(ordinal);
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_instance;
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
  }
  var $ENTRIES_0;
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.k2o_1 = value;
  }
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  var CONDITION_FALSE;
  var ALREADY_REMOVED;
  var LIST_EMPTY;
  var REMOVE_PREPARED;
  var NO_DECISION;
  function LockFreeLinkedListNode() {
  }
  protoOf(LockFreeLinkedListNode).h20 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.l2o_1;
    while (true) {
      var next = this_0.kotlinx$atomicfu$value;
      if (!(next instanceof OpDescriptor))
        return next;
      next.m2o(this);
    }
  };
  protoOf(LockFreeLinkedListNode).n2o = function () {
    return unwrap(this.h20());
  };
  function Symbol(symbol) {
    this.o2o_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return this.o2o_1;
  };
  function Removed() {
  }
  function OpDescriptor() {
  }
  function unwrap(_this__u8e3s4) {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof Removed ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p2o_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      tmp = _this__u8e3s4 instanceof LockFreeLinkedListNode ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_LockFreeLinkedList_kt_lnmdgw;
  function _init_properties_LockFreeLinkedList_kt__wekxce() {
    if (!properties_initialized_LockFreeLinkedList_kt_lnmdgw) {
      properties_initialized_LockFreeLinkedList_kt_lnmdgw = true;
      CONDITION_FALSE = new Symbol('CONDITION_FALSE');
      ALREADY_REMOVED = new Symbol('ALREADY_REMOVED');
      LIST_EMPTY = new Symbol('LIST_EMPTY');
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
      NO_DECISION = new Symbol('NO_DECISION');
    }
  }
  function proceedLoop($this, $completion) {
    var tmp = new $proceedLoopCOROUTINE$($this, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function $proceedLoopCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y2o_1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.z2o_1 = this.y2o_1.f2p_1;
            if (this.z2o_1 === -1) {
              this.o8_1 = 5;
              continue $sm;
            } else {
              this.o8_1 = 2;
              continue $sm;
            }

          case 2:
            this.a2p_1 = this.y2o_1.c2p_1;
            if (this.z2o_1 >= this.a2p_1.d1()) {
              this.y2o_1.g2p();
              this.o8_1 = 5;
              continue $sm;
            } else {
              this.o8_1 = 3;
              continue $sm;
            }

          case 3:
            var executeInterceptor = this.a2p_1.e1(this.z2o_1);
            this.y2o_1.f2p_1 = this.z2o_1 + 1 | 0;
            this.o8_1 = 4;
            suspendResult = executeInterceptor(this.y2o_1, this.y2o_1.e2p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.o8_1 = 1;
            continue $sm;
          case 5:
            return this.y2o_1.e2p_1;
          case 6:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 6) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.c2p_1 = interceptors;
    this.d2p_1 = coroutineContext;
    this.e2p_1 = subject;
    this.f2p_1 = 0;
  }
  protoOf(DebugPipelineContext).b1n = function () {
    return this.d2p_1;
  };
  protoOf(DebugPipelineContext).h2p = function () {
    return this.e2p_1;
  };
  protoOf(DebugPipelineContext).g2p = function () {
    this.f2p_1 = -1;
  };
  protoOf(DebugPipelineContext).i2p = function (subject, $completion) {
    this.e2p_1 = subject;
    return this.j2p($completion);
  };
  protoOf(DebugPipelineContext).j2p = function ($completion) {
    var index = this.f2p_1;
    if (index < 0)
      return this.e2p_1;
    if (index >= this.c2p_1.d1()) {
      this.g2p();
      return this.e2p_1;
    }
    return proceedLoop(this, $completion);
  };
  protoOf(DebugPipelineContext).k2p = function (initial, $completion) {
    this.f2p_1 = 0;
    this.e2p_1 = initial;
    return this.j2p($completion);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_2().l2p_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, KtMutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    if (!Companion_getInstance_2().l2p_1.r()) {
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copiedInterceptors($this) {
    return toMutableList($this.o2p_1);
  }
  function copyInterceptors($this) {
    $this.o2p_1 = copiedInterceptors($this);
    $this.p2p_1 = false;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.l2p_1 = ArrayList_init_$Create$_0();
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_2();
    this.m2p_1 = phase;
    this.n2p_1 = relation;
    this.o2p_1 = interceptors;
    this.p2p_1 = true;
  }
  protoOf(PhaseContent).q2p = function () {
    return this.o2p_1.r();
  };
  protoOf(PhaseContent).d1 = function () {
    return this.o2p_1.d1();
  };
  protoOf(PhaseContent).r2p = function (interceptor) {
    if (this.p2p_1) {
      copyInterceptors(this);
    }
    this.o2p_1.c1(interceptor);
  };
  protoOf(PhaseContent).s2p = function (destination) {
    var interceptors = this.o2p_1;
    if (destination instanceof ArrayList) {
      destination.l5(destination.d1() + interceptors.d1() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.d1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.c1(interceptors.e1(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).t2p = function () {
    this.p2p_1 = true;
    return this.o2p_1;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.m2p_1.u2p_1 + '`, ' + this.d1() + ' handlers';
  };
  function _set_interceptors__wod97b($this, _set____db54di) {
    var tmp0 = $this.z2p_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Pipeline$_get_interceptors_$ref_u6zl4e_0();
    // Inline function 'kotlinx.atomicfu.AtomicRef.setValue' call
    getPropertyCallableRef('interceptors', 1, tmp, tmp_0, Pipeline$_set_interceptors_$ref_13vc1m_0());
    tmp0.kotlinx$atomicfu$value = _set____db54di;
    return Unit_instance;
  }
  function _get_interceptors__h4min7($this) {
    var tmp0 = $this.z2p_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Pipeline$_get_interceptors_$ref_u6zl4e();
    // Inline function 'kotlinx.atomicfu.AtomicRef.getValue' call
    getPropertyCallableRef('interceptors', 1, tmp, tmp_0, Pipeline$_set_interceptors_$ref_13vc1m());
    return tmp0.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.c2q());
  }
  function findPhase($this, phase) {
    var phasesList = $this.x2p_1;
    var inductionVariable = 0;
    var last = phasesList.d1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.e1(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.u2(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.m2p_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.x2p_1;
    var inductionVariable = 0;
    var last = phasesList.d1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.e1(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.m2p_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.x2p_1;
    var inductionVariable = 0;
    var last = phasesList.d1();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.e1(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.m2p_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.y2p_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.x2p_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.e1(phaseIndex);
          var tmp0_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.q2p())
            continue $l$loop_0;
          var interceptors = phaseContent.t2p();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.e1(phaseIndex_0);
        var tmp1_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp1_elvis_lhs;
        }
        var phase = tmp_2;
        phase.s2p(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.a2q_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.a2q_1 = false;
    $this.b2q_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.a2q_1 = false;
    $this.b2q_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.t2p());
    $this.a2q_1 = false;
    $this.b2q_1 = phaseContent.m2p_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.x2p_1.r() || currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.a2q_1) {
      tmp = true;
    } else {
      tmp = !isInterface(currentInterceptors, KtMutableList);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.b2q_1, phase)) {
      currentInterceptors.c1(block);
      return true;
    }
    if (equals(phase, last($this.x2p_1)) || findPhaseIndex($this, phase) === get_lastIndex_0($this.x2p_1)) {
      ensureNotNull(findPhase($this, phase)).r2p(block);
      currentInterceptors.c1(block);
      return true;
    }
    return false;
  }
  function Pipeline$_get_interceptors_$ref_u6zl4e() {
    return function (p0) {
      return _get_interceptors__h4min7(p0);
    };
  }
  function Pipeline$_set_interceptors_$ref_13vc1m() {
    return function (p0, p1) {
      _set_interceptors__wod97b(p0, p1);
      return Unit_instance;
    };
  }
  function Pipeline$_get_interceptors_$ref_u6zl4e_0() {
    return function (p0) {
      return _get_interceptors__h4min7(p0);
    };
  }
  function Pipeline$_set_interceptors_$ref_13vc1m_0() {
    return function (p0, p1) {
      _set_interceptors__wod97b(p0, p1);
      return Unit_instance;
    };
  }
  function Pipeline(phases) {
    this.v2p_1 = AttributesJsFn(true);
    this.w2p_1 = false;
    this.x2p_1 = mutableListOf(phases.slice());
    this.y2p_1 = 0;
    this.z2p_1 = atomic$ref$1(null);
    this.a2q_1 = false;
    this.b2q_1 = null;
  }
  protoOf(Pipeline).c2q = function () {
    return this.w2p_1;
  };
  protoOf(Pipeline).d2q = function (context, subject, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.u8();
    return createContext(this, context, subject, tmp$ret$0).k2p(subject, $completion);
  };
  protoOf(Pipeline).f2q = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.x2p_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.x2p_1.e1(i);
        var tmp0_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2p_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp2_safe_receiver = relation instanceof After ? relation : null;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.g2q_1;
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.x2p_1.v2(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).h2q = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_instance;
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    this.x2p_1.v2(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).i2q = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase.toString() + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (tryAddToPhaseFastPath(this, phase, block)) {
      this.y2p_1 = this.y2p_1 + 1 | 0;
      return Unit_instance;
    }
    phaseContent.r2p(block);
    this.y2p_1 = this.y2p_1 + 1 | 0;
    resetInterceptorsList(this);
    this.j2q();
  };
  protoOf(Pipeline).j2q = function () {
  };
  protoOf(Pipeline).toString = function () {
    return anyToString(this);
  };
  function PipelineContext(context) {
    this.e2q_1 = context;
  }
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    debugMode = debugMode === VOID ? false : debugMode;
    var tmp;
    if (get_DISABLE_SFG() || debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.u2p_1 = name;
  }
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.u2p_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.g2q_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.k2q_1 = relativeTo;
  }
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  protoOf(Last).toString = function () {
    return 'Last';
  };
  protoOf(Last).hashCode = function () {
    return 967869129;
  };
  protoOf(Last).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Last))
      return false;
    return true;
  };
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.r2q_1;
      if (currentIndex === $this.m2q_1.d1()) {
        if (!direct) {
          // Inline function 'kotlin.Companion.success' call
          var value = $this.o2q_1;
          var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.r2q_1 = currentIndex + 1 | 0;
      var next = $this.m2q_1.e1(currentIndex);
      try {
        var result = pipelineStartCoroutineUninterceptedOrReturn(next, $this, $this.o2q_1, $this.n2q_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var cause = $p;
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.q2q_1 < 0) {
      // Inline function 'kotlin.error' call
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var next = ensureNotNull($this.p2q_1[$this.q2q_1]);
    var _unary__edvuaz = $this.q2q_1;
    $this.q2q_1 = _unary__edvuaz - 1 | 0;
    $this.p2q_1[_unary__edvuaz] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.z8(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.z8(tmp$ret$0);
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.q2q_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var _unary__edvuaz = $this.q2q_1;
    $this.q2q_1 = _unary__edvuaz - 1 | 0;
    $this.p2q_1[_unary__edvuaz] = null;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.t2q_1 = this$0;
    this.s2q_1 = -2147483648;
  }
  protoOf(SuspendFunctionGun$continuation$1).u8 = function () {
    var continuation = this.t2q_1.p2q_1[this.t2q_1.q2q_1];
    if (!(continuation === this) && !(continuation == null))
      return continuation.u8();
    var index = this.t2q_1.q2q_1 - 1 | 0;
    while (index >= 0) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz - 1 | 0;
      var cont = this.t2q_1.p2q_1[_unary__edvuaz];
      if (!(cont === this) && !(cont == null))
        return cont.u8();
    }
    // Inline function 'kotlin.error' call
    var message = 'Not started';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(SuspendFunctionGun$continuation$1).ef = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      resumeRootWith(this.t2q_1, tmp$ret$0);
      return Unit_instance;
    }
    loop(this.t2q_1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).z8 = function (result) {
    return this.ef(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.m2q_1 = blocks;
    var tmp = this;
    tmp.n2q_1 = new SuspendFunctionGun$continuation$1(this);
    this.o2q_1 = initial;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.m2q_1.d1();
    tmp_0.p2q_1 = Array(size);
    this.q2q_1 = -1;
    this.r2q_1 = 0;
  }
  protoOf(SuspendFunctionGun).b1n = function () {
    return this.n2q_1.u8();
  };
  protoOf(SuspendFunctionGun).h2p = function () {
    return this.o2q_1;
  };
  protoOf(SuspendFunctionGun).j2p = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      if (this.r2q_1 === this.m2q_1.d1()) {
        tmp$ret$0 = this.o2q_1;
        break $l$block_0;
      }
      this.u2q(intercepted($completion));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.o2q_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  protoOf(SuspendFunctionGun).i2p = function (subject, $completion) {
    this.o2q_1 = subject;
    return this.j2p($completion);
  };
  protoOf(SuspendFunctionGun).k2p = function (initial, $completion) {
    this.r2q_1 = 0;
    if (this.r2q_1 === this.m2q_1.d1())
      return initial;
    this.o2q_1 = initial;
    if (this.q2q_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.j2p($completion);
  };
  protoOf(SuspendFunctionGun).u2q = function (continuation) {
    this.q2q_1 = this.q2q_1 + 1 | 0;
    this.p2q_1[this.q2q_1] = continuation;
  };
  function TypeInfo(type, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.v2q_1 = type;
    this.w2q_1 = kotlinType;
  }
  protoOf(TypeInfo).hashCode = function () {
    var tmp0_safe_receiver = this.w2q_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? this.v2q_1.hashCode() : tmp1_elvis_lhs;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp;
    if (!(this.w2q_1 == null) || !(other.w2q_1 == null)) {
      tmp = equals(this.w2q_1, other.w2q_1);
    } else {
      tmp = this.v2q_1.equals(other.v2q_1);
    }
    return tmp;
  };
  protoOf(TypeInfo).toString = function () {
    var tmp0_elvis_lhs = this.w2q_1;
    return 'TypeInfo(' + toString(tmp0_elvis_lhs == null ? this.v2q_1 : tmp0_elvis_lhs) + ')';
  };
  function get_platform(_this__u8e3s4) {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    var tmp0 = platform$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('platform', 1, tmp, _get_platform_$ref_41w7mv(), null);
    return tmp0.n1();
  }
  var platform$delegate;
  function platform$delegate$lambda() {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    return new Js(hasNodeApi() ? JsPlatform_Node_getInstance() : JsPlatform_Browser_getInstance());
  }
  function _get_platform_$ref_41w7mv() {
    return function (p0) {
      return get_platform(p0);
    };
  }
  var properties_initialized_PlatformUtils_js_kt_8g036j;
  function _init_properties_PlatformUtils_js_kt__7rxm8p() {
    if (!properties_initialized_PlatformUtils_js_kt_8g036j) {
      properties_initialized_PlatformUtils_js_kt_8g036j = true;
      platform$delegate = lazy_0(platform$delegate$lambda);
    }
  }
  function toJsArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function toByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function GMTDate_0(timestamp) {
    timestamp = timestamp === VOID ? null : timestamp;
    var tmp1_safe_receiver = timestamp == null ? null : toNumber(timestamp);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = new Date(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    // Inline function 'kotlin.with' call
    var dayOfWeek = Companion_instance_1.e2o((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_instance_2.e2o(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function getTimeMillis() {
    return numberToLong((new Date()).getTime());
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + timestamp.toString(), this);
    captureStack(this, InvalidTimestampException);
  }
  function pipelineStartCoroutineUninterceptedOrReturn(interceptor, context, subject, continuation) {
    return (typeof interceptor === 'function' ? interceptor : THROW_CCE())(context, subject, continuation);
  }
  function AttributesJsFn(concurrent) {
    concurrent = concurrent === VOID ? false : concurrent;
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x2q_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AttributesJs).e2l = function (key) {
    var tmp = this.x2q_1.n2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(AttributesJs).f2l = function (key) {
    return this.x2q_1.l2(key);
  };
  protoOf(AttributesJs).g2l = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.x2q_1.q2(key, value);
  };
  protoOf(AttributesJs).i2l = function (key) {
    this.x2q_1.r2(key);
  };
  protoOf(AttributesJs).j2l = function (key, block) {
    var tmp0_safe_receiver = this.x2q_1.n2(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    // Inline function 'kotlin.collections.set' call
    this.x2q_1.q2(key, this_0);
    return this_0;
  };
  protoOf(AttributesJs).k2l = function () {
    return toList(this.x2q_1.o2());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function get__crypto() {
    _init_properties_Crypto_web_kt__nxveo7();
    return _crypto;
  }
  var _crypto;
  function generateNonce_0() {
    _init_properties_Crypto_web_kt__nxveo7();
    var buffer = toJsArray(new Int8Array(16));
    get__crypto().getRandomValues(buffer);
    return hex(toByteArray(buffer));
  }
  var properties_initialized_Crypto_web_kt_8s9a0n;
  function _init_properties_Crypto_web_kt__nxveo7() {
    if (!properties_initialized_Crypto_web_kt_8s9a0n) {
      properties_initialized_Crypto_web_kt_8s9a0n = true;
      _crypto = globalThis ? globalThis.crypto : window.crypto || window.msCrypto;
    }
  }
  function get_isDevelopmentMode(_this__u8e3s4) {
    return false;
  }
  function hasNodeApi() {
    return typeof process !== 'undefined' && process.versions != null && process.versions.node != null || (typeof window !== 'undefined' && typeof window.process !== 'undefined' && window.process.versions != null && window.process.versions.node != null);
  }
  function initCauseBridge(_this__u8e3s4, cause) {
  }
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function getKtorLogLevel() {
    return process ? process.env.KTOR_LOG_LEVEL : null;
  }
  function KtorSimpleLogger$1() {
    var tmp = this;
    var tmp_0;
    switch (PlatformUtils_getInstance().m2m_1 || PlatformUtils_getInstance().l2m_1) {
      case true:
        // Inline function 'kotlin.runCatching' call

        var tmp_1;
        try {
          // Inline function 'kotlin.Companion.success' call
          var value = getKtorLogLevel();
          tmp_1 = _Result___init__impl__xyqfz8(value);
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }

        // Inline function 'kotlin.Result.getOrNull' call

        var this_0 = tmp_1;
        var tmp_3;
        if (_Result___get_isFailure__impl__jpiriv(this_0)) {
          tmp_3 = null;
        } else {
          var tmp_4 = _Result___get_value__impl__bjfvqg(this_0);
          tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        }

        var tmp1_safe_receiver = tmp_3;
        var tmp_5;
        if (tmp1_safe_receiver == null) {
          tmp_5 = null;
        } else {
          // Inline function 'kotlin.let' call
          var tmp0 = get_entries_1();
          var tmp$ret$6;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (element.z_1 === tmp1_safe_receiver) {
                tmp$ret$6 = element;
                break $l$block;
              }
            }
            tmp$ret$6 = null;
          }
          tmp_5 = tmp$ret$6;
        }

        var tmp2_elvis_lhs = tmp_5;
        tmp_0 = tmp2_elvis_lhs == null ? LogLevel_INFO_getInstance() : tmp2_elvis_lhs;
        break;
      case false:
        tmp_0 = LogLevel_TRACE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.y2q_1 = tmp_0;
  }
  protoOf(KtorSimpleLogger$1).z2q = function () {
    return this.y2q_1;
  };
  protoOf(KtorSimpleLogger$1).a2r = function (message) {
    if (this.y2q_1.y2(LogLevel_WARN_getInstance()) > 0)
      return Unit_instance;
    console.warn(message);
  };
  protoOf(KtorSimpleLogger$1).b2r = function (message, cause) {
    if (this.y2q_1.y2(LogLevel_DEBUG_getInstance()) > 0)
      return Unit_instance;
    console.debug('DEBUG: ' + message + ', cause: ' + cause.toString());
  };
  protoOf(KtorSimpleLogger$1).c2r = function (message) {
    if (this.y2q_1.y2(LogLevel_TRACE_getInstance()) > 0)
      return Unit_instance;
    console.debug('TRACE: ' + message);
  };
  function get_isTraceEnabled(_this__u8e3s4) {
    return _this__u8e3s4.z2q().y2(LogLevel_TRACE_getInstance()) <= 0;
  }
  var LogLevel_TRACE_instance;
  var LogLevel_DEBUG_instance;
  var LogLevel_INFO_instance;
  var LogLevel_WARN_instance;
  var LogLevel_ERROR_instance;
  var LogLevel_NONE_instance;
  function values_1() {
    return [LogLevel_TRACE_getInstance(), LogLevel_DEBUG_getInstance(), LogLevel_INFO_getInstance(), LogLevel_WARN_getInstance(), LogLevel_ERROR_getInstance(), LogLevel_NONE_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_instance;
    LogLevel_entriesInitialized = true;
    LogLevel_TRACE_instance = new LogLevel('TRACE', 0);
    LogLevel_DEBUG_instance = new LogLevel('DEBUG', 1);
    LogLevel_INFO_instance = new LogLevel('INFO', 2);
    LogLevel_WARN_instance = new LogLevel('WARN', 3);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 4);
    LogLevel_NONE_instance = new LogLevel('NONE', 5);
  }
  var $ENTRIES_1;
  function LogLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogLevel_TRACE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_TRACE_instance;
  }
  function LogLevel_DEBUG_getInstance() {
    LogLevel_initEntries();
    return LogLevel_DEBUG_instance;
  }
  function LogLevel_INFO_getInstance() {
    LogLevel_initEntries();
    return LogLevel_INFO_instance;
  }
  function LogLevel_WARN_getInstance() {
    LogLevel_initEntries();
    return LogLevel_WARN_instance;
  }
  function LogLevel_ERROR_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ERROR_instance;
  }
  function LogLevel_NONE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_NONE_instance;
  }
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.sa(_this__u8e3s4);
  }
  //region block: post-declaration
  protoOf(CaseInsensitiveMap).asJsReadonlyMapView = asJsReadonlyMapView;
  protoOf($serializer).ly = typeParametersSerializers;
  protoOf(AttributesJs).d2l = get;
  protoOf(AttributesJs).h2l = set;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  DISABLE_SFG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PlatformUtils_getInstance;
  _.$_$.b = ChannelIOException;
  _.$_$.c = CopyOnWriteHashMap;
  _.$_$.d = GMTDate_0;
  _.$_$.e = getTimeMillis;
  _.$_$.f = LockFreeLinkedListNode;
  _.$_$.g = initCauseBridge;
  _.$_$.h = KtorSimpleLogger;
  _.$_$.i = get_isTraceEnabled;
  _.$_$.j = PipelineContext;
  _.$_$.k = PipelinePhase;
  _.$_$.l = Pipeline;
  _.$_$.m = TypeInfo;
  _.$_$.n = instanceOf;
  _.$_$.o = AttributeKey;
  _.$_$.p = AttributesJsFn;
  _.$_$.q = Attributes;
  _.$_$.r = SilentSupervisor;
  _.$_$.s = forEach;
  _.$_$.t = get_0;
  _.$_$.u = StringValuesBuilderImpl;
  _.$_$.v = StringValuesImpl;
  _.$_$.w = StringValuesSingleImpl;
  _.$_$.x = StringValues;
  _.$_$.y = appendAll;
  _.$_$.z = generateNonce;
  _.$_$.a1 = hex;
  _.$_$.b1 = isLowerCase;
  _.$_$.c1 = putAll;
  _.$_$.d1 = toCharArray;
  _.$_$.e1 = toLowerCasePreservingASCIIRules;
  _.$_$.f1 = toMap;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
