(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-http.js', './ktor-ktor-client-core.js', './ktor-ktor-utils.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'khttpclient'.");
    }
    globalThis.khttpclient = factory(typeof khttpclient === 'undefined' ? {} : khttpclient, globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-client-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var Enum = kotlin_kotlin.$_$.sf;
  var protoOf = kotlin_kotlin.$_$.dc;
  var initMetadataForClass = kotlin_kotlin.$_$.fb;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForCompanion = kotlin_kotlin.$_$.gb;
  var split = kotlin_kotlin.$_$.ge;
  var lastOrNull = kotlin_kotlin.$_$.o7;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var Image_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var Video_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var ContentType_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.o;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.o9;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.g;
  var url = kotlin_io_ktor_ktor_client_core.$_$.i;
  var toString = kotlin_kotlin.$_$.gc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.i1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.e2;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.h;
  var timeout = kotlin_io_ktor_ktor_client_core.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var ensureNotNull = kotlin_kotlin.$_$.ug;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var contentType = kotlin_io_ktor_ktor_http.$_$.t1;
  var FormBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.f1;
  var append = kotlin_io_ktor_ktor_http.$_$.m1;
  var copyToArray = kotlin_kotlin.$_$.t6;
  var formData = kotlin_io_ktor_ktor_client_core.$_$.f;
  var MultiPartFormDataContent = kotlin_io_ktor_ktor_client_core.$_$.e;
  var getKClass = kotlin_kotlin.$_$.wc;
  var arrayOf = kotlin_kotlin.$_$.qg;
  var createKType = kotlin_kotlin.$_$.uc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.y;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.m;
  var ParametersBuilder = kotlin_io_ktor_ktor_http.$_$.h1;
  var FormDataContent = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.j;
  var first = kotlin_kotlin.$_$.c7;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.p;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var closeFinally = kotlin_kotlin.$_$.rg;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.hb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s3;
  var toMap = kotlin_io_ktor_ktor_utils.$_$.d1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s2;
  var isByteArray = kotlin_kotlin.$_$.ob;
  var THROW_CCE = kotlin_kotlin.$_$.cg;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var decodeToString = kotlin_kotlin.$_$.jd;
  var constructCallableReference = kotlin_kotlin.$_$.wa;
  var lazy = kotlin_kotlin.$_$.ah;
  var KProperty1 = kotlin_kotlin.$_$.bd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.cb;
  var isBlank = kotlin_kotlin.$_$.sd;
  var ProxyBuilder_instance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Url = kotlin_io_ktor_ktor_http.$_$.l1;
  var startsWith = kotlin_kotlin.$_$.he;
  var initMetadataForLambda = kotlin_kotlin.$_$.kb;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.d5;
  var RuntimeException_init_$Create$_0 = kotlin_kotlin.$_$.b5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.ub;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Type, 'Type', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(HttpParameter, 'HttpParameter');
  initMetadataForCoroutine($proceedCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest, VOID, VOID, [0, 1]);
  initMetadataForCoroutine($fromCOROUTINE$, CoroutineImpl);
  initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
  initMetadataForClass(HttpResponse, 'HttpResponse');
  initMetadataForLambda(WebsocketRequest$textListener$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(WebsocketRequest$bytesListener$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(WebsocketRequest$start$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(WebsocketRequest$start$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($startCOROUTINE$, CoroutineImpl);
  initMetadataForClass(WebsocketRequest, 'WebsocketRequest', WebsocketRequest, VOID, VOID, [0, 1]);
  //endregion
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    Type_QUERY_instance = new Type('QUERY', 0);
    Type_PARAM_instance = new Type('PARAM', 1);
    Type_FILE_instance = new Type('FILE', 2);
    Type_JSON_instance = new Type('JSON', 3);
  }
  var Type_QUERY_instance;
  var Type_PARAM_instance;
  var Type_FILE_instance;
  var Type_JSON_instance;
  function Type(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
  }
  protoOf(Companion).u4y = function (key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    return Companion_instance;
  }
  function Type_QUERY_getInstance() {
    static_init();
    return Type_QUERY_instance;
  }
  function Type_PARAM_getInstance() {
    static_init();
    return Type_PARAM_instance;
  }
  function Type_FILE_getInstance() {
    static_init();
    return Type_FILE_instance;
  }
  function Type_JSON_getInstance() {
    static_init();
    return Type_JSON_instance;
  }
  function HttpParameter(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.v4y_1 = type;
    this.w4y_1 = key;
    this.x4y_1 = value;
    this.y4y_1 = fileName;
    this.z4y_1 = fileBody;
  }
  protoOf(HttpParameter).a4z = function () {
    var tmp0_safe_receiver = this.y4y_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  };
  protoOf(HttpParameter).b4z = function () {
    switch (this.a4z()) {
      case 'txt':
        return Text_getInstance().f2x_1;
      case 'html':
        return Text_getInstance().i2x_1;
      case 'css':
        return Text_getInstance().g2x_1;
      case 'csv':
        return Text_getInstance().h2x_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().m2w_1;
      case 'png':
        return Image_getInstance().o2w_1;
      case 'gif':
        return Image_getInstance().j2w_1;
      case 'svg':
        return Image_getInstance().p2w_1;
      case 'mpeg':
        return Video_getInstance().q2x_1;
      case 'mp4':
        return Video_getInstance().r2x_1;
      case 'mov':
        return Video_getInstance().t2x_1;
      case 'webm':
        return ContentType_init_$Create$('video', 'webm');
      case 'json':
        return Application_getInstance().k2v_1;
      case 'xml':
        return Application_getInstance().q2v_1;
      case 'zip':
        return Application_getInstance().t2v_1;
      case 'pdf':
        return Application_getInstance().w2v_1;
    }
    return Application_getInstance().n2v_1;
  };
  function proceed($this, method, $completion) {
    var tmp = new $proceedCOROUTINE$($this, method, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function canSendOnly($this, param) {
    if (param.v4y_1.equals(Type_JSON_getInstance()))
      return true;
    var tmp0_subject = param.b4z();
    return tmp0_subject.equals(Application_getInstance().k2v_1) ? true : tmp0_subject.equals(Image_getInstance().m2w_1) ? true : tmp0_subject.equals(Image_getInstance().o2w_1) ? true : tmp0_subject.equals(Image_getInstance().j2w_1) ? true : tmp0_subject.equals(Video_getInstance().q2x_1) ? true : tmp0_subject.equals(Video_getInstance().r2x_1) ? true : tmp0_subject.equals(Video_getInstance().t2x_1) ? true : tmp0_subject.equals(ContentType_init_$Create$('video', 'webm')) ? true : false;
  }
  function HttpRequest$proceed$lambda($req) {
    return function ($this$HttpClient) {
      applySystemProxy($this$HttpClient);
      var tmp;
      if ($req.f50_1) {
        applySkipSSLValidation($this$HttpClient);
        tmp = Unit_instance;
      }
      $this$HttpClient.e3s_1 = $req.e50_1;
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_0($req) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $req.b50_1.l1().t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        // Inline function 'kotlin.collections.component1' call
        var k = element.m1();
        // Inline function 'kotlin.collections.component2' call
        var v = element.n1();
        $this$headers.p2p(k, v);
      }
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_1($req) {
    return function ($this$timeout) {
      $this$timeout.d4h($req.g50_1);
      $this$timeout.e4h($req.h50_1);
      $this$timeout.f4h($req.i50_1);
      return Unit_instance;
    };
  }
  function $proceedCOROUTINE$(_this__u8e3s4, method, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k4z_1 = _this__u8e3s4;
    this.l4z_1 = method;
  }
  protoOf($proceedCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 9;
            this.r4z_1 = this.k4z_1;
            var tmp_0 = this;
            tmp_0.s4z_1 = HttpClient(HttpRequest$proceed$lambda(this.r4z_1));
            this.v8_1 = 1;
            continue $sm;
          case 1:
            this.o4z_1 = this.s4z_1;
            this.n4z_1 = null;
            this.v8_1 = 2;
            continue $sm;
          case 2:
            this.v8_1 = 3;
            continue $sm;
          case 3:
            this.w8_1 = 8;
            this.w8_1 = 7;
            var client = this.o4z_1;
            var tmp0_safe_receiver = this.k4z_1.y4z_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.k4z_1.b50_1.z2('Accept', tmp0_safe_receiver);
            }

            var tmp1_safe_receiver = this.k4z_1.z4z_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp0 = this.k4z_1.b50_1;
              var key = 'User-Agent';
              tmp0.z2(key, tmp1_safe_receiver);
            }

            this.q4z_1 = Companion_getInstance_3();
            var this_0 = new HttpRequestBuilder();
            this_0.o3r_1 = this.l4z_1;
            if (!(this.r4z_1.x4z_1 == null)) {
              var tmp0_0 = this.r4z_1.x4z_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                if (tmp0_0 == null) {
                  var message = 'Required value was null.';
                  throw IllegalStateException_init_$Create$(toString(message));
                } else {
                  tmp$ret$0 = tmp0_0;
                  break l$ret$1;
                }
              }
               while (false);
              var tmp_1 = tmp$ret$0;
              takeFrom(this_0.n3r_1, URLBuilder(tmp_1));
            } else {
              url(this_0, this.r4z_1.t4z_1, this.r4z_1.u4z_1, this.r4z_1.w4z_1, this.r4z_1.v4z_1);
            }

            headers(this_0, HttpRequest$proceed$lambda_0(this.r4z_1));
            timeout(this_0, HttpRequest$proceed$lambda_1(this.r4z_1));
            if (!this.k4z_1.c50_1 && !this.k4z_1.d50_1 && this.r4z_1.a50_1.d1() === 1 && canSendOnly(this.k4z_1, first(this.r4z_1.a50_1))) {
              var param = first(this.r4z_1.a50_1);
              var body = new ByteArrayContent(ensureNotNull(param.z4y_1), param.b4z());
              if (body == null) {
                this_0.q3r_1 = NullBody_instance;
                var tmp_2 = getKClass(ByteArrayContent);
                var tmp_3 = null instanceof ByteArrayContent;
                var tmp_4;
                try {
                  tmp_4 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_5;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3 = $p;
                    tmp_5 = null;
                  } else {
                    throw $p;
                  }
                  tmp_4 = tmp_5;
                }
                this_0.i3x(new TypeInfo(tmp_2, tmp_3, tmp_4));
              } else {
                if (body instanceof OutgoingContent) {
                  this_0.q3r_1 = body;
                  this_0.i3x(null);
                } else {
                  this_0.q3r_1 = body;
                  var tmp_6 = getKClass(ByteArrayContent);
                  var tmp_7 = null instanceof ByteArrayContent;
                  var tmp_8;
                  try {
                    tmp_8 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
                  } catch ($p_0) {
                    var tmp_9;
                    if ($p_0 instanceof Error) {
                      var _unused_var__etf5q3_0 = $p_0;
                      tmp_9 = null;
                    } else {
                      throw $p_0;
                    }
                    tmp_8 = tmp_9;
                  }
                  this_0.i3x(new TypeInfo(tmp_6, tmp_7, tmp_8));
                }
              }
            } else {
              if (this.l4z_1.equals(Companion_getInstance_1().k32_1)) {
                var _iterator__ex2g4s = this.r4z_1.a50_1.t();
                while (_iterator__ex2g4s.u()) {
                  var element = _iterator__ex2g4s.v();
                  if (element.v4y_1.a1_1 === 0) {
                    this_0.n3r_1.x35_1.p2p(element.w4y_1, ensureNotNull(element.x4y_1));
                  } else {
                    throw IllegalStateException_init_$Create$('Request Body is not supported in the GET method.');
                  }
                }
              } else {
                var tmp0_1 = this.r4z_1.a50_1;
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s_0 = tmp0_1.t();
                while (_iterator__ex2g4s_0.u()) {
                  var element_0 = _iterator__ex2g4s_0.v();
                  if (element_0.v4y_1.equals(Type_QUERY_getInstance())) {
                    destination.c1(element_0);
                  }
                }
                var queries = destination;
                var tmp0_2 = this.r4z_1.a50_1;
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_1 = tmp0_2.t();
                while (_iterator__ex2g4s_1.u()) {
                  var element_1 = _iterator__ex2g4s_1.v();
                  if (element_1.v4y_1.equals(Type_PARAM_getInstance())) {
                    destination_0.c1(element_1);
                  }
                }
                var params = destination_0;
                var tmp0_3 = this.r4z_1.a50_1;
                var destination_1 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp0_3.t();
                while (_iterator__ex2g4s_2.u()) {
                  var element_2 = _iterator__ex2g4s_2.v();
                  if (element_2.v4y_1.equals(Type_FILE_getInstance())) {
                    destination_1.c1(element_2);
                  }
                }
                var files = destination_1;
                if (!queries.r()) {
                  var _iterator__ex2g4s_3 = queries.t();
                  while (_iterator__ex2g4s_3.u()) {
                    var element_3 = _iterator__ex2g4s_3.v();
                    this_0.n3r_1.x35_1.p2p(element_3.w4y_1, ensureNotNull(element_3.x4y_1));
                  }
                }
                var tmp_10;
                if (!params.r()) {
                  tmp_10 = true;
                } else {
                  tmp_10 = !files.r();
                }
                if (tmp_10) {
                  if (this.k4z_1.d50_1) {
                    if (!files.r()) {
                      throw IllegalStateException_init_$Create$('ApplicationFormUrlEncoded cannot send files.');
                    }
                    contentType(this_0, Application_getInstance().v2v_1);
                    Companion_getInstance_0();
                    var this_1 = ParametersBuilder();
                    var _iterator__ex2g4s_4 = params.t();
                    while (_iterator__ex2g4s_4.u()) {
                      var element_4 = _iterator__ex2g4s_4.v();
                      this_1.p2p(element_4.w4y_1, ensureNotNull(element_4.x4y_1));
                    }
                    var body_0 = new FormDataContent(this_1.c2y());
                    if (body_0 == null) {
                      this_0.q3r_1 = NullBody_instance;
                      var tmp_11 = getKClass(FormDataContent);
                      var tmp_12 = null instanceof FormDataContent;
                      var tmp_13;
                      try {
                        tmp_13 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                      } catch ($p_1) {
                        var tmp_14;
                        if ($p_1 instanceof Error) {
                          var _unused_var__etf5q3_1 = $p_1;
                          tmp_14 = null;
                        } else {
                          throw $p_1;
                        }
                        tmp_13 = tmp_14;
                      }
                      this_0.i3x(new TypeInfo(tmp_11, tmp_12, tmp_13));
                    } else {
                      if (body_0 instanceof OutgoingContent) {
                        this_0.q3r_1 = body_0;
                        this_0.i3x(null);
                      } else {
                        this_0.q3r_1 = body_0;
                        var tmp_15 = getKClass(FormDataContent);
                        var tmp_16 = null instanceof FormDataContent;
                        var tmp_17;
                        try {
                          tmp_17 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                        } catch ($p_2) {
                          var tmp_18;
                          if ($p_2 instanceof Error) {
                            var _unused_var__etf5q3_2 = $p_2;
                            tmp_18 = null;
                          } else {
                            throw $p_2;
                          }
                          tmp_17 = tmp_18;
                        }
                        this_0.i3x(new TypeInfo(tmp_15, tmp_16, tmp_17));
                      }
                    }
                  } else {
                    contentType(this_0, MultiPart_getInstance().y2w_1);
                    var this_2 = new FormBuilder();
                    var _iterator__ex2g4s_5 = params.t();
                    while (_iterator__ex2g4s_5.u()) {
                      var element_5 = _iterator__ex2g4s_5.v();
                      this_2.d4q(element_5.w4y_1, ensureNotNull(element_5.x4y_1));
                    }
                    var _iterator__ex2g4s_6 = files.t();
                    while (_iterator__ex2g4s_6.u()) {
                      var element_6 = _iterator__ex2g4s_6.v();
                      var tmp_19 = ensureNotNull(element_6.z4y_1);
                      Companion_getInstance();
                      var this_3 = new HeadersBuilder();
                      append(this_3, 'Content-Type', element_6.b4z());
                      this_3.p2p('Content-Disposition', 'filename=' + element_6.y4y_1);
                      this_2.e4q(element_6.w4y_1, tmp_19, this_3.c2y());
                    }
                    var this_4 = this_2.f4q();
                    var body_1 = new MultiPartFormDataContent(formData(copyToArray(this_4).slice()));
                    if (body_1 == null) {
                      this_0.q3r_1 = NullBody_instance;
                      var tmp_20 = getKClass(MultiPartFormDataContent);
                      var tmp_21 = null instanceof MultiPartFormDataContent;
                      var tmp_22;
                      try {
                        tmp_22 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                      } catch ($p_3) {
                        var tmp_23;
                        if ($p_3 instanceof Error) {
                          var _unused_var__etf5q3_3 = $p_3;
                          tmp_23 = null;
                        } else {
                          throw $p_3;
                        }
                        tmp_22 = tmp_23;
                      }
                      this_0.i3x(new TypeInfo(tmp_20, tmp_21, tmp_22));
                    } else {
                      if (body_1 instanceof OutgoingContent) {
                        this_0.q3r_1 = body_1;
                        this_0.i3x(null);
                      } else {
                        this_0.q3r_1 = body_1;
                        var tmp_24 = getKClass(MultiPartFormDataContent);
                        var tmp_25 = null instanceof MultiPartFormDataContent;
                        var tmp_26;
                        try {
                          tmp_26 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                        } catch ($p_4) {
                          var tmp_27;
                          if ($p_4 instanceof Error) {
                            var _unused_var__etf5q3_4 = $p_4;
                            tmp_27 = null;
                          } else {
                            throw $p_4;
                          }
                          tmp_26 = tmp_27;
                        }
                        this_0.i3x(new TypeInfo(tmp_24, tmp_25, tmp_26));
                      }
                    }
                  }
                }
              }
            }

            this.v8_1 = 4;
            suspendResult = (new HttpStatement(this_0, client)).m4s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            this.v8_1 = 5;
            suspendResult = this.q4z_1.k50(ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.p4z_1 = suspendResult;
            this.w8_1 = 9;
            this.v8_1 = 6;
            var tmp_28 = this;
            continue $sm;
          case 6:
            var tmp_29 = this.p4z_1;
            this.w8_1 = 9;
            closeFinally(this.o4z_1, this.n4z_1);
            this.m4z_1 = tmp_29;
            this.v8_1 = 11;
            continue $sm;
          case 7:
            this.w8_1 = 8;
            var tmp_30 = this.y8_1;
            if (tmp_30 instanceof Error) {
              var e = this.y8_1;
              var tmp_31 = this;
              this.n4z_1 = e;
              throw e;
            } else {
              throw this.y8_1;
            }

          case 8:
            this.w8_1 = 9;
            var t = this.y8_1;
            closeFinally(this.o4z_1, this.n4z_1);
            throw t;
          case 9:
            throw this.y8_1;
          case 10:
            this.w8_1 = 9;
            closeFinally(this.o4z_1, this.n4z_1);
            if (false) {
              this.v8_1 = 1;
              continue $sm;
            }

            this.v8_1 = 11;
            continue $sm;
          case 11:
            return this.m4z_1;
        }
      } catch ($p_5) {
        var e_0 = $p_5;
        if (this.w8_1 === 9) {
          throw e_0;
        } else {
          this.v8_1 = this.w8_1;
          this.y8_1 = e_0;
        }
      }
     while (true);
  };
  function HttpRequest() {
    this.t4z_1 = 'https';
    this.u4z_1 = null;
    this.v4z_1 = null;
    this.w4z_1 = null;
    this.x4z_1 = null;
    this.y4z_1 = null;
    this.z4z_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a50_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.b50_1 = LinkedHashMap_init_$Create$();
    this.c50_1 = false;
    this.d50_1 = false;
    this.e50_1 = true;
    this.f50_1 = false;
    this.g50_1 = null;
    this.h50_1 = null;
    this.i50_1 = null;
  }
  protoOf(HttpRequest).l50 = function (url) {
    // Inline function 'kotlin.also' call
    this.x4z_1 = url;
    return this;
  };
  protoOf(HttpRequest).m50 = function (key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.b50_1.z2(key, value);
    return this;
  };
  protoOf(HttpRequest).n50 = function (forceMultipartFormData) {
    // Inline function 'kotlin.also' call
    this.c50_1 = forceMultipartFormData;
    return this;
  };
  protoOf(HttpRequest).o50 = function (forceApplicationFormUrlEncoded) {
    // Inline function 'kotlin.also' call
    this.d50_1 = forceApplicationFormUrlEncoded;
    return this;
  };
  protoOf(HttpRequest).p50 = function ($completion) {
    return proceed(this, Companion_getInstance_1().k32_1, $completion);
  };
  protoOf(HttpRequest).q50 = function ($completion) {
    return proceed(this, Companion_getInstance_1().l32_1, $completion);
  };
  function HttpResponse$Companion$mapper$lambda($this$Json) {
    $this$Json.m19_1 = true;
    return Unit_instance;
  }
  function $fromCOROUTINE$(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z50_1 = _this__u8e3s4;
    this.a51_1 = response;
  }
  protoOf($fromCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.c51_1 = this.a51_1.i3t().i35_1;
            this.b51_1 = toMap(this.a51_1.j32());
            var this_0 = this.a51_1;
            this.v8_1 = 1;
            var tmp_0 = this_0.g3t();
            var tmp_1 = PrimitiveClasses_getInstance().gc();
            var tmp_2 = !(null == null) ? isByteArray(null) : false;
            var tmp_3;
            try {
              tmp_3 = createKType(PrimitiveClasses_getInstance().gc(), arrayOf([]), false);
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
            var ARGUMENT = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            return new HttpResponse(this.c51_1, this.b51_1, ARGUMENT);
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
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.j50_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  protoOf(Companion_0).k50 = function (response, $completion) {
    var tmp = new $fromCOROUTINE$(this, response, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HttpResponse$stringBody$delegate$lambda(this$0) {
    return function () {
      return decodeToString(this$0.f51_1);
    };
  }
  function HttpResponse$_get_stringBody_$ref_nmyr7m() {
    return constructCallableReference(function (p0) {
      return p0.h51();
    }, 1, 0, 33);
  }
  function HttpResponse(status, headers, body) {
    Companion_getInstance_3();
    this.d51_1 = status;
    this.e51_1 = headers;
    this.f51_1 = body;
    var tmp = this;
    tmp.g51_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  protoOf(HttpResponse).h51 = function () {
    var tmp0 = this.g51_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.n1();
  };
  function applySystemProxy(_this__u8e3s4) {
    var proxyUrl = proxyUrlFromEnv();
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(proxyUrl == null || isBlank(proxyUrl))) {
      _this__u8e3s4.u3s(applySystemProxy$lambda(proxyUrl));
    }
  }
  function applySystemProxy$lambda($proxyUrl) {
    return function ($this$engine) {
      $this$engine.z3x_1 = ProxyBuilder_instance.t4y(Url($proxyUrl));
      return Unit_instance;
    };
  }
  function applySkipSSLValidation(_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('Skip SSL Validation is not supported on JS target.');
  }
  function proxyUrlFromEnv() {
    return null;
  }
  function start($this, $completion) {
    var tmp = new $startCOROUTINE$($this, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  }
  function buildUrl($this) {
    var tmp0_safe_receiver = $this.v51_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var s = $this.r51_1 === 'ws' || $this.r51_1 === 'wss' ? $this.r51_1 : 'wss';
    var tmp0 = $this.s51_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'host must be set';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$2 = tmp0;
        break $l$block;
      }
    }
    var h = tmp$ret$2;
    var tmp1_safe_receiver = $this.u51_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = ':' + tmp1_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    var p = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_safe_receiver = $this.t51_1;
    var tmp_0;
    if (tmp3_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = startsWith(tmp3_safe_receiver, '/') ? tmp3_safe_receiver : '/' + tmp3_safe_receiver;
    }
    var tmp4_elvis_lhs = tmp_0;
    var pathPart = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    return s + '://' + h + p + pathPart;
  }
  function WebsocketRequest$textListener$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebsocketRequest$textListener$slambda).r52 = function (it, $completion) {
    var tmp = this.s52(it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(WebsocketRequest$textListener$slambda).r9 = function (p1, $completion) {
    return this.r52((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebsocketRequest$textListener$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
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
  protoOf(WebsocketRequest$textListener$slambda).s52 = function (it, completion) {
    var i = new WebsocketRequest$textListener$slambda(completion);
    i.q52_1 = it;
    return i;
  };
  function WebsocketRequest$textListener$slambda_0(resultContinuation) {
    var i = new WebsocketRequest$textListener$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.r52(it, $completion);
    }, 1);
  }
  function WebsocketRequest$bytesListener$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebsocketRequest$bytesListener$slambda).c53 = function (it, $completion) {
    var tmp = this.d53(it, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(WebsocketRequest$bytesListener$slambda).r9 = function (p1, $completion) {
    return this.c53((!(p1 == null) ? isByteArray(p1) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebsocketRequest$bytesListener$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        if (tmp === 0) {
          this.w8_1 = 1;
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
  protoOf(WebsocketRequest$bytesListener$slambda).d53 = function (it, completion) {
    var i = new WebsocketRequest$bytesListener$slambda(completion);
    i.b53_1 = it;
    return i;
  };
  function WebsocketRequest$bytesListener$slambda_0(resultContinuation) {
    var i = new WebsocketRequest$bytesListener$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.c53(it, $completion);
    }, 1);
  }
  function WebsocketRequest$onOpenListener$lambda(it) {
    return Unit_instance;
  }
  function WebsocketRequest$onCloseListener$lambda(it) {
    return Unit_instance;
  }
  function WebsocketRequest$onErrorListener$lambda(it) {
    return Unit_instance;
  }
  function WebsocketRequest$start$lambda($opened, this$0) {
    return function (it) {
      $opened.p1v(Unit_instance);
      var tmp;
      try {
        this$0.b52_1(this$0);
        tmp = Unit_instance;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          this$0.d52_1(RuntimeException_init_$Create$('onOpenListener failed', e));
          tmp_0 = Unit_instance;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      return tmp;
    };
  }
  function WebsocketRequest$start$lambda_0(this$0, $opened) {
    return function (it) {
      this$0.e52_1 = null;
      var tmp;
      if (!$opened.u1p()) {
        $opened.q1v(RuntimeException_init_$Create$_0('WebSocket closed before open'));
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!this$0.g52_1) {
        this$0.g52_1 = true;
        tmp_0 = this$0.c52_1(this$0);
      }
      return this$0.f52_1.p1v(Unit_instance);
    };
  }
  function WebsocketRequest$start$lambda_1(this$0, $opened) {
    return function (_unused_var__etf5q3) {
      var ex = RuntimeException_init_$Create$_0('WebSocket error');
      this$0.d52_1(ex);
      var tmp;
      if (!$opened.u1p()) {
        $opened.q1v(ex);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WebsocketRequest$start$lambda$slambda(this$0, $data, resultContinuation) {
    this.m53_1 = this$0;
    this.n53_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebsocketRequest$start$lambda$slambda).a2l = function ($this$launch, $completion) {
    var tmp = this.b2l($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(WebsocketRequest$start$lambda$slambda).r9 = function (p1, $completion) {
    return this.a2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebsocketRequest$start$lambda$slambda).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.m53_1.z51_1(this.n53_1, this);
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
  protoOf(WebsocketRequest$start$lambda$slambda).b2l = function ($this$launch, completion) {
    var i = new WebsocketRequest$start$lambda$slambda(this.m53_1, this.n53_1, completion);
    i.o53_1 = $this$launch;
    return i;
  };
  function WebsocketRequest$start$lambda$slambda_0(this$0, $data, resultContinuation) {
    var i = new WebsocketRequest$start$lambda$slambda(this$0, $data, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2l($this$launch, $completion);
    }, 1);
  }
  function WebsocketRequest$start$lambda$slambda_1(this$0, $bytes, resultContinuation) {
    this.x53_1 = this$0;
    this.y53_1 = $bytes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebsocketRequest$start$lambda$slambda_1).a2l = function ($this$launch, $completion) {
    var tmp = this.b2l($this$launch, $completion);
    tmp.x8_1 = Unit_instance;
    tmp.y8_1 = null;
    return tmp.d9();
  };
  protoOf(WebsocketRequest$start$lambda$slambda_1).r9 = function (p1, $completion) {
    return this.a2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebsocketRequest$start$lambda$slambda_1).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 2;
            this.v8_1 = 1;
            suspendResult = this.x53_1.a52_1(this.y53_1, this);
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
  protoOf(WebsocketRequest$start$lambda$slambda_1).b2l = function ($this$launch, completion) {
    var i = new WebsocketRequest$start$lambda$slambda_1(this.x53_1, this.y53_1, completion);
    i.z53_1 = $this$launch;
    return i;
  };
  function WebsocketRequest$start$lambda$slambda_2(this$0, $bytes, resultContinuation) {
    var i = new WebsocketRequest$start$lambda$slambda_1(this$0, $bytes, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.a2l($this$launch, $completion);
    }, 1);
  }
  function WebsocketRequest$start$lambda_2(this$0) {
    return function (event) {
      var data = event.data;
      var tmp;
      if (!(data == null) ? typeof data === 'string' : false) {
        launch(this$0.h52_1, VOID, VOID, WebsocketRequest$start$lambda$slambda_0(this$0, data, null));
        tmp = Unit_instance;
      } else {
        if (data instanceof ArrayBuffer) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var bytes = new Int8Array(data);
          launch(this$0.h52_1, VOID, VOID, WebsocketRequest$start$lambda$slambda_2(this$0, bytes, null));
          tmp = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function WebsocketRequest$start$lambda_3(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.e52_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.close();
      }
      cancel(this$0.h52_1);
      return Unit_instance;
    };
  }
  function $startCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q51_1 = _this__u8e3s4;
  }
  protoOf($startCOROUTINE$).d9 = function () {
    var suspendResult = this.x8_1;
    $sm: do
      try {
        var tmp = this.v8_1;
        switch (tmp) {
          case 0:
            this.w8_1 = 3;
            var wsUrl = buildUrl(this.q51_1);
            var opened = CompletableDeferred();
            this.q51_1.f52_1 = CompletableDeferred();
            this.q51_1.g52_1 = false;
            var socket = new WebSocket(wsUrl);
            socket.binaryType = 'arraybuffer';
            this.q51_1.e52_1 = socket;
            socket.onopen = WebsocketRequest$start$lambda(opened, this.q51_1);
            socket.onclose = WebsocketRequest$start$lambda_0(this.q51_1, opened);
            socket.onerror = WebsocketRequest$start$lambda_1(this.q51_1, opened);
            socket.onmessage = WebsocketRequest$start$lambda_2(this.q51_1);
            var tmp0_safe_receiver = this.b9().i9(Key_instance);
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.b1q(WebsocketRequest$start$lambda_3(this.q51_1));
            }

            this.v8_1 = 1;
            suspendResult = opened.s1r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v8_1 = 2;
            suspendResult = this.q51_1.f52_1.s1r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.q51_1;
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
  function WebsocketRequest() {
    this.r51_1 = 'ws';
    this.s51_1 = null;
    this.t51_1 = null;
    this.u51_1 = null;
    this.v51_1 = null;
    this.w51_1 = null;
    this.x51_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.y51_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.z51_1 = WebsocketRequest$textListener$slambda_0(null);
    var tmp_1 = this;
    tmp_1.a52_1 = WebsocketRequest$bytesListener$slambda_0(null);
    var tmp_2 = this;
    tmp_2.b52_1 = WebsocketRequest$onOpenListener$lambda;
    var tmp_3 = this;
    tmp_3.c52_1 = WebsocketRequest$onCloseListener$lambda;
    var tmp_4 = this;
    tmp_4.d52_1 = WebsocketRequest$onErrorListener$lambda;
    this.e52_1 = null;
    this.f52_1 = CompletableDeferred();
    this.g52_1 = false;
    this.h52_1 = CoroutineScope_0(Dispatchers_getInstance().o1z_1.yf(SupervisorJob()));
  }
  protoOf(WebsocketRequest).a54 = function (url) {
    // Inline function 'kotlin.also' call
    this.v51_1 = url;
    return this;
  };
  protoOf(WebsocketRequest).b54 = function ($completion) {
    return start(this, $completion);
  };
  protoOf(WebsocketRequest).f4 = function () {
    if (!this.g52_1) {
      this.g52_1 = true;
      this.c52_1(this);
    }
    var tmp0_safe_receiver = this.e52_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close();
    }
    this.e52_1 = null;
    this.f52_1.p1v(Unit_instance);
    cancel(this.h52_1);
  };
  protoOf(WebsocketRequest).c54 = function (text, $completion) {
    var tmp0_elvis_lhs = this.e52_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('WebSocket is not connected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var socket = tmp;
    socket.send(text);
    return Unit_instance;
  };
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_instance;
  _.$_$.b = WebsocketRequest;
  _.$_$.c = HttpRequest;
  //endregion
  return _;
}));

//# sourceMappingURL=khttpclient.js.map
