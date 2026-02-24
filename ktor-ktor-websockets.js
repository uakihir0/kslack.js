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
  var collectionSizeOrDefault = kotlin_kotlin.$_$.p5;
  var mapCapacity = kotlin_kotlin.$_$.d7;
  var coerceAtLeast = kotlin_kotlin.$_$.yb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var Unit_instance = kotlin_kotlin.$_$.w4;
  var protoOf = kotlin_kotlin.$_$.qb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.sa;
  var enumEntries = kotlin_kotlin.$_$.z8;
  var objectCreate = kotlin_kotlin.$_$.pb;
  var Enum = kotlin_kotlin.$_$.df;
  var initMetadataForClass = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.b;
  var toString = kotlin_kotlin.$_$.tb;
  var getStringHashCode = kotlin_kotlin.$_$.pa;
  var initMetadataForInterface = kotlin_kotlin.$_$.va;
  var Long = kotlin_kotlin.$_$.if;
  var isInterface = kotlin_kotlin.$_$.gb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var compare = kotlin_kotlin.$_$.g9;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var CoroutineImpl = kotlin_kotlin.$_$.x8;
  var THROW_CCE = kotlin_kotlin.$_$.of;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var initMetadataForLambda = kotlin_kotlin.$_$.wa;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.i;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var ensureNotNull = kotlin_kotlin.$_$.gg;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var ClosedSendChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.z;
  var ChannelIOException = kotlin_io_ktor_ktor_utils.$_$.b;
  var CancellationException = kotlin_kotlin.$_$.f8;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ta;
  var toString_0 = kotlin_kotlin.$_$.qg;
  var get_size = kotlin_io_ktor_ktor_io.$_$.a1;
  var fromInt = kotlin_kotlin.$_$.m9;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var joinToString = kotlin_kotlin.$_$.u6;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.h;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var readText = kotlin_io_ktor_ktor_io.$_$.y;
  var initMetadataForObject = kotlin_kotlin.$_$.xa;
  var Exception = kotlin_kotlin.$_$.ff;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.f1;
  var captureStack = kotlin_kotlin.$_$.ca;
  var initCauseBridge = kotlin_io_ktor_ktor_utils.$_$.g;
  var defineProp = kotlin_kotlin.$_$.ka;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var compareTo = kotlin_kotlin.$_$.ja;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.m;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var decodeToString = kotlin_kotlin.$_$.wc;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.e;
  var Random = kotlin_kotlin.$_$.wb;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var hex = kotlin_io_ktor_ktor_utils.$_$.a1;
  var ClosedByteChannelException = kotlin_io_ktor_ktor_io.$_$.l1;
  var BufferOverflow_SUSPEND_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.a9;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var _ChannelResult___get_isClosed__impl__mg7kuu = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var close$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var SendChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var ReceiveChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var RuntimeException = kotlin_kotlin.$_$.nf;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.y1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var split = kotlin_kotlin.$_$.rd;
  var first = kotlin_kotlin.$_$.n6;
  var isCharSequence = kotlin_kotlin.$_$.cb;
  var trim = kotlin_kotlin.$_$.re;
  var drop = kotlin_kotlin.$_$.h6;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ng;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Codes, 'Codes', VOID, Enum);
  initMetadataForClass(CloseReason, 'CloseReason');
  function send(frame, $completion) {
    return this.f3c().z23(frame, $completion);
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
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
  initMetadataForClass(FrameTooBigException, 'FrameTooBigException', VOID, Exception, [Exception, CopyableThrowable]);
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
      var tmp$ret$0 = element.u3b_1;
      destination.q2(tmp$ret$0, element);
    }
    tmp.v3b_1 = destination;
    this.w3b_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  protoOf(Companion).x3b = function (code) {
    return this.v3b_1.n2(code);
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
    CloseReason.call($this, code.u3b_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, objectCreate(protoOf(CloseReason)));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.u3b_1 = code;
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
    this.y3b_1 = code;
    this.z3b_1 = message;
  }
  protoOf(CloseReason).a3c = function () {
    return Companion_getInstance().x3b(this.y3b_1);
  };
  protoOf(CloseReason).toString = function () {
    var tmp0_elvis_lhs = this.a3c();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.y3b_1 : tmp0_elvis_lhs) + ', message=' + this.z3b_1 + ')';
  };
  protoOf(CloseReason).hashCode = function () {
    var result = this.y3b_1;
    result = imul(result, 31) + getStringHashCode(this.z3b_1) | 0;
    return result;
  };
  protoOf(CloseReason).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    if (!(this.y3b_1 === other.y3b_1))
      return false;
    if (!(this.z3b_1 === other.z3b_1))
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
    pingIntervalMillis = pingIntervalMillis === VOID ? new Long(0, 0) : pingIntervalMillis;
    timeoutMillis = timeoutMillis === VOID ? new Long(15000, 0) : timeoutMillis;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_2().h3c_1 : channelsConfig;
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    // Inline function 'kotlin.require' call
    if (!!isInterface(session, DefaultWebSocketSession)) {
      var message = 'Cannot wrap other DefaultWebSocketSession';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DefaultWebSocketSessionImpl(session, pingIntervalMillis, timeoutMillis, channelsConfig.i3c_1, channelsConfig.j3c_1);
  }
  function runIncomingProcessor($this, ponger) {
    var tmp = get_IncomingProcessorCoroutineName().nf(Dispatchers_getInstance().r1x_1);
    return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger, null));
  }
  function runOutgoingProcessor($this) {
    var tmp = get_OutgoingProcessorCoroutineName().nf(Dispatchers_getInstance().r1x_1);
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
    var tmp = new $sendCloseSequenceCOROUTINE$($this, reason, exception, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function sendCloseSequence$default($this, reason, exception, $completion, $super) {
    exception = exception === VOID ? null : exception;
    return sendCloseSequence($this, reason, exception, $completion);
  }
  function tryClose($this) {
    return $this.o3d_1.atomicfu$compareAndSet(false, true);
  }
  function runOrCancelPinger($this) {
    var interval = $this.r3d_1;
    var tmp;
    if ($this.o3d_1.kotlinx$atomicfu$value) {
      tmp = null;
    } else if (compare(interval, new Long(0, 0)) > 0) {
      var tmp_0 = $this.h3d_1.f3c();
      var tmp_1 = $this.s3d_1;
      tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this, null));
    } else {
      tmp = null;
    }
    var newPinger = tmp;
    var tmp0_safe_receiver = $this.i3d_1.atomicfu$getAndSet(newPinger);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.h24();
    var tmp2_safe_receiver = newPinger == null ? null : new ChannelResult(newPinger.a24(Companion_getInstance_0().u3d_1));
    if (tmp2_safe_receiver == null)
      null;
    else
      _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.k22_1);
    if ($this.o3d_1.kotlinx$atomicfu$value && !(newPinger == null)) {
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
    var _iterator__ex2g4s = $this.h3e().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.i3e(current);
    }
    return accumulator;
  }
  function processOutgoingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.h3e().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.j3e(current);
    }
    return accumulator;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.u3d_1 = new Pong(new Int8Array(0), NonDisposableHandle_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation) {
    this.s3e_1 = $incomingJob;
    this.t3e_1 = $outgoingJob;
    this.u3e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$start$slambda).b2j = function ($this$launch, $completion) {
    var tmp = this.c2j($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).j9 = function (p1, $completion) {
    return this.b2j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.s3e_1.h1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o8_1 = 2;
            suspendResult = this.t3e_1.h1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u3e_1.k3d_1.l1o();
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
  protoOf(DefaultWebSocketSessionImpl$start$slambda).c2j = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$start$slambda(this.s3e_1, this.t3e_1, this.u3e_1, completion);
    i.v3e_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$start$slambda_0($incomingJob, $outgoingJob, this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b2j($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation) {
    this.e3f_1 = this$0;
    this.f3f_1 = $ponger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).b2j = function ($this$launch, $completion) {
    var tmp = this.c2j($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).j9 = function (p1, $completion) {
    return this.b2j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 39;
            this.q3f_1 = null;
            this.j3f_1 = null;
            this.i3f_1 = false;
            this.k3f_1 = Unit_instance;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 2;
            continue $sm;
          case 2:
            this.p8_1 = 33;
            this.p8_1 = 32;
            this.u3f_1 = this.e3f_1.h3d_1.e3c();
            this.o8_1 = 3;
            continue $sm;
          case 3:
            this.n3f_1 = this.u3f_1;
            this.m3f_1 = null;
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
            this.t3f_1 = this.n3f_1.t();
            this.o8_1 = 7;
            continue $sm;
          case 7:
            this.o8_1 = 8;
            suspendResult = this.t3f_1.c22(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (!suspendResult) {
              this.o8_1 = 26;
              continue $sm;
            }

            var e = this.t3f_1.v();
            this.s3f_1 = e;
            this.o8_1 = 9;
            continue $sm;
          case 9:
            this.r3f_1 = this.s3f_1;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.c2r('WebSocketSession(' + toString(this.g3f_1) + ') receiving frame ' + this.r3f_1.toString());
            }

            var tmp0_subject = this.r3f_1;
            if (tmp0_subject instanceof Close) {
              if (!this.e3f_1.f3c().e22()) {
                this.o8_1 = 18;
                var tmp_0 = this.e3f_1.f3c();
                var tmp1_elvis_lhs = readReason(this.r3f_1);
                suspendResult = tmp_0.z23(Close_init_$Create$(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), this);
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
                var tmp2_safe_receiver = this.e3f_1.i3d_1.kotlinx$atomicfu$value;
                if (tmp2_safe_receiver == null) {
                  this.p3f_1 = null;
                  this.o8_1 = 17;
                  continue $sm;
                } else {
                  this.o8_1 = 16;
                  suspendResult = tmp2_safe_receiver.z23(this.r3f_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                if (tmp0_subject instanceof Ping) {
                  this.o8_1 = 15;
                  suspendResult = this.f3f_1.z23(this.r3f_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.o8_1 = 10;
                  suspendResult = checkMaxFrameSize(this.e3f_1, this.j3f_1, this.r3f_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

          case 10:
            if (!this.r3f_1.v3f_1) {
              if (this.q3f_1 == null) {
                this.q3f_1 = this.r3f_1;
              }
              if (this.j3f_1 == null) {
                this.j3f_1 = BytePacketBuilder();
              }
              writeFully(this.j3f_1, this.r3f_1.x3f_1);
              this.o8_1 = 21;
              continue $sm;
            } else {
              this.o8_1 = 11;
              continue $sm;
            }

          case 11:
            if (this.q3f_1 == null) {
              this.o8_1 = 14;
              suspendResult = this.e3f_1.m3d_1.z23(processIncomingExtensions(this.e3f_1, this.r3f_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 12;
              continue $sm;
            }

          case 12:
            writeFully(ensureNotNull(this.j3f_1), this.r3f_1.x3f_1);
            var defragmented = Companion_getInstance_5().d3g(true, this.q3f_1.w3f_1, readByteArray(build(this.j3f_1)), this.q3f_1.z3f_1, this.q3f_1.a3g_1, this.q3f_1.b3g_1);
            this.q3f_1 = null;
            this.o8_1 = 13;
            suspendResult = this.e3f_1.m3d_1.z23(processIncomingExtensions(this.e3f_1, defragmented), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            var tmp_1 = this;
            tmp_1.o3f_1 = Unit_instance;
            this.o8_1 = 20;
            continue $sm;
          case 14:
            this.o8_1 = 21;
            continue $sm;
          case 15:
            var tmp_2 = this;
            tmp_2.o3f_1 = Unit_instance;
            this.o8_1 = 20;
            continue $sm;
          case 16:
            var tmp_3 = this;
            tmp_3.p3f_1 = Unit_instance;
            this.o8_1 = 17;
            continue $sm;
          case 17:
            this.o3f_1 = this.p3f_1;
            this.o8_1 = 20;
            continue $sm;
          case 18:
            this.o8_1 = 19;
            continue $sm;
          case 19:
            this.i3f_1 = true;
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
            cancelConsumed(this.n3f_1, this.m3f_1);
            this.p8_1 = 39;
            this.o8_1 = 23;
            continue $sm;
          case 23:
            this.p8_1 = 39;
            this.f3f_1.h24();
            var tmp0_safe_receiver = this.j3f_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.d4();
            }

            this.e3f_1.m3d_1.h24();
            if (!this.i3f_1) {
              this.o8_1 = 24;
              suspendResult = close(this.e3f_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
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
            cancelConsumed(this.n3f_1, this.m3f_1);
            this.o8_1 = 31;
            continue $sm;
          case 28:
            this.p8_1 = 29;
            var tmp_7 = this.r8_1;
            if (tmp_7 instanceof Error) {
              var e_0 = this.r8_1;
              var tmp_8 = this;
              this.m3f_1 = e_0;
              throw e_0;
            } else {
              throw this.r8_1;
            }

          case 29:
            this.p8_1 = 32;
            var t = this.r8_1;
            cancelConsumed(this.n3f_1, this.m3f_1);
            throw t;
          case 30:
            this.p8_1 = 32;
            cancelConsumed(this.n3f_1, this.m3f_1);
            if (false) {
              this.o8_1 = 3;
              continue $sm;
            }

            this.o8_1 = 31;
            continue $sm;
          case 31:
            this.k3f_1 = Unit_instance;
            this.p8_1 = 39;
            this.o8_1 = 36;
            continue $sm;
          case 32:
            this.p8_1 = 33;
            var tmp_9 = this.r8_1;
            if (tmp_9 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.r8_1;
              var tmp_10 = this;
              tmp_10.k3f_1 = Unit_instance;
              this.p8_1 = 39;
              this.o8_1 = 36;
              continue $sm;
            } else {
              var tmp_11 = this.r8_1;
              if (tmp_11 instanceof Error) {
                var cause = this.r8_1;
                var tmp_12 = this;
                this.f3f_1.h24();
                tmp_12.k3f_1 = this.e3f_1.m3d_1.f24(cause);
                this.p8_1 = 39;
                this.o8_1 = 36;
                continue $sm;
              } else {
                throw this.r8_1;
              }
            }

          case 33:
            this.p8_1 = 39;
            this.l3f_1 = this.r8_1;
            this.f3f_1.h24();
            var tmp0_safe_receiver_0 = this.j3f_1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.d4();
            }

            this.e3f_1.m3d_1.h24();
            if (!this.i3f_1) {
              this.o8_1 = 34;
              suspendResult = close(this.e3f_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
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
            throw this.l3f_1;
          case 36:
            this.h3f_1 = this.k3f_1;
            this.p8_1 = 39;
            this.f3f_1.h24();
            var tmp0_safe_receiver_1 = this.j3f_1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              tmp0_safe_receiver_1.d4();
            }

            this.e3f_1.m3d_1.h24();
            if (!this.i3f_1) {
              this.o8_1 = 37;
              suspendResult = close(this.e3f_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
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
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).c2j = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this.e3f_1, this.f3f_1, completion);
    i.g3f_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b2j($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation) {
    this.m3g_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).b2j = function ($this$launch, $completion) {
    var tmp = this.c2j($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).j9 = function (p1, $completion) {
    return this.b2j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = outgoingProcessorLoop(this.m3g_1, this);
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
                  suspendResult = sendCloseSequence$default(this.m3g_1, CloseReason_init_$Create$(Codes_NORMAL_getInstance(), ''), VOID, this);
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
                      this.m3g_1.n3d_1.k1o(CancellationException_init_$Create$('Failed to send frame', cause));
                      this.o8_1 = 6;
                      suspendResult = closeExceptionally(this.m3g_1.h3d_1, cause, this);
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
            this.m3g_1.n3d_1.j24();
            this.o8_1 = 8;
            suspendResult = close(this.m3g_1.h3d_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return Unit_instance;
          case 9:
            this.p8_1 = 13;
            this.o3g_1 = this.r8_1;
            this.m3g_1.n3d_1.j24();
            this.o8_1 = 10;
            suspendResult = close(this.m3g_1.h3d_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            throw this.o3g_1;
          case 11:
            this.p8_1 = 13;
            this.m3g_1.n3d_1.j24();
            this.o8_1 = 12;
            suspendResult = close(this.m3g_1.h3d_1, VOID, this);
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
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).c2j = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this.m3g_1, completion);
    i.n3g_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b2j($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation) {
    this.x3g_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).z3g = function (it, $completion) {
    var tmp = this.a3h(it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).j9 = function (p1, $completion) {
    return this.z3g(p1 instanceof CloseReason ? p1 : THROW_CCE(), $completion);
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
            suspendResult = sendCloseSequence(this.x3g_1, this.y3g_1, IOException_init_$Create$('Ping timeout'), this);
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
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).a3h = function (it, completion) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this.x3g_1, completion);
    i.y3g_1 = it;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.z3g(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $outgoingProcessorLoopCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s3c_1 = _this__u8e3s4;
  }
  protoOf($outgoingProcessorLoopCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 7;
            this.u3c_1 = this.s3c_1.n3d_1.t();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.o8_1 = 2;
            suspendResult = this.u3c_1.c22(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.o8_1 = 6;
              continue $sm;
            }

            var frame = this.u3c_1.v();
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.c2r('Sending ' + frame.toString() + ' from session ' + toString(this.s3c_1));
            }

            if (frame instanceof Close) {
              this.o8_1 = 3;
              suspendResult = sendCloseSequence$default(this.s3c_1, readReason(frame), VOID, this);
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
                this.t3c_1 = processOutgoingExtensions(this.s3c_1, frame);
                this.o8_1 = 4;
                continue $sm;
              } else {
                this.t3c_1 = frame;
                this.o8_1 = 4;
                continue $sm;
              }
            }

          case 3:
            this.o8_1 = 6;
            var tmp_1 = this;
            continue $sm;
          case 4:
            var processedFrame = this.t3c_1;
            this.o8_1 = 5;
            suspendResult = this.s3c_1.h3d_1.f3c().z23(processedFrame, this);
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
    this.d3d_1 = _this__u8e3s4;
    this.e3d_1 = reason;
    this.f3d_1 = exception;
  }
  protoOf($sendCloseSequenceCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            if (!tryClose(this.d3d_1))
              return Unit_instance;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.c2r('Sending Close Sequence for session ' + toString(this.d3d_1) + ' with reason ' + toString_0(this.e3d_1) + ' and exception ' + toString_0(this.f3d_1));
            }

            this.d3d_1.k3d_1.t1t();
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.e3d_1;
            tmp_0.g3d_1 = tmp0_elvis_lhs == null ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : tmp0_elvis_lhs;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 5;
            runOrCancelPinger(this.d3d_1);
            if (!(this.g3d_1.y3b_1 === Codes_CLOSED_ABNORMALLY_getInstance().u3b_1)) {
              this.o8_1 = 2;
              suspendResult = this.d3d_1.h3d_1.f3c().z23(Close_init_$Create$(this.g3d_1), this);
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
            this.d3d_1.j3d_1.r1t(this.g3d_1);
            if (!(this.f3d_1 == null)) {
              this.d3d_1.n3d_1.f24(this.f3d_1);
              this.d3d_1.m3d_1.f24(this.f3d_1);
            }

            return Unit_instance;
          case 5:
            this.p8_1 = 6;
            var t = this.r8_1;
            this.d3d_1.j3d_1.r1t(this.g3d_1);
            if (!(this.f3d_1 == null)) {
              this.d3d_1.n3d_1.f24(this.f3d_1);
              this.d3d_1.m3d_1.f24(this.f3d_1);
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
    this.d3e_1 = _this__u8e3s4;
    this.e3e_1 = packet;
    this.f3e_1 = frame;
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
            var tmp_1 = this.f3e_1.x3f_1.length;
            var tmp0_safe_receiver = this.e3e_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_size(tmp0_safe_receiver);
            tmp_0.g3e_1 = tmp_1 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
            if (compare(fromInt(this.g3e_1), this.d3e_1.d3c()) > 0) {
              var tmp2_safe_receiver = this.e3e_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                tmp2_safe_receiver.d4();
              }
              this.o8_1 = 2;
              suspendResult = close(this.d3e_1, CloseReason_init_$Create$(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + this.g3e_1 + '. Max size is ' + this.d3e_1.d3c().toString()), this);
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
            throw new FrameTooBigException(fromInt(this.g3e_1));
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
    this.h3d_1 = raw;
    this.i3d_1 = atomic$ref$1(null);
    this.j3d_1 = CompletableDeferred();
    this.k3d_1 = Job();
    this.l3d_1 = this.h3d_1.b1n().lf(Key_instance).nf(this.k3d_1).nf(new CoroutineName('ws-default'));
    this.m3d_1 = from(Factory_getInstance(), incomingFramesConfig);
    this.n3d_1 = from(Factory_getInstance(), outgoingFramesConfig);
    this.o3d_1 = atomic$boolean$1(false);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p3d_1 = ArrayList_init_$Create$();
    this.q3d_1 = atomic$boolean$1(false);
    this.r3d_1 = pingIntervalMillis;
    this.s3d_1 = timeoutMillis;
    this.t3d_1 = this.j3d_1;
  }
  protoOf(DefaultWebSocketSessionImpl).b1n = function () {
    return this.l3d_1;
  };
  protoOf(DefaultWebSocketSessionImpl).e3c = function () {
    return this.m3d_1;
  };
  protoOf(DefaultWebSocketSessionImpl).f3c = function () {
    return this.n3d_1;
  };
  protoOf(DefaultWebSocketSessionImpl).h3e = function () {
    return this.p3d_1;
  };
  protoOf(DefaultWebSocketSessionImpl).c3c = function (value) {
    this.h3d_1.c3c(value);
  };
  protoOf(DefaultWebSocketSessionImpl).d3c = function () {
    return this.h3d_1.d3c();
  };
  protoOf(DefaultWebSocketSessionImpl).b3c = function (negotiatedExtensions) {
    if (!this.q3d_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var message = 'WebSocket session ' + toString(this) + ' is already started.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$0 = 'Starting default WebSocketSession(' + toString(this) + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions));
      this_0.c2r(tmp$ret$0);
    }
    this.p3d_1.i1(negotiatedExtensions);
    runOrCancelPinger(this);
    var incomingJob = runIncomingProcessor(this, ponger(this, this.f3c()));
    var outgoingJob = runOutgoingProcessor(this);
    launch(this, VOID, VOID, DefaultWebSocketSessionImpl$start$slambda_0(incomingJob, outgoingJob, this, null));
  };
  protoOf(DefaultWebSocketSessionImpl).v29 = function ($completion) {
    return this.h3d_1.v29($completion);
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
    if (_this__u8e3s4.x3f_1.length < 2) {
      return null;
    }
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    writeFully(builder, _this__u8e3s4.x3f_1);
    var packet = builder;
    var code = packet.d1k();
    var message = readText(packet);
    return new CloseReason(code, message);
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).m1q = function () {
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
  function FrameTooBigException(frameSize) {
    Exception_init_$Init$(this);
    captureStack(this, FrameTooBigException);
    this.b3h_1 = frameSize;
    delete this.message;
  }
  protoOf(FrameTooBigException).e = function () {
    return 'Frame is too big: ' + this.b3h_1.toString();
  };
  protoOf(FrameTooBigException).c1u = function () {
    // Inline function 'kotlin.also' call
    var this_0 = new FrameTooBigException(this.b3h_1);
    initCauseBridge(this_0, this);
    return this_0;
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
      var maxValue = maxElem.f3h_1;
      do {
        var e = iterator.v();
        var v = e.f3h_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.u());
      tmp$ret$0 = maxElem;
    }
    tmp.g3h_1 = ensureNotNull(tmp$ret$0).f3h_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.g3h_1 + 1 | 0;
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
          if (element.f3h_1 === tmp_4) {
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
    tmp_0.h3h_1 = tmp_3;
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
    this.e3h_1 = controlFrame;
    this.f3h_1 = opcode;
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
    var tmp = actorJob.nf(get_PingerCoroutineName());
    launch(_this__u8e3s4, tmp, VOID, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing, null));
    var tmp_0 = ensureNotNull(_this__u8e3s4.b1n().b9(Key_instance));
    tmp_0.d1o(pinger$lambda(actorJob));
    return channel;
  }
  function ponger$slambda($channel, $outgoing, resultContinuation) {
    this.q3h_1 = $channel;
    this.r3h_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ponger$slambda).b2j = function ($this$launch, $completion) {
    var tmp = this.c2j($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(ponger$slambda).j9 = function (p1, $completion) {
    return this.b2j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            this.w3h_1 = this.q3h_1;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.u3h_1 = this.w3h_1;
            this.t3h_1 = null;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            continue $sm;
          case 3:
            this.p8_1 = 10;
            this.p8_1 = 9;
            this.v3h_1 = this.u3h_1.t();
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.o8_1 = 5;
            suspendResult = this.v3h_1.c22(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.o8_1 = 7;
              continue $sm;
            }

            var e = this.v3h_1.v();
            get_LOGGER().c2r('Received ping message, sending pong message');
            this.o8_1 = 6;
            suspendResult = this.r3h_1.z23(new Pong(e.x3f_1), this);
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
            cancelConsumed(this.u3h_1, this.t3h_1);
            this.o8_1 = 12;
            continue $sm;
          case 9:
            this.p8_1 = 10;
            var tmp_1 = this.r8_1;
            if (tmp_1 instanceof Error) {
              var e_0 = this.r8_1;
              var tmp_2 = this;
              this.t3h_1 = e_0;
              throw e_0;
            } else {
              throw this.r8_1;
            }

          case 10:
            this.p8_1 = 13;
            var t = this.r8_1;
            cancelConsumed(this.u3h_1, this.t3h_1);
            throw t;
          case 11:
            this.p8_1 = 13;
            cancelConsumed(this.u3h_1, this.t3h_1);
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
  protoOf(ponger$slambda).c2j = function ($this$launch, completion) {
    var i = new ponger$slambda(this.q3h_1, this.r3h_1, completion);
    i.s3h_1 = $this$launch;
    return i;
  };
  function ponger$slambda_0($channel, $outgoing, resultContinuation) {
    var i = new ponger$slambda($channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b2j($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda($channel, resultContinuation) {
    this.f3i_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda).b2j = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.c2j($this$withTimeoutOrNull, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(pinger$slambda$slambda).j9 = function (p1, $completion) {
    return this.b2j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.f3i_1.d24(this);
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
  protoOf(pinger$slambda$slambda).c2j = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda(this.f3i_1, completion);
    i.g3i_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_0($channel, resultContinuation) {
    var i = new pinger$slambda$slambda($channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.b2j($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation) {
    this.p3i_1 = $outgoing;
    this.q3i_1 = $pingMessage;
    this.r3i_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda_1).b2j = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.c2j($this$withTimeoutOrNull, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(pinger$slambda$slambda_1).j9 = function (p1, $completion) {
    return this.b2j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            get_LOGGER().c2r('WebSocket Pinger: sending ping frame');
            this.o8_1 = 1;
            suspendResult = this.p3i_1.z23(new Ping(toByteArray(this.q3i_1, Charsets_getInstance().c2k_1)), this);
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
            suspendResult = this.r3i_1.d24(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.t3i_1 = suspendResult;
            if (decodeToString(this.t3i_1.x3f_1, 0, 0 + this.t3i_1.x3f_1.length | 0) === this.q3i_1) {
              get_LOGGER().c2r('WebSocket Pinger: received valid pong frame ' + this.t3i_1.toString());
              this.o8_1 = 5;
              continue $sm;
            } else {
              this.o8_1 = 4;
              continue $sm;
            }

          case 4:
            get_LOGGER().c2r('WebSocket Pinger: received invalid pong frame ' + this.t3i_1.toString() + ', continue waiting');
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
  protoOf(pinger$slambda$slambda_1).c2j = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda_1(this.p3i_1, this.q3i_1, this.r3i_1, completion);
    i.s3i_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel, resultContinuation) {
    var i = new pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.b2j($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    this.c3j_1 = $periodMillis;
    this.d3j_1 = $timeoutMillis;
    this.e3j_1 = $onTimeout;
    this.f3j_1 = $channel;
    this.g3j_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda).b2j = function ($this$launch, $completion) {
    var tmp = this.c2j($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(pinger$slambda).j9 = function (p1, $completion) {
    return this.b2j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 9;
            get_LOGGER().c2r('Starting WebSocket pinger coroutine with period ' + this.c3j_1.toString() + ' ms and timeout ' + this.d3j_1.toString() + ' ms');
            this.j3j_1 = Random(getTimeMillis());
            this.i3j_1 = new Int8Array(32);
            this.p8_1 = 7;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.o8_1 = 6;
              continue $sm;
            }

            this.o8_1 = 2;
            suspendResult = withTimeoutOrNull(this.c3j_1, pinger$slambda$slambda_0(this.f3j_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j3j_1.bh(this.i3j_1);
            var pingMessage = '[ping ' + hex(this.i3j_1) + ' ping]';
            this.o8_1 = 3;
            suspendResult = withTimeoutOrNull(this.d3j_1, pinger$slambda$slambda_2(this.g3j_1, pingMessage, this.f3j_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rc = suspendResult;
            if (rc == null) {
              get_LOGGER().c2r('WebSocket pinger has timed out');
              this.o8_1 = 5;
              suspendResult = this.e3j_1(CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), this);
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
  protoOf(pinger$slambda).c2j = function ($this$launch, completion) {
    var i = new pinger$slambda(this.c3j_1, this.d3j_1, this.e3j_1, this.f3j_1, this.g3j_1, completion);
    i.h3j_1 = $this$launch;
    return i;
  };
  function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b2j($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$lambda($actorJob) {
    return function (it) {
      $actorJob.l1o();
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
    this_0.i3c_1 = this_0.k3j();
    this_0.j3c_1 = this_0.k3j();
    tmp.h3c_1 = this_0;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function WebSocketChannelsConfig() {
    Companion_getInstance_2();
    this.i3c_1 = Companion_getInstance_3().l3j_1;
    this.j3c_1 = Companion_getInstance_3().l3j_1;
  }
  protoOf(WebSocketChannelsConfig).k3j = function () {
    return Companion_getInstance_3().l3j_1;
  };
  function from(_this__u8e3s4, config) {
    // Inline function 'kotlin.with' call
    var tmp;
    if (config.m3j_1 === 2147483647) {
      tmp = Channel(2147483647);
    } else if (config.n3j_1.equals(ChannelOverflow_SUSPEND_getInstance())) {
      tmp = Channel(config.m3j_1, BufferOverflow_SUSPEND_getInstance());
    } else if (config.n3j_1.equals(ChannelOverflow_CLOSE_getInstance())) {
      tmp = new BoundedChannel(config.m3j_1);
    } else {
      var message = 'Unsupported channel config.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.l3j_1 = new ChannelConfig(2147483647, ChannelOverflow_SUSPEND_getInstance());
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ChannelConfig(capacity, onOverflow) {
    Companion_getInstance_3();
    this.m3j_1 = capacity;
    this.n3j_1 = onOverflow;
  }
  protoOf(ChannelConfig).o3j = function () {
    return this.n3j_1.equals(ChannelOverflow_SUSPEND_getInstance()) && !(this.m3j_1 === 2147483647);
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
      if (!tmp_0.e22()) {
        var tmp_1;
        if ($channel._v == null) {
          throwUninitializedPropertyAccessException('channel');
        } else {
          tmp_1 = $channel._v;
        }
        tmp_1.f24(new ChannelOverflowException('Channel overflowed'));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Companion_4() {
  }
  protoOf(Companion_4).p3j = function (capacity) {
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
    delegate = delegate === VOID ? Companion_instance_4.p3j(capacity) : delegate;
    this.q3j_1 = delegate;
  }
  protoOf(BoundedChannel).r3j = function (element) {
    var result = this.q3j_1.a24(element);
    if (!_ChannelResult___get_isSuccess__impl__odq1z9(result) && !_ChannelResult___get_isClosed__impl__mg7kuu(result)) {
      this.f24(new ChannelOverflowException('Channel overflowed'));
    }
    return result;
  };
  protoOf(BoundedChannel).a24 = function (element) {
    return this.r3j((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(BoundedChannel).s3j = function (element, $completion) {
    return this.q3j_1.z23(element, $completion);
  };
  protoOf(BoundedChannel).z23 = function (element, $completion) {
    return this.s3j((element == null ? true : !(element == null)) ? element : THROW_CCE(), $completion);
  };
  protoOf(BoundedChannel).f24 = function (cause) {
    return this.q3j_1.f24(cause);
  };
  protoOf(BoundedChannel).e22 = function () {
    return this.q3j_1.e22();
  };
  protoOf(BoundedChannel).t3j = function ($completion) {
    return this.q3j_1.d24($completion);
  };
  protoOf(BoundedChannel).d24 = function ($completion) {
    return this.t3j($completion);
  };
  protoOf(BoundedChannel).t = function () {
    return this.q3j_1.t();
  };
  protoOf(BoundedChannel).k1o = function (cause) {
    this.q3j_1.k1o(cause);
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
    tmp.w3j_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.x3j_1 = [false, false, false];
  }
  protoOf(WebSocketExtensionsConfig).p2u = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.w3j_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$0 = item();
      destination.c1(tmp$ret$0);
    }
    return destination;
  };
  function parametersToString($this) {
    return $this.z3j_1.r() ? '' : '; ' + joinToString($this.z3j_1, ';');
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.y3j_1 = name;
    this.z3j_1 = parameters;
  }
  protoOf(WebSocketExtensionHeader).toString = function () {
    return this.y3j_1 + ' ' + parametersToString(this);
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
        var tmp$ret$2 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
        destination_0.c1(tmp$ret$2);
      }
      var parameters = destination_0;
      var tmp$ret$5 = new WebSocketExtensionHeader(name, parameters);
      destination.c1(tmp$ret$5);
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
    this.i3k_1 = _this__u8e3s4;
    this.j3k_1 = reason;
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
            suspendResult = this.i3k_1.g3c(Close_init_$Create$(this.j3k_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o8_1 = 2;
            suspendResult = this.i3k_1.v29(this);
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
    builder.l1l(reason.y3b_1);
    writeText(builder, reason.z3b_1);
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
    Close.call($this, Companion_getInstance_5().c3g_1);
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
    this.c3g_1 = new Int8Array(0);
  }
  protoOf(Companion_5).d3g = function (fin, frameType, data, rsv1, rsv2, rsv3) {
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
    this.v3f_1 = fin;
    this.w3f_1 = frameType;
    this.x3f_1 = data;
    this.y3f_1 = disposableHandle;
    this.z3f_1 = rsv1;
    this.a3g_1 = rsv2;
    this.b3g_1 = rsv3;
  }
  protoOf(Frame).toString = function () {
    return 'Frame ' + this.w3f_1.toString() + ' (fin=' + this.v3f_1 + ', buffer len = ' + this.x3f_1.length + ')';
  };
  function get_OUTGOING_CHANNEL_CAPACITY() {
    return OUTGOING_CHANNEL_CAPACITY;
  }
  var OUTGOING_CHANNEL_CAPACITY;
  //region block: post-declaration
  protoOf(DefaultWebSocketSessionImpl).g3c = send;
  defineProp(protoOf(FrameTooBigException), 'message', function () {
    return this.e();
  });
  protoOf(BoundedChannel).h24 = close$default;
  protoOf(BoundedChannel).j24 = cancel$default;
  //endregion
  //region block: init
  NonDisposableHandle_instance = new NonDisposableHandle();
  Companion_instance_4 = new Companion_4();
  OUTGOING_CHANNEL_CAPACITY = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_NORMAL_getInstance;
  _.$_$.c = send;
  _.$_$.d = Binary_init_$Create$;
  _.$_$.e = Close_init_$Create$;
  _.$_$.f = Text_init_$Create$;
  _.$_$.g = Companion_getInstance;
  _.$_$.h = Companion_getInstance_2;
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
