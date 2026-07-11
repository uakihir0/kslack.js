(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './kotlinx-atomicfu.js', './ktor-ktor-events.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-http-cio.js', './ktor-ktor-websockets.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-atomicfu.js'), require('./ktor-ktor-events.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-http-cio.js'), require('./ktor-ktor-websockets.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-events'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-events' was not found. Please, check whether 'ktor-ktor-events' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http-cio'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http-cio' was not found. Please, check whether 'ktor-ktor-http-cio' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-websockets'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-websockets' was not found. Please, check whether 'ktor-ktor-websockets' is loaded prior to 'ktor-ktor-client-core'.");
    }
    globalThis['ktor-ktor-client-core'] = factory(typeof globalThis['ktor-ktor-client-core'] === 'undefined' ? {} : globalThis['ktor-ktor-client-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-atomicfu'], globalThis['ktor-ktor-events'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-http-cio'], globalThis['ktor-ktor-websockets']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_http_cio, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.z2;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var protoOf = kotlin_kotlin.$_$.ac;
  var objectCreate = kotlin_kotlin.$_$.zb;
  var CancellationException = kotlin_kotlin.$_$.s8;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.y3;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var CoroutineImpl = kotlin_kotlin.$_$.l9;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.i;
  var toString = kotlin_kotlin.$_$.dc;
  var getKClassFromExpression = kotlin_kotlin.$_$.sc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.t8;
  var initMetadataForLambda = kotlin_kotlin.$_$.hb;
  var VOID = kotlin_kotlin.$_$.c;
  var constructCallableReference = kotlin_kotlin.$_$.ta;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eb;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.o;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.n;
  var AutoCloseable = kotlin_kotlin.$_$.if;
  var isInterface = kotlin_kotlin.$_$.rb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var initMetadataForClass = kotlin_kotlin.$_$.cb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r3;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.k1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o2;
  var arrayOf = kotlin_kotlin.$_$.ng;
  var createKType = kotlin_kotlin.$_$.rc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var initMetadataForCompanion = kotlin_kotlin.$_$.db;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.m;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.va;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.o9;
  var IllegalStateException = kotlin_kotlin.$_$.tf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.o4;
  var captureStack = kotlin_kotlin.$_$.la;
  var defineProp = kotlin_kotlin.$_$.ua;
  var UnsupportedOperationException = kotlin_kotlin.$_$.lg;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.c5;
  var trimIndent = kotlin_kotlin.$_$.bf;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.q1;
  var fromInt = kotlin_kotlin.$_$.w9;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.j1;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.j;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.p4;
  var initMetadataForInterface = kotlin_kotlin.$_$.gb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var writer = kotlin_io_ktor_ktor_io.$_$.v1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.w;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.v;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.c;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.t;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.u;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.r;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.s;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.m1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m4;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.x;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var emptySet = kotlin_kotlin.$_$.u6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i3;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.j1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.w3;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var getKClass = kotlin_kotlin.$_$.tc;
  var getStarKTypeProjection = kotlin_kotlin.$_$.uc;
  var ioDispatcher = kotlin_io_ktor_ktor_io.$_$.s1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.q;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var lazy = kotlin_kotlin.$_$.xg;
  var KProperty1 = kotlin_kotlin.$_$.yc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.za;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var KtMutableMap = kotlin_kotlin.$_$.s5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.pc;
  var setOf = kotlin_kotlin.$_$.z7;
  var get = kotlin_kotlin.$_$.h9;
  var fold = kotlin_kotlin.$_$.g9;
  var minusKey = kotlin_kotlin.$_$.i9;
  var plus = kotlin_kotlin.$_$.k9;
  var Element = kotlin_kotlin.$_$.j9;
  var joinToString = kotlin_kotlin.$_$.f7;
  var setOf_0 = kotlin_kotlin.$_$.a8;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.j;
  var isSuspendFunction = kotlin_kotlin.$_$.ub;
  var initMetadataForObject = kotlin_kotlin.$_$.ib;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.p;
  var Unit = kotlin_kotlin.$_$.kg;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.ue;
  var contentType = kotlin_io_ktor_ktor_http.$_$.r1;
  var isByteArray = kotlin_kotlin.$_$.lb;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.c1;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.e;
  var rethrowCloseCauseIfNeeded = kotlin_io_ktor_ktor_io.$_$.u1;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.c;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var CIOMultipartDataBase = kotlin_io_ktor_ktor_http_cio.$_$.a;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.p;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.o1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.f1;
  var invokeOnCompletion = kotlin_io_ktor_ktor_io.$_$.r1;
  var attachWriterJob = kotlin_io_ktor_ktor_io.$_$.n1;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.m;
  var Source = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readText = kotlin_io_ktor_ktor_io.$_$.t1;
  var toInt = kotlin_kotlin.$_$.se;
  var reversed = kotlin_kotlin.$_$.y7;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.t3;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toList = kotlin_kotlin.$_$.g8;
  var sortedWith = kotlin_kotlin.$_$.c8;
  var Collection = kotlin_kotlin.$_$.h5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b4;
  var charSequenceLength = kotlin_kotlin.$_$.qa;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var roundToInt = kotlin_kotlin.$_$.fc;
  var firstOrNull = kotlin_kotlin.$_$.x6;
  var FunctionAdapter = kotlin_kotlin.$_$.ha;
  var Comparator = kotlin_kotlin.$_$.mf;
  var hashCode = kotlin_kotlin.$_$.bb;
  var compareValues = kotlin_kotlin.$_$.q8;
  var charset = kotlin_io_ktor_ktor_http.$_$.p1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.d2;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.o1;
  var readText_0 = kotlin_io_ktor_ktor_io.$_$.y;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.n1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.c2;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.w1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.m1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var KFunctionImpl = kotlin_kotlin.$_$.oc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.fb;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var Default_getInstance = kotlin_kotlin.$_$.n2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var toLongOrNull = kotlin_kotlin.$_$.te;
  var multiply = kotlin_kotlin.$_$.aa;
  var toNumber = kotlin_kotlin.$_$.ga;
  var numberToLong = kotlin_kotlin.$_$.ca;
  var add = kotlin_kotlin.$_$.r9;
  var Companion_instance = kotlin_kotlin.$_$.u2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.qg;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.q;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var trimMargin = kotlin_kotlin.$_$.cf;
  var getBigIntHashCode = kotlin_kotlin.$_$.xa;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.x1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.p2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.a3;
  var toDuration = kotlin_kotlin.$_$.gf;
  var delay_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var KProperty0 = kotlin_kotlin.$_$.xc;
  var createKTypeParameter = kotlin_kotlin.$_$.qc;
  var NullBody = kotlin_io_ktor_ktor_http.$_$.q;
  var WebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.o;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.k;
  var generateNonce = kotlin_io_ktor_ktor_utils.$_$.y;
  var Default_getInstance_0 = kotlin_kotlin.$_$.f2;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.e1;
  var emptyList = kotlin_kotlin.$_$.s6;
  var addAll = kotlin_kotlin.$_$.v5;
  var parseWebSocketExtensions = kotlin_io_ktor_ktor_websockets.$_$.q;
  var WebSocketExtensionsConfig = kotlin_io_ktor_ktor_websockets.$_$.m;
  var WebSocketChannelsConfig = kotlin_io_ktor_ktor_websockets.$_$.l;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_websockets.$_$.b;
  var DefaultWebSocketSession_0 = kotlin_io_ktor_ktor_websockets.$_$.j;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.r4;
  var KtList = kotlin_kotlin.$_$.m5;
  var WebSocketExtension = kotlin_io_ktor_ktor_websockets.$_$.n;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.i1;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.b2;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.a1;
  var set = kotlin_io_ktor_ktor_http.$_$.z1;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.k;
  var formUrlEncode = kotlin_io_ktor_ktor_http.$_$.t1;
  var toByteArray_0 = kotlin_io_ktor_ktor_io.$_$.c1;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.n;
  var copyTo_0 = kotlin_io_ktor_ktor_io.$_$.f;
  var closeFinally = kotlin_kotlin.$_$.og;
  var close = kotlin_io_ktor_ktor_io.$_$.p1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h3;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var BinaryChannelItem = kotlin_io_ktor_ktor_http.$_$.y;
  var FormItem = kotlin_io_ktor_ktor_http.$_$.b1;
  var BinaryItem = kotlin_io_ktor_ktor_http.$_$.z;
  var FileItem = kotlin_io_ktor_ktor_http.$_$.a1;
  var toString_1 = kotlin_kotlin.$_$.ve;
  var take = kotlin_kotlin.$_$.le;
  var writePacket = kotlin_io_ktor_ktor_io.$_$.o;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.h;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.z;
  var isNumber = kotlin_kotlin.$_$.sb;
  var getStringHashCode = kotlin_kotlin.$_$.ab;
  var quote = kotlin_io_ktor_ktor_http.$_$.y1;
  var isQuoted = kotlin_io_ktor_ktor_http.$_$.v1;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.v;
  var decode = kotlin_io_ktor_ktor_io.$_$.q;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.g;
  var KtMutableList = kotlin_kotlin.$_$.q5;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_http.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var equals_0 = kotlin_kotlin.$_$.kd;
  var flatten = kotlin_kotlin.$_$.z6;
  var copyToArray = kotlin_kotlin.$_$.p6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellationException_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var headersOf = kotlin_io_ktor_ktor_http.$_$.u1;
  var intercepted = kotlin_kotlin.$_$.w8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var listOf = kotlin_kotlin.$_$.n7;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.z3;
  var Error_init_$Create$ = kotlin_kotlin.$_$.d4;
  var Companion_getInstance_7 = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.c;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.h;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.i;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.d;
  var decodeToString = kotlin_kotlin.$_$.hd;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var from = kotlin_io_ktor_ktor_websockets.$_$.p;
  var send = kotlin_io_ktor_ktor_websockets.$_$.e;
  var toTypedArray = kotlin_kotlin.$_$.o8;
  var get_supportsRequestBody = kotlin_io_ktor_ktor_http.$_$.a2;
  var isEmpty = kotlin_io_ktor_ktor_http.$_$.d1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(HttpClient$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClient$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpClient, 'HttpClient', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientConfig, 'HttpClientConfig', HttpClientConfig);
  initMetadataForClass(HttpClientCall, 'HttpClientCall', VOID, VOID, [CoroutineScope], [0, 1]);
  initMetadataForClass(DelegatedCall, 'DelegatedCall', VOID, HttpClientCall, VOID, [0, 1]);
  function get_coroutineContext() {
    return this.i3s().m1o();
  }
  initMetadataForInterface(HttpRequest_0, 'HttpRequest', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedRequest, 'DelegatedRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpResponse, 'HttpResponse', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedResponse, 'DelegatedResponse', VOID, HttpResponse);
  initMetadataForCompanion(Companion);
  initMetadataForCoroutine($bodyNullableCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DoubleReceiveException, 'DoubleReceiveException', VOID, IllegalStateException);
  initMetadataForClass(NoTransformationFoundException, 'NoTransformationFoundException', VOID, UnsupportedOperationException);
  initMetadataForClass(SavedHttpCall, 'SavedHttpCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(SavedHttpRequest, 'SavedHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(SavedHttpResponse, 'SavedHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($saveCOROUTINE$, CoroutineImpl);
  initMetadataForClass(UnsupportedContentTypeException, 'UnsupportedContentTypeException', VOID, IllegalStateException);
  initMetadataForInterface(ProgressListener, 'ProgressListener', VOID, VOID, VOID, [2]);
  initMetadataForLambda(ObservableContent$getContent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ObservableContent, 'ObservableContent', VOID, ReadChannelContent);
  initMetadataForLambda(HttpClientEngine$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClientEngine$executeWithinCallContext$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($executeWithinCallContextCOROUTINE$, CoroutineImpl);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().d3r_1;
    client.p3o_1.p2s(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  initMetadataForInterface(HttpClientEngine, 'HttpClientEngine', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientEngineBase, 'HttpClientEngineBase', VOID, VOID, [HttpClientEngine], [1]);
  initMetadataForClass(ClientEngineClosedException, 'ClientEngineClosedException', ClientEngineClosedException, IllegalStateException);
  initMetadataForInterface(HttpClientEngineCapability, 'HttpClientEngineCapability');
  initMetadataForClass(HttpClientEngineConfig, 'HttpClientEngineConfig', HttpClientEngineConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(KtorCallContextElement, 'KtorCallContextElement', VOID, VOID, [Element]);
  initMetadataForLambda(AfterRenderHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterRenderHook, 'AfterRenderHook');
  initMetadataForLambda(AfterReceiveHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterReceiveHook, 'AfterReceiveHook');
  initMetadataForLambda(BodyProgress$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(BodyProgress$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ResponseException, 'ResponseException', VOID, IllegalStateException);
  initMetadataForClass(RedirectResponseException, 'RedirectResponseException', VOID, ResponseException);
  initMetadataForClass(ClientRequestException, 'ClientRequestException', VOID, ResponseException);
  initMetadataForClass(ServerResponseException, 'ServerResponseException', VOID, ResponseException);
  initMetadataForLambda(addDefaultResponseValidation$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(defaultTransformers$1$content$1, VOID, VOID, ByteArrayContent);
  initMetadataForClass(defaultTransformers$1$content$2, VOID, VOID, ReadChannelContent);
  initMetadataForLambda(defaultTransformers$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(defaultTransformers$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(defaultTransformers$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpCallValidatorConfig, 'HttpCallValidatorConfig', HttpCallValidatorConfig);
  initMetadataForClass(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper');
  initMetadataForClass(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper');
  initMetadataForLambda(RequestError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestError, 'RequestError');
  initMetadataForLambda(ReceiveError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(ReceiveError, 'ReceiveError');
  initMetadataForLambda(HttpCallValidator$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_3, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_5, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$validateResponseCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invoke$processExceptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest$1, VOID, VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpPlainTextConfig, 'HttpPlainTextConfig', HttpPlainTextConfig);
  initMetadataForLambda(RenderRequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RenderRequestHook, 'RenderRequestHook');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(HttpPlainText$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpPlainText$lambda$slambda_1, CoroutineImpl, VOID, [4]);
  initMetadataForClass(HttpRedirectConfig, 'HttpRedirectConfig', HttpRedirectConfig);
  initMetadataForLambda(HttpRedirect$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$handleCallCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invokeCOROUTINE$, CoroutineImpl);
  initMetadataForFunctionReference(PipelineContext$proceed$ref, KFunctionImpl, VOID, [0]);
  initMetadataForLambda(SetupRequestContext$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequestContext, 'SetupRequestContext');
  initMetadataForLambda(HttpRequestLifecycle$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpRetryEventData, 'HttpRetryEventData');
  initMetadataForLambda(HttpRequestRetryConfig$delay$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpRequestRetryConfig, 'HttpRequestRetryConfig', HttpRequestRetryConfig);
  initMetadataForClass(HttpRetryShouldRetryContext, 'HttpRetryShouldRetryContext');
  initMetadataForClass(HttpRetryDelayContext, 'HttpRetryDelayContext');
  initMetadataForClass(HttpRetryModifyRequestContext, 'HttpRetryModifyRequestContext');
  initMetadataForLambda(HttpRequestRetry$lambda$slambda, CoroutineImpl, VOID, [3]);
  initMetadataForLambda(HttpRequestRetry$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($throwOnInvalidResponseBodyCOROUTINE$, CoroutineImpl);
  initMetadataForLambda(HttpSend$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(Config, 'Config', Config);
  initMetadataForObject(Plugin, 'Plugin');
  initMetadataForInterface(Sender, 'Sender', VOID, VOID, VOID, [1]);
  initMetadataForClass(InterceptedSender, 'InterceptedSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(DefaultSender, 'DefaultSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(HttpSend, 'HttpSend');
  initMetadataForClass(SendCountExceedException, 'SendCountExceedException', VOID, IllegalStateException);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(HttpTimeoutConfig, 'HttpTimeoutConfig', HttpTimeoutConfig_init_$Create$);
  initMetadataForObject(HttpTimeoutCapability, 'HttpTimeoutCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(HttpRequestTimeoutException, 'HttpRequestTimeoutException', VOID, IOException, [CopyableThrowable]);
  initMetadataForLambda(HttpTimeout$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(applyRequestTimeout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SaveBodyPluginConfig, 'SaveBodyPluginConfig', SaveBodyPluginConfig);
  initMetadataForLambda(SaveBody$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HookHandler, 'HookHandler');
  initMetadataForClass(ClientPluginBuilder, 'ClientPluginBuilder');
  initMetadataForClass(ClientPluginInstance, 'ClientPluginInstance', VOID, VOID, [AutoCloseable]);
  initMetadataForLambda(SetupRequest$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequest, 'SetupRequest');
  initMetadataForClass(Sender_0, 'Sender', VOID, VOID, [CoroutineScope], [1]);
  initMetadataForLambda(Send$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(Send, 'Send');
  initMetadataForClass(ClientPluginImpl, 'ClientPluginImpl');
  initMetadataForClass(TransformResponseBodyContext, 'TransformResponseBodyContext');
  initMetadataForClass(OnRequestContext, 'OnRequestContext');
  initMetadataForLambda(RequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestHook, 'RequestHook');
  initMetadataForLambda(TransformResponseBodyHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(TransformResponseBodyHook, 'TransformResponseBodyHook');
  initMetadataForObject(SSECapability, 'SSECapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(SSEClientContent, 'SSEClientContent', VOID, ContentWrapper);
  initMetadataForClass(DefaultClientWebSocketSession, 'DefaultClientWebSocketSession', VOID, VOID, [WebSocketSession, DefaultWebSocketSession], [1, 0]);
  initMetadataForClass(DelegatingClientWebSocketSession, 'DelegatingClientWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForClass(ClientUpgradeContent, 'ClientUpgradeContent', VOID, NoContent, VOID, [1]);
  initMetadataForClass(WebSocketContent, 'WebSocketContent', WebSocketContent, ClientUpgradeContent, VOID, [1]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(Config_0, 'Config', Config_0);
  initMetadataForObject(Plugin_0, 'Plugin');
  initMetadataForClass(WebSockets, 'WebSockets');
  initMetadataForObject(WebSocketExtensionsCapability, 'WebSocketExtensionsCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForObject(WebSocketCapability, 'WebSocketCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(WebSocketException, 'WebSocketException', VOID, IllegalStateException);
  initMetadataForClass(DefaultHttpRequest, 'DefaultHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(HttpRequestBuilder, 'HttpRequestBuilder', HttpRequestBuilder);
  initMetadataForClass(HttpRequestData, 'HttpRequestData');
  initMetadataForClass(HttpResponseData, 'HttpResponseData');
  initMetadataForInterface(ResponseAdapter, 'ResponseAdapter');
  initMetadataForObject(Phases, 'Phases');
  initMetadataForClass(HttpRequestPipeline, 'HttpRequestPipeline', HttpRequestPipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_0, 'Phases');
  initMetadataForClass(HttpSendPipeline, 'HttpSendPipeline', HttpSendPipeline, Pipeline, VOID, [2]);
  initMetadataForClass(FormDataContent, 'FormDataContent', VOID, ByteArrayContent);
  initMetadataForCoroutine($writeToCOROUTINE$, CoroutineImpl);
  initMetadataForClass(MultiPartFormDataContent, 'MultiPartFormDataContent', VOID, WriteChannelContent, VOID, [1]);
  initMetadataForClass(PreparedPart, 'PreparedPart');
  initMetadataForClass(InputPart, 'InputPart', VOID, PreparedPart);
  initMetadataForClass(ChannelPart, 'ChannelPart', VOID, PreparedPart);
  initMetadataForClass(FormBuilder, 'FormBuilder');
  initMetadataForClass(FormPart, 'FormPart');
  initMetadataForClass(InputProvider, 'InputProvider');
  initMetadataForClass(ChannelProvider, 'ChannelProvider');
  initMetadataForClass(DefaultHttpResponse, 'DefaultHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($bodyAsTextCOROUTINE$, CoroutineImpl);
  initMetadataForObject(Phases_1, 'Phases');
  initMetadataForClass(HttpResponsePipeline, 'HttpResponsePipeline', HttpResponsePipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_2, 'Phases');
  initMetadataForClass(HttpReceivePipeline, 'HttpReceivePipeline', HttpReceivePipeline, Pipeline, VOID, [2]);
  initMetadataForClass(HttpResponseContainer, 'HttpResponseContainer');
  initMetadataForCoroutine($fetchResponseCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($cleanupCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpStatement, 'HttpStatement', VOID, VOID, VOID, [1, 0, 2]);
  initMetadataForLambda(observable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpResponseReceiveFail, 'HttpResponseReceiveFail');
  initMetadataForObject(EmptyContent, 'EmptyContent', VOID, NoContent);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(FetchOptions, 'FetchOptions');
  initMetadataForObject(Js, 'Js');
  initMetadataForClass(JsClientEngineConfig, 'JsClientEngineConfig', JsClientEngineConfig, HttpClientEngineConfig);
  initMetadataForClass(JsClientEngine$createWebSocket$headers_capturingHack$1);
  initMetadataForCoroutine($executeCOROUTINE$_1, CoroutineImpl);
  initMetadataForCoroutine($createWebSocketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($executeWebSocketRequestCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsClientEngine, 'JsClientEngine', VOID, HttpClientEngineBase, VOID, [1, 2]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(channelFromStream$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0_0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(JsWebSocketSession$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JsWebSocketSession, 'JsWebSocketSession', VOID, VOID, [DefaultWebSocketSession], [0, 1]);
  initMetadataForLambda(getBodyBytes$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($toRawCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getBodyBytesCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(engines$iterator$1);
  initMetadataForObject(engines, 'engines');
  initMetadataForClass(ConnectTimeoutException, 'ConnectTimeoutException', VOID, IOException);
  initMetadataForClass(InterruptedIOException, 'InterruptedIOException', VOID, IOException);
  initMetadataForClass(SocketTimeoutException, 'SocketTimeoutException', VOID, InterruptedIOException);
  initMetadataForObject(ProxyBuilder, 'ProxyBuilder');
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.j3o_1 = manageEngine;
    if ($this.j3o_1) {
      if (engine instanceof HttpClientEngineBase) {
        engine.x3o_1.atomicfu$incrementAndGet();
      }
      var tmp = ensureNotNull($this.m3o_1.b9(Key_instance));
      tmp.o1p(HttpClient$_init_$lambda_36nm6w(engine));
    }
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, objectCreate(protoOf(HttpClient)));
  }
  function HttpClient$_init_$lambda_36nm6w($engine) {
    return function (cause) {
      var tmp;
      if (!($engine instanceof HttpClientEngineBase)) {
        tmp = true;
      } else {
        tmp = $engine.x3o_1.atomicfu$decrementAndGet() <= 0;
      }
      var shouldClose = tmp;
      var tmp_0;
      if (shouldClose) {
        var tmp_1;
        if (cause == null) {
          $engine.a4();
          tmp_1 = Unit_instance;
        } else {
          var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
          cancel($engine, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Client scope is canceled', cause) : tmp0_elvis_lhs);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.i3p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).l3p = function ($this$intercept, call, $completion) {
    var tmp = this.m3p($this$intercept, call, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClient$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3p(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp_0 = this.k3p_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.k3p_1) + '(' + toString(getKClassFromExpression(this.k3p_1)) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.o8_1 = 1;
            suspendResult = this.i3p_1.q3o_1.k2s(Unit_instance, this.k3p_1.s3p(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            this.k3p_1.t3p(response);
            this.o8_1 = 2;
            suspendResult = this.j3p_1.p2r(this.k3p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(HttpClient$slambda).m3p = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.i3p_1, completion);
    i.j3p_1 = $this$intercept;
    i.k3p_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, call, $completion) {
      return i.l3p($this$intercept, call, $completion);
    }, 2);
  }
  function HttpClient$lambda($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.c3q_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).g3q = function ($this$intercept, it, $completion) {
    var tmp = this.h3q($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClient$slambda_1).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.d3q_1.q2r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f3q_1 = suspendResult;
            this.p8_1 = 3;
            this.o8_1 = 4;
            continue $sm;
          case 2:
            this.p8_1 = 3;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              var tmp_1 = this;
              this.c3q_1.t3o_1.p39(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.d3q_1.l2s_1.s3p(), cause));
              throw cause;
            } else {
              throw this.r8_1;
            }

          case 3:
            throw this.r8_1;
          case 4:
            this.p8_1 = 3;
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
  protoOf(HttpClient$slambda_1).h3q = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.c3q_1, completion);
    i.d3q_1 = $this$intercept;
    i.e3q_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.g3q($this$intercept, it, $completion);
    }, 2);
  }
  function $executeCOROUTINE$(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q3q_1 = _this__u8e3s4;
    this.r3q_1 = builder;
  }
  protoOf($executeCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.q3q_1.t3o_1.p39(get_HttpRequestCreated(), this.r3q_1);
            this.o8_1 = 1;
            suspendResult = this.q3q_1.n3o_1.k2s(this.r3q_1, this.r3q_1.v3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.h3o_1 = engine;
    this.i3o_1 = userConfig;
    this.j3o_1 = false;
    this.k3o_1 = atomic$boolean$1(false);
    this.l3o_1 = Job(this.h3o_1.m1o().b9(Key_instance));
    this.m3o_1 = this.h3o_1.m1o().of(this.l3o_1);
    this.n3o_1 = new HttpRequestPipeline();
    this.o3o_1 = new HttpResponsePipeline();
    this.p3o_1 = new HttpSendPipeline();
    this.q3o_1 = new HttpReceivePipeline();
    this.r3o_1 = AttributesJsFn(true);
    this.s3o_1 = this.h3o_1.y3q();
    this.t3o_1 = new Events();
    this.u3o_1 = new HttpClientConfig();
    this.h3o_1.z3q(this);
    var tmp = Phases_getInstance_0().e3r_1;
    this.p3o_1.p2s(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    var $this$with = this.i3o_1;
    this.u3o_1.n3r(get_HttpRequestLifecycle());
    this.u3o_1.n3r(get_BodyProgress());
    this.u3o_1.n3r(get_SaveBody());
    if ($this$with.k3r_1) {
      this.u3o_1.o3r('DefaultTransformers', HttpClient$lambda);
    }
    this.u3o_1.n3r(Plugin_getInstance());
    this.u3o_1.n3r(get_HttpCallValidator());
    if ($this$with.j3r_1) {
      this.u3o_1.n3r(get_HttpRedirect());
    }
    this.u3o_1.p3r($this$with);
    if ($this$with.k3r_1) {
      this.u3o_1.n3r(get_HttpPlainText());
    }
    addDefaultResponseValidation(this.u3o_1);
    this.u3o_1.z3q(this);
    var tmp_0 = Phases_getInstance_1().q3r_1;
    this.o3o_1.p2s(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).m1o = function () {
    return this.m3o_1;
  };
  protoOf(HttpClient).v3r = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$(this, builder, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClient).a4 = function () {
    var success = this.k3o_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_instance;
    var installedFeatures = this.r3o_1.q2m(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = installedFeatures.x2m().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var plugin = installedFeatures.q2m(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, AutoCloseable)) {
        plugin.a4();
      }
    }
    this.l3o_1.e1v();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + toString(this.h3o_1) + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_0;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HttpClientConfig();
    block(this_0);
    var config = this_0;
    var engine = engineFactory.w3r(config.i3r_1);
    return HttpClient_init_$Create$(engine, config, true);
  }
  function HttpClient$lambda_0(_this__u8e3s4) {
    return Unit_instance;
  }
  function installPlugin($this, plugin) {
    if ($this.f3r_1.l2(plugin.m1()))
      return Unit_instance;
    var tmp0 = $this.f3r_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$installPlugin$lambda(plugin);
    tmp0.q2(tmp2, value);
  }
  function HttpClientConfig$engineConfig$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$engine$lambda($oldConfig, $block) {
    return function (_this__u8e3s4) {
      $oldConfig(_this__u8e3s4);
      $block(_this__u8e3s4);
      return Unit_instance;
    };
  }
  function HttpClientConfig$install$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function (_this__u8e3s4) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(_this__u8e3s4);
      $configure(!(_this__u8e3s4 == null) ? _this__u8e3s4 : THROW_CCE());
      return Unit_instance;
    };
  }
  function HttpClientConfig$installPlugin$lambda$lambda() {
    return AttributesJsFn(true);
  }
  function HttpClientConfig$installPlugin$lambda($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.r3o_1.w2m(tmp, HttpClientConfig$installPlugin$lambda$lambda);
      var config = ensureNotNull(scope.u3o_1.g3r_1.n2($plugin.m1()));
      var pluginData = $plugin.x3r(config);
      $plugin.y3r(pluginData, scope);
      attributes.t2m($plugin.m1(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f3r_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.g3r_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.h3r_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.i3r_1 = HttpClientConfig$engineConfig$lambda;
    this.j3r_1 = true;
    this.k3r_1 = true;
    this.l3r_1 = false;
    this.m3r_1 = PlatformUtils_getInstance().s2o_1;
  }
  protoOf(HttpClientConfig).z3r = function (block) {
    var oldConfig = this.i3r_1;
    var tmp = this;
    tmp.i3r_1 = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  protoOf(HttpClientConfig).a3s = function (plugin, configure) {
    var previousConfigBlock = this.g3r_1.n2(plugin.m1());
    var tmp0 = this.g3r_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    tmp0.q2(tmp2, value);
    installPlugin(this, plugin);
  };
  protoOf(HttpClientConfig).n3r = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.a3s(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.a3s.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).o3r = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.h3r_1.q2(key, block);
  };
  protoOf(HttpClientConfig).z3q = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.f3r_1.p2().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.apply' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.h3r_1.p2().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.apply' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).p3r = function (other) {
    this.j3r_1 = other.j3r_1;
    this.k3r_1 = other.k3r_1;
    this.l3r_1 = other.l3r_1;
    var tmp0 = this.f3r_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map = other.f3r_1;
    tmp0.s2(map);
    var tmp0_0 = this.g3r_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_0 = other.g3r_1;
    tmp0_0.s2(map_0);
    var tmp0_1 = this.h3r_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_1 = other.h3r_1;
    tmp0_1.s2(map_1);
  };
  function replaceResponse(_this__u8e3s4, headers, content) {
    headers = headers === VOID ? _this__u8e3s4.s3p().p31() : headers;
    return new DelegatedCall(_this__u8e3s4.n3p_1, _this__u8e3s4, content, headers);
  }
  function DelegatedCall(client, originCall, responseContent, responseHeaders) {
    responseHeaders = responseHeaders === VOID ? originCall.s3p().p31() : responseHeaders;
    HttpClientCall.call(this, client);
    this.p3p_1 = new DelegatedRequest(this, originCall.b3s());
    this.q3p_1 = new DelegatedResponse(this, originCall.s3p(), responseContent, responseHeaders);
  }
  function DelegatedRequest(call, origin) {
    this.g3s_1 = origin;
    this.h3s_1 = call;
  }
  protoOf(DelegatedRequest).i3s = function () {
    return this.h3s_1;
  };
  protoOf(DelegatedRequest).m1o = function () {
    return this.g3s_1.m1o();
  };
  protoOf(DelegatedRequest).j3s = function () {
    return this.g3s_1.j3s();
  };
  protoOf(DelegatedRequest).k3s = function () {
    return this.g3s_1.k3s();
  };
  protoOf(DelegatedRequest).c3s = function () {
    return this.g3s_1.c3s();
  };
  protoOf(DelegatedRequest).a1b = function () {
    return this.g3s_1.a1b();
  };
  protoOf(DelegatedRequest).p31 = function () {
    return this.g3s_1.p31();
  };
  function DelegatedResponse(call, origin, content, headers) {
    headers = headers === VOID ? origin.p31() : headers;
    HttpResponse.call(this);
    this.l3s_1 = call;
    this.m3s_1 = origin;
    this.n3s_1 = content;
    this.o3s_1 = headers;
    this.p3s_1 = this.m3s_1.m1o();
  }
  protoOf(DelegatedResponse).i3s = function () {
    return this.l3s_1;
  };
  protoOf(DelegatedResponse).p31 = function () {
    return this.o3s_1;
  };
  protoOf(DelegatedResponse).q3s = function () {
    return this.n3s_1(this.m3s_1);
  };
  protoOf(DelegatedResponse).m1o = function () {
    return this.p3s_1;
  };
  protoOf(DelegatedResponse).r3s = function () {
    return this.m3s_1.r3s();
  };
  protoOf(DelegatedResponse).s3s = function () {
    return this.m3s_1.s3s();
  };
  protoOf(DelegatedResponse).t3s = function () {
    return this.m3s_1.t3s();
  };
  protoOf(DelegatedResponse).u3s = function () {
    return this.m3s_1.u3s();
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.p3p_1 = new DefaultHttpRequest($this, requestData);
    $this.q3p_1 = new DefaultHttpResponse($this, responseData);
    $this.c3s().v2m(Companion_getInstance_8().v3s_1);
    var tmp = responseData.a3t_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.c3s().t2m(Companion_getInstance_8().v3s_1, responseData.a3t_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, objectCreate(protoOf(HttpClientCall)));
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'CustomResponse';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = PrimitiveClasses_getInstance().kb();
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(PrimitiveClasses_getInstance().kb(), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.v3s_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l3t_1 = _this__u8e3s4;
    this.m3t_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.p8_1 = 4;
            if (instanceOf(this.l3t_1.s3p(), this.m3t_1.c2t_1))
              return this.l3t_1.s3p();
            if (!this.l3t_1.d3s() && !get_isSaved(this.l3t_1.s3p()) && !this.l3t_1.o3p_1.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.l3t_1);
            }

            var tmp0_elvis_lhs = this.l3t_1.c3s().r2m(Companion_getInstance_8().v3s_1);
            if (tmp0_elvis_lhs == null) {
              this.o8_1 = 1;
              suspendResult = this.l3t_1.e3s(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n3t_1 = tmp0_elvis_lhs;
              this.o8_1 = 2;
              continue $sm;
            }

          case 1:
            this.n3t_1 = suspendResult;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            var responseData = this.n3t_1;
            var subject = new HttpResponseContainer(this.m3t_1, responseData);
            this.o8_1 = 3;
            suspendResult = this.l3t_1.n3p_1.o3o_1.k2s(this.l3t_1, subject, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var this_0 = suspendResult.p3t_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) && !instanceOf(result, this.m3t_1.c2t_1)) {
              var from = getKClassFromExpression(result);
              var to = this.m3t_1.c2t_1;
              throw new NoTransformationFoundException(this.l3t_1.s3p(), from, to);
            }

            return result;
          case 4:
            this.p8_1 = 5;
            var tmp_1 = this.r8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.r8_1;
              cancel_0(this.l3t_1.s3p(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.r8_1;
            }

          case 5:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 5) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_8();
    this.n3p_1 = client;
    this.o3p_1 = atomic$boolean$1(false);
    this.r3p_1 = false;
  }
  protoOf(HttpClientCall).m1o = function () {
    return this.s3p().m1o();
  };
  protoOf(HttpClientCall).c3s = function () {
    return this.b3s().c3s();
  };
  protoOf(HttpClientCall).b3s = function () {
    var tmp = this.p3p_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).s3p = function () {
    var tmp = this.q3p_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).d3s = function () {
    return this.r3p_1;
  };
  protoOf(HttpClientCall).e3s = function ($completion) {
    return this.s3p().q3s();
  };
  protoOf(HttpClientCall).f3s = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$(this, info, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.b3s().k3s().toString() + ', ' + this.s3p().r3s().toString() + ']';
  };
  protoOf(HttpClientCall).t3p = function (response) {
    this.q3p_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.q3t_1 = 'Response already received: ' + call.toString();
    delete this.message;
  }
  protoOf(DoubleReceiveException).e = function () {
    return this.q3t_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.r3t_1 = trimIndent("\n        Expected response body of the type '" + toString(to) + "' but was '" + toString(from) + "'\n        In response from `" + get_request(response).k3s().toString() + '`\n        Response status `' + response.r3s().toString() + '`\n        Response header `ContentType: ' + response.p31().y1a('Content-Type') + '` \n        Request header `Accept: ' + get_request(response).p31().y1a('Accept') + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
    delete this.message;
  }
  protoOf(NoTransformationFoundException).e = function () {
    return this.r3t_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$(_this__u8e3s4, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.g3u_1 = responseBody;
    this.p3p_1 = new SavedHttpRequest(this, request);
    this.q3p_1 = new SavedHttpResponse(this, this.g3u_1, response);
    checkContentLength(contentLength(response), fromInt(this.g3u_1.length), request.j3s());
    this.h3u_1 = true;
  }
  protoOf(SavedHttpCall).d3s = function () {
    return this.h3u_1;
  };
  function SavedHttpRequest(call, origin) {
    this.i3u_1 = origin;
    this.j3u_1 = call;
  }
  protoOf(SavedHttpRequest).i3s = function () {
    return this.j3u_1;
  };
  protoOf(SavedHttpRequest).m1o = function () {
    return this.i3u_1.m1o();
  };
  protoOf(SavedHttpRequest).j3s = function () {
    return this.i3u_1.j3s();
  };
  protoOf(SavedHttpRequest).k3s = function () {
    return this.i3u_1.k3s();
  };
  protoOf(SavedHttpRequest).c3s = function () {
    return this.i3u_1.c3s();
  };
  protoOf(SavedHttpRequest).a1b = function () {
    return this.i3u_1.a1b();
  };
  protoOf(SavedHttpRequest).p31 = function () {
    return this.i3u_1.p31();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.k3u_1 = call;
    this.l3u_1 = body;
    this.m3u_1 = origin.r3s();
    this.n3u_1 = origin.s3s();
    this.o3u_1 = origin.t3s();
    this.p3u_1 = origin.u3s();
    this.q3u_1 = origin.p31();
    this.r3u_1 = origin.m1o();
  }
  protoOf(SavedHttpResponse).i3s = function () {
    return this.k3u_1;
  };
  protoOf(SavedHttpResponse).r3s = function () {
    return this.m3u_1;
  };
  protoOf(SavedHttpResponse).s3s = function () {
    return this.n3u_1;
  };
  protoOf(SavedHttpResponse).t3s = function () {
    return this.o3u_1;
  };
  protoOf(SavedHttpResponse).u3s = function () {
    return this.p3u_1;
  };
  protoOf(SavedHttpResponse).p31 = function () {
    return this.q3u_1;
  };
  protoOf(SavedHttpResponse).m1o = function () {
    return this.r3u_1;
  };
  protoOf(SavedHttpResponse).q3s = function () {
    return ByteReadChannel_0(this.l3u_1);
  };
  function $saveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3u_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var tmp_0 = this.a3u_1;
            if (tmp_0 instanceof SavedHttpCall)
              return this.a3u_1;
            this.o8_1 = 1;
            suspendResult = readRemaining(this.a3u_1.s3p().q3s(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readByteArray(ARGUMENT);
            return new SavedHttpCall(this.a3u_1.n3p_1, this.a3u_1.b3s(), this.a3u_1.s3p(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + toString(getKClassFromExpression(content)), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ProgressListener() {
  }
  function getContent($this, delegate) {
    var tmp;
    if (delegate instanceof ContentWrapper) {
      tmp = getContent($this, delegate.i39());
    } else {
      if (delegate instanceof ByteArrayContent) {
        tmp = ByteReadChannel_0(delegate.e37());
      } else {
        if (delegate instanceof ProtocolUpgrade) {
          throw new UnsupportedContentTypeException(delegate);
        } else {
          if (delegate instanceof NoContent) {
            tmp = Companion_getInstance().n2d_1;
          } else {
            if (delegate instanceof ReadChannelContent) {
              tmp = delegate.c39();
            } else {
              if (delegate instanceof WriteChannelContent) {
                var tmp_0 = GlobalScope_instance;
                tmp = writer(tmp_0, $this.v3u_1, true, ObservableContent$getContent$slambda_0(delegate, null)).j2d_1;
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function ObservableContent$getContent$slambda($delegate, resultContinuation) {
    this.f3v_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$getContent$slambda).e3e = function ($this$writer, $completion) {
    var tmp = this.f3e($this$writer, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(ObservableContent$getContent$slambda).k9 = function (p1, $completion) {
    return this.e3e(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$getContent$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.f3v_1.e39(this.g3v_1.k2j_1, this);
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
  protoOf(ObservableContent$getContent$slambda).f3e = function ($this$writer, completion) {
    var i = new ObservableContent$getContent$slambda(this.f3v_1, completion);
    i.g3v_1 = $this$writer;
    return i;
  };
  function ObservableContent$getContent$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$getContent$slambda($delegate, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.e3e($this$writer, $completion);
    }, 1);
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.u3u_1 = delegate;
    this.v3u_1 = callContext;
    this.w3u_1 = listener;
  }
  protoOf(ObservableContent).c37 = function () {
    return this.u3u_1.c37();
  };
  protoOf(ObservableContent).d37 = function () {
    return this.u3u_1.d37();
  };
  protoOf(ObservableContent).p31 = function () {
    return this.u3u_1.p31();
  };
  protoOf(ObservableContent).c39 = function () {
    return observable(getContent(this, this.u3u_1), this.v3u_1, this.d37(), this.w3u_1);
  };
  function get_CALL_COROUTINE() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.t3o_1.p39(get_HttpResponseCancelled(), $response);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.m1o().b9(Key_instance);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1o();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$($this, requestData, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function checkExtensions($this, requestData) {
    var _iterator__ex2g4s = requestData.x3v_1.t();
    while (_iterator__ex2g4s.u()) {
      var requestedExtension = _iterator__ex2g4s.v();
      // Inline function 'kotlin.require' call
      if (!$this.y3v().h2(requestedExtension)) {
        var message = "Engine doesn't support " + toString(requestedExtension);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.h3w_1 = $client;
    this.i3w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).l3p = function ($this$intercept, content, $completion) {
    var tmp = this.m3p($this$intercept, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClientEngine$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3p(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var this_0 = new HttpRequestBuilder();
            this_0.m3w(this.j3w_1.l2s_1);
            var body = this.k3w_1;
            if (body == null) {
              this_0.v3q_1 = NullBody_instance;
              var tmp_0 = PrimitiveClasses_getInstance().kb();
              var tmp_1;
              try {
                tmp_1 = createKType(PrimitiveClasses_getInstance().kb(), arrayOf([]), false);
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
              this_0.n3w(new TypeInfo(tmp_0, tmp_1));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.v3q_1 = body;
                this_0.n3w(null);
              } else {
                this_0.v3q_1 = body;
                var tmp_3 = PrimitiveClasses_getInstance().kb();
                var tmp_4;
                try {
                  tmp_4 = createKType(PrimitiveClasses_getInstance().kb(), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_5;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_5 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_4 = tmp_5;
                }
                this_0.n3w(new TypeInfo(tmp_3, tmp_4));
              }
            }

            var builder = this_0;
            this.h3w_1.t3o_1.p39(get_HttpRequestIsReadyForSending(), builder);
            var tmp_6 = this;
            var this_1 = builder.i2x();
            this_1.w3v_1.t2m(get_CLIENT_CONFIG(), this.h3w_1.u3o_1);
            tmp_6.l3w_1 = this_1;
            validateHeaders(this.l3w_1);
            checkExtensions(this.i3w_1, this.l3w_1);
            this.o8_1 = 1;
            suspendResult = executeWithinCallContext(this.i3w_1, this.l3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var responseData = suspendResult;
            var call = HttpClientCall_init_$Create$(this.h3w_1, this.l3w_1, responseData);
            var response = call.s3p();
            this.h3w_1.t3o_1.p39(get_HttpResponseReceived(), response);
            var tmp_7 = get_job(response.m1o());
            tmp_7.o1p(HttpClientEngine$install$slambda$lambda(this.h3w_1, response));
            this.o8_1 = 2;
            suspendResult = this.j3w_1.p2r(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.r8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClientEngine$install$slambda).m3p = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.h3w_1, this.i3w_1, completion);
    i.j3w_1 = $this$intercept;
    i.k3w_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.l3p($this$intercept, content, $completion);
    }, 2);
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.w3w_1 = this$0;
    this.x3w_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).z3w = function ($this$async, $completion) {
    var tmp = this.p2k($this$async, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).k9 = function (p1, $completion) {
    return this.z3w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            if (_get_closed__iwkfs1(this.w3w_1)) {
              throw new ClientEngineClosedException();
            }

            this.o8_1 = 1;
            suspendResult = this.w3w_1.a3x(this.x3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).p2k = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.w3w_1, this.x3w_1, completion);
    i.y3w_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    return constructCallableReference(function ($this$async, $completion) {
      return i.z3w($this$async, $completion);
    }, 1);
  }
  function $executeWithinCallContextCOROUTINE$(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p3v_1 = _this__u8e3s4;
    this.q3v_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.o8_1 = 1;
            suspendResult = createCallContext(this.p3v_1, this.q3v_1.v3v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var callContext = suspendResult;
            var context = callContext.of(new KtorCallContextElement(callContext));
            this.o8_1 = 2;
            suspendResult = async(this.p3v_1, context, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.p3v_1, this.q3v_1, null)).f1r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.t3v_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = requestHeaders.b2p();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (HttpHeaders_getInstance().h31_1.h2(element)) {
        destination.c1(element);
      }
    }
    var unsafeRequestHeaders = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!unsafeRequestHeaders.r()) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $completion) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.m1o().of(callJob).of(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.u8().b9(Key_instance);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.q1p(true, VOID, createCallContext$lambda(callJob));
      callJob.o1p(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      if (cause == null)
        return Unit_instance;
      var tmp1_elvis_lhs = cause instanceof CancellationException ? cause : null;
      var cancellation = tmp1_elvis_lhs == null ? CancellationException_init_$Create$_0(cause.message) : tmp1_elvis_lhs;
      $callJob.v1p(cancellation);
      return Unit_instance;
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.x1r();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function _init_properties_HttpClientEngine_kt__h91z5h() {
    if (!properties_initialized_HttpClientEngine_kt_5uiebb) {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'client-config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(HttpClientConfig);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(HttpClientConfig), arrayOf([getStarKTypeProjection()]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      CLIENT_CONFIG = new AttributeKey(name, tmp$ret$1);
    }
  }
  function HttpClientEngineBase$dispatcher$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.y3q().c3x_1;
      return tmp0_elvis_lhs == null ? ioDispatcher() : tmp0_elvis_lhs;
    };
  }
  function HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v() {
    return constructCallableReference(function (p0) {
      return p0.f3x();
    }, 1, 0, 22);
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().of(this$0.f3x()).of(new CoroutineName(this$0.v3o_1 + '-context'));
    };
  }
  function HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr() {
    return constructCallableReference(function (p0) {
      return p0.m1o();
    }, 1, 0, 23);
  }
  function HttpClientEngineBase(engineName) {
    this.v3o_1 = engineName;
    this.w3o_1 = atomic$boolean$1(false);
    this.x3o_1 = atomic$int$1(0);
    var tmp = this;
    tmp.y3o_1 = lazy(HttpClientEngineBase$dispatcher$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.z3o_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).f3x = function () {
    var tmp0 = this.y3o_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('dispatcher', 1, tmp, HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).m1o = function () {
    var tmp0 = this.z3o_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('coroutineContext', 1, tmp, HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).a4 = function () {
    if (!this.w3o_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    var tmp = this.m1o().b9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.e1v();
  };
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.g3x_1 = cause;
    delete this.cause;
  }
  protoOf(ClientEngineClosedException).f = function () {
    return this.g3x_1;
  };
  function get_ENGINE_CAPABILITIES_KEY() {
    _init_properties_HttpClientEngineCapability_kt__ifvyst();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function _init_properties_HttpClientEngineCapability_kt__ifvyst() {
    if (!properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'EngineCapabilities';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableMap);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpClientEngineCapability), arrayOf([getStarKTypeProjection()]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().kb(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      ENGINE_CAPABILITIES_KEY = new AttributeKey(name, tmp$ret$1);
      DEFAULT_CAPABILITIES = setOf(HttpTimeoutCapability_instance);
    }
  }
  function HttpClientEngineConfig() {
    this.b3x_1 = 4;
    this.c3x_1 = null;
    this.d3x_1 = false;
    this.e3x_1 = null;
  }
  function get_KTOR_DEFAULT_USER_AGENT() {
    _init_properties_Utils_kt__jo07cx();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    _init_properties_Utils_kt__jo07cx();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_9() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.h3x_1 = callContext;
  }
  protoOf(KtorCallContextElement).m1 = function () {
    return Companion_instance_1;
  };
  function callContext($completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.u8();
    return ensureNotNull(tmp$ret$0.b9(Companion_instance_1)).h3x_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.g2p(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.y1a('User-Agent') == null && content.p31().y1a('User-Agent') == null;
    if (missingAgent && needUserAgent()) {
      block('User-Agent', get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.c37();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.p31().y1a('Content-Type') : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.y1a('Content-Type') : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.d37();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.p31().y1a('Content-Length') : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.y1a('Content-Length') : tmp5_elvis_lhs;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Type', type);
    }
    if (length == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Length', length);
    }
  }
  function needUserAgent() {
    _init_properties_Utils_kt__jo07cx();
    return !PlatformUtils_getInstance().m2o_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.f2p($requestHeaders);
      $this$buildHeaders.f2p($content.p31());
      return Unit_instance;
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if ('Content-Length' === key) {
        return Unit_instance;
      }
      var tmp_0;
      if ('Content-Type' === key) {
        return Unit_instance;
      }
      var tmp_1;
      if (get_DATE_HEADERS().h2(key)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = values.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          $block(key, element);
        }
        tmp_1 = Unit_instance;
      } else {
        var separator = 'Cookie' === key ? '; ' : ',';
        tmp_1 = $block(key, joinToString(values, separator));
      }
      return Unit_instance;
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (!properties_initialized_Utils_kt_xvi83j) {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'ktor-client';
      DATE_HEADERS = setOf_0(['Date', 'Expires', 'Last-Modified', 'If-Modified-Since', 'If-Unmodified-Since']);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function get_BodyProgress() {
    _init_properties_BodyProgress_kt__s0v569();
    return BodyProgress;
  }
  var BodyProgress;
  function AfterRenderHook$install$slambda($handler, resultContinuation) {
    this.q3x_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterRenderHook$install$slambda).l3p = function ($this$intercept, content, $completion) {
    var tmp = this.m3p($this$intercept, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(AfterRenderHook$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3p(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterRenderHook$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp_0 = this.s3x_1;
            if (!(tmp_0 instanceof OutgoingContent))
              return Unit_instance;
            this.o8_1 = 1;
            suspendResult = this.q3x_1(this.r3x_1.l2s_1, this.s3x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            var newContent = tmp_1;
            this.o8_1 = 2;
            suspendResult = this.r3x_1.p2r(newContent, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(AfterRenderHook$install$slambda).m3p = function ($this$intercept, content, completion) {
    var i = new AfterRenderHook$install$slambda(this.q3x_1, completion);
    i.r3x_1 = $this$intercept;
    i.s3x_1 = content;
    return i;
  };
  function AfterRenderHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterRenderHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.l3p($this$intercept, content, $completion);
    }, 2);
  }
  function AfterRenderHook() {
  }
  protoOf(AfterRenderHook).t3x = function (client, handler) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    client.n3o_1.m2s(Phases_getInstance().x3x_1, observableContentPhase);
    client.n3o_1.p2s(observableContentPhase, AfterRenderHook$install$slambda_0(handler, null));
  };
  protoOf(AfterRenderHook).z3x = function (client, handler) {
    return this.t3x(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var AfterRenderHook_instance;
  function AfterRenderHook_getInstance() {
    return AfterRenderHook_instance;
  }
  function AfterReceiveHook$install$slambda($handler, resultContinuation) {
    this.i3y_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterReceiveHook$install$slambda).l3y = function ($this$intercept, response, $completion) {
    var tmp = this.m3y($this$intercept, response, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(AfterReceiveHook$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3y(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterReceiveHook$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            this.o8_1 = 1;
            suspendResult = this.i3y_1(this.k3y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newResponse = suspendResult;
            if (!(newResponse == null)) {
              this.o8_1 = 2;
              suspendResult = this.j3y_1.p2r(newResponse, this);
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
            return Unit_instance;
          case 4:
            throw this.r8_1;
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
  protoOf(AfterReceiveHook$install$slambda).m3y = function ($this$intercept, response, completion) {
    var i = new AfterReceiveHook$install$slambda(this.i3y_1, completion);
    i.j3y_1 = $this$intercept;
    i.k3y_1 = response;
    return i;
  };
  function AfterReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterReceiveHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.l3y($this$intercept, response, $completion);
    }, 2);
  }
  function AfterReceiveHook() {
  }
  protoOf(AfterReceiveHook).n3y = function (client, handler) {
    var tmp = Phases_getInstance_2().q3y_1;
    client.q3o_1.p2s(tmp, AfterReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(AfterReceiveHook).z3x = function (client, handler) {
    return this.n3y(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var AfterReceiveHook_instance;
  function AfterReceiveHook_getInstance() {
    return AfterReceiveHook_instance;
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = _this__u8e3s4.i3s();
    return replaceResponse(tmp, VOID, withObservableDownload$lambda(listener)).s3p();
  }
  function BodyProgress$lambda($this$createClientPlugin) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = AfterRenderHook_instance;
    $this$createClientPlugin.w3y(tmp, BodyProgress$lambda$slambda_0(null));
    var tmp_0 = AfterReceiveHook_instance;
    $this$createClientPlugin.w3y(tmp_0, BodyProgress$lambda$slambda_2(null));
    return Unit_instance;
  }
  function BodyProgress$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda).h3z = function (request, content, $completion) {
    var tmp = this.i3z(request, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(BodyProgress$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.h3z(tmp, p2 instanceof OutgoingContent ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        if (tmp === 0) {
          this.p8_1 = 1;
          var tmp0_elvis_lhs = this.f3z_1.x3q_1.r2m(get_UploadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return new ObservableContent(this.g3z_1, this.f3z_1.w3q_1, listener);
        } else if (tmp === 1) {
          throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda).i3z = function (request, content, completion) {
    var i = new BodyProgress$lambda$slambda(completion);
    i.f3z_1 = request;
    i.g3z_1 = content;
    return i;
  };
  function BodyProgress$lambda$slambda_0(resultContinuation) {
    var i = new BodyProgress$lambda$slambda(resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.h3z(request, content, $completion);
    }, 2);
  }
  function BodyProgress$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda_1).s3z = function (response, $completion) {
    var tmp = this.t3z(response, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(BodyProgress$lambda$slambda_1).k9 = function (p1, $completion) {
    return this.s3z(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        if (tmp === 0) {
          this.p8_1 = 1;
          var tmp0_elvis_lhs = this.r3z_1.i3s().b3s().c3s().r2m(get_DownloadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return withObservableDownload(this.r3z_1, listener);
        } else if (tmp === 1) {
          throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda_1).t3z = function (response, completion) {
    var i = new BodyProgress$lambda$slambda_1(completion);
    i.r3z_1 = response;
    return i;
  };
  function BodyProgress$lambda$slambda_2(resultContinuation) {
    var i = new BodyProgress$lambda$slambda_1(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.s3z(response, $completion);
    }, 1);
  }
  function withObservableDownload$lambda($listener) {
    return function ($this$replaceResponse) {
      return observable($this$replaceResponse.q3s(), $this$replaceResponse.m1o(), contentLength($this$replaceResponse), $listener);
    };
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function _init_properties_BodyProgress_kt__s0v569() {
    if (!properties_initialized_BodyProgress_kt_pmfrhr) {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'UploadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ProgressListener);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      UploadProgressListenerAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'DownloadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(ProgressListener);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
      DownloadProgressListenerAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      BodyProgress = createClientPlugin('BodyProgress', BodyProgress$lambda);
    }
  }
  function get_ValidateMark() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return ValidateMark;
  }
  var ValidateMark;
  function get_LOGGER() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return LOGGER;
  }
  var LOGGER;
  function addDefaultResponseValidation(_this__u8e3s4) {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response.toString() + '. Text: "' + cachedResponseText + '"', this);
    captureStack(this, ResponseException);
    this.u3z_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.w3z_1 = 'Unhandled redirect: ' + response.i3s().b3s().j3s().a32_1 + ' ' + response.i3s().b3s().k3s().toString() + '. ' + ('Status: ' + response.r3s().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(RedirectResponseException).e = function () {
    return this.w3z_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.y3z_1 = 'Client request(' + response.i3s().b3s().j3s().a32_1 + ' ' + response.i3s().b3s().k3s().toString() + ') ' + ('invalid: ' + response.r3s().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ClientRequestException).e = function () {
    return this.y3z_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.a40_1 = 'Server error(' + response.i3s().b3s().j3s().a32_1 + ' ' + response.i3s().b3s().k3s().toString() + ': ' + (response.r3s().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ServerResponseException).e = function () {
    return this.a40_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).n40 = function (response, $completion) {
    var tmp = this.t3z(response, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).k9 = function (p1, $completion) {
    return this.n40(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            var expectSuccess = this.j40_1.i3s().c3s().q2m(get_ExpectSuccessAttributeKey());
            if (!expectSuccess) {
              get_LOGGER().j2t('Skipping default response validation for ' + this.j40_1.i3s().b3s().k3s().toString());
              return Unit_instance;
            }

            this.l40_1 = this.j40_1.r3s().n34_1;
            var originCall = this.j40_1.i3s();
            if (this.l40_1 < 300 || originCall.c3s().s2m(get_ValidateMark())) {
              return Unit_instance;
            }

            this.o8_1 = 1;
            suspendResult = save(originCall, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this_0.c3s().t2m(get_ValidateMark(), Unit_instance);
            var exceptionCall = this_0;
            this.k40_1 = exceptionCall.s3p();
            this.p8_1 = 3;
            this.o8_1 = 2;
            suspendResult = bodyAsText(this.k40_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m40_1 = suspendResult;
            this.p8_1 = 5;
            this.o8_1 = 4;
            continue $sm;
          case 3:
            this.p8_1 = 5;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _unused_var__etf5q3 = this.r8_1;
              var tmp_1 = this;
              tmp_1.m40_1 = '<body failed decoding>';
              this.o8_1 = 4;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 4:
            this.p8_1 = 5;
            var exceptionResponseText = this.m40_1;
            var tmp0_subject = this.l40_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.k40_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.k40_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.k40_1, exceptionResponseText) : new ResponseException(this.k40_1, exceptionResponseText);
            get_LOGGER().j2t('Default response validation for ' + this.j40_1.i3s().b3s().k3s().toString() + ' failed with ' + exception.toString());
            throw exception;
          case 5:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 5) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).t3z = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.j40_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.n40(response, $completion);
    }, 1);
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.q40_1 = $this_addDefaultResponseValidation.l3r_1;
      $this$HttpResponseValidator.r40(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_instance;
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function _init_properties_DefaultResponseValidation_kt__wcn8vr() {
    if (!properties_initialized_DefaultResponseValidation_kt_akvzqt) {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ValidateMark';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      ValidateMark = new AttributeKey(name, tmp$ret$1);
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.DefaultResponseValidation');
    }
  }
  function get_LOGGER_0() {
    _init_properties_DefaultTransform_kt__20knxx();
    return LOGGER_0;
  }
  var LOGGER_0;
  function defaultTransformers(_this__u8e3s4) {
    _init_properties_DefaultTransform_kt__20knxx();
    var tmp = Phases_getInstance().x3x_1;
    _this__u8e3s4.n3o_1.p2s(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().r3r_1;
    _this__u8e3s4.o3o_1.p2s(tmp_0, defaultTransformers$slambda_2(_this__u8e3s4, null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.v40_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.t40_1 = $contentType == null ? Application_getInstance().u2u_1 : $contentType;
    this.u40_1 = fromInt($body.length);
  }
  protoOf(defaultTransformers$1$content$1).c37 = function () {
    return this.t40_1;
  };
  protoOf(defaultTransformers$1$content$1).d37 = function () {
    return this.u40_1;
  };
  protoOf(defaultTransformers$1$content$1).e37 = function () {
    return this.v40_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.z40_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.l2s_1.u3q_1.y1a('Content-Length');
    tmp.x40_1 = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.y40_1 = $contentType == null ? Application_getInstance().u2u_1 : $contentType;
  }
  protoOf(defaultTransformers$1$content$2).d37 = function () {
    return this.x40_1;
  };
  protoOf(defaultTransformers$1$content$2).c37 = function () {
    return this.y40_1;
  };
  protoOf(defaultTransformers$1$content$2).c39 = function () {
    return this.z40_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).l3p = function ($this$intercept, body, $completion) {
    var tmp = this.m3p($this$intercept, body, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(defaultTransformers$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3p(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            if (this.i41_1.l2s_1.u3q_1.y1a('Accept') == null) {
              this.i41_1.l2s_1.u3q_1.e2p('Accept', '*/*');
            }

            var contentType_0 = contentType(this.i41_1.l2s_1);
            var tmp0_subject = this.j41_1;
            var tmp_0;
            if (typeof tmp0_subject === 'string') {
              tmp_0 = new TextContent(this.j41_1, contentType_0 == null ? Text_getInstance().m2w_1 : contentType_0);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_0 = new defaultTransformers$1$content$1(contentType_0, this.j41_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_0 = new defaultTransformers$1$content$2(this.i41_1, contentType_0, this.j41_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_0 = this.j41_1;
                  } else {
                    tmp_0 = platformRequestDefaultTransform(contentType_0, this.i41_1.l2s_1, this.j41_1);
                  }
                }
              }
            }

            var content = tmp_0;
            if (!((content == null ? null : content.c37()) == null)) {
              this.i41_1.l2s_1.u3q_1.h2p('Content-Type');
              get_LOGGER_0().j2t('Transformed with default transformers request body for ' + this.i41_1.l2s_1.s3q_1.toString() + ' from ' + toString(getKClassFromExpression(this.j41_1)));
              this.o8_1 = 1;
              suspendResult = this.i41_1.p2r(content, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 2;
              continue $sm;
            }

          case 1:
            this.o8_1 = 2;
            continue $sm;
          case 2:
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
  protoOf(defaultTransformers$slambda).m3p = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.i41_1 = $this$intercept;
    i.j41_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, body, $completion) {
      return i.l3p($this$intercept, body, $completion);
    }, 2);
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.s41_1 = $body;
    this.t41_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).e3e = function ($this$writer, $completion) {
    var tmp = this.f3e($this$writer, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(defaultTransformers$slambda$slambda).k9 = function (p1, $completion) {
    return this.e3e(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            this.p8_1 = 3;
            this.o8_1 = 1;
            suspendResult = copyTo(this.s41_1, this.u41_1.k2j_1, 9223372036854775807n, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            rethrowCloseCauseIfNeeded(this.s41_1);
            this.p8_1 = 4;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            this.p8_1 = 4;
            return Unit_instance;
          case 3:
            this.p8_1 = 4;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof CancellationException) {
              var cause = this.r8_1;
              cancel(this.t41_1, cause);
              throw cause;
            } else {
              var tmp_1 = this.r8_1;
              if (tmp_1 instanceof Error) {
                var cause_0 = this.r8_1;
                cancel_0(this.t41_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.r8_1;
              }
            }

          case 4:
            throw this.r8_1;
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
  protoOf(defaultTransformers$slambda$slambda).f3e = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.s41_1, this.t41_1, completion);
    i.u41_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.e3e($this$writer, $completion);
    }, 1);
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.e1v();
      return Unit_instance;
    };
  }
  function defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation) {
    this.d42_1 = $this_defaultTransformers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).g3q = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.h3q($this$intercept, _destruct__k2r9zo, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(defaultTransformers$slambda_1).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 12;
            this.g42_1 = this.f42_1.ue();
            var body = this.f42_1.ve();
            if (!isInterface(body, ByteReadChannel))
              return Unit_instance;
            var response = this.e42_1.l2s_1.s3p();
            var tmp0_subject = this.g42_1.c2t_1;
            if (tmp0_subject.equals(getKClass(Unit))) {
              cancel_1(body);
              this.o8_1 = 10;
              suspendResult = this.e42_1.p2r(new HttpResponseContainer(this.g42_1, Unit_instance), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().qb())) {
                this.o8_1 = 8;
                suspendResult = readRemaining(body, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject.equals(getKClass(Source)) || tmp0_subject.equals(getKClass(Source))) {
                  this.o8_1 = 6;
                  suspendResult = readRemaining(body, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject.equals(PrimitiveClasses_getInstance().zb())) {
                    this.o8_1 = 4;
                    suspendResult = toByteArray(body, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject.equals(getKClass(ByteReadChannel))) {
                      var responseJobHolder = Job(get_job(response.m1o()));
                      var this_0 = writer(this.e42_1, this.d42_1.m3o_1, VOID, defaultTransformers$slambda$slambda_0(body, response, null));
                      invokeOnCompletion(this_0, defaultTransformers$slambda$lambda(responseJobHolder));
                      attachWriterJob(body, this_0);
                      var channel = this_0.j2d_1;
                      this.o8_1 = 3;
                      suspendResult = this.e42_1.p2r(new HttpResponseContainer(this.g42_1, channel), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (tmp0_subject.equals(getKClass(HttpStatusCode))) {
                        cancel_1(body);
                        this.o8_1 = 2;
                        suspendResult = this.e42_1.p2r(new HttpResponseContainer(this.g42_1, response.r3s()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        if (tmp0_subject.equals(getKClass(MultiPartData))) {
                          var tmp0 = this.e42_1.l2s_1.s3p().p31().y1a('Content-Type');
                          var tmp$ret$0;
                          l$ret$1: do {
                            if (tmp0 == null) {
                              var message = 'No content type provided for multipart';
                              throw IllegalStateException_init_$Create$(toString(message));
                            } else {
                              tmp$ret$0 = tmp0;
                              break l$ret$1;
                            }
                          }
                           while (false);
                          var rawContentType = tmp$ret$0;
                          var contentType = Companion_getInstance_0().bm(rawContentType);
                          if (!contentType.f2x(MultiPart_getInstance().f2w_1)) {
                            var message_0 = 'Expected multipart/form-data, got ' + contentType.toString();
                            throw IllegalStateException_init_$Create$(toString(message_0));
                          }
                          var tmp1_safe_receiver = this.e42_1.l2s_1.s3p().p31().y1a('Content-Length');
                          var contentLength_0 = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
                          var body_0 = new CIOMultipartDataBase(this.e42_1.m1o(), body, rawContentType, contentLength_0);
                          var parsedResponse = new HttpResponseContainer(this.g42_1, body_0);
                          this.o8_1 = 1;
                          suspendResult = this.e42_1.p2r(parsedResponse, this);
                          if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                          }
                          continue $sm;
                        } else {
                          this.h42_1 = null;
                          this.o8_1 = 11;
                          continue $sm;
                        }
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.h42_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 2:
            this.h42_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 3:
            this.h42_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 4:
            var bytes = suspendResult;
            checkContentLength(contentLength(this.e42_1.l2s_1.s3p()), fromInt(bytes.length), this.e42_1.l2s_1.b3s().j3s());
            this.o8_1 = 5;
            suspendResult = this.e42_1.p2r(new HttpResponseContainer(this.g42_1, bytes), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.h42_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new HttpResponseContainer(this.g42_1, ARGUMENT);
            this.o8_1 = 7;
            suspendResult = this.e42_1.p2r(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.h42_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 8:
            var ARGUMENT_1 = suspendResult;
            var ARGUMENT_2 = readText(ARGUMENT_1);
            var ARGUMENT_3 = toInt(ARGUMENT_2);
            var ARGUMENT_4 = new HttpResponseContainer(this.g42_1, ARGUMENT_3);
            this.o8_1 = 9;
            suspendResult = this.e42_1.p2r(ARGUMENT_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.h42_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 10:
            this.h42_1 = suspendResult;
            this.o8_1 = 11;
            continue $sm;
          case 11:
            var result = this.h42_1;
            if (!(result == null)) {
              get_LOGGER_0().j2t('Transformed with default transformers response body ' + ('for ' + this.e42_1.l2s_1.b3s().k3s().toString() + ' to ' + toString(this.g42_1.c2t_1)));
            }

            return Unit_instance;
          case 12:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 12) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda_1).h3q = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new defaultTransformers$slambda_1(this.d42_1, completion);
    i.e42_1 = $this$intercept;
    i.f42_1 = _destruct__k2r9zo;
    return i;
  };
  function defaultTransformers$slambda_2($this_defaultTransformers, resultContinuation) {
    var i = new defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.g3q($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  var properties_initialized_DefaultTransform_kt_ossax9;
  function _init_properties_DefaultTransform_kt__20knxx() {
    if (!properties_initialized_DefaultTransform_kt_ossax9) {
      properties_initialized_DefaultTransform_kt_ossax9 = true;
      LOGGER_0 = KtorSimpleLogger('io.ktor.client.plugins.defaultTransformers');
    }
  }
  function get_LOGGER_1() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return LOGGER_1;
  }
  var LOGGER_1;
  function get_HttpCallValidator() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return HttpCallValidator;
  }
  var HttpCallValidator;
  function get_ExpectSuccessAttributeKey() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidatorConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o40_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.p40_1 = ArrayList_init_$Create$();
    this.q40_1 = true;
  }
  protoOf(HttpCallValidatorConfig).r40 = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.o40_1.c1(block);
  };
  function HttpResponseValidator(_this__u8e3s4, block) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    _this__u8e3s4.a3s(get_HttpCallValidator(), block);
  }
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function RequestError$install$slambda($handler, resultContinuation) {
    this.q42_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestError$install$slambda).l3p = function ($this$intercept, it, $completion) {
    var tmp = this.m3p($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(RequestError$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3p(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestError$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.r42_1.q2r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t42_1 = suspendResult;
            this.p8_1 = 5;
            this.o8_1 = 4;
            continue $sm;
          case 2:
            this.p8_1 = 5;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              this.o8_1 = 3;
              suspendResult = this.q42_1(HttpRequest(this.r42_1.l2s_1), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.t42_1 = Unit_instance;
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.p8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 5) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RequestError$install$slambda).m3p = function ($this$intercept, it, completion) {
    var i = new RequestError$install$slambda(this.q42_1, completion);
    i.r42_1 = $this$intercept;
    i.s42_1 = it;
    return i;
  };
  function RequestError$install$slambda_0($handler, resultContinuation) {
    var i = new RequestError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.l3p($this$intercept, it, $completion);
    }, 2);
  }
  function RequestError() {
  }
  protoOf(RequestError).u42 = function (client, handler) {
    var tmp = Phases_getInstance().u3x_1;
    client.n3o_1.p2s(tmp, RequestError$install$slambda_0(handler, null));
  };
  protoOf(RequestError).z3x = function (client, handler) {
    return this.u42(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RequestError_instance;
  function RequestError_getInstance() {
    return RequestError_instance;
  }
  function ReceiveError$install$slambda($handler, resultContinuation) {
    this.d43_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveError$install$slambda).g3q = function ($this$intercept, it, $completion) {
    var tmp = this.h3q($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(ReceiveError$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveError$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.e43_1.q2r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g43_1 = suspendResult;
            this.p8_1 = 5;
            this.o8_1 = 4;
            continue $sm;
          case 2:
            this.p8_1 = 5;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              this.o8_1 = 3;
              suspendResult = this.d43_1(this.e43_1.l2s_1.b3s(), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.g43_1 = Unit_instance;
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.p8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 5) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ReceiveError$install$slambda).h3q = function ($this$intercept, it, completion) {
    var i = new ReceiveError$install$slambda(this.d43_1, completion);
    i.e43_1 = $this$intercept;
    i.f43_1 = it;
    return i;
  };
  function ReceiveError$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.g3q($this$intercept, it, $completion);
    }, 2);
  }
  function ReceiveError() {
  }
  protoOf(ReceiveError).u42 = function (client, handler) {
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    client.o3o_1.o2s(Phases_getInstance_1().q3r_1, BeforeReceive);
    client.o3o_1.p2s(BeforeReceive, ReceiveError$install$slambda_0(handler, null));
  };
  protoOf(ReceiveError).z3x = function (client, handler) {
    return this.u42(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ReceiveError_instance;
  function ReceiveError_getInstance() {
    return ReceiveError_instance;
  }
  function HttpRequest(builder) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return new HttpRequest$1(builder);
  }
  function HttpCallValidatorConfig$_init_$ref_m1o2g9() {
    return constructCallableReference(function () {
      return new HttpCallValidatorConfig();
    }, 0, 0, 24, '<init>');
  }
  function HttpCallValidator$lambda($this$createClientPlugin) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    var responseValidators = reversed($this$createClientPlugin.t3y_1.o40_1);
    var callExceptionHandlers = reversed($this$createClientPlugin.t3y_1.p40_1);
    var expectSuccess = $this$createClientPlugin.t3y_1.q40_1;
    var tmp = SetupRequest_instance;
    $this$createClientPlugin.w3y(tmp, HttpCallValidator$lambda$slambda_0(expectSuccess, null));
    var tmp_0 = Send_instance;
    $this$createClientPlugin.w3y(tmp_0, HttpCallValidator$lambda$slambda_2(responseValidators, null));
    var tmp_1 = RequestError_instance;
    $this$createClientPlugin.w3y(tmp_1, HttpCallValidator$lambda$slambda_4(callExceptionHandlers, null));
    var tmp_2 = ReceiveError_instance;
    $this$createClientPlugin.w3y(tmp_2, HttpCallValidator$lambda$slambda_6(callExceptionHandlers, null));
    return Unit_instance;
  }
  function invoke$validateResponse(responseValidators, response, $completion) {
    var tmp = new $invoke$validateResponseCOROUTINE$(responseValidators, response, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function invoke$processException(callExceptionHandlers, cause, request, $completion) {
    var tmp = new $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function HttpCallValidator$lambda$slambda$lambda($expectSuccess) {
    return function () {
      return $expectSuccess;
    };
  }
  function HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation) {
    this.m44_1 = $expectSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda).o44 = function (request, $completion) {
    var tmp = this.p44(request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpCallValidator$lambda$slambda).k9 = function (p1, $completion) {
    return this.o44(p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        if (tmp === 0) {
          this.p8_1 = 1;
          var tmp_0 = get_ExpectSuccessAttributeKey();
          this.n44_1.x3q_1.w2m(tmp_0, HttpCallValidator$lambda$slambda$lambda(this.m44_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda).p44 = function (request, completion) {
    var i = new HttpCallValidator$lambda$slambda(this.m44_1, completion);
    i.n44_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_0($expectSuccess, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation);
    return constructCallableReference(function (request, $completion) {
      return i.o44(request, $completion);
    }, 1);
  }
  function HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation) {
    this.y44_1 = $responseValidators;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_1).c45 = function ($this$on, request, $completion) {
    var tmp = this.d45($this$on, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpCallValidator$lambda$slambda_1).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.c45(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.o8_1 = 1;
            suspendResult = this.z44_1.g45(this.a45_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b45_1 = suspendResult;
            this.o8_1 = 2;
            suspendResult = invoke$validateResponse(this.y44_1, this.b45_1.s3p(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.b45_1;
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
  protoOf(HttpCallValidator$lambda$slambda_1).d45 = function ($this$on, request, completion) {
    var i = new HttpCallValidator$lambda$slambda_1(this.y44_1, completion);
    i.z44_1 = $this$on;
    i.a45_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_2($responseValidators, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.c45($this$on, request, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation) {
    this.p45_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_3).t45 = function (request, cause, $completion) {
    var tmp = this.u45(request, cause, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpCallValidator$lambda$slambda_3).i9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.t45(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.s45_1 = unwrapCancellationException(this.r45_1);
            this.o8_1 = 1;
            suspendResult = invoke$processException(this.p45_1, this.s45_1, this.q45_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.s45_1;
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
  protoOf(HttpCallValidator$lambda$slambda_3).u45 = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_3(this.p45_1, completion);
    i.q45_1 = request;
    i.r45_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_4($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.t45(request, cause, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation) {
    this.d46_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_5).t45 = function (request, cause, $completion) {
    var tmp = this.u45(request, cause, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpCallValidator$lambda$slambda_5).i9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.t45(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.g46_1 = unwrapCancellationException(this.f46_1);
            this.o8_1 = 1;
            suspendResult = invoke$processException(this.d46_1, this.g46_1, this.e46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.g46_1;
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
  protoOf(HttpCallValidator$lambda$slambda_5).u45 = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_5(this.d46_1, completion);
    i.e46_1 = request;
    i.f46_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_6($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.t45(request, cause, $completion);
    }, 2);
  }
  function $invoke$validateResponseCOROUTINE$(responseValidators, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p43_1 = responseValidators;
    this.q43_1 = response;
  }
  protoOf($invoke$validateResponseCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            get_LOGGER_1().j2t('Validating response for request ' + this.q43_1.i3s().b3s().k3s().toString());
            this.r43_1 = this.p43_1.t();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!this.r43_1.u()) {
              this.o8_1 = 3;
              continue $sm;
            }

            var element = this.r43_1.v();
            this.o8_1 = 2;
            suspendResult = element(this.q43_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.r8_1;
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
  function $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a44_1 = callExceptionHandlers;
    this.b44_1 = cause;
    this.c44_1 = request;
  }
  protoOf($invoke$processExceptionCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            get_LOGGER_1().j2t('Processing exception ' + this.b44_1.toString() + ' for request ' + this.c44_1.k3s().toString());
            this.d44_1 = this.a44_1.t();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!this.d44_1.u()) {
              this.o8_1 = 5;
              continue $sm;
            }

            var element = this.d44_1.v();
            if (element instanceof ExceptionHandlerWrapper) {
              this.o8_1 = 3;
              suspendResult = element.i46_1(this.b44_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (element instanceof RequestExceptionHandlerWrapper) {
                this.o8_1 = 2;
                suspendResult = element.h46_1(this.b44_1, this.c44_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                noWhenBranchMatchedException();
              }
            }

            break;
          case 2:
            this.o8_1 = 4;
            continue $sm;
          case 3:
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.o8_1 = 1;
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
  function HttpRequest$1($builder) {
    this.n46_1 = $builder;
    this.j46_1 = $builder.t3q_1;
    this.k46_1 = $builder.s3q_1.i2x();
    this.l46_1 = $builder.x3q_1;
    this.m46_1 = $builder.u3q_1.i2x();
  }
  protoOf(HttpRequest$1).i3s = function () {
    // Inline function 'kotlin.error' call
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).j3s = function () {
    return this.j46_1;
  };
  protoOf(HttpRequest$1).k3s = function () {
    return this.k46_1;
  };
  protoOf(HttpRequest$1).c3s = function () {
    return this.l46_1;
  };
  protoOf(HttpRequest$1).p31 = function () {
    return this.m46_1;
  };
  protoOf(HttpRequest$1).a1b = function () {
    var tmp = this.n46_1.v3q_1;
    var tmp0_elvis_lhs = tmp instanceof OutgoingContent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Content was not transformed to OutgoingContent yet. Current body is ' + toString(this.n46_1.v3q_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function _init_properties_HttpCallValidator_kt__r6yh2y() {
    if (!properties_initialized_HttpCallValidator_kt_xrx49w) {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      LOGGER_1 = KtorSimpleLogger('io.ktor.client.plugins.HttpCallValidator');
      var tmp = HttpCallValidatorConfig$_init_$ref_m1o2g9();
      HttpCallValidator = createClientPlugin_0('HttpResponseValidator', tmp, HttpCallValidator$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ExpectSuccessAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().nb();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().nb(), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
      ExpectSuccessAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + toString(plugin) + ' is not installed. Consider using `install(' + plugin.m1().toString() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_safe_receiver = _this__u8e3s4.r3o_1.r2m(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r2m(plugin.m1());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ApplicationPluginRegistry';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Attributes);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Attributes), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      PLUGIN_INSTALLED_LIST = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_LOGGER_2() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return LOGGER_2;
  }
  var LOGGER_2;
  function get_HttpPlainText() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return HttpPlainText;
  }
  var HttpPlainText;
  function HttpPlainTextConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.o46_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.p46_1 = LinkedHashMap_init_$Create$();
    this.q46_1 = null;
    this.r46_1 = Charsets_getInstance().o2l_1;
  }
  function RenderRequestHook$install$slambda($handler, resultContinuation) {
    this.a47_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RenderRequestHook$install$slambda).l3p = function ($this$intercept, content, $completion) {
    var tmp = this.m3p($this$intercept, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(RenderRequestHook$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3p(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RenderRequestHook$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            this.o8_1 = 1;
            suspendResult = this.a47_1(this.b47_1.l2s_1, this.c47_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!(result == null)) {
              this.o8_1 = 2;
              suspendResult = this.b47_1.p2r(result, this);
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
            return Unit_instance;
          case 4:
            throw this.r8_1;
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
  protoOf(RenderRequestHook$install$slambda).m3p = function ($this$intercept, content, completion) {
    var i = new RenderRequestHook$install$slambda(this.a47_1, completion);
    i.b47_1 = $this$intercept;
    i.c47_1 = content;
    return i;
  };
  function RenderRequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RenderRequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.l3p($this$intercept, content, $completion);
    }, 2);
  }
  function RenderRequestHook() {
  }
  protoOf(RenderRequestHook).d47 = function (client, handler) {
    var tmp = Phases_getInstance().x3x_1;
    client.n3o_1.p2s(tmp, RenderRequestHook$install$slambda_0(handler, null));
  };
  protoOf(RenderRequestHook).z3x = function (client, handler) {
    return this.d47(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RenderRequestHook_instance;
  function RenderRequestHook_getInstance() {
    return RenderRequestHook_instance;
  }
  function HttpPlainTextConfig$_init_$ref_isjudo() {
    return constructCallableReference(function () {
      return new HttpPlainTextConfig();
    }, 0, 0, 25, '<init>');
  }
  function HttpPlainText$lambda($this$createClientPlugin) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = toList($this$createClientPlugin.t3y_1.p46_1);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$1);
    var responseCharsetFallback = $this$createClientPlugin.t3y_1.r46_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this$createClientPlugin.t3y_1.o46_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!$this$createClientPlugin.t3y_1.p46_1.l2(element)) {
        destination.c1(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda$lambda_0;
    var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$6);
    var tmp_1;
    var tmp0_0 = $this$createClientPlugin.t3y_1.o46_1;
    var tmp$ret$7;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp0_0, Collection)) {
        tmp_2 = tmp0_0.r();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$7 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0_0.t();
      while (_iterator__ex2g4s_0.u()) {
        var element_0 = _iterator__ex2g4s_0.v();
        if (!element_0.equals(Charsets_getInstance().o2l_1)) {
          tmp$ret$7 = true;
          break $l$block_0;
        }
      }
      tmp$ret$7 = false;
    }
    if (tmp$ret$7) {
      tmp_1 = true;
    } else {
      var tmp0_1 = $this$createClientPlugin.t3y_1.p46_1.o2();
      var tmp$ret$9;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_3;
        if (isInterface(tmp0_1, Collection)) {
          tmp_3 = tmp0_1.r();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$9 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_1 = tmp0_1.t();
        while (_iterator__ex2g4s_1.u()) {
          var element_1 = _iterator__ex2g4s_1.v();
          if (!element_1.equals(Charsets_getInstance().o2l_1)) {
            tmp$ret$9 = true;
            break $l$block_2;
          }
        }
        tmp$ret$9 = false;
      }
      tmp_1 = tmp$ret$9;
    }
    var hasRegisteredCharsets = tmp_1;
    var tmp_4;
    if (hasRegisteredCharsets) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_2 = withoutQuality.t();
      while (_iterator__ex2g4s_2.u()) {
        var element_2 = _iterator__ex2g4s_2.v();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        this_1.q(get_name(element_2));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_3 = withQuality.t();
      while (_iterator__ex2g4s_3.u()) {
        var element_3 = _iterator__ex2g4s_3.v();
        var charset = element_3.ue();
        var quality = element_3.ve();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        // Inline function 'kotlin.check' call
        if (!(0.0 <= quality ? quality <= 1.0 : false)) {
          throw IllegalStateException_init_$Create$('Check failed.');
        }
        // Inline function 'kotlin.math.roundToInt' call
        var this_2 = 100 * quality;
        var truncatedQuality = roundToInt(this_2) / 100.0;
        this_1.q(get_name(charset) + ';q=' + truncatedQuality);
      }
      tmp_4 = this_1.toString();
    } else {
      tmp_4 = null;
    }
    var acceptCharsetHeader = tmp_4;
    var tmp0_elvis_lhs = $this$createClientPlugin.t3y_1.q46_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_5;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = firstOrNull(withQuality);
      tmp_5 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.se_1;
    } else {
      tmp_5 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_5;
    var requestCharset = tmp3_elvis_lhs == null ? Charsets_getInstance().o2l_1 : tmp3_elvis_lhs;
    var tmp_6 = RenderRequestHook_instance;
    $this$createClientPlugin.w3y(tmp_6, HttpPlainText$lambda$slambda_0(acceptCharsetHeader, requestCharset, null));
    $this$createClientPlugin.e47(HttpPlainText$lambda$slambda_2(responseCharsetFallback, null));
    return Unit_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.f47_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).vc = function (a, b) {
    return this.f47_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.vc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).d3 = function () {
    return this.f47_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.d3(), other.d3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.d3());
  };
  function HttpPlainText$lambda$lambda(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.te_1;
    var tmp$ret$2 = a.te_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function HttpPlainText$lambda$lambda_0(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = get_name(a);
    var tmp$ret$2 = get_name(b);
    return compareValues(tmp, tmp$ret$2);
  }
  function invoke$wrapContent(requestCharset, request, content, requestContentType) {
    var contentType = requestContentType == null ? Text_getInstance().m2w_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? requestCharset : tmp2_elvis_lhs;
    get_LOGGER_2().j2t('Sending request body to ' + request.s3q_1.toString() + ' as text/plain with charset ' + charset_0.toString());
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function invoke$read(responseCharsetFallback, call, body) {
    var tmp0_elvis_lhs = charset_0(call.s3p());
    var actualCharset = tmp0_elvis_lhs == null ? responseCharsetFallback : tmp0_elvis_lhs;
    get_LOGGER_2().j2t('Reading response body for ' + call.b3s().k3s().toString() + ' as String with charset ' + actualCharset.toString());
    return readText_0(body, actualCharset);
  }
  function invoke$addAcceptCharsetHeader(_this__u8e3s4, value) {
    if (value == null || !(_this__u8e3s4.u3q_1.y1a('Accept-Charset') == null))
      return Unit_instance;
    get_LOGGER_2().j2t('Adding Accept-Charset=' + value + ' to ' + _this__u8e3s4.s3q_1.toString());
    _this__u8e3s4.u3q_1.c2p('Accept-Charset', value);
  }
  function HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation) {
    this.o47_1 = $acceptCharsetHeader;
    this.p47_1 = $requestCharset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda).s47 = function (request, content, $completion) {
    var tmp = this.t47(request, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpPlainText$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.s47(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        if (tmp === 0) {
          this.p8_1 = 1;
          invoke$addAcceptCharsetHeader(this.q47_1, this.o47_1);
          var tmp_0 = this.r47_1;
          if (!(typeof tmp_0 === 'string'))
            return null;
          var contentType_0 = contentType(this.q47_1);
          if (!(contentType_0 == null) && !(contentType_0.c2x_1 === Text_getInstance().m2w_1.c2x_1)) {
            return null;
          }
          return invoke$wrapContent(this.p47_1, this.q47_1, this.r47_1, contentType_0);
        } else if (tmp === 1) {
          throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda).t47 = function (request, content, completion) {
    var i = new HttpPlainText$lambda$slambda(this.o47_1, this.p47_1, completion);
    i.q47_1 = request;
    i.r47_1 = content;
    return i;
  };
  function HttpPlainText$lambda$slambda_0($acceptCharsetHeader, $requestCharset, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.s47(request, content, $completion);
    }, 2);
  }
  function HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation) {
    this.c48_1 = $responseCharsetFallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda_1).h48 = function ($this$transformResponseBody, response, content, requestedType, $completion) {
    var tmp = this.i48($this$transformResponseBody, response, content, requestedType, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpPlainText$lambda$slambda_1).j48 = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.h48(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            if (!this.g48_1.c2t_1.equals(PrimitiveClasses_getInstance().vb()))
              return null;
            this.o8_1 = 1;
            suspendResult = readRemaining(this.f48_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return invoke$read(this.c48_1, this.e48_1.i3s(), bodyBytes);
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
  protoOf(HttpPlainText$lambda$slambda_1).i48 = function ($this$transformResponseBody, response, content, requestedType, completion) {
    var i = new HttpPlainText$lambda$slambda_1(this.c48_1, completion);
    i.d48_1 = $this$transformResponseBody;
    i.e48_1 = response;
    i.f48_1 = content;
    i.g48_1 = requestedType;
    return i;
  };
  function HttpPlainText$lambda$slambda_2($responseCharsetFallback, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation);
    return constructCallableReference(function ($this$transformResponseBody, response, content, requestedType, $completion) {
      return i.h48($this$transformResponseBody, response, content, requestedType, $completion);
    }, 4);
  }
  var properties_initialized_HttpPlainText_kt_2nx4ox;
  function _init_properties_HttpPlainText_kt__iy89z1() {
    if (!properties_initialized_HttpPlainText_kt_2nx4ox) {
      properties_initialized_HttpPlainText_kt_2nx4ox = true;
      LOGGER_2 = KtorSimpleLogger('io.ktor.client.plugins.HttpPlainText');
      var tmp = HttpPlainTextConfig$_init_$ref_isjudo();
      HttpPlainText = createClientPlugin_0('HttpPlainText', tmp, HttpPlainText$lambda);
    }
  }
  function get_ALLOWED_FOR_REDIRECT() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function get_LOGGER_3() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return LOGGER_3;
  }
  var LOGGER_3;
  function get_HttpResponseRedirectEvent() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpResponseRedirectEvent;
  }
  var HttpResponseRedirectEvent;
  function get_HttpRedirect() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpRedirect;
  }
  var HttpRedirect;
  function HttpRedirectConfig() {
    this.k48_1 = true;
    this.l48_1 = false;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.n34_1;
    return tmp0_subject === Companion_getInstance_1().w32_1.n34_1 || tmp0_subject === Companion_getInstance_1().x32_1.n34_1 || (tmp0_subject === Companion_getInstance_1().c33_1.n34_1 || (tmp0_subject === Companion_getInstance_1().d33_1.n34_1 || tmp0_subject === Companion_getInstance_1().y32_1.n34_1)) ? true : false;
  }
  function HttpRedirectConfig$_init_$ref_rhym9t() {
    return constructCallableReference(function () {
      return new HttpRedirectConfig();
    }, 0, 0, 26, '<init>');
  }
  function HttpRedirect$lambda($this$createClientPlugin) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var checkHttpMethod = $this$createClientPlugin.t3y_1.k48_1;
    var allowHttpsDowngrade = $this$createClientPlugin.t3y_1.l48_1;
    var tmp = Send_instance;
    $this$createClientPlugin.w3y(tmp, HttpRedirect$lambda$slambda_0(checkHttpMethod, allowHttpsDowngrade, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$handleCall(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    this.j49_1 = $checkHttpMethod;
    this.k49_1 = $allowHttpsDowngrade;
    this.l49_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$lambda$slambda).c45 = function ($this$on, request, $completion) {
    var tmp = this.d45($this$on, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpRedirect$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.c45(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.o8_1 = 1;
            suspendResult = this.m49_1.g45(this.n49_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var origin = suspendResult;
            if (this.j49_1 && !get_ALLOWED_FOR_REDIRECT().h2(origin.b3s().j3s())) {
              return origin;
            }

            this.o8_1 = 2;
            suspendResult = invoke$handleCall(this.m49_1, this.n49_1, origin, this.k49_1, this.l49_1.s3y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(HttpRedirect$lambda$slambda).d45 = function ($this$on, request, completion) {
    var i = new HttpRedirect$lambda$slambda(this.j49_1, this.k49_1, this.l49_1, completion);
    i.m49_1 = $this$on;
    i.n49_1 = request;
    return i;
  };
  function HttpRedirect$lambda$slambda_0($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    var i = new HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.c45($this$on, request, $completion);
    }, 2);
  }
  function $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u48_1 = _this__u8e3s4;
    this.v48_1 = context;
    this.w48_1 = origin;
    this.x48_1 = allowHttpsDowngrade;
    this.y48_1 = client;
  }
  protoOf($invoke$handleCallCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            this.z48_1 = this.w48_1;
            this.a49_1 = this.v48_1;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.o8_1 = 4;
              continue $sm;
            }

            var previousProtocol = this.z48_1.b3s().k3s().s35_1;
            var previousAuthority = get_authority(this.z48_1.b3s().k3s());
            if (!isRedirect(this.z48_1.s3p().r3s()))
              return this.z48_1;
            var location = this.z48_1.s3p().p31().y1a('Location');
            if (location == null) {
              get_LOGGER_3().h2t('Location header missing from redirect response ' + this.z48_1.b3s().k3s().toString() + '; returning response as is');
              return this.z48_1;
            }

            this.y48_1.t3o_1.p39(get_HttpResponseRedirectEvent(), this.z48_1.s3p());
            get_LOGGER_3().j2t('Received redirect response to ' + location + ' for request ' + this.z48_1.b3s().k3s().toString());
            var tmp_0 = this;
            var this_0 = new HttpRequestBuilder();
            this_0.m3w(this.a49_1);
            this_0.s3q_1.c35_1.t2();
            takeFrom(this_0.s3q_1, location);
            if (!this.x48_1 && isSecure(previousProtocol) && !isSecure(this_0.s3q_1.f35())) {
              get_LOGGER_3().j2t('Blocked redirect from ' + this.z48_1.b3s().k3s().toString() + ' to ' + location + ' due to HTTPS downgrade');
              return this.z48_1;
            }

            if (!(previousAuthority === get_authority_0(this_0.s3q_1))) {
              this_0.u3q_1.h2p('Authorization');
              get_LOGGER_3().j2t('Removing Authorization header for cross-authority redirect: ' + (previousAuthority + ' -> ' + this_0.s3q_1.p36()));
            }

            tmp_0.a49_1 = this_0;
            this.o8_1 = 2;
            suspendResult = this.u48_1.g45(this.a49_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.z48_1 = suspendResult;
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
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().q31_1, Companion_getInstance_2().v31_1]);
      LOGGER_3 = KtorSimpleLogger('io.ktor.client.plugins.HttpRedirect');
      HttpResponseRedirectEvent = new EventDefinition();
      var tmp = HttpRedirectConfig$_init_$ref_rhym9t();
      HttpRedirect = createClientPlugin_0('HttpRedirect', tmp, HttpRedirect$lambda);
    }
  }
  function get_LOGGER_4() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return LOGGER_4;
  }
  var LOGGER_4;
  function get_HttpRequestLifecycle() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return HttpRequestLifecycle;
  }
  var HttpRequestLifecycle;
  function $invokeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w49_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var tmp0 = this.w49_1.a4a_1;
            this.o8_1 = 1;
            suspendResult = tmp0.q2r(this);
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
  function PipelineContext$proceed$ref(p0) {
    KFunctionImpl.call(this, 9, 1, 27);
    this.a4a_1 = p0;
  }
  protoOf(PipelineContext$proceed$ref).j2j = function ($completion) {
    var tmp = new $invokeCOROUTINE$(this, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(PipelineContext$proceed$ref).j9 = function ($completion) {
    return this.j2j($completion);
  };
  function PipelineContext$proceed$ref_0(p0) {
    var i = new PipelineContext$proceed$ref(p0);
    return constructCallableReference(function ($completion) {
      return i.j2j($completion);
    }, 0, 9, 27, VOID, [p0]);
  }
  function SetupRequestContext$install$slambda($handler, resultContinuation) {
    this.j4a_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequestContext$install$slambda).l3p = function ($this$intercept, it, $completion) {
    var tmp = this.m3p($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(SetupRequestContext$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3p(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequestContext$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.j4a_1(this.k4a_1.l2s_1, PipelineContext$proceed$ref_0(this.k4a_1), this);
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
  protoOf(SetupRequestContext$install$slambda).m3p = function ($this$intercept, it, completion) {
    var i = new SetupRequestContext$install$slambda(this.j4a_1, completion);
    i.k4a_1 = $this$intercept;
    i.l4a_1 = it;
    return i;
  };
  function SetupRequestContext$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequestContext$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.l3p($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequestContext() {
  }
  protoOf(SetupRequestContext).m4a = function (client, handler) {
    var tmp = Phases_getInstance().u3x_1;
    client.n3o_1.p2s(tmp, SetupRequestContext$install$slambda_0(handler, null));
  };
  protoOf(SetupRequestContext).z3x = function (client, handler) {
    return this.m4a(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SetupRequestContext_instance;
  function SetupRequestContext_getInstance() {
    return SetupRequestContext_instance;
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.o1p(attachToClientEngineJob$lambda(requestJob));
    requestJob.o1p(attachToClientEngineJob$lambda_0(handler));
  }
  function HttpRequestLifecycle$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var tmp = SetupRequestContext_instance;
    $this$createClientPlugin.w3y(tmp, HttpRequestLifecycle$lambda$slambda_0($this$createClientPlugin, null));
    return Unit_instance;
  }
  function HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation) {
    this.v4a_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$lambda$slambda).z4a = function (request, proceed, $completion) {
    var tmp = this.a4b(request, proceed, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.z4a(tmp, (!(p2 == null) ? isSuspendFunction(p2, 0) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            this.y4a_1 = SupervisorJob(this.w4a_1.w3q_1);
            attachToClientEngineJob(this.y4a_1, ensureNotNull(this.v4a_1.s3y_1.m3o_1.b9(Key_instance)));
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 4;
            this.p8_1 = 3;
            this.w4a_1.w3q_1 = this.y4a_1;
            this.o8_1 = 2;
            suspendResult = this.x4a_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p8_1 = 6;
            this.o8_1 = 5;
            continue $sm;
          case 3:
            this.p8_1 = 4;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              this.y4a_1.d1v(cause);
              throw cause;
            } else {
              throw this.r8_1;
            }

          case 4:
            this.p8_1 = 6;
            var t = this.r8_1;
            this.y4a_1.e1v();
            throw t;
          case 5:
            this.p8_1 = 6;
            this.y4a_1.e1v();
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
  protoOf(HttpRequestLifecycle$lambda$slambda).a4b = function (request, proceed, completion) {
    var i = new HttpRequestLifecycle$lambda$slambda(this.v4a_1, completion);
    i.w4a_1 = request;
    i.x4a_1 = proceed;
    return i;
  };
  function HttpRequestLifecycle$lambda$slambda_0($this_createClientPlugin, resultContinuation) {
    var i = new HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation);
    return constructCallableReference(function (request, proceed, $completion) {
      return i.z4a(request, proceed, $completion);
    }, 2);
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      if (!(cause == null)) {
        get_LOGGER_4().j2t('Cancelling request because engine Job failed with error: ' + cause.toString());
        cancel_2($requestJob, 'Engine failed', cause);
      } else {
        get_LOGGER_4().j2t('Cancelling request because engine Job completed');
        $requestJob.e1v();
      }
      return Unit_instance;
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.x1r();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpRequestLifecycle_kt_3hmcrf;
  function _init_properties_HttpRequestLifecycle_kt__jgkmfx() {
    if (!properties_initialized_HttpRequestLifecycle_kt_3hmcrf) {
      properties_initialized_HttpRequestLifecycle_kt_3hmcrf = true;
      LOGGER_4 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestLifecycle');
      HttpRequestLifecycle = createClientPlugin('RequestLifecycle', HttpRequestLifecycle$lambda);
    }
  }
  function get_LOGGER_5() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return LOGGER_5;
  }
  var LOGGER_5;
  function get_HttpRequestRetryEvent() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return HttpRequestRetryEvent;
  }
  var HttpRequestRetryEvent;
  var HttpRequestRetry;
  function get_MaxRetriesPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return MaxRetriesPerRequestAttributeKey;
  }
  var MaxRetriesPerRequestAttributeKey;
  function get_ShouldRetryPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryPerRequestAttributeKey;
  }
  var ShouldRetryPerRequestAttributeKey;
  function get_ShouldRetryOnExceptionPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryOnExceptionPerRequestAttributeKey;
  }
  var ShouldRetryOnExceptionPerRequestAttributeKey;
  function get_ModifyRequestPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ModifyRequestPerRequestAttributeKey;
  }
  var ModifyRequestPerRequestAttributeKey;
  function get_RetryDelayPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return RetryDelayPerRequestAttributeKey;
  }
  var RetryDelayPerRequestAttributeKey;
  function HttpRetryEventData(request, retryCount, response, cause) {
    this.b4b_1 = request;
    this.c4b_1 = retryCount;
    this.d4b_1 = response;
    this.e4b_1 = cause;
  }
  function randomMs($this, randomizationMs) {
    return randomizationMs === 0n ? 0n : Default_getInstance().ah(randomizationMs);
  }
  function HttpRequestRetryConfig$delay$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetryConfig$delay$slambda).o4b = function (it, $completion) {
    var tmp = this.p4b(it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).k9 = function (p1, $completion) {
    return this.o4b((!(p1 == null) ? typeof p1 === 'bigint' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = delay(this.n4b_1, this);
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
  protoOf(HttpRequestRetryConfig$delay$slambda).p4b = function (it, completion) {
    var i = new HttpRequestRetryConfig$delay$slambda(completion);
    i.n4b_1 = it;
    return i;
  };
  function HttpRequestRetryConfig$delay$slambda_0(resultContinuation) {
    var i = new HttpRequestRetryConfig$delay$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.o4b(it, $completion);
    }, 1);
  }
  function HttpRequestRetryConfig$modifyRequest$lambda(_this__u8e3s4, it) {
    return Unit_instance;
  }
  function HttpRequestRetryConfig$retryOnException$lambda($retryOnTimeout) {
    return function ($this$retryOnExceptionIf, _unused_var__etf5q3, cause) {
      var tmp;
      if (isTimeoutException(cause)) {
        tmp = $retryOnTimeout;
      } else {
        if (cause instanceof CancellationException) {
          tmp = false;
        } else {
          tmp = true;
        }
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$retryOnServerErrors$lambda($this$retryIf, _unused_var__etf5q3, response) {
    // Inline function 'kotlin.let' call
    var it = response.r3s().n34_1;
    return 500 <= it ? it <= 599 : false;
  }
  function HttpRequestRetryConfig$delayMillis$lambda($respectRetryAfterHeader, $block) {
    return function (_this__u8e3s4, it) {
      var tmp;
      if ($respectRetryAfterHeader) {
        var tmp0_safe_receiver = _this__u8e3s4.r4b_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p31();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y1a('Retry-After');
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : toLongOrNull(tmp2_safe_receiver);
        var tmp_0;
        if (tmp3_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.Long.times' call
          tmp_0 = multiply(tmp3_safe_receiver, fromInt(1000));
        }
        var retryAfter = tmp_0;
        var tmp0 = $block(_this__u8e3s4, it);
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = retryAfter == null ? 0n : retryAfter;
        tmp = tmp0 >= b ? tmp0 : b;
      } else {
        tmp = $block(_this__u8e3s4, it);
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$exponentialDelay$lambda($base, $baseDelayMs, $maxDelayMs, this$0, $randomizationMs) {
    return function ($this$delayMillis, retry) {
      var tmp0 = $base;
      // Inline function 'kotlin.math.pow' call
      var n = retry - 1 | 0;
      var tmp$ret$0 = Math.pow(tmp0, n);
      var tmp0_0 = numberToLong(tmp$ret$0 * toNumber($baseDelayMs));
      // Inline function 'kotlin.comparisons.minOf' call
      var b = $maxDelayMs;
      var delay = tmp0_0 <= b ? tmp0_0 : b;
      return add(delay, randomMs(this$0, $randomizationMs));
    };
  }
  function HttpRequestRetryConfig() {
    var tmp = this;
    tmp.w4b_1 = HttpRequestRetryConfig$delay$slambda_0(null);
    var tmp_0 = this;
    tmp_0.x4b_1 = HttpRequestRetryConfig$modifyRequest$lambda;
    this.y4b_1 = 0;
    this.z4b(3);
    this.a4c();
  }
  protoOf(HttpRequestRetryConfig).b4c = function () {
    var tmp = this.t4b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetry');
    }
  };
  protoOf(HttpRequestRetryConfig).c4c = function () {
    var tmp = this.u4b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetryOnException');
    }
  };
  protoOf(HttpRequestRetryConfig).d4c = function () {
    var tmp = this.v4b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('delayMillis');
    }
  };
  protoOf(HttpRequestRetryConfig).e4c = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.y4b_1 = maxRetries;
    this.t4b_1 = block;
  };
  protoOf(HttpRequestRetryConfig).f4c = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.y4b_1 = maxRetries;
    this.u4b_1 = block;
  };
  protoOf(HttpRequestRetryConfig).g4c = function (maxRetries, retryOnTimeout) {
    this.f4c(maxRetries, HttpRequestRetryConfig$retryOnException$lambda(retryOnTimeout));
  };
  protoOf(HttpRequestRetryConfig).h4c = function (maxRetries, retryOnTimeout, $super) {
    maxRetries = maxRetries === VOID ? -1 : maxRetries;
    retryOnTimeout = retryOnTimeout === VOID ? false : retryOnTimeout;
    var tmp;
    if ($super === VOID) {
      this.g4c(maxRetries, retryOnTimeout);
      tmp = Unit_instance;
    } else {
      tmp = $super.g4c.call(this, maxRetries, retryOnTimeout);
    }
    return tmp;
  };
  protoOf(HttpRequestRetryConfig).i4c = function (maxRetries) {
    this.e4c(maxRetries, HttpRequestRetryConfig$retryOnServerErrors$lambda);
  };
  protoOf(HttpRequestRetryConfig).z4b = function (maxRetries) {
    this.i4c(maxRetries);
    this.h4c(maxRetries);
  };
  protoOf(HttpRequestRetryConfig).j4c = function (respectRetryAfterHeader, block) {
    var tmp = this;
    tmp.v4b_1 = HttpRequestRetryConfig$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  protoOf(HttpRequestRetryConfig).k4c = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
    // Inline function 'kotlin.check' call
    if (!(base > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(baseDelayMs > 0n)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(maxDelayMs > 0n)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(randomizationMs >= 0n)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.j4c(respectRetryAfterHeader, HttpRequestRetryConfig$exponentialDelay$lambda(base, baseDelayMs, maxDelayMs, this, randomizationMs));
  };
  protoOf(HttpRequestRetryConfig).a4c = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader, $super) {
    base = base === VOID ? 2.0 : base;
    baseDelayMs = baseDelayMs === VOID ? 1000n : baseDelayMs;
    maxDelayMs = maxDelayMs === VOID ? 60000n : maxDelayMs;
    randomizationMs = randomizationMs === VOID ? 1000n : randomizationMs;
    respectRetryAfterHeader = respectRetryAfterHeader === VOID ? true : respectRetryAfterHeader;
    var tmp;
    if ($super === VOID) {
      this.k4c(base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
      tmp = Unit_instance;
    } else {
      tmp = $super.k4c.call(this, base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
    }
    return tmp;
  };
  function HttpRetryShouldRetryContext(retryCount) {
    this.l4c_1 = retryCount;
  }
  function HttpRetryDelayContext(request, response, cause) {
    this.q4b_1 = request;
    this.r4b_1 = response;
    this.s4b_1 = cause;
  }
  function HttpRetryModifyRequestContext(request, response, cause, retryCount) {
    this.m4c_1 = request;
    this.n4c_1 = response;
    this.o4c_1 = cause;
    this.p4c_1 = retryCount;
  }
  function throwOnInvalidResponseBody(_this__u8e3s4, $completion) {
    var tmp = new $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function isTimeoutException(_this__u8e3s4) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var exception = unwrapCancellationException(_this__u8e3s4);
    var tmp;
    var tmp_0;
    if (exception instanceof HttpRequestTimeoutException) {
      tmp_0 = true;
    } else {
      tmp_0 = exception instanceof ConnectTimeoutException;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = exception instanceof SocketTimeoutException;
    }
    return tmp;
  }
  function HttpRequestRetryConfig$_init_$ref_mqbboi() {
    return constructCallableReference(function () {
      return new HttpRequestRetryConfig();
    }, 0, 0, 28, '<init>');
  }
  function HttpRequestRetry$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var shouldRetry = $this$createClientPlugin.t3y_1.b4c();
    var shouldRetryOnException = $this$createClientPlugin.t3y_1.c4c();
    var delayMillis = $this$createClientPlugin.t3y_1.d4c();
    var delay = $this$createClientPlugin.t3y_1.w4b_1;
    var maxRetries = $this$createClientPlugin.t3y_1.y4b_1;
    var modifyRequest = $this$createClientPlugin.t3y_1.x4b_1;
    $this$createClientPlugin.c4d(HttpRequestRetry$lambda$slambda_0(maxRetries, null));
    var tmp = Send_instance;
    $this$createClientPlugin.w3y(tmp, HttpRequestRetry$lambda$slambda_2(shouldRetry, shouldRetryOnException, maxRetries, delayMillis, modifyRequest, $this$createClientPlugin, delay, null));
    return Unit_instance;
  }
  function HttpRequestRetry$lambda$prepareRequest$lambda($subRequest) {
    return function (cause) {
      var tmp = $subRequest.w3q_1;
      var subRequestJob = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
      if (cause == null) {
        subRequestJob.e1v();
      } else {
        subRequestJob.d1v(cause);
      }
      return Unit_instance;
    };
  }
  function invoke$shouldRetry(retryCount, maxRetries, shouldRetry, call) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), call.b3s(), call.s3p());
  }
  function invoke$shouldRetryOnException(retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), subRequest, cause);
  }
  function invoke$prepareRequest(request) {
    var subRequest = (new HttpRequestBuilder()).d4d(request);
    var tmp = request.w3q_1;
    tmp.o1p(HttpRequestRetry$lambda$prepareRequest$lambda(subRequest));
    return subRequest;
  }
  function HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation) {
    this.m4d_1 = $maxRetries;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda).q4d = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
    var tmp = this.r4d($this$onRequest, request, _unused_var__etf5q3, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpRequestRetry$lambda$slambda).s4d = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof OnRequestContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    return this.q4d(tmp, tmp_0, !(p3 == null) ? p3 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        if (tmp === 0) {
          this.p8_1 = 1;
          var tmp0_elvis_lhs = this.o4d_1.x3q_1.r2m(get_MaxRetriesPerRequestAttributeKey());
          var maxRetriesValue = tmp0_elvis_lhs == null ? this.m4d_1 : tmp0_elvis_lhs;
          this.o4d_1.x3q_1.t2m(get_MaxRetriesPerRequestAttributeKey(), maxRetriesValue);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda).r4d = function ($this$onRequest, request, _unused_var__etf5q3, completion) {
    var i = new HttpRequestRetry$lambda$slambda(this.m4d_1, completion);
    i.n4d_1 = $this$onRequest;
    i.o4d_1 = request;
    i.p4d_1 = _unused_var__etf5q3;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_0($maxRetries, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation);
    return constructCallableReference(function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
      return i.q4d($this$onRequest, request, _unused_var__etf5q3, $completion);
    }, 3);
  }
  function HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    this.b4e_1 = $shouldRetry;
    this.c4e_1 = $shouldRetryOnException;
    this.d4e_1 = $maxRetries;
    this.e4e_1 = $delayMillis;
    this.f4e_1 = $modifyRequest;
    this.g4e_1 = $this_createClientPlugin;
    this.h4e_1 = $delay;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda_1).c45 = function ($this$on, request, $completion) {
    var tmp = this.d45($this$on, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.c45(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 8;
            this.l4e_1 = 0;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.j4e_1.x3q_1.r2m(get_ShouldRetryPerRequestAttributeKey());
            tmp_0.s4e_1 = tmp0_elvis_lhs == null ? this.b4e_1 : tmp0_elvis_lhs;
            var tmp_1 = this;
            var tmp1_elvis_lhs = this.j4e_1.x3q_1.r2m(get_ShouldRetryOnExceptionPerRequestAttributeKey());
            tmp_1.q4e_1 = tmp1_elvis_lhs == null ? this.c4e_1 : tmp1_elvis_lhs;
            var tmp_2 = this;
            var tmp2_elvis_lhs = this.j4e_1.x3q_1.r2m(get_MaxRetriesPerRequestAttributeKey());
            tmp_2.r4e_1 = tmp2_elvis_lhs == null ? this.d4e_1 : tmp2_elvis_lhs;
            var tmp_3 = this;
            var tmp3_elvis_lhs = this.j4e_1.x3q_1.r2m(get_RetryDelayPerRequestAttributeKey());
            tmp_3.m4e_1 = tmp3_elvis_lhs == null ? this.e4e_1 : tmp3_elvis_lhs;
            var tmp_4 = this;
            var tmp4_elvis_lhs = this.j4e_1.x3q_1.r2m(get_ModifyRequestPerRequestAttributeKey());
            tmp_4.t4e_1 = tmp4_elvis_lhs == null ? this.f4e_1 : tmp4_elvis_lhs;
            this.n4e_1 = null;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.o8_1 = 9;
              continue $sm;
            }

            this.p4e_1 = invoke$prepareRequest(this.j4e_1);
            this.p8_1 = 5;
            if (!(this.n4e_1 == null)) {
              var modifyRequestContext = new HttpRetryModifyRequestContext(this.j4e_1, this.n4e_1.d4b_1, this.n4e_1.e4b_1, this.n4e_1.c4b_1);
              this.t4e_1(modifyRequestContext, this.p4e_1);
            }

            this.o8_1 = 2;
            suspendResult = this.i4e_1.g45(this.p4e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k4e_1 = suspendResult;
            if (!invoke$shouldRetry(this.l4e_1, this.r4e_1, this.s4e_1, this.k4e_1)) {
              this.o8_1 = 4;
              suspendResult = throwOnInvalidResponseBody(this.k4e_1.s3p(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 3;
              continue $sm;
            }

          case 3:
            var tmp_5 = this;
            this.l4e_1 = this.l4e_1 + 1 | 0;
            tmp_5.o4e_1 = new HttpRetryEventData(this.p4e_1, this.l4e_1, this.k4e_1.s3p(), null);
            this.p8_1 = 8;
            this.o8_1 = 6;
            continue $sm;
          case 4:
            this.p8_1 = 8;
            this.o8_1 = 9;
            continue $sm;
          case 5:
            this.p8_1 = 8;
            var tmp_6 = this.r8_1;
            if (tmp_6 instanceof Error) {
              var cause = this.r8_1;
              var tmp_7 = this;
              if (!invoke$shouldRetryOnException(this.l4e_1, this.r4e_1, this.q4e_1, this.p4e_1, cause)) {
                throw cause;
              }
              this.l4e_1 = this.l4e_1 + 1 | 0;
              tmp_7.o4e_1 = new HttpRetryEventData(this.p4e_1, this.l4e_1, null, cause);
              this.o8_1 = 6;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 6:
            this.p8_1 = 8;
            var retryData = this.o4e_1;
            this.n4e_1 = retryData;
            this.g4e_1.s3y_1.t3o_1.p39(get_HttpRequestRetryEvent(), this.n4e_1);
            var delayContext = new HttpRetryDelayContext(this.n4e_1.b4b_1, this.n4e_1.d4b_1, this.n4e_1.e4b_1);
            this.o8_1 = 7;
            suspendResult = this.h4e_1(this.m4e_1(delayContext, this.l4e_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            get_LOGGER_5().j2t('Retrying request ' + this.j4e_1.s3q_1.toString() + ' attempt: ' + this.l4e_1);
            this.o8_1 = 1;
            continue $sm;
          case 8:
            throw this.r8_1;
          case 9:
            return this.k4e_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 8) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).d45 = function ($this$on, request, completion) {
    var i = new HttpRequestRetry$lambda$slambda_1(this.b4e_1, this.c4e_1, this.d4e_1, this.e4e_1, this.f4e_1, this.g4e_1, this.h4e_1, completion);
    i.i4e_1 = $this$on;
    i.j4e_1 = request;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_2($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.c45($this$on, request, $completion);
    }, 2);
  }
  function $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y4c_1 = _this__u8e3s4;
  }
  protoOf($throwOnInvalidResponseBodyCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            if (get_isSaved(this.y4c_1)) {
              this.z4c_1 = this.y4c_1.q3s();
              this.o8_1 = 1;
              continue $sm;
            } else {
              this.a4d_1 = false;
              this.o8_1 = 4;
              continue $sm;
            }

          case 1:
            this.p8_1 = 5;
            this.o8_1 = 2;
            suspendResult = this.z4c_1.p2b(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.b4d_1 = suspendResult;
            this.p8_1 = 6;
            this.o8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.b4d_1;
            this.p8_1 = 6;
            var this_0 = this.z4c_1;
            var tmp_1;
            try {
              cancel_1(this_0);
              tmp_1 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var this_1 = tmp_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              get_LOGGER_5().i2t('Failed to close response body channel', tmp0_safe_receiver);
            }

            this.a4d_1 = tmp_0;
            this.o8_1 = 4;
            continue $sm;
          case 4:
            return this.a4d_1;
          case 5:
            this.p8_1 = 6;
            var t = this.r8_1;
            var this_2 = this.z4c_1;
            var tmp_3;
            try {
              cancel_1(this_2);
              tmp_3 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p_0) {
              var tmp_4;
              if ($p_0 instanceof Error) {
                var e_0 = $p_0;
                tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
              } else {
                throw $p_0;
              }
              tmp_3 = tmp_4;
            }

            var this_3 = tmp_3;
            var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              get_LOGGER_5().i2t('Failed to close response body channel', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.r8_1;
        }
      } catch ($p_1) {
        var e_1 = $p_1;
        if (this.p8_1 === 6) {
          throw e_1;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e_1;
        }
      }
     while (true);
  };
  var properties_initialized_HttpRequestRetry_kt_jcpv6l;
  function _init_properties_HttpRequestRetry_kt__h4xjtt() {
    if (!properties_initialized_HttpRequestRetry_kt_jcpv6l) {
      properties_initialized_HttpRequestRetry_kt_jcpv6l = true;
      LOGGER_5 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestRetry');
      HttpRequestRetryEvent = new EventDefinition();
      var tmp = HttpRequestRetryConfig$_init_$ref_mqbboi();
      HttpRequestRetry = createClientPlugin_0('RetryFeature', tmp, HttpRequestRetry$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'MaxRetriesPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().qb();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().qb(), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
      MaxRetriesPerRequestAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ShouldRetryPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = PrimitiveClasses_getInstance().functionClass(3);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_4;
      try {
        tmp_4 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequest_0), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpResponse), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nb(), arrayOf([]), false))]), false);
      } catch ($p_0) {
        var tmp_5;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_5 = null;
        } else {
          throw $p_0;
        }
        tmp_4 = tmp_5;
      }
      var tmp$ret$2_0 = tmp_4;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp$ret$2_0);
      ShouldRetryPerRequestAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_1 = 'ShouldRetryOnExceptionPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_6 = PrimitiveClasses_getInstance().functionClass(3);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_7;
      try {
        tmp_7 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().wb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nb(), arrayOf([]), false))]), false);
      } catch ($p_1) {
        var tmp_8;
        if ($p_1 instanceof Error) {
          var _unused_var__etf5q3_1 = $p_1;
          tmp_8 = null;
        } else {
          throw $p_1;
        }
        tmp_7 = tmp_8;
      }
      var tmp$ret$2_1 = tmp_7;
      var tmp$ret$1_1 = new TypeInfo(tmp_6, tmp$ret$2_1);
      ShouldRetryOnExceptionPerRequestAttributeKey = new AttributeKey(name_1, tmp$ret$1_1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_2 = 'ModifyRequestPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_9 = PrimitiveClasses_getInstance().functionClass(2);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_10;
      try {
        tmp_10 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryModifyRequestContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Unit), arrayOf([]), false))]), false);
      } catch ($p_2) {
        var tmp_11;
        if ($p_2 instanceof Error) {
          var _unused_var__etf5q3_2 = $p_2;
          tmp_11 = null;
        } else {
          throw $p_2;
        }
        tmp_10 = tmp_11;
      }
      var tmp$ret$2_2 = tmp_10;
      var tmp$ret$1_2 = new TypeInfo(tmp_9, tmp$ret$2_2);
      ModifyRequestPerRequestAttributeKey = new AttributeKey(name_2, tmp$ret$1_2);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_3 = 'RetryDelayPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_12 = PrimitiveClasses_getInstance().functionClass(2);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_13;
      try {
        tmp_13 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryDelayContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().qb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().rb(), arrayOf([]), false))]), false);
      } catch ($p_3) {
        var tmp_14;
        if ($p_3 instanceof Error) {
          var _unused_var__etf5q3_3 = $p_3;
          tmp_14 = null;
        } else {
          throw $p_3;
        }
        tmp_13 = tmp_14;
      }
      var tmp$ret$2_3 = tmp_13;
      var tmp$ret$1_3 = new TypeInfo(tmp_12, tmp$ret$2_3);
      RetryDelayPerRequestAttributeKey = new AttributeKey(name_3, tmp$ret$1_3);
    }
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.c4f_1 = $plugin;
    this.d4f_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).l3p = function ($this$intercept, content, $completion) {
    var tmp = this.m3p($this$intercept, content, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpSend$Plugin$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3p(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp_0 = this.f4f_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + toString(getKClassFromExpression(this.f4f_1)) + ', with Content-Type: ' + toString_0(contentType(this.e4f_1.l2s_1)) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0 = this.e4f_1.l2s_1;
            var body = this.f4f_1;
            if (body == null) {
              tmp0.v3q_1 = NullBody_instance;
              var tmp_1 = getKClass(OutgoingContent);
              var tmp_2;
              try {
                tmp_2 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_3;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_3 = null;
                } else {
                  throw $p;
                }
                tmp_2 = tmp_3;
              }
              tmp0.n3w(new TypeInfo(tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                tmp0.v3q_1 = body;
                tmp0.n3w(null);
              } else {
                tmp0.v3q_1 = body;
                var tmp_4 = getKClass(OutgoingContent);
                var tmp_5;
                try {
                  tmp_5 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_6;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_6 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_5 = tmp_6;
                }
                tmp0.n3w(new TypeInfo(tmp_4, tmp_5));
              }
            }

            var maxRetries = this.e4f_1.l2s_1.x3q_1.r2m(get_MaxRetriesPerRequestAttributeKey());
            var tmp_7;
            if (!(maxRetries == null) && maxRetries >= this.c4f_1.g4f_1) {
              var tmp_8;
              if (maxRetries < 2147483647) {
                tmp_8 = maxRetries + 1 | 0;
              } else {
                tmp_8 = maxRetries;
              }
              tmp_7 = tmp_8;
            } else {
              tmp_7 = this.c4f_1.g4f_1;
            }

            var maxSendCount = tmp_7;
            var realSender = new DefaultSender(maxSendCount, this.d4f_1);
            var interceptedSender = realSender;
            var _iterator__ex2g4s = reversed(this.c4f_1.h4f_1).t();
            while (_iterator__ex2g4s.u()) {
              var interceptor = _iterator__ex2g4s.v();
              interceptedSender = new InterceptedSender(interceptor, interceptedSender);
            }

            this.o8_1 = 1;
            suspendResult = interceptedSender.i4f(this.e4f_1.l2s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var call = suspendResult;
            this.o8_1 = 2;
            suspendResult = this.e4f_1.p2r(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.r8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.p8_1 === 3) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpSend$Plugin$install$slambda).m3p = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.c4f_1, this.d4f_1, completion);
    i.e4f_1 = $this$intercept;
    i.f4f_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.l3p($this$intercept, content, $completion);
    }, 2);
  }
  function $executeCOROUTINE$_0(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r4f_1 = _this__u8e3s4;
    this.s4f_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$_0).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var tmp0_safe_receiver = this.r4f_1.w4f_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.r4f_1.v4f_1 >= this.r4f_1.t4f_1) {
              throw new SendCountExceedException('Max send count ' + this.r4f_1.t4f_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var _unary__edvuaz = this.r4f_1.v4f_1;
            this.r4f_1.v4f_1 = _unary__edvuaz + 1 | 0;
            this.o8_1 = 1;
            suspendResult = this.r4f_1.u4f_1.p3o_1.k2s(this.s4f_1, this.s4f_1.v3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp1_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              var message = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var call = tmp_0;
            this.r4f_1.w4f_1 = call;
            return call;
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
  function Config() {
    this.x4f_1 = 20;
  }
  function Plugin() {
    Plugin_instance = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'HttpSend';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpSend);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(HttpSend), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.y4f_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin).m1 = function () {
    return this.y4f_1;
  };
  protoOf(Plugin).z4f = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    block(this_0);
    var config = this_0;
    return new HttpSend(config.x4f_1);
  };
  protoOf(Plugin).x3r = function (block) {
    return this.z4f(block);
  };
  protoOf(Plugin).a4g = function (plugin, scope) {
    var tmp = Phases_getInstance().y3x_1;
    scope.n3o_1.p2s(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin).y3r = function (plugin, scope) {
    return this.a4g(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.b4g_1 = interceptor;
    this.c4g_1 = nextSender;
  }
  protoOf(InterceptedSender).i4f = function (requestBuilder, $completion) {
    return this.b4g_1(this.c4g_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.t4f_1 = maxSendCount;
    this.u4f_1 = client;
    this.v4f_1 = 0;
    this.w4f_1 = null;
  }
  protoOf(DefaultSender).i4f = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$_0(this, requestBuilder, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.g4f_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h4f_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).d4g = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.h4f_1.c1(block);
  };
  function Sender() {
  }
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function get_LOGGER_6() {
    _init_properties_HttpTimeout_kt__pucqrr();
    return LOGGER_6;
  }
  var LOGGER_6;
  var HttpTimeout;
  function timeout(_this__u8e3s4, block) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp = HttpTimeoutCapability_instance;
    // Inline function 'kotlin.apply' call
    var this_0 = HttpTimeoutConfig_init_$Create$();
    block(this_0);
    return _this__u8e3s4.e4g(tmp, this_0);
  }
  function HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    requestTimeoutMillis = requestTimeoutMillis === VOID ? null : requestTimeoutMillis;
    connectTimeoutMillis = connectTimeoutMillis === VOID ? null : connectTimeoutMillis;
    socketTimeoutMillis = socketTimeoutMillis === VOID ? null : socketTimeoutMillis;
    HttpTimeoutConfig.call($this);
    $this.i4g(requestTimeoutMillis);
    $this.j4g(connectTimeoutMillis);
    $this.k4g(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutConfig_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    return HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, objectCreate(protoOf(HttpTimeoutConfig)));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    if (!(value == null || value > 0n)) {
      var message = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeoutConfig.INFINITE_TIMEOUT_MS';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.l4g_1 = 9223372036854775807n;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'TimeoutConfiguration';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpTimeoutConfig);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(HttpTimeoutConfig), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.m4g_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  protoOf(HttpTimeoutConfig).i4g = function (value) {
    this.f4g_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).n4g = function () {
    return this.f4g_1;
  };
  protoOf(HttpTimeoutConfig).j4g = function (value) {
    this.g4g_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).o4g = function () {
    return this.g4g_1;
  };
  protoOf(HttpTimeoutConfig).k4g = function (value) {
    this.h4g_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).p4g = function () {
    return this.h4g_1;
  };
  protoOf(HttpTimeoutConfig).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof HttpTimeoutConfig))
      THROW_CCE();
    if (!(this.f4g_1 == other.f4g_1))
      return false;
    if (!(this.g4g_1 == other.g4g_1))
      return false;
    if (!(this.h4g_1 == other.h4g_1))
      return false;
    return true;
  };
  protoOf(HttpTimeoutConfig).hashCode = function () {
    var tmp0_safe_receiver = this.f4g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getBigIntHashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.g4g_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : getBigIntHashCode(tmp2_safe_receiver);
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.h4g_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : getBigIntHashCode(tmp4_safe_receiver);
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutConfig() {
    Companion_getInstance_10();
    this.f4g_1 = 0n;
    this.g4g_1 = 0n;
    this.h4g_1 = 0n;
  }
  function HttpTimeoutCapability() {
  }
  protoOf(HttpTimeoutCapability).toString = function () {
    return 'HttpTimeoutCapability';
  };
  protoOf(HttpTimeoutCapability).hashCode = function () {
    return 2058496954;
  };
  protoOf(HttpTimeoutCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpTimeoutCapability))
      return false;
    return true;
  };
  var HttpTimeoutCapability_instance;
  function HttpTimeoutCapability_getInstance() {
    return HttpTimeoutCapability_instance;
  }
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.s3q_1.p36();
    var tmp0_safe_receiver = request.q4g(HttpTimeoutCapability_instance);
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n4g());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, objectCreate(protoOf(HttpRequestTimeoutException)));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis, cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(timeoutMillis == null ? 'unknown' : timeoutMillis) + ' ms]', cause, this);
    captureStack(this, HttpRequestTimeoutException);
    this.r4g_1 = url;
    this.s4g_1 = timeoutMillis;
  }
  protoOf(HttpRequestTimeoutException).n1v = function () {
    return new HttpRequestTimeoutException(this.r4g_1, this.s4g_1, this.cause);
  };
  function get_supportsRequestTimeout(_this__u8e3s4) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp;
    var tmp_0;
    if (!isWebsocket(_this__u8e3s4.s3q_1.f35())) {
      var tmp_1 = _this__u8e3s4.v3q_1;
      tmp_0 = !(tmp_1 instanceof ClientUpgradeContent);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_2 = _this__u8e3s4.v3q_1;
      tmp = !(tmp_2 instanceof SSEClientContent);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function applyRequestTimeout(_this__u8e3s4, request, requestTimeout) {
    _init_properties_HttpTimeout_kt__pucqrr();
    if (requestTimeout == null || requestTimeout === 9223372036854775807n)
      return Unit_instance;
    var executionContext = request.w3q_1;
    var tmp = new CoroutineName('request-timeout');
    var killer = launch(_this__u8e3s4, tmp, VOID, applyRequestTimeout$slambda_0(requestTimeout, request, executionContext, null));
    var tmp_0 = request.w3q_1;
    tmp_0.o1p(applyRequestTimeout$lambda(killer));
  }
  function HttpTimeoutConfig$_init_$ref_dl1k0m() {
    return constructCallableReference(function () {
      return HttpTimeoutConfig_init_$Create$();
    }, 0, 0, 29);
  }
  function HttpTimeout$lambda($this$createClientPlugin) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var requestTimeoutMillis = $this$createClientPlugin.t3y_1.n4g();
    var connectTimeoutMillis = $this$createClientPlugin.t3y_1.o4g();
    var socketTimeoutMillis = $this$createClientPlugin.t3y_1.p4g();
    var tmp = Send_instance;
    $this$createClientPlugin.w3y(tmp, HttpTimeout$lambda$slambda_0(connectTimeoutMillis, socketTimeoutMillis, requestTimeoutMillis, null));
    return Unit_instance;
  }
  function invoke$hasNotNullTimeouts(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, supportsRequestTimeout) {
    return supportsRequestTimeout && !(requestTimeoutMillis == null) || !(connectTimeoutMillis == null) || !(socketTimeoutMillis == null);
  }
  function HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    this.b4h_1 = $connectTimeoutMillis;
    this.c4h_1 = $socketTimeoutMillis;
    this.d4h_1 = $requestTimeoutMillis;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$lambda$slambda).c45 = function ($this$on, request, $completion) {
    var tmp = this.d45($this$on, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpTimeout$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.c45(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var supportsRequestTimeout = get_supportsRequestTimeout(this.f4h_1);
            var configuration = this.f4h_1.q4g(HttpTimeoutCapability_instance);
            if (configuration == null && invoke$hasNotNullTimeouts(this.d4h_1, this.b4h_1, this.c4h_1, supportsRequestTimeout)) {
              configuration = HttpTimeoutConfig_init_$Create$();
              this.f4h_1.e4g(HttpTimeoutCapability_instance, configuration);
            }

            var tmp0_safe_receiver = configuration;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_elvis_lhs = tmp0_safe_receiver.o4g();
              tmp0_safe_receiver.j4g(tmp0_elvis_lhs == null ? this.b4h_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.p4g();
              tmp0_safe_receiver.k4g(tmp1_elvis_lhs == null ? this.c4h_1 : tmp1_elvis_lhs);
              if (supportsRequestTimeout) {
                var tmp2_elvis_lhs = tmp0_safe_receiver.n4g();
                tmp0_safe_receiver.i4g(tmp2_elvis_lhs == null ? this.d4h_1 : tmp2_elvis_lhs);
                applyRequestTimeout(this.e4h_1, this.f4h_1, tmp0_safe_receiver.n4g());
              }
            }

            this.o8_1 = 1;
            suspendResult = this.e4h_1.g45(this.f4h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpTimeout$lambda$slambda).d45 = function ($this$on, request, completion) {
    var i = new HttpTimeout$lambda$slambda(this.b4h_1, this.c4h_1, this.d4h_1, completion);
    i.e4h_1 = $this$on;
    i.f4h_1 = request;
    return i;
  };
  function HttpTimeout$lambda$slambda_0($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    var i = new HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.c45($this$on, request, $completion);
    }, 2);
  }
  function applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.o4h_1 = $requestTimeout;
    this.p4h_1 = $request;
    this.q4h_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(applyRequestTimeout$slambda).o2k = function ($this$launch, $completion) {
    var tmp = this.p2k($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(applyRequestTimeout$slambda).k9 = function (p1, $completion) {
    return this.o2k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(applyRequestTimeout$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            Companion_getInstance_3();
            var this_0 = this.o4h_1;
            suspendResult = delay_0(toDuration(this_0, DurationUnit_MILLISECONDS_getInstance()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.p4h_1);
            var this_1 = get_LOGGER_6();
            if (get_isTraceEnabled(this_1)) {
              this_1.j2t('Request timeout: ' + this.p4h_1.s3q_1.toString());
            }

            cancel_2(this.q4h_1, ensureNotNull(cause.message), cause);
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
  protoOf(applyRequestTimeout$slambda).p2k = function ($this$launch, completion) {
    var i = new applyRequestTimeout$slambda(this.o4h_1, this.p4h_1, this.q4h_1, completion);
    i.r4h_1 = $this$launch;
    return i;
  };
  function applyRequestTimeout$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2k($this$launch, $completion);
    }, 1);
  }
  function applyRequestTimeout$lambda($killer) {
    return function (it) {
      $killer.w1p();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpTimeout_kt_9oyjbd;
  function _init_properties_HttpTimeout_kt__pucqrr() {
    if (!properties_initialized_HttpTimeout_kt_9oyjbd) {
      properties_initialized_HttpTimeout_kt_9oyjbd = true;
      LOGGER_6 = KtorSimpleLogger('io.ktor.client.plugins.HttpTimeout');
      var tmp = HttpTimeoutConfig$_init_$ref_dl1k0m();
      HttpTimeout = createClientPlugin_0('HttpTimeout', tmp, HttpTimeout$lambda);
    }
  }
  function get_SKIP_SAVE_BODY() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SKIP_SAVE_BODY;
  }
  var SKIP_SAVE_BODY;
  function get_RESPONSE_BODY_SAVED() {
    _init_properties_SaveBody_kt__lbc3fj();
    return RESPONSE_BODY_SAVED;
  }
  var RESPONSE_BODY_SAVED;
  function get_LOGGER_7() {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp0 = LOGGER$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('LOGGER', 0, tmp, _get_LOGGER_$ref_77hhxy(), null);
    return tmp0.n1();
  }
  var LOGGER$delegate;
  function get_SaveBody() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SaveBody;
  }
  var SaveBody;
  var SaveBodyPlugin;
  function get_isSaved(_this__u8e3s4) {
    _init_properties_SaveBody_kt__lbc3fj();
    return _this__u8e3s4.i3s().c3s().s2m(get_RESPONSE_BODY_SAVED());
  }
  function SaveBodyPluginConfig() {
    this.s4h_1 = false;
  }
  function LOGGER$delegate$lambda() {
    _init_properties_SaveBody_kt__lbc3fj();
    return KtorSimpleLogger('io.ktor.client.plugins.SaveBody');
  }
  function _get_LOGGER_$ref_77hhxy() {
    return constructCallableReference(function () {
      return get_LOGGER_7();
    }, 0, 0, 30);
  }
  function SaveBody$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp = Phases_getInstance_2().o3y_1;
    $this$createClientPlugin.s3y_1.q3o_1.p2s(tmp, SaveBody$lambda$slambda_0(null));
    return Unit_instance;
  }
  function SaveBody$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SaveBody$lambda$slambda).l3y = function ($this$intercept, response, $completion) {
    var tmp = this.m3y($this$intercept, response, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(SaveBody$lambda$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3y(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SaveBody$lambda$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            this.f4i_1 = this.c4i_1.i3s();
            this.d4i_1 = this.f4i_1.c3s();
            if (this.d4i_1.s2m(get_SKIP_SAVE_BODY())) {
              var this_0 = get_LOGGER_7();
              if (get_isTraceEnabled(this_0)) {
                this_0.j2t('Skipping body saving for ' + this.f4i_1.b3s().k3s().toString());
              }
              return Unit_instance;
            }

            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 5;
            var this_1 = get_LOGGER_7();
            if (get_isTraceEnabled(this_1)) {
              this_1.j2t('Saving body for ' + this.f4i_1.b3s().k3s().toString());
            }

            this.o8_1 = 2;
            suspendResult = save(this.f4i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e4i_1 = suspendResult.s3p();
            this.p8_1 = 6;
            this.o8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.e4i_1;
            this.p8_1 = 6;
            this.b4i_1;
            var tmp_1;
            try {
              cancel_1(this.c4i_1.q3s());
              tmp_1 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var this_2 = tmp_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_2);
            if (tmp0_safe_receiver == null)
              null;
            else {
              get_LOGGER_7().i2t('Failed to cancel response body', tmp0_safe_receiver);
            }

            var savedResponse = tmp_0;
            this.d4i_1.t2m(get_RESPONSE_BODY_SAVED(), Unit_instance);
            this.o8_1 = 4;
            suspendResult = this.b4i_1.p2r(savedResponse, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            this.p8_1 = 6;
            var t = this.r8_1;
            this.b4i_1;
            var tmp_3;
            try {
              cancel_1(this.c4i_1.q3s());
              tmp_3 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p_0) {
              var tmp_4;
              if ($p_0 instanceof Error) {
                var e_0 = $p_0;
                tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
              } else {
                throw $p_0;
              }
              tmp_3 = tmp_4;
            }

            var this_3 = tmp_3;
            var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              get_LOGGER_7().i2t('Failed to cancel response body', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.r8_1;
        }
      } catch ($p_1) {
        var e_1 = $p_1;
        if (this.p8_1 === 6) {
          throw e_1;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(SaveBody$lambda$slambda).m3y = function ($this$intercept, response, completion) {
    var i = new SaveBody$lambda$slambda(completion);
    i.b4i_1 = $this$intercept;
    i.c4i_1 = response;
    return i;
  };
  function SaveBody$lambda$slambda_0(resultContinuation) {
    var i = new SaveBody$lambda$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.l3y($this$intercept, response, $completion);
    }, 2);
  }
  function SaveBodyPluginConfig$_init_$ref_lwjaof() {
    return constructCallableReference(function () {
      return new SaveBodyPluginConfig();
    }, 0, 0, 31, '<init>');
  }
  function SaveBodyPlugin$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    if ($this$createClientPlugin.t3y_1.s4h_1) {
      get_LOGGER_7().h2t('It is no longer possible to disable body saving for all requests. Use client.prepareRequest(...).execute { ... } syntax to prevent saving the body in memory.\n\nThis API is deprecated and will be removed in Ktor 4.0.0\nIf you were relying on this functionality, share your use case by commenting on this issue: https://youtrack.jetbrains.com/issue/KTOR-8367/');
    } else {
      get_LOGGER_7().h2t('The SaveBodyPlugin plugin is deprecated and can be safely removed. Request bodies are now saved in memory by default for all non-streaming responses.');
    }
    return Unit_instance;
  }
  var properties_initialized_SaveBody_kt_hzvee7;
  function _init_properties_SaveBody_kt__lbc3fj() {
    if (!properties_initialized_SaveBody_kt_hzvee7) {
      properties_initialized_SaveBody_kt_hzvee7 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'SkipSaveBody';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      SKIP_SAVE_BODY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ResponseBodySaved';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
      RESPONSE_BODY_SAVED = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER$delegate = lazy(LOGGER$delegate$lambda);
      SaveBody = createClientPlugin('SaveBody', SaveBody$lambda);
      var tmp_5 = SaveBodyPluginConfig$_init_$ref_lwjaof();
      SaveBodyPlugin = createClientPlugin_0('DoubleReceivePlugin', tmp_5, SaveBodyPlugin$lambda);
    }
  }
  function HookHandler(hook, handler) {
    this.g4i_1 = hook;
    this.h4i_1 = handler;
  }
  protoOf(HookHandler).z3q = function (client) {
    this.g4i_1.z3x(client, this.h4i_1);
  };
  function ClientPluginBuilder$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginBuilder(key, client, pluginConfig) {
    this.r3y_1 = key;
    this.s3y_1 = client;
    this.t3y_1 = pluginConfig;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u3y_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    tmp_0.v3y_1 = ClientPluginBuilder$onClose$lambda;
  }
  protoOf(ClientPluginBuilder).c4d = function (block) {
    this.w3y(RequestHook_instance, block);
  };
  protoOf(ClientPluginBuilder).e47 = function (block) {
    this.w3y(TransformResponseBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).w3y = function (hook, handler) {
    this.u3y_1.c1(new HookHandler(hook, handler));
  };
  function ClientPluginInstance$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginInstance(key, config, body) {
    this.i4i_1 = key;
    this.j4i_1 = config;
    this.k4i_1 = body;
    var tmp = this;
    tmp.l4i_1 = ClientPluginInstance$onClose$lambda;
  }
  protoOf(ClientPluginInstance).z3q = function (scope) {
    var tmp0 = new ClientPluginBuilder(this.i4i_1, scope, this.j4i_1);
    // Inline function 'kotlin.apply' call
    this.k4i_1(tmp0);
    var pluginBuilder = tmp0;
    this.l4i_1 = pluginBuilder.v3y_1;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pluginBuilder.u3y_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.z3q(scope);
    }
  };
  protoOf(ClientPluginInstance).a4 = function () {
    this.l4i_1();
  };
  function SetupRequest$install$slambda($handler, resultContinuation) {
    this.u4i_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequest$install$slambda).l3p = function ($this$intercept, it, $completion) {
    var tmp = this.m3p($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(SetupRequest$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3p(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequest$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.u4i_1(this.v4i_1.l2s_1, this);
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
  protoOf(SetupRequest$install$slambda).m3p = function ($this$intercept, it, completion) {
    var i = new SetupRequest$install$slambda(this.u4i_1, completion);
    i.v4i_1 = $this$intercept;
    i.w4i_1 = it;
    return i;
  };
  function SetupRequest$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequest$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.l3p($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequest() {
  }
  protoOf(SetupRequest).x4i = function (client, handler) {
    var tmp = Phases_getInstance().u3x_1;
    client.n3o_1.p2s(tmp, SetupRequest$install$slambda_0(handler, null));
  };
  protoOf(SetupRequest).z3x = function (client, handler) {
    return this.x4i(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var SetupRequest_instance;
  function SetupRequest_getInstance() {
    return SetupRequest_instance;
  }
  function Sender_0(httpSendSender, coroutineContext) {
    this.e45_1 = httpSendSender;
    this.f45_1 = coroutineContext;
  }
  protoOf(Sender_0).m1o = function () {
    return this.f45_1;
  };
  protoOf(Sender_0).g45 = function (requestBuilder, $completion) {
    return this.e45_1.i4f(requestBuilder, $completion);
  };
  function Send$install$slambda($handler, $client, resultContinuation) {
    this.g4j_1 = $handler;
    this.h4j_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Send$install$slambda).k4j = function ($this$intercept, request, $completion) {
    var tmp = this.l4j($this$intercept, request, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(Send$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.k4j(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Send$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.g4j_1(new Sender_0(this.i4j_1, this.h4j_1.m3o_1), this.j4j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(Send$install$slambda).l4j = function ($this$intercept, request, completion) {
    var i = new Send$install$slambda(this.g4j_1, this.h4j_1, completion);
    i.i4j_1 = $this$intercept;
    i.j4j_1 = request;
    return i;
  };
  function Send$install$slambda_0($handler, $client, resultContinuation) {
    var i = new Send$install$slambda($handler, $client, resultContinuation);
    return constructCallableReference(function ($this$intercept, request, $completion) {
      return i.k4j($this$intercept, request, $completion);
    }, 2);
  }
  function Send() {
  }
  protoOf(Send).m4j = function (client, handler) {
    var tmp = plugin(client, Plugin_getInstance());
    tmp.d4g(Send$install$slambda_0(handler, client, null));
  };
  protoOf(Send).z3x = function (client, handler) {
    return this.m4j(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var Send_instance;
  function Send_getInstance() {
    return Send_instance;
  }
  function createClientPlugin(name, body) {
    return createClientPlugin_0(name, createClientPlugin$lambda, body);
  }
  function createClientPlugin_0(name, createConfiguration, body) {
    return new ClientPluginImpl(name, createConfiguration, body);
  }
  function ClientPluginImpl(name, createConfiguration, body) {
    this.n4j_1 = createConfiguration;
    this.o4j_1 = body;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(ClientPluginInstance);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(ClientPluginInstance), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('PluginConfigT', arrayOf([createKType(PrimitiveClasses_getInstance().kb(), arrayOf([]), false)]), 'invariant', false, 'io.ktor.client.plugins.api.ClientPluginImpl'), arrayOf([]), false))]), false);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.p4j_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(ClientPluginImpl).m1 = function () {
    return this.p4j_1;
  };
  protoOf(ClientPluginImpl).q4j = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.n4j_1();
    block(this_0);
    var config = this_0;
    return new ClientPluginInstance(this.p4j_1, config, this.o4j_1);
  };
  protoOf(ClientPluginImpl).x3r = function (block) {
    return this.q4j(block);
  };
  protoOf(ClientPluginImpl).r4j = function (plugin, scope) {
    plugin.z3q(scope);
  };
  protoOf(ClientPluginImpl).y3r = function (plugin, scope) {
    return this.r4j(plugin instanceof ClientPluginInstance ? plugin : THROW_CCE(), scope);
  };
  function createClientPlugin$lambda() {
    return Unit_instance;
  }
  function TransformResponseBodyContext() {
  }
  function OnRequestContext() {
  }
  function RequestHook$install$slambda($handler, resultContinuation) {
    this.a4k_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestHook$install$slambda).l3p = function ($this$intercept, it, $completion) {
    var tmp = this.m3p($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(RequestHook$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3p(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestHook$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.a4k_1(new OnRequestContext(), this.b4k_1.l2s_1, this.b4k_1.o2r(), this);
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
  protoOf(RequestHook$install$slambda).m3p = function ($this$intercept, it, completion) {
    var i = new RequestHook$install$slambda(this.a4k_1, completion);
    i.b4k_1 = $this$intercept;
    i.c4k_1 = it;
    return i;
  };
  function RequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.l3p($this$intercept, it, $completion);
    }, 2);
  }
  function RequestHook() {
  }
  protoOf(RequestHook).d4k = function (client, handler) {
    var tmp = Phases_getInstance().v3x_1;
    client.n3o_1.p2s(tmp, RequestHook$install$slambda_0(handler, null));
  };
  protoOf(RequestHook).z3x = function (client, handler) {
    return this.d4k(client, (!(handler == null) ? isSuspendFunction(handler, 3) : false) ? handler : THROW_CCE());
  };
  var RequestHook_instance;
  function RequestHook_getInstance() {
    return RequestHook_instance;
  }
  function TransformResponseBodyHook$install$slambda($handler, resultContinuation) {
    this.m4k_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformResponseBodyHook$install$slambda).g3q = function ($this$intercept, it, $completion) {
    var tmp = this.h3q($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(TransformResponseBodyHook$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformResponseBodyHook$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var _destruct__k2r9zo = this.n4k_1.o2r();
            this.p4k_1 = _destruct__k2r9zo.ue();
            var content = _destruct__k2r9zo.ve();
            if (!isInterface(content, ByteReadChannel))
              return Unit_instance;
            this.o8_1 = 1;
            suspendResult = this.m4k_1(new TransformResponseBodyContext(), this.n4k_1.l2s_1.s3p(), content, this.p4k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var newContent = tmp_0;
            var tmp_1;
            if (!(newContent instanceof NullBody)) {
              tmp_1 = !this.p4k_1.c2t_1.sa(newContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              throw IllegalStateException_init_$Create$('transformResponseBody returned ' + toString(newContent) + ' but expected value of type ' + this.p4k_1.toString());
            }

            this.o8_1 = 2;
            suspendResult = this.n4k_1.p2r(new HttpResponseContainer(this.p4k_1, newContent), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(TransformResponseBodyHook$install$slambda).h3q = function ($this$intercept, it, completion) {
    var i = new TransformResponseBodyHook$install$slambda(this.m4k_1, completion);
    i.n4k_1 = $this$intercept;
    i.o4k_1 = it;
    return i;
  };
  function TransformResponseBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformResponseBodyHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.g3q($this$intercept, it, $completion);
    }, 2);
  }
  function TransformResponseBodyHook() {
  }
  protoOf(TransformResponseBodyHook).q4k = function (client, handler) {
    var tmp = Phases_getInstance_1().s3r_1;
    client.o3o_1.p2s(tmp, TransformResponseBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformResponseBodyHook).z3x = function (client, handler) {
    return this.q4k(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
  };
  var TransformResponseBodyHook_instance;
  function TransformResponseBodyHook_getInstance() {
    return TransformResponseBodyHook_instance;
  }
  function SSECapability() {
  }
  protoOf(SSECapability).toString = function () {
    return 'SSECapability';
  };
  protoOf(SSECapability).hashCode = function () {
    return -177755299;
  };
  protoOf(SSECapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SSECapability))
      return false;
    return true;
  };
  var SSECapability_instance;
  function SSECapability_getInstance() {
    return SSECapability_instance;
  }
  function SSEClientContent() {
  }
  function DefaultClientWebSocketSession(call, delegate) {
    this.r4k_1 = delegate;
    this.s4k_1 = call;
  }
  protoOf(DefaultClientWebSocketSession).d3g = function (frame, $completion) {
    return this.r4k_1.d3g(frame, $completion);
  };
  protoOf(DefaultClientWebSocketSession).h2b = function ($completion) {
    return this.r4k_1.h2b($completion);
  };
  protoOf(DefaultClientWebSocketSession).z3f = function (_set____db54di) {
    this.r4k_1.z3f(_set____db54di);
  };
  protoOf(DefaultClientWebSocketSession).a3g = function () {
    return this.r4k_1.a3g();
  };
  protoOf(DefaultClientWebSocketSession).b3g = function () {
    return this.r4k_1.b3g();
  };
  protoOf(DefaultClientWebSocketSession).c3g = function () {
    return this.r4k_1.c3g();
  };
  protoOf(DefaultClientWebSocketSession).m1o = function () {
    return this.r4k_1.m1o();
  };
  protoOf(DefaultClientWebSocketSession).y3f = function (negotiatedExtensions) {
    this.r4k_1.y3f(negotiatedExtensions);
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.t4k_1 = session;
    this.u4k_1 = call;
  }
  protoOf(DelegatingClientWebSocketSession).d3g = function (frame, $completion) {
    return this.t4k_1.d3g(frame, $completion);
  };
  protoOf(DelegatingClientWebSocketSession).h2b = function ($completion) {
    return this.t4k_1.h2b($completion);
  };
  protoOf(DelegatingClientWebSocketSession).z3f = function (_set____db54di) {
    this.t4k_1.z3f(_set____db54di);
  };
  protoOf(DelegatingClientWebSocketSession).a3g = function () {
    return this.t4k_1.a3g();
  };
  protoOf(DelegatingClientWebSocketSession).b3g = function () {
    return this.t4k_1.b3g();
  };
  protoOf(DelegatingClientWebSocketSession).c3g = function () {
    return this.t4k_1.c3g();
  };
  protoOf(DelegatingClientWebSocketSession).m1o = function () {
    return this.t4k_1.m1o();
  };
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var tmp = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var nonce = generateNonce(16);
    this_0.q(Default_getInstance_0().rg(nonce));
    tmp.x4k_1 = this_0.toString();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new HeadersBuilder();
    this_1.e2p('Upgrade', 'websocket');
    this_1.e2p('Connection', 'Upgrade');
    this_1.e2p('Sec-WebSocket-Key', this.x4k_1);
    this_1.e2p('Sec-WebSocket-Version', '13');
    tmp_0.y4k_1 = this_1.i2x();
  }
  protoOf(WebSocketContent).p31 = function () {
    return this.y4k_1;
  };
  protoOf(WebSocketContent).toString = function () {
    return 'WebSocketContent';
  };
  function get_REQUEST_EXTENSIONS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return REQUEST_EXTENSIONS_KEY;
  }
  var REQUEST_EXTENSIONS_KEY;
  function get_WEBSOCKETS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return WEBSOCKETS_KEY;
  }
  var WEBSOCKETS_KEY;
  function get_LOGGER_8() {
    _init_properties_WebSockets_kt__jaqpbo();
    return LOGGER_7;
  }
  var LOGGER_7;
  function WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation) {
    this.h4l_1 = $extensionsSupported;
    this.i4l_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda).l3p = function ($this$intercept, it, $completion) {
    var tmp = this.m3p($this$intercept, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(WebSockets$Plugin$install$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3p(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            if (!isWebsocket(this.j4l_1.l2s_1.s3q_1.f35())) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.j2t('Skipping WebSocket plugin for non-websocket request: ' + this.j4l_1.l2s_1.s3q_1.toString());
              }
              return Unit_instance;
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.j2t('Sending WebSocket request ' + this.j4l_1.l2s_1.s3q_1.toString());
            }

            this.j4l_1.l2s_1.e4g(WebSocketCapability_instance, Unit_instance);
            if (this.h4l_1) {
              installExtensions(this.i4l_1, this.j4l_1.l2s_1);
            }

            this.j4l_1.l2s_1.x3q_1.u2m(get_WEBSOCKETS_KEY(), this.i4l_1);
            this.o8_1 = 1;
            suspendResult = this.j4l_1.p2r(new WebSocketContent(), this);
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
  protoOf(WebSockets$Plugin$install$slambda).m3p = function ($this$intercept, it, completion) {
    var i = new WebSockets$Plugin$install$slambda(this.h4l_1, this.i4l_1, completion);
    i.j4l_1 = $this$intercept;
    i.k4l_1 = it;
    return i;
  };
  function WebSockets$Plugin$install$slambda_0($extensionsSupported, $plugin, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.l3p($this$intercept, it, $completion);
    }, 2);
  }
  function WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation) {
    this.t4l_1 = $plugin;
    this.u4l_1 = $extensionsSupported;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda_1).g3q = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.h3q($this$intercept, _destruct__k2r9zo, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(WebSockets$Plugin$install$slambda_1).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var info = this.w4l_1.ue();
            var session = this.w4l_1.ve();
            var response = this.v4l_1.l2s_1.s3p();
            var status = response.r3s();
            var requestContent = get_request(response).a1b();
            if (!(requestContent instanceof WebSocketContent)) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.j2t('Skipping non-websocket response from ' + this.v4l_1.l2s_1.b3s().k3s().toString() + ': ' + toString(requestContent));
              }
              return Unit_instance;
            }

            if (!status.equals(Companion_getInstance_1().l32_1)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected status code ' + Companion_getInstance_1().l32_1.n34_1 + ' but was ' + status.n34_1);
            }

            if (!isInterface(session, WebSocketSession)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected `WebSocketSession` content but was ' + toString(getKClassFromExpression(session)));
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.j2t('Receive websocket session from ' + this.v4l_1.l2s_1.b3s().k3s().toString() + ': ' + toString(session));
            }

            if (!(this.t4l_1.y4l_1 === 2147483647n)) {
              session.z3f(this.t4l_1.y4l_1);
            }

            var tmp_0;
            if (info.c2t_1.equals(getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.t4l_1.c4m(session);
              var clientSession = new DefaultClientWebSocketSession(this.v4l_1.l2s_1, defaultSession);
              var tmp_1;
              if (this.u4l_1) {
                tmp_1 = completeNegotiation(this.t4l_1, this.v4l_1.l2s_1);
              } else {
                tmp_1 = emptyList();
              }
              var negotiated = tmp_1;
              clientSession.y3f(negotiated);
              tmp_0 = clientSession;
            } else {
              tmp_0 = new DelegatingClientWebSocketSession(this.v4l_1.l2s_1, session);
            }

            var clientSession_0 = tmp_0;
            this.o8_1 = 1;
            suspendResult = this.v4l_1.p2r(new HttpResponseContainer(info, clientSession_0), this);
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
  protoOf(WebSockets$Plugin$install$slambda_1).h3q = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new WebSockets$Plugin$install$slambda_1(this.t4l_1, this.u4l_1, completion);
    i.v4l_1 = $this$intercept;
    i.w4l_1 = _destruct__k2r9zo;
    return i;
  };
  function WebSockets$Plugin$install$slambda_2($plugin, $extensionsSupported, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.g3q($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  function installExtensions($this, context) {
    var installed = $this.z4l_1.i2x();
    context.x3q_1.t2m(get_REQUEST_EXTENSIONS_KEY(), installed);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = installed.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var list = element.r3n();
      addAll(destination, list);
    }
    var protocols = destination;
    addNegotiatedProtocols($this, context, protocols);
  }
  function completeNegotiation($this, call) {
    var tmp0_safe_receiver = call.s3p().p31().y1a('Sec-WebSocket-Extensions');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = parseWebSocketExtensions(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var serverExtensions = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var clientExtensions = call.c3s().q2m(get_REQUEST_EXTENSIONS_KEY());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = clientExtensions.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (element.s3n(serverExtensions)) {
        destination.c1(element);
      }
    }
    return destination;
  }
  function addNegotiatedProtocols($this, context, protocols) {
    if (protocols.r())
      return Unit_instance;
    var headerValue = joinToString(protocols, ',');
    header(context, 'Sec-WebSocket-Extensions', headerValue);
  }
  function Config_0() {
    this.d4m_1 = new WebSocketExtensionsConfig();
    this.e4m_1 = new WebSocketChannelsConfig();
    this.f4m_1 = 0n;
    this.g4m_1 = 2147483647n;
    this.h4m_1 = null;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'Websocket';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(WebSockets);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(WebSockets), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.i4m_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin_0).m1 = function () {
    return this.i4m_1;
  };
  protoOf(Plugin_0).j4m = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_0();
    block(this_0);
    var config = this_0;
    return new WebSockets(config.f4m_1, config.g4m_1, config.d4m_1, config.h4m_1, config.e4m_1);
  };
  protoOf(Plugin_0).x3r = function (block) {
    return this.j4m(block);
  };
  protoOf(Plugin_0).k4m = function (plugin, scope) {
    var extensionsSupported = scope.h3o_1.y3v().h2(WebSocketExtensionsCapability_instance);
    var tmp = Phases_getInstance().x3x_1;
    scope.n3o_1.p2s(tmp, WebSockets$Plugin$install$slambda_0(extensionsSupported, plugin, null));
    var tmp_0 = Phases_getInstance_1().s3r_1;
    scope.o3o_1.p2s(tmp_0, WebSockets$Plugin$install$slambda_2(plugin, extensionsSupported, null));
  };
  protoOf(Plugin_0).y3r = function (plugin, scope) {
    return this.k4m(plugin instanceof WebSockets ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function WebSockets(pingIntervalMillis, maxFrameSize, extensionsConfig, contentConverter, channelsConfig) {
    Plugin_getInstance_0();
    contentConverter = contentConverter === VOID ? null : contentConverter;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_4().e3g_1 : channelsConfig;
    this.x4l_1 = pingIntervalMillis;
    this.y4l_1 = maxFrameSize;
    this.z4l_1 = extensionsConfig;
    this.a4m_1 = contentConverter;
    this.b4m_1 = channelsConfig;
  }
  protoOf(WebSockets).c4m = function (session) {
    if (isInterface(session, DefaultWebSocketSession))
      return session;
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.x4l_1;
    var timeoutMillis = multiply(this_0, fromInt(2));
    // Inline function 'kotlin.also' call
    var this_1 = DefaultWebSocketSession_0(session, this.x4l_1, timeoutMillis, this.b4m_1);
    this_1.z3f(this.y4l_1);
    return this_1;
  };
  function WebSocketExtensionsCapability() {
  }
  protoOf(WebSocketExtensionsCapability).toString = function () {
    return 'WebSocketExtensionsCapability';
  };
  protoOf(WebSocketExtensionsCapability).hashCode = function () {
    return 806573237;
  };
  protoOf(WebSocketExtensionsCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketExtensionsCapability))
      return false;
    return true;
  };
  var WebSocketExtensionsCapability_instance;
  function WebSocketExtensionsCapability_getInstance() {
    return WebSocketExtensionsCapability_instance;
  }
  function WebSocketCapability() {
  }
  protoOf(WebSocketCapability).toString = function () {
    return 'WebSocketCapability';
  };
  protoOf(WebSocketCapability).hashCode = function () {
    return -1146563391;
  };
  protoOf(WebSocketCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketCapability))
      return false;
    return true;
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    return WebSocketCapability_instance;
  }
  function WebSocketException_init_$Init$(message, $this) {
    WebSocketException.call($this, message, null);
    return $this;
  }
  function WebSocketException_init_$Create$(message) {
    var tmp = WebSocketException_init_$Init$(message, objectCreate(protoOf(WebSocketException)));
    captureStack(tmp, WebSocketException_init_$Create$);
    return tmp;
  }
  function WebSocketException(message, cause) {
    IllegalStateException_init_$Init$_1(message, cause, this);
    captureStack(this, WebSocketException);
  }
  var properties_initialized_WebSockets_kt_2t2hw2;
  function _init_properties_WebSockets_kt__jaqpbo() {
    if (!properties_initialized_WebSockets_kt_2t2hw2) {
      properties_initialized_WebSockets_kt_2t2hw2 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'Websocket extensions';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtList);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(WebSocketExtension), arrayOf([getStarKTypeProjection()]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      REQUEST_EXTENSIONS_KEY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'Websocket plugin config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(WebSockets);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(WebSockets), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
      WEBSOCKETS_KEY = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER_7 = KtorSimpleLogger('io.ktor.client.plugins.websocket.WebSockets');
    }
  }
  function ClientUpgradeContent$content$delegate$lambda() {
    return new ByteChannel();
  }
  function ClientUpgradeContent() {
    NoContent.call(this);
    var tmp = this;
    tmp.m4m_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  function DefaultHttpRequest(call, data) {
    this.n4m_1 = call;
    this.o4m_1 = data.s3v_1;
    this.p4m_1 = data.r3v_1;
    this.q4m_1 = data.u3v_1;
    this.r4m_1 = data.t3v_1;
    this.s4m_1 = data.w3v_1;
  }
  protoOf(DefaultHttpRequest).i3s = function () {
    return this.n4m_1;
  };
  protoOf(DefaultHttpRequest).m1o = function () {
    return this.i3s().m1o();
  };
  protoOf(DefaultHttpRequest).j3s = function () {
    return this.o4m_1;
  };
  protoOf(DefaultHttpRequest).k3s = function () {
    return this.p4m_1;
  };
  protoOf(DefaultHttpRequest).a1b = function () {
    return this.q4m_1;
  };
  protoOf(DefaultHttpRequest).p31 = function () {
    return this.r4m_1;
  };
  protoOf(DefaultHttpRequest).c3s = function () {
    return this.s4m_1;
  };
  function get_ResponseAdapterAttributeKey() {
    _init_properties_HttpRequest_kt__813lx1();
    return ResponseAdapterAttributeKey;
  }
  var ResponseAdapterAttributeKey;
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_11() {
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function HttpRequestBuilder() {
    this.s3q_1 = new URLBuilder();
    this.t3q_1 = Companion_getInstance_2().q31_1;
    this.u3q_1 = new HeadersBuilder();
    this.v3q_1 = EmptyContent_getInstance();
    this.w3q_1 = SupervisorJob();
    this.x3q_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).p31 = function () {
    return this.u3q_1;
  };
  protoOf(HttpRequestBuilder).n3w = function (value) {
    if (!(value == null)) {
      this.x3q_1.t2m(get_BodyTypeAttributeKey(), value);
    } else {
      this.x3q_1.v2m(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).t4m = function () {
    return this.x3q_1.r2m(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).i2x = function () {
    var tmp = this.s3q_1.i2x();
    var tmp_0 = this.t3q_1;
    var tmp_1 = this.u3q_1.i2x();
    var tmp_2 = this.v3q_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'No request transformation found: ' + toString(this.v3q_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.w3q_1, this.x3q_1);
  };
  protoOf(HttpRequestBuilder).m3w = function (builder) {
    this.w3q_1 = builder.w3q_1;
    return this.d4d(builder);
  };
  protoOf(HttpRequestBuilder).d4d = function (builder) {
    this.t3q_1 = builder.t3q_1;
    this.v3q_1 = builder.v3q_1;
    this.n3w(builder.t4m());
    takeFrom_0(this.s3q_1, builder.s3q_1);
    this.s3q_1.a35_1 = this.s3q_1.a35_1;
    appendAll(this.u3q_1, builder.u3q_1);
    putAll(this.x3q_1, builder.x3q_1);
    return this;
  };
  protoOf(HttpRequestBuilder).e4g = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.x3q_1.w2m(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.q2(key, capability);
  };
  protoOf(HttpRequestBuilder).q4g = function (key) {
    var tmp0_safe_receiver = this.x3q_1.r2m(get_ENGINE_CAPABILITIES_KEY());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2(key);
  };
  function url(_this__u8e3s4, scheme, host, port, path, block) {
    scheme = scheme === VOID ? null : scheme;
    host = host === VOID ? null : host;
    port = port === VOID ? null : port;
    path = path === VOID ? null : path;
    var tmp;
    if (block === VOID) {
      tmp = url$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    _init_properties_HttpRequest_kt__813lx1();
    set(_this__u8e3s4.s3q_1, scheme, host, port, path, block);
  }
  function headers(_this__u8e3s4, block) {
    _init_properties_HttpRequest_kt__813lx1();
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4.p31();
    block(this_0);
    return this_0;
  }
  function HttpRequest_0() {
  }
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.r3v_1 = url;
    this.s3v_1 = method;
    this.t3v_1 = headers;
    this.u3v_1 = body;
    this.v3v_1 = executionContext;
    this.w3v_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.w3v_1.r2m(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2();
    tmp.x3v_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.r3v_1.toString() + ', method=' + this.s3v_1.toString() + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.w3s_1 = statusCode;
    this.x3s_1 = requestTime;
    this.y3s_1 = headers;
    this.z3s_1 = version;
    this.a3t_1 = body;
    this.b3t_1 = callContext;
    this.c3t_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.w3s_1.toString() + ')';
  };
  function ResponseAdapter() {
  }
  function isUpgradeRequest(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    var tmp = _this__u8e3s4.u3v_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function url$lambda(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    return Unit_instance;
  }
  var properties_initialized_HttpRequest_kt_zh09pz;
  function _init_properties_HttpRequest_kt__813lx1() {
    if (!properties_initialized_HttpRequest_kt_zh09pz) {
      properties_initialized_HttpRequest_kt_zh09pz = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ResponseAdapterAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ResponseAdapter);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ResponseAdapter), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      ResponseAdapterAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function Phases() {
    Phases_instance = this;
    this.u3x_1 = new PipelinePhase('Before');
    this.v3x_1 = new PipelinePhase('State');
    this.w3x_1 = new PipelinePhase('Transform');
    this.x3x_1 = new PipelinePhase('Render');
    this.y3x_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance().u3x_1, Phases_getInstance().v3x_1, Phases_getInstance().w3x_1, Phases_getInstance().x3x_1, Phases_getInstance().y3x_1]);
    this.c4n_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).j2s = function () {
    return this.c4n_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.a3r_1 = new PipelinePhase('Before');
    this.b3r_1 = new PipelinePhase('State');
    this.c3r_1 = new PipelinePhase('Monitoring');
    this.d3r_1 = new PipelinePhase('Engine');
    this.e3r_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_0().a3r_1, Phases_getInstance_0().b3r_1, Phases_getInstance_0().c3r_1, Phases_getInstance_0().d3r_1, Phases_getInstance_0().e3r_1]);
    this.k4n_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).j2s = function () {
    return this.k4n_1;
  };
  function get_BodyTypeAttributeKey() {
    _init_properties_RequestBody_kt__bo3lwf();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function _init_properties_RequestBody_kt__bo3lwf() {
    if (!properties_initialized_RequestBody_kt_agyv1b) {
      properties_initialized_RequestBody_kt_agyv1b = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'BodyTypeAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(TypeInfo);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(TypeInfo), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      BodyTypeAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_RN_BYTES() {
    _init_properties_FormDataContent_kt__7tvkbr();
    return RN_BYTES;
  }
  var RN_BYTES;
  function FormDataContent(formData) {
    ByteArrayContent.call(this);
    this.m4n_1 = formData;
    this.n4n_1 = toByteArray_0(formUrlEncode(this.m4n_1));
    this.o4n_1 = fromInt(this.n4n_1.length);
    this.p4n_1 = withCharset(Application_getInstance().c2v_1, Charsets_getInstance().o2l_1);
  }
  protoOf(FormDataContent).d37 = function () {
    return this.o4n_1;
  };
  protoOf(FormDataContent).c37 = function () {
    return this.p4n_1;
  };
  protoOf(FormDataContent).e37 = function () {
    return this.n4n_1;
  };
  function MultiPartFormDataContent$rawParts$lambda($bytes) {
    return function () {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      var builder = new Buffer();
      writeFully(builder, $bytes);
      return builder;
    };
  }
  function $writeToCOROUTINE$(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y4n_1 = _this__u8e3s4;
    this.z4n_1 = channel;
  }
  protoOf($writeToCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 25;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 21;
            this.p8_1 = 20;
            this.g4o_1 = this.y4n_1.p4o_1.t();
            this.o8_1 = 2;
            continue $sm;
          case 2:
            if (!this.g4o_1.u()) {
              this.o8_1 = 18;
              continue $sm;
            }

            this.f4o_1 = this.g4o_1.v();
            this.o8_1 = 3;
            suspendResult = writeFully_0(this.z4n_1, this.y4n_1.l4o_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.o8_1 = 4;
            suspendResult = writeFully_0(this.z4n_1, this.f4o_1.r4o_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.o8_1 = 5;
            suspendResult = writeFully_0(this.z4n_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp0_subject = this.f4o_1;
            if (tmp0_subject instanceof InputPart) {
              this.e4o_1 = this.f4o_1.y4o_1();
              this.o8_1 = 7;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ChannelPart) {
                this.o8_1 = 6;
                suspendResult = copyTo_0(this.f4o_1.v4o_1(), this.z4n_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_0 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 6:
            this.b4o_1 = suspendResult;
            this.o8_1 = 16;
            continue $sm;
          case 7:
            this.d4o_1 = this.e4o_1;
            this.c4o_1 = null;
            this.o8_1 = 8;
            continue $sm;
          case 8:
            this.o8_1 = 9;
            continue $sm;
          case 9:
            this.p8_1 = 13;
            this.p8_1 = 12;
            var input = this.d4o_1;
            this.o8_1 = 10;
            suspendResult = copyTo_1(input, this.z4n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.o8_1 = 11;
            var tmp_1 = this;
            continue $sm;
          case 11:
            this.p8_1 = 20;
            closeFinally(this.d4o_1, this.c4o_1);
            this.o8_1 = 15;
            continue $sm;
          case 12:
            this.p8_1 = 13;
            var tmp_2 = this.r8_1;
            if (tmp_2 instanceof Error) {
              var e = this.r8_1;
              var tmp_3 = this;
              this.c4o_1 = e;
              throw e;
            } else {
              throw this.r8_1;
            }

          case 13:
            this.p8_1 = 20;
            var t = this.r8_1;
            closeFinally(this.d4o_1, this.c4o_1);
            throw t;
          case 14:
            this.p8_1 = 20;
            closeFinally(this.d4o_1, this.c4o_1);
            if (false) {
              this.o8_1 = 7;
              continue $sm;
            }

            this.o8_1 = 15;
            continue $sm;
          case 15:
            this.b4o_1 = Unit_instance;
            this.o8_1 = 16;
            continue $sm;
          case 16:
            this.o8_1 = 17;
            suspendResult = writeFully_0(this.z4n_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            this.o8_1 = 2;
            continue $sm;
          case 18:
            this.o8_1 = 19;
            suspendResult = writeFully_0(this.z4n_1, this.y4n_1.m4o_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 19:
            this.p8_1 = 25;
            this.o8_1 = 23;
            continue $sm;
          case 20:
            this.p8_1 = 21;
            var tmp_4 = this.r8_1;
            if (tmp_4 instanceof Error) {
              var cause = this.r8_1;
              close(this.z4n_1, cause);
              this.p8_1 = 25;
              this.o8_1 = 23;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 21:
            this.p8_1 = 25;
            this.a4o_1 = this.r8_1;
            this.o8_1 = 22;
            suspendResult = this.z4n_1.q2b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 22:
            throw this.a4o_1;
          case 23:
            this.p8_1 = 25;
            this.o8_1 = 24;
            suspendResult = this.z4n_1.q2b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 24:
            return Unit_instance;
          case 25:
            throw this.r8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.p8_1 === 25) {
          throw e_0;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e_0;
        }
      }
     while (true);
  };
  function MultiPartFormDataContent(parts, boundary, contentType) {
    boundary = boundary === VOID ? generateBoundary() : boundary;
    contentType = contentType === VOID ? MultiPart_getInstance().f2w_1.e2x('boundary', boundary) : contentType;
    WriteChannelContent.call(this);
    this.i4o_1 = parts;
    this.j4o_1 = boundary;
    this.k4o_1 = contentType;
    this.l4o_1 = toByteArray_0('--' + this.j4o_1 + '\r\n');
    this.m4o_1 = toByteArray_0('--' + this.j4o_1 + '--\r\n');
    this.n4o_1 = this.m4o_1.length;
    this.o4o_1 = imul(get_RN_BYTES().length, 2) + this.l4o_1.length | 0;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.i4o_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var headersBuilder = BytePacketBuilder();
      var _iterator__ex2g4s_0 = item.x38_1.u2o().t();
      while (_iterator__ex2g4s_0.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.m1();
        // Inline function 'kotlin.collections.component2' call
        var values = _destruct__k2r9zo.n1();
        writeText(headersBuilder, key + ': ' + joinToString(values, '; '));
        writeFully(headersBuilder, get_RN_BYTES());
      }
      var tmp0_safe_receiver = item.x38_1.y1a('Content-Length');
      var bodySize = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
      var tmp_0;
      if (item instanceof FileItem) {
        var headers = readByteArray(build(headersBuilder));
        var tmp_1;
        if (bodySize == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other = this.o4o_1;
          tmp_1 = add(bodySize, fromInt(other));
        }
        var tmp3_safe_receiver = tmp_1;
        var tmp_2;
        if (tmp3_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other_0 = headers.length;
          tmp_2 = add(tmp3_safe_receiver, fromInt(other_0));
        }
        var size = tmp_2;
        tmp_0 = new ChannelPart(headers, item.e4p_1, size);
      } else {
        if (item instanceof BinaryItem) {
          var headers_0 = readByteArray(build(headersBuilder));
          var tmp_3;
          if (bodySize == null) {
            tmp_3 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_1 = this.o4o_1;
            tmp_3 = add(bodySize, fromInt(other_1));
          }
          var tmp5_safe_receiver = tmp_3;
          var tmp_4;
          if (tmp5_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_2 = headers_0.length;
            tmp_4 = add(tmp5_safe_receiver, fromInt(other_2));
          }
          var size_0 = tmp_4;
          tmp_0 = new InputPart(headers_0, item.p38_1, size_0);
        } else {
          if (item instanceof FormItem) {
            // Inline function 'io.ktor.utils.io.core.buildPacket' call
            var builder = new Buffer();
            writeText(builder, item.j38_1);
            var bytes = readByteArray(builder);
            var provider = MultiPartFormDataContent$rawParts$lambda(bytes);
            if (bodySize == null) {
              writeText(headersBuilder, 'Content-Length: ' + bytes.length);
              writeFully(headersBuilder, get_RN_BYTES());
            }
            var headers_1 = readByteArray(build(headersBuilder));
            var size_1 = (bytes.length + this.o4o_1 | 0) + headers_1.length | 0;
            tmp_0 = new InputPart(headers_1, provider, fromInt(size_1));
          } else {
            if (item instanceof BinaryChannelItem) {
              var headers_2 = readByteArray(build(headersBuilder));
              var tmp_5;
              if (bodySize == null) {
                tmp_5 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_3 = this.o4o_1;
                tmp_5 = add(bodySize, fromInt(other_3));
              }
              var tmp7_safe_receiver = tmp_5;
              var tmp_6;
              if (tmp7_safe_receiver == null) {
                tmp_6 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_4 = headers_2.length;
                tmp_6 = add(tmp7_safe_receiver, fromInt(other_4));
              }
              var size_2 = tmp_6;
              tmp_0 = new ChannelPart(headers_2, item.v38_1, size_2);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      var tmp$ret$2 = tmp_0;
      destination.c1(tmp$ret$2);
    }
    tmp.p4o_1 = destination;
    this.q4o_1 = null;
    var rawLength = 0n;
    var _iterator__ex2g4s_1 = this.p4o_1.t();
    $l$loop: while (_iterator__ex2g4s_1.u()) {
      var part = _iterator__ex2g4s_1.v();
      var size_3 = part.s4o_1;
      if (size_3 == null) {
        rawLength = null;
        break $l$loop;
      }
      var tmp0_safe_receiver_0 = rawLength;
      rawLength = tmp0_safe_receiver_0 == null ? null : add(tmp0_safe_receiver_0, size_3);
    }
    if (!(rawLength == null)) {
      var tmp0 = rawLength;
      // Inline function 'kotlin.Long.plus' call
      var other_5 = this.n4o_1;
      rawLength = add(tmp0, fromInt(other_5));
    }
    this.q4o_1 = rawLength;
  }
  protoOf(MultiPartFormDataContent).c37 = function () {
    return this.k4o_1;
  };
  protoOf(MultiPartFormDataContent).d37 = function () {
    return this.q4o_1;
  };
  protoOf(MultiPartFormDataContent).e39 = function (channel, $completion) {
    var tmp = new $writeToCOROUTINE$(this, channel, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  function generateBoundary() {
    _init_properties_FormDataContent_kt__7tvkbr();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.q(toString_1(Default_getInstance().we(), 16));
      }
       while (inductionVariable < 32);
    var tmp$ret$0 = this_0.toString();
    return take(tmp$ret$0, 70);
  }
  function InputPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.y4o_1 = provider;
  }
  function ChannelPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.v4o_1 = provider;
  }
  function PreparedPart(headers, size) {
    this.r4o_1 = headers;
    this.s4o_1 = size;
  }
  function copyTo_1(_this__u8e3s4, channel, $completion) {
    return writePacket(channel, _this__u8e3s4, $completion);
  }
  var properties_initialized_FormDataContent_kt_w3e0rf;
  function _init_properties_FormDataContent_kt__7tvkbr() {
    if (!properties_initialized_FormDataContent_kt_w3e0rf) {
      properties_initialized_FormDataContent_kt_w3e0rf = true;
      RN_BYTES = toByteArray_0('\r\n');
    }
  }
  function FormBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f4p_1 = ArrayList_init_$Create$();
  }
  protoOf(FormBuilder).g4p = function (key, value, headers) {
    var tmp0 = this.f4p_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.c1(element);
  };
  protoOf(FormBuilder).h4p = function (key, value, headers, $super) {
    headers = headers === VOID ? Companion_getInstance_5().k31_1 : headers;
    var tmp;
    if ($super === VOID) {
      this.g4p(key, value, headers);
      tmp = Unit_instance;
    } else {
      tmp = $super.g4p.call(this, key, value, headers);
    }
    return tmp;
  };
  protoOf(FormBuilder).i4p = function (key, value, headers) {
    var tmp0 = this.f4p_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.c1(element);
  };
  protoOf(FormBuilder).j4p = function () {
    return this.f4p_1;
  };
  function formData(values) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var element = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = element.ue();
      var value = element.ve();
      var headers = element.n4p();
      // Inline function 'kotlin.apply' call
      var this_0 = new HeadersBuilder();
      this_0.e2p('Content-Disposition', 'form-data; name=' + quoteForMultipart(key));
      this_0.f2p(headers);
      var partHeaders = this_0;
      var tmp;
      if (typeof value === 'string') {
        tmp = new FormItem(value, formData$lambda, partHeaders.i2x());
      } else {
        if (isNumber(value)) {
          var tmp_0 = toString(value);
          tmp = new FormItem(tmp_0, formData$lambda_0, partHeaders.i2x());
        } else {
          if (typeof value === 'boolean') {
            var tmp_1 = value.toString();
            tmp = new FormItem(tmp_1, formData$lambda_1, partHeaders.i2x());
          } else {
            if (isByteArray(value)) {
              partHeaders.e2p('Content-Length', value.length.toString());
              var tmp_2 = formData$lambda_2(value);
              tmp = new BinaryItem(tmp_2, formData$lambda_3, partHeaders.i2x());
            } else {
              if (isInterface(value, Source)) {
                if (value instanceof Buffer) {
                  partHeaders.e2p('Content-Length', get_remaining(value).toString());
                }
                var tmp_3 = formData$lambda_4(value);
                tmp = new BinaryItem(tmp_3, formData$lambda_5(value), partHeaders.i2x());
              } else {
                if (value instanceof InputProvider) {
                  var size = value.q4p_1;
                  if (!(size == null)) {
                    partHeaders.e2p('Content-Length', size.toString());
                  }
                  tmp = new BinaryItem(value.r4p_1, formData$lambda_6, partHeaders.i2x());
                } else {
                  if (value instanceof ChannelProvider) {
                    var size_0 = value.o4p_1;
                    if (!(size_0 == null)) {
                      partHeaders.e2p('Content-Length', size_0.toString());
                    }
                    tmp = new BinaryChannelItem(value.p4p_1, partHeaders.i2x());
                  } else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unknown form content type: ' + toString(value);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
      var part = tmp;
      // Inline function 'kotlin.collections.plusAssign' call
      result.c1(part);
    }
    return result;
  }
  function FormPart(key, value, headers) {
    headers = headers === VOID ? Companion_getInstance_5().k31_1 : headers;
    this.k4p_1 = key;
    this.l4p_1 = value;
    this.m4p_1 = headers;
  }
  protoOf(FormPart).ue = function () {
    return this.k4p_1;
  };
  protoOf(FormPart).ve = function () {
    return this.l4p_1;
  };
  protoOf(FormPart).n4p = function () {
    return this.m4p_1;
  };
  protoOf(FormPart).toString = function () {
    return 'FormPart(key=' + this.k4p_1 + ', value=' + toString(this.l4p_1) + ', headers=' + toString(this.m4p_1) + ')';
  };
  protoOf(FormPart).hashCode = function () {
    var result = getStringHashCode(this.k4p_1);
    result = imul(result, 31) + hashCode(this.l4p_1) | 0;
    result = imul(result, 31) + hashCode(this.m4p_1) | 0;
    return result;
  };
  protoOf(FormPart).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FormPart))
      return false;
    if (!(this.k4p_1 === other.k4p_1))
      return false;
    if (!equals(this.l4p_1, other.l4p_1))
      return false;
    if (!equals(this.m4p_1, other.m4p_1))
      return false;
    return true;
  };
  function InputProvider() {
  }
  function ChannelProvider() {
  }
  function quoteForMultipart(_this__u8e3s4) {
    return isQuoted(_this__u8e3s4) ? _this__u8e3s4 : quote(_this__u8e3s4);
  }
  function formData$lambda() {
    return Unit_instance;
  }
  function formData$lambda_0() {
    return Unit_instance;
  }
  function formData$lambda_1() {
    return Unit_instance;
  }
  function formData$lambda_2($value) {
    return function () {
      return ByteReadPacket($value);
    };
  }
  function formData$lambda_3() {
    return Unit_instance;
  }
  function formData$lambda_4($value) {
    return function () {
      return $value.f1m();
    };
  }
  function formData$lambda_5($value) {
    return function () {
      $value.a4();
      return Unit_instance;
    };
  }
  function formData$lambda_6() {
    return Unit_instance;
  }
  function header(_this__u8e3s4, key, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      _this__u8e3s4.p31().e2p(key, toString(value));
      tmp = Unit_instance;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? Unit_instance : tmp1_elvis_lhs;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.s4p_1 = call;
    this.t4p_1 = responseData.b3t_1;
    this.u4p_1 = responseData.w3s_1;
    this.v4p_1 = responseData.z3s_1;
    this.w4p_1 = responseData.x3s_1;
    this.x4p_1 = responseData.c3t_1;
    var tmp = this;
    var tmp_0 = responseData.a3t_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.y4p_1 = tmp0_elvis_lhs == null ? Companion_getInstance().n2d_1 : tmp0_elvis_lhs;
    this.z4p_1 = responseData.y3s_1;
  }
  protoOf(DefaultHttpResponse).i3s = function () {
    return this.s4p_1;
  };
  protoOf(DefaultHttpResponse).m1o = function () {
    return this.t4p_1;
  };
  protoOf(DefaultHttpResponse).r3s = function () {
    return this.u4p_1;
  };
  protoOf(DefaultHttpResponse).s3s = function () {
    return this.v4p_1;
  };
  protoOf(DefaultHttpResponse).t3s = function () {
    return this.w4p_1;
  };
  protoOf(DefaultHttpResponse).u3s = function () {
    return this.x4p_1;
  };
  protoOf(DefaultHttpResponse).q3s = function () {
    return this.y4p_1;
  };
  protoOf(DefaultHttpResponse).p31 = function () {
    return this.z4p_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).k3s().toString() + ', ' + this.r3s().toString() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.i3s().b3s();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().o2l_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i4q_1 = _this__u8e3s4;
    this.j4q_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var tmp0_elvis_lhs = charset_0(this.i4q_1);
            var originCharset = tmp0_elvis_lhs == null ? this.j4q_1 : tmp0_elvis_lhs;
            this.k4q_1 = originCharset.s2l();
            var this_0 = this.i4q_1;
            this.o8_1 = 1;
            var tmp_0 = this_0.i3s();
            var tmp_1 = getKClass(Source);
            var tmp_2;
            try {
              tmp_2 = createKType(getKClass(Source), arrayOf([]), false);
            } catch ($p) {
              var tmp_3;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_3 = null;
              } else {
                throw $p;
              }
              tmp_2 = tmp_3;
            }

            suspendResult = tmp_0.f3s(new TypeInfo(tmp_1, tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = (!(suspendResult == null) ? isInterface(suspendResult, Source) : false) ? suspendResult : THROW_CCE();
            return decode(this.k4q_1, input);
          case 2:
            throw this.r8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.p8_1 === 2) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function Phases_1() {
    Phases_instance_1 = this;
    this.q3r_1 = new PipelinePhase('Receive');
    this.r3r_1 = new PipelinePhase('Parse');
    this.s3r_1 = new PipelinePhase('Transform');
    this.t3r_1 = new PipelinePhase('State');
    this.u3r_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_1().q3r_1, Phases_getInstance_1().r3r_1, Phases_getInstance_1().s3r_1, Phases_getInstance_1().t3r_1, Phases_getInstance_1().u3r_1]);
    this.s4q_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).j2s = function () {
    return this.s4q_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.o3y_1 = new PipelinePhase('Before');
    this.p3y_1 = new PipelinePhase('State');
    this.q3y_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_2().o3y_1, Phases_getInstance_2().p3y_1, Phases_getInstance_2().q3y_1]);
    this.a4r_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).j2s = function () {
    return this.a4r_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.o3t_1 = expectedType;
    this.p3t_1 = response;
  }
  protoOf(HttpResponseContainer).ue = function () {
    return this.o3t_1;
  };
  protoOf(HttpResponseContainer).ve = function () {
    return this.p3t_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.o3t_1.toString() + ', response=' + toString(this.p3t_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.o3t_1.hashCode();
    result = imul(result, 31) + hashCode(this.p3t_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    if (!this.o3t_1.equals(other.o3t_1))
      return false;
    if (!equals(this.p3t_1, other.p3t_1))
      return false;
    return true;
  };
  function $fetchResponseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j4r_1 = _this__u8e3s4;
  }
  protoOf($fetchResponseCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 7;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 6;
            var builder = (new HttpRequestBuilder()).m3w(this.j4r_1.n4r_1);
            this.o8_1 = 2;
            suspendResult = this.j4r_1.o4r_1.v3r(builder, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m4r_1 = suspendResult;
            this.o8_1 = 3;
            suspendResult = save(this.m4r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.l4r_1 = suspendResult.s3p();
            this.o8_1 = 4;
            suspendResult = this.j4r_1.p4r(this.m4r_1.s3p(), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            return this.l4r_1;
          case 5:
            return this.k4r_1;
          case 6:
            this.p8_1 = 7;
            var tmp_1 = this.r8_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.r8_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.r8_1;
            }

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
  function $cleanupCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, cause, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y4r_1 = _this__u8e3s4;
    this.z4r_1 = _this__u8e3s4_0;
    this.a4s_1 = cause;
  }
  protoOf($cleanupCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            var tmp_0 = get_job(this.z4r_1.m1o());
            var job = isInterface(tmp_0, CompletableJob) ? tmp_0 : THROW_CCE();
            this.b4s_1 = job;
            var $this$apply = this.b4s_1;
            var tmp0_subject = this.a4s_1;
            if (tmp0_subject == null)
              $this$apply.e1v();
            else {
              if (tmp0_subject instanceof CancellationException) {
                $this$apply.v1p(this.a4s_1);
              } else {
                $this$apply.v1p(CancellationException_init_$Create$('Exception occurred during request execution', this.a4s_1));
              }
            }

            if (!get_isSaved(this.z4r_1)) {
              try {
                cancel_1(this.z4r_1.q3s());
              } catch ($p) {
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                } else {
                  throw $p;
                }
              }
            }

            this.o8_1 = 1;
            suspendResult = $this$apply.s1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.r8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.p8_1 === 2) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function HttpStatement(builder, client) {
    this.n4r_1 = builder;
    this.o4r_1 = client;
  }
  protoOf(HttpStatement).c4s = function ($completion) {
    return this.d4s($completion);
  };
  protoOf(HttpStatement).d4s = function ($completion) {
    var tmp = new $fetchResponseCOROUTINE$(this, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpStatement).p4r = function (_this__u8e3s4, cause, $completion) {
    var tmp = new $cleanupCOROUTINE$(this, _this__u8e3s4, cause, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.n4r_1.s3q_1.toString() + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(_this__u8e3s4, listener, contentLength, null)).j2d_1;
  }
  function observable$slambda($this_observable, $listener, $contentLength, resultContinuation) {
    this.m4s_1 = $this_observable;
    this.n4s_1 = $listener;
    this.o4s_1 = $contentLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).e3e = function ($this$writer, $completion) {
    var tmp = this.f3e($this$writer, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(observable$slambda).k9 = function (p1, $completion) {
    return this.e3e(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 16;
            this.v4s_1 = get_ByteArrayPool();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.r4s_1 = this.v4s_1;
            this.q4s_1 = this.r4s_1.d2m();
            this.o8_1 = 2;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            continue $sm;
          case 3:
            this.p8_1 = 15;
            this.u4s_1 = this.q4s_1;
            this.s4s_1 = 0n;
            this.o8_1 = 4;
            continue $sm;
          case 4:
            if (!!this.m4s_1.n2b()) {
              this.o8_1 = 9;
              continue $sm;
            }

            this.o8_1 = 5;
            suspendResult = readAvailable(this.m4s_1, this.u4s_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.t4s_1 = suspendResult;
            if (this.t4s_1 <= 0) {
              this.o8_1 = 4;
              continue $sm;
            } else {
              this.o8_1 = 6;
              continue $sm;
            }

          case 6:
            this.o8_1 = 7;
            suspendResult = writeFully_0(this.p4s_1.k2j_1, this.u4s_1, 0, this.t4s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp_0 = this;
            var tmp0 = this.s4s_1;
            var other = this.t4s_1;
            tmp_0.s4s_1 = add(tmp0, fromInt(other));
            this.o8_1 = 8;
            suspendResult = this.n4s_1.s3u(this.s4s_1, this.o4s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.o8_1 = 4;
            continue $sm;
          case 9:
            var closedCause = this.m4s_1.m2b();
            close(this.p4s_1.k2j_1, closedCause);
            if (closedCause == null && this.s4s_1 === 0n) {
              this.o8_1 = 10;
              suspendResult = this.n4s_1.s3u(this.s4s_1, this.o4s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 11;
              continue $sm;
            }

          case 10:
            this.o8_1 = 11;
            continue $sm;
          case 11:
            this.p8_1 = 16;
            this.o8_1 = 12;
            var tmp_1 = this;
            continue $sm;
          case 12:
            this.p8_1 = 16;
            this.r4s_1.e2m(this.q4s_1);
            this.o8_1 = 14;
            continue $sm;
          case 13:
            this.p8_1 = 16;
            this.r4s_1.e2m(this.q4s_1);
            if (false) {
              this.o8_1 = 1;
              continue $sm;
            }

            this.o8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            this.p8_1 = 16;
            var t = this.r8_1;
            this.r4s_1.e2m(this.q4s_1);
            throw t;
          case 16:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 16) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).f3e = function ($this$writer, completion) {
    var i = new observable$slambda(this.m4s_1, this.n4s_1, this.o4s_1, completion);
    i.p4s_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($this_observable, $listener, $contentLength, resultContinuation) {
    var i = new observable$slambda($this_observable, $listener, $contentLength, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.e3e($this$writer, $completion);
    }, 1);
  }
  function get_HttpRequestCreated() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.w4s_1 = response;
    this.x4s_1 = cause;
  }
  var properties_initialized_ClientEvents_kt_rdee4m;
  function _init_properties_ClientEvents_kt__xuvbz8() {
    if (!properties_initialized_ClientEvents_kt_rdee4m) {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.z4s_1 = 0n;
  }
  protoOf(EmptyContent).d37 = function () {
    return this.z4s_1;
  };
  protoOf(EmptyContent).toString = function () {
    return 'EmptyContent';
  };
  protoOf(EmptyContent).hashCode = function () {
    return 1450860306;
  };
  protoOf(EmptyContent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmptyContent))
      return false;
    return true;
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function get_DecompressionListAttribute() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    return DecompressionListAttribute;
  }
  var DecompressionListAttribute;
  function dropCompressionHeaders(_this__u8e3s4, method, attributes, alwaysRemove) {
    alwaysRemove = alwaysRemove === VOID ? false : alwaysRemove;
    _init_properties_HeadersUtils_kt__fb6dxx();
    if (method.equals(Companion_getInstance_2().v31_1) || method.equals(Companion_getInstance_2().w31_1))
      return Unit_instance;
    var header = _this__u8e3s4.y1a('Content-Encoding');
    if (header == null) {
      if (!alwaysRemove)
        return Unit_instance;
    } else {
      var tmp = get_DecompressionListAttribute();
      attributes.w2m(tmp, dropCompressionHeaders$lambda).c1(header);
    }
    _this__u8e3s4.h2p('Content-Encoding');
    _this__u8e3s4.h2p('Content-Length');
  }
  function dropCompressionHeaders$lambda() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    // Inline function 'kotlin.collections.mutableListOf' call
    return ArrayList_init_$Create$();
  }
  var properties_initialized_HeadersUtils_kt_8c3zal;
  function _init_properties_HeadersUtils_kt__fb6dxx() {
    if (!properties_initialized_HeadersUtils_kt_8c3zal) {
      properties_initialized_HeadersUtils_kt_8c3zal = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'DecompressionListAttribute';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableList);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtMutableList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().vb(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      DecompressionListAttribute = new AttributeKey(name, tmp$ret$1);
    }
  }
  function buildHeaders(block) {
    var tmp;
    if (block === VOID) {
      tmp = buildHeaders$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HeadersBuilder();
    block(this_0);
    return this_0.i2x();
  }
  function buildHeaders$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'FetchOptions';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(FetchOptions);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(FetchOptions), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.a4t_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_4;
  function Companion_getInstance_12() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FetchOptions(requestInit) {
    Companion_getInstance_12();
    this.b4t_1 = requestInit;
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function Js() {
  }
  protoOf(Js).c4t = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new JsClientEngineConfig();
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).w3r = function (block) {
    return this.c4t(block);
  };
  protoOf(Js).toString = function () {
    return 'Js';
  };
  protoOf(Js).hashCode = function () {
    return -527824213;
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    return true;
  };
  var Js_instance;
  function Js_getInstance() {
    return Js_instance;
  }
  function JsClientEngineConfig$requestInit$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngineConfig() {
    HttpClientEngineConfig.call(this);
    var tmp = this;
    tmp.h4t_1 = JsClientEngineConfig$requestInit$lambda;
    this.i4t_1 = Object.create(null);
  }
  function initHook$init$() {
    engines_getInstance().k4t(Js_instance);
    return Unit_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers, $completion) {
    var tmp = new $createWebSocketCOROUTINE$($this, urlString_capturingHack, headers, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$($this, request, callContext, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function JsClientEngine$execute$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString(values, ',');
      return Unit_instance;
    };
  }
  function $executeCOROUTINE$_1(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x4u_1 = _this__u8e3s4;
    this.y4u_1 = data;
  }
  protoOf($executeCOROUTINE$_1).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            this.o8_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z4u_1 = suspendResult;
            this.b4v_1 = this.y4u_1.w3v_1.q2m(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.y4u_1)) {
              this.o8_1 = 5;
              suspendResult = executeWebSocketRequest(this.x4u_1, this.y4u_1, this.z4u_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 2;
              continue $sm;
            }

          case 2:
            this.a4v_1 = GMTDate();
            this.o8_1 = 3;
            suspendResult = ktor_toRaw(this.y4u_1, this.b4v_1, this.z4u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rawRequest = suspendResult;
            var tmp0_safe_receiver = this.y4u_1.w3v_1.r2m(Companion_getInstance_12().a4t_1);
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b4t_1;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              tmp_0 = JsClientEngine$execute$lambda;
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var fetchOptions = tmp_0;
            this.o8_1 = 4;
            suspendResult = commonFetch(this.y4u_1.r3v_1.toString(), rawRequest, fetchOptions, this.x4u_1.h4v_1, get_job(this.z4u_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers, this.y4u_1.s3v_1, this.y4u_1.w3v_1);
            var version = Companion_getInstance_6().d32_1;
            var body = readBody(CoroutineScope_0(this.z4u_1), rawResponse);
            var tmp2_safe_receiver = this.y4u_1.w3v_1.r2m(get_ResponseAdapterAttributeKey());
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.u4m(this.y4u_1, status, headers, body, this.y4u_1.u3v_1, this.z4u_1);
            var responseBody = tmp3_elvis_lhs == null ? body : tmp3_elvis_lhs;
            return new HttpResponseData(status, this.a4v_1, headers, version, responseBody, this.z4u_1);
          case 5:
            return suspendResult;
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
  function $createWebSocketCOROUTINE$(_this__u8e3s4, urlString_capturingHack, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t4t_1 = _this__u8e3s4;
    this.u4t_1 = urlString_capturingHack;
    this.v4t_1 = headers;
  }
  protoOf($createWebSocketCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp0 = this.v4t_1.b2p();
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (equals_0(element, 'Sec-WebSocket-Protocol', true)) {
                destination.c1(element);
              }
            }

            var protocolHeaderNames = destination;
            var tmp_0 = this;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_0 = protocolHeaderNames.t();
            while (_iterator__ex2g4s_0.u()) {
              var element_0 = _iterator__ex2g4s_0.v();
              var tmp0_safe_receiver = this.v4t_1.a2p(element_0);
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination_0.c1(tmp0_safe_receiver);
              }
            }

            var this_0 = flatten(destination_0);
            tmp_0.x4t_1 = copyToArray(this_0);
            if (PlatformUtils_getInstance().m2o_1) {
              this.w4t_1 = new WebSocket(this.u4t_1, this.x4t_1);
              this.o8_1 = 2;
              continue $sm;
            } else {
              var ws_import = import('ws');
              this.o8_1 = 1;
              suspendResult = await_0(ws_import, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ws_capturingHack = suspendResult.default;
            var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
            this.v4t_1.g2p(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
            this.w4t_1 = new ws_capturingHack(this.u4t_1, this.x4t_1, {headers: headers_capturingHack});
            this.o8_1 = 2;
            continue $sm;
          case 2:
            return this.w4t_1;
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
  function $executeWebSocketRequestCOROUTINE$(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g4u_1 = _this__u8e3s4;
    this.h4u_1 = request;
    this.i4u_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.k4u_1 = GMTDate();
            this.n4u_1 = this.h4u_1.r3v_1.toString();
            this.o4u_1 = this.h4u_1.w3v_1.q2m(get_WEBSOCKETS_KEY());
            this.o8_1 = 1;
            suspendResult = createWebSocket(this.g4u_1, this.n4u_1, this.h4u_1.t3v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l4u_1 = suspendResult;
            this.j4u_1 = new JsWebSocketSession(this.i4u_1, this.l4u_1, this.o4u_1.b4m_1);
            this.p8_1 = 3;
            this.o8_1 = 2;
            suspendResult = awaitConnection(this.l4u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m4u_1 = suspendResult;
            this.p8_1 = 5;
            this.o8_1 = 4;
            continue $sm;
          case 3:
            this.p8_1 = 5;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              var tmp_1 = this;
              cancel_3(this.i4u_1, CancellationException_0('Failed to connect to ' + this.n4u_1, cause));
              throw cause;
            } else {
              throw this.r8_1;
            }

          case 4:
            this.p8_1 = 5;
            var this_0 = this.l4u_1.protocol;
            var tmp_2;
            if (charSequenceLength(this_0) > 0) {
              tmp_2 = this_0;
            } else {
              tmp_2 = null;
            }

            var protocol = tmp_2;
            var headers = !(protocol == null) ? headersOf('Sec-WebSocket-Protocol', protocol) : Companion_getInstance_5().k31_1;
            return new HttpResponseData(Companion_getInstance_1().l32_1, this.k4u_1, headers, Companion_getInstance_6().d32_1, this.j4u_1, this.i4u_1);
          case 5:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 5) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.h4v_1 = config;
    this.i4v_1 = setOf_0([HttpTimeoutCapability_instance, WebSocketCapability_instance, SSECapability_instance]);
    // Inline function 'kotlin.check' call
    if (!(this.h4v_1.e3x_1 == null)) {
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).y3q = function () {
    return this.h4v_1;
  };
  protoOf(JsClientEngine).y3v = function () {
    return this.i4v_1;
  };
  protoOf(JsClientEngine).a3x = function (data, $completion) {
    var tmp = new $executeCOROUTINE$_1(this, data, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  function mapToKtor(_this__u8e3s4, method, attributes) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4, method, attributes));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.a1t();
    $l$block: {
      if (cancellable.i1p()) {
        break $l$block;
      }
      // Inline function 'io.ktor.client.utils.addEventListener' call
      var events = ['error'];
      var events_0 = listOf(arrayConcat([['open'], events]));
      var callback = {_v: null};
      var tmp = awaitConnection$lambda(events_0, _this__u8e3s4, callback);
      var disposable = new sam$kotlinx_coroutines_DisposableHandle$0(tmp);
      callback._v = awaitConnection$lambda_0(true, disposable, cancellable, _this__u8e3s4);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = events_0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp_0;
        if (callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp_0 = callback._v;
        }
        _this__u8e3s4.addEventListener(element, tmp_0);
      }
      var disposable_0 = disposable;
      cancellable.m1r(awaitConnection$lambda_1(disposable_0, _this__u8e3s4));
    }
    return cancellable.i1t();
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.j4v_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).x1r = function () {
    return this.j4v_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).d3 = function () {
    return this.j4v_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.d3(), other.d3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).hashCode = function () {
    return hashCode(this.d3());
  };
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.e2p(key, value);
      return Unit_instance;
    };
  }
  function mapToKtor$lambda($this_mapToKtor, $method, $attributes) {
    return function ($this$buildHeaders) {
      // Inline function 'kotlin.js.asDynamic' call
      $this_mapToKtor.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      dropCompressionHeaders($this$buildHeaders, $method, $attributes, PlatformUtils_getInstance().m2o_1);
      return Unit_instance;
    };
  }
  function awaitConnection$lambda($events, $this, $callback) {
    return function () {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $events.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp;
        if ($callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp = $callback._v;
        }
        $this.removeEventListener(element, tmp);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_0($once, $disposable, $continuation, $this_awaitConnection) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($once) {
        $disposable.x1r();
      }
      var tmp0_subject = event.type;
      if (tmp0_subject === 'open') {
        var tmp0 = $continuation;
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value = $this_awaitConnection;
        var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
        tmp0.z8(tmp$ret$5);
      } else if (tmp0_subject === 'error') {
        var tmp0_0 = $continuation;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception));
        tmp0_0.z8(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_1($disposable, $this_awaitConnection) {
    return function (cause) {
      $disposable.x1r();
      var tmp;
      if (!(cause == null)) {
        $this_awaitConnection.close();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function asByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().n2d_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).j2d_1;
  }
  function readChunk(_this__u8e3s4, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(safe));
    tmp_0.catch(readChunk$lambda_0(safe));
    return safe.g9();
  }
  function channelFromStream$slambda$lambda(it) {
    return Unit_instance;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.s4v_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).e3e = function ($this$writer, $completion) {
    var tmp = this.f3e($this$writer, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(channelFromStream$slambda).k9 = function (p1, $completion) {
    return this.e3e(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 9;
            this.v4v_1 = this.s4v_1.getReader();
            this.p8_1 = 7;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.o8_1 = 6;
              continue $sm;
            }

            this.o8_1 = 2;
            suspendResult = readChunk(this.v4v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            if (tmp0_elvis_lhs == null) {
              this.o8_1 = 6;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.w4v_1 = tmp0_elvis_lhs;
              this.o8_1 = 3;
              continue $sm;
            }

          case 3:
            var chunk = this.w4v_1;
            this.o8_1 = 4;
            suspendResult = writeFully_0(this.t4v_1.k2j_1, asByteArray(chunk), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.o8_1 = 5;
            suspendResult = this.t4v_1.k2j_1.h2b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.o8_1 = 1;
            continue $sm;
          case 6:
            this.p8_1 = 9;
            this.o8_1 = 10;
            continue $sm;
          case 7:
            this.p8_1 = 9;
            var tmp_1 = this.r8_1;
            if (tmp_1 instanceof Error) {
              this.u4v_1 = this.r8_1;
              this.o8_1 = 8;
              var tmp_2 = this.v4v_1.cancel(this.u4v_1);
              suspendResult = await_0(tmp_2.catch(channelFromStream$slambda$lambda), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 8:
            throw this.u4v_1;
          case 9:
            throw this.r8_1;
          case 10:
            this.p8_1 = 9;
            return Unit_instance;
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
  protoOf(channelFromStream$slambda).f3e = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.s4v_1, completion);
    i.t4v_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.e3e($this$writer, $completion);
    }, 1);
  }
  function readChunk$lambda($continuation) {
    return function (it) {
      var chunk = it.value;
      var result = it.done ? null : chunk;
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(result);
      this_0.z8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function readChunk$lambda_0($continuation) {
    return function (cause) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
      this_0.z8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch(input, init, requestConfig, config, callJob, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.a1t();
    var controller = AbortController_0();
    init.signal = controller.signal;
    config.h4t_1(init);
    requestConfig(init);
    callJob.q1p(true, VOID, commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().m2o_1) {
      tmp = fetch(input, init);
    } else {
      var options = Object.assign(Object.create(null), init, config.i4t_1);
      tmp = fetch(input, options);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    return cancellable.i1t();
  }
  function readBody(_this__u8e3s4, response) {
    return readBodyBrowser(_this__u8e3s4, response);
  }
  function AbortController_0() {
    return new AbortController();
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_instance;
    };
  }
  function commonFetch$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.z8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch$lambda_1($continuation) {
    return function (it) {
      var tmp0 = $continuation;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = Error_init_$Create$('Fail to fetch', it);
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.z8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function isReservedStatusCode($this, $receiver) {
    // Inline function 'kotlin.let' call
    var resolved = Companion_getInstance_7().u3f($receiver);
    return resolved == null || equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function sam$kotlinx_coroutines_DisposableHandle$0_0(function_0) {
    this.x4v_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).x1r = function () {
    return this.x4v_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).d3 = function () {
    return this.x4v_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.d3(), other.d3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).hashCode = function () {
    return hashCode(this.d3());
  };
  function JsWebSocketSession$lambda(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = new Int8Array(data);
        tmp = Binary_init_$Create$(true, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.a4w_1.d1v(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.b4w_1.l25(frame);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cause = WebSocketException_init_$Create$(asString(event));
      this$0.a4w_1.d1v(cause);
      this$0.b4w_1.p25(cause);
      this$0.c4w_1.t25();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_2($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_3(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var reason = new CloseReason(event.code, event.reason);
      this$0.a4w_1.c1v(reason);
      this$0.b4w_1.l25(Close_init_$Create$(reason));
      this$0.b4w_1.r25();
      this$0.c4w_1.t25();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_4($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda($cause, this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($cause == null) {
        this$0.z4v_1.close();
      } else {
        this$0.z4v_1.close(Codes_NORMAL_getInstance().r3f_1, 'Client failed');
      }
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_5(this$0, $onMessage, $onError) {
    return function (cause) {
      var tmp0 = this$0;
      $l$block: {
        // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.runWhenOpen' call
        if (tmp0.z4v_1.readyState === WebSocket.OPEN) {
          if (cause == null) {
            this$0.z4v_1.close();
          } else {
            this$0.z4v_1.close(Codes_NORMAL_getInstance().r3f_1, 'Client failed');
          }
          break $l$block;
        }
        // Inline function 'io.ktor.client.utils.addEventListener' call
        var this_0 = tmp0.z4v_1;
        var callback = JsWebSocketSession$lambda$lambda(cause, this$0);
        // Inline function 'org.w3c.dom.AddEventListenerOptions' call
        var o = {};
        o['passive'] = false;
        o['once'] = true;
        o['capture'] = false;
        var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
        this_0.addEventListener('open', callback, options);
        var tmp = JsWebSocketSession$lambda$lambda_0(this_0, 'open', callback);
        new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
      }
      $onMessage.x1r();
      $onError.x1r();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.o4w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).o2k = function ($this$launch, $completion) {
    var tmp = this.p2k($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(JsWebSocketSession$slambda).k9 = function (p1, $completion) {
    return this.o2k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 10;
            this.t4w_1 = this.o4w_1.c4w_1;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.r4w_1 = this.t4w_1;
            this.q4w_1 = null;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            this.o8_1 = 3;
            continue $sm;
          case 3:
            this.p8_1 = 9;
            this.p8_1 = 8;
            this.s4w_1 = this.r4w_1.t();
            this.o8_1 = 4;
            continue $sm;
          case 4:
            this.o8_1 = 5;
            suspendResult = this.s4w_1.n23(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.o8_1 = 6;
              continue $sm;
            }

            var e = this.s4w_1.v();
            switch (e.t3j_1.a1_1) {
              case 0:
                var text = e.u3j_1;
                this.o4w_1.z4v_1.send(decodeToString(text, 0, 0 + text.length | 0));
                break;
              case 1:
                var tmp_0 = e.u3j_1;
                var source = tmp_0 instanceof Int8Array ? tmp_0 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.o4w_1.z4v_1.send(frameData);
                break;
              case 2:
                var builder = new Buffer();
                writeFully(builder, e.u3j_1);
                var data = builder;
                var code = data.o1l();
                var reason = readText(data);
                this.o4w_1.a4w_1.c1v(new CloseReason(code, reason));
                if (isReservedStatusCode(this.o4w_1, code)) {
                  this.o4w_1.z4v_1.close();
                } else {
                  this.o4w_1.z4v_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            this.o8_1 = 4;
            continue $sm;
          case 6:
            this.p8_1 = 10;
            this.o8_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            this.p8_1 = 10;
            cancelConsumed(this.r4w_1, this.q4w_1);
            this.o8_1 = 12;
            continue $sm;
          case 8:
            this.p8_1 = 9;
            var tmp_2 = this.r8_1;
            if (tmp_2 instanceof Error) {
              var e_0 = this.r8_1;
              var tmp_3 = this;
              this.q4w_1 = e_0;
              throw e_0;
            } else {
              throw this.r8_1;
            }

          case 9:
            this.p8_1 = 10;
            var t = this.r8_1;
            cancelConsumed(this.r4w_1, this.q4w_1);
            throw t;
          case 10:
            throw this.r8_1;
          case 11:
            this.p8_1 = 10;
            cancelConsumed(this.r4w_1, this.q4w_1);
            if (false) {
              this.o8_1 = 1;
              continue $sm;
            }

            this.o8_1 = 12;
            continue $sm;
          case 12:
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.p8_1 === 10) {
          throw e_1;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).p2k = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.o4w_1, completion);
    i.p4w_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2k($this$launch, $completion);
    }, 1);
  }
  function JsWebSocketSession(coroutineContext, websocket, channelsConfig) {
    this.y4v_1 = coroutineContext;
    this.z4v_1 = websocket;
    this.a4w_1 = CompletableDeferred();
    this.b4w_1 = from(Factory_getInstance(), channelsConfig.f3g_1);
    this.c4w_1 = from(Factory_getInstance(), channelsConfig.g3g_1);
    this.d4w_1 = this.b4w_1;
    this.e4w_1 = this.c4w_1;
    this.f4w_1 = this.a4w_1;
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_0 = this.z4v_1;
    var callback = JsWebSocketSession$lambda(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o = {};
    o['passive'] = false;
    o['once'] = false;
    o['capture'] = false;
    var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
    this_0.addEventListener('message', callback, options);
    var tmp = JsWebSocketSession$lambda_0(this_0, 'message', callback);
    var onMessage = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_1 = this.z4v_1;
    var callback_0 = JsWebSocketSession$lambda_1(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_0 = {};
    o_0['passive'] = false;
    o_0['once'] = false;
    o_0['capture'] = false;
    var options_0 = (!(o_0 == null) ? !(o_0 == null) : false) ? o_0 : THROW_CCE();
    this_1.addEventListener('error', callback_0, options_0);
    var tmp_0 = JsWebSocketSession$lambda_2(this_1, 'error', callback_0);
    var onError = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_0);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_2 = this.z4v_1;
    var callback_1 = JsWebSocketSession$lambda_3(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_1 = {};
    o_1['passive'] = false;
    o_1['once'] = true;
    o_1['capture'] = false;
    var options_1 = (!(o_1 == null) ? !(o_1 == null) : false) ? o_1 : THROW_CCE();
    this_2.addEventListener('close', callback_1, options_1);
    var tmp_1 = JsWebSocketSession$lambda_4(this_2, 'close', callback_1);
    new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_1);
    var tmp0_safe_receiver = this.y4v_1.b9(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.o1p(JsWebSocketSession$lambda_5(this, onMessage, onError));
    }
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9 = 'arraybuffer';
    this.z4v_1.binaryType = tmp$ret$9;
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    // Inline function 'kotlin.require' call
    if (!!channelsConfig.f3g_1.l3n()) {
      var message = 'Suspendable channels are not supported in JS.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(JsWebSocketSession).m1o = function () {
    return this.y4v_1;
  };
  protoOf(JsWebSocketSession).b3g = function () {
    return this.d4w_1;
  };
  protoOf(JsWebSocketSession).c3g = function () {
    return this.e4w_1;
  };
  protoOf(JsWebSocketSession).z3f = function (_) {
    throw WebSocketException_init_$Create$('Max frame size switch is not supported in Js engine.');
  };
  protoOf(JsWebSocketSession).a3g = function () {
    return 9223372036854775807n;
  };
  protoOf(JsWebSocketSession).y3f = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    if (!negotiatedExtensions.r()) {
      var message = 'Extensions are not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(JsWebSocketSession).h2b = function ($completion) {
    return Unit_instance;
  };
  function ktor_toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function asString(_this__u8e3s4) {
    var tmp = JSON;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
    return tmp.stringify(_this__u8e3s4, tmp$ret$0);
  }
  function getBodyBytes(content, callContext, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$(content, callContext, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function buildObject(block) {
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    return this_0;
  }
  function toRaw$lambda($skipContentLengthHeader, $jsHeaders) {
    return function (key, value) {
      var tmp;
      if ($skipContentLengthHeader && key === 'Content-Length') {
        return Unit_instance;
      }
      $jsHeaders[key] = value;
      return Unit_instance;
    };
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.s3v_1.a32_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.j3r_1) {
        // Inline function 'org.w3c.fetch.FOLLOW' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'follow';
      } else {
        // Inline function 'org.w3c.fetch.MANUAL' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'manual';
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
      }
      return Unit_instance;
    };
  }
  function getBodyBytes$slambda($content, resultContinuation) {
    this.z4x_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytes$slambda).e3e = function ($this$writer, $completion) {
    var tmp = this.f3e($this$writer, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(getBodyBytes$slambda).k9 = function (p1, $completion) {
    return this.e3e(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytes$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = this.z4x_1.e39(this.a4y_1.k2j_1, this);
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
  protoOf(getBodyBytes$slambda).f3e = function ($this$writer, completion) {
    var i = new getBodyBytes$slambda(this.z4x_1, completion);
    i.a4y_1 = $this$writer;
    return i;
  };
  function getBodyBytes$slambda_0($content, resultContinuation) {
    var i = new getBodyBytes$slambda($content, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.e3e($this$writer, $completion);
    }, 1);
  }
  function $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c4x_1 = _this__u8e3s4;
    this.d4x_1 = clientConfig;
    this.e4x_1 = callContext;
  }
  protoOf($toRawCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.f4x_1 = {};
            var this_0 = this.c4x_1;
            var skipContentLengthHeader = !get_supportsRequestBody(this_0.s3v_1) && isEmpty(this_0.u3v_1);
            mergeHeaders(this_0.t3v_1, this_0.u3v_1, toRaw$lambda(skipContentLengthHeader, this.f4x_1));
            this.o8_1 = 1;
            suspendResult = getBodyBytes(this.c4x_1.u3v_1, this.e4x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return buildObject(toRaw$lambda_0(this.c4x_1, this.f4x_1, this.d4x_1, bodyBytes));
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
  function $getBodyBytesCOROUTINE$(content, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o4x_1 = content;
    this.p4x_1 = callContext;
  }
  protoOf($getBodyBytesCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            var tmp0_subject = this.o4x_1;
            if (tmp0_subject instanceof ByteArrayContent) {
              this.q4x_1 = this.o4x_1.e37();
              this.o8_1 = 5;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ReadChannelContent) {
                this.o8_1 = 3;
                suspendResult = readRemaining(this.o4x_1.c39(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject instanceof WriteChannelContent) {
                  this.o8_1 = 2;
                  var tmp_0 = GlobalScope_instance;
                  suspendResult = readRemaining(writer(tmp_0, this.p4x_1, VOID, getBodyBytes$slambda_0(this.o4x_1, null)).j2d_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject instanceof ContentWrapper) {
                    this.o8_1 = 1;
                    suspendResult = getBodyBytes(this.o4x_1.i39(), this.p4x_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject instanceof NoContent) {
                      this.q4x_1 = null;
                      this.o8_1 = 5;
                      continue $sm;
                    } else {
                      if (tmp0_subject instanceof ProtocolUpgrade) {
                        var tmp_1 = this;
                        throw new UnsupportedContentTypeException(this.o4x_1);
                      } else {
                        var tmp_2 = this;
                        noWhenBranchMatchedException();
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.q4x_1 = suspendResult;
            this.o8_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.q4x_1 = readByteArray(ARGUMENT);
            this.o8_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.q4x_1 = readByteArray(ARGUMENT_0);
            this.o8_1 = 5;
            continue $sm;
          case 4:
            throw this.r8_1;
          case 5:
            return this.q4x_1;
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
  function Node(item, next) {
    this.b4y_1 = item;
    this.c4y_1 = next;
  }
  function engines$iterator$1() {
    this.d4y_1 = engines_getInstance().j4t_1.kotlinx$atomicfu$value;
  }
  protoOf(engines$iterator$1).v = function () {
    var result = ensureNotNull(this.d4y_1);
    this.d4y_1 = result.c4y_1;
    return result.b4y_1;
  };
  protoOf(engines$iterator$1).u = function () {
    return !(null == this.d4y_1);
  };
  function engines() {
    engines_instance = this;
    this.j4t_1 = atomic$ref$1(null);
  }
  protoOf(engines).k4t = function (item) {
    $l$loop: while (true) {
      var current = this.j4t_1.kotlinx$atomicfu$value;
      var new_0 = new Node(item, current);
      if (this.j4t_1.atomicfu$compareAndSet(current, new_0))
        break $l$loop;
    }
  };
  protoOf(engines).t = function () {
    return new engines$iterator$1();
  };
  var engines_instance;
  function engines_getInstance() {
    if (engines_instance == null)
      new engines();
    return engines_instance;
  }
  function ConnectTimeoutException() {
  }
  function SocketTimeoutException() {
  }
  function InterruptedIOException() {
  }
  var useEngineDispatcher;
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      exception = exception.cause;
    }
    var tmp0_elvis_lhs = exception;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function get_FACTORY() {
    _init_properties_HttpClient_web_kt__pyfqvb();
    return FACTORY;
  }
  var FACTORY;
  function HttpClient_1(block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_1;
    } else {
      tmp = block;
    }
    block = tmp;
    _init_properties_HttpClient_web_kt__pyfqvb();
    return HttpClient_0(get_FACTORY(), block);
  }
  function HttpClient$lambda_1(_this__u8e3s4) {
    _init_properties_HttpClient_web_kt__pyfqvb();
    return Unit_instance;
  }
  var properties_initialized_HttpClient_web_kt_zbb0cl;
  function _init_properties_HttpClient_web_kt__pyfqvb() {
    if (!properties_initialized_HttpClient_web_kt_zbb0cl) {
      properties_initialized_HttpClient_web_kt_zbb0cl = true;
      var tmp0 = engines_getInstance();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (!equals(element, Js_instance)) {
            tmp$ret$0 = element;
            break $l$block;
          }
        }
        tmp$ret$0 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$0;
      FACTORY = tmp0_elvis_lhs == null ? Js_instance : tmp0_elvis_lhs;
    }
  }
  function checkContentLength(contentLength, bodySize, method) {
  }
  function ProxyBuilder() {
  }
  protoOf(ProxyBuilder).e4y = function (url) {
    // Inline function 'kotlin.error' call
    var message = 'Proxy unsupported in js client engine.';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  var ProxyBuilder_instance;
  function ProxyBuilder_getInstance() {
    return ProxyBuilder_instance;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.e();
  });
  protoOf(HttpClientEngineBase).y3v = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).z3q = install;
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.f();
  });
  protoOf(KtorCallContextElement).b9 = get;
  protoOf(KtorCallContextElement).nf = fold;
  protoOf(KtorCallContextElement).mf = minusKey;
  protoOf(KtorCallContextElement).of = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.e();
  });
  protoOf(HttpRequest$1).m1o = get_coroutineContext;
  protoOf(JsWebSocketSession).d3g = send;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  AfterRenderHook_instance = new AfterRenderHook();
  AfterReceiveHook_instance = new AfterReceiveHook();
  RequestError_instance = new RequestError();
  ReceiveError_instance = new ReceiveError();
  RenderRequestHook_instance = new RenderRequestHook();
  SetupRequestContext_instance = new SetupRequestContext();
  HttpTimeoutCapability_instance = new HttpTimeoutCapability();
  SetupRequest_instance = new SetupRequest();
  Send_instance = new Send();
  RequestHook_instance = new RequestHook();
  TransformResponseBodyHook_instance = new TransformResponseBodyHook();
  SSECapability_instance = new SSECapability();
  WebSocketExtensionsCapability_instance = new WebSocketExtensionsCapability();
  WebSocketCapability_instance = new WebSocketCapability();
  Companion_instance_3 = new Companion_2();
  Js_instance = new Js();
  useEngineDispatcher = true;
  ProxyBuilder_instance = new ProxyBuilder();
  //endregion
  //region block: eager init
  initHook = initHook$init$();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var io = _.io || (_.io = {});
    var ktor = io.ktor || (io.ktor = {});
    var client = ktor.client || (ktor.client = {});
    var engine = client.engine || (client.engine = {});
    var js = engine.js || (engine.js = {});
    defineProp(js, 'initHook', get_initHook, VOID, true);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = ProxyBuilder_instance;
  _.$_$.b = timeout;
  _.$_$.c = FormBuilder;
  _.$_$.d = FormDataContent;
  _.$_$.e = MultiPartFormDataContent;
  _.$_$.f = formData;
  _.$_$.g = HttpRequestBuilder;
  _.$_$.h = headers;
  _.$_$.i = url;
  _.$_$.j = HttpStatement;
  _.$_$.k = HttpClient_1;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core.js.map
