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
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var ensureNotNull = kotlin_kotlin.$_$.ug;
  var protoOf = kotlin_kotlin.$_$.dc;
  var objectCreate = kotlin_kotlin.$_$.cc;
  var CancellationException = kotlin_kotlin.$_$.v8;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var CoroutineImpl = kotlin_kotlin.$_$.o9;
  var THROW_CCE = kotlin_kotlin.$_$.cg;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.i;
  var toString = kotlin_kotlin.$_$.gc;
  var getKClassFromExpression = kotlin_kotlin.$_$.vc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var initMetadataForLambda = kotlin_kotlin.$_$.kb;
  var VOID = kotlin_kotlin.$_$.c;
  var constructCallableReference = kotlin_kotlin.$_$.wa;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.hb;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.o;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.n;
  var AutoCloseable = kotlin_kotlin.$_$.lf;
  var isInterface = kotlin_kotlin.$_$.ub;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var initMetadataForClass = kotlin_kotlin.$_$.fb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s3;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.k1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s2;
  var arrayOf = kotlin_kotlin.$_$.qg;
  var createKType = kotlin_kotlin.$_$.uc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var initMetadataForCompanion = kotlin_kotlin.$_$.gb;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.m;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.ya;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.r9;
  var IllegalStateException = kotlin_kotlin.$_$.wf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.q4;
  var captureStack = kotlin_kotlin.$_$.oa;
  var defineProp = kotlin_kotlin.$_$.xa;
  var UnsupportedOperationException = kotlin_kotlin.$_$.og;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.e5;
  var trimIndent = kotlin_kotlin.$_$.ef;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.j1;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.r1;
  var fromInt = kotlin_kotlin.$_$.z9;
  var readBuffer = kotlin_io_ktor_ktor_io.$_$.h;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.r4;
  var initMetadataForInterface = kotlin_kotlin.$_$.jb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.bh;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var writer = kotlin_io_ktor_ktor_io.$_$.w1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.x;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.w;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.c;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.u;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.v;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.s;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.t;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.m1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.y;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var emptySet = kotlin_kotlin.$_$.y6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.k1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.y3;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var getKClass = kotlin_kotlin.$_$.wc;
  var getStarKTypeProjection = kotlin_kotlin.$_$.xc;
  var ioDispatcher = kotlin_io_ktor_ktor_io.$_$.t1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.q;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var lazy = kotlin_kotlin.$_$.ah;
  var KProperty1 = kotlin_kotlin.$_$.bd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.cb;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var KtMutableMap = kotlin_kotlin.$_$.u5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.sc;
  var setOf = kotlin_kotlin.$_$.c8;
  var get = kotlin_kotlin.$_$.k9;
  var fold = kotlin_kotlin.$_$.j9;
  var minusKey = kotlin_kotlin.$_$.l9;
  var plus = kotlin_kotlin.$_$.n9;
  var Element = kotlin_kotlin.$_$.m9;
  var joinToString = kotlin_kotlin.$_$.j7;
  var setOf_0 = kotlin_kotlin.$_$.d8;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.j;
  var isSuspendFunction = kotlin_kotlin.$_$.xb;
  var initMetadataForObject = kotlin_kotlin.$_$.lb;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.p;
  var Unit = kotlin_kotlin.$_$.ng;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.xe;
  var contentType = kotlin_io_ktor_ktor_http.$_$.s1;
  var isByteArray = kotlin_kotlin.$_$.ob;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.d1;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.e;
  var rethrowCloseCauseIfNeeded = kotlin_io_ktor_ktor_io.$_$.v1;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.c;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var CIOMultipartDataBase = kotlin_io_ktor_ktor_http_cio.$_$.a;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.q;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.p1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.g1;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var writer_0 = kotlin_io_ktor_ktor_io.$_$.x1;
  var invokeOnCompletion = kotlin_io_ktor_ktor_io.$_$.s1;
  var attachJob = kotlin_io_ktor_ktor_io.$_$.n1;
  var attachWriterJob = kotlin_io_ktor_ktor_io.$_$.o1;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.m;
  var Source = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readText = kotlin_io_ktor_ktor_io.$_$.u1;
  var toInt = kotlin_kotlin.$_$.ve;
  var reversed = kotlin_kotlin.$_$.b8;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v3;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toList = kotlin_kotlin.$_$.j8;
  var sortedWith = kotlin_kotlin.$_$.f8;
  var Collection = kotlin_kotlin.$_$.j5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d4;
  var charSequenceLength = kotlin_kotlin.$_$.ta;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var roundToInt = kotlin_kotlin.$_$.ic;
  var firstOrNull = kotlin_kotlin.$_$.b7;
  var FunctionAdapter = kotlin_kotlin.$_$.ka;
  var Comparator = kotlin_kotlin.$_$.pf;
  var hashCode = kotlin_kotlin.$_$.eb;
  var compareValues = kotlin_kotlin.$_$.t8;
  var charset = kotlin_io_ktor_ktor_http.$_$.q1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.g2;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.p1;
  var readText_0 = kotlin_io_ktor_ktor_io.$_$.y;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var listOf = kotlin_kotlin.$_$.q7;
  var plus_0 = kotlin_kotlin.$_$.x7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i3;
  var checkIndexOverflow = kotlin_kotlin.$_$.c6;
  var get_lastIndex = kotlin_kotlin.$_$.n7;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.o1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.f2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var substringBefore = kotlin_kotlin.$_$.le;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.z1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.n1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var KFunctionImpl = kotlin_kotlin.$_$.rc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.ib;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var Default_getInstance = kotlin_kotlin.$_$.r2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var toLongOrNull = kotlin_kotlin.$_$.we;
  var multiply = kotlin_kotlin.$_$.ca;
  var toNumber = kotlin_kotlin.$_$.ja;
  var numberToLong = kotlin_kotlin.$_$.ea;
  var add = kotlin_kotlin.$_$.u9;
  var Companion_instance = kotlin_kotlin.$_$.z2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.tg;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.q;
  var toString_0 = kotlin_kotlin.$_$.eh;
  var trimMargin = kotlin_kotlin.$_$.ff;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.a2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.t2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d2;
  var toDuration = kotlin_kotlin.$_$.jf;
  var delay_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var KProperty0 = kotlin_kotlin.$_$.ad;
  var Exception = kotlin_kotlin.$_$.uf;
  var createKTypeParameter = kotlin_kotlin.$_$.tc;
  var NullBody = kotlin_io_ktor_ktor_http.$_$.r;
  var WebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.o;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.k;
  var generateNonce = kotlin_io_ktor_ktor_utils.$_$.y;
  var Default_getInstance_0 = kotlin_kotlin.$_$.j2;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.f1;
  var emptyList = kotlin_kotlin.$_$.w6;
  var addAll = kotlin_kotlin.$_$.y5;
  var parseWebSocketExtensions = kotlin_io_ktor_ktor_websockets.$_$.q;
  var WebSocketExtensionsConfig = kotlin_io_ktor_ktor_websockets.$_$.m;
  var WebSocketChannelsConfig = kotlin_io_ktor_ktor_websockets.$_$.l;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_websockets.$_$.d;
  var DefaultWebSocketSession_0 = kotlin_io_ktor_ktor_websockets.$_$.j;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.t4;
  var KtList = kotlin_kotlin.$_$.o5;
  var WebSocketExtension = kotlin_io_ktor_ktor_websockets.$_$.n;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.j1;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.e2;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.a1;
  var set = kotlin_io_ktor_ktor_http.$_$.c2;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.k;
  var formUrlEncode = kotlin_io_ktor_ktor_http.$_$.v1;
  var toByteArray_0 = kotlin_io_ktor_ktor_io.$_$.c1;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.n;
  var copyTo_0 = kotlin_io_ktor_ktor_io.$_$.f;
  var closeFinally = kotlin_kotlin.$_$.rg;
  var close = kotlin_io_ktor_ktor_io.$_$.q1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d6;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var BinaryChannelItem = kotlin_io_ktor_ktor_http.$_$.z;
  var FormItem = kotlin_io_ktor_ktor_http.$_$.c1;
  var BinaryItem = kotlin_io_ktor_ktor_http.$_$.a1;
  var FileItem = kotlin_io_ktor_ktor_http.$_$.b1;
  var toString_1 = kotlin_kotlin.$_$.ye;
  var take = kotlin_kotlin.$_$.oe;
  var writePacket = kotlin_io_ktor_ktor_io.$_$.o;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.h;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.z;
  var isNumber = kotlin_kotlin.$_$.vb;
  var getStringHashCode = kotlin_kotlin.$_$.db;
  var quote = kotlin_io_ktor_ktor_http.$_$.b2;
  var isQuoted = kotlin_io_ktor_ktor_http.$_$.y1;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.v;
  var decode = kotlin_io_ktor_ktor_io.$_$.q;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.g;
  var KtMutableList = kotlin_kotlin.$_$.s5;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_http.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var equals_0 = kotlin_kotlin.$_$.nd;
  var flatten = kotlin_kotlin.$_$.d7;
  var copyToArray = kotlin_kotlin.$_$.t6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellationException_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var headersOf = kotlin_io_ktor_ktor_http.$_$.w1;
  var intercepted = kotlin_kotlin.$_$.z8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var listOf_0 = kotlin_kotlin.$_$.r7;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.b4;
  var Error_init_$Create$ = kotlin_kotlin.$_$.f4;
  var Companion_getInstance_7 = kotlin_io_ktor_ktor_websockets.$_$.c;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.h;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.i;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var decodeToString = kotlin_kotlin.$_$.kd;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var from = kotlin_io_ktor_ktor_websockets.$_$.p;
  var send = kotlin_io_ktor_ktor_websockets.$_$.e;
  var toTypedArray = kotlin_kotlin.$_$.r8;
  var get_supportsRequestBody = kotlin_io_ktor_ktor_http.$_$.d2;
  var isEmpty = kotlin_io_ktor_ktor_http.$_$.e1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var isNaN_0 = kotlin_kotlin.$_$.yg;
  var encodeURLParameter = kotlin_io_ktor_ktor_http.$_$.u1;
  var get_hostWithPort = kotlin_io_ktor_ktor_http.$_$.x1;
  var Companion_getInstance_8 = kotlin_io_ktor_ktor_http.$_$.n;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(HttpClient$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClient$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpClient, 'HttpClient', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientConfig, 'HttpClientConfig', HttpClientConfig);
  initMetadataForClass(HttpClientCall, 'HttpClientCall', VOID, VOID, [CoroutineScope], [0, 1]);
  initMetadataForClass(DelegatedCall, 'DelegatedCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(HttpResponse, 'HttpResponse', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedResponse, 'DelegatedResponse', VOID, HttpResponse);
  function get_coroutineContext() {
    return this.g3t().z1o();
  }
  initMetadataForInterface(HttpRequest_0, 'HttpRequest', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedRequest, 'DelegatedRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCompanion(Companion);
  initMetadataForCoroutine($bodyNullableCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DoubleReceiveException, 'DoubleReceiveException', VOID, IllegalStateException);
  initMetadataForClass(NoTransformationFoundException, 'NoTransformationFoundException', VOID, UnsupportedOperationException);
  initMetadataForClass(SavedHttpResponse, 'SavedHttpResponse', VOID, HttpResponse);
  initMetadataForClass(SavedHttpCall, 'SavedHttpCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(SavedHttpRequest, 'SavedHttpRequest', VOID, VOID, [HttpRequest_0]);
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
    var tmp = Phases_getInstance_0().y3r_1;
    client.k3p_1.a2t(tmp, HttpClientEngine$install$slambda_0(client, this, null));
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
  initMetadataForClass(EngineEntry, 'EngineEntry');
  initMetadataForClass(ProxyConfig, 'ProxyConfig', ProxyConfig_init_$Create$);
  initMetadataForObject(ProxyBuilder, 'ProxyBuilder');
  initMetadataForClass(ConnectTimeoutException, 'ConnectTimeoutException', VOID, IOException);
  initMetadataForClass(InterruptedIOException, 'InterruptedIOException', VOID, IOException);
  initMetadataForClass(SocketTimeoutException, 'SocketTimeoutException', VOID, InterruptedIOException);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.e3p_1 = manageEngine;
    if ($this.e3p_1) {
      if (engine instanceof HttpClientEngineBase) {
        engine.s3p_1.atomicfu$incrementAndGet();
      }
      var tmp = ensureNotNull($this.h3p_1.i9(Key_instance));
      tmp.b1q(HttpClient$_init_$lambda_36nm6w(engine));
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
        tmp = $engine.s3p_1.atomicfu$decrementAndGet() <= 0;
      }
      var shouldClose = tmp;
      var tmp_0;
      if (shouldClose) {
        var tmp_1;
        if (cause == null) {
          $engine.f4();
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
    this.d3q_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).g3q = function ($this$intercept, call, $completion) {
    var tmp = this.h3q($this$intercept, call, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpClient$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            var tmp_0 = this.f3q_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.f3q_1) + '(' + toString(getKClassFromExpression(this.f3q_1)) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.v8_1 = 1;
            suspendResult = this.d3q_1.l3p_1.v2s(Unit_instance, this.f3q_1.n3q(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            this.f3q_1.o3q(response);
            this.v8_1 = 2;
            suspendResult = this.e3q_1.a2s(this.f3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(HttpClient$slambda).h3q = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.d3q_1, completion);
    i.e3q_1 = $this$intercept;
    i.f3q_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, call, $completion) {
      return i.g3q($this$intercept, call, $completion);
    }, 2);
  }
  function HttpClient$lambda($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.x3q_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).b3r = function ($this$intercept, it, $completion) {
    var tmp = this.c3r($this$intercept, it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpClient$slambda_1).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b3r(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.y3q_1.b2s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a3r_1 = suspendResult;
            this.w8_1 = 3;
            this.v8_1 = 4;
            continue $sm;
          case 2:
            this.w8_1 = 3;
            var tmp_0 = this.y8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.y8_1;
              var tmp_1 = this;
              this.x3q_1.o3p_1.k3a(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.y3q_1.w2s_1.n3q(), cause));
              throw cause;
            } else {
              throw this.y8_1;
            }

          case 3:
            throw this.y8_1;
          case 4:
            this.w8_1 = 3;
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
  protoOf(HttpClient$slambda_1).c3r = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.x3q_1, completion);
    i.y3q_1 = $this$intercept;
    i.z3q_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.b3r($this$intercept, it, $completion);
    }, 2);
  }
  function $executeCOROUTINE$(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l3r_1 = _this__u8e3s4;
    this.m3r_1 = builder;
  }
  protoOf($executeCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.l3r_1.o3p_1.k3a(get_HttpRequestCreated(), this.m3r_1);
            this.v8_1 = 1;
            suspendResult = this.l3r_1.i3p_1.v2s(this.m3r_1, this.m3r_1.q3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.c3p_1 = engine;
    this.d3p_1 = userConfig;
    this.e3p_1 = false;
    this.f3p_1 = atomic$boolean$1(false);
    this.g3p_1 = Job(this.c3p_1.z1o().i9(Key_instance));
    this.h3p_1 = this.c3p_1.z1o().yf(this.g3p_1);
    this.i3p_1 = new HttpRequestPipeline();
    this.j3p_1 = new HttpResponsePipeline();
    this.k3p_1 = new HttpSendPipeline();
    this.l3p_1 = new HttpReceivePipeline();
    this.m3p_1 = AttributesJsFn(true);
    this.n3p_1 = this.c3p_1.t3r();
    this.o3p_1 = new Events();
    this.p3p_1 = new HttpClientConfig();
    this.c3p_1.u3r(this);
    var tmp = Phases_getInstance_0().z3r_1;
    this.k3p_1.a2t(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    var $this$with = this.d3p_1;
    this.p3p_1.i3s(get_HttpRequestLifecycle());
    this.p3p_1.i3s(get_BodyProgress());
    this.p3p_1.i3s(get_SaveBody());
    if ($this$with.f3s_1) {
      this.p3p_1.j3s('DefaultTransformers', HttpClient$lambda);
    }
    this.p3p_1.i3s(Plugin_getInstance());
    this.p3p_1.i3s(get_HttpCallValidator());
    if ($this$with.e3s_1) {
      this.p3p_1.i3s(get_HttpRedirect());
    }
    this.p3p_1.k3s($this$with);
    if ($this$with.f3s_1) {
      this.p3p_1.i3s(get_HttpPlainText());
    }
    addDefaultResponseValidation(this.p3p_1);
    this.p3p_1.u3r(this);
    var tmp_0 = Phases_getInstance_1().l3s_1;
    this.j3p_1.a2t(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).z1o = function () {
    return this.h3p_1;
  };
  protoOf(HttpClient).q3s = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$(this, builder, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpClient).f4 = function () {
    var success = this.f3p_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_instance;
    var installedFeatures = this.m3p_1.b2n(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = installedFeatures.i2n().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var plugin = installedFeatures.b2n(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, AutoCloseable)) {
        plugin.f4();
      }
    }
    this.g3p_1.r1v();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + toString(this.c3p_1) + ']';
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
    var engine = engineFactory.r3s(config.d3s_1);
    return HttpClient_init_$Create$(engine, config, true);
  }
  function HttpClient$lambda_0(_this__u8e3s4) {
    return Unit_instance;
  }
  function installPlugin($this, plugin) {
    if ($this.a3s_1.q2(plugin.m1()))
      return Unit_instance;
    var tmp0 = $this.a3s_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$installPlugin$lambda(plugin);
    tmp0.z2(tmp2, value);
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
      var attributes = scope.m3p_1.h2n(tmp, HttpClientConfig$installPlugin$lambda$lambda);
      var config = ensureNotNull(scope.p3p_1.b3s_1.s2($plugin.m1()));
      var pluginData = $plugin.s3s(config);
      $plugin.t3s(pluginData, scope);
      attributes.e2n($plugin.m1(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.a3s_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.b3s_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.c3s_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.d3s_1 = HttpClientConfig$engineConfig$lambda;
    this.e3s_1 = true;
    this.f3s_1 = true;
    this.g3s_1 = false;
    this.h3s_1 = PlatformUtils_getInstance().d2p_1;
  }
  protoOf(HttpClientConfig).u3s = function (block) {
    var oldConfig = this.d3s_1;
    var tmp = this;
    tmp.d3s_1 = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  protoOf(HttpClientConfig).v3s = function (plugin, configure) {
    var previousConfigBlock = this.b3s_1.s2(plugin.m1());
    var tmp0 = this.b3s_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    tmp0.z2(tmp2, value);
    installPlugin(this, plugin);
  };
  protoOf(HttpClientConfig).i3s = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.v3s(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.v3s.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).j3s = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.c3s_1.z2(key, block);
  };
  protoOf(HttpClientConfig).u3r = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.a3s_1.u2().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.apply' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.c3s_1.u2().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.apply' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).k3s = function (other) {
    this.e3s_1 = other.e3s_1;
    this.f3s_1 = other.f3s_1;
    this.g3s_1 = other.g3s_1;
    var tmp0 = this.a3s_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map = other.a3s_1;
    tmp0.b3(map);
    var tmp0_0 = this.b3s_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_0 = other.b3s_1;
    tmp0_0.b3(map_0);
    var tmp0_1 = this.c3s_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_1 = other.c3s_1;
    tmp0_1.b3(map_1);
  };
  function replaceResponse(_this__u8e3s4, headers, content) {
    headers = headers === VOID ? _this__u8e3s4.n3q().j32() : headers;
    return new DelegatedCall(_this__u8e3s4.i3q_1, _this__u8e3s4, content, headers);
  }
  function resolveOrigin(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp;
        if ($this instanceof DelegatedResponse) {
          $this = $this.x3s_1;
          continue $l$0;
        } else {
          tmp = $this;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function DelegatedCall(client, originCall, responseContent, responseHeaders) {
    responseHeaders = responseHeaders === VOID ? originCall.n3q().j32() : responseHeaders;
    HttpClientCall.call(this, client);
    this.k3q_1 = new DelegatedRequest(this, originCall.b3t());
    this.l3q_1 = new DelegatedResponse(this, originCall.n3q(), responseContent, responseHeaders);
  }
  function DelegatedResponse(call, origin, content, headers) {
    headers = headers === VOID ? origin.j32() : headers;
    HttpResponse.call(this);
    this.w3s_1 = call;
    this.x3s_1 = origin;
    this.y3s_1 = content;
    this.z3s_1 = headers;
    this.a3t_1 = this.x3s_1.z1o();
  }
  protoOf(DelegatedResponse).g3t = function () {
    return this.w3s_1;
  };
  protoOf(DelegatedResponse).j32 = function () {
    return this.z3s_1;
  };
  protoOf(DelegatedResponse).h3t = function () {
    return this.y3s_1(this.x3s_1);
  };
  protoOf(DelegatedResponse).z1o = function () {
    return this.a3t_1;
  };
  protoOf(DelegatedResponse).i3t = function () {
    return this.x3s_1.i3t();
  };
  protoOf(DelegatedResponse).j3t = function () {
    return this.x3s_1.j3t();
  };
  protoOf(DelegatedResponse).k3t = function () {
    return this.x3s_1.k3t();
  };
  protoOf(DelegatedResponse).l3t = function () {
    return this.x3s_1.l3t();
  };
  function DelegatedRequest(call, origin) {
    this.m3t_1 = origin;
    this.n3t_1 = call;
  }
  protoOf(DelegatedRequest).g3t = function () {
    return this.n3t_1;
  };
  protoOf(DelegatedRequest).z1o = function () {
    return this.m3t_1.z1o();
  };
  protoOf(DelegatedRequest).o3t = function () {
    return this.m3t_1.o3t();
  };
  protoOf(DelegatedRequest).p3t = function () {
    return this.m3t_1.p3t();
  };
  protoOf(DelegatedRequest).c3t = function () {
    return this.m3t_1.c3t();
  };
  protoOf(DelegatedRequest).f1b = function () {
    return this.m3t_1.f1b();
  };
  protoOf(DelegatedRequest).j32 = function () {
    return this.m3t_1.j32();
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.k3q_1 = new DefaultHttpRequest($this, requestData);
    $this.l3q_1 = new DefaultHttpResponse($this, responseData);
    $this.c3t().g2n(Companion_getInstance_9().q3t_1);
    var tmp = responseData.v3t_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.c3t().e2n(Companion_getInstance_9().q3t_1, responseData.v3t_1);
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
    var tmp_0 = PrimitiveClasses_getInstance().rb();
    var tmp_1 = !(null == null);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(PrimitiveClasses_getInstance().rb(), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.q3t_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g3u_1 = _this__u8e3s4;
    this.h3u_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 5;
            this.w8_1 = 4;
            if (instanceOf(this.g3u_1.n3q(), this.h3u_1.n2t_1))
              return this.g3u_1.n3q();
            if (!this.g3u_1.d3t() && !get_isSaved(this.g3u_1.n3q()) && !this.g3u_1.j3q_1.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.g3u_1);
            }

            var tmp0_elvis_lhs = this.g3u_1.c3t().c2n(Companion_getInstance_9().q3t_1);
            if (tmp0_elvis_lhs == null) {
              this.v8_1 = 1;
              suspendResult = this.g3u_1.e3t(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i3u_1 = tmp0_elvis_lhs;
              this.v8_1 = 2;
              continue $sm;
            }

          case 1:
            this.i3u_1 = suspendResult;
            this.v8_1 = 2;
            continue $sm;
          case 2:
            var responseData = this.i3u_1;
            var subject = new HttpResponseContainer(this.h3u_1, responseData);
            this.v8_1 = 3;
            suspendResult = this.g3u_1.i3q_1.j3p_1.v2s(this.g3u_1, subject, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var this_0 = suspendResult.k3u_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) && !instanceOf(result, this.h3u_1.n2t_1)) {
              var from = getKClassFromExpression(result);
              var to = this.h3u_1.n2t_1;
              throw new NoTransformationFoundException(this.g3u_1.n3q(), from, to);
            }

            return result;
          case 4:
            this.w8_1 = 5;
            var tmp_1 = this.y8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.y8_1;
              cancel_0(this.g3u_1.n3q(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.y8_1;
            }

          case 5:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 5) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_9();
    this.i3q_1 = client;
    this.j3q_1 = atomic$boolean$1(false);
    this.m3q_1 = false;
  }
  protoOf(HttpClientCall).z1o = function () {
    return this.n3q().z1o();
  };
  protoOf(HttpClientCall).c3t = function () {
    return this.b3t().c3t();
  };
  protoOf(HttpClientCall).b3t = function () {
    var tmp = this.k3q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).n3q = function () {
    var tmp = this.l3q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).d3t = function () {
    return this.m3q_1;
  };
  protoOf(HttpClientCall).e3t = function ($completion) {
    return this.n3q().h3t();
  };
  protoOf(HttpClientCall).f3t = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$(this, info, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.b3t().p3t().toString() + ', ' + this.n3q().i3t().toString() + ']';
  };
  protoOf(HttpClientCall).o3q = function (response) {
    this.l3q_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.l3u_1 = 'Response already received: ' + call.toString();
    delete this.message;
  }
  protoOf(DoubleReceiveException).e = function () {
    return this.l3u_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.m3u_1 = trimIndent("\n        Expected response body of the type '" + toString(to) + "' but was '" + toString(from) + "'\n        In response from `" + get_request(response).p3t().toString() + '`\n        Response status `' + response.i3t().toString() + '`\n        Response header `ContentType: ' + response.j32().d1b('Content-Type') + '` \n        Request header `Accept: ' + get_request(response).j32().d1b('Accept') + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
    delete this.message;
  }
  protoOf(NoTransformationFoundException).e = function () {
    return this.m3u_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$(_this__u8e3s4, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.w3u_1 = call;
    this.x3u_1 = body;
    this.y3u_1 = origin.i3t();
    this.z3u_1 = origin.j3t();
    this.a3v_1 = origin.k3t();
    this.b3v_1 = origin.l3t();
    this.c3v_1 = origin.j32();
    this.d3v_1 = origin.z1o();
  }
  protoOf(SavedHttpResponse).g3t = function () {
    return this.w3u_1;
  };
  protoOf(SavedHttpResponse).i3t = function () {
    return this.y3u_1;
  };
  protoOf(SavedHttpResponse).j3t = function () {
    return this.z3u_1;
  };
  protoOf(SavedHttpResponse).k3t = function () {
    return this.a3v_1;
  };
  protoOf(SavedHttpResponse).l3t = function () {
    return this.b3v_1;
  };
  protoOf(SavedHttpResponse).j32 = function () {
    return this.c3v_1;
  };
  protoOf(SavedHttpResponse).z1o = function () {
    return this.d3v_1;
  };
  protoOf(SavedHttpResponse).h3t = function () {
    return ByteReadChannel_0(this.x3u_1);
  };
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.j3v_1 = responseBody;
    this.k3q_1 = new SavedHttpRequest(this, request);
    this.l3q_1 = new SavedHttpResponse(this, this.j3v_1, response);
    checkContentLength(contentLength(response), fromInt(this.j3v_1.length), request.o3t());
    this.k3v_1 = true;
  }
  protoOf(SavedHttpCall).d3t = function () {
    return this.k3v_1;
  };
  function SavedHttpRequest(call, origin) {
    this.l3v_1 = origin;
    this.m3v_1 = call;
  }
  protoOf(SavedHttpRequest).g3t = function () {
    return this.m3v_1;
  };
  protoOf(SavedHttpRequest).z1o = function () {
    return this.l3v_1.z1o();
  };
  protoOf(SavedHttpRequest).o3t = function () {
    return this.l3v_1.o3t();
  };
  protoOf(SavedHttpRequest).p3t = function () {
    return this.l3v_1.p3t();
  };
  protoOf(SavedHttpRequest).c3t = function () {
    return this.l3v_1.c3t();
  };
  protoOf(SavedHttpRequest).f1b = function () {
    return this.l3v_1.f1b();
  };
  protoOf(SavedHttpRequest).j32 = function () {
    return this.l3v_1.j32();
  };
  function $saveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3u_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            var tmp_0 = this.v3u_1;
            if (tmp_0 instanceof SavedHttpCall)
              return this.v3u_1;
            this.v8_1 = 1;
            suspendResult = readBuffer(this.v3u_1.n3q().h3t(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readByteArray(ARGUMENT);
            return new SavedHttpCall(this.v3u_1.i3q_1, this.v3u_1.b3t(), this.v3u_1.n3q(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + toString(getKClassFromExpression(content)), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ProgressListener() {
  }
  function getContent($this, delegate) {
    var tmp;
    if (delegate instanceof ContentWrapper) {
      tmp = getContent($this, delegate.d3a());
    } else {
      if (delegate instanceof ByteArrayContent) {
        tmp = ByteReadChannel_0(delegate.z37());
      } else {
        if (delegate instanceof ProtocolUpgrade) {
          throw new UnsupportedContentTypeException(delegate);
        } else {
          if (delegate instanceof NoContent) {
            tmp = Companion_getInstance().f2e_1;
          } else {
            if (delegate instanceof ReadChannelContent) {
              tmp = delegate.x39();
            } else {
              if (delegate instanceof WriteChannelContent) {
                var tmp_0 = GlobalScope_instance;
                tmp = writer(tmp_0, $this.q3v_1, true, ObservableContent$getContent$slambda_0(delegate, null)).b2e_1;
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
    this.a3w_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$getContent$slambda).z3e = function ($this$writer, $completion) {
    var tmp = this.a3f($this$writer, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(ObservableContent$getContent$slambda).r9 = function (p1, $completion) {
    return this.z3e(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$getContent$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.a3w_1.z39(this.b3w_1.w2j_1, this);
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
  protoOf(ObservableContent$getContent$slambda).a3f = function ($this$writer, completion) {
    var i = new ObservableContent$getContent$slambda(this.a3w_1, completion);
    i.b3w_1 = $this$writer;
    return i;
  };
  function ObservableContent$getContent$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$getContent$slambda($delegate, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.z3e($this$writer, $completion);
    }, 1);
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.p3v_1 = delegate;
    this.q3v_1 = callContext;
    this.r3v_1 = listener;
  }
  protoOf(ObservableContent).x37 = function () {
    return this.p3v_1.x37();
  };
  protoOf(ObservableContent).y37 = function () {
    return this.p3v_1.y37();
  };
  protoOf(ObservableContent).j32 = function () {
    return this.p3v_1.j32();
  };
  protoOf(ObservableContent).x39 = function () {
    return observable(getContent(this, this.p3v_1), this.q3v_1, this.y37(), this.r3v_1);
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
        $client.o3p_1.k3a(get_HttpResponseCancelled(), $response);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.z1o().i9(Key_instance);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1p();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$($this, requestData, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function checkExtensions($this, requestData) {
    var _iterator__ex2g4s = requestData.s3w_1.t();
    while (_iterator__ex2g4s.u()) {
      var requestedExtension = _iterator__ex2g4s.v();
      // Inline function 'kotlin.require' call
      if (!$this.t3w().i2(requestedExtension)) {
        var message = "Engine doesn't support " + toString(requestedExtension);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.c3x_1 = $client;
    this.d3x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).g3q = function ($this$intercept, content, $completion) {
    var tmp = this.h3q($this$intercept, content, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpClientEngine$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            var this_0 = new HttpRequestBuilder();
            this_0.h3x(this.e3x_1.w2s_1);
            var body = this.f3x_1;
            if (body == null) {
              this_0.q3r_1 = NullBody_instance;
              var tmp_0 = PrimitiveClasses_getInstance().rb();
              var tmp_1 = !(null == null);
              var tmp_2;
              try {
                tmp_2 = createKType(PrimitiveClasses_getInstance().rb(), arrayOf([]), false);
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
              this_0.i3x(new TypeInfo(tmp_0, tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.q3r_1 = body;
                this_0.i3x(null);
              } else {
                this_0.q3r_1 = body;
                var tmp_4 = PrimitiveClasses_getInstance().rb();
                var tmp_5 = !(null == null);
                var tmp_6;
                try {
                  tmp_6 = createKType(PrimitiveClasses_getInstance().rb(), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_7;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_7 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_6 = tmp_7;
                }
                this_0.i3x(new TypeInfo(tmp_4, tmp_5, tmp_6));
              }
            }

            var builder = this_0;
            this.c3x_1.o3p_1.k3a(get_HttpRequestIsReadyForSending(), builder);
            var tmp_8 = this;
            var this_1 = builder.c2y();
            this_1.r3w_1.e2n(get_CLIENT_CONFIG(), this.c3x_1.p3p_1);
            tmp_8.g3x_1 = this_1;
            validateHeaders(this.g3x_1);
            checkExtensions(this.d3x_1, this.g3x_1);
            this.v8_1 = 1;
            suspendResult = executeWithinCallContext(this.d3x_1, this.g3x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var responseData = suspendResult;
            var call = HttpClientCall_init_$Create$(this.c3x_1, this.g3x_1, responseData);
            var response = call.n3q();
            this.c3x_1.o3p_1.k3a(get_HttpResponseReceived(), response);
            var tmp_9 = get_job(response.z1o());
            tmp_9.b1q(HttpClientEngine$install$slambda$lambda(this.c3x_1, response));
            this.v8_1 = 2;
            suspendResult = this.e3x_1.a2s(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.y8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.w8_1 === 3) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClientEngine$install$slambda).h3q = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.c3x_1, this.d3x_1, completion);
    i.e3x_1 = $this$intercept;
    i.f3x_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.g3q($this$intercept, content, $completion);
    }, 2);
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.r3x_1 = this$0;
    this.s3x_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).u3x = function ($this$async, $completion) {
    var tmp = this.b2l($this$async, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).r9 = function (p1, $completion) {
    return this.u3x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            if (_get_closed__iwkfs1(this.r3x_1)) {
              throw new ClientEngineClosedException();
            }

            this.v8_1 = 1;
            suspendResult = this.r3x_1.v3x(this.s3x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).b2l = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.r3x_1, this.s3x_1, completion);
    i.t3x_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    return constructCallableReference(function ($this$async, $completion) {
      return i.u3x($this$async, $completion);
    }, 1);
  }
  function $executeWithinCallContextCOROUTINE$(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k3w_1 = _this__u8e3s4;
    this.l3w_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            this.v8_1 = 1;
            suspendResult = createCallContext(this.k3w_1, this.l3w_1.q3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var callContext = suspendResult;
            var context = callContext.yf(new KtorCallContextElement(callContext));
            this.v8_1 = 2;
            suspendResult = async(this.k3w_1, context, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.k3w_1, this.l3w_1, null)).s1r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.o3w_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = requestHeaders.m2p();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (HttpHeaders_getInstance().b32_1.i2(element)) {
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
    var callContext = _this__u8e3s4.z1o().yf(callJob).yf(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.b9().i9(Key_instance);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.d1q(true, VOID, createCallContext$lambda(callJob));
      callJob.b1q(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      if (cause == null)
        return Unit_instance;
      var tmp1_elvis_lhs = cause instanceof CancellationException ? cause : null;
      var cancellation = tmp1_elvis_lhs == null ? CancellationException_init_$Create$_0(cause.message) : tmp1_elvis_lhs;
      $callJob.i1q(cancellation);
      return Unit_instance;
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.k1s();
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
      var tmp_0 = null instanceof HttpClientConfig;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(HttpClientConfig), arrayOf([getStarKTypeProjection()]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      CLIENT_CONFIG = new AttributeKey(name, tmp$ret$1);
    }
  }
  function HttpClientEngineBase$dispatcher$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.t3r().x3x_1;
      return tmp0_elvis_lhs == null ? ioDispatcher() : tmp0_elvis_lhs;
    };
  }
  function HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v() {
    return constructCallableReference(function (p0) {
      return p0.a3y();
    }, 1, 0, 22);
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().yf(this$0.a3y()).yf(new CoroutineName(this$0.q3p_1 + '-context'));
    };
  }
  function HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr() {
    return constructCallableReference(function (p0) {
      return p0.z1o();
    }, 1, 0, 23);
  }
  function HttpClientEngineBase(engineName) {
    this.q3p_1 = engineName;
    this.r3p_1 = atomic$boolean$1(false);
    this.s3p_1 = atomic$int$1(0);
    var tmp = this;
    tmp.t3p_1 = lazy(HttpClientEngineBase$dispatcher$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.u3p_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).a3y = function () {
    var tmp0 = this.t3p_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('dispatcher', 1, tmp, HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).z1o = function () {
    var tmp0 = this.u3p_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('coroutineContext', 1, tmp, HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).f4 = function () {
    if (!this.r3p_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    var tmp = this.z1o().i9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.r1v();
  };
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.b3y_1 = cause;
    delete this.cause;
  }
  protoOf(ClientEngineClosedException).f = function () {
    return this.b3y_1;
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
      var tmp_0 = !(null == null) ? isInterface(null, KtMutableMap) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpClientEngineCapability), arrayOf([getStarKTypeProjection()]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().rb(), arrayOf([]), false))]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      ENGINE_CAPABILITIES_KEY = new AttributeKey(name, tmp$ret$1);
      DEFAULT_CAPABILITIES = setOf(HttpTimeoutCapability_instance);
    }
  }
  function HttpClientEngineConfig() {
    this.w3x_1 = 4;
    this.x3x_1 = null;
    this.y3x_1 = false;
    this.z3x_1 = null;
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
  function Companion_getInstance_10() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.c3y_1 = callContext;
  }
  protoOf(KtorCallContextElement).m1 = function () {
    return Companion_instance_1;
  };
  function callContext($completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.b9();
    return ensureNotNull(tmp$ret$0.i9(Companion_instance_1)).c3y_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.r2p(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.d1b('User-Agent') == null && content.j32().d1b('User-Agent') == null;
    if (missingAgent && needUserAgent()) {
      block('User-Agent', get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.x37();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.j32().d1b('Content-Type') : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.d1b('Content-Type') : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.y37();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.j32().d1b('Content-Length') : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.d1b('Content-Length') : tmp5_elvis_lhs;
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
    return !PlatformUtils_getInstance().x2o_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.q2p($requestHeaders);
      $this$buildHeaders.q2p($content.j32());
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
      if (get_DATE_HEADERS().i2(key)) {
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
    this.l3y_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterRenderHook$install$slambda).g3q = function ($this$intercept, content, $completion) {
    var tmp = this.h3q($this$intercept, content, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(AfterRenderHook$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterRenderHook$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            var tmp_0 = this.n3y_1;
            if (!(tmp_0 instanceof OutgoingContent))
              return Unit_instance;
            this.v8_1 = 1;
            suspendResult = this.l3y_1(this.m3y_1.w2s_1, this.n3y_1, this);
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
            this.v8_1 = 2;
            suspendResult = this.m3y_1.a2s(newContent, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(AfterRenderHook$install$slambda).h3q = function ($this$intercept, content, completion) {
    var i = new AfterRenderHook$install$slambda(this.l3y_1, completion);
    i.m3y_1 = $this$intercept;
    i.n3y_1 = content;
    return i;
  };
  function AfterRenderHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterRenderHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.g3q($this$intercept, content, $completion);
    }, 2);
  }
  function AfterRenderHook() {
  }
  protoOf(AfterRenderHook).o3y = function (client, handler) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    client.i3p_1.x2s(Phases_getInstance().s3y_1, observableContentPhase);
    client.i3p_1.a2t(observableContentPhase, AfterRenderHook$install$slambda_0(handler, null));
  };
  protoOf(AfterRenderHook).u3y = function (client, handler) {
    return this.o3y(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var AfterRenderHook_instance;
  function AfterRenderHook_getInstance() {
    return AfterRenderHook_instance;
  }
  function AfterReceiveHook$install$slambda($handler, resultContinuation) {
    this.d3z_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterReceiveHook$install$slambda).g3z = function ($this$intercept, response, $completion) {
    var tmp = this.h3z($this$intercept, response, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(AfterReceiveHook$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3z(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterReceiveHook$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 4;
            this.v8_1 = 1;
            suspendResult = this.d3z_1(this.f3z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newResponse = suspendResult;
            if (!(newResponse == null)) {
              this.v8_1 = 2;
              suspendResult = this.e3z_1.a2s(newResponse, this);
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
            return Unit_instance;
          case 4:
            throw this.y8_1;
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
  protoOf(AfterReceiveHook$install$slambda).h3z = function ($this$intercept, response, completion) {
    var i = new AfterReceiveHook$install$slambda(this.d3z_1, completion);
    i.e3z_1 = $this$intercept;
    i.f3z_1 = response;
    return i;
  };
  function AfterReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterReceiveHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.g3z($this$intercept, response, $completion);
    }, 2);
  }
  function AfterReceiveHook() {
  }
  protoOf(AfterReceiveHook).i3z = function (client, handler) {
    var tmp = Phases_getInstance_2().l3z_1;
    client.l3p_1.a2t(tmp, AfterReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(AfterReceiveHook).u3y = function (client, handler) {
    return this.i3z(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var AfterReceiveHook_instance;
  function AfterReceiveHook_getInstance() {
    return AfterReceiveHook_instance;
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = _this__u8e3s4.g3t();
    return replaceResponse(tmp, VOID, withObservableDownload$lambda(listener)).n3q();
  }
  function BodyProgress$lambda($this$createClientPlugin) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = AfterRenderHook_instance;
    $this$createClientPlugin.r3z(tmp, BodyProgress$lambda$slambda_0(null));
    var tmp_0 = AfterReceiveHook_instance;
    $this$createClientPlugin.r3z(tmp_0, BodyProgress$lambda$slambda_2(null));
    return Unit_instance;
  }
  function BodyProgress$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda).c40 = function (request, content, $completion) {
    var tmp = this.d40(request, content, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(BodyProgress$lambda$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.c40(tmp, p2 instanceof OutgoingContent ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          var tmp0_elvis_lhs = this.a40_1.s3r_1.c2n(get_UploadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return new ObservableContent(this.b40_1, this.a40_1.r3r_1, listener);
        } else if (tmp === 1) {
          throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda).d40 = function (request, content, completion) {
    var i = new BodyProgress$lambda$slambda(completion);
    i.a40_1 = request;
    i.b40_1 = content;
    return i;
  };
  function BodyProgress$lambda$slambda_0(resultContinuation) {
    var i = new BodyProgress$lambda$slambda(resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.c40(request, content, $completion);
    }, 2);
  }
  function BodyProgress$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda_1).n40 = function (response, $completion) {
    var tmp = this.o40(response, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(BodyProgress$lambda$slambda_1).r9 = function (p1, $completion) {
    return this.n40(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda_1).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          var tmp0_elvis_lhs = this.m40_1.g3t().b3t().c3t().c2n(get_DownloadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return withObservableDownload(this.m40_1, listener);
        } else if (tmp === 1) {
          throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda_1).o40 = function (response, completion) {
    var i = new BodyProgress$lambda$slambda_1(completion);
    i.m40_1 = response;
    return i;
  };
  function BodyProgress$lambda$slambda_2(resultContinuation) {
    var i = new BodyProgress$lambda$slambda_1(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.n40(response, $completion);
    }, 1);
  }
  function withObservableDownload$lambda($listener) {
    return function ($this$replaceResponse) {
      return observable($this$replaceResponse.h3t(), $this$replaceResponse.z1o(), contentLength($this$replaceResponse), $listener);
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
      var tmp_0 = !(null == null) ? isInterface(null, ProgressListener) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(ProgressListener), arrayOf([]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      UploadProgressListenerAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'DownloadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(ProgressListener);
      var tmp_4 = !(null == null) ? isInterface(null, ProgressListener) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(ProgressListener), arrayOf([]), false);
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
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
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
    this.p40_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.r40_1 = 'Unhandled redirect: ' + response.g3t().b3t().o3t().u32_1 + ' ' + response.g3t().b3t().p3t().toString() + '. ' + ('Status: ' + response.i3t().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(RedirectResponseException).e = function () {
    return this.r40_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.t40_1 = 'Client request(' + response.g3t().b3t().o3t().u32_1 + ' ' + response.g3t().b3t().p3t().toString() + ') ' + ('invalid: ' + response.i3t().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ClientRequestException).e = function () {
    return this.t40_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.v40_1 = 'Server error(' + response.g3t().b3t().o3t().u32_1 + ' ' + response.g3t().b3t().p3t().toString() + ': ' + (response.i3t().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ServerResponseException).e = function () {
    return this.v40_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).i41 = function (response, $completion) {
    var tmp = this.o40(response, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).r9 = function (p1, $completion) {
    return this.i41(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 5;
            var expectSuccess = this.e41_1.g3t().c3t().b2n(get_ExpectSuccessAttributeKey());
            if (!expectSuccess) {
              var this_0 = get_LOGGER();
              if (get_isTraceEnabled(this_0)) {
                this_0.v2t('Skipping default response validation for ' + this.e41_1.g3t().b3t().p3t().toString());
              }
              return Unit_instance;
            }

            this.g41_1 = this.e41_1.i3t().i35_1;
            var originCall = this.e41_1.g3t();
            if (this.g41_1 < 300 || originCall.c3t().d2n(get_ValidateMark())) {
              return Unit_instance;
            }

            this.v8_1 = 1;
            suspendResult = save(originCall, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_1 = suspendResult;
            this_1.c3t().e2n(get_ValidateMark(), Unit_instance);
            var exceptionCall = this_1;
            this.f41_1 = exceptionCall.n3q();
            this.w8_1 = 3;
            this.v8_1 = 2;
            suspendResult = bodyAsText(this.f41_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h41_1 = suspendResult;
            this.w8_1 = 5;
            this.v8_1 = 4;
            continue $sm;
          case 3:
            this.w8_1 = 5;
            var tmp_0 = this.y8_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _unused_var__etf5q3 = this.y8_1;
              var tmp_1 = this;
              tmp_1.h41_1 = '<body failed decoding>';
              this.v8_1 = 4;
              continue $sm;
            } else {
              throw this.y8_1;
            }

          case 4:
            this.w8_1 = 5;
            var exceptionResponseText = this.h41_1;
            var tmp0_subject = this.g41_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.f41_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.f41_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.f41_1, exceptionResponseText) : new ResponseException(this.f41_1, exceptionResponseText);
            var this_2 = get_LOGGER();
            if (get_isTraceEnabled(this_2)) {
              this_2.w2t('Default response validation for ' + this.e41_1.g3t().b3t().p3t().toString() + ' failed with exception', exception);
            }

            throw exception;
          case 5:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 5) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).o40 = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.e41_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.i41(response, $completion);
    }, 1);
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.l41_1 = $this_addDefaultResponseValidation.g3s_1;
      $this$HttpResponseValidator.m41(addDefaultResponseValidation$lambda$slambda_0(null));
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
      var tmp_0 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Unit), arrayOf([]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
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
    var tmp = Phases_getInstance().s3y_1;
    _this__u8e3s4.i3p_1.a2t(tmp, defaultTransformers$slambda_0(null));
    var clientScope = _this__u8e3s4;
    var tmp_0 = Phases_getInstance_1().m3s_1;
    _this__u8e3s4.j3p_1.a2t(tmp_0, defaultTransformers$slambda_2(clientScope, null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.q41_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.o41_1 = $contentType == null ? Application_getInstance().n2v_1 : $contentType;
    this.p41_1 = fromInt($body.length);
  }
  protoOf(defaultTransformers$1$content$1).x37 = function () {
    return this.o41_1;
  };
  protoOf(defaultTransformers$1$content$1).y37 = function () {
    return this.p41_1;
  };
  protoOf(defaultTransformers$1$content$1).z37 = function () {
    return this.q41_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.u41_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.w2s_1.p3r_1.d1b('Content-Length');
    tmp.s41_1 = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.t41_1 = $contentType == null ? Application_getInstance().n2v_1 : $contentType;
  }
  protoOf(defaultTransformers$1$content$2).y37 = function () {
    return this.s41_1;
  };
  protoOf(defaultTransformers$1$content$2).x37 = function () {
    return this.t41_1;
  };
  protoOf(defaultTransformers$1$content$2).x39 = function () {
    return this.u41_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).g3q = function ($this$intercept, body, $completion) {
    var tmp = this.h3q($this$intercept, body, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(defaultTransformers$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            if (this.d42_1.w2s_1.p3r_1.d1b('Accept') == null) {
              this.d42_1.w2s_1.p3r_1.p2p('Accept', '*/*');
            }

            var contentType_0 = contentType(this.d42_1.w2s_1);
            var tmp0_subject = this.e42_1;
            var tmp_0;
            if (typeof tmp0_subject === 'string') {
              tmp_0 = new TextContent(this.e42_1, contentType_0 == null ? Text_getInstance().f2x_1 : contentType_0);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_0 = new defaultTransformers$1$content$1(contentType_0, this.e42_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_0 = new defaultTransformers$1$content$2(this.d42_1, contentType_0, this.e42_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_0 = this.e42_1;
                  } else {
                    tmp_0 = platformRequestDefaultTransform(contentType_0, this.d42_1.w2s_1, this.e42_1);
                  }
                }
              }
            }

            var content = tmp_0;
            if (!((content == null ? null : content.x37()) == null)) {
              this.d42_1.w2s_1.p3r_1.s2p('Content-Type');
              var this_0 = get_LOGGER_0();
              if (get_isTraceEnabled(this_0)) {
                this_0.v2t('Transformed with default transformers request body for ' + this.d42_1.w2s_1.n3r_1.toString() + ' from ' + toString(getKClassFromExpression(this.e42_1)));
              }
              this.v8_1 = 1;
              suspendResult = this.d42_1.a2s(content, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 2;
              continue $sm;
            }

          case 1:
            this.v8_1 = 2;
            continue $sm;
          case 2:
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
  protoOf(defaultTransformers$slambda).h3q = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.d42_1 = $this$intercept;
    i.e42_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, body, $completion) {
      return i.g3q($this$intercept, body, $completion);
    }, 2);
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.n42_1 = $body;
    this.o42_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).z3e = function ($this$writer, $completion) {
    var tmp = this.a3f($this$writer, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(defaultTransformers$slambda$slambda).r9 = function (p1, $completion) {
    return this.z3e(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 4;
            this.w8_1 = 3;
            this.v8_1 = 1;
            suspendResult = copyTo(this.n42_1, this.p42_1.w2j_1, 9223372036854775807n, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            rethrowCloseCauseIfNeeded(this.n42_1);
            this.w8_1 = 4;
            this.v8_1 = 2;
            continue $sm;
          case 2:
            this.w8_1 = 4;
            return Unit_instance;
          case 3:
            this.w8_1 = 4;
            var tmp_0 = this.y8_1;
            if (tmp_0 instanceof CancellationException) {
              var cause = this.y8_1;
              cancel(this.o42_1, cause);
              throw cause;
            } else {
              var tmp_1 = this.y8_1;
              if (tmp_1 instanceof Error) {
                var cause_0 = this.y8_1;
                cancel_0(this.o42_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.y8_1;
              }
            }

          case 4:
            throw this.y8_1;
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
  protoOf(defaultTransformers$slambda$slambda).a3f = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.n42_1, this.o42_1, completion);
    i.p42_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.z3e($this$writer, $completion);
    }, 1);
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.r1v();
      return Unit_instance;
    };
  }
  function defaultTransformers$slambda_1($clientScope, resultContinuation) {
    this.y42_1 = $clientScope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).b3r = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.c3r($this$intercept, _destruct__k2r9zo, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(defaultTransformers$slambda_1).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b3r(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 12;
            this.b43_1 = this.a43_1.ff();
            var body = this.a43_1.gf();
            if (!isInterface(body, ByteReadChannel))
              return Unit_instance;
            var response = this.z42_1.w2s_1.n3q();
            var tmp0_subject = this.b43_1.n2t_1;
            if (tmp0_subject.equals(getKClass(Unit))) {
              cancel_1(body);
              this.v8_1 = 10;
              suspendResult = this.z42_1.a2s(new HttpResponseContainer(this.b43_1, Unit_instance), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().xb())) {
                this.v8_1 = 8;
                suspendResult = readBuffer(body, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject.equals(getKClass(Source)) || tmp0_subject.equals(getKClass(Source))) {
                  this.v8_1 = 6;
                  suspendResult = readBuffer(body, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject.equals(PrimitiveClasses_getInstance().gc())) {
                    this.v8_1 = 4;
                    suspendResult = toByteArray(body, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject.equals(getKClass(ByteReadChannel))) {
                      var responseJobHolder = Job(get_job(response.z1o()));
                      var byteChannel = new ByteChannel();
                      var this_0 = writer_0(this.y42_1, VOID, byteChannel, defaultTransformers$slambda$slambda_0(body, response, null));
                      invokeOnCompletion(this_0, defaultTransformers$slambda$lambda(responseJobHolder));
                      attachJob(byteChannel, get_job(response.z1o()));
                      attachWriterJob(body, this_0);
                      var channel = this_0.b2e_1;
                      this.v8_1 = 3;
                      suspendResult = this.z42_1.a2s(new HttpResponseContainer(this.b43_1, channel), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (tmp0_subject.equals(getKClass(HttpStatusCode))) {
                        cancel_1(body);
                        this.v8_1 = 2;
                        suspendResult = this.z42_1.a2s(new HttpResponseContainer(this.b43_1, response.i3t()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        if (tmp0_subject.equals(getKClass(MultiPartData))) {
                          var tmp0 = this.z42_1.w2s_1.n3q().j32().d1b('Content-Type');
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
                          var contentType = Companion_getInstance_0().pm(rawContentType);
                          if (!contentType.z2x(MultiPart_getInstance().y2w_1)) {
                            var message_0 = 'Expected multipart/form-data, got ' + contentType.toString();
                            throw IllegalStateException_init_$Create$(toString(message_0));
                          }
                          var tmp1_safe_receiver = this.z42_1.w2s_1.n3q().j32().d1b('Content-Length');
                          var contentLength_0 = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
                          var body_0 = new CIOMultipartDataBase(this.z42_1.z1o(), body, rawContentType, contentLength_0);
                          var parsedResponse = new HttpResponseContainer(this.b43_1, body_0);
                          this.v8_1 = 1;
                          suspendResult = this.z42_1.a2s(parsedResponse, this);
                          if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                          }
                          continue $sm;
                        } else {
                          this.c43_1 = null;
                          this.v8_1 = 11;
                          continue $sm;
                        }
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.c43_1 = suspendResult;
            this.v8_1 = 11;
            continue $sm;
          case 2:
            this.c43_1 = suspendResult;
            this.v8_1 = 11;
            continue $sm;
          case 3:
            this.c43_1 = suspendResult;
            this.v8_1 = 11;
            continue $sm;
          case 4:
            var bytes = suspendResult;
            checkContentLength(contentLength(this.z42_1.w2s_1.n3q()), fromInt(bytes.length), this.z42_1.w2s_1.b3t().o3t());
            this.v8_1 = 5;
            suspendResult = this.z42_1.a2s(new HttpResponseContainer(this.b43_1, bytes), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.c43_1 = suspendResult;
            this.v8_1 = 11;
            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new HttpResponseContainer(this.b43_1, ARGUMENT);
            this.v8_1 = 7;
            suspendResult = this.z42_1.a2s(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.c43_1 = suspendResult;
            this.v8_1 = 11;
            continue $sm;
          case 8:
            var ARGUMENT_1 = suspendResult;
            var ARGUMENT_2 = readText(ARGUMENT_1);
            var ARGUMENT_3 = toInt(ARGUMENT_2);
            var ARGUMENT_4 = new HttpResponseContainer(this.b43_1, ARGUMENT_3);
            this.v8_1 = 9;
            suspendResult = this.z42_1.a2s(ARGUMENT_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.c43_1 = suspendResult;
            this.v8_1 = 11;
            continue $sm;
          case 10:
            this.c43_1 = suspendResult;
            this.v8_1 = 11;
            continue $sm;
          case 11:
            var result = this.c43_1;
            if (!(result == null)) {
              var this_1 = get_LOGGER_0();
              if (get_isTraceEnabled(this_1)) {
                this_1.v2t('Transformed with default transformers response body for ' + this.z42_1.w2s_1.b3t().p3t().toString() + ' to ' + toString(this.b43_1.n2t_1));
              }
            }

            return Unit_instance;
          case 12:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 12) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda_1).c3r = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new defaultTransformers$slambda_1(this.y42_1, completion);
    i.z42_1 = $this$intercept;
    i.a43_1 = _destruct__k2r9zo;
    return i;
  };
  function defaultTransformers$slambda_2($clientScope, resultContinuation) {
    var i = new defaultTransformers$slambda_1($clientScope, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.b3r($this$intercept, _destruct__k2r9zo, $completion);
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
    tmp.j41_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.k41_1 = ArrayList_init_$Create$();
    this.l41_1 = true;
  }
  protoOf(HttpCallValidatorConfig).m41 = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.j41_1.c1(block);
  };
  function HttpResponseValidator(_this__u8e3s4, block) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    _this__u8e3s4.v3s(get_HttpCallValidator(), block);
  }
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function RequestError$install$slambda($handler, resultContinuation) {
    this.l43_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestError$install$slambda).g3q = function ($this$intercept, it, $completion) {
    var tmp = this.h3q($this$intercept, it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(RequestError$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestError$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 5;
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.m43_1.b2s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o43_1 = suspendResult;
            this.w8_1 = 5;
            this.v8_1 = 4;
            continue $sm;
          case 2:
            this.w8_1 = 5;
            var tmp_0 = this.y8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.y8_1;
              this.v8_1 = 3;
              suspendResult = this.l43_1(HttpRequest(this.m43_1.w2s_1), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.y8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.o43_1 = Unit_instance;
            this.v8_1 = 4;
            continue $sm;
          case 4:
            this.w8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 5) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RequestError$install$slambda).h3q = function ($this$intercept, it, completion) {
    var i = new RequestError$install$slambda(this.l43_1, completion);
    i.m43_1 = $this$intercept;
    i.n43_1 = it;
    return i;
  };
  function RequestError$install$slambda_0($handler, resultContinuation) {
    var i = new RequestError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.g3q($this$intercept, it, $completion);
    }, 2);
  }
  function RequestError() {
  }
  protoOf(RequestError).p43 = function (client, handler) {
    var tmp = Phases_getInstance().p3y_1;
    client.i3p_1.a2t(tmp, RequestError$install$slambda_0(handler, null));
  };
  protoOf(RequestError).u3y = function (client, handler) {
    return this.p43(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RequestError_instance;
  function RequestError_getInstance() {
    return RequestError_instance;
  }
  function ReceiveError$install$slambda($handler, resultContinuation) {
    this.y43_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveError$install$slambda).b3r = function ($this$intercept, it, $completion) {
    var tmp = this.c3r($this$intercept, it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(ReceiveError$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b3r(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveError$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 5;
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.z43_1.b2s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b44_1 = suspendResult;
            this.w8_1 = 5;
            this.v8_1 = 4;
            continue $sm;
          case 2:
            this.w8_1 = 5;
            var tmp_0 = this.y8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.y8_1;
              this.v8_1 = 3;
              suspendResult = this.y43_1(this.z43_1.w2s_1.b3t(), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.y8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.b44_1 = Unit_instance;
            this.v8_1 = 4;
            continue $sm;
          case 4:
            this.w8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 5) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ReceiveError$install$slambda).c3r = function ($this$intercept, it, completion) {
    var i = new ReceiveError$install$slambda(this.y43_1, completion);
    i.z43_1 = $this$intercept;
    i.a44_1 = it;
    return i;
  };
  function ReceiveError$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.b3r($this$intercept, it, $completion);
    }, 2);
  }
  function ReceiveError() {
  }
  protoOf(ReceiveError).p43 = function (client, handler) {
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    client.j3p_1.z2s(Phases_getInstance_1().l3s_1, BeforeReceive);
    client.j3p_1.a2t(BeforeReceive, ReceiveError$install$slambda_0(handler, null));
  };
  protoOf(ReceiveError).u3y = function (client, handler) {
    return this.p43(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    var responseValidators = reversed($this$createClientPlugin.o3z_1.j41_1);
    var callExceptionHandlers = reversed($this$createClientPlugin.o3z_1.k41_1);
    var expectSuccess = $this$createClientPlugin.o3z_1.l41_1;
    var tmp = SetupRequest_instance;
    $this$createClientPlugin.r3z(tmp, HttpCallValidator$lambda$slambda_0(expectSuccess, null));
    var tmp_0 = Send_instance;
    $this$createClientPlugin.r3z(tmp_0, HttpCallValidator$lambda$slambda_2(responseValidators, null));
    var tmp_1 = RequestError_instance;
    $this$createClientPlugin.r3z(tmp_1, HttpCallValidator$lambda$slambda_4(callExceptionHandlers, null));
    var tmp_2 = ReceiveError_instance;
    $this$createClientPlugin.r3z(tmp_2, HttpCallValidator$lambda$slambda_6(callExceptionHandlers, null));
    return Unit_instance;
  }
  function invoke$validateResponse(responseValidators, response, $completion) {
    var tmp = new $invoke$validateResponseCOROUTINE$(responseValidators, response, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function invoke$processException(callExceptionHandlers, cause, request, $completion) {
    var tmp = new $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function HttpCallValidator$lambda$slambda$lambda($expectSuccess) {
    return function () {
      return $expectSuccess;
    };
  }
  function HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation) {
    this.h45_1 = $expectSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda).j45 = function (request, $completion) {
    var tmp = this.k45(request, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpCallValidator$lambda$slambda).r9 = function (p1, $completion) {
    return this.j45(p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          var tmp_0 = get_ExpectSuccessAttributeKey();
          this.i45_1.s3r_1.h2n(tmp_0, HttpCallValidator$lambda$slambda$lambda(this.h45_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda).k45 = function (request, completion) {
    var i = new HttpCallValidator$lambda$slambda(this.h45_1, completion);
    i.i45_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_0($expectSuccess, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation);
    return constructCallableReference(function (request, $completion) {
      return i.j45(request, $completion);
    }, 1);
  }
  function HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation) {
    this.t45_1 = $responseValidators;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_1).x45 = function ($this$on, request, $completion) {
    var tmp = this.y45($this$on, request, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpCallValidator$lambda$slambda_1).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.x45(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            this.v8_1 = 1;
            suspendResult = this.u45_1.b46(this.v45_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w45_1 = suspendResult;
            this.v8_1 = 2;
            suspendResult = invoke$validateResponse(this.t45_1, this.w45_1.n3q(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.w45_1;
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
  protoOf(HttpCallValidator$lambda$slambda_1).y45 = function ($this$on, request, completion) {
    var i = new HttpCallValidator$lambda$slambda_1(this.t45_1, completion);
    i.u45_1 = $this$on;
    i.v45_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_2($responseValidators, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.x45($this$on, request, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation) {
    this.k46_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_3).o46 = function (request, cause, $completion) {
    var tmp = this.p46(request, cause, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpCallValidator$lambda$slambda_3).p9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.o46(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.n46_1 = unwrapCancellationException(this.m46_1);
            this.v8_1 = 1;
            suspendResult = invoke$processException(this.k46_1, this.n46_1, this.l46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.n46_1;
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
  protoOf(HttpCallValidator$lambda$slambda_3).p46 = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_3(this.k46_1, completion);
    i.l46_1 = request;
    i.m46_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_4($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.o46(request, cause, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation) {
    this.y46_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_5).o46 = function (request, cause, $completion) {
    var tmp = this.p46(request, cause, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpCallValidator$lambda$slambda_5).p9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.o46(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.b47_1 = unwrapCancellationException(this.a47_1);
            this.v8_1 = 1;
            suspendResult = invoke$processException(this.y46_1, this.b47_1, this.z46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.b47_1;
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
  protoOf(HttpCallValidator$lambda$slambda_5).p46 = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_5(this.y46_1, completion);
    i.z46_1 = request;
    i.a47_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_6($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.o46(request, cause, $completion);
    }, 2);
  }
  function $invoke$validateResponseCOROUTINE$(responseValidators, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k44_1 = responseValidators;
    this.l44_1 = response;
  }
  protoOf($invoke$validateResponseCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 4;
            var this_0 = get_LOGGER_1();
            if (get_isTraceEnabled(this_0)) {
              this_0.v2t('Validating response for request ' + this.l44_1.g3t().b3t().p3t().toString());
            }

            this.m44_1 = this.k44_1.t();
            this.v8_1 = 1;
            continue $sm;
          case 1:
            if (!this.m44_1.u()) {
              this.v8_1 = 3;
              continue $sm;
            }

            var element = this.m44_1.v();
            this.v8_1 = 2;
            suspendResult = element(this.l44_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.v8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.y8_1;
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
  function $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v44_1 = callExceptionHandlers;
    this.w44_1 = cause;
    this.x44_1 = request;
  }
  protoOf($invoke$processExceptionCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 6;
            var tmp0 = get_LOGGER_1();
            var cause = this.w44_1;
            if (get_isTraceEnabled(tmp0)) {
              tmp0.w2t('Processing exception ' + toString(getKClassFromExpression(this.w44_1)) + ' for request ' + this.x44_1.p3t().toString(), cause);
            }

            this.y44_1 = this.v44_1.t();
            this.v8_1 = 1;
            continue $sm;
          case 1:
            if (!this.y44_1.u()) {
              this.v8_1 = 5;
              continue $sm;
            }

            var element = this.y44_1.v();
            if (element instanceof ExceptionHandlerWrapper) {
              this.v8_1 = 3;
              suspendResult = element.d47_1(this.w44_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (element instanceof RequestExceptionHandlerWrapper) {
                this.v8_1 = 2;
                suspendResult = element.c47_1(this.w44_1, this.x44_1, this);
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
            this.v8_1 = 4;
            continue $sm;
          case 3:
            this.v8_1 = 4;
            continue $sm;
          case 4:
            this.v8_1 = 1;
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
  function HttpRequest$1($builder) {
    this.i47_1 = $builder;
    this.e47_1 = $builder.o3r_1;
    this.f47_1 = $builder.n3r_1.c2y();
    this.g47_1 = $builder.s3r_1;
    this.h47_1 = $builder.p3r_1.c2y();
  }
  protoOf(HttpRequest$1).g3t = function () {
    // Inline function 'kotlin.error' call
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).o3t = function () {
    return this.e47_1;
  };
  protoOf(HttpRequest$1).p3t = function () {
    return this.f47_1;
  };
  protoOf(HttpRequest$1).c3t = function () {
    return this.g47_1;
  };
  protoOf(HttpRequest$1).j32 = function () {
    return this.h47_1;
  };
  protoOf(HttpRequest$1).f1b = function () {
    var tmp = this.i47_1.q3r_1;
    var tmp0_elvis_lhs = tmp instanceof OutgoingContent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Content was not transformed to OutgoingContent yet. Current body is ' + toString(this.i47_1.q3r_1);
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
      var tmp_0 = PrimitiveClasses_getInstance().ub();
      var tmp_1 = !(null == null) ? typeof null === 'boolean' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_2;
      try {
        tmp_2 = createKType(PrimitiveClasses_getInstance().ub(), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_2;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
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
    var tmp0_safe_receiver = _this__u8e3s4.m3p_1.c2n(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2n(plugin.m1());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ApplicationPluginRegistry';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Attributes);
      var tmp_0 = !(null == null) ? isInterface(null, Attributes) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Attributes), arrayOf([]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
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
    tmp.j47_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.k47_1 = LinkedHashMap_init_$Create$();
    this.l47_1 = null;
    this.m47_1 = Charsets_getInstance().z2l_1;
  }
  function RenderRequestHook$install$slambda($handler, resultContinuation) {
    this.v47_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RenderRequestHook$install$slambda).g3q = function ($this$intercept, content, $completion) {
    var tmp = this.h3q($this$intercept, content, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(RenderRequestHook$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RenderRequestHook$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 4;
            this.v8_1 = 1;
            suspendResult = this.v47_1(this.w47_1.w2s_1, this.x47_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!(result == null)) {
              this.v8_1 = 2;
              suspendResult = this.w47_1.a2s(result, this);
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
            return Unit_instance;
          case 4:
            throw this.y8_1;
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
  protoOf(RenderRequestHook$install$slambda).h3q = function ($this$intercept, content, completion) {
    var i = new RenderRequestHook$install$slambda(this.v47_1, completion);
    i.w47_1 = $this$intercept;
    i.x47_1 = content;
    return i;
  };
  function RenderRequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RenderRequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.g3q($this$intercept, content, $completion);
    }, 2);
  }
  function RenderRequestHook() {
  }
  protoOf(RenderRequestHook).y47 = function (client, handler) {
    var tmp = Phases_getInstance().s3y_1;
    client.i3p_1.a2t(tmp, RenderRequestHook$install$slambda_0(handler, null));
  };
  protoOf(RenderRequestHook).u3y = function (client, handler) {
    return this.y47(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    var this_0 = toList($this$createClientPlugin.o3z_1.k47_1);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$1);
    var responseCharsetFallback = $this$createClientPlugin.o3z_1.m47_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this$createClientPlugin.o3z_1.j47_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!$this$createClientPlugin.o3z_1.k47_1.q2(element)) {
        destination.c1(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda$lambda_0;
    var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$6);
    var tmp_1;
    var tmp0_0 = $this$createClientPlugin.o3z_1.j47_1;
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
        if (!element_0.equals(Charsets_getInstance().z2l_1)) {
          tmp$ret$7 = true;
          break $l$block_0;
        }
      }
      tmp$ret$7 = false;
    }
    if (tmp$ret$7) {
      tmp_1 = true;
    } else {
      var tmp0_1 = $this$createClientPlugin.o3z_1.k47_1.t2();
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
          if (!element_1.equals(Charsets_getInstance().z2l_1)) {
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
        var charset = element_3.ff();
        var quality = element_3.gf();
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
    var tmp0_elvis_lhs = $this$createClientPlugin.o3z_1.l47_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_5;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = firstOrNull(withQuality);
      tmp_5 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.df_1;
    } else {
      tmp_5 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_5;
    var requestCharset = tmp3_elvis_lhs == null ? Charsets_getInstance().z2l_1 : tmp3_elvis_lhs;
    var tmp_6 = RenderRequestHook_instance;
    $this$createClientPlugin.r3z(tmp_6, HttpPlainText$lambda$slambda_0(acceptCharsetHeader, requestCharset, null));
    $this$createClientPlugin.z47(HttpPlainText$lambda$slambda_2(responseCharsetFallback, null));
    return Unit_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.a48_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).dd = function (a, b) {
    return this.a48_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.dd(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).i3 = function () {
    return this.a48_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.i3(), other.i3());
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
    return hashCode(this.i3());
  };
  function HttpPlainText$lambda$lambda(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.ef_1;
    var tmp$ret$2 = a.ef_1;
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
    var contentType = requestContentType == null ? Text_getInstance().f2x_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? requestCharset : tmp2_elvis_lhs;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Sending request body to ' + request.n3r_1.toString() + ' as text/plain with charset ' + charset_0.toString();
      this_0.v2t(tmp$ret$1);
    }
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function invoke$read(responseCharsetFallback, call, body) {
    var tmp0_elvis_lhs = charset_0(call.n3q());
    var actualCharset = tmp0_elvis_lhs == null ? responseCharsetFallback : tmp0_elvis_lhs;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Reading response body for ' + call.b3t().p3t().toString() + ' as String with charset ' + actualCharset.toString();
      this_0.v2t(tmp$ret$1);
    }
    return readText_0(body, actualCharset);
  }
  function invoke$addAcceptCharsetHeader(_this__u8e3s4, value) {
    if (value == null || !(_this__u8e3s4.p3r_1.d1b('Accept-Charset') == null))
      return Unit_instance;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Adding Accept-Charset=' + value + ' to ' + _this__u8e3s4.n3r_1.toString();
      this_0.v2t(tmp$ret$1);
    }
    _this__u8e3s4.p3r_1.n2p('Accept-Charset', value);
  }
  function HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation) {
    this.j48_1 = $acceptCharsetHeader;
    this.k48_1 = $requestCharset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda).n48 = function (request, content, $completion) {
    var tmp = this.o48(request, content, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpPlainText$lambda$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.n48(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          invoke$addAcceptCharsetHeader(this.l48_1, this.j48_1);
          var tmp_0 = this.m48_1;
          if (!(typeof tmp_0 === 'string'))
            return null;
          var contentType_0 = contentType(this.l48_1);
          if (!(contentType_0 == null) && !(contentType_0.w2x_1 === Text_getInstance().f2x_1.w2x_1)) {
            return null;
          }
          return invoke$wrapContent(this.k48_1, this.l48_1, this.m48_1, contentType_0);
        } else if (tmp === 1) {
          throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda).o48 = function (request, content, completion) {
    var i = new HttpPlainText$lambda$slambda(this.j48_1, this.k48_1, completion);
    i.l48_1 = request;
    i.m48_1 = content;
    return i;
  };
  function HttpPlainText$lambda$slambda_0($acceptCharsetHeader, $requestCharset, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.n48(request, content, $completion);
    }, 2);
  }
  function HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation) {
    this.x48_1 = $responseCharsetFallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda_1).c49 = function ($this$transformResponseBody, response, content, requestedType, $completion) {
    var tmp = this.d49($this$transformResponseBody, response, content, requestedType, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpPlainText$lambda$slambda_1).e49 = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.c49(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda_1).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            if (!this.b49_1.n2t_1.equals(PrimitiveClasses_getInstance().cc()))
              return null;
            this.v8_1 = 1;
            suspendResult = readBuffer(this.a49_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return invoke$read(this.x48_1, this.z48_1.g3t(), bodyBytes);
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
  protoOf(HttpPlainText$lambda$slambda_1).d49 = function ($this$transformResponseBody, response, content, requestedType, completion) {
    var i = new HttpPlainText$lambda$slambda_1(this.x48_1, completion);
    i.y48_1 = $this$transformResponseBody;
    i.z48_1 = response;
    i.a49_1 = content;
    i.b49_1 = requestedType;
    return i;
  };
  function HttpPlainText$lambda$slambda_2($responseCharsetFallback, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation);
    return constructCallableReference(function ($this$transformResponseBody, response, content, requestedType, $completion) {
      return i.c49($this$transformResponseBody, response, content, requestedType, $completion);
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
    this.f49_1 = true;
    this.g49_1 = false;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.i35_1;
    return tmp0_subject === Companion_getInstance_1().q33_1.i35_1 || tmp0_subject === Companion_getInstance_1().r33_1.i35_1 || (tmp0_subject === Companion_getInstance_1().w33_1.i35_1 || (tmp0_subject === Companion_getInstance_1().x33_1.i35_1 || tmp0_subject === Companion_getInstance_1().s33_1.i35_1)) ? true : false;
  }
  function removeDotSegments(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = _this__u8e3s4.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (element === '.' || element === '..') {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    if (tmp$ret$0)
      return _this__u8e3s4;
    var segments = firstOrNull(_this__u8e3s4) === '' ? _this__u8e3s4 : plus_0(listOf(''), _this__u8e3s4);
    var output = ArrayList_init_$Create$_0(segments.d1());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s_0 = segments.t();
    while (_iterator__ex2g4s_0.u()) {
      var item = _iterator__ex2g4s_0.v();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var isLast = checkIndexOverflow(_unary__edvuaz) === get_lastIndex(segments);
      switch (item) {
        case '.':
          if (isLast) {
            output.c1('');
          }

          break;
        case '..':
          if (output.d1() > 1) {
            output.y2(get_lastIndex(output));
          }

          if (isLast) {
            output.c1('');
          }

          break;
        default:
          output.c1(item);
          break;
      }
    }
    return output;
  }
  function HttpRedirectConfig$_init_$ref_rhym9t() {
    return constructCallableReference(function () {
      return new HttpRedirectConfig();
    }, 0, 0, 26, '<init>');
  }
  function HttpRedirect$lambda($this$createClientPlugin) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var checkHttpMethod = $this$createClientPlugin.o3z_1.f49_1;
    var allowHttpsDowngrade = $this$createClientPlugin.o3z_1.g49_1;
    var tmp = Send_instance;
    $this$createClientPlugin.r3z(tmp, HttpRedirect$lambda$slambda_0(checkHttpMethod, allowHttpsDowngrade, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$handleCall(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    this.e4a_1 = $checkHttpMethod;
    this.f4a_1 = $allowHttpsDowngrade;
    this.g4a_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$lambda$slambda).x45 = function ($this$on, request, $completion) {
    var tmp = this.y45($this$on, request, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpRedirect$lambda$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.x45(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            this.v8_1 = 1;
            suspendResult = this.h4a_1.b46(this.i4a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var origin = suspendResult;
            if (this.e4a_1 && !get_ALLOWED_FOR_REDIRECT().i2(origin.b3t().o3t())) {
              return origin;
            }

            this.v8_1 = 2;
            suspendResult = invoke$handleCall(this.h4a_1, this.i4a_1, origin, this.f4a_1, this.g4a_1.n3z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(HttpRedirect$lambda$slambda).y45 = function ($this$on, request, completion) {
    var i = new HttpRedirect$lambda$slambda(this.e4a_1, this.f4a_1, this.g4a_1, completion);
    i.h4a_1 = $this$on;
    i.i4a_1 = request;
    return i;
  };
  function HttpRedirect$lambda$slambda_0($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    var i = new HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.x45($this$on, request, $completion);
    }, 2);
  }
  function $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p49_1 = _this__u8e3s4;
    this.q49_1 = context;
    this.r49_1 = origin;
    this.s49_1 = allowHttpsDowngrade;
    this.t49_1 = client;
  }
  protoOf($invoke$handleCallCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            this.u49_1 = this.r49_1;
            this.v49_1 = this.q49_1;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.v8_1 = 4;
              continue $sm;
            }

            var previousProtocol = this.u49_1.b3t().p3t().n36_1;
            var previousAuthority = get_authority(this.u49_1.b3t().p3t());
            if (!isRedirect(this.u49_1.n3q().i3t()))
              return this.u49_1;
            var location = this.u49_1.n3q().j32().d1b('Location');
            if (location == null) {
              get_LOGGER_3().t2t('Location header missing from redirect response ' + this.u49_1.b3t().p3t().toString() + '; returning response as is');
              return this.u49_1;
            }

            this.t49_1.o3p_1.k3a(get_HttpResponseRedirectEvent(), this.u49_1.n3q());
            var this_0 = get_LOGGER_3();
            if (get_isTraceEnabled(this_0)) {
              this_0.v2t('Received redirect response to ' + location + ' for request ' + this.u49_1.b3t().p3t().toString());
            }

            var tmp_0 = this;
            var this_1 = new HttpRequestBuilder();
            this_1.h3x(this.v49_1);
            this_1.n3r_1.x35_1.v2();
            takeFrom(this_1.n3r_1, location);
            var this_2 = substringBefore(substringBefore(location, _Char___init__impl__6a9atx(35)), _Char___init__impl__6a9atx(63));
            if (charSequenceLength(this_2) > 0) {
              this_1.n3r_1.v35_1 = removeDotSegments(this_1.n3r_1.v35_1);
            }

            if (!this.s49_1 && isSecure(previousProtocol) && !isSecure(this_1.n3r_1.a36())) {
              var this_3 = get_LOGGER_3();
              if (get_isTraceEnabled(this_3)) {
                this_3.v2t('Blocked redirect from ' + this.u49_1.b3t().p3t().toString() + ' to ' + location + ' due to HTTPS downgrade');
              }
              return this.u49_1;
            }

            if (!(previousAuthority === get_authority_0(this_1.n3r_1))) {
              this_1.p3r_1.s2p('Authorization');
              var this_4 = get_LOGGER_3();
              if (get_isTraceEnabled(this_4)) {
                this_4.v2t('Removing Authorization header for cross-authority redirect: ' + (previousAuthority + ' -> ' + this_1.n3r_1.k37()));
              }
            }

            tmp_0.v49_1 = this_1;
            this.v8_1 = 2;
            suspendResult = this.p49_1.b46(this.v49_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u49_1 = suspendResult;
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
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().k32_1, Companion_getInstance_2().p32_1]);
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
    this.r4a_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            var tmp0 = this.r4a_1.v4a_1;
            this.v8_1 = 1;
            suspendResult = tmp0.b2s(this);
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
  function PipelineContext$proceed$ref(p0) {
    KFunctionImpl.call(this, 9, 1, 27);
    this.v4a_1 = p0;
  }
  protoOf(PipelineContext$proceed$ref).v2j = function ($completion) {
    var tmp = new $invokeCOROUTINE$(this, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(PipelineContext$proceed$ref).q9 = function ($completion) {
    return this.v2j($completion);
  };
  function PipelineContext$proceed$ref_0(p0) {
    var i = new PipelineContext$proceed$ref(p0);
    return constructCallableReference(function ($completion) {
      return i.v2j($completion);
    }, 0, 9, 27, VOID, [p0]);
  }
  function SetupRequestContext$install$slambda($handler, resultContinuation) {
    this.e4b_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequestContext$install$slambda).g3q = function ($this$intercept, it, $completion) {
    var tmp = this.h3q($this$intercept, it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(SetupRequestContext$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequestContext$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.e4b_1(this.f4b_1.w2s_1, PipelineContext$proceed$ref_0(this.f4b_1), this);
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
  protoOf(SetupRequestContext$install$slambda).h3q = function ($this$intercept, it, completion) {
    var i = new SetupRequestContext$install$slambda(this.e4b_1, completion);
    i.f4b_1 = $this$intercept;
    i.g4b_1 = it;
    return i;
  };
  function SetupRequestContext$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequestContext$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.g3q($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequestContext() {
  }
  protoOf(SetupRequestContext).h4b = function (client, handler) {
    var tmp = Phases_getInstance().p3y_1;
    client.i3p_1.a2t(tmp, SetupRequestContext$install$slambda_0(handler, null));
  };
  protoOf(SetupRequestContext).u3y = function (client, handler) {
    return this.h4b(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SetupRequestContext_instance;
  function SetupRequestContext_getInstance() {
    return SetupRequestContext_instance;
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.b1q(attachToClientEngineJob$lambda(requestJob));
    requestJob.b1q(attachToClientEngineJob$lambda_0(handler));
  }
  function HttpRequestLifecycle$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var tmp = SetupRequestContext_instance;
    $this$createClientPlugin.r3z(tmp, HttpRequestLifecycle$lambda$slambda_0($this$createClientPlugin, null));
    return Unit_instance;
  }
  function HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation) {
    this.q4b_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$lambda$slambda).u4b = function (request, proceed, $completion) {
    var tmp = this.v4b(request, proceed, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.u4b(tmp, (!(p2 == null) ? isSuspendFunction(p2, 0) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 6;
            this.t4b_1 = SupervisorJob(this.r4b_1.r3r_1);
            attachToClientEngineJob(this.t4b_1, ensureNotNull(this.q4b_1.n3z_1.h3p_1.i9(Key_instance)));
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.w8_1 = 4;
            this.w8_1 = 3;
            this.r4b_1.r3r_1 = this.t4b_1;
            this.v8_1 = 2;
            suspendResult = this.s4b_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w8_1 = 6;
            this.v8_1 = 5;
            continue $sm;
          case 3:
            this.w8_1 = 4;
            var tmp_0 = this.y8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.y8_1;
              this.t4b_1.q1v(cause);
              throw cause;
            } else {
              throw this.y8_1;
            }

          case 4:
            this.w8_1 = 6;
            var t = this.y8_1;
            this.t4b_1.r1v();
            throw t;
          case 5:
            this.w8_1 = 6;
            this.t4b_1.r1v();
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
  protoOf(HttpRequestLifecycle$lambda$slambda).v4b = function (request, proceed, completion) {
    var i = new HttpRequestLifecycle$lambda$slambda(this.q4b_1, completion);
    i.r4b_1 = request;
    i.s4b_1 = proceed;
    return i;
  };
  function HttpRequestLifecycle$lambda$slambda_0($this_createClientPlugin, resultContinuation) {
    var i = new HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation);
    return constructCallableReference(function (request, proceed, $completion) {
      return i.u4b(request, proceed, $completion);
    }, 2);
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      if (!(cause == null)) {
        // Inline function 'io.ktor.util.logging.trace' call
        var this_0 = get_LOGGER_4();
        if (get_isTraceEnabled(this_0)) {
          var tmp$ret$1 = 'Cancelling request because engine Job failed with error';
          this_0.w2t(tmp$ret$1, cause);
        }
        cancel_2($requestJob, 'Engine failed', cause);
      } else {
        get_LOGGER_4().v2t('Cancelling request because engine Job completed');
        $requestJob.r1v();
      }
      return Unit_instance;
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.k1s();
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
    this.w4b_1 = request;
    this.x4b_1 = retryCount;
    this.y4b_1 = response;
    this.z4b_1 = cause;
  }
  function randomMs($this, randomizationMs) {
    return randomizationMs === 0n ? 0n : Default_getInstance().mh(randomizationMs);
  }
  function HttpRequestRetryConfig$delay$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetryConfig$delay$slambda).j4c = function (it, $completion) {
    var tmp = this.k4c(it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).r9 = function (p1, $completion) {
    return this.j4c((!(p1 == null) ? typeof p1 === 'bigint' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = delay(this.i4c_1, this);
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
  protoOf(HttpRequestRetryConfig$delay$slambda).k4c = function (it, completion) {
    var i = new HttpRequestRetryConfig$delay$slambda(completion);
    i.i4c_1 = it;
    return i;
  };
  function HttpRequestRetryConfig$delay$slambda_0(resultContinuation) {
    var i = new HttpRequestRetryConfig$delay$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.j4c(it, $completion);
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
    var it = response.i3t().i35_1;
    return 500 <= it ? it <= 599 : false;
  }
  function HttpRequestRetryConfig$delayMillis$lambda($respectRetryAfterHeader, $block) {
    return function (_this__u8e3s4, it) {
      var tmp;
      if ($respectRetryAfterHeader) {
        var tmp0_safe_receiver = _this__u8e3s4.m4c_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j32();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d1b('Retry-After');
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
    tmp.r4c_1 = HttpRequestRetryConfig$delay$slambda_0(null);
    var tmp_0 = this;
    tmp_0.s4c_1 = HttpRequestRetryConfig$modifyRequest$lambda;
    this.t4c_1 = 0;
    this.u4c(3);
    this.v4c();
  }
  protoOf(HttpRequestRetryConfig).w4c = function () {
    var tmp = this.o4c_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetry');
    }
  };
  protoOf(HttpRequestRetryConfig).x4c = function () {
    var tmp = this.p4c_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetryOnException');
    }
  };
  protoOf(HttpRequestRetryConfig).y4c = function () {
    var tmp = this.q4c_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('delayMillis');
    }
  };
  protoOf(HttpRequestRetryConfig).z4c = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.t4c_1 = maxRetries;
    this.o4c_1 = block;
  };
  protoOf(HttpRequestRetryConfig).a4d = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.t4c_1 = maxRetries;
    this.p4c_1 = block;
  };
  protoOf(HttpRequestRetryConfig).b4d = function (maxRetries, retryOnTimeout) {
    this.a4d(maxRetries, HttpRequestRetryConfig$retryOnException$lambda(retryOnTimeout));
  };
  protoOf(HttpRequestRetryConfig).c4d = function (maxRetries, retryOnTimeout, $super) {
    maxRetries = maxRetries === VOID ? -1 : maxRetries;
    retryOnTimeout = retryOnTimeout === VOID ? false : retryOnTimeout;
    var tmp;
    if ($super === VOID) {
      this.b4d(maxRetries, retryOnTimeout);
      tmp = Unit_instance;
    } else {
      tmp = $super.b4d.call(this, maxRetries, retryOnTimeout);
    }
    return tmp;
  };
  protoOf(HttpRequestRetryConfig).d4d = function (maxRetries) {
    this.z4c(maxRetries, HttpRequestRetryConfig$retryOnServerErrors$lambda);
  };
  protoOf(HttpRequestRetryConfig).u4c = function (maxRetries) {
    this.d4d(maxRetries);
    this.c4d(maxRetries);
  };
  protoOf(HttpRequestRetryConfig).e4d = function (respectRetryAfterHeader, block) {
    var tmp = this;
    tmp.q4c_1 = HttpRequestRetryConfig$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  protoOf(HttpRequestRetryConfig).f4d = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
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
    this.e4d(respectRetryAfterHeader, HttpRequestRetryConfig$exponentialDelay$lambda(base, baseDelayMs, maxDelayMs, this, randomizationMs));
  };
  protoOf(HttpRequestRetryConfig).v4c = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader, $super) {
    base = base === VOID ? 2.0 : base;
    baseDelayMs = baseDelayMs === VOID ? 1000n : baseDelayMs;
    maxDelayMs = maxDelayMs === VOID ? 60000n : maxDelayMs;
    randomizationMs = randomizationMs === VOID ? 1000n : randomizationMs;
    respectRetryAfterHeader = respectRetryAfterHeader === VOID ? true : respectRetryAfterHeader;
    var tmp;
    if ($super === VOID) {
      this.f4d(base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
      tmp = Unit_instance;
    } else {
      tmp = $super.f4d.call(this, base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
    }
    return tmp;
  };
  function HttpRetryShouldRetryContext(retryCount) {
    this.g4d_1 = retryCount;
  }
  function HttpRetryDelayContext(request, response, cause) {
    this.l4c_1 = request;
    this.m4c_1 = response;
    this.n4c_1 = cause;
  }
  function HttpRetryModifyRequestContext(request, response, cause, retryCount) {
    this.h4d_1 = request;
    this.i4d_1 = response;
    this.j4d_1 = cause;
    this.k4d_1 = retryCount;
  }
  function throwOnInvalidResponseBody(_this__u8e3s4, $completion) {
    var tmp = new $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
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
    var shouldRetry = $this$createClientPlugin.o3z_1.w4c();
    var shouldRetryOnException = $this$createClientPlugin.o3z_1.x4c();
    var delayMillis = $this$createClientPlugin.o3z_1.y4c();
    var delay = $this$createClientPlugin.o3z_1.r4c_1;
    var maxRetries = $this$createClientPlugin.o3z_1.t4c_1;
    var modifyRequest = $this$createClientPlugin.o3z_1.s4c_1;
    $this$createClientPlugin.x4d(HttpRequestRetry$lambda$slambda_0(maxRetries, null));
    var tmp = Send_instance;
    $this$createClientPlugin.r3z(tmp, HttpRequestRetry$lambda$slambda_2(shouldRetry, shouldRetryOnException, maxRetries, delayMillis, modifyRequest, $this$createClientPlugin, delay, null));
    return Unit_instance;
  }
  function HttpRequestRetry$lambda$prepareRequest$lambda($subRequest) {
    return function (cause) {
      var tmp = $subRequest.r3r_1;
      var subRequestJob = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
      if (cause == null) {
        subRequestJob.r1v();
      } else {
        subRequestJob.q1v(cause);
      }
      return Unit_instance;
    };
  }
  function invoke$shouldRetry(retryCount, maxRetries, shouldRetry, call) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), call.b3t(), call.n3q());
  }
  function invoke$shouldRetryOnException(retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), subRequest, cause);
  }
  function invoke$prepareRequest(request) {
    var subRequest = (new HttpRequestBuilder()).y4d(request);
    var tmp = request.r3r_1;
    tmp.b1q(HttpRequestRetry$lambda$prepareRequest$lambda(subRequest));
    return subRequest;
  }
  function HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation) {
    this.h4e_1 = $maxRetries;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda).l4e = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
    var tmp = this.m4e($this$onRequest, request, _unused_var__etf5q3, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpRequestRetry$lambda$slambda).n4e = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof OnRequestContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    return this.l4e(tmp, tmp_0, !(p3 == null) ? p3 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
          var tmp0_elvis_lhs = this.j4e_1.s3r_1.c2n(get_MaxRetriesPerRequestAttributeKey());
          var maxRetriesValue = tmp0_elvis_lhs == null ? this.h4e_1 : tmp0_elvis_lhs;
          this.j4e_1.s3r_1.e2n(get_MaxRetriesPerRequestAttributeKey(), maxRetriesValue);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda).m4e = function ($this$onRequest, request, _unused_var__etf5q3, completion) {
    var i = new HttpRequestRetry$lambda$slambda(this.h4e_1, completion);
    i.i4e_1 = $this$onRequest;
    i.j4e_1 = request;
    i.k4e_1 = _unused_var__etf5q3;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_0($maxRetries, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation);
    return constructCallableReference(function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
      return i.l4e($this$onRequest, request, _unused_var__etf5q3, $completion);
    }, 3);
  }
  function HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    this.w4e_1 = $shouldRetry;
    this.x4e_1 = $shouldRetryOnException;
    this.y4e_1 = $maxRetries;
    this.z4e_1 = $delayMillis;
    this.a4f_1 = $modifyRequest;
    this.b4f_1 = $this_createClientPlugin;
    this.c4f_1 = $delay;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda_1).x45 = function ($this$on, request, $completion) {
    var tmp = this.y45($this$on, request, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.x45(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 8;
            this.g4f_1 = 0;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.e4f_1.s3r_1.c2n(get_ShouldRetryPerRequestAttributeKey());
            tmp_0.n4f_1 = tmp0_elvis_lhs == null ? this.w4e_1 : tmp0_elvis_lhs;
            var tmp_1 = this;
            var tmp1_elvis_lhs = this.e4f_1.s3r_1.c2n(get_ShouldRetryOnExceptionPerRequestAttributeKey());
            tmp_1.l4f_1 = tmp1_elvis_lhs == null ? this.x4e_1 : tmp1_elvis_lhs;
            var tmp_2 = this;
            var tmp2_elvis_lhs = this.e4f_1.s3r_1.c2n(get_MaxRetriesPerRequestAttributeKey());
            tmp_2.m4f_1 = tmp2_elvis_lhs == null ? this.y4e_1 : tmp2_elvis_lhs;
            var tmp_3 = this;
            var tmp3_elvis_lhs = this.e4f_1.s3r_1.c2n(get_RetryDelayPerRequestAttributeKey());
            tmp_3.h4f_1 = tmp3_elvis_lhs == null ? this.z4e_1 : tmp3_elvis_lhs;
            var tmp_4 = this;
            var tmp4_elvis_lhs = this.e4f_1.s3r_1.c2n(get_ModifyRequestPerRequestAttributeKey());
            tmp_4.o4f_1 = tmp4_elvis_lhs == null ? this.a4f_1 : tmp4_elvis_lhs;
            this.i4f_1 = null;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.v8_1 = 9;
              continue $sm;
            }

            this.k4f_1 = invoke$prepareRequest(this.e4f_1);
            this.w8_1 = 5;
            if (!(this.i4f_1 == null)) {
              var modifyRequestContext = new HttpRetryModifyRequestContext(this.e4f_1, this.i4f_1.y4b_1, this.i4f_1.z4b_1, this.i4f_1.x4b_1);
              this.o4f_1(modifyRequestContext, this.k4f_1);
            }

            this.v8_1 = 2;
            suspendResult = this.d4f_1.b46(this.k4f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f4f_1 = suspendResult;
            if (!invoke$shouldRetry(this.g4f_1, this.m4f_1, this.n4f_1, this.f4f_1)) {
              this.v8_1 = 4;
              suspendResult = throwOnInvalidResponseBody(this.f4f_1.n3q(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 3;
              continue $sm;
            }

          case 3:
            var tmp_5 = this;
            this.g4f_1 = this.g4f_1 + 1 | 0;
            tmp_5.j4f_1 = new HttpRetryEventData(this.k4f_1, this.g4f_1, this.f4f_1.n3q(), null);
            this.w8_1 = 8;
            this.v8_1 = 6;
            continue $sm;
          case 4:
            this.w8_1 = 8;
            this.v8_1 = 9;
            continue $sm;
          case 5:
            this.w8_1 = 8;
            var tmp_6 = this.y8_1;
            if (tmp_6 instanceof Error) {
              var cause = this.y8_1;
              var tmp_7 = this;
              if (!invoke$shouldRetryOnException(this.g4f_1, this.m4f_1, this.l4f_1, this.k4f_1, cause)) {
                throw cause;
              }
              this.g4f_1 = this.g4f_1 + 1 | 0;
              tmp_7.j4f_1 = new HttpRetryEventData(this.k4f_1, this.g4f_1, null, cause);
              this.v8_1 = 6;
              continue $sm;
            } else {
              throw this.y8_1;
            }

          case 6:
            this.w8_1 = 8;
            var retryData = this.j4f_1;
            this.i4f_1 = retryData;
            this.b4f_1.n3z_1.o3p_1.k3a(get_HttpRequestRetryEvent(), this.i4f_1);
            var delayContext = new HttpRetryDelayContext(this.i4f_1.w4b_1, this.i4f_1.y4b_1, this.i4f_1.z4b_1);
            this.v8_1 = 7;
            suspendResult = this.c4f_1(this.h4f_1(delayContext, this.g4f_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var this_0 = get_LOGGER_5();
            if (get_isTraceEnabled(this_0)) {
              this_0.v2t('Retrying request ' + this.e4f_1.n3r_1.toString() + ' attempt: ' + this.g4f_1);
            }

            this.v8_1 = 1;
            continue $sm;
          case 8:
            throw this.y8_1;
          case 9:
            return this.f4f_1;
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
  protoOf(HttpRequestRetry$lambda$slambda_1).y45 = function ($this$on, request, completion) {
    var i = new HttpRequestRetry$lambda$slambda_1(this.w4e_1, this.x4e_1, this.y4e_1, this.z4e_1, this.a4f_1, this.b4f_1, this.c4f_1, completion);
    i.d4f_1 = $this$on;
    i.e4f_1 = request;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_2($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.x45($this$on, request, $completion);
    }, 2);
  }
  function $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t4d_1 = _this__u8e3s4;
  }
  protoOf($throwOnInvalidResponseBodyCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 6;
            if (get_isSaved(this.t4d_1)) {
              this.u4d_1 = this.t4d_1.h3t();
              this.v8_1 = 1;
              continue $sm;
            } else {
              this.v4d_1 = false;
              this.v8_1 = 4;
              continue $sm;
            }

          case 1:
            this.w8_1 = 5;
            this.v8_1 = 2;
            suspendResult = this.u4d_1.h2c(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w4d_1 = suspendResult;
            this.w8_1 = 6;
            this.v8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.w4d_1;
            this.w8_1 = 6;
            var this_0 = this.u4d_1;
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
              get_LOGGER_5().u2t('Failed to close response body channel', tmp0_safe_receiver);
            }

            this.v4d_1 = tmp_0;
            this.v8_1 = 4;
            continue $sm;
          case 4:
            return this.v4d_1;
          case 5:
            this.w8_1 = 6;
            var t = this.y8_1;
            var this_2 = this.u4d_1;
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
              get_LOGGER_5().u2t('Failed to close response body channel', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.y8_1;
        }
      } catch ($p_1) {
        var e_1 = $p_1;
        if (this.w8_1 === 6) {
          throw e_1;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e_1;
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
      var tmp_0 = PrimitiveClasses_getInstance().xb();
      var tmp_1 = !(null == null) ? typeof null === 'number' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_2;
      try {
        tmp_2 = createKType(PrimitiveClasses_getInstance().xb(), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_2;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
      MaxRetriesPerRequestAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ShouldRetryPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_4 = PrimitiveClasses_getInstance().functionClass(3);
      var tmp_5 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_6;
      try {
        tmp_6 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequest_0), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpResponse), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ub(), arrayOf([]), false))]), false);
      } catch ($p_0) {
        var tmp_7;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_7 = null;
        } else {
          throw $p_0;
        }
        tmp_6 = tmp_7;
      }
      var tmp$ret$2_0 = tmp_6;
      var tmp$ret$1_0 = new TypeInfo(tmp_4, tmp_5, tmp$ret$2_0);
      ShouldRetryPerRequestAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_1 = 'ShouldRetryOnExceptionPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_8 = PrimitiveClasses_getInstance().functionClass(3);
      var tmp_9 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_10;
      try {
        tmp_10 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().dc(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ub(), arrayOf([]), false))]), false);
      } catch ($p_1) {
        var tmp_11;
        if ($p_1 instanceof Error) {
          var _unused_var__etf5q3_1 = $p_1;
          tmp_11 = null;
        } else {
          throw $p_1;
        }
        tmp_10 = tmp_11;
      }
      var tmp$ret$2_1 = tmp_10;
      var tmp$ret$1_1 = new TypeInfo(tmp_8, tmp_9, tmp$ret$2_1);
      ShouldRetryOnExceptionPerRequestAttributeKey = new AttributeKey(name_1, tmp$ret$1_1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_2 = 'ModifyRequestPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_12 = PrimitiveClasses_getInstance().functionClass(2);
      var tmp_13 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_14;
      try {
        tmp_14 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryModifyRequestContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Unit), arrayOf([]), false))]), false);
      } catch ($p_2) {
        var tmp_15;
        if ($p_2 instanceof Error) {
          var _unused_var__etf5q3_2 = $p_2;
          tmp_15 = null;
        } else {
          throw $p_2;
        }
        tmp_14 = tmp_15;
      }
      var tmp$ret$2_2 = tmp_14;
      var tmp$ret$1_2 = new TypeInfo(tmp_12, tmp_13, tmp$ret$2_2);
      ModifyRequestPerRequestAttributeKey = new AttributeKey(name_2, tmp$ret$1_2);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_3 = 'RetryDelayPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_16 = PrimitiveClasses_getInstance().functionClass(2);
      var tmp_17 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_18;
      try {
        tmp_18 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryDelayContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().yb(), arrayOf([]), false))]), false);
      } catch ($p_3) {
        var tmp_19;
        if ($p_3 instanceof Error) {
          var _unused_var__etf5q3_3 = $p_3;
          tmp_19 = null;
        } else {
          throw $p_3;
        }
        tmp_18 = tmp_19;
      }
      var tmp$ret$2_3 = tmp_18;
      var tmp$ret$1_3 = new TypeInfo(tmp_16, tmp_17, tmp$ret$2_3);
      RetryDelayPerRequestAttributeKey = new AttributeKey(name_3, tmp$ret$1_3);
    }
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.x4f_1 = $plugin;
    this.y4f_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).g3q = function ($this$intercept, content, $completion) {
    var tmp = this.h3q($this$intercept, content, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpSend$Plugin$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            var tmp_0 = this.a4g_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + toString(getKClassFromExpression(this.a4g_1)) + ', with Content-Type: ' + toString_0(contentType(this.z4f_1.w2s_1)) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0 = this.z4f_1.w2s_1;
            var body = this.a4g_1;
            if (body == null) {
              tmp0.q3r_1 = NullBody_instance;
              var tmp_1 = getKClass(OutgoingContent);
              var tmp_2 = null instanceof OutgoingContent;
              var tmp_3;
              try {
                tmp_3 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              tmp0.i3x(new TypeInfo(tmp_1, tmp_2, tmp_3));
            } else {
              if (body instanceof OutgoingContent) {
                tmp0.q3r_1 = body;
                tmp0.i3x(null);
              } else {
                tmp0.q3r_1 = body;
                var tmp_5 = getKClass(OutgoingContent);
                var tmp_6 = null instanceof OutgoingContent;
                var tmp_7;
                try {
                  tmp_7 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_8;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_8 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_7 = tmp_8;
                }
                tmp0.i3x(new TypeInfo(tmp_5, tmp_6, tmp_7));
              }
            }

            var maxRetries = this.z4f_1.w2s_1.s3r_1.c2n(get_MaxRetriesPerRequestAttributeKey());
            var tmp_9;
            if (!(maxRetries == null) && maxRetries >= this.x4f_1.b4g_1) {
              var tmp_10;
              if (maxRetries < 2147483647) {
                tmp_10 = maxRetries + 1 | 0;
              } else {
                tmp_10 = maxRetries;
              }
              tmp_9 = tmp_10;
            } else {
              tmp_9 = this.x4f_1.b4g_1;
            }

            var maxSendCount = tmp_9;
            var realSender = new DefaultSender(maxSendCount, this.y4f_1);
            var interceptedSender = realSender;
            var _iterator__ex2g4s = reversed(this.x4f_1.c4g_1).t();
            while (_iterator__ex2g4s.u()) {
              var interceptor = _iterator__ex2g4s.v();
              interceptedSender = new InterceptedSender(interceptor, interceptedSender);
            }

            this.v8_1 = 1;
            suspendResult = interceptedSender.d4g(this.z4f_1.w2s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var call = suspendResult;
            this.v8_1 = 2;
            suspendResult = this.z4f_1.a2s(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.y8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.w8_1 === 3) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpSend$Plugin$install$slambda).h3q = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.x4f_1, this.y4f_1, completion);
    i.z4f_1 = $this$intercept;
    i.a4g_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.g3q($this$intercept, content, $completion);
    }, 2);
  }
  function $executeCOROUTINE$_0(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m4g_1 = _this__u8e3s4;
    this.n4g_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$_0).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            var tmp0_safe_receiver = this.m4g_1.r4g_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.m4g_1.q4g_1 >= this.m4g_1.o4g_1) {
              throw new SendCountExceedException('Max send count ' + this.m4g_1.o4g_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var _unary__edvuaz = this.m4g_1.q4g_1;
            this.m4g_1.q4g_1 = _unary__edvuaz + 1 | 0;
            this.v8_1 = 1;
            suspendResult = this.m4g_1.p4g_1.k3p_1.v2s(this.n4g_1, this.n4g_1.q3r_1, this);
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
            this.m4g_1.r4g_1 = call;
            return call;
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
  function Config() {
    this.s4g_1 = 20;
  }
  function Plugin() {
    Plugin_instance = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'HttpSend';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpSend);
    var tmp_1 = null instanceof HttpSend;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(HttpSend), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.t4g_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin).m1 = function () {
    return this.t4g_1;
  };
  protoOf(Plugin).u4g = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    block(this_0);
    var config = this_0;
    return new HttpSend(config.s4g_1);
  };
  protoOf(Plugin).s3s = function (block) {
    return this.u4g(block);
  };
  protoOf(Plugin).v4g = function (plugin, scope) {
    var tmp = Phases_getInstance().t3y_1;
    scope.i3p_1.a2t(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin).t3s = function (plugin, scope) {
    return this.v4g(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.w4g_1 = interceptor;
    this.x4g_1 = nextSender;
  }
  protoOf(InterceptedSender).d4g = function (requestBuilder, $completion) {
    return this.w4g_1(this.x4g_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.o4g_1 = maxSendCount;
    this.p4g_1 = client;
    this.q4g_1 = 0;
    this.r4g_1 = null;
  }
  protoOf(DefaultSender).d4g = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$_0(this, requestBuilder, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.b4g_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c4g_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).y4g = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.c4g_1.c1(block);
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
    return _this__u8e3s4.z4g(tmp, this_0);
  }
  function HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    requestTimeoutMillis = requestTimeoutMillis === VOID ? null : requestTimeoutMillis;
    connectTimeoutMillis = connectTimeoutMillis === VOID ? null : connectTimeoutMillis;
    socketTimeoutMillis = socketTimeoutMillis === VOID ? null : socketTimeoutMillis;
    HttpTimeoutConfig.call($this);
    $this.d4h(requestTimeoutMillis);
    $this.e4h(connectTimeoutMillis);
    $this.f4h(socketTimeoutMillis);
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
    this.g4h_1 = 9223372036854775807n;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'TimeoutConfiguration';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpTimeoutConfig);
    var tmp_1 = null instanceof HttpTimeoutConfig;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(HttpTimeoutConfig), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.h4h_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_2;
  function Companion_getInstance_11() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  protoOf(HttpTimeoutConfig).d4h = function (value) {
    this.a4h_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).i4h = function () {
    return this.a4h_1;
  };
  protoOf(HttpTimeoutConfig).e4h = function (value) {
    this.b4h_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).j4h = function () {
    return this.b4h_1;
  };
  protoOf(HttpTimeoutConfig).f4h = function (value) {
    this.c4h_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).k4h = function () {
    return this.c4h_1;
  };
  protoOf(HttpTimeoutConfig).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof HttpTimeoutConfig))
      THROW_CCE();
    if (!(this.a4h_1 == other.a4h_1))
      return false;
    if (!(this.b4h_1 == other.b4h_1))
      return false;
    if (!(this.c4h_1 == other.c4h_1))
      return false;
    return true;
  };
  protoOf(HttpTimeoutConfig).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.a4h_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.b4h_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.c4h_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    return result;
  };
  function HttpTimeoutConfig() {
    Companion_getInstance_11();
    this.a4h_1 = 0n;
    this.b4h_1 = 0n;
    this.c4h_1 = 0n;
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
    var tmp = request.n3r_1.k37();
    var tmp0_safe_receiver = request.l4h(HttpTimeoutCapability_instance);
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i4h());
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
    this.m4h_1 = url;
    this.n4h_1 = timeoutMillis;
  }
  protoOf(HttpRequestTimeoutException).a1w = function () {
    return new HttpRequestTimeoutException(this.m4h_1, this.n4h_1, this.cause);
  };
  function get_supportsRequestTimeout(_this__u8e3s4) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp;
    var tmp_0;
    if (!isWebsocket(_this__u8e3s4.n3r_1.a36())) {
      var tmp_1 = _this__u8e3s4.q3r_1;
      tmp_0 = !(tmp_1 instanceof ClientUpgradeContent);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_2 = _this__u8e3s4.q3r_1;
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
    var executionContext = request.r3r_1;
    var tmp = new CoroutineName('request-timeout');
    var killer = launch(_this__u8e3s4, tmp, VOID, applyRequestTimeout$slambda_0(requestTimeout, request, executionContext, null));
    var tmp_0 = request.r3r_1;
    tmp_0.b1q(applyRequestTimeout$lambda(killer));
  }
  function HttpTimeoutConfig$_init_$ref_dl1k0m() {
    return constructCallableReference(function () {
      return HttpTimeoutConfig_init_$Create$();
    }, 0, 0, 29);
  }
  function HttpTimeout$lambda($this$createClientPlugin) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var requestTimeoutMillis = $this$createClientPlugin.o3z_1.i4h();
    var connectTimeoutMillis = $this$createClientPlugin.o3z_1.j4h();
    var socketTimeoutMillis = $this$createClientPlugin.o3z_1.k4h();
    var tmp = Send_instance;
    $this$createClientPlugin.r3z(tmp, HttpTimeout$lambda$slambda_0(connectTimeoutMillis, socketTimeoutMillis, requestTimeoutMillis, null));
    return Unit_instance;
  }
  function invoke$hasNotNullTimeouts(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, supportsRequestTimeout) {
    return supportsRequestTimeout && !(requestTimeoutMillis == null) || !(connectTimeoutMillis == null) || !(socketTimeoutMillis == null);
  }
  function HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    this.w4h_1 = $connectTimeoutMillis;
    this.x4h_1 = $socketTimeoutMillis;
    this.y4h_1 = $requestTimeoutMillis;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$lambda$slambda).x45 = function ($this$on, request, $completion) {
    var tmp = this.y45($this$on, request, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpTimeout$lambda$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.x45(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            var supportsRequestTimeout = get_supportsRequestTimeout(this.a4i_1);
            var configuration = this.a4i_1.l4h(HttpTimeoutCapability_instance);
            if (configuration == null && invoke$hasNotNullTimeouts(this.y4h_1, this.w4h_1, this.x4h_1, supportsRequestTimeout)) {
              configuration = HttpTimeoutConfig_init_$Create$();
              this.a4i_1.z4g(HttpTimeoutCapability_instance, configuration);
            }

            var tmp0_safe_receiver = configuration;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_elvis_lhs = tmp0_safe_receiver.j4h();
              tmp0_safe_receiver.e4h(tmp0_elvis_lhs == null ? this.w4h_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.k4h();
              tmp0_safe_receiver.f4h(tmp1_elvis_lhs == null ? this.x4h_1 : tmp1_elvis_lhs);
              if (supportsRequestTimeout) {
                var tmp2_elvis_lhs = tmp0_safe_receiver.i4h();
                tmp0_safe_receiver.d4h(tmp2_elvis_lhs == null ? this.y4h_1 : tmp2_elvis_lhs);
                applyRequestTimeout(this.z4h_1, this.a4i_1, tmp0_safe_receiver.i4h());
              }
            }

            this.v8_1 = 1;
            suspendResult = this.z4h_1.b46(this.a4i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpTimeout$lambda$slambda).y45 = function ($this$on, request, completion) {
    var i = new HttpTimeout$lambda$slambda(this.w4h_1, this.x4h_1, this.y4h_1, completion);
    i.z4h_1 = $this$on;
    i.a4i_1 = request;
    return i;
  };
  function HttpTimeout$lambda$slambda_0($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    var i = new HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.x45($this$on, request, $completion);
    }, 2);
  }
  function applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.j4i_1 = $requestTimeout;
    this.k4i_1 = $request;
    this.l4i_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(applyRequestTimeout$slambda).a2l = function ($this$launch, $completion) {
    var tmp = this.b2l($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(applyRequestTimeout$slambda).r9 = function (p1, $completion) {
    return this.a2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(applyRequestTimeout$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            Companion_getInstance_3();
            var this_0 = this.j4i_1;
            suspendResult = delay_0(toDuration(this_0, DurationUnit_MILLISECONDS_getInstance()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.k4i_1);
            var this_1 = get_LOGGER_6();
            if (get_isTraceEnabled(this_1)) {
              this_1.v2t('Request timeout: ' + this.k4i_1.n3r_1.toString());
            }

            cancel_2(this.l4i_1, ensureNotNull(cause.message), cause);
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
  protoOf(applyRequestTimeout$slambda).b2l = function ($this$launch, completion) {
    var i = new applyRequestTimeout$slambda(this.j4i_1, this.k4i_1, this.l4i_1, completion);
    i.m4i_1 = $this$launch;
    return i;
  };
  function applyRequestTimeout$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2l($this$launch, $completion);
    }, 1);
  }
  function applyRequestTimeout$lambda($killer) {
    return function (it) {
      $killer.j1q();
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
    return _this__u8e3s4.g3t().c3t().d2n(get_RESPONSE_BODY_SAVED());
  }
  function tryCancelBody(_this__u8e3s4, e) {
    e = e === VOID ? null : e;
    _init_properties_SaveBody_kt__lbc3fj();
    var byteChannel = _this__u8e3s4.h3t();
    if (!byteChannel.d2c()) {
      try {
        byteChannel.j2c(e);
      } catch ($p) {
        if ($p instanceof CancellationException) {
          var cause = $p;
          throw cause;
        } else {
          if ($p instanceof Exception) {
            var cause_0 = $p;
            get_LOGGER_7().u2t('Failed to cancel response body', cause_0);
          } else {
            throw $p;
          }
        }
      }
    }
  }
  function SaveBodyPluginConfig() {
    this.n4i_1 = false;
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
    var tmp = Phases_getInstance_2().j3z_1;
    $this$createClientPlugin.n3z_1.l3p_1.a2t(tmp, SaveBody$lambda$slambda_0(null));
    return Unit_instance;
  }
  function SaveBody$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SaveBody$lambda$slambda).g3z = function ($this$intercept, response, $completion) {
    var tmp = this.h3z($this$intercept, response, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(SaveBody$lambda$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3z(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SaveBody$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 7;
            this.b4j_1 = this.x4i_1.g3t();
            this.y4i_1 = this.b4j_1.c3t();
            if (this.y4i_1.d2n(get_SKIP_SAVE_BODY())) {
              var this_0 = get_LOGGER_7();
              if (get_isTraceEnabled(this_0)) {
                this_0.v2t('Skipping body saving for ' + this.b4j_1.b3t().p3t().toString());
              }
              return Unit_instance;
            }

            this.z4i_1 = null;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.w8_1 = 4;
            this.w8_1 = 3;
            var this_1 = get_LOGGER_7();
            if (get_isTraceEnabled(this_1)) {
              this_1.v2t('Saving body for ' + this.b4j_1.b3t().p3t().toString());
            }

            this.v8_1 = 2;
            suspendResult = save(this.b4j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a4j_1 = suspendResult.n3q();
            this.w8_1 = 7;
            this.v8_1 = 5;
            continue $sm;
          case 3:
            this.w8_1 = 4;
            var tmp_0 = this.y8_1;
            if (tmp_0 instanceof Error) {
              var e = this.y8_1;
              var tmp_1 = this;
              this.z4i_1 = e;
              throw e;
            } else {
              throw this.y8_1;
            }

          case 4:
            this.w8_1 = 7;
            var t = this.y8_1;
            tryCancelBody(this.x4i_1, this.z4i_1);
            throw t;
          case 5:
            var tmp_2 = this.a4j_1;
            this.w8_1 = 7;
            tryCancelBody(this.x4i_1, this.z4i_1);
            var savedResponse = tmp_2;
            this.y4i_1.e2n(get_RESPONSE_BODY_SAVED(), Unit_instance);
            this.v8_1 = 6;
            suspendResult = this.w4i_1.a2s(savedResponse, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.y8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.w8_1 === 7) {
          throw e_0;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(SaveBody$lambda$slambda).h3z = function ($this$intercept, response, completion) {
    var i = new SaveBody$lambda$slambda(completion);
    i.w4i_1 = $this$intercept;
    i.x4i_1 = response;
    return i;
  };
  function SaveBody$lambda$slambda_0(resultContinuation) {
    var i = new SaveBody$lambda$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.g3z($this$intercept, response, $completion);
    }, 2);
  }
  function SaveBodyPluginConfig$_init_$ref_lwjaof() {
    return constructCallableReference(function () {
      return new SaveBodyPluginConfig();
    }, 0, 0, 31, '<init>');
  }
  function SaveBodyPlugin$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    if ($this$createClientPlugin.o3z_1.n4i_1) {
      get_LOGGER_7().t2t('It is no longer possible to disable body saving for all requests. Use client.prepareRequest(...).execute { ... } syntax to prevent saving the body in memory.\n\nThis API is deprecated and will be removed in Ktor 4.0.0\nIf you were relying on this functionality, share your use case by commenting on this issue: https://youtrack.jetbrains.com/issue/KTOR-8367/');
    } else {
      get_LOGGER_7().t2t('The SaveBodyPlugin plugin is deprecated and can be safely removed. Request bodies are now saved in memory by default for all non-streaming responses.');
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
      var tmp_0 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Unit), arrayOf([]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      SKIP_SAVE_BODY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ResponseBodySaved';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(Unit);
      var tmp_4 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(Unit), arrayOf([]), false);
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
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
      RESPONSE_BODY_SAVED = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER$delegate = lazy(LOGGER$delegate$lambda);
      SaveBody = createClientPlugin('SaveBody', SaveBody$lambda);
      var tmp_7 = SaveBodyPluginConfig$_init_$ref_lwjaof();
      SaveBodyPlugin = createClientPlugin_0('DoubleReceivePlugin', tmp_7, SaveBodyPlugin$lambda);
    }
  }
  function HookHandler(hook, handler) {
    this.c4j_1 = hook;
    this.d4j_1 = handler;
  }
  protoOf(HookHandler).u3r = function (client) {
    this.c4j_1.u3y(client, this.d4j_1);
  };
  function ClientPluginBuilder$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginBuilder(key, client, pluginConfig) {
    this.m3z_1 = key;
    this.n3z_1 = client;
    this.o3z_1 = pluginConfig;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p3z_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    tmp_0.q3z_1 = ClientPluginBuilder$onClose$lambda;
  }
  protoOf(ClientPluginBuilder).x4d = function (block) {
    this.r3z(RequestHook_instance, block);
  };
  protoOf(ClientPluginBuilder).z47 = function (block) {
    this.r3z(TransformResponseBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).r3z = function (hook, handler) {
    this.p3z_1.c1(new HookHandler(hook, handler));
  };
  function ClientPluginInstance$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginInstance(key, config, body) {
    this.e4j_1 = key;
    this.f4j_1 = config;
    this.g4j_1 = body;
    var tmp = this;
    tmp.h4j_1 = ClientPluginInstance$onClose$lambda;
  }
  protoOf(ClientPluginInstance).u3r = function (scope) {
    var tmp0 = new ClientPluginBuilder(this.e4j_1, scope, this.f4j_1);
    // Inline function 'kotlin.apply' call
    this.g4j_1(tmp0);
    var pluginBuilder = tmp0;
    this.h4j_1 = pluginBuilder.q3z_1;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pluginBuilder.p3z_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.u3r(scope);
    }
  };
  protoOf(ClientPluginInstance).f4 = function () {
    this.h4j_1();
  };
  function SetupRequest$install$slambda($handler, resultContinuation) {
    this.q4j_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequest$install$slambda).g3q = function ($this$intercept, it, $completion) {
    var tmp = this.h3q($this$intercept, it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(SetupRequest$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequest$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.q4j_1(this.r4j_1.w2s_1, this);
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
  protoOf(SetupRequest$install$slambda).h3q = function ($this$intercept, it, completion) {
    var i = new SetupRequest$install$slambda(this.q4j_1, completion);
    i.r4j_1 = $this$intercept;
    i.s4j_1 = it;
    return i;
  };
  function SetupRequest$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequest$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.g3q($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequest() {
  }
  protoOf(SetupRequest).t4j = function (client, handler) {
    var tmp = Phases_getInstance().p3y_1;
    client.i3p_1.a2t(tmp, SetupRequest$install$slambda_0(handler, null));
  };
  protoOf(SetupRequest).u3y = function (client, handler) {
    return this.t4j(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var SetupRequest_instance;
  function SetupRequest_getInstance() {
    return SetupRequest_instance;
  }
  function Sender_0(httpSendSender, coroutineContext) {
    this.z45_1 = httpSendSender;
    this.a46_1 = coroutineContext;
  }
  protoOf(Sender_0).z1o = function () {
    return this.a46_1;
  };
  protoOf(Sender_0).b46 = function (requestBuilder, $completion) {
    return this.z45_1.d4g(requestBuilder, $completion);
  };
  function Send$install$slambda($handler, $client, resultContinuation) {
    this.c4k_1 = $handler;
    this.d4k_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Send$install$slambda).g4k = function ($this$intercept, request, $completion) {
    var tmp = this.h4k($this$intercept, request, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(Send$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.g4k(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Send$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.c4k_1(new Sender_0(this.e4k_1, this.d4k_1.h3p_1), this.f4k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(Send$install$slambda).h4k = function ($this$intercept, request, completion) {
    var i = new Send$install$slambda(this.c4k_1, this.d4k_1, completion);
    i.e4k_1 = $this$intercept;
    i.f4k_1 = request;
    return i;
  };
  function Send$install$slambda_0($handler, $client, resultContinuation) {
    var i = new Send$install$slambda($handler, $client, resultContinuation);
    return constructCallableReference(function ($this$intercept, request, $completion) {
      return i.g4k($this$intercept, request, $completion);
    }, 2);
  }
  function Send() {
  }
  protoOf(Send).i4k = function (client, handler) {
    var tmp = plugin(client, Plugin_getInstance());
    tmp.y4g(Send$install$slambda_0(handler, client, null));
  };
  protoOf(Send).u3y = function (client, handler) {
    return this.i4k(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    this.j4k_1 = createConfiguration;
    this.k4k_1 = body;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(ClientPluginInstance);
    var tmp_1 = null instanceof ClientPluginInstance;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(ClientPluginInstance), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('PluginConfigT', arrayOf([createKType(PrimitiveClasses_getInstance().rb(), arrayOf([]), false)]), 'invariant', false, 'io.ktor.client.plugins.api.ClientPluginImpl'), arrayOf([]), false))]), false);
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.l4k_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(ClientPluginImpl).m1 = function () {
    return this.l4k_1;
  };
  protoOf(ClientPluginImpl).m4k = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.j4k_1();
    block(this_0);
    var config = this_0;
    return new ClientPluginInstance(this.l4k_1, config, this.k4k_1);
  };
  protoOf(ClientPluginImpl).s3s = function (block) {
    return this.m4k(block);
  };
  protoOf(ClientPluginImpl).n4k = function (plugin, scope) {
    plugin.u3r(scope);
  };
  protoOf(ClientPluginImpl).t3s = function (plugin, scope) {
    return this.n4k(plugin instanceof ClientPluginInstance ? plugin : THROW_CCE(), scope);
  };
  function createClientPlugin$lambda() {
    return Unit_instance;
  }
  function TransformResponseBodyContext() {
  }
  function OnRequestContext() {
  }
  function RequestHook$install$slambda($handler, resultContinuation) {
    this.w4k_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestHook$install$slambda).g3q = function ($this$intercept, it, $completion) {
    var tmp = this.h3q($this$intercept, it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(RequestHook$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestHook$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.w4k_1(new OnRequestContext(), this.x4k_1.w2s_1, this.x4k_1.z2r(), this);
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
  protoOf(RequestHook$install$slambda).h3q = function ($this$intercept, it, completion) {
    var i = new RequestHook$install$slambda(this.w4k_1, completion);
    i.x4k_1 = $this$intercept;
    i.y4k_1 = it;
    return i;
  };
  function RequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.g3q($this$intercept, it, $completion);
    }, 2);
  }
  function RequestHook() {
  }
  protoOf(RequestHook).z4k = function (client, handler) {
    var tmp = Phases_getInstance().q3y_1;
    client.i3p_1.a2t(tmp, RequestHook$install$slambda_0(handler, null));
  };
  protoOf(RequestHook).u3y = function (client, handler) {
    return this.z4k(client, (!(handler == null) ? isSuspendFunction(handler, 3) : false) ? handler : THROW_CCE());
  };
  var RequestHook_instance;
  function RequestHook_getInstance() {
    return RequestHook_instance;
  }
  function TransformResponseBodyHook$install$slambda($handler, resultContinuation) {
    this.i4l_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformResponseBodyHook$install$slambda).b3r = function ($this$intercept, it, $completion) {
    var tmp = this.c3r($this$intercept, it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(TransformResponseBodyHook$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b3r(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformResponseBodyHook$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            var _destruct__k2r9zo = this.j4l_1.z2r();
            this.l4l_1 = _destruct__k2r9zo.ff();
            var content = _destruct__k2r9zo.gf();
            if (!isInterface(content, ByteReadChannel))
              return Unit_instance;
            this.v8_1 = 1;
            suspendResult = this.i4l_1(new TransformResponseBodyContext(), this.j4l_1.w2s_1.n3q(), content, this.l4l_1, this);
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
              tmp_1 = !this.l4l_1.n2t_1.za(newContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              throw IllegalStateException_init_$Create$('transformResponseBody returned ' + toString(newContent) + ' but expected value of type ' + this.l4l_1.toString());
            }

            this.v8_1 = 2;
            suspendResult = this.j4l_1.a2s(new HttpResponseContainer(this.l4l_1, newContent), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(TransformResponseBodyHook$install$slambda).c3r = function ($this$intercept, it, completion) {
    var i = new TransformResponseBodyHook$install$slambda(this.i4l_1, completion);
    i.j4l_1 = $this$intercept;
    i.k4l_1 = it;
    return i;
  };
  function TransformResponseBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformResponseBodyHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.b3r($this$intercept, it, $completion);
    }, 2);
  }
  function TransformResponseBodyHook() {
  }
  protoOf(TransformResponseBodyHook).m4l = function (client, handler) {
    var tmp = Phases_getInstance_1().n3s_1;
    client.j3p_1.a2t(tmp, TransformResponseBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformResponseBodyHook).u3y = function (client, handler) {
    return this.m4l(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
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
    this.n4l_1 = delegate;
    this.o4l_1 = call;
  }
  protoOf(DefaultClientWebSocketSession).j3h = function (frame, $completion) {
    return this.n4l_1.j3h(frame, $completion);
  };
  protoOf(DefaultClientWebSocketSession).y2b = function ($completion) {
    return this.n4l_1.y2b($completion);
  };
  protoOf(DefaultClientWebSocketSession).f3h = function (_set____db54di) {
    this.n4l_1.f3h(_set____db54di);
  };
  protoOf(DefaultClientWebSocketSession).g3h = function () {
    return this.n4l_1.g3h();
  };
  protoOf(DefaultClientWebSocketSession).h3h = function () {
    return this.n4l_1.h3h();
  };
  protoOf(DefaultClientWebSocketSession).i3h = function () {
    return this.n4l_1.i3h();
  };
  protoOf(DefaultClientWebSocketSession).z1o = function () {
    return this.n4l_1.z1o();
  };
  protoOf(DefaultClientWebSocketSession).e3h = function (negotiatedExtensions) {
    this.n4l_1.e3h(negotiatedExtensions);
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.p4l_1 = session;
    this.q4l_1 = call;
  }
  protoOf(DelegatingClientWebSocketSession).j3h = function (frame, $completion) {
    return this.p4l_1.j3h(frame, $completion);
  };
  protoOf(DelegatingClientWebSocketSession).y2b = function ($completion) {
    return this.p4l_1.y2b($completion);
  };
  protoOf(DelegatingClientWebSocketSession).f3h = function (_set____db54di) {
    this.p4l_1.f3h(_set____db54di);
  };
  protoOf(DelegatingClientWebSocketSession).g3h = function () {
    return this.p4l_1.g3h();
  };
  protoOf(DelegatingClientWebSocketSession).h3h = function () {
    return this.p4l_1.h3h();
  };
  protoOf(DelegatingClientWebSocketSession).i3h = function () {
    return this.p4l_1.i3h();
  };
  protoOf(DelegatingClientWebSocketSession).z1o = function () {
    return this.p4l_1.z1o();
  };
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var tmp = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var nonce = generateNonce(16);
    this_0.q(Default_getInstance_0().dh(nonce));
    tmp.t4l_1 = this_0.toString();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new HeadersBuilder();
    this_1.p2p('Upgrade', 'websocket');
    this_1.p2p('Connection', 'Upgrade');
    this_1.p2p('Sec-WebSocket-Key', this.t4l_1);
    this_1.p2p('Sec-WebSocket-Version', '13');
    tmp_0.u4l_1 = this_1.c2y();
  }
  protoOf(WebSocketContent).j32 = function () {
    return this.u4l_1;
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
    this.d4m_1 = $extensionsSupported;
    this.e4m_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda).g3q = function ($this$intercept, it, $completion) {
    var tmp = this.h3q($this$intercept, it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(WebSockets$Plugin$install$slambda).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.g3q(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            if (!isWebsocket(this.f4m_1.w2s_1.n3r_1.a36())) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.v2t('Skipping WebSocket plugin for non-websocket request: ' + this.f4m_1.w2s_1.n3r_1.toString());
              }
              return Unit_instance;
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.v2t('Sending WebSocket request ' + this.f4m_1.w2s_1.n3r_1.toString());
            }

            this.f4m_1.w2s_1.z4g(WebSocketCapability_instance, Unit_instance);
            if (this.d4m_1) {
              installExtensions(this.e4m_1, this.f4m_1.w2s_1);
            }

            this.f4m_1.w2s_1.s3r_1.f2n(get_WEBSOCKETS_KEY(), this.e4m_1);
            this.v8_1 = 1;
            suspendResult = this.f4m_1.a2s(new WebSocketContent(), this);
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
  protoOf(WebSockets$Plugin$install$slambda).h3q = function ($this$intercept, it, completion) {
    var i = new WebSockets$Plugin$install$slambda(this.d4m_1, this.e4m_1, completion);
    i.f4m_1 = $this$intercept;
    i.g4m_1 = it;
    return i;
  };
  function WebSockets$Plugin$install$slambda_0($extensionsSupported, $plugin, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.g3q($this$intercept, it, $completion);
    }, 2);
  }
  function WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation) {
    this.p4m_1 = $plugin;
    this.q4m_1 = $extensionsSupported;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda_1).b3r = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.c3r($this$intercept, _destruct__k2r9zo, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(WebSockets$Plugin$install$slambda_1).p9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b3r(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            var info = this.s4m_1.ff();
            var session = this.s4m_1.gf();
            var response = this.r4m_1.w2s_1.n3q();
            var status = response.i3t();
            var requestContent = get_request(response).f1b();
            if (!(requestContent instanceof WebSocketContent)) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.v2t('Skipping non-websocket response from ' + this.r4m_1.w2s_1.b3t().p3t().toString() + ': ' + toString(requestContent));
              }
              return Unit_instance;
            }

            if (!status.equals(Companion_getInstance_1().f33_1)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected status code ' + Companion_getInstance_1().f33_1.i35_1 + ' but was ' + status.i35_1);
            }

            if (!isInterface(session, WebSocketSession)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected `WebSocketSession` content but was ' + toString(getKClassFromExpression(session)));
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.v2t('Receive websocket session from ' + this.r4m_1.w2s_1.b3t().p3t().toString() + ': ' + toString(session));
            }

            if (!(this.p4m_1.u4m_1 === 2147483647n)) {
              session.f3h(this.p4m_1.u4m_1);
            }

            var tmp_0;
            if (info.n2t_1.equals(getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.p4m_1.y4m(session);
              var clientSession = new DefaultClientWebSocketSession(this.r4m_1.w2s_1, defaultSession);
              var tmp_1;
              if (this.q4m_1) {
                tmp_1 = completeNegotiation(this.p4m_1, this.r4m_1.w2s_1);
              } else {
                tmp_1 = emptyList();
              }
              var negotiated = tmp_1;
              clientSession.e3h(negotiated);
              tmp_0 = clientSession;
            } else {
              tmp_0 = new DelegatingClientWebSocketSession(this.r4m_1.w2s_1, session);
            }

            var clientSession_0 = tmp_0;
            this.v8_1 = 1;
            suspendResult = this.r4m_1.a2s(new HttpResponseContainer(info, clientSession_0), this);
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
  protoOf(WebSockets$Plugin$install$slambda_1).c3r = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new WebSockets$Plugin$install$slambda_1(this.p4m_1, this.q4m_1, completion);
    i.r4m_1 = $this$intercept;
    i.s4m_1 = _destruct__k2r9zo;
    return i;
  };
  function WebSockets$Plugin$install$slambda_2($plugin, $extensionsSupported, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.b3r($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  function installExtensions($this, context) {
    var installed = $this.v4m_1.c2y();
    context.s3r_1.e2n(get_REQUEST_EXTENSIONS_KEY(), installed);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = installed.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var list = element.m3o();
      addAll(destination, list);
    }
    var protocols = destination;
    addNegotiatedProtocols($this, context, protocols);
  }
  function completeNegotiation($this, call) {
    var tmp0_safe_receiver = call.n3q().j32().d1b('Sec-WebSocket-Extensions');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = parseWebSocketExtensions(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var serverExtensions = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var clientExtensions = call.c3t().b2n(get_REQUEST_EXTENSIONS_KEY());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = clientExtensions.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (element.n3o(serverExtensions)) {
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
    this.z4m_1 = new WebSocketExtensionsConfig();
    this.a4n_1 = new WebSocketChannelsConfig();
    this.b4n_1 = 0n;
    this.c4n_1 = 2147483647n;
    this.d4n_1 = null;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'Websocket';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(WebSockets);
    var tmp_1 = null instanceof WebSockets;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(WebSockets), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.e4n_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin_0).m1 = function () {
    return this.e4n_1;
  };
  protoOf(Plugin_0).f4n = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_0();
    block(this_0);
    var config = this_0;
    return new WebSockets(config.b4n_1, config.c4n_1, config.z4m_1, config.d4n_1, config.a4n_1);
  };
  protoOf(Plugin_0).s3s = function (block) {
    return this.f4n(block);
  };
  protoOf(Plugin_0).g4n = function (plugin, scope) {
    var extensionsSupported = scope.c3p_1.t3w().i2(WebSocketExtensionsCapability_instance);
    var tmp = Phases_getInstance().s3y_1;
    scope.i3p_1.a2t(tmp, WebSockets$Plugin$install$slambda_0(extensionsSupported, plugin, null));
    var tmp_0 = Phases_getInstance_1().n3s_1;
    scope.j3p_1.a2t(tmp_0, WebSockets$Plugin$install$slambda_2(plugin, extensionsSupported, null));
  };
  protoOf(Plugin_0).t3s = function (plugin, scope) {
    return this.g4n(plugin instanceof WebSockets ? plugin : THROW_CCE(), scope);
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
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_4().k3h_1 : channelsConfig;
    this.t4m_1 = pingIntervalMillis;
    this.u4m_1 = maxFrameSize;
    this.v4m_1 = extensionsConfig;
    this.w4m_1 = contentConverter;
    this.x4m_1 = channelsConfig;
  }
  protoOf(WebSockets).y4m = function (session) {
    if (isInterface(session, DefaultWebSocketSession))
      return session;
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.t4m_1;
    var timeoutMillis = multiply(this_0, fromInt(2));
    // Inline function 'kotlin.also' call
    var this_1 = DefaultWebSocketSession_0(session, this.t4m_1, timeoutMillis, this.x4m_1);
    this_1.f3h(this.u4m_1);
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
      var tmp_0 = !(null == null) ? isInterface(null, KtList) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(WebSocketExtension), arrayOf([getStarKTypeProjection()]), false))]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      REQUEST_EXTENSIONS_KEY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'Websocket plugin config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(WebSockets);
      var tmp_4 = null instanceof WebSockets;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(WebSockets), arrayOf([]), false);
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
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
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
    tmp.i4n_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  function DefaultHttpRequest(call, data) {
    this.j4n_1 = call;
    this.k4n_1 = data.n3w_1;
    this.l4n_1 = data.m3w_1;
    this.m4n_1 = data.p3w_1;
    this.n4n_1 = data.o3w_1;
    this.o4n_1 = data.r3w_1;
  }
  protoOf(DefaultHttpRequest).g3t = function () {
    return this.j4n_1;
  };
  protoOf(DefaultHttpRequest).z1o = function () {
    return this.g3t().z1o();
  };
  protoOf(DefaultHttpRequest).o3t = function () {
    return this.k4n_1;
  };
  protoOf(DefaultHttpRequest).p3t = function () {
    return this.l4n_1;
  };
  protoOf(DefaultHttpRequest).f1b = function () {
    return this.m4n_1;
  };
  protoOf(DefaultHttpRequest).j32 = function () {
    return this.n4n_1;
  };
  protoOf(DefaultHttpRequest).c3t = function () {
    return this.o4n_1;
  };
  function get_ResponseAdapterAttributeKey() {
    _init_properties_HttpRequest_kt__813lx1();
    return ResponseAdapterAttributeKey;
  }
  var ResponseAdapterAttributeKey;
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_12() {
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function HttpRequestBuilder() {
    this.n3r_1 = new URLBuilder();
    this.o3r_1 = Companion_getInstance_2().k32_1;
    this.p3r_1 = new HeadersBuilder();
    this.q3r_1 = EmptyContent_getInstance();
    this.r3r_1 = SupervisorJob();
    this.s3r_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).j32 = function () {
    return this.p3r_1;
  };
  protoOf(HttpRequestBuilder).i3x = function (value) {
    if (!(value == null)) {
      this.s3r_1.e2n(get_BodyTypeAttributeKey(), value);
    } else {
      this.s3r_1.g2n(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).p4n = function () {
    return this.s3r_1.c2n(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).c2y = function () {
    var tmp = this.n3r_1.c2y();
    var tmp_0 = this.o3r_1;
    var tmp_1 = this.p3r_1.c2y();
    var tmp_2 = this.q3r_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'No request transformation found: ' + toString(this.q3r_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.r3r_1, this.s3r_1);
  };
  protoOf(HttpRequestBuilder).h3x = function (builder) {
    this.r3r_1 = builder.r3r_1;
    return this.y4d(builder);
  };
  protoOf(HttpRequestBuilder).y4d = function (builder) {
    this.o3r_1 = builder.o3r_1;
    this.q3r_1 = builder.q3r_1;
    this.i3x(builder.p4n());
    takeFrom_0(this.n3r_1, builder.n3r_1);
    this.n3r_1.v35_1 = this.n3r_1.v35_1;
    appendAll(this.p3r_1, builder.p3r_1);
    putAll(this.s3r_1, builder.s3r_1);
    return this;
  };
  protoOf(HttpRequestBuilder).z4g = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.s3r_1.h2n(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.z2(key, capability);
  };
  protoOf(HttpRequestBuilder).l4h = function (key) {
    var tmp0_safe_receiver = this.s3r_1.c2n(get_ENGINE_CAPABILITIES_KEY());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2(key);
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
    set(_this__u8e3s4.n3r_1, scheme, host, port, path, block);
  }
  function headers(_this__u8e3s4, block) {
    _init_properties_HttpRequest_kt__813lx1();
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4.j32();
    block(this_0);
    return this_0;
  }
  function HttpRequest_0() {
  }
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.m3w_1 = url;
    this.n3w_1 = method;
    this.o3w_1 = headers;
    this.p3w_1 = body;
    this.q3w_1 = executionContext;
    this.r3w_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.r3w_1.c2n(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2();
    tmp.s3w_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.m3w_1.toString() + ', method=' + this.n3w_1.toString() + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.r3t_1 = statusCode;
    this.s3t_1 = requestTime;
    this.t3t_1 = headers;
    this.u3t_1 = version;
    this.v3t_1 = body;
    this.w3t_1 = callContext;
    this.x3t_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.r3t_1.toString() + ')';
  };
  function ResponseAdapter() {
  }
  function isUpgradeRequest(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    var tmp = _this__u8e3s4.p3w_1;
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
      var tmp_0 = !(null == null) ? isInterface(null, ResponseAdapter) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(ResponseAdapter), arrayOf([]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      ResponseAdapterAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function Phases() {
    Phases_instance = this;
    this.p3y_1 = new PipelinePhase('Before');
    this.q3y_1 = new PipelinePhase('State');
    this.r3y_1 = new PipelinePhase('Transform');
    this.s3y_1 = new PipelinePhase('Render');
    this.t3y_1 = new PipelinePhase('Send');
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
    Pipeline.call(this, [Phases_getInstance().p3y_1, Phases_getInstance().q3y_1, Phases_getInstance().r3y_1, Phases_getInstance().s3y_1, Phases_getInstance().t3y_1]);
    this.y4n_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).u2s = function () {
    return this.y4n_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.v3r_1 = new PipelinePhase('Before');
    this.w3r_1 = new PipelinePhase('State');
    this.x3r_1 = new PipelinePhase('Monitoring');
    this.y3r_1 = new PipelinePhase('Engine');
    this.z3r_1 = new PipelinePhase('Receive');
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
    Pipeline.call(this, [Phases_getInstance_0().v3r_1, Phases_getInstance_0().w3r_1, Phases_getInstance_0().x3r_1, Phases_getInstance_0().y3r_1, Phases_getInstance_0().z3r_1]);
    this.g4o_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).u2s = function () {
    return this.g4o_1;
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
      var tmp_0 = null instanceof TypeInfo;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(TypeInfo), arrayOf([]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
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
    this.i4o_1 = formData;
    this.j4o_1 = toByteArray_0(formUrlEncode(this.i4o_1));
    this.k4o_1 = fromInt(this.j4o_1.length);
    this.l4o_1 = withCharset(Application_getInstance().v2v_1, Charsets_getInstance().z2l_1);
  }
  protoOf(FormDataContent).y37 = function () {
    return this.k4o_1;
  };
  protoOf(FormDataContent).x37 = function () {
    return this.l4o_1;
  };
  protoOf(FormDataContent).z37 = function () {
    return this.j4o_1;
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
    this.u4o_1 = _this__u8e3s4;
    this.v4o_1 = channel;
  }
  protoOf($writeToCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 25;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.w8_1 = 21;
            this.w8_1 = 20;
            this.c4p_1 = this.u4o_1.l4p_1.t();
            this.v8_1 = 2;
            continue $sm;
          case 2:
            if (!this.c4p_1.u()) {
              this.v8_1 = 18;
              continue $sm;
            }

            this.b4p_1 = this.c4p_1.v();
            this.v8_1 = 3;
            suspendResult = writeFully_0(this.v4o_1, this.u4o_1.h4p_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.v8_1 = 4;
            suspendResult = writeFully_0(this.v4o_1, this.b4p_1.n4p_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.v8_1 = 5;
            suspendResult = writeFully_0(this.v4o_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp0_subject = this.b4p_1;
            if (tmp0_subject instanceof InputPart) {
              this.a4p_1 = this.b4p_1.u4p_1();
              this.v8_1 = 7;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ChannelPart) {
                this.v8_1 = 6;
                suspendResult = copyTo_0(this.b4p_1.r4p_1(), this.v4o_1, this);
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
            this.x4o_1 = suspendResult;
            this.v8_1 = 16;
            continue $sm;
          case 7:
            this.z4o_1 = this.a4p_1;
            this.y4o_1 = null;
            this.v8_1 = 8;
            continue $sm;
          case 8:
            this.v8_1 = 9;
            continue $sm;
          case 9:
            this.w8_1 = 13;
            this.w8_1 = 12;
            var input = this.z4o_1;
            this.v8_1 = 10;
            suspendResult = copyTo_1(input, this.v4o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.v8_1 = 11;
            var tmp_1 = this;
            continue $sm;
          case 11:
            this.w8_1 = 20;
            closeFinally(this.z4o_1, this.y4o_1);
            this.v8_1 = 15;
            continue $sm;
          case 12:
            this.w8_1 = 13;
            var tmp_2 = this.y8_1;
            if (tmp_2 instanceof Error) {
              var e = this.y8_1;
              var tmp_3 = this;
              this.y4o_1 = e;
              throw e;
            } else {
              throw this.y8_1;
            }

          case 13:
            this.w8_1 = 20;
            var t = this.y8_1;
            closeFinally(this.z4o_1, this.y4o_1);
            throw t;
          case 14:
            this.w8_1 = 20;
            closeFinally(this.z4o_1, this.y4o_1);
            if (false) {
              this.v8_1 = 7;
              continue $sm;
            }

            this.v8_1 = 15;
            continue $sm;
          case 15:
            this.x4o_1 = Unit_instance;
            this.v8_1 = 16;
            continue $sm;
          case 16:
            this.v8_1 = 17;
            suspendResult = writeFully_0(this.v4o_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            this.v8_1 = 2;
            continue $sm;
          case 18:
            this.v8_1 = 19;
            suspendResult = writeFully_0(this.v4o_1, this.u4o_1.i4p_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 19:
            this.w8_1 = 25;
            this.v8_1 = 23;
            continue $sm;
          case 20:
            this.w8_1 = 21;
            var tmp_4 = this.y8_1;
            if (tmp_4 instanceof Error) {
              var cause = this.y8_1;
              close(this.v4o_1, cause);
              this.w8_1 = 25;
              this.v8_1 = 23;
              continue $sm;
            } else {
              throw this.y8_1;
            }

          case 21:
            this.w8_1 = 25;
            this.w4o_1 = this.y8_1;
            this.v8_1 = 22;
            suspendResult = this.v4o_1.i2c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 22:
            throw this.w4o_1;
          case 23:
            this.w8_1 = 25;
            this.v8_1 = 24;
            suspendResult = this.v4o_1.i2c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 24:
            return Unit_instance;
          case 25:
            throw this.y8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.w8_1 === 25) {
          throw e_0;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e_0;
        }
      }
     while (true);
  };
  function MultiPartFormDataContent(parts, boundary, contentType) {
    boundary = boundary === VOID ? generateBoundary() : boundary;
    contentType = contentType === VOID ? MultiPart_getInstance().y2w_1.y2x('boundary', boundary) : contentType;
    WriteChannelContent.call(this);
    this.e4p_1 = parts;
    this.f4p_1 = boundary;
    this.g4p_1 = contentType;
    this.h4p_1 = toByteArray_0('--' + this.f4p_1 + '\r\n');
    this.i4p_1 = toByteArray_0('--' + this.f4p_1 + '--\r\n');
    this.j4p_1 = this.i4p_1.length;
    this.k4p_1 = imul(get_RN_BYTES().length, 2) + this.h4p_1.length | 0;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.e4p_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var headersBuilder = BytePacketBuilder();
      var _iterator__ex2g4s_0 = item.s39_1.f2p().t();
      while (_iterator__ex2g4s_0.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.m1();
        // Inline function 'kotlin.collections.component2' call
        var values = _destruct__k2r9zo.n1();
        writeText(headersBuilder, key + ': ' + joinToString(values, '; '));
        writeFully(headersBuilder, get_RN_BYTES());
      }
      var tmp0_safe_receiver = item.s39_1.d1b('Content-Length');
      var bodySize = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
      var tmp_0;
      if (item instanceof FileItem) {
        var headers = readByteArray(build(headersBuilder));
        var tmp_1;
        if (bodySize == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other = this.k4p_1;
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
        tmp_0 = new ChannelPart(headers, item.a4q_1, size);
      } else {
        if (item instanceof BinaryItem) {
          var headers_0 = readByteArray(build(headersBuilder));
          var tmp_3;
          if (bodySize == null) {
            tmp_3 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_1 = this.k4p_1;
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
          tmp_0 = new InputPart(headers_0, item.k39_1, size_0);
        } else {
          if (item instanceof FormItem) {
            // Inline function 'io.ktor.utils.io.core.buildPacket' call
            var builder = new Buffer();
            writeText(builder, item.e39_1);
            var bytes = readByteArray(builder);
            var provider = MultiPartFormDataContent$rawParts$lambda(bytes);
            if (bodySize == null) {
              writeText(headersBuilder, 'Content-Length: ' + bytes.length);
              writeFully(headersBuilder, get_RN_BYTES());
            }
            var headers_1 = readByteArray(build(headersBuilder));
            var size_1 = (bytes.length + this.k4p_1 | 0) + headers_1.length | 0;
            tmp_0 = new InputPart(headers_1, provider, fromInt(size_1));
          } else {
            if (item instanceof BinaryChannelItem) {
              var headers_2 = readByteArray(build(headersBuilder));
              var tmp_5;
              if (bodySize == null) {
                tmp_5 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_3 = this.k4p_1;
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
              tmp_0 = new ChannelPart(headers_2, item.q39_1, size_2);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      var tmp$ret$2 = tmp_0;
      destination.c1(tmp$ret$2);
    }
    tmp.l4p_1 = destination;
    this.m4p_1 = null;
    var rawLength = 0n;
    var _iterator__ex2g4s_1 = this.l4p_1.t();
    $l$loop: while (_iterator__ex2g4s_1.u()) {
      var part = _iterator__ex2g4s_1.v();
      var size_3 = part.o4p_1;
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
      var other_5 = this.j4p_1;
      rawLength = add(tmp0, fromInt(other_5));
    }
    this.m4p_1 = rawLength;
  }
  protoOf(MultiPartFormDataContent).x37 = function () {
    return this.g4p_1;
  };
  protoOf(MultiPartFormDataContent).y37 = function () {
    return this.m4p_1;
  };
  protoOf(MultiPartFormDataContent).z39 = function (channel, $completion) {
    var tmp = new $writeToCOROUTINE$(this, channel, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
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
        this_0.q(toString_1(Default_getInstance().jf(), 16));
      }
       while (inductionVariable < 32);
    var tmp$ret$0 = this_0.toString();
    return take(tmp$ret$0, 70);
  }
  function InputPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.u4p_1 = provider;
  }
  function ChannelPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.r4p_1 = provider;
  }
  function PreparedPart(headers, size) {
    this.n4p_1 = headers;
    this.o4p_1 = size;
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
    tmp.b4q_1 = ArrayList_init_$Create$();
  }
  protoOf(FormBuilder).c4q = function (key, value, headers) {
    var tmp0 = this.b4q_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.c1(element);
  };
  protoOf(FormBuilder).d4q = function (key, value, headers, $super) {
    headers = headers === VOID ? Companion_getInstance_5().e32_1 : headers;
    var tmp;
    if ($super === VOID) {
      this.c4q(key, value, headers);
      tmp = Unit_instance;
    } else {
      tmp = $super.c4q.call(this, key, value, headers);
    }
    return tmp;
  };
  protoOf(FormBuilder).e4q = function (key, value, headers) {
    var tmp0 = this.b4q_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.c1(element);
  };
  protoOf(FormBuilder).f4q = function () {
    return this.b4q_1;
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
      var key = element.ff();
      var value = element.gf();
      var headers = element.j4q();
      // Inline function 'kotlin.apply' call
      var this_0 = new HeadersBuilder();
      this_0.p2p('Content-Disposition', 'form-data; name=' + quoteForMultipart(key));
      this_0.q2p(headers);
      var partHeaders = this_0;
      var tmp;
      if (typeof value === 'string') {
        tmp = new FormItem(value, formData$lambda, partHeaders.c2y());
      } else {
        if (isNumber(value)) {
          var tmp_0 = toString(value);
          tmp = new FormItem(tmp_0, formData$lambda_0, partHeaders.c2y());
        } else {
          if (typeof value === 'boolean') {
            var tmp_1 = value.toString();
            tmp = new FormItem(tmp_1, formData$lambda_1, partHeaders.c2y());
          } else {
            if (isByteArray(value)) {
              partHeaders.p2p('Content-Length', value.length.toString());
              var tmp_2 = formData$lambda_2(value);
              tmp = new BinaryItem(tmp_2, formData$lambda_3, partHeaders.c2y());
            } else {
              if (isInterface(value, Source)) {
                if (value instanceof Buffer) {
                  partHeaders.p2p('Content-Length', get_remaining(value).toString());
                }
                var tmp_3 = formData$lambda_4(value);
                tmp = new BinaryItem(tmp_3, formData$lambda_5(value), partHeaders.c2y());
              } else {
                if (value instanceof InputProvider) {
                  var size = value.m4q_1;
                  if (!(size == null)) {
                    partHeaders.p2p('Content-Length', size.toString());
                  }
                  tmp = new BinaryItem(value.n4q_1, formData$lambda_6, partHeaders.c2y());
                } else {
                  if (value instanceof ChannelProvider) {
                    var size_0 = value.k4q_1;
                    if (!(size_0 == null)) {
                      partHeaders.p2p('Content-Length', size_0.toString());
                    }
                    tmp = new BinaryChannelItem(value.l4q_1, partHeaders.c2y());
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
    headers = headers === VOID ? Companion_getInstance_5().e32_1 : headers;
    this.g4q_1 = key;
    this.h4q_1 = value;
    this.i4q_1 = headers;
  }
  protoOf(FormPart).ff = function () {
    return this.g4q_1;
  };
  protoOf(FormPart).gf = function () {
    return this.h4q_1;
  };
  protoOf(FormPart).j4q = function () {
    return this.i4q_1;
  };
  protoOf(FormPart).toString = function () {
    return 'FormPart(key=' + this.g4q_1 + ', value=' + toString(this.h4q_1) + ', headers=' + toString(this.i4q_1) + ')';
  };
  protoOf(FormPart).hashCode = function () {
    var result = getStringHashCode(this.g4q_1);
    result = imul(result, 31) + hashCode(this.h4q_1) | 0;
    result = imul(result, 31) + hashCode(this.i4q_1) | 0;
    return result;
  };
  protoOf(FormPart).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FormPart))
      return false;
    if (!(this.g4q_1 === other.g4q_1))
      return false;
    if (!equals(this.h4q_1, other.h4q_1))
      return false;
    if (!equals(this.i4q_1, other.i4q_1))
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
      return $value.s1m();
    };
  }
  function formData$lambda_5($value) {
    return function () {
      $value.f4();
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
      _this__u8e3s4.j32().p2p(key, toString(value));
      tmp = Unit_instance;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? Unit_instance : tmp1_elvis_lhs;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.o4q_1 = call;
    this.p4q_1 = responseData.w3t_1;
    this.q4q_1 = responseData.r3t_1;
    this.r4q_1 = responseData.u3t_1;
    this.s4q_1 = responseData.s3t_1;
    this.t4q_1 = responseData.x3t_1;
    var tmp = this;
    var tmp_0 = responseData.v3t_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.u4q_1 = tmp0_elvis_lhs == null ? Companion_getInstance().f2e_1 : tmp0_elvis_lhs;
    this.v4q_1 = responseData.t3t_1;
  }
  protoOf(DefaultHttpResponse).g3t = function () {
    return this.o4q_1;
  };
  protoOf(DefaultHttpResponse).z1o = function () {
    return this.p4q_1;
  };
  protoOf(DefaultHttpResponse).i3t = function () {
    return this.q4q_1;
  };
  protoOf(DefaultHttpResponse).j3t = function () {
    return this.r4q_1;
  };
  protoOf(DefaultHttpResponse).k3t = function () {
    return this.s4q_1;
  };
  protoOf(DefaultHttpResponse).l3t = function () {
    return this.t4q_1;
  };
  protoOf(DefaultHttpResponse).h3t = function () {
    return this.u4q_1;
  };
  protoOf(DefaultHttpResponse).j32 = function () {
    return this.v4q_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).p3t().toString() + ', ' + this.i3t().toString() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.g3t().b3t();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().z2l_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e4r_1 = _this__u8e3s4;
    this.f4r_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            var tmp0_elvis_lhs = charset_0(this.e4r_1);
            var originCharset = tmp0_elvis_lhs == null ? this.f4r_1 : tmp0_elvis_lhs;
            this.g4r_1 = originCharset.q2m();
            var this_0 = this.e4r_1;
            this.v8_1 = 1;
            var tmp_0 = this_0.g3t();
            var tmp_1 = getKClass(Source);
            var tmp_2 = !(null == null) ? isInterface(null, Source) : false;
            var tmp_3;
            try {
              tmp_3 = createKType(getKClass(Source), arrayOf([]), false);
            } catch ($p) {
              var tmp_4;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_4 = null;
              } else {
                throw $p;
              }
              tmp_3 = tmp_4;
            }

            suspendResult = tmp_0.f3t(new TypeInfo(tmp_1, tmp_2, tmp_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = (!(suspendResult == null) ? isInterface(suspendResult, Source) : false) ? suspendResult : THROW_CCE();
            return decode(this.g4r_1, input);
          case 2:
            throw this.y8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.w8_1 === 2) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  function Phases_1() {
    Phases_instance_1 = this;
    this.l3s_1 = new PipelinePhase('Receive');
    this.m3s_1 = new PipelinePhase('Parse');
    this.n3s_1 = new PipelinePhase('Transform');
    this.o3s_1 = new PipelinePhase('State');
    this.p3s_1 = new PipelinePhase('After');
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
    Pipeline.call(this, [Phases_getInstance_1().l3s_1, Phases_getInstance_1().m3s_1, Phases_getInstance_1().n3s_1, Phases_getInstance_1().o3s_1, Phases_getInstance_1().p3s_1]);
    this.o4r_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).u2s = function () {
    return this.o4r_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.j3z_1 = new PipelinePhase('Before');
    this.k3z_1 = new PipelinePhase('State');
    this.l3z_1 = new PipelinePhase('After');
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
    Pipeline.call(this, [Phases_getInstance_2().j3z_1, Phases_getInstance_2().k3z_1, Phases_getInstance_2().l3z_1]);
    this.w4r_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).u2s = function () {
    return this.w4r_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.j3u_1 = expectedType;
    this.k3u_1 = response;
  }
  protoOf(HttpResponseContainer).ff = function () {
    return this.j3u_1;
  };
  protoOf(HttpResponseContainer).gf = function () {
    return this.k3u_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.j3u_1.toString() + ', response=' + toString(this.k3u_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.j3u_1.hashCode();
    result = imul(result, 31) + hashCode(this.k3u_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    if (!this.j3u_1.equals(other.j3u_1))
      return false;
    if (!equals(this.k3u_1, other.k3u_1))
      return false;
    return true;
  };
  function $fetchResponseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f4s_1 = _this__u8e3s4;
  }
  protoOf($fetchResponseCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 7;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.w8_1 = 6;
            var builder = (new HttpRequestBuilder()).h3x(this.f4s_1.j4s_1);
            this.v8_1 = 2;
            suspendResult = this.f4s_1.k4s_1.q3s(builder, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i4s_1 = suspendResult;
            this.v8_1 = 3;
            suspendResult = save(this.i4s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.h4s_1 = suspendResult.n3q();
            this.v8_1 = 4;
            suspendResult = this.f4s_1.l4s(this.i4s_1.n3q(), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            return this.h4s_1;
          case 5:
            return this.g4s_1;
          case 6:
            this.w8_1 = 7;
            var tmp_1 = this.y8_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.y8_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.y8_1;
            }

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
  function HttpStatement(builder, client) {
    this.j4s_1 = builder;
    this.k4s_1 = client;
  }
  protoOf(HttpStatement).m4s = function ($completion) {
    return this.n4s($completion);
  };
  protoOf(HttpStatement).n4s = function ($completion) {
    var tmp = new $fetchResponseCOROUTINE$(this, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(HttpStatement).l4s = function (_this__u8e3s4, cause, $completion) {
    var tmp = get_job(_this__u8e3s4.z1o());
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    // Inline function 'kotlin.runCatching' call
    var tmp_0;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = engineContentForCleanup(_this__u8e3s4);
      tmp_0 = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    // Inline function 'kotlin.Result.getOrNull' call
    var this_0 = tmp_0;
    var content = _Result___get_isFailure__impl__jpiriv(this_0) ? null : _Result___get_value__impl__bjfvqg(this_0);
    if (cause == null) {
      var contentIsClosedForRead = (content == null ? null : content.d2c()) === true;
      var contentCloseCause = content == null ? null : content.o2a();
      if (contentIsClosedForRead && contentCloseCause == null) {
        job.r1v();
      } else {
        // Inline function 'io.ktor.client.statement.toCancellationException' call
        var message = 'Response body was abandoned';
        var tmp0_elvis_lhs = contentCloseCause instanceof CancellationException ? contentCloseCause : null;
        var tmp$ret$5 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$(message, contentCloseCause) : tmp0_elvis_lhs;
        job.i1q(tmp$ret$5);
      }
    } else {
      // Inline function 'io.ktor.client.statement.toCancellationException' call
      var message_0 = 'Exception occurred during request execution';
      var tmp0_elvis_lhs_0 = cause instanceof CancellationException ? cause : null;
      var tmp$ret$6 = tmp0_elvis_lhs_0 == null ? CancellationException_init_$Create$(message_0, cause) : tmp0_elvis_lhs_0;
      job.i1q(tmp$ret$6);
    }
    // Inline function 'kotlin.runCatching' call
    var tmp_2;
    try {
      var tmp_3;
      if (content == null) {
        tmp_3 = null;
      } else {
        cancel_1(content);
        tmp_3 = Unit_instance;
      }
      // Inline function 'kotlin.Companion.success' call
      var value_0 = tmp_3;
      tmp_2 = _Result___init__impl__xyqfz8(value_0);
    } catch ($p_0) {
      var tmp_4;
      if ($p_0 instanceof Error) {
        var e_0 = $p_0;
        // Inline function 'kotlin.Companion.failure' call
        tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
      } else {
        throw $p_0;
      }
      tmp_2 = tmp_4;
    }
    return job.f1q($completion);
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.j4s_1.n3r_1.toString() + ']';
  };
  function engineContentForCleanup(_this__u8e3s4) {
    if (get_isSaved(_this__u8e3s4))
      return Companion_getInstance().f2e_1;
    var origin = resolveOrigin(_this__u8e3s4);
    var tmp;
    if (origin instanceof DefaultHttpResponse) {
      tmp = origin.u4q_1;
    } else {
      if (origin instanceof SavedHttpResponse) {
        tmp = Companion_getInstance().f2e_1;
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(_this__u8e3s4, listener, contentLength, null)).b2e_1;
  }
  function observable$slambda($this_observable, $listener, $contentLength, resultContinuation) {
    this.w4s_1 = $this_observable;
    this.x4s_1 = $listener;
    this.y4s_1 = $contentLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).z3e = function ($this$writer, $completion) {
    var tmp = this.a3f($this$writer, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(observable$slambda).r9 = function (p1, $completion) {
    return this.z3e(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 16;
            this.f4t_1 = get_ByteArrayPool();
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.b4t_1 = this.f4t_1;
            this.a4t_1 = this.b4t_1.n2m();
            this.v8_1 = 2;
            continue $sm;
          case 2:
            this.v8_1 = 3;
            continue $sm;
          case 3:
            this.w8_1 = 15;
            this.e4t_1 = this.a4t_1;
            this.c4t_1 = 0n;
            this.v8_1 = 4;
            continue $sm;
          case 4:
            if (!!this.w4s_1.d2c()) {
              this.v8_1 = 9;
              continue $sm;
            }

            this.v8_1 = 5;
            suspendResult = readAvailable(this.w4s_1, this.e4t_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.d4t_1 = suspendResult;
            if (this.d4t_1 <= 0) {
              this.v8_1 = 4;
              continue $sm;
            } else {
              this.v8_1 = 6;
              continue $sm;
            }

          case 6:
            this.v8_1 = 7;
            suspendResult = writeFully_0(this.z4s_1.w2j_1, this.e4t_1, 0, this.d4t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp_0 = this;
            var tmp0 = this.c4t_1;
            var other = this.d4t_1;
            tmp_0.c4t_1 = add(tmp0, fromInt(other));
            this.v8_1 = 8;
            suspendResult = this.x4s_1.n3v(this.c4t_1, this.y4s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.v8_1 = 4;
            continue $sm;
          case 9:
            var closedCause = this.w4s_1.o2a();
            close(this.z4s_1.w2j_1, closedCause);
            if (closedCause == null && this.c4t_1 === 0n) {
              this.v8_1 = 10;
              suspendResult = this.x4s_1.n3v(this.c4t_1, this.y4s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 11;
              continue $sm;
            }

          case 10:
            this.v8_1 = 11;
            continue $sm;
          case 11:
            this.w8_1 = 16;
            this.v8_1 = 12;
            var tmp_1 = this;
            continue $sm;
          case 12:
            this.w8_1 = 16;
            this.b4t_1.o2m(this.a4t_1);
            this.v8_1 = 14;
            continue $sm;
          case 13:
            this.w8_1 = 16;
            this.b4t_1.o2m(this.a4t_1);
            if (false) {
              this.v8_1 = 1;
              continue $sm;
            }

            this.v8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            this.w8_1 = 16;
            var t = this.y8_1;
            this.b4t_1.o2m(this.a4t_1);
            throw t;
          case 16:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 16) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).a3f = function ($this$writer, completion) {
    var i = new observable$slambda(this.w4s_1, this.x4s_1, this.y4s_1, completion);
    i.z4s_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($this_observable, $listener, $contentLength, resultContinuation) {
    var i = new observable$slambda($this_observable, $listener, $contentLength, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.z3e($this$writer, $completion);
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
    this.g4t_1 = response;
    this.h4t_1 = cause;
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
    this.j4t_1 = 0n;
  }
  protoOf(EmptyContent).y37 = function () {
    return this.j4t_1;
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
    if (method.equals(Companion_getInstance_2().p32_1) || method.equals(Companion_getInstance_2().q32_1))
      return Unit_instance;
    var header = _this__u8e3s4.d1b('Content-Encoding');
    if (header == null) {
      if (!alwaysRemove)
        return Unit_instance;
    } else {
      var tmp = get_DecompressionListAttribute();
      attributes.h2n(tmp, dropCompressionHeaders$lambda).c1(header);
    }
    _this__u8e3s4.s2p('Content-Encoding');
    _this__u8e3s4.s2p('Content-Length');
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
      var tmp_0 = !(null == null) ? isInterface(null, KtMutableList) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtMutableList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().cc(), arrayOf([]), false))]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
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
    return this_0.c2y();
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
    var tmp_1 = null instanceof FetchOptions;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(FetchOptions), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.k4t_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_4;
  function Companion_getInstance_13() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FetchOptions(requestInit) {
    Companion_getInstance_13();
    this.l4t_1 = requestInit;
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function Js() {
  }
  protoOf(Js).m4t = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new JsClientEngineConfig();
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).r3s = function (block) {
    return this.m4t(block);
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
    tmp.r4t_1 = JsClientEngineConfig$requestInit$lambda;
    var tmp_0 = this;
    tmp_0.s4t_1 = fetch$ref();
    this.t4t_1 = Object.create(null);
  }
  function initHook$init$() {
    engines_getInstance().v4t(Js_instance);
    return Unit_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers, $completion) {
    var tmp = new $createWebSocketCOROUTINE$($this, urlString_capturingHack, headers, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$($this, request, callContext, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
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
    this.i4v_1 = _this__u8e3s4;
    this.j4v_1 = data;
  }
  protoOf($executeCOROUTINE$_1).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 6;
            this.v8_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k4v_1 = suspendResult;
            this.m4v_1 = this.j4v_1.r3w_1.b2n(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.j4v_1)) {
              this.v8_1 = 5;
              suspendResult = executeWebSocketRequest(this.i4v_1, this.j4v_1, this.k4v_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8_1 = 2;
              continue $sm;
            }

          case 2:
            this.l4v_1 = GMTDate();
            this.v8_1 = 3;
            suspendResult = ktor_toRaw(this.j4v_1, this.m4v_1, this.k4v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rawRequest = suspendResult;
            var tmp0_safe_receiver = this.j4v_1.r3w_1.c2n(Companion_getInstance_13().k4t_1);
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l4t_1;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              tmp_0 = JsClientEngine$execute$lambda;
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var fetchOptions = tmp_0;
            this.v8_1 = 4;
            suspendResult = commonFetch(this.j4v_1.m3w_1.toString(), rawRequest, fetchOptions, this.i4v_1.s4v_1, get_job(this.k4v_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers, this.j4v_1.n3w_1, this.j4v_1.r3w_1);
            var version = Companion_getInstance_6().x32_1;
            var body = readBody(CoroutineScope_0(this.k4v_1), rawResponse);
            var tmp2_safe_receiver = this.j4v_1.r3w_1.c2n(get_ResponseAdapterAttributeKey());
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.q4n(this.j4v_1, status, headers, body, this.j4v_1.p3w_1, this.k4v_1);
            var responseBody = tmp3_elvis_lhs == null ? body : tmp3_elvis_lhs;
            return new HttpResponseData(status, this.l4v_1, headers, version, responseBody, this.k4v_1);
          case 5:
            return suspendResult;
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
  function $createWebSocketCOROUTINE$(_this__u8e3s4, urlString_capturingHack, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e4u_1 = _this__u8e3s4;
    this.f4u_1 = urlString_capturingHack;
    this.g4u_1 = headers;
  }
  protoOf($createWebSocketCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            var tmp0 = this.g4u_1.m2p();
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
              var tmp0_safe_receiver = this.g4u_1.l2p(element_0);
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination_0.c1(tmp0_safe_receiver);
              }
            }

            var this_0 = flatten(destination_0);
            tmp_0.i4u_1 = copyToArray(this_0);
            if (PlatformUtils_getInstance().x2o_1) {
              this.h4u_1 = new WebSocket(this.f4u_1, this.i4u_1);
              this.v8_1 = 2;
              continue $sm;
            } else {
              var ws_import = import('ws');
              this.v8_1 = 1;
              suspendResult = await_0(ws_import, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ws_capturingHack = suspendResult.default;
            var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
            this.g4u_1.r2p(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
            this.h4u_1 = new ws_capturingHack(this.f4u_1, this.i4u_1, {headers: headers_capturingHack});
            this.v8_1 = 2;
            continue $sm;
          case 2:
            return this.h4u_1;
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
  function $executeWebSocketRequestCOROUTINE$(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r4u_1 = _this__u8e3s4;
    this.s4u_1 = request;
    this.t4u_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 5;
            this.v4u_1 = GMTDate();
            this.y4u_1 = this.s4u_1.m3w_1.toString();
            this.z4u_1 = this.s4u_1.r3w_1.b2n(get_WEBSOCKETS_KEY());
            this.v8_1 = 1;
            suspendResult = createWebSocket(this.r4u_1, this.y4u_1, this.s4u_1.o3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w4u_1 = suspendResult;
            this.u4u_1 = new JsWebSocketSession(this.t4u_1, this.w4u_1, this.z4u_1.x4m_1);
            this.w8_1 = 3;
            this.v8_1 = 2;
            suspendResult = awaitConnection(this.w4u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x4u_1 = suspendResult;
            this.w8_1 = 5;
            this.v8_1 = 4;
            continue $sm;
          case 3:
            this.w8_1 = 5;
            var tmp_0 = this.y8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.y8_1;
              var tmp_1 = this;
              cancel_3(this.t4u_1, CancellationException_0('Failed to connect to ' + this.y4u_1, cause));
              throw cause;
            } else {
              throw this.y8_1;
            }

          case 4:
            this.w8_1 = 5;
            var this_0 = this.w4u_1.protocol;
            var tmp_2;
            if (charSequenceLength(this_0) > 0) {
              tmp_2 = this_0;
            } else {
              tmp_2 = null;
            }

            var protocol = tmp_2;
            var headers = !(protocol == null) ? headersOf('Sec-WebSocket-Protocol', protocol) : Companion_getInstance_5().e32_1;
            return new HttpResponseData(Companion_getInstance_1().f33_1, this.v4u_1, headers, Companion_getInstance_6().x32_1, this.u4u_1, this.t4u_1);
          case 5:
            throw this.y8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 5) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.s4v_1 = config;
    this.t4v_1 = setOf_0([HttpTimeoutCapability_instance, WebSocketCapability_instance, SSECapability_instance]);
    // Inline function 'kotlin.check' call
    if (!(this.s4v_1.z3x_1 == null)) {
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).t3r = function () {
    return this.s4v_1;
  };
  protoOf(JsClientEngine).t3w = function () {
    return this.t4v_1;
  };
  protoOf(JsClientEngine).v3x = function (data, $completion) {
    var tmp = new $executeCOROUTINE$_1(this, data, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  function mapToKtor(_this__u8e3s4, method, attributes) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4, method, attributes));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.n1t();
    $l$block: {
      if (cancellable.v1p()) {
        break $l$block;
      }
      // Inline function 'io.ktor.client.utils.addEventListener' call
      var events = ['error'];
      var events_0 = listOf_0(arrayConcat([['open'], events]));
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
      cancellable.z1r(awaitConnection$lambda_1(disposable_0, _this__u8e3s4));
    }
    return cancellable.v1t();
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.u4v_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).k1s = function () {
    return this.u4v_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).i3 = function () {
    return this.u4v_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.i3(), other.i3());
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
    return hashCode(this.i3());
  };
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.p2p(key, value);
      return Unit_instance;
    };
  }
  function mapToKtor$lambda($this_mapToKtor, $method, $attributes) {
    return function ($this$buildHeaders) {
      // Inline function 'kotlin.js.asDynamic' call
      $this_mapToKtor.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      dropCompressionHeaders($this$buildHeaders, $method, $attributes, PlatformUtils_getInstance().x2o_1);
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
        $disposable.k1s();
      }
      var tmp0_subject = event.type;
      if (tmp0_subject === 'open') {
        var tmp0 = $continuation;
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value = $this_awaitConnection;
        var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
        tmp0.g9(tmp$ret$5);
      } else if (tmp0_subject === 'error') {
        var tmp0_0 = $continuation;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception));
        tmp0_0.g9(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_1($disposable, $this_awaitConnection) {
    return function (cause) {
      $disposable.k1s();
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
      return Companion_getInstance().f2e_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).b2e_1;
  }
  function readChunk(_this__u8e3s4, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(safe));
    tmp_0.catch(readChunk$lambda_0(safe));
    return safe.n9();
  }
  function channelFromStream$slambda$lambda(it) {
    return Unit_instance;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.d4w_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).z3e = function ($this$writer, $completion) {
    var tmp = this.a3f($this$writer, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(channelFromStream$slambda).r9 = function (p1, $completion) {
    return this.z3e(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 9;
            this.g4w_1 = this.d4w_1.getReader();
            this.w8_1 = 7;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.v8_1 = 6;
              continue $sm;
            }

            this.v8_1 = 2;
            suspendResult = readChunk(this.g4w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            if (tmp0_elvis_lhs == null) {
              this.v8_1 = 6;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.h4w_1 = tmp0_elvis_lhs;
              this.v8_1 = 3;
              continue $sm;
            }

          case 3:
            var chunk = this.h4w_1;
            this.v8_1 = 4;
            suspendResult = writeFully_0(this.e4w_1.w2j_1, asByteArray(chunk), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.v8_1 = 5;
            suspendResult = this.e4w_1.w2j_1.y2b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.v8_1 = 1;
            continue $sm;
          case 6:
            this.w8_1 = 9;
            this.v8_1 = 10;
            continue $sm;
          case 7:
            this.w8_1 = 9;
            var tmp_1 = this.y8_1;
            if (tmp_1 instanceof Error) {
              this.f4w_1 = this.y8_1;
              this.v8_1 = 8;
              var tmp_2 = this.g4w_1.cancel(this.f4w_1);
              suspendResult = await_0(tmp_2.catch(channelFromStream$slambda$lambda), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.y8_1;
            }

          case 8:
            throw this.f4w_1;
          case 9:
            throw this.y8_1;
          case 10:
            this.w8_1 = 9;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.w8_1 === 9) {
          throw e;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e;
        }
      }
     while (true);
  };
  protoOf(channelFromStream$slambda).a3f = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.d4w_1, completion);
    i.e4w_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.z3e($this$writer, $completion);
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
      this_0.g9(tmp$ret$1);
      return Unit_instance;
    };
  }
  function readChunk$lambda_0($continuation) {
    return function (cause) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
      this_0.g9(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch(input, init, requestConfig, config, callJob, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.n1t();
    var controller = AbortController_0();
    init.signal = controller.signal;
    config.r4t_1(init);
    requestConfig(init);
    callJob.d1q(true, VOID, commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().x2o_1) {
      tmp = config.s4t_1(input, init);
    } else {
      var options = Object.assign(Object.create(null), init, config.t4t_1);
      tmp = config.s4t_1(input, options);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    return cancellable.v1t();
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
      this_0.g9(tmp$ret$1);
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
      tmp0.g9(tmp$ret$1);
      return Unit_instance;
    };
  }
  function fetch$ref() {
    return constructCallableReference(function (p0, p1) {
      return fetch(p0, p1);
    }, 2, 0, 32, 'fetch');
  }
  function isReservedStatusCode($this, $receiver) {
    // Inline function 'kotlin.let' call
    var resolved = Companion_getInstance_7().p3g($receiver);
    return resolved == null || equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function sam$kotlinx_coroutines_DisposableHandle$0_0(function_0) {
    this.i4w_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).k1s = function () {
    return this.i4w_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).i3 = function () {
    return this.i4w_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.i3(), other.i3());
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
    return hashCode(this.i3());
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
          this$0.l4w_1.q1v(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.m4w_1.y25(frame);
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
      this$0.l4w_1.q1v(cause);
      this$0.m4w_1.c26(cause);
      this$0.n4w_1.g26();
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
      this$0.l4w_1.p1v(reason);
      this$0.m4w_1.y25(Close_init_$Create$(reason));
      this$0.m4w_1.e26();
      this$0.n4w_1.g26();
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
        this$0.k4w_1.close();
      } else {
        this$0.k4w_1.close(Codes_NORMAL_getInstance().m3g_1, 'Client failed');
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
        if (tmp0.k4w_1.readyState === WebSocket.OPEN) {
          if (cause == null) {
            this$0.k4w_1.close();
          } else {
            this$0.k4w_1.close(Codes_NORMAL_getInstance().m3g_1, 'Client failed');
          }
          break $l$block;
        }
        // Inline function 'io.ktor.client.utils.addEventListener' call
        var this_0 = tmp0.k4w_1;
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
      $onMessage.k1s();
      $onError.k1s();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.z4w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).a2l = function ($this$launch, $completion) {
    var tmp = this.b2l($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(JsWebSocketSession$slambda).r9 = function (p1, $completion) {
    return this.a2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 10;
            this.e4x_1 = this.z4w_1.n4w_1;
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.c4x_1 = this.e4x_1;
            this.b4x_1 = null;
            this.v8_1 = 2;
            continue $sm;
          case 2:
            this.v8_1 = 3;
            continue $sm;
          case 3:
            this.w8_1 = 9;
            this.w8_1 = 8;
            this.d4x_1 = this.c4x_1.t();
            this.v8_1 = 4;
            continue $sm;
          case 4:
            this.v8_1 = 5;
            suspendResult = this.d4x_1.a24(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.v8_1 = 6;
              continue $sm;
            }

            var e = this.d4x_1.v();
            switch (e.y3g_1.a1_1) {
              case 0:
                var text = e.z3g_1;
                this.z4w_1.k4w_1.send(decodeToString(text, 0, 0 + text.length | 0));
                break;
              case 1:
                var tmp_0 = e.z3g_1;
                var source = tmp_0 instanceof Int8Array ? tmp_0 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.z4w_1.k4w_1.send(frameData);
                break;
              case 2:
                var builder = new Buffer();
                writeFully(builder, e.z3g_1);
                var data = builder;
                var code = data.b1m();
                var reason = readText(data);
                this.z4w_1.l4w_1.p1v(new CloseReason(code, reason));
                if (isReservedStatusCode(this.z4w_1, code)) {
                  this.z4w_1.k4w_1.close();
                } else {
                  this.z4w_1.k4w_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            this.v8_1 = 4;
            continue $sm;
          case 6:
            this.w8_1 = 10;
            this.v8_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            this.w8_1 = 10;
            cancelConsumed(this.c4x_1, this.b4x_1);
            this.v8_1 = 12;
            continue $sm;
          case 8:
            this.w8_1 = 9;
            var tmp_2 = this.y8_1;
            if (tmp_2 instanceof Error) {
              var e_0 = this.y8_1;
              var tmp_3 = this;
              this.b4x_1 = e_0;
              throw e_0;
            } else {
              throw this.y8_1;
            }

          case 9:
            this.w8_1 = 10;
            var t = this.y8_1;
            cancelConsumed(this.c4x_1, this.b4x_1);
            throw t;
          case 10:
            throw this.y8_1;
          case 11:
            this.w8_1 = 10;
            cancelConsumed(this.c4x_1, this.b4x_1);
            if (false) {
              this.v8_1 = 1;
              continue $sm;
            }

            this.v8_1 = 12;
            continue $sm;
          case 12:
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.w8_1 === 10) {
          throw e_1;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).b2l = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.z4w_1, completion);
    i.a4x_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2l($this$launch, $completion);
    }, 1);
  }
  function JsWebSocketSession(coroutineContext, websocket, channelsConfig) {
    this.j4w_1 = coroutineContext;
    this.k4w_1 = websocket;
    this.l4w_1 = CompletableDeferred();
    this.m4w_1 = from(Factory_getInstance(), channelsConfig.l3h_1);
    this.n4w_1 = from(Factory_getInstance(), channelsConfig.m3h_1);
    this.o4w_1 = this.m4w_1;
    this.p4w_1 = this.n4w_1;
    this.q4w_1 = this.l4w_1;
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_0 = this.k4w_1;
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
    var this_1 = this.k4w_1;
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
    var this_2 = this.k4w_1;
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
    var tmp0_safe_receiver = this.j4w_1.i9(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b1q(JsWebSocketSession$lambda_5(this, onMessage, onError));
    }
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9 = 'arraybuffer';
    this.k4w_1.binaryType = tmp$ret$9;
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    // Inline function 'kotlin.require' call
    if (!!channelsConfig.l3h_1.g3o()) {
      var message = 'Suspendable channels are not supported in JS.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(JsWebSocketSession).z1o = function () {
    return this.j4w_1;
  };
  protoOf(JsWebSocketSession).h3h = function () {
    return this.o4w_1;
  };
  protoOf(JsWebSocketSession).i3h = function () {
    return this.p4w_1;
  };
  protoOf(JsWebSocketSession).f3h = function (_) {
    throw WebSocketException_init_$Create$('Max frame size switch is not supported in Js engine.');
  };
  protoOf(JsWebSocketSession).g3h = function () {
    return 9223372036854775807n;
  };
  protoOf(JsWebSocketSession).e3h = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    if (!negotiatedExtensions.r()) {
      var message = 'Extensions are not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(JsWebSocketSession).y2b = function ($completion) {
    return Unit_instance;
  };
  function ktor_toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
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
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
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
      $this$buildObject.method = $this_toRaw.n3w_1.u32_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.e3s_1) {
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
    this.k4y_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytes$slambda).z3e = function ($this$writer, $completion) {
    var tmp = this.a3f($this$writer, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(getBodyBytes$slambda).r9 = function (p1, $completion) {
    return this.z3e(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytes$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.k4y_1.z39(this.l4y_1.w2j_1, this);
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
  protoOf(getBodyBytes$slambda).a3f = function ($this$writer, completion) {
    var i = new getBodyBytes$slambda(this.k4y_1, completion);
    i.l4y_1 = $this$writer;
    return i;
  };
  function getBodyBytes$slambda_0($content, resultContinuation) {
    var i = new getBodyBytes$slambda($content, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.z3e($this$writer, $completion);
    }, 1);
  }
  function $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n4x_1 = _this__u8e3s4;
    this.o4x_1 = clientConfig;
    this.p4x_1 = callContext;
  }
  protoOf($toRawCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.q4x_1 = {};
            var this_0 = this.n4x_1;
            var skipContentLengthHeader = !get_supportsRequestBody(this_0.n3w_1) && isEmpty(this_0.p3w_1);
            mergeHeaders(this_0.o3w_1, this_0.p3w_1, toRaw$lambda(skipContentLengthHeader, this.q4x_1));
            this.v8_1 = 1;
            suspendResult = getBodyBytes(this.n4x_1.p3w_1, this.p4x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return buildObject(toRaw$lambda_0(this.n4x_1, this.q4x_1, this.o4x_1, bodyBytes));
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
  function $getBodyBytesCOROUTINE$(content, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z4x_1 = content;
    this.a4y_1 = callContext;
  }
  protoOf($getBodyBytesCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 4;
            var tmp0_subject = this.z4x_1;
            if (tmp0_subject instanceof ByteArrayContent) {
              this.b4y_1 = this.z4x_1.z37();
              this.v8_1 = 5;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ReadChannelContent) {
                this.v8_1 = 3;
                suspendResult = readBuffer(this.z4x_1.x39(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject instanceof WriteChannelContent) {
                  this.v8_1 = 2;
                  var tmp_0 = GlobalScope_instance;
                  suspendResult = readBuffer(writer(tmp_0, this.a4y_1, VOID, getBodyBytes$slambda_0(this.z4x_1, null)).b2e_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject instanceof ContentWrapper) {
                    this.v8_1 = 1;
                    suspendResult = getBodyBytes(this.z4x_1.d3a(), this.a4y_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject instanceof NoContent) {
                      this.b4y_1 = null;
                      this.v8_1 = 5;
                      continue $sm;
                    } else {
                      if (tmp0_subject instanceof ProtocolUpgrade) {
                        var tmp_1 = this;
                        throw new UnsupportedContentTypeException(this.z4x_1);
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
            this.b4y_1 = suspendResult;
            this.v8_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.b4y_1 = readByteArray(ARGUMENT);
            this.v8_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.b4y_1 = readByteArray(ARGUMENT_0);
            this.v8_1 = 5;
            continue $sm;
          case 4:
            throw this.y8_1;
          case 5:
            return this.b4y_1;
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
  function Node(entry, next) {
    this.m4y_1 = entry;
    this.n4y_1 = next;
  }
  function engines$iterator$1() {
    this.o4y_1 = engines_getInstance().u4t_1.kotlinx$atomicfu$value;
  }
  protoOf(engines$iterator$1).v = function () {
    var result = ensureNotNull(this.o4y_1);
    this.o4y_1 = result.n4y_1;
    return result.m4y_1.p4y_1;
  };
  protoOf(engines$iterator$1).u = function () {
    return !(null == this.o4y_1);
  };
  function engines() {
    engines_instance = this;
    this.u4t_1 = atomic$ref$1(null);
  }
  protoOf(engines).v4t = function (item) {
    this.r4y(item, 1.0);
  };
  protoOf(engines).r4y = function (item, priority) {
    $l$loop: while (true) {
      var current = this.u4t_1.kotlinx$atomicfu$value;
      var new_0 = new Node(new EngineEntry(item, priority), current);
      if (this.u4t_1.atomicfu$compareAndSet(current, new_0))
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
  function EngineEntry(factory, priority) {
    priority = priority === VOID ? 1.0 : priority;
    this.p4y_1 = factory;
    this.q4y_1 = priority;
    // Inline function 'kotlin.require' call
    if (!!isNaN_0(this.q4y_1)) {
      var message = 'Priority cannot be NaN';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function ProxyConfig_init_$Init$($this) {
    // Inline function 'kotlin.error' call
    var message = 'ProxyConfig should accept a url';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ProxyConfig_init_$Create$() {
    return ProxyConfig_init_$Init$(objectCreate(protoOf(ProxyConfig)));
  }
  function ProxyConfig(url) {
    this.s4y_1 = url;
  }
  protoOf(ProxyConfig).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.apply' call
    var this_1 = this.s4y_1;
    this_0.q(this_1.n36_1.y35_1);
    this_0.q('://');
    if (!(this_1.f36_1 == null)) {
      this_0.q(encodeURLParameter(ensureNotNull(this_1.f36_1)));
      if (!(this_1.g36_1 == null)) {
        this_0.s(_Char___init__impl__6a9atx(58));
        this_0.q(encodeURLParameter(ensureNotNull(this_1.g36_1)));
      }
      this_0.s(_Char___init__impl__6a9atx(64));
    }
    this_0.q(get_hostWithPort(this_1));
    return this_0.toString();
  };
  function ProxyBuilder() {
  }
  protoOf(ProxyBuilder).t4y = function (url) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!equals_0(url.n36_1.y35_1, Companion_getInstance_8().y36_1.y35_1, true)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new ProxyConfig(url);
  };
  var ProxyBuilder_instance;
  function ProxyBuilder_getInstance() {
    return ProxyBuilder_instance;
  }
  function ConnectTimeoutException() {
  }
  function SocketTimeoutException() {
  }
  function InterruptedIOException() {
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
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
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.e();
  });
  protoOf(HttpClientEngineBase).t3w = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).u3r = install;
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.f();
  });
  protoOf(KtorCallContextElement).i9 = get;
  protoOf(KtorCallContextElement).xf = fold;
  protoOf(KtorCallContextElement).wf = minusKey;
  protoOf(KtorCallContextElement).yf = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.e();
  });
  protoOf(HttpRequest$1).z1o = get_coroutineContext;
  protoOf(JsWebSocketSession).j3h = send;
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
  ProxyBuilder_instance = new ProxyBuilder();
  useEngineDispatcher = true;
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
