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
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z5;
  var mapCapacity = kotlin_kotlin.$_$.o7;
  var coerceAtLeast = kotlin_kotlin.$_$.ic;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.q3;
  var Unit_instance = kotlin_kotlin.$_$.z2;
  var protoOf = kotlin_kotlin.$_$.ac;
  var initMetadataForCompanion = kotlin_kotlin.$_$.db;
  var enumEntries = kotlin_kotlin.$_$.n9;
  var objectCreate = kotlin_kotlin.$_$.zb;
  var Enum = kotlin_kotlin.$_$.pf;
  var initMetadataForClass = kotlin_kotlin.$_$.cb;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.dc;
  var getStringHashCode = kotlin_kotlin.$_$.ab;
  var initMetadataForInterface = kotlin_kotlin.$_$.gb;
  var isInterface = kotlin_kotlin.$_$.rb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m4;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.l9;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.t8;
  var initMetadataForLambda = kotlin_kotlin.$_$.hb;
  var constructCallableReference = kotlin_kotlin.$_$.ta;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var ClosedSendChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.y3;
  var ChannelIOException = kotlin_io_ktor_ktor_utils.$_$.b;
  var CancellationException = kotlin_kotlin.$_$.s8;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eb;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var get_size = kotlin_io_ktor_ktor_io.$_$.a1;
  var fromInt = kotlin_kotlin.$_$.w9;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q4;
  var joinToString = kotlin_kotlin.$_$.f7;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var readText = kotlin_io_ktor_ktor_io.$_$.y;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var initMetadataForObject = kotlin_kotlin.$_$.ib;
  var Exception = kotlin_kotlin.$_$.rf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.e4;
  var captureStack = kotlin_kotlin.$_$.la;
  var defineProp = kotlin_kotlin.$_$.ua;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var compareTo = kotlin_kotlin.$_$.sa;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var decodeToString = kotlin_kotlin.$_$.hd;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.e;
  var Random = kotlin_kotlin.$_$.gc;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var toHexString = kotlin_kotlin.$_$.qe;
  var ClosedByteChannelException = kotlin_io_ktor_ktor_io.$_$.l1;
  var BufferOverflow_SUSPEND_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.o9;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var _ChannelResult___get_isClosed__impl__mg7kuu = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var close$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var SendChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var ReceiveChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var RuntimeException = kotlin_kotlin.$_$.yf;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.y4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h3;
  var split = kotlin_kotlin.$_$.ce;
  var first = kotlin_kotlin.$_$.y6;
  var isCharSequence = kotlin_kotlin.$_$.nb;
  var trim = kotlin_kotlin.$_$.df;
  var drop = kotlin_kotlin.$_$.r6;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Codes, 'Codes', VOID, Enum);
  initMetadataForClass(CloseReason, 'CloseReason');
  function send(frame, $completion) {
    return this.c3g().k25(frame, $completion);
  }
  initMetadataForInterface(WebSocketSession, 'WebSocketSession', VOID, VOID, [CoroutineScope], [1, 0]);
  initMetadataForInterface(DefaultWebSocketSession, 'DefaultWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForCompanion(Companion_0);
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
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(FrameType, 'FrameType', VOID, Enum);
  initMetadataForLambda(ponger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(WebSocketChannelsConfig, 'WebSocketChannelsConfig', WebSocketChannelsConfig);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ChannelConfig, 'ChannelConfig');
  initMetadataForClass(ChannelOverflow, 'ChannelOverflow', VOID, Enum);
  initMetadataForCompanion(Companion_4);
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
  initMetadataForCompanion(Companion_5);
  //endregion
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
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = get_entries();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp$ret$2 = element.r3f_1;
      destination.q2(tmp$ret$2, element);
    }
    tmp.s3f_1 = destination;
    this.t3f_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  protoOf(Companion).u3f = function (code) {
    return this.s3f_1.n2(code);
  };
  var Companion_instance;
  function Companion_getInstance() {
    Codes_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Codes_entriesInitialized;
  function Codes_initEntries() {
    if (Codes_entriesInitialized)
      return Unit_instance;
    Codes_entriesInitialized = true;
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
    Companion_getInstance();
  }
  var $ENTRIES;
  function CloseReason_init_$Init$(code, message, $this) {
    CloseReason.call($this, code.r3f_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, objectCreate(protoOf(CloseReason)));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.r3f_1 = code;
  }
  function Codes_NORMAL_getInstance() {
    Codes_initEntries();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    Codes_initEntries();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    Codes_initEntries();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    Codes_initEntries();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    Codes_initEntries();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    Codes_initEntries();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    Codes_initEntries();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    Codes_initEntries();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    Codes_initEntries();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    Codes_initEntries();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.v3f_1 = code;
    this.w3f_1 = message;
  }
  protoOf(CloseReason).x3f = function () {
    return Companion_getInstance().u3f(this.v3f_1);
  };
  protoOf(CloseReason).toString = function () {
    var tmp0_elvis_lhs = this.x3f();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.v3f_1 : tmp0_elvis_lhs) + ', message=' + this.w3f_1 + ')';
  };
  protoOf(CloseReason).hashCode = function () {
    var result = this.v3f_1;
    result = imul(result, 31) + getStringHashCode(this.w3f_1) | 0;
    return result;
  };
  protoOf(CloseReason).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    if (!(this.v3f_1 === other.v3f_1))
      return false;
    if (!(this.w3f_1 === other.w3f_1))
      return false;
    return true;
  };
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
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_2().e3g_1 : channelsConfig;
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    // Inline function 'kotlin.require' call
    if (!!isInterface(session, DefaultWebSocketSession)) {
      var message = 'Cannot wrap other DefaultWebSocketSession';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DefaultWebSocketSessionImpl(session, pingIntervalMillis, timeoutMillis, channelsConfig.f3g_1, channelsConfig.g3g_1);
  }
  function runIncomingProcessor($this, ponger) {
    var tmp = get_IncomingProcessorCoroutineName().of(Dispatchers_getInstance().c1z_1);
    return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger, null));
  }
  function runOutgoingProcessor($this) {
    var tmp = get_OutgoingProcessorCoroutineName().of(Dispatchers_getInstance().c1z_1);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0($this, null));
  }
  function outgoingProcessorLoop($this, $completion) {
    var tmp = new $outgoingProcessorLoopCOROUTINE$($this, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function sendCloseSequence($this, reason, exception, $completion) {
    exception = exception === VOID ? null : exception;
    var tmp = new $sendCloseSequenceCOROUTINE$($this, reason, exception, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function tryClose($this) {
    return $this.l3h_1.atomicfu$compareAndSet(false, true);
  }
  function runOrCancelPinger($this) {
    var interval = $this.o3h_1;
    var tmp;
    if ($this.l3h_1.kotlinx$atomicfu$value) {
      tmp = null;
    } else if (interval > 0n) {
      var tmp_0 = $this.e3h_1.c3g();
      var tmp_1 = $this.p3h_1;
      tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this, null));
    } else {
      tmp = null;
    }
    var newPinger = tmp;
    var tmp0_safe_receiver = $this.f3h_1.atomicfu$getAndSet(newPinger);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.r25();
    var tmp2_safe_receiver = newPinger == null ? null : new ChannelResult(newPinger.l25(Companion_getInstance_0().r3h_1));
    if (tmp2_safe_receiver == null)
      null;
    else
      _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.v23_1);
    if ($this.l3h_1.kotlinx$atomicfu$value && !(newPinger == null)) {
      runOrCancelPinger($this);
    }
  }
  function checkMaxFrameSize($this, packet, frame, $completion) {
    var tmp = new $checkMaxFrameSizeCOROUTINE$($this, packet, frame, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function processIncomingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.e3i().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.f3i(current);
    }
    return accumulator;
  }
  function processOutgoingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.e3i().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.g3i(current);
    }
    return accumulator;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.r3h_1 = new Pong(new Int8Array(0), NonDisposableHandle_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation) {
    this.p3i_1 = $incomingJob;
    this.q3i_1 = $outgoingJob;
    this.r3i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$start$slambda).o2k = function ($this$launch, $completion) {
    var tmp = this.p2k($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).k9 = function (p1, $completion) {
    return this.o2k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.o8_1 = 1;
            suspendResult = this.p3i_1.s1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o8_1 = 2;
            suspendResult = this.q3i_1.s1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r3i_1.h3h_1.w1p();
            return Unit_instance;
          case 3:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).p2k = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$start$slambda(this.p3i_1, this.q3i_1, this.r3i_1, completion);
    i.s3i_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$start$slambda_0($incomingJob, $outgoingJob, this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2k($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation) {
    this.b3j_1 = this$0;
    this.c3j_1 = $ponger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).o2k = function ($this$launch, $completion) {
    var tmp = this.p2k($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).k9 = function (p1, $completion) {
    return this.o2k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 39;
            this.n3j_1 = null;
            this.g3j_1 = null;
            this.f3j_1 = false;
            this.h3j_1 = Unit_instance;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 2;
            continue $sm;
          case 2:
            this.p8_1 = 33;
            this.p8_1 = 32;
            this.r3j_1 = this.b3j_1.e3h_1.b3g();
            this.o8_1 = 3;
            continue $sm;
          case 3:
            this.k3j_1 = this.r3j_1;
            this.j3j_1 = null;
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.o8_1 = 5;
            continue $sm;
          case 5:
            this.o8_1 = 6;
            continue $sm;
          case 6:
            this.p8_1 = 29;
            this.p8_1 = 28;
            this.q3j_1 = this.k3j_1.t();
            this.o8_1 = 7;
            continue $sm;
          case 7:
            this.o8_1 = 8;
            suspendResult = this.q3j_1.n23(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (!suspendResult) {
              this.o8_1 = 26;
              continue $sm;
            }

            var e = this.q3j_1.v();
            this.p3j_1 = e;
            this.o8_1 = 9;
            continue $sm;
          case 9:
            this.o3j_1 = this.p3j_1;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.j2t('WebSocketSession(' + toString(this.d3j_1) + ') receiving frame ' + this.o3j_1.toString());
            }

            var tmp0_subject = this.o3j_1;
            if (tmp0_subject instanceof Close) {
              if (!this.b3j_1.c3g().p23()) {
                this.o8_1 = 18;
                var tmp_0 = this.b3j_1.c3g();
                var tmp1_elvis_lhs = readReason(this.o3j_1);
                suspendResult = tmp_0.k25(Close_init_$Create$(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.o8_1 = 19;
                continue $sm;
              }
            } else {
              if (tmp0_subject instanceof Pong) {
                var tmp2_safe_receiver = this.b3j_1.f3h_1.kotlinx$atomicfu$value;
                if (tmp2_safe_receiver == null) {
                  this.m3j_1 = null;
                  this.o8_1 = 17;
                  continue $sm;
                } else {
                  this.o8_1 = 16;
                  suspendResult = tmp2_safe_receiver.k25(this.o3j_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                if (tmp0_subject instanceof Ping) {
                  this.o8_1 = 15;
                  suspendResult = this.c3j_1.k25(this.o3j_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.o8_1 = 10;
                  suspendResult = checkMaxFrameSize(this.b3j_1, this.g3j_1, this.o3j_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

          case 10:
            if (!this.o3j_1.s3j_1) {
              if (this.n3j_1 == null) {
                this.n3j_1 = this.o3j_1;
              }
              if (this.g3j_1 == null) {
                this.g3j_1 = BytePacketBuilder();
              }
              writeFully(this.g3j_1, this.o3j_1.u3j_1);
              this.o8_1 = 21;
              continue $sm;
            } else {
              this.o8_1 = 11;
              continue $sm;
            }

          case 11:
            if (this.n3j_1 == null) {
              this.o8_1 = 14;
              suspendResult = this.b3j_1.j3h_1.k25(processIncomingExtensions(this.b3j_1, this.o3j_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 12;
              continue $sm;
            }

          case 12:
            writeFully(ensureNotNull(this.g3j_1), this.o3j_1.u3j_1);
            var defragmented = Companion_getInstance_5().a3k(true, this.n3j_1.t3j_1, readByteArray(build(this.g3j_1)), this.n3j_1.w3j_1, this.n3j_1.x3j_1, this.n3j_1.y3j_1);
            this.n3j_1 = null;
            this.o8_1 = 13;
            suspendResult = this.b3j_1.j3h_1.k25(processIncomingExtensions(this.b3j_1, defragmented), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            var tmp_1 = this;
            tmp_1.l3j_1 = Unit_instance;
            this.o8_1 = 20;
            continue $sm;
          case 14:
            this.o8_1 = 21;
            continue $sm;
          case 15:
            var tmp_2 = this;
            tmp_2.l3j_1 = Unit_instance;
            this.o8_1 = 20;
            continue $sm;
          case 16:
            var tmp_3 = this;
            tmp_3.m3j_1 = Unit_instance;
            this.o8_1 = 17;
            continue $sm;
          case 17:
            this.l3j_1 = this.m3j_1;
            this.o8_1 = 20;
            continue $sm;
          case 18:
            this.o8_1 = 19;
            continue $sm;
          case 19:
            this.f3j_1 = true;
            this.o8_1 = 22;
            var tmp_4 = this;
            continue $sm;
          case 20:
            if (false) {
              this.o8_1 = 9;
              continue $sm;
            }

            this.o8_1 = 21;
            continue $sm;
          case 21:
            this.o8_1 = 7;
            continue $sm;
          case 22:
            this.p8_1 = 32;
            cancelConsumed(this.k3j_1, this.j3j_1);
            this.p8_1 = 39;
            this.o8_1 = 23;
            continue $sm;
          case 23:
            this.p8_1 = 39;
            this.c3j_1.r25();
            var tmp0_safe_receiver = this.g3j_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.a4();
            }

            this.b3j_1.j3h_1.r25();
            if (!this.f3j_1) {
              this.o8_1 = 24;
              suspendResult = close(this.b3j_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 25;
              continue $sm;
            }

          case 24:
            this.o8_1 = 25;
            continue $sm;
          case 25:
            var tmp_5 = this;
            return Unit_instance;
          case 26:
            this.o8_1 = 27;
            var tmp_6 = this;
            continue $sm;
          case 27:
            this.p8_1 = 32;
            cancelConsumed(this.k3j_1, this.j3j_1);
            this.o8_1 = 31;
            continue $sm;
          case 28:
            this.p8_1 = 29;
            var tmp_7 = this.r8_1;
            if (tmp_7 instanceof Error) {
              var e_0 = this.r8_1;
              var tmp_8 = this;
              this.j3j_1 = e_0;
              throw e_0;
            } else {
              throw this.r8_1;
            }

          case 29:
            this.p8_1 = 32;
            var t = this.r8_1;
            cancelConsumed(this.k3j_1, this.j3j_1);
            throw t;
          case 30:
            this.p8_1 = 32;
            cancelConsumed(this.k3j_1, this.j3j_1);
            if (false) {
              this.o8_1 = 3;
              continue $sm;
            }

            this.o8_1 = 31;
            continue $sm;
          case 31:
            this.h3j_1 = Unit_instance;
            this.p8_1 = 39;
            this.o8_1 = 36;
            continue $sm;
          case 32:
            this.p8_1 = 33;
            var tmp_9 = this.r8_1;
            if (tmp_9 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.r8_1;
              var tmp_10 = this;
              tmp_10.h3j_1 = Unit_instance;
              this.p8_1 = 39;
              this.o8_1 = 36;
              continue $sm;
            } else {
              var tmp_11 = this.r8_1;
              if (tmp_11 instanceof Error) {
                var cause = this.r8_1;
                var tmp_12 = this;
                this.c3j_1.r25();
                tmp_12.h3j_1 = this.b3j_1.j3h_1.p25(cause);
                this.p8_1 = 39;
                this.o8_1 = 36;
                continue $sm;
              } else {
                throw this.r8_1;
              }
            }

          case 33:
            this.p8_1 = 39;
            this.i3j_1 = this.r8_1;
            this.c3j_1.r25();
            var tmp0_safe_receiver_0 = this.g3j_1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.a4();
            }

            this.b3j_1.j3h_1.r25();
            if (!this.f3j_1) {
              this.o8_1 = 34;
              suspendResult = close(this.b3j_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 35;
              continue $sm;
            }

          case 34:
            this.o8_1 = 35;
            continue $sm;
          case 35:
            throw this.i3j_1;
          case 36:
            this.e3j_1 = this.h3j_1;
            this.p8_1 = 39;
            this.c3j_1.r25();
            var tmp0_safe_receiver_1 = this.g3j_1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              tmp0_safe_receiver_1.a4();
            }

            this.b3j_1.j3h_1.r25();
            if (!this.f3j_1) {
              this.o8_1 = 37;
              suspendResult = close(this.b3j_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 38;
              continue $sm;
            }

          case 37:
            this.o8_1 = 38;
            continue $sm;
          case 38:
            return Unit_instance;
          case 39:
            throw this.r8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.p8_1 === 39) {
          throw e_1;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).p2k = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this.b3j_1, this.c3j_1, completion);
    i.d3j_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2k($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation) {
    this.j3k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).o2k = function ($this$launch, $completion) {
    var tmp = this.p2k($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).k9 = function (p1, $completion) {
    return this.o2k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 13;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 2;
            continue $sm;
          case 2:
            this.p8_1 = 9;
            this.p8_1 = 4;
            this.o8_1 = 3;
            suspendResult = outgoingProcessorLoop(this.j3k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.p8_1 = 13;
            this.o8_1 = 11;
            continue $sm;
          case 4:
            this.p8_1 = 9;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.r8_1;
              this.p8_1 = 13;
              this.o8_1 = 11;
              continue $sm;
            } else {
              var tmp_1 = this.r8_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var _unused_var__etf5q3_0 = this.r8_1;
                this.p8_1 = 13;
                this.o8_1 = 11;
                continue $sm;
              } else {
                var tmp_2 = this.r8_1;
                if (tmp_2 instanceof CancellationException) {
                  var _unused_var__etf5q3_1 = this.r8_1;
                  this.o8_1 = 5;
                  suspendResult = sendCloseSequence(this.j3k_1, CloseReason_init_$Create$(Codes_NORMAL_getInstance(), ''), VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_3 = this.r8_1;
                  if (tmp_3 instanceof ChannelIOException) {
                    var _unused_var__etf5q3_2 = this.r8_1;
                    this.p8_1 = 13;
                    this.o8_1 = 11;
                    continue $sm;
                  } else {
                    var tmp_4 = this.r8_1;
                    if (tmp_4 instanceof Error) {
                      var cause = this.r8_1;
                      this.j3k_1.k3h_1.v1p(CancellationException_init_$Create$('Failed to send frame', cause));
                      this.o8_1 = 6;
                      suspendResult = closeExceptionally(this.j3k_1.e3h_1, cause, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      throw this.r8_1;
                    }
                  }
                }
              }
            }

          case 5:
            this.p8_1 = 13;
            this.o8_1 = 11;
            continue $sm;
          case 6:
            this.p8_1 = 13;
            this.o8_1 = 7;
            continue $sm;
          case 7:
            this.p8_1 = 13;
            this.j3k_1.k3h_1.t25();
            this.o8_1 = 8;
            suspendResult = close(this.j3k_1.e3h_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return Unit_instance;
          case 9:
            this.p8_1 = 13;
            this.l3k_1 = this.r8_1;
            this.j3k_1.k3h_1.t25();
            this.o8_1 = 10;
            suspendResult = close(this.j3k_1.e3h_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            throw this.l3k_1;
          case 11:
            this.p8_1 = 13;
            this.j3k_1.k3h_1.t25();
            this.o8_1 = 12;
            suspendResult = close(this.j3k_1.e3h_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            return Unit_instance;
          case 13:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 13) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).p2k = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this.j3k_1, completion);
    i.k3k_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2k($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation) {
    this.u3k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).w3k = function (it, $completion) {
    var tmp = this.x3k(it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).k9 = function (p1, $completion) {
    return this.w3k(p1 instanceof CloseReason ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = sendCloseSequence(this.u3k_1, this.v3k_1, IOException_init_$Create$('Ping timeout'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 2) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).x3k = function (it, completion) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this.u3k_1, completion);
    i.v3k_1 = it;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.w3k(it, $completion);
    }, 1);
  }
  function $outgoingProcessorLoopCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p3g_1 = _this__u8e3s4;
  }
  protoOf($outgoingProcessorLoopCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 7;
            this.r3g_1 = this.p3g_1.k3h_1.t();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 2;
            suspendResult = this.r3g_1.n23(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.o8_1 = 6;
              continue $sm;
            }

            var frame = this.r3g_1.v();
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.j2t('Sending ' + frame.toString() + ' from session ' + toString(this.p3g_1));
            }

            if (frame instanceof Close) {
              this.o8_1 = 3;
              suspendResult = sendCloseSequence(this.p3g_1, readReason(frame), VOID, this);
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
                this.q3g_1 = processOutgoingExtensions(this.p3g_1, frame);
                this.o8_1 = 4;
                continue $sm;
              } else {
                this.q3g_1 = frame;
                this.o8_1 = 4;
                continue $sm;
              }
            }

          case 3:
            this.o8_1 = 6;
            var tmp_1 = this;
            continue $sm;
          case 4:
            var processedFrame = this.q3g_1;
            this.o8_1 = 5;
            suspendResult = this.p3g_1.e3h_1.c3g().k25(processedFrame, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.o8_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 7) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function $sendCloseSequenceCOROUTINE$(_this__u8e3s4, reason, exception, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3h_1 = _this__u8e3s4;
    this.b3h_1 = reason;
    this.c3h_1 = exception;
  }
  protoOf($sendCloseSequenceCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            if (!tryClose(this.a3h_1))
              return Unit_instance;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.j2t('Sending Close Sequence for session ' + toString(this.a3h_1) + ' with reason ' + toString_0(this.b3h_1) + ' and exception ' + toString_0(this.c3h_1));
            }

            this.a3h_1.h3h_1.e1v();
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.b3h_1;
            tmp_0.d3h_1 = tmp0_elvis_lhs == null ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : tmp0_elvis_lhs;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 5;
            runOrCancelPinger(this.a3h_1);
            if (!(this.d3h_1.v3f_1 === Codes_CLOSED_ABNORMALLY_getInstance().r3f_1)) {
              this.o8_1 = 2;
              suspendResult = this.a3h_1.e3h_1.c3g().k25(Close_init_$Create$(this.d3h_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 3;
              continue $sm;
            }

          case 2:
            this.o8_1 = 3;
            continue $sm;
          case 3:
            this.p8_1 = 6;
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.p8_1 = 6;
            this.a3h_1.g3h_1.c1v(this.d3h_1);
            if (!(this.c3h_1 == null)) {
              this.a3h_1.k3h_1.p25(this.c3h_1);
              this.a3h_1.j3h_1.p25(this.c3h_1);
            }

            return Unit_instance;
          case 5:
            this.p8_1 = 6;
            var t = this.r8_1;
            this.a3h_1.g3h_1.c1v(this.d3h_1);
            if (!(this.c3h_1 == null)) {
              this.a3h_1.k3h_1.p25(this.c3h_1);
              this.a3h_1.j3h_1.p25(this.c3h_1);
            }

            throw t;
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
  function $checkMaxFrameSizeCOROUTINE$(_this__u8e3s4, packet, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3i_1 = _this__u8e3s4;
    this.b3i_1 = packet;
    this.c3i_1 = frame;
  }
  protoOf($checkMaxFrameSizeCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this.c3i_1.u3j_1.length;
            var tmp0_safe_receiver = this.b3i_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_size(tmp0_safe_receiver);
            tmp_0.d3i_1 = tmp_1 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
            if (fromInt(this.d3i_1) > this.a3i_1.a3g()) {
              var tmp2_safe_receiver = this.b3i_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                tmp2_safe_receiver.a4();
              }
              this.o8_1 = 2;
              suspendResult = close(this.a3i_1, CloseReason_init_$Create$(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + this.d3i_1 + '. Max size is ' + this.a3i_1.a3g().toString()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 1;
              continue $sm;
            }

          case 1:
            return Unit_instance;
          case 2:
            throw new FrameTooBigException(fromInt(this.d3i_1));
          case 3:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function DefaultWebSocketSessionImpl(raw, pingIntervalMillis, timeoutMillis, incomingFramesConfig, outgoingFramesConfig) {
    Companion_getInstance_0();
    this.e3h_1 = raw;
    this.f3h_1 = atomic$ref$1(null);
    this.g3h_1 = CompletableDeferred();
    this.h3h_1 = Job();
    this.i3h_1 = this.e3h_1.m1o().mf(Key_instance).of(this.h3h_1).of(new CoroutineName('ws-default'));
    this.j3h_1 = from(Factory_getInstance(), incomingFramesConfig);
    this.k3h_1 = from(Factory_getInstance(), outgoingFramesConfig);
    this.l3h_1 = atomic$boolean$1(false);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m3h_1 = ArrayList_init_$Create$();
    this.n3h_1 = atomic$boolean$1(false);
    this.o3h_1 = pingIntervalMillis;
    this.p3h_1 = timeoutMillis;
    this.q3h_1 = this.g3h_1;
  }
  protoOf(DefaultWebSocketSessionImpl).m1o = function () {
    return this.i3h_1;
  };
  protoOf(DefaultWebSocketSessionImpl).b3g = function () {
    return this.j3h_1;
  };
  protoOf(DefaultWebSocketSessionImpl).c3g = function () {
    return this.k3h_1;
  };
  protoOf(DefaultWebSocketSessionImpl).e3i = function () {
    return this.m3h_1;
  };
  protoOf(DefaultWebSocketSessionImpl).z3f = function (value) {
    this.e3h_1.z3f(value);
  };
  protoOf(DefaultWebSocketSessionImpl).a3g = function () {
    return this.e3h_1.a3g();
  };
  protoOf(DefaultWebSocketSessionImpl).y3f = function (negotiatedExtensions) {
    if (!this.n3h_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var message = 'WebSocket session ' + toString(this) + ' is already started.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$2 = 'Starting default WebSocketSession(' + toString(this) + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions));
      this_0.j2t(tmp$ret$2);
    }
    this.m3h_1.h1(negotiatedExtensions);
    runOrCancelPinger(this);
    var incomingJob = runIncomingProcessor(this, ponger(this, this.c3g()));
    var outgoingJob = runOutgoingProcessor(this);
    launch(this, VOID, VOID, DefaultWebSocketSessionImpl$start$slambda_0(incomingJob, outgoingJob, this, null));
  };
  protoOf(DefaultWebSocketSessionImpl).h2b = function ($completion) {
    return this.e3h_1.h2b($completion);
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
    if (_this__u8e3s4.u3j_1.length < 2) {
      return null;
    }
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    writeFully(builder, _this__u8e3s4.u3j_1);
    var packet = builder;
    var code = packet.o1l();
    var message = readText(packet);
    return new CloseReason(code, message);
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).x1r = function () {
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
    this.y3k_1 = frameSize;
    delete this.message;
  }
  protoOf(FrameTooBigException).e = function () {
    var sizeSuffix = this.y3k_1 >= 0n ? ': ' + this.y3k_1.toString() : '';
    return 'Frame is too big' + sizeSuffix;
  };
  protoOf(FrameTooBigException).n1v = function () {
    return new FrameTooBigException(this.y3k_1, this);
  };
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_1() {
    Companion_instance_1 = this;
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
      var maxValue = maxElem.c3l_1;
      do {
        var e = iterator.v();
        var v = e.c3l_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.u());
      tmp$ret$0 = maxElem;
    }
    tmp.d3l_1 = ensureNotNull(tmp$ret$0).c3l_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.d3l_1 + 1 | 0;
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
          if (element.c3l_1 === tmp_4) {
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
    tmp_0.e3l_1 = tmp_3;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    FrameType_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var FrameType_entriesInitialized;
  function FrameType_initEntries() {
    if (FrameType_entriesInitialized)
      return Unit_instance;
    FrameType_entriesInitialized = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    Companion_getInstance_1();
  }
  var $ENTRIES_0;
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.b3l_1 = controlFrame;
    this.c3l_1 = opcode;
  }
  function FrameType_TEXT_getInstance() {
    FrameType_initEntries();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    FrameType_initEntries();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    FrameType_initEntries();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    FrameType_initEntries();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    FrameType_initEntries();
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
    var tmp = actorJob.of(get_PingerCoroutineName());
    launch(_this__u8e3s4, tmp, VOID, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing, null));
    var tmp_0 = ensureNotNull(_this__u8e3s4.m1o().b9(Key_instance));
    tmp_0.o1p(pinger$lambda(actorJob));
    return channel;
  }
  function ponger$slambda($channel, $outgoing, resultContinuation) {
    this.n3l_1 = $channel;
    this.o3l_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ponger$slambda).o2k = function ($this$launch, $completion) {
    var tmp = this.p2k($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(ponger$slambda).k9 = function (p1, $completion) {
    return this.o2k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ponger$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 14;
            this.p8_1 = 13;
            this.t3l_1 = this.n3l_1;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.r3l_1 = this.t3l_1;
            this.q3l_1 = null;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            continue $sm;
          case 3:
            this.p8_1 = 10;
            this.p8_1 = 9;
            this.s3l_1 = this.r3l_1.t();
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.o8_1 = 5;
            suspendResult = this.s3l_1.n23(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.o8_1 = 7;
              continue $sm;
            }

            var e = this.s3l_1.v();
            get_LOGGER().j2t('Received ping message, sending pong message');
            this.o8_1 = 6;
            suspendResult = this.o3l_1.k25(new Pong(e.u3j_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.o8_1 = 4;
            continue $sm;
          case 7:
            this.o8_1 = 8;
            var tmp_0 = this;
            continue $sm;
          case 8:
            this.p8_1 = 13;
            cancelConsumed(this.r3l_1, this.q3l_1);
            this.o8_1 = 12;
            continue $sm;
          case 9:
            this.p8_1 = 10;
            var tmp_1 = this.r8_1;
            if (tmp_1 instanceof Error) {
              var e_0 = this.r8_1;
              var tmp_2 = this;
              this.q3l_1 = e_0;
              throw e_0;
            } else {
              throw this.r8_1;
            }

          case 10:
            this.p8_1 = 13;
            var t = this.r8_1;
            cancelConsumed(this.r3l_1, this.q3l_1);
            throw t;
          case 11:
            this.p8_1 = 13;
            cancelConsumed(this.r3l_1, this.q3l_1);
            if (false) {
              this.o8_1 = 1;
              continue $sm;
            }

            this.o8_1 = 12;
            continue $sm;
          case 12:
            this.p8_1 = 14;
            this.o8_1 = 15;
            continue $sm;
          case 13:
            this.p8_1 = 14;
            var tmp_3 = this.r8_1;
            if (tmp_3 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.r8_1;
              this.o8_1 = 15;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 14:
            throw this.r8_1;
          case 15:
            this.p8_1 = 14;
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.p8_1 === 14) {
          throw e_1;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(ponger$slambda).p2k = function ($this$launch, completion) {
    var i = new ponger$slambda(this.n3l_1, this.o3l_1, completion);
    i.p3l_1 = $this$launch;
    return i;
  };
  function ponger$slambda_0($channel, $outgoing, resultContinuation) {
    var i = new ponger$slambda($channel, $outgoing, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2k($this$launch, $completion);
    }, 1);
  }
  function pinger$slambda$slambda($channel, resultContinuation) {
    this.c3m_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda).o2k = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.p2k($this$withTimeoutOrNull, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(pinger$slambda$slambda).k9 = function (p1, $completion) {
    return this.o2k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.o8_1 = 4;
              continue $sm;
            }

            this.o8_1 = 2;
            suspendResult = this.c3m_1.n25(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o8_1 = 1;
            continue $sm;
          case 3:
            throw this.r8_1;
          case 4:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda).p2k = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda(this.c3m_1, completion);
    i.d3m_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_0($channel, resultContinuation) {
    var i = new pinger$slambda$slambda($channel, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.o2k($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation) {
    this.m3m_1 = $outgoing;
    this.n3m_1 = $pingMessage;
    this.o3m_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda_1).o2k = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.p2k($this$withTimeoutOrNull, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(pinger$slambda$slambda_1).k9 = function (p1, $completion) {
    return this.o2k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            get_LOGGER().j2t('WebSocket Pinger: sending ping frame');
            this.o8_1 = 1;
            suspendResult = this.m3m_1.k25(new Ping(toByteArray(this.n3m_1, Charsets_getInstance().p2l_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.o8_1 = 5;
              continue $sm;
            }

            this.o8_1 = 3;
            suspendResult = this.o3m_1.n25(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.q3m_1 = suspendResult;
            if (decodeToString(this.q3m_1.u3j_1, 0, 0 + this.q3m_1.u3j_1.length | 0) === this.n3m_1) {
              get_LOGGER().j2t('WebSocket Pinger: received valid pong frame ' + this.q3m_1.toString());
              this.o8_1 = 5;
              continue $sm;
            } else {
              this.o8_1 = 4;
              continue $sm;
            }

          case 4:
            get_LOGGER().j2t('WebSocket Pinger: received invalid pong frame ' + this.q3m_1.toString() + ', continue waiting');
            this.o8_1 = 2;
            continue $sm;
          case 5:
            return Unit_instance;
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
  protoOf(pinger$slambda$slambda_1).p2k = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda_1(this.m3m_1, this.n3m_1, this.o3m_1, completion);
    i.p3m_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel, resultContinuation) {
    var i = new pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.o2k($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    this.z3m_1 = $periodMillis;
    this.a3n_1 = $timeoutMillis;
    this.b3n_1 = $onTimeout;
    this.c3n_1 = $channel;
    this.d3n_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda).o2k = function ($this$launch, $completion) {
    var tmp = this.p2k($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(pinger$slambda).k9 = function (p1, $completion) {
    return this.o2k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 9;
            get_LOGGER().j2t('Starting WebSocket pinger coroutine with period ' + this.z3m_1.toString() + ' ms and timeout ' + this.a3n_1.toString() + ' ms');
            this.g3n_1 = Random(getTimeMillis());
            this.f3n_1 = new Int8Array(32);
            this.p8_1 = 7;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.o8_1 = 6;
              continue $sm;
            }

            this.o8_1 = 2;
            suspendResult = withTimeoutOrNull(this.z3m_1, pinger$slambda$slambda_0(this.c3n_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g3n_1.ch(this.f3n_1);
            var pingMessage = '[ping ' + toHexString(this.f3n_1) + ' ping]';
            this.o8_1 = 3;
            suspendResult = withTimeoutOrNull(this.a3n_1, pinger$slambda$slambda_2(this.d3n_1, pingMessage, this.c3n_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rc = suspendResult;
            if (rc == null) {
              get_LOGGER().j2t('WebSocket pinger has timed out');
              this.o8_1 = 5;
              suspendResult = this.b3n_1(CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 4;
              continue $sm;
            }

          case 4:
            this.o8_1 = 1;
            continue $sm;
          case 5:
            this.o8_1 = 6;
            continue $sm;
          case 6:
            this.p8_1 = 9;
            this.o8_1 = 8;
            continue $sm;
          case 7:
            this.p8_1 = 9;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof CancellationException) {
              var ignore = this.r8_1;
              this.o8_1 = 8;
              continue $sm;
            } else {
              var tmp_1 = this.r8_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var ignore_0 = this.r8_1;
                this.o8_1 = 8;
                continue $sm;
              } else {
                var tmp_2 = this.r8_1;
                if (tmp_2 instanceof ClosedSendChannelException) {
                  var ignore_1 = this.r8_1;
                  this.o8_1 = 8;
                  continue $sm;
                } else {
                  var tmp_3 = this.r8_1;
                  if (tmp_3 instanceof ClosedByteChannelException) {
                    var ignore_2 = this.r8_1;
                    this.o8_1 = 8;
                    continue $sm;
                  } else {
                    throw this.r8_1;
                  }
                }
              }
            }

          case 8:
            this.p8_1 = 9;
            return Unit_instance;
          case 9:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 9) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda).p2k = function ($this$launch, completion) {
    var i = new pinger$slambda(this.z3m_1, this.a3n_1, this.b3n_1, this.c3n_1, this.d3n_1, completion);
    i.e3n_1 = $this$launch;
    return i;
  };
  function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2k($this$launch, $completion);
    }, 1);
  }
  function pinger$lambda($actorJob) {
    return function (it) {
      $actorJob.w1p();
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
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new WebSocketChannelsConfig();
    this_0.f3g_1 = this_0.h3n();
    this_0.g3g_1 = this_0.h3n();
    tmp.e3g_1 = this_0;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function WebSocketChannelsConfig() {
    Companion_getInstance_2();
    this.f3g_1 = Companion_getInstance_3().i3n_1;
    this.g3g_1 = Companion_getInstance_3().i3n_1;
  }
  protoOf(WebSocketChannelsConfig).h3n = function () {
    return Companion_getInstance_3().i3n_1;
  };
  function from(_this__u8e3s4, config) {
    // Inline function 'kotlin.with' call
    var tmp;
    if (config.j3n_1 === 2147483647) {
      tmp = Channel(2147483647);
    } else if (config.k3n_1.equals(ChannelOverflow_SUSPEND_getInstance())) {
      tmp = Channel(config.j3n_1, BufferOverflow_SUSPEND_getInstance());
    } else if (config.k3n_1.equals(ChannelOverflow_CLOSE_getInstance())) {
      tmp = new BoundedChannel(config.j3n_1);
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Unsupported channel config.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.i3n_1 = new ChannelConfig(2147483647, ChannelOverflow_SUSPEND_getInstance());
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ChannelConfig(capacity, onOverflow) {
    Companion_getInstance_3();
    this.j3n_1 = capacity;
    this.k3n_1 = onOverflow;
  }
  protoOf(ChannelConfig).l3n = function () {
    return this.k3n_1.equals(ChannelOverflow_SUSPEND_getInstance()) && !(this.j3n_1 === 2147483647);
  };
  var ChannelOverflow_SUSPEND_instance;
  var ChannelOverflow_CLOSE_instance;
  var ChannelOverflow_entriesInitialized;
  function ChannelOverflow_initEntries() {
    if (ChannelOverflow_entriesInitialized)
      return Unit_instance;
    ChannelOverflow_entriesInitialized = true;
    ChannelOverflow_SUSPEND_instance = new ChannelOverflow('SUSPEND', 0);
    ChannelOverflow_CLOSE_instance = new ChannelOverflow('CLOSE', 1);
  }
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
      if (!tmp_0.p23()) {
        var tmp_1;
        if ($channel._v == null) {
          throwUninitializedPropertyAccessException('channel');
        } else {
          tmp_1 = $channel._v;
        }
        tmp_1.p25(new ChannelOverflowException('Channel overflowed'));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Companion_4() {
  }
  protoOf(Companion_4).m3n = function (capacity) {
    var channel = {_v: null};
    var tmp = BufferOverflow_DROP_OLDEST_getInstance();
    // Inline function 'kotlin.also' call
    var this_0 = Channel(capacity, tmp, BoundedChannel$Companion$createDelegate$lambda(channel));
    channel._v = this_0;
    return this_0;
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function BoundedChannel(capacity, delegate) {
    delegate = delegate === VOID ? Companion_instance_4.m3n(capacity) : delegate;
    this.n3n_1 = delegate;
  }
  protoOf(BoundedChannel).o3n = function (element) {
    var result = this.n3n_1.l25(element);
    if (!_ChannelResult___get_isSuccess__impl__odq1z9(result) && !_ChannelResult___get_isClosed__impl__mg7kuu(result)) {
      this.p25(new ChannelOverflowException('Channel overflowed'));
    }
    return result;
  };
  protoOf(BoundedChannel).l25 = function (element) {
    return this.o3n(element);
  };
  protoOf(BoundedChannel).p3n = function (element, $completion) {
    return this.n3n_1.k25(element, $completion);
  };
  protoOf(BoundedChannel).k25 = function (element, $completion) {
    return this.p3n(element, $completion);
  };
  protoOf(BoundedChannel).p25 = function (cause) {
    return this.n3n_1.p25(cause);
  };
  protoOf(BoundedChannel).p23 = function () {
    return this.n3n_1.p23();
  };
  protoOf(BoundedChannel).q3n = function ($completion) {
    return this.n3n_1.n25($completion);
  };
  protoOf(BoundedChannel).n25 = function ($completion) {
    return this.q3n($completion);
  };
  protoOf(BoundedChannel).t = function () {
    return this.n3n_1.t();
  };
  protoOf(BoundedChannel).v1p = function (cause) {
    this.n3n_1.v1p(cause);
  };
  function ChannelOverflowException(message) {
    RuntimeException_init_$Init$(message, this);
    captureStack(this, ChannelOverflowException);
  }
  function ChannelOverflow_SUSPEND_getInstance() {
    ChannelOverflow_initEntries();
    return ChannelOverflow_SUSPEND_instance;
  }
  function ChannelOverflow_CLOSE_getInstance() {
    ChannelOverflow_initEntries();
    return ChannelOverflow_CLOSE_instance;
  }
  function WebSocketExtension() {
  }
  function WebSocketExtensionsConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.t3n_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.u3n_1 = [false, false, false];
  }
  protoOf(WebSocketExtensionsConfig).i2x = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.t3n_1;
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
    return $this.w3n_1.r() ? '' : '; ' + joinToString($this.w3n_1, ';');
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.v3n_1 = name;
    this.w3n_1 = parameters;
  }
  protoOf(WebSocketExtensionHeader).toString = function () {
    return this.v3n_1 + ' ' + parametersToString(this);
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
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function closeExceptionally(_this__u8e3s4, cause, $completion) {
    var tmp;
    if (cause instanceof CancellationException) {
      tmp = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '');
    } else {
      tmp = CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), cause.toString());
    }
    var reason = tmp;
    return close(_this__u8e3s4, reason, $completion);
  }
  function $closeCOROUTINE$(_this__u8e3s4, reason, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f3o_1 = _this__u8e3s4;
    this.g3o_1 = reason;
  }
  protoOf($closeCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            this.p8_1 = 3;
            this.o8_1 = 1;
            suspendResult = this.f3o_1.d3g(Close_init_$Create$(this.g3o_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o8_1 = 2;
            suspendResult = this.f3o_1.h2b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p8_1 = 4;
            this.o8_1 = 5;
            continue $sm;
          case 3:
            this.p8_1 = 4;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var _unused_var__etf5q3 = this.r8_1;
              this.o8_1 = 5;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 4:
            throw this.r8_1;
          case 5:
            this.p8_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 4) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
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
    builder.w1m(reason.v3f_1);
    writeText(builder, reason.w3f_1);
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
    Close.call($this, Companion_getInstance_5().z3j_1);
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
  function Companion_5() {
    Companion_instance_5 = this;
    this.z3j_1 = new Int8Array(0);
  }
  protoOf(Companion_5).a3k = function (fin, frameType, data, rsv1, rsv2, rsv3) {
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
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_5();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    this.s3j_1 = fin;
    this.t3j_1 = frameType;
    this.u3j_1 = data;
    this.v3j_1 = disposableHandle;
    this.w3j_1 = rsv1;
    this.x3j_1 = rsv2;
    this.y3j_1 = rsv3;
  }
  protoOf(Frame).toString = function () {
    return 'Frame ' + this.t3j_1.toString() + ' (fin=' + this.s3j_1 + ', buffer len = ' + this.u3j_1.length + ')';
  };
  function get_OUTGOING_CHANNEL_CAPACITY() {
    return OUTGOING_CHANNEL_CAPACITY;
  }
  var OUTGOING_CHANNEL_CAPACITY;
  //region block: post-declaration
  protoOf(DefaultWebSocketSessionImpl).d3g = send;
  defineProp(protoOf(FrameTooBigException), 'message', function () {
    return this.e();
  });
  protoOf(BoundedChannel).r25 = close$default;
  protoOf(BoundedChannel).t25 = cancel$default;
  //endregion
  //region block: init
  NonDisposableHandle_instance = new NonDisposableHandle();
  Companion_instance_4 = new Companion_4();
  OUTGOING_CHANNEL_CAPACITY = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance;
  _.$_$.b = Companion_getInstance_2;
  _.$_$.c = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.d = Codes_NORMAL_getInstance;
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
