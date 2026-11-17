(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './ktor-ktor-io.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-io.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-websockets'.");
    }
    globalThis['ktor-ktor-websockets'] = factory(typeof globalThis['ktor-ktor-websockets'] === 'undefined' ? {} : globalThis['ktor-ktor-websockets'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-utils'], globalThis['ktor-ktor-io'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var Companion_instance = kotlin_kotlin.$_$.x2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d6;
  var mapCapacity = kotlin_kotlin.$_$.s7;
  var coerceAtLeast = kotlin_kotlin.$_$.lc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r3;
  var protoOf = kotlin_kotlin.$_$.dc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.gb;
  var enumEntries = kotlin_kotlin.$_$.q9;
  var objectCreate = kotlin_kotlin.$_$.cc;
  var Enum = kotlin_kotlin.$_$.sf;
  var initMetadataForClass = kotlin_kotlin.$_$.fb;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.gc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var getStringHashCode = kotlin_kotlin.$_$.db;
  var substring = kotlin_kotlin.$_$.ne;
  var charCodeAt = kotlin_kotlin.$_$.ra;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  var isHighSurrogate = kotlin_kotlin.$_$.td;
  var isLowSurrogate = kotlin_kotlin.$_$.vd;
  var initMetadataForInterface = kotlin_kotlin.$_$.jb;
  var isInterface = kotlin_kotlin.$_$.ub;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.o9;
  var THROW_CCE = kotlin_kotlin.$_$.cg;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var initMetadataForLambda = kotlin_kotlin.$_$.kb;
  var constructCallableReference = kotlin_kotlin.$_$.wa;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var ensureNotNull = kotlin_kotlin.$_$.ug;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var ClosedSendChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var ChannelIOException = kotlin_io_ktor_ktor_utils.$_$.b;
  var CancellationException = kotlin_kotlin.$_$.v8;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.hb;
  var toString_0 = kotlin_kotlin.$_$.eh;
  var get_size = kotlin_io_ktor_ktor_io.$_$.a1;
  var fromInt = kotlin_kotlin.$_$.z9;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var joinToString = kotlin_kotlin.$_$.j7;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var readText = kotlin_io_ktor_ktor_io.$_$.y;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var initMetadataForObject = kotlin_kotlin.$_$.lb;
  var Exception = kotlin_kotlin.$_$.uf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.g4;
  var captureStack = kotlin_kotlin.$_$.oa;
  var defineProp = kotlin_kotlin.$_$.xa;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var compareTo = kotlin_kotlin.$_$.va;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var decodeToString = kotlin_kotlin.$_$.kd;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.e;
  var Random = kotlin_kotlin.$_$.jc;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var toHexString = kotlin_kotlin.$_$.te;
  var ClosedByteChannelException = kotlin_io_ktor_ktor_io.$_$.l1;
  var BufferOverflow_SUSPEND_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.r9;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var _ChannelResult___get_isClosed__impl__mg7kuu = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var close$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var SendChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var ReceiveChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var RuntimeException = kotlin_kotlin.$_$.bg;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.a5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i3;
  var split = kotlin_kotlin.$_$.ge;
  var first = kotlin_kotlin.$_$.c7;
  var isCharSequence = kotlin_kotlin.$_$.qb;
  var trim = kotlin_kotlin.$_$.gf;
  var drop = kotlin_kotlin.$_$.v6;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.bh;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Codes, 'Codes', VOID, Enum);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CloseReason, 'CloseReason');
  function send(frame, $completion) {
    return this.i3h().x25(frame, $completion);
  }
  initMetadataForInterface(WebSocketSession, 'WebSocketSession', VOID, VOID, [CoroutineScope], [1, 0]);
  initMetadataForInterface(DefaultWebSocketSession, 'DefaultWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForCompanion(Companion_1);
  initMetadataForLambda(DefaultWebSocketSessionImpl$start$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($outgoingProcessorLoopCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($sendCloseSequenceCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkMaxFrameSizeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DefaultWebSocketSessionImpl, 'DefaultWebSocketSessionImpl', VOID, VOID, [DefaultWebSocketSession, WebSocketSession], [1, 0, 2]);
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForClass(FrameTooBigException, 'FrameTooBigException', VOID, Exception, [CopyableThrowable]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(FrameType, 'FrameType', VOID, Enum);
  initMetadataForLambda(ponger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(WebSocketChannelsConfig, 'WebSocketChannelsConfig', WebSocketChannelsConfig);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ChannelConfig, 'ChannelConfig');
  initMetadataForClass(ChannelOverflow, 'ChannelOverflow', VOID, Enum);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(BoundedChannel, 'BoundedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 0]);
  initMetadataForClass(ChannelOverflowException, 'ChannelOverflowException', VOID, RuntimeException);
  initMetadataForInterface(WebSocketExtension, 'WebSocketExtension');
  initMetadataForClass(WebSocketExtensionsConfig, 'WebSocketExtensionsConfig', WebSocketExtensionsConfig);
  initMetadataForClass(WebSocketExtensionHeader, 'WebSocketExtensionHeader');
  initMetadataForCoroutine($closeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Frame, 'Frame');
  initMetadataForClass(Binary, 'Binary', VOID, Frame);
  initMetadataForClass(Text, 'Text', VOID, Frame);
  initMetadataForClass(Close, 'Close', Close_init_$Create$_0, Frame);
  initMetadataForClass(Ping, 'Ping', VOID, Frame);
  initMetadataForClass(Pong, 'Pong', VOID, Frame);
  initMetadataForCompanion(Companion_6);
  //endregion
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
    Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
    Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
    Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
    Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
    Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
    Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
    Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
    Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
    Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
    Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
    Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
    if (Companion_instance_0 == null) {
      Companion_instance;
      new Companion();
    }
  }
  var Codes_NORMAL_instance;
  var Codes_GOING_AWAY_instance;
  var Codes_PROTOCOL_ERROR_instance;
  var Codes_CANNOT_ACCEPT_instance;
  var Codes_CLOSED_ABNORMALLY_instance;
  var Codes_NOT_CONSISTENT_instance;
  var Codes_VIOLATED_POLICY_instance;
  var Codes_TOO_BIG_instance;
  var Codes_NO_EXTENSION_instance;
  var Codes_INTERNAL_ERROR_instance;
  var Codes_SERVICE_RESTART_instance;
  var Codes_TRY_AGAIN_LATER_instance;
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = get_entries();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp$ret$2 = element.m3g_1;
      destination.z2(tmp$ret$2, element);
    }
    tmp.n3g_1 = destination;
    this.o3g_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  protoOf(Companion).p3g = function (code) {
    return this.n3g_1.s2(code);
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    static_init();
    return Companion_instance_0;
  }
  function values() {
    static_init();
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  function get_entries() {
    static_init();
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var $ENTRIES;
  function CloseReason_init_$Init$(code, message, $this) {
    CloseReason.call($this, code.m3g_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, objectCreate(protoOf(CloseReason)));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.m3g_1 = code;
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function Codes_NORMAL_getInstance() {
    static_init();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    static_init();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    static_init();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    static_init();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    static_init();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    static_init();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    static_init();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    static_init();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    static_init();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    static_init();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    static_init();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    static_init();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.q3g_1 = code;
    this.r3g_1 = message;
    var size = utf8Size(this.r3g_1);
    // Inline function 'kotlin.require' call
    if (!(size <= 123)) {
      var message_0 = 'Close reason message is too long: ' + size + ' bytes, but must not exceed ' + '123 bytes when UTF-8-encoded';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(CloseReason).s3g = function () {
    return Companion_getInstance().p3g(this.q3g_1);
  };
  protoOf(CloseReason).toString = function () {
    var tmp0_elvis_lhs = this.s3g();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.q3g_1 : tmp0_elvis_lhs) + ', message=' + this.r3g_1 + ')';
  };
  protoOf(CloseReason).hashCode = function () {
    var result = this.q3g_1;
    result = imul(result, 31) + getStringHashCode(this.r3g_1) | 0;
    return result;
  };
  protoOf(CloseReason).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    if (!(this.q3g_1 === other.q3g_1))
      return false;
    if (!(this.r3g_1 === other.r3g_1))
      return false;
    return true;
  };
  function utf8Size(_this__u8e3s4) {
    var size = 0;
    var index = 0;
    while (index < _this__u8e3s4.length) {
      var bytes = utf8ByteCountAt(_this__u8e3s4, index);
      size = size + bytes | 0;
      index = index + (bytes === 4 ? 2 : 1) | 0;
    }
    return size;
  }
  function utf8Truncate(_this__u8e3s4, maxSize) {
    var size = 0;
    var index = 0;
    $l$loop: while (index < _this__u8e3s4.length) {
      var bytes = utf8ByteCountAt(_this__u8e3s4, index);
      if ((size + bytes | 0) > maxSize)
        break $l$loop;
      size = size + bytes | 0;
      index = index + (bytes === 4 ? 2 : 1) | 0;
    }
    return index === _this__u8e3s4.length ? _this__u8e3s4 : substring(_this__u8e3s4, 0, index);
  }
  function utf8ByteCountAt(_this__u8e3s4, index) {
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(_this__u8e3s4, index);
    var code = Char__toInt_impl_vasixd(this_0);
    return code < 128 ? 1 : code < 2048 ? 2 : isHighSurrogate(charCodeAt(_this__u8e3s4, index)) && (index + 1 | 0) < _this__u8e3s4.length && isLowSurrogate(charCodeAt(_this__u8e3s4, index + 1 | 0)) ? 4 : 3;
  }
  function validateSize(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    if (!(!_this__u8e3s4.y3g_1.v3g_1 || _this__u8e3s4.z3g_1.length <= 125)) {
      var message = 'Control frames must not exceed 125 bytes per RFC 6455, ' + ('but ' + _this__u8e3s4.y3g_1.toString() + ' frame has ' + _this__u8e3s4.z3g_1.length + ' bytes');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function get_LOGGER() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return LOGGER;
  }
  var LOGGER;
  function get_IncomingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return IncomingProcessorCoroutineName;
  }
  var IncomingProcessorCoroutineName;
  function get_OutgoingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return OutgoingProcessorCoroutineName;
  }
  var OutgoingProcessorCoroutineName;
  function get_NORMAL_CLOSE() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return NORMAL_CLOSE;
  }
  var NORMAL_CLOSE;
  var OUTGOING_CHANNEL_CONFIG;
  function DefaultWebSocketSession() {
  }
  function DefaultWebSocketSession_0(session, pingIntervalMillis, timeoutMillis, channelsConfig) {
    pingIntervalMillis = pingIntervalMillis === VOID ? 0n : pingIntervalMillis;
    timeoutMillis = timeoutMillis === VOID ? 15000n : timeoutMillis;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_2().k3h_1 : channelsConfig;
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    // Inline function 'kotlin.require' call
    if (!!isInterface(session, DefaultWebSocketSession)) {
      var message = 'Cannot wrap other DefaultWebSocketSession';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DefaultWebSocketSessionImpl(session, pingIntervalMillis, timeoutMillis, channelsConfig.l3h_1, channelsConfig.m3h_1);
  }
  function runIncomingProcessor($this, ponger) {
    var tmp = get_IncomingProcessorCoroutineName().yf(Dispatchers_getInstance().p1z_1);
    return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger, null));
  }
  function runOutgoingProcessor($this) {
    var tmp = get_OutgoingProcessorCoroutineName().yf(Dispatchers_getInstance().p1z_1);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0($this, null));
  }
  function outgoingProcessorLoop($this, $completion) {
    var tmp = new $outgoingProcessorLoopCOROUTINE$($this, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function sendCloseSequence($this, reason, exception, $completion) {
    exception = exception === VOID ? null : exception;
    var tmp = new $sendCloseSequenceCOROUTINE$($this, reason, exception, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function tryClose($this) {
    return $this.r3i_1.atomicfu$compareAndSet(false, true);
  }
  function runOrCancelPinger($this) {
    var interval = $this.u3i_1;
    var tmp;
    if ($this.r3i_1.kotlinx$atomicfu$value) {
      tmp = null;
    } else if (interval > 0n) {
      var tmp_0 = $this.k3i_1.i3h();
      var tmp_1 = $this.v3i_1;
      tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this, null));
    } else {
      tmp = null;
    }
    var newPinger = tmp;
    var tmp0_safe_receiver = $this.l3i_1.atomicfu$getAndSet(newPinger);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.e26();
    var tmp2_safe_receiver = newPinger == null ? null : new ChannelResult(newPinger.y25(Companion_getInstance_1().x3i_1));
    if (tmp2_safe_receiver == null)
      null;
    else
      _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.i24_1);
    if ($this.r3i_1.kotlinx$atomicfu$value && !(newPinger == null)) {
      runOrCancelPinger($this);
    }
  }
  function checkMaxFrameSize($this, packet, frame, $completion) {
    var tmp = new $checkMaxFrameSizeCOROUTINE$($this, packet, frame, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function processIncomingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.k3j().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.l3j(current);
    }
    return accumulator;
  }
  function processOutgoingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.k3j().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.m3j(current);
    }
    return accumulator;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.x3i_1 = new Pong(new Int8Array(0), NonDisposableHandle_instance);
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation) {
    this.v3j_1 = $incomingJob;
    this.w3j_1 = $outgoingJob;
    this.x3j_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$start$slambda).a2l = function ($this$launch, $completion) {
    var tmp = this.b2l($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).r9 = function (p1, $completion) {
    return this.a2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            this.v8_1 = 1;
            suspendResult = this.v3j_1.f1q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v8_1 = 2;
            suspendResult = this.w3j_1.f1q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x3j_1.n3i_1.j1q();
            return Unit_instance;
          case 3:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 3) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).b2l = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$start$slambda(this.v3j_1, this.w3j_1, this.x3j_1, completion);
    i.y3j_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$start$slambda_0($incomingJob, $outgoingJob, this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2l($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation) {
    this.h3k_1 = this$0;
    this.i3k_1 = $ponger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).a2l = function ($this$launch, $completion) {
    var tmp = this.b2l($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).r9 = function (p1, $completion) {
    return this.a2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 39;
            this.t3k_1 = null;
            this.m3k_1 = null;
            this.l3k_1 = false;
            this.n3k_1 = Unit_instance;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.v8_1 = 2;
            continue $sm;
          case 2:
            this.w8_1 = 33;
            this.w8_1 = 32;
            this.x3k_1 = this.h3k_1.k3i_1.h3h();
            this.v8_1 = 3;
            continue $sm;
          case 3:
            this.q3k_1 = this.x3k_1;
            this.p3k_1 = null;
            this.v8_1 = 4;
            continue $sm;
          case 4:
            this.v8_1 = 5;
            continue $sm;
          case 5:
            this.v8_1 = 6;
            continue $sm;
          case 6:
            this.w8_1 = 29;
            this.w8_1 = 28;
            this.w3k_1 = this.q3k_1.t();
            this.v8_1 = 7;
            continue $sm;
          case 7:
            this.v8_1 = 8;
            suspendResult = this.w3k_1.a24(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (!suspendResult) {
              this.v8_1 = 26;
              continue $sm;
            }

            var e = this.w3k_1.v();
            this.v3k_1 = e;
            this.v8_1 = 9;
            continue $sm;
          case 9:
            this.u3k_1 = this.v3k_1;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.v2t('WebSocketSession(' + toString(this.j3k_1) + ') receiving frame ' + this.u3k_1.toString());
            }

            var tmp0_subject = this.u3k_1;
            if (tmp0_subject instanceof Close) {
              if (!this.h3k_1.i3h().c24()) {
                this.v8_1 = 18;
                var tmp_0 = this.h3k_1.i3h();
                var tmp1_elvis_lhs = readReason(this.u3k_1);
                suspendResult = tmp_0.x25(Close_init_$Create$(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.v8_1 = 19;
                continue $sm;
              }
            } else {
              if (tmp0_subject instanceof Pong) {
                var tmp2_safe_receiver = this.h3k_1.l3i_1.kotlinx$atomicfu$value;
                if (tmp2_safe_receiver == null) {
                  this.s3k_1 = null;
                  this.v8_1 = 17;
                  continue $sm;
                } else {
                  this.v8_1 = 16;
                  suspendResult = tmp2_safe_receiver.x25(this.u3k_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                if (tmp0_subject instanceof Ping) {
                  this.v8_1 = 15;
                  suspendResult = this.i3k_1.x25(this.u3k_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.v8_1 = 10;
                  suspendResult = checkMaxFrameSize(this.h3k_1, this.m3k_1, this.u3k_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

          case 10:
            if (!this.u3k_1.x3g_1) {
              if (this.t3k_1 == null) {
                this.t3k_1 = this.u3k_1;
              }
              if (this.m3k_1 == null) {
                this.m3k_1 = BytePacketBuilder();
              }
              writeFully(this.m3k_1, this.u3k_1.z3g_1);
              this.v8_1 = 21;
              continue $sm;
            } else {
              this.v8_1 = 11;
              continue $sm;
            }

          case 11:
            if (this.t3k_1 == null) {
              this.v8_1 = 14;
              suspendResult = this.h3k_1.p3i_1.x25(processIncomingExtensions(this.h3k_1, this.u3k_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 12;
              continue $sm;
            }

          case 12:
            writeFully(ensureNotNull(this.m3k_1), this.u3k_1.z3g_1);
            var defragmented = Companion_getInstance_5().z3k(true, this.t3k_1.y3g_1, readByteArray(build(this.m3k_1)), this.t3k_1.b3h_1, this.t3k_1.c3h_1, this.t3k_1.d3h_1);
            this.t3k_1 = null;
            this.v8_1 = 13;
            suspendResult = this.h3k_1.p3i_1.x25(processIncomingExtensions(this.h3k_1, defragmented), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            var tmp_1 = this;
            tmp_1.r3k_1 = Unit_instance;
            this.v8_1 = 20;
            continue $sm;
          case 14:
            this.v8_1 = 21;
            continue $sm;
          case 15:
            var tmp_2 = this;
            tmp_2.r3k_1 = Unit_instance;
            this.v8_1 = 20;
            continue $sm;
          case 16:
            var tmp_3 = this;
            tmp_3.s3k_1 = Unit_instance;
            this.v8_1 = 17;
            continue $sm;
          case 17:
            this.r3k_1 = this.s3k_1;
            this.v8_1 = 20;
            continue $sm;
          case 18:
            this.v8_1 = 19;
            continue $sm;
          case 19:
            this.l3k_1 = true;
            this.v8_1 = 22;
            var tmp_4 = this;
            continue $sm;
          case 20:
            if (false) {
              this.v8_1 = 9;
              continue $sm;
            }

            this.v8_1 = 21;
            continue $sm;
          case 21:
            this.v8_1 = 7;
            continue $sm;
          case 22:
            this.w8_1 = 32;
            cancelConsumed(this.q3k_1, this.p3k_1);
            this.w8_1 = 39;
            this.v8_1 = 23;
            continue $sm;
          case 23:
            this.w8_1 = 39;
            this.i3k_1.e26();
            var tmp0_safe_receiver = this.m3k_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.f4();
            }

            this.h3k_1.p3i_1.e26();
            if (!this.l3k_1) {
              this.v8_1 = 24;
              suspendResult = close(this.h3k_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 25;
              continue $sm;
            }

          case 24:
            this.v8_1 = 25;
            continue $sm;
          case 25:
            var tmp_5 = this;
            return Unit_instance;
          case 26:
            this.v8_1 = 27;
            var tmp_6 = this;
            continue $sm;
          case 27:
            this.w8_1 = 32;
            cancelConsumed(this.q3k_1, this.p3k_1);
            this.v8_1 = 31;
            continue $sm;
          case 28:
            this.w8_1 = 29;
            var tmp_7 = this.y8_1;
            if (tmp_7 instanceof Error) {
              var e_0 = this.y8_1;
              var tmp_8 = this;
              this.p3k_1 = e_0;
              throw e_0;
            } else {
              throw this.y8_1;
            }

          case 29:
            this.w8_1 = 32;
            var t = this.y8_1;
            cancelConsumed(this.q3k_1, this.p3k_1);
            throw t;
          case 30:
            this.w8_1 = 32;
            cancelConsumed(this.q3k_1, this.p3k_1);
            if (false) {
              this.v8_1 = 3;
              continue $sm;
            }

            this.v8_1 = 31;
            continue $sm;
          case 31:
            this.n3k_1 = Unit_instance;
            this.w8_1 = 39;
            this.v8_1 = 36;
            continue $sm;
          case 32:
            this.w8_1 = 33;
            var tmp_9 = this.y8_1;
            if (tmp_9 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.y8_1;
              var tmp_10 = this;
              tmp_10.n3k_1 = Unit_instance;
              this.w8_1 = 39;
              this.v8_1 = 36;
              continue $sm;
            } else {
              var tmp_11 = this.y8_1;
              if (tmp_11 instanceof Error) {
                var cause = this.y8_1;
                var tmp_12 = this;
                this.i3k_1.e26();
                tmp_12.n3k_1 = this.h3k_1.p3i_1.c26(cause);
                this.w8_1 = 39;
                this.v8_1 = 36;
                continue $sm;
              } else {
                throw this.y8_1;
              }
            }

          case 33:
            this.w8_1 = 39;
            this.o3k_1 = this.y8_1;
            this.i3k_1.e26();
            var tmp0_safe_receiver_0 = this.m3k_1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.f4();
            }

            this.h3k_1.p3i_1.e26();
            if (!this.l3k_1) {
              this.v8_1 = 34;
              suspendResult = close(this.h3k_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 35;
              continue $sm;
            }

          case 34:
            this.v8_1 = 35;
            continue $sm;
          case 35:
            throw this.o3k_1;
          case 36:
            this.k3k_1 = this.n3k_1;
            this.w8_1 = 39;
            this.i3k_1.e26();
            var tmp0_safe_receiver_1 = this.m3k_1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              tmp0_safe_receiver_1.f4();
            }

            this.h3k_1.p3i_1.e26();
            if (!this.l3k_1) {
              this.v8_1 = 37;
              suspendResult = close(this.h3k_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 38;
              continue $sm;
            }

          case 37:
            this.v8_1 = 38;
            continue $sm;
          case 38:
            return Unit_instance;
          case 39:
            throw this.y8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.w8_1 === 39) {
          throw e_1;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).b2l = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this.h3k_1, this.i3k_1, completion);
    i.j3k_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2l($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation) {
    this.i3l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).a2l = function ($this$launch, $completion) {
    var tmp = this.b2l($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).r9 = function (p1, $completion) {
    return this.a2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 13;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.v8_1 = 2;
            continue $sm;
          case 2:
            this.w8_1 = 9;
            this.w8_1 = 4;
            this.v8_1 = 3;
            suspendResult = outgoingProcessorLoop(this.i3l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.w8_1 = 13;
            this.v8_1 = 11;
            continue $sm;
          case 4:
            this.w8_1 = 9;
            var tmp_0 = this.y8_1;
            if (tmp_0 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.y8_1;
              this.w8_1 = 13;
              this.v8_1 = 11;
              continue $sm;
            } else {
              var tmp_1 = this.y8_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var _unused_var__etf5q3_0 = this.y8_1;
                this.w8_1 = 13;
                this.v8_1 = 11;
                continue $sm;
              } else {
                var tmp_2 = this.y8_1;
                if (tmp_2 instanceof CancellationException) {
                  var _unused_var__etf5q3_1 = this.y8_1;
                  this.v8_1 = 5;
                  suspendResult = sendCloseSequence(this.i3l_1, CloseReason_init_$Create$(Codes_NORMAL_getInstance(), ''), VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_3 = this.y8_1;
                  if (tmp_3 instanceof ChannelIOException) {
                    var _unused_var__etf5q3_2 = this.y8_1;
                    this.w8_1 = 13;
                    this.v8_1 = 11;
                    continue $sm;
                  } else {
                    var tmp_4 = this.y8_1;
                    if (tmp_4 instanceof Error) {
                      var cause = this.y8_1;
                      this.i3l_1.q3i_1.i1q(CancellationException_init_$Create$('Failed to send frame', cause));
                      this.v8_1 = 6;
                      suspendResult = closeExceptionally(this.i3l_1.k3i_1, cause, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      throw this.y8_1;
                    }
                  }
                }
              }
            }

          case 5:
            this.w8_1 = 13;
            this.v8_1 = 11;
            continue $sm;
          case 6:
            this.w8_1 = 13;
            this.v8_1 = 7;
            continue $sm;
          case 7:
            this.w8_1 = 13;
            this.i3l_1.q3i_1.g26();
            this.v8_1 = 8;
            suspendResult = close(this.i3l_1.k3i_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return Unit_instance;
          case 9:
            this.w8_1 = 13;
            this.k3l_1 = this.y8_1;
            this.i3l_1.q3i_1.g26();
            this.v8_1 = 10;
            suspendResult = close(this.i3l_1.k3i_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            throw this.k3l_1;
          case 11:
            this.w8_1 = 13;
            this.i3l_1.q3i_1.g26();
            this.v8_1 = 12;
            suspendResult = close(this.i3l_1.k3i_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            return Unit_instance;
          case 13:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 13) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).b2l = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this.i3l_1, completion);
    i.j3l_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2l($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation) {
    this.t3l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).v3l = function (it, $completion) {
    var tmp = this.w3l(it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).r9 = function (p1, $completion) {
    return this.v3l(p1 instanceof CloseReason ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = sendCloseSequence(this.t3l_1, this.u3l_1, IOException_init_$Create$('Ping timeout'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 2) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).w3l = function (it, completion) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this.t3l_1, completion);
    i.u3l_1 = it;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.v3l(it, $completion);
    }, 1);
  }
  function $outgoingProcessorLoopCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3h_1 = _this__u8e3s4;
  }
  protoOf($outgoingProcessorLoopCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 7;
            this.x3h_1 = this.v3h_1.q3i_1.t();
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.v8_1 = 2;
            suspendResult = this.x3h_1.a24(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.v8_1 = 6;
              continue $sm;
            }

            var frame = this.x3h_1.v();
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.v2t('Sending ' + frame.toString() + ' from session ' + toString(this.v3h_1));
            }

            if (frame instanceof Close) {
              this.v8_1 = 3;
              suspendResult = sendCloseSequence(this.v3h_1, readReason(frame), VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0;
              if (frame instanceof Text) {
                tmp_0 = true;
              } else {
                tmp_0 = frame instanceof Binary;
              }
              if (tmp_0) {
                this.w3h_1 = processOutgoingExtensions(this.v3h_1, frame);
                this.v8_1 = 4;
                continue $sm;
              } else {
                this.w3h_1 = frame;
                this.v8_1 = 4;
                continue $sm;
              }
            }

          case 3:
            this.v8_1 = 6;
            var tmp_1 = this;
            continue $sm;
          case 4:
            var processedFrame = this.w3h_1;
            this.v8_1 = 5;
            suspendResult = this.v3h_1.k3i_1.i3h().x25(processedFrame, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.v8_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 7) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  function $sendCloseSequenceCOROUTINE$(_this__u8e3s4, reason, exception, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g3i_1 = _this__u8e3s4;
    this.h3i_1 = reason;
    this.i3i_1 = exception;
  }
  protoOf($sendCloseSequenceCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 6;
            if (!tryClose(this.g3i_1))
              return Unit_instance;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.v2t('Sending Close Sequence for session ' + toString(this.g3i_1) + ' with reason ' + toString_0(this.h3i_1) + ' and exception ' + toString_0(this.i3i_1));
            }

            this.g3i_1.n3i_1.r1v();
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.h3i_1;
            tmp_0.j3i_1 = tmp0_elvis_lhs == null ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : tmp0_elvis_lhs;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.w8_1 = 5;
            runOrCancelPinger(this.g3i_1);
            if (!(this.j3i_1.q3g_1 === Codes_CLOSED_ABNORMALLY_getInstance().m3g_1)) {
              this.v8_1 = 2;
              suspendResult = this.g3i_1.k3i_1.i3h().x25(Close_init_$Create$(this.j3i_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 3;
              continue $sm;
            }

          case 2:
            this.v8_1 = 3;
            continue $sm;
          case 3:
            this.w8_1 = 6;
            this.v8_1 = 4;
            continue $sm;
          case 4:
            this.w8_1 = 6;
            this.g3i_1.m3i_1.p1v(this.j3i_1);
            if (!(this.i3i_1 == null)) {
              this.g3i_1.q3i_1.c26(this.i3i_1);
              this.g3i_1.p3i_1.c26(this.i3i_1);
            }

            return Unit_instance;
          case 5:
            this.w8_1 = 6;
            var t = this.y8_1;
            this.g3i_1.m3i_1.p1v(this.j3i_1);
            if (!(this.i3i_1 == null)) {
              this.g3i_1.q3i_1.c26(this.i3i_1);
              this.g3i_1.p3i_1.c26(this.i3i_1);
            }

            throw t;
          case 6:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 6) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  function $checkMaxFrameSizeCOROUTINE$(_this__u8e3s4, packet, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g3j_1 = _this__u8e3s4;
    this.h3j_1 = packet;
    this.i3j_1 = frame;
  }
  protoOf($checkMaxFrameSizeCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this.i3j_1.z3g_1.length;
            var tmp0_safe_receiver = this.h3j_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_size(tmp0_safe_receiver);
            tmp_0.j3j_1 = tmp_1 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
            if (fromInt(this.j3j_1) > this.g3j_1.g3h()) {
              var tmp2_safe_receiver = this.h3j_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                tmp2_safe_receiver.f4();
              }
              this.v8_1 = 2;
              suspendResult = close(this.g3j_1, CloseReason_init_$Create$(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + this.j3j_1 + '. Max size is ' + this.g3j_1.g3h().toString()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 1;
              continue $sm;
            }

          case 1:
            return Unit_instance;
          case 2:
            throw new FrameTooBigException(fromInt(this.j3j_1));
          case 3:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 3) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  function DefaultWebSocketSessionImpl(raw, pingIntervalMillis, timeoutMillis, incomingFramesConfig, outgoingFramesConfig) {
    Companion_getInstance_1();
    this.k3i_1 = raw;
    this.l3i_1 = atomic$ref$1(null);
    this.m3i_1 = CompletableDeferred();
    this.n3i_1 = Job();
    this.o3i_1 = this.k3i_1.z1o().wf(Key_instance).yf(this.n3i_1).yf(new CoroutineName('ws-default'));
    this.p3i_1 = from(Factory_getInstance(), incomingFramesConfig);
    this.q3i_1 = from(Factory_getInstance(), outgoingFramesConfig);
    this.r3i_1 = atomic$boolean$1(false);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s3i_1 = ArrayList_init_$Create$();
    this.t3i_1 = atomic$boolean$1(false);
    this.u3i_1 = pingIntervalMillis;
    this.v3i_1 = timeoutMillis;
    this.w3i_1 = this.m3i_1;
  }
  protoOf(DefaultWebSocketSessionImpl).z1o = function () {
    return this.o3i_1;
  };
  protoOf(DefaultWebSocketSessionImpl).h3h = function () {
    return this.p3i_1;
  };
  protoOf(DefaultWebSocketSessionImpl).i3h = function () {
    return this.q3i_1;
  };
  protoOf(DefaultWebSocketSessionImpl).k3j = function () {
    return this.s3i_1;
  };
  protoOf(DefaultWebSocketSessionImpl).f3h = function (value) {
    this.k3i_1.f3h(value);
  };
  protoOf(DefaultWebSocketSessionImpl).g3h = function () {
    return this.k3i_1.g3h();
  };
  protoOf(DefaultWebSocketSessionImpl).e3h = function (negotiatedExtensions) {
    if (!this.t3i_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var message = 'WebSocket session ' + toString(this) + ' is already started.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$2 = 'Starting default WebSocketSession(' + toString(this) + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions));
      this_0.v2t(tmp$ret$2);
    }
    this.s3i_1.h1(negotiatedExtensions);
    runOrCancelPinger(this);
    var incomingJob = runIncomingProcessor(this, ponger(this, this.i3h()));
    var outgoingJob = runOutgoingProcessor(this);
    launch(this, VOID, VOID, DefaultWebSocketSessionImpl$start$slambda_0(incomingJob, outgoingJob, this, null));
  };
  protoOf(DefaultWebSocketSessionImpl).y2b = function ($completion) {
    return this.k3i_1.y2b($completion);
  };
  var properties_initialized_DefaultWebSocketSession_kt_6cjlhc;
  function _init_properties_DefaultWebSocketSession_kt__469s0y() {
    if (!properties_initialized_DefaultWebSocketSession_kt_6cjlhc) {
      properties_initialized_DefaultWebSocketSession_kt_6cjlhc = true;
      LOGGER = KtorSimpleLogger('io.ktor.websocket.WebSocket');
      IncomingProcessorCoroutineName = new CoroutineName('ws-incoming-processor');
      OutgoingProcessorCoroutineName = new CoroutineName('ws-outgoing-processor');
      NORMAL_CLOSE = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), 'OK');
      var tmp0_safe_receiver = get_OUTGOING_CHANNEL_CAPACITY();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = new ChannelConfig(tmp0_safe_receiver, ChannelOverflow_SUSPEND_getInstance());
      }
      OUTGOING_CHANNEL_CONFIG = tmp;
    }
  }
  function readReason(_this__u8e3s4) {
    if (_this__u8e3s4.z3g_1.length < 2) {
      return null;
    }
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    writeFully(builder, _this__u8e3s4.z3g_1);
    var packet = builder;
    var code = packet.b1m();
    var message = readText(packet);
    return new CloseReason(code, message);
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).k1s = function () {
    return Unit_instance;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  protoOf(NonDisposableHandle).hashCode = function () {
    return 207988788;
  };
  protoOf(NonDisposableHandle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NonDisposableHandle))
      return false;
    return true;
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function FrameTooBigException(frameSize, cause) {
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(cause, this);
    captureStack(this, FrameTooBigException);
    this.x3l_1 = frameSize;
    delete this.message;
  }
  protoOf(FrameTooBigException).e = function () {
    var sizeSuffix = this.x3l_1 >= 0n ? ': ' + this.x3l_1.toString() : '';
    return 'Frame is too big' + sizeSuffix;
  };
  protoOf(FrameTooBigException).a1w = function () {
    return new FrameTooBigException(this.x3l_1, this);
  };
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_instance;
    static_init_called_0 = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    if (Companion_instance_3 == null) {
      Companion_instance;
      new Companion_2();
    }
  }
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp0 = get_entries_0();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = tmp0.t();
      if (!iterator.u()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.v();
      if (!iterator.u()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = maxElem.w3g_1;
      do {
        var e = iterator.v();
        var v = e.w3g_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.u());
      tmp$ret$0 = maxElem;
    }
    tmp.y3l_1 = ensureNotNull(tmp$ret$0).w3g_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.y3l_1 + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_3 = Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp0_0 = get_entries_0();
      var tmp$ret$5;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var _iterator__ex2g4s = tmp0_0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element.w3g_1 === tmp_4) {
            if (found) {
              tmp$ret$5 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$5 = null;
          break $l$block_2;
        }
        tmp$ret$5 = single;
      }
      tmp_3[tmp_4] = tmp$ret$5;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.z3l_1 = tmp_3;
  }
  var Companion_instance_3;
  function values_0() {
    static_init_0();
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  function get_entries_0() {
    static_init_0();
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var $ENTRIES_0;
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.v3g_1 = controlFrame;
    this.w3g_1 = opcode;
  }
  function FrameType_TEXT_getInstance() {
    static_init_0();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    static_init_0();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    static_init_0();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    static_init_0();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    static_init_0();
    return FrameType_PONG_instance;
  }
  function get_PongerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PongerCoroutineName;
  }
  var PongerCoroutineName;
  function get_PingerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PingerCoroutineName;
  }
  var PingerCoroutineName;
  function ponger(_this__u8e3s4, outgoing) {
    _init_properties_PingPong_kt__9aqxey();
    var channel = Channel(5);
    var tmp = get_PongerCoroutineName();
    launch(_this__u8e3s4, tmp, VOID, ponger$slambda_0(channel, outgoing, null));
    return channel;
  }
  function pinger(_this__u8e3s4, outgoing, periodMillis, timeoutMillis, onTimeout) {
    _init_properties_PingPong_kt__9aqxey();
    var actorJob = Job();
    var channel = Channel(2147483647);
    var tmp = actorJob.yf(get_PingerCoroutineName());
    launch(_this__u8e3s4, tmp, VOID, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing, null));
    var tmp_0 = ensureNotNull(_this__u8e3s4.z1o().i9(Key_instance));
    tmp_0.b1q(pinger$lambda(actorJob));
    return channel;
  }
  function ponger$slambda($channel, $outgoing, resultContinuation) {
    this.i3m_1 = $channel;
    this.j3m_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ponger$slambda).a2l = function ($this$launch, $completion) {
    var tmp = this.b2l($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(ponger$slambda).r9 = function (p1, $completion) {
    return this.a2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ponger$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 14;
            this.w8_1 = 13;
            this.o3m_1 = this.i3m_1;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.m3m_1 = this.o3m_1;
            this.l3m_1 = null;
            this.v8_1 = 2;
            continue $sm;
          case 2:
            this.v8_1 = 3;
            continue $sm;
          case 3:
            this.w8_1 = 10;
            this.w8_1 = 9;
            this.n3m_1 = this.m3m_1.t();
            this.v8_1 = 4;
            continue $sm;
          case 4:
            this.v8_1 = 5;
            suspendResult = this.n3m_1.a24(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.v8_1 = 7;
              continue $sm;
            }

            var e = this.n3m_1.v();
            get_LOGGER().v2t('Received ping message, sending pong message');
            this.v8_1 = 6;
            suspendResult = this.j3m_1.x25(new Pong(e.z3g_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.v8_1 = 4;
            continue $sm;
          case 7:
            this.v8_1 = 8;
            var tmp_0 = this;
            continue $sm;
          case 8:
            this.w8_1 = 13;
            cancelConsumed(this.m3m_1, this.l3m_1);
            this.v8_1 = 12;
            continue $sm;
          case 9:
            this.w8_1 = 10;
            var tmp_1 = this.y8_1;
            if (tmp_1 instanceof Error) {
              var e_0 = this.y8_1;
              var tmp_2 = this;
              this.l3m_1 = e_0;
              throw e_0;
            } else {
              throw this.y8_1;
            }

          case 10:
            this.w8_1 = 13;
            var t = this.y8_1;
            cancelConsumed(this.m3m_1, this.l3m_1);
            throw t;
          case 11:
            this.w8_1 = 13;
            cancelConsumed(this.m3m_1, this.l3m_1);
            if (false) {
              this.v8_1 = 1;
              continue $sm;
            }

            this.v8_1 = 12;
            continue $sm;
          case 12:
            this.w8_1 = 14;
            this.v8_1 = 15;
            continue $sm;
          case 13:
            this.w8_1 = 14;
            var tmp_3 = this.y8_1;
            if (tmp_3 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.y8_1;
              this.v8_1 = 15;
              continue $sm;
            } else {
              throw this.y8_1;
            }

          case 14:
            throw this.y8_1;
          case 15:
            this.w8_1 = 14;
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.w8_1 === 14) {
          throw e_1;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(ponger$slambda).b2l = function ($this$launch, completion) {
    var i = new ponger$slambda(this.i3m_1, this.j3m_1, completion);
    i.k3m_1 = $this$launch;
    return i;
  };
  function ponger$slambda_0($channel, $outgoing, resultContinuation) {
    var i = new ponger$slambda($channel, $outgoing, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2l($this$launch, $completion);
    }, 1);
  }
  function pinger$slambda$slambda($channel, resultContinuation) {
    this.x3m_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda).a2l = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.b2l($this$withTimeoutOrNull, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(pinger$slambda$slambda).r9 = function (p1, $completion) {
    return this.a2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.v8_1 = 4;
              continue $sm;
            }

            this.v8_1 = 2;
            suspendResult = this.x3m_1.a26(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.v8_1 = 1;
            continue $sm;
          case 3:
            throw this.y8_1;
          case 4:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 3) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda).b2l = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda(this.x3m_1, completion);
    i.y3m_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_0($channel, resultContinuation) {
    var i = new pinger$slambda$slambda($channel, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.a2l($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation) {
    this.h3n_1 = $outgoing;
    this.i3n_1 = $pingMessage;
    this.j3n_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda_1).a2l = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.b2l($this$withTimeoutOrNull, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(pinger$slambda$slambda_1).r9 = function (p1, $completion) {
    return this.a2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda_1).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 6;
            get_LOGGER().v2t('WebSocket Pinger: sending ping frame');
            this.v8_1 = 1;
            suspendResult = this.h3n_1.x25(new Ping(toByteArray(this.i3n_1, Charsets_getInstance().a2m_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.v8_1 = 5;
              continue $sm;
            }

            this.v8_1 = 3;
            suspendResult = this.j3n_1.a26(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.l3n_1 = suspendResult;
            if (decodeToString(this.l3n_1.z3g_1, 0, 0 + this.l3n_1.z3g_1.length | 0) === this.i3n_1) {
              var this_0 = get_LOGGER();
              if (get_isTraceEnabled(this_0)) {
                this_0.v2t('WebSocket Pinger: received valid pong frame ' + this.l3n_1.toString());
              }
              this.v8_1 = 5;
              continue $sm;
            } else {
              this.v8_1 = 4;
              continue $sm;
            }

          case 4:
            var this_1 = get_LOGGER();
            if (get_isTraceEnabled(this_1)) {
              this_1.v2t('WebSocket Pinger: received invalid pong frame ' + this.l3n_1.toString() + ', continue waiting');
            }

            this.v8_1 = 2;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 6) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda_1).b2l = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda_1(this.h3n_1, this.i3n_1, this.j3n_1, completion);
    i.k3n_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel, resultContinuation) {
    var i = new pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.a2l($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    this.u3n_1 = $periodMillis;
    this.v3n_1 = $timeoutMillis;
    this.w3n_1 = $onTimeout;
    this.x3n_1 = $channel;
    this.y3n_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda).a2l = function ($this$launch, $completion) {
    var tmp = this.b2l($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(pinger$slambda).r9 = function (p1, $completion) {
    return this.a2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 8;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.v2t('Starting WebSocket pinger coroutine with period ' + this.u3n_1.toString() + ' ms and timeout ' + this.v3n_1.toString() + ' ms');
            }

            this.b3o_1 = Random(getTimeMillis());
            this.a3o_1 = new Int8Array(32);
            this.w8_1 = 7;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.v8_1 = 6;
              continue $sm;
            }

            this.v8_1 = 2;
            suspendResult = withTimeoutOrNull(this.u3n_1, pinger$slambda$slambda_0(this.x3n_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.b3o_1.oh(this.a3o_1);
            var pingMessage = '[ping ' + toHexString(this.a3o_1) + ' ping]';
            this.v8_1 = 3;
            suspendResult = withTimeoutOrNull(this.v3n_1, pinger$slambda$slambda_2(this.y3n_1, pingMessage, this.x3n_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rc = suspendResult;
            if (rc == null) {
              get_LOGGER().v2t('WebSocket pinger has timed out');
              this.v8_1 = 5;
              suspendResult = this.w3n_1(CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 4;
              continue $sm;
            }

          case 4:
            this.v8_1 = 1;
            continue $sm;
          case 5:
            this.v8_1 = 6;
            continue $sm;
          case 6:
            this.w8_1 = 8;
            this.v8_1 = 9;
            continue $sm;
          case 7:
            this.w8_1 = 8;
            var tmp_0 = this.y8_1;
            if (tmp_0 instanceof CancellationException) {
              var ignore = this.y8_1;
              this.v8_1 = 9;
              continue $sm;
            } else {
              var tmp_1 = this.y8_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var ignore_0 = this.y8_1;
                this.v8_1 = 9;
                continue $sm;
              } else {
                var tmp_2 = this.y8_1;
                if (tmp_2 instanceof ClosedSendChannelException) {
                  var ignore_1 = this.y8_1;
                  this.v8_1 = 9;
                  continue $sm;
                } else {
                  var tmp_3 = this.y8_1;
                  if (tmp_3 instanceof ClosedByteChannelException) {
                    var ignore_2 = this.y8_1;
                    this.v8_1 = 9;
                    continue $sm;
                  } else {
                    throw this.y8_1;
                  }
                }
              }
            }

          case 8:
            throw this.y8_1;
          case 9:
            this.w8_1 = 8;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 8) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda).b2l = function ($this$launch, completion) {
    var i = new pinger$slambda(this.u3n_1, this.v3n_1, this.w3n_1, this.x3n_1, this.y3n_1, completion);
    i.z3n_1 = $this$launch;
    return i;
  };
  function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2l($this$launch, $completion);
    }, 1);
  }
  function pinger$lambda($actorJob) {
    return function (it) {
      $actorJob.j1q();
      return Unit_instance;
    };
  }
  var properties_initialized_PingPong_kt_fbfhmc;
  function _init_properties_PingPong_kt__9aqxey() {
    if (!properties_initialized_PingPong_kt_fbfhmc) {
      properties_initialized_PingPong_kt_fbfhmc = true;
      PongerCoroutineName = new CoroutineName('ws-ponger');
      PingerCoroutineName = new CoroutineName('ws-pinger');
    }
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new WebSocketChannelsConfig();
    this_0.l3h_1 = this_0.c3o();
    this_0.m3h_1 = this_0.c3o();
    tmp.k3h_1 = this_0;
  }
  var Companion_instance_4;
  function Companion_getInstance_2() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function WebSocketChannelsConfig() {
    Companion_getInstance_2();
    this.l3h_1 = Companion_getInstance_3().d3o_1;
    this.m3h_1 = Companion_getInstance_3().d3o_1;
  }
  protoOf(WebSocketChannelsConfig).c3o = function () {
    return Companion_getInstance_3().d3o_1;
  };
  function from(_this__u8e3s4, config) {
    // Inline function 'kotlin.with' call
    var tmp;
    if (config.e3o_1 === 2147483647) {
      tmp = Channel(2147483647);
    } else if (config.f3o_1.equals(ChannelOverflow_SUSPEND_getInstance())) {
      tmp = Channel(config.e3o_1, BufferOverflow_SUSPEND_getInstance());
    } else if (config.f3o_1.equals(ChannelOverflow_CLOSE_getInstance())) {
      tmp = new BoundedChannel(config.e3o_1);
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Unsupported channel config.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function Companion_4() {
    Companion_instance_5 = this;
    this.d3o_1 = new ChannelConfig(2147483647, ChannelOverflow_SUSPEND_getInstance());
  }
  var Companion_instance_5;
  function Companion_getInstance_3() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function ChannelConfig(capacity, onOverflow) {
    Companion_getInstance_3();
    this.e3o_1 = capacity;
    this.f3o_1 = onOverflow;
  }
  protoOf(ChannelConfig).g3o = function () {
    return this.f3o_1.equals(ChannelOverflow_SUSPEND_getInstance()) && !(this.e3o_1 === 2147483647);
  };
  var static_init_called_1;
  function static_init_1() {
    if (static_init_called_1)
      return Unit_instance;
    static_init_called_1 = true;
    ChannelOverflow_SUSPEND_instance = new ChannelOverflow('SUSPEND', 0);
    ChannelOverflow_CLOSE_instance = new ChannelOverflow('CLOSE', 1);
  }
  var ChannelOverflow_SUSPEND_instance;
  var ChannelOverflow_CLOSE_instance;
  function ChannelOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BoundedChannel$Companion$createDelegate$lambda($channel) {
    return function (it) {
      var tmp;
      var tmp_0;
      if ($channel._v == null) {
        throwUninitializedPropertyAccessException('channel');
      } else {
        tmp_0 = $channel._v;
      }
      if (!tmp_0.c24()) {
        var tmp_1;
        if ($channel._v == null) {
          throwUninitializedPropertyAccessException('channel');
        } else {
          tmp_1 = $channel._v;
        }
        tmp_1.c26(new ChannelOverflowException('Channel overflowed'));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Companion_5() {
  }
  protoOf(Companion_5).h3o = function (capacity) {
    var channel = {_v: null};
    var tmp = BufferOverflow_DROP_OLDEST_getInstance();
    // Inline function 'kotlin.also' call
    var this_0 = Channel(capacity, tmp, BoundedChannel$Companion$createDelegate$lambda(channel));
    channel._v = this_0;
    return this_0;
  };
  var Companion_instance_6;
  function Companion_getInstance_4() {
    return Companion_instance_6;
  }
  function BoundedChannel(capacity, delegate) {
    delegate = delegate === VOID ? Companion_instance_6.h3o(capacity) : delegate;
    this.i3o_1 = delegate;
  }
  protoOf(BoundedChannel).j3o = function (element) {
    var result = this.i3o_1.y25(element);
    if (!_ChannelResult___get_isSuccess__impl__odq1z9(result) && !_ChannelResult___get_isClosed__impl__mg7kuu(result)) {
      this.c26(new ChannelOverflowException('Channel overflowed'));
    }
    return result;
  };
  protoOf(BoundedChannel).y25 = function (element) {
    return this.j3o(element);
  };
  protoOf(BoundedChannel).k3o = function (element, $completion) {
    return this.i3o_1.x25(element, $completion);
  };
  protoOf(BoundedChannel).x25 = function (element, $completion) {
    return this.k3o(element, $completion);
  };
  protoOf(BoundedChannel).c26 = function (cause) {
    return this.i3o_1.c26(cause);
  };
  protoOf(BoundedChannel).c24 = function () {
    return this.i3o_1.c24();
  };
  protoOf(BoundedChannel).l3o = function ($completion) {
    return this.i3o_1.a26($completion);
  };
  protoOf(BoundedChannel).a26 = function ($completion) {
    return this.l3o($completion);
  };
  protoOf(BoundedChannel).t = function () {
    return this.i3o_1.t();
  };
  protoOf(BoundedChannel).i1q = function (cause) {
    this.i3o_1.i1q(cause);
  };
  function ChannelOverflowException(message) {
    RuntimeException_init_$Init$(message, this);
    captureStack(this, ChannelOverflowException);
  }
  function ChannelOverflow_SUSPEND_getInstance() {
    static_init_1();
    return ChannelOverflow_SUSPEND_instance;
  }
  function ChannelOverflow_CLOSE_getInstance() {
    static_init_1();
    return ChannelOverflow_CLOSE_instance;
  }
  function WebSocketExtension() {
  }
  function WebSocketExtensionsConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o3o_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.p3o_1 = [false, false, false];
  }
  protoOf(WebSocketExtensionsConfig).c2y = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.o3o_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = item();
      destination.c1(tmp$ret$2);
    }
    return destination;
  };
  function parametersToString($this) {
    return $this.r3o_1.r() ? '' : '; ' + joinToString($this.r3o_1, ';');
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.q3o_1 = name;
    this.r3o_1 = parameters;
  }
  protoOf(WebSocketExtensionHeader).toString = function () {
    return this.q3o_1 + ' ' + parametersToString(this);
  };
  function parseWebSocketExtensions(value) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(value, [',']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var extension = split(item, [';']);
      // Inline function 'kotlin.text.trim' call
      var this_1 = first(extension);
      var name = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
      // Inline function 'kotlin.collections.map' call
      var this_2 = drop(extension, 1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
      var _iterator__ex2g4s_0 = this_2.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.text.trim' call
        var tmp$ret$6 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
        destination_0.c1(tmp$ret$6);
      }
      var parameters = destination_0;
      var tmp$ret$2 = new WebSocketExtensionHeader(name, parameters);
      destination.c1(tmp$ret$2);
    }
    return destination;
  }
  function WebSocketSession() {
  }
  function close(_this__u8e3s4, reason, $completion) {
    reason = reason === VOID ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : reason;
    var tmp = new $closeCOROUTINE$(_this__u8e3s4, reason, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function closeExceptionally(_this__u8e3s4, cause, $completion) {
    var tmp;
    if (cause instanceof CancellationException) {
      tmp = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '');
    } else {
      var message = utf8Truncate(cause.toString(), 123);
      tmp = CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), message);
    }
    var reason = tmp;
    return close(_this__u8e3s4, reason, $completion);
  }
  function $closeCOROUTINE$(_this__u8e3s4, reason, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3p_1 = _this__u8e3s4;
    this.b3p_1 = reason;
  }
  protoOf($closeCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 4;
            this.w8_1 = 3;
            this.v8_1 = 1;
            suspendResult = this.a3p_1.j3h(Close_init_$Create$(this.b3p_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v8_1 = 2;
            suspendResult = this.a3p_1.y2b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w8_1 = 4;
            this.v8_1 = 5;
            continue $sm;
          case 3:
            this.w8_1 = 4;
            var tmp_0 = this.y8_1;
            if (tmp_0 instanceof Error) {
              var _unused_var__etf5q3 = this.y8_1;
              this.v8_1 = 5;
              continue $sm;
            } else {
              throw this.y8_1;
            }

          case 4:
            throw this.y8_1;
          case 5:
            this.w8_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 4) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  function Binary_init_$Init$(fin, data, $this) {
    Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Binary_init_$Create$(fin, data) {
    return Binary_init_$Init$(fin, data, objectCreate(protoOf(Binary)));
  }
  function Text_init_$Init$(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Init$_0(text, $this) {
    Text_init_$Init$(true, toByteArray(text), $this);
    return $this;
  }
  function Text_init_$Create$(text) {
    return Text_init_$Init$_0(text, objectCreate(protoOf(Text)));
  }
  function Close_init_$Init$(reason, $this) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    builder.j1n(reason.q3g_1);
    writeText(builder, reason.r3g_1);
    Close_init_$Init$_0(builder, $this);
    return $this;
  }
  function Close_init_$Create$(reason) {
    return Close_init_$Init$(reason, objectCreate(protoOf(Close)));
  }
  function Close_init_$Init$_0(packet, $this) {
    Close.call($this, readByteArray(packet));
    return $this;
  }
  function Close_init_$Init$_1($this) {
    Close.call($this, Companion_getInstance_5().y3k_1);
    return $this;
  }
  function Close_init_$Create$_0() {
    return Close_init_$Init$_1(objectCreate(protoOf(Close)));
  }
  function Binary(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  function Text(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  function Close(data) {
    Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  function Ping(data) {
    Frame.call(this, true, FrameType_PING_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  function Pong(data, disposableHandle) {
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    Frame.call(this, true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.y3k_1 = new Int8Array(0);
  }
  protoOf(Companion_6).z3k = function (fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp;
    switch (frameType.a1_1) {
      case 1:
        tmp = new Binary(fin, data, rsv1, rsv2, rsv3);
        break;
      case 0:
        tmp = new Text(fin, data, rsv1, rsv2, rsv3);
        break;
      case 2:
        tmp = new Close(data);
        break;
      case 3:
        tmp = new Ping(data);
        break;
      case 4:
        tmp = new Pong(data, NonDisposableHandle_instance);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Companion_instance_7;
  function Companion_getInstance_5() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_5();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    this.x3g_1 = fin;
    this.y3g_1 = frameType;
    this.z3g_1 = data;
    this.a3h_1 = disposableHandle;
    this.b3h_1 = rsv1;
    this.c3h_1 = rsv2;
    this.d3h_1 = rsv3;
    validateSize(this);
  }
  protoOf(Frame).toString = function () {
    return 'Frame ' + this.y3g_1.toString() + ' (fin=' + this.x3g_1 + ', buffer len = ' + this.z3g_1.length + ')';
  };
  function get_OUTGOING_CHANNEL_CAPACITY() {
    return OUTGOING_CHANNEL_CAPACITY;
  }
  var OUTGOING_CHANNEL_CAPACITY;
  //region block: post-declaration
  protoOf(DefaultWebSocketSessionImpl).j3h = send;
  defineProp(protoOf(FrameTooBigException), 'message', function () {
    return this.e();
  });
  protoOf(BoundedChannel).e26 = close$default;
  protoOf(BoundedChannel).g26 = cancel$default;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Companion_instance_6 = new Companion_5();
  OUTGOING_CHANNEL_CAPACITY = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_NORMAL_getInstance;
  _.$_$.c = Companion_getInstance;
  _.$_$.d = Companion_getInstance_2;
  _.$_$.e = send;
  _.$_$.f = Binary_init_$Create$;
  _.$_$.g = Close_init_$Create$;
  _.$_$.h = Text_init_$Create$;
  _.$_$.i = CloseReason;
  _.$_$.j = DefaultWebSocketSession_0;
  _.$_$.k = DefaultWebSocketSession;
  _.$_$.l = WebSocketChannelsConfig;
  _.$_$.m = WebSocketExtensionsConfig;
  _.$_$.n = WebSocketExtension;
  _.$_$.o = WebSocketSession;
  _.$_$.p = from;
  _.$_$.q = parseWebSocketExtensions;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-websockets.js.map
