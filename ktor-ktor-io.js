(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js', './kotlinx-io-kotlinx-io-bytestring.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'ktor-ktor-io'.");
    }
    globalThis['ktor-ktor-io'] = factory(typeof globalThis['ktor-ktor-io'] === 'undefined' ? {} : globalThis['ktor-ktor-io'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-io-kotlinx-io-bytestring']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring) {
  'use strict';
  //region block: imports
  var Companion_instance = kotlin_kotlin.$_$.r4;
  var Unit_instance = kotlin_kotlin.$_$.w4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m2;
  var protoOf = kotlin_kotlin.$_$.qb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.sa;
  var initMetadataForObject = kotlin_kotlin.$_$.xa;
  var toString = kotlin_kotlin.$_$.qg;
  var hashCode = kotlin_kotlin.$_$.qa;
  var equals = kotlin_kotlin.$_$.la;
  var initMetadataForClass = kotlin_kotlin.$_$.ra;
  var createFailure = kotlin_kotlin.$_$.fg;
  var Result = kotlin_kotlin.$_$.mf;
  var initMetadataForInterface = kotlin_kotlin.$_$.va;
  var toString_0 = kotlin_kotlin.$_$.je;
  var newThrowable = kotlin_kotlin.$_$.mb;
  var stackTraceToString = kotlin_kotlin.$_$.pg;
  var VOID = kotlin_kotlin.$_$.b;
  var isInterface = kotlin_kotlin.$_$.gb;
  var CoroutineImpl = kotlin_kotlin.$_$.x8;
  var fromInt = kotlin_kotlin.$_$.m9;
  var compare = kotlin_kotlin.$_$.g9;
  var numberToLong = kotlin_kotlin.$_$.t9;
  var add = kotlin_kotlin.$_$.d9;
  var intercepted = kotlin_kotlin.$_$.j8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ng;
  var returnIfSuspended = kotlin_kotlin.$_$.g;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var Long = kotlin_kotlin.$_$.if;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ta;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var convertToInt = kotlin_kotlin.$_$.i9;
  var IllegalStateException = kotlin_kotlin.$_$.hf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.r1;
  var captureStack = kotlin_kotlin.$_$.ca;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.nd;
  var indexOf = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.of;
  var equalsLong = kotlin_kotlin.$_$.l9;
  var get_ONE = kotlin_kotlin.$_$.c9;
  var toString_1 = kotlin_kotlin.$_$.tb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var subtract = kotlin_kotlin.$_$.w9;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.b4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var Continuation = kotlin_kotlin.$_$.r8;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.ua;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var initMetadataForLambda = kotlin_kotlin.$_$.wa;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.z;
  var CancellationException = kotlin_kotlin.$_$.f8;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var Enum = kotlin_kotlin.$_$.df;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var listOf = kotlin_kotlin.$_$.c7;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b1;
  var charSequenceLength = kotlin_kotlin.$_$.ha;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var encodeToByteArray = kotlin_kotlin.$_$.xc;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var AutoCloseable = kotlin_kotlin.$_$.we;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var replace_0 = kotlin_kotlin.$_$.od;
  var getStringHashCode = kotlin_kotlin.$_$.pa;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ia;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var isCharSequence = kotlin_kotlin.$_$.cb;
  var trim = kotlin_kotlin.$_$.re;
  var toByte = kotlin_kotlin.$_$.rb;
  var decodeToString_0 = kotlin_kotlin.$_$.vc;
  var setOf = kotlin_kotlin.$_$.o7;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var charSequenceGet = kotlin_kotlin.$_$.ga;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k2;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.y27().z8(Companion_getInstance().v27_1);
  }
  function resume_0(throwable) {
    var tmp = this.y27();
    var tmp_0;
    if (throwable == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(throwable));
      tmp_0 = new Result(tmp$ret$2);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.z8(tmp1_elvis_lhs == null ? Companion_getInstance().v27_1 : tmp1_elvis_lhs.yk_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForCoroutine($awaitContentCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.f2a(min, $completion) : $super.f2a.call(this, min, $completion);
  }
  initMetadataForInterface(ByteReadChannel_1, 'ByteReadChannel', VOID, VOID, VOID, [1]);
  function get_autoFlush() {
    return false;
  }
  initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel_1, ByteWriteChannel], [1, 0]);
  initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException', VOID, IllegalStateException);
  initMetadataForCoroutine($findNextCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($advanceToNextPotentialMatchCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkFullMatchCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
  initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCoroutine($readRemainingCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($toByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($discardCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$_0, CoroutineImpl);
  initMetadataForCoroutine($readAvailableCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readPacketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readBufferCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($peekCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineTo$discardCrlfOrCrCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushIfNeededCOROUTINE$, CoroutineImpl);
  initMetadataForClass(WriterJob, 'WriterJob');
  initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
  initMetadataForLambda(writer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($writePacketCOROUTINE$, CoroutineImpl);
  initMetadataForClass(CloseToken, 'CloseToken');
  initMetadataForCoroutine($awaitContentCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException, IOException);
  initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException, ClosedByteChannelException);
  initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException, ClosedByteChannelException);
  initMetadataForClass(LineEnding, 'LineEnding', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(LineEndingMode, 'LineEndingMode');
  initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
  initMetadataForClass(TooLongLineException, 'TooLongLineException', VOID, MalformedInputException);
  function close() {
    this.m1q();
  }
  initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
  initMetadataForClass(ByteArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Charset, 'Charset');
  initMetadataForObject(Charsets, 'Charsets');
  initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
  initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
  initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
  initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl', VOID, CharsetEncoder);
  initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
  initMetadataForClass(toKtor$1);
  initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.u27_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.v27_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Empty() {
  }
  protoOf(Empty).toString = function () {
    return 'Empty';
  };
  protoOf(Empty).hashCode = function () {
    return -231472095;
  };
  protoOf(Empty).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    return true;
  };
  var Empty_instance;
  function Empty_getInstance() {
    return Empty_instance;
  }
  function Closed(cause) {
    this.w27_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.w27_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.w27_1 == null ? 0 : hashCode(this.w27_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.w27_1, other.w27_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.c28_1 = continuation;
    this.d28_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.c28_1), 16));
      stackTraceToString(this_0);
      tmp.d28_1 = this_0;
    }
  }
  protoOf(Read).y27 = function () {
    return this.c28_1;
  };
  protoOf(Read).x27 = function () {
    return this.d28_1;
  };
  protoOf(Read).z27 = function () {
    return 'read';
  };
  function Write(continuation) {
    this.e28_1 = continuation;
    this.f28_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.e28_1), 16));
      stackTraceToString(this_0);
      tmp.f28_1 = this_0;
    }
  }
  protoOf(Write).y27 = function () {
    return this.e28_1;
  };
  protoOf(Write).x27 = function () {
    return this.f28_1;
  };
  protoOf(Write).z27 = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.j28_1;
    $this.h28_1.t1k($this.l28_1);
    $this.i28_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.k28_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.k28_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.a28();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().u27_1;
    var continuation = $this.k28_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.b28(cause);
    }
  }
  function ClosedReadChannelException$_init_$ref_ix0089() {
    var l = function (p0) {
      return new ClosedReadChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function ClosedWriteChannelException$_init_$ref_ef15ty() {
    var l = function (p0) {
      return new ClosedWriteChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function $awaitContentCOROUTINE$(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w28_1 = _this__u8e3s4;
    this.x28_1 = min;
  }
  protoOf($awaitContentCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            rethrowCloseCauseIfNeeded(this.w28_1);
            if (compare(this.w28_1.l28_1.d1(), fromInt(this.x28_1)) >= 0)
              return true;
            this.y28_1 = this.w28_1;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(add(numberToLong(this.w28_1.i28_1), this.w28_1.l28_1.d1()), fromInt(this.x28_1)) < 0 && this.w28_1.n28_1.kotlinx$atomicfu$value == null)) {
              this.o8_1 = 3;
              continue $sm;
            }

            this.o8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.p1r();
            var tmp0 = this.y28_1;
            var tmp2 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.k28_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.k28_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.a28();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.b28(new ConcurrentIOException(tmp2.z27(), previous.x27()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.a28();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.b28(previous.w27_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(compare(add(numberToLong(this.w28_1.i28_1), this.w28_1.l28_1.d1()), fromInt(this.x28_1)) < 0 && this.w28_1.n28_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.k28_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Read) {
                  tmp_0 = tmp0.k28_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.a28();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.x1r(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o8_1 = 1;
            continue $sm;
          case 3:
            if (compare(this.w28_1.l28_1.d1(), new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.w28_1);
            }

            return compare(this.w28_1.l28_1.d1(), fromInt(this.x28_1)) >= 0;
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
  function $flushCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h29_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            rethrowCloseCauseIfNeeded(this.h29_1);
            this.h29_1.j29();
            if (this.h29_1.i28_1 < 1048576)
              return Unit_instance;
            this.i29_1 = this.h29_1;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!(this.h29_1.i28_1 >= 1048576 && this.h29_1.n28_1.kotlinx$atomicfu$value == null)) {
              this.o8_1 = 3;
              continue $sm;
            }

            this.o8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.p1r();
            var tmp0 = this.i29_1;
            var tmp2 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.k28_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.k28_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.a28();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.b28(new ConcurrentIOException(tmp2.z27(), previous.x27()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.a28();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.b28(previous.w27_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(this.h29_1.i28_1 >= 1048576 && this.h29_1.n28_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.k28_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Write) {
                  tmp_0 = tmp0.k28_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.a28();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.x1r(), this);
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
  function $flushAndCloseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s29_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            var this_0 = this.s29_1;
            this.p8_1 = 2;
            this.u29_1 = Companion_instance;
            this.o8_1 = 1;
            suspendResult = this_0.v29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            this.u29_1;
            tmp_0.t29_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.p8_1 = 4;
            this.o8_1 = 3;
            continue $sm;
          case 2:
            this.p8_1 = 4;
            var tmp_1 = this.r8_1;
            if (tmp_1 instanceof Error) {
              var e = this.r8_1;
              var tmp_2 = this;
              tmp_2.t29_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.o8_1 = 3;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 3:
            this.p8_1 = 4;
            if (!this.s29_1.n28_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.s29_1, null);
            return Unit_instance;
          case 4:
            throw this.r8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.p8_1 === 4) {
          throw e_0;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.g28_1 = autoFlush;
    this.h28_1 = new Buffer();
    this.i28_1 = 0;
    this.j28_1 = new Object();
    this.k28_1 = atomic$ref$1(Empty_instance);
    this.l28_1 = new Buffer();
    this.m28_1 = new Buffer();
    this.n28_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).w29 = function () {
    return this.g28_1;
  };
  protoOf(ByteChannel).x29 = function () {
    var tmp0_safe_receiver = this.n28_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z29(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this.l28_1.q1j()) {
      moveFlushToReadBuffer(this);
    }
    return this.l28_1;
  };
  protoOf(ByteChannel).a2a = function () {
    if (this.b2a()) {
      var tmp0_safe_receiver = this.n28_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.z29(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this.m28_1;
  };
  protoOf(ByteChannel).c2a = function () {
    var tmp0_safe_receiver = this.n28_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d2a();
  };
  protoOf(ByteChannel).b2a = function () {
    return !(this.n28_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).e2a = function () {
    return !(this.c2a() == null) || (this.b2a() && this.i28_1 === 0 && this.l28_1.q1j());
  };
  protoOf(ByteChannel).f2a = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$(this, min, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(ByteChannel).v29 = function ($completion) {
    var tmp = new $flushCOROUTINE$(this, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(ByteChannel).j29 = function () {
    if (this.m28_1.q1j())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.j28_1;
    var count = convertToInt(this.m28_1.d1());
    this.h28_1.i1l(this.m28_1);
    this.i28_1 = this.i28_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.k28_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.k28_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.a28();
    }
  };
  protoOf(ByteChannel).d4 = function () {
    this.j29();
    if (!this.n28_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).h2a = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$(this, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(ByteChannel).i2a = function (cause) {
    if (!(this.n28_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.n28_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.d2a();
    closeSlot(this, wrappedCause);
  };
  protoOf(ByteChannel).toString = function () {
    return 'ByteChannel[' + hashCode(this) + ']';
  };
  function ConcurrentIOException(taskName, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$('Concurrent ' + taskName + ' attempts', cause, this);
    captureStack(this, ConcurrentIOException);
  }
  function ByteReadChannel(content, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? content.length : length;
    // Inline function 'kotlin.also' call
    var this_0 = new Buffer();
    this_0.z1k(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function buildPartialMatchTable($this) {
    var table = new Int32Array($this.k2a_1.d1());
    var j = 0;
    var inductionVariable = 1;
    var last = $this.k2a_1.d1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        while (j > 0 && !($this.k2a_1.e1(i) === $this.k2a_1.e1(j))) {
          j = table[j - 1 | 0];
        }
        if ($this.k2a_1.e1(i) === $this.k2a_1.e1(j)) {
          j = j + 1 | 0;
        }
        table[i] = j;
      }
       while (inductionVariable < last);
    return table;
  }
  function advanceToNextPotentialMatch($this, $completion) {
    var tmp = new $advanceToNextPotentialMatchCOROUTINE$($this, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function checkFullMatch($this, $completion) {
    var tmp = new $checkFullMatchCOROUTINE$($this, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function checkBounds($this, extra) {
    if (compare(add($this.q2a_1, extra), $this.m2a_1) > 0) {
      throw IOException_init_$Create$('Limit of ' + $this.m2a_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.k2a_1) + '"'));
    }
  }
  function toSingleLineString($this, _this__u8e3s4) {
    return replace(decodeToString(_this__u8e3s4), '\n', '\\n');
  }
  function $findNextCOROUTINE$(_this__u8e3s4, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v2b_1 = _this__u8e3s4;
    this.w2b_1 = ignoreMissing;
  }
  protoOf($findNextCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 9;
            this.v2b_1.q2a_1 = new Long(0, 0);
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!this.v2b_1.n2a_1.q1j()) {
              this.x2b_1 = true;
              this.o8_1 = 3;
              continue $sm;
            } else {
              this.o8_1 = 2;
              suspendResult = this.v2b_1.j2a_1.g2a(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.x2b_1 = suspendResult;
            this.o8_1 = 3;
            continue $sm;
          case 3:
            if (!this.x2b_1) {
              this.o8_1 = 7;
              continue $sm;
            }

            this.o8_1 = 4;
            suspendResult = advanceToNextPotentialMatch(this.v2b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.o8_1 = 5;
            suspendResult = checkFullMatch(this.v2b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (suspendResult) {
              return this.v2b_1.q2a_1;
            } else {
              this.o8_1 = 6;
              continue $sm;
            }

          case 6:
            this.o8_1 = 1;
            continue $sm;
          case 7:
            if (!this.w2b_1) {
              throw IOException_init_$Create$('Expected "' + toSingleLineString(this.v2b_1, this.v2b_1.k2a_1) + '" but encountered end of input');
            }

            this.v2b_1.q2a_1 = add(this.v2b_1.q2a_1, this.v2b_1.p2a_1.t1k(this.v2b_1.l2a_1.a2a()));
            this.o8_1 = 8;
            suspendResult = this.v2b_1.l2a_1.v29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return this.v2b_1.q2a_1;
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
  function $advanceToNextPotentialMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a2b_1 = _this__u8e3s4;
  }
  protoOf($advanceToNextPotentialMatchCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 8;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!this.a2b_1.n2a_1.q1j()) {
              this.b2b_1 = true;
              this.o8_1 = 3;
              continue $sm;
            } else {
              this.o8_1 = 2;
              suspendResult = this.a2b_1.j2a_1.g2a(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.b2b_1 = suspendResult;
            this.o8_1 = 3;
            continue $sm;
          case 3:
            if (!this.b2b_1) {
              this.o8_1 = 7;
              continue $sm;
            }

            var nextMatch = indexOf(this.a2b_1.n2a_1, this.a2b_1.k2a_1.e1(0));
            if (equalsLong(nextMatch, new Long(-1, -1))) {
              var tmp_0 = this.a2b_1.n2a_1;
              checkBounds(this.a2b_1, (tmp_0 instanceof Buffer ? tmp_0 : THROW_CCE()).d1());
              this.a2b_1.q2a_1 = add(this.a2b_1.q2a_1, this.a2b_1.n2a_1.t1k(this.a2b_1.l2a_1.a2a()));
              this.o8_1 = 5;
              suspendResult = flushIfNeeded(this.a2b_1.l2a_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              checkBounds(this.a2b_1, nextMatch);
              var tmp_1 = this.a2b_1;
              var tmp_2 = this.a2b_1.q2a_1;
              var tmp_3 = this.a2b_1.l2a_1.a2a();
              tmp_1.q2a_1 = add(tmp_2, this.a2b_1.n2a_1.q1k(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), nextMatch));
              this.o8_1 = 4;
              suspendResult = flushIfNeeded(this.a2b_1.l2a_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            return Unit_instance;
          case 5:
            this.o8_1 = 6;
            continue $sm;
          case 6:
            this.o8_1 = 1;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.r8_1;
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
  function $checkFullMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k2b_1 = _this__u8e3s4;
  }
  protoOf($checkFullMatchCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 8;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!this.k2b_1.n2a_1.q1j()) {
              this.m2b_1 = true;
              this.o8_1 = 3;
              continue $sm;
            } else {
              this.o8_1 = 2;
              suspendResult = this.k2b_1.j2a_1.g2a(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.m2b_1 = suspendResult;
            this.o8_1 = 3;
            continue $sm;
          case 3:
            if (!this.m2b_1) {
              this.o8_1 = 7;
              continue $sm;
            }

            this.l2b_1 = this.k2b_1.n2a_1.t1j();
            if (this.k2b_1.r2a_1 > 0 && !(this.l2b_1 === this.k2b_1.k2a_1.e1(this.k2b_1.r2a_1))) {
              var oldMatchIndex = this.k2b_1.r2a_1;
              while (this.k2b_1.r2a_1 > 0 && !(this.l2b_1 === this.k2b_1.k2a_1.e1(this.k2b_1.r2a_1))) {
                this.k2b_1.r2a_1 = this.k2b_1.o2a_1[this.k2b_1.r2a_1 - 1 | 0];
              }
              var retained = fromInt(oldMatchIndex - this.k2b_1.r2a_1 | 0);
              checkBounds(this.k2b_1, retained);
              var tmp_0 = this.k2b_1;
              var tmp_1 = this.k2b_1.q2a_1;
              var tmp_2 = this.k2b_1.l2a_1.a2a();
              tmp_0.q2a_1 = add(tmp_1, this.k2b_1.p2a_1.q1k(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), retained));
              if (this.k2b_1.r2a_1 === 0 && !(this.l2b_1 === this.k2b_1.k2a_1.e1(this.k2b_1.r2a_1))) {
                this.o8_1 = 6;
                suspendResult = writeByte(this.k2b_1.l2a_1, this.l2b_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.o8_1 = 4;
                continue $sm;
              }
            } else {
              this.o8_1 = 5;
              continue $sm;
            }

          case 4:
            this.o8_1 = 5;
            continue $sm;
          case 5:
            this.k2b_1.r2a_1 = this.k2b_1.r2a_1 + 1 | 0;
            if (this.k2b_1.r2a_1 === this.k2b_1.k2a_1.d1()) {
              return true;
            }

            this.k2b_1.p2a_1.j1l(this.l2b_1);
            this.o8_1 = 1;
            continue $sm;
          case 6:
            var _unary__edvuaz = this.k2b_1.q2a_1;
            this.k2b_1.q2a_1 = add(_unary__edvuaz, get_ONE());
            return false;
          case 7:
            return false;
          case 8:
            throw this.r8_1;
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
  function ByteChannelScanner(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    this.j2a_1 = channel;
    this.k2a_1 = matchString;
    this.l2a_1 = writeChannel;
    this.m2a_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.k2a_1.d1() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    this.n2a_1 = this.j2a_1.x29();
    this.o2a_1 = buildPartialMatchTable(this);
    this.p2a_1 = new Buffer();
    this.q2a_1 = new Long(0, 0);
    this.r2a_1 = 0;
  }
  protoOf(ByteChannelScanner).y2b = function (ignoreMissing, $completion) {
    var tmp = new $findNextCOROUTINE$(this, ignoreMissing, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  function ByteReadChannel$Companion$Empty$1() {
    this.z2b_1 = null;
    this.a2c_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).c2a = function () {
    return this.z2b_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).e2a = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).x29 = function () {
    return this.a2c_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).f2a = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).i2a = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.b2c_1 = new ByteReadChannel$Companion$Empty$1();
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ByteReadChannel_1() {
  }
  function cancel_0(_this__u8e3s4) {
    _this__u8e3s4.i2a(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$(_this__u8e3s4, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$(_this__u8e3s4, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$(_this__u8e3s4, channel, limit, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function discard(_this__u8e3s4, max, $completion) {
    max = max === VOID ? new Long(-1, 2147483647) : max;
    var tmp = new $discardCOROUTINE$(_this__u8e3s4, max, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function copyTo_0(_this__u8e3s4, channel, $completion) {
    var tmp = new $copyToCOROUTINE$_0(_this__u8e3s4, channel, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function skipIfFound(_this__u8e3s4, byteString, $completion) {
    var tmp = new $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$(_this__u8e3s4, packet, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).y2b(ignoreMissing, $completion);
  }
  function readLineStrictTo(_this__u8e3s4, out, limit, lineEnding, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
    // Inline function 'kotlin.require' call
    if (!(compare(limit, new Long(0, 0)) >= 0)) {
      var message = 'Limit (' + limit.toString() + ') should be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    return internalReadLineTo(_this__u8e3s4, out, limit, lineEnding.equals(LineEnding_Lenient_getInstance()), true, $completion);
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.c2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.c2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$(_this__u8e3s4, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function get_availableForRead(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.x29().p1j().d1());
  }
  function peek(_this__u8e3s4, count, $completion) {
    var tmp = new $peekCOROUTINE$(_this__u8e3s4, count, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
    var tmp = new $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function throwEndOfStreamException(consumed) {
    throw EOFException_init_$Create$('Unexpected end of stream after reading ' + consumed.toString() + ' characters');
  }
  function throwTooLongLineException(limit) {
    throw new TooLongLineException('Line exceeds limit of ' + limit.toString() + ' characters');
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.c2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function internalReadLineTo$transferString(readBuffer, $out, consumed, count) {
    if (compare(count, new Long(0, 0)) > 0) {
      var string = readString(readBuffer, count);
      $out.b1(string);
      var tmp0 = consumed._v;
      // Inline function 'kotlin.Long.plus' call
      var other = string.length;
      consumed._v = add(tmp0, fromInt(other));
    }
  }
  function internalReadLineTo$scanForSoleCr(_this__u8e3s4, $lenientLineEnding, lfIndex, limitLeft) {
    if (!$lenientLineEnding)
      return new Long(-1, -1);
    var tmp;
    if (equalsLong(lfIndex, new Long(-1, -1))) {
      // Inline function 'kotlin.Long.minus' call
      var this_0 = get_remaining(_this__u8e3s4);
      // Inline function 'kotlin.comparisons.minOf' call
      var b = subtract(this_0, fromInt(1));
      tmp = compare(limitLeft, b) <= 0 ? limitLeft : b;
    } else if (equalsLong(lfIndex, new Long(0, 0))) {
      tmp = new Long(0, 0);
    } else {
      // Inline function 'kotlin.Long.minus' call
      tmp = subtract(lfIndex, fromInt(1));
    }
    var endIndex = tmp;
    return indexOf(_this__u8e3s4, 13, VOID, endIndex);
  }
  function internalReadLineTo$discardCrlfOrCr(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
    var tmp = new $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function $readRemainingCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k2c_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            this.l2c_1 = BytePacketBuilder();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.k2c_1.e2a()) {
              this.o8_1 = 3;
              continue $sm;
            }

            this.l2c_1.i1l(this.k2c_1.x29());
            this.o8_1 = 2;
            suspendResult = this.k2c_1.g2a(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o8_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded_0(this.k2c_1);
            return this.l2c_1.p1j();
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
  function $toByteArrayCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u2c_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 2;
            this.o8_1 = 1;
            suspendResult = readBuffer(this.u2c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
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
  function $copyToCOROUTINE$(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d2d_1 = _this__u8e3s4;
    this.e2d_1 = channel;
    this.f2d_1 = limit;
  }
  protoOf($copyToCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 12;
            this.g2d_1 = this.f2d_1;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 8;
            this.p8_1 = 7;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.d2d_1.e2a() && compare(this.g2d_1, new Long(0, 0)) > 0)) {
              this.o8_1 = 6;
              continue $sm;
            }

            if (this.d2d_1.x29().q1j()) {
              this.o8_1 = 3;
              suspendResult = this.d2d_1.g2a(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 4;
              continue $sm;
            }

          case 3:
            this.o8_1 = 4;
            continue $sm;
          case 4:
            var tmp0 = this.g2d_1;
            var b = get_remaining(this.d2d_1.x29());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            this.d2d_1.x29().s1k(this.e2d_1.a2a(), count);
            this.g2d_1 = subtract(this.g2d_1, count);
            this.o8_1 = 5;
            suspendResult = this.e2d_1.v29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.o8_1 = 2;
            continue $sm;
          case 6:
            this.p8_1 = 12;
            this.o8_1 = 10;
            continue $sm;
          case 7:
            this.p8_1 = 8;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              this.d2d_1.i2a(cause);
              close_0(this.e2d_1, cause);
              throw cause;
            } else {
              throw this.r8_1;
            }

          case 8:
            this.p8_1 = 12;
            this.h2d_1 = this.r8_1;
            this.o8_1 = 9;
            suspendResult = this.e2d_1.v29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.h2d_1;
          case 10:
            this.p8_1 = 12;
            this.o8_1 = 11;
            suspendResult = this.e2d_1.v29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return subtract(this.f2d_1, this.g2d_1);
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
  function $discardCOROUTINE$(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q2d_1 = _this__u8e3s4;
    this.r2d_1 = max;
  }
  protoOf($discardCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.s2d_1 = this.r2d_1;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.s2d_1, new Long(0, 0)) > 0 && !this.q2d_1.e2a())) {
              this.o8_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.q2d_1) === 0) {
              this.o8_1 = 2;
              suspendResult = this.q2d_1.g2a(VOID, this);
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
            var tmp0 = this.s2d_1;
            var b = get_remaining(this.q2d_1.x29());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            discard_0(this.q2d_1.x29(), count);
            this.s2d_1 = subtract(this.s2d_1, count);
            this.o8_1 = 1;
            continue $sm;
          case 4:
            return subtract(this.r2d_1, this.s2d_1);
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
  function $copyToCOROUTINE$_0(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b2e_1 = _this__u8e3s4;
    this.c2e_1 = channel;
  }
  protoOf($copyToCOROUTINE$_0).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 11;
            this.d2e_1 = new Long(0, 0);
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 7;
            this.p8_1 = 6;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            if (!!this.b2e_1.e2a()) {
              this.o8_1 = 5;
              continue $sm;
            }

            this.d2e_1 = add(this.d2e_1, this.b2e_1.x29().t1k(this.c2e_1.a2a()));
            this.o8_1 = 3;
            suspendResult = this.c2e_1.v29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.o8_1 = 4;
            suspendResult = this.b2e_1.g2a(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.o8_1 = 2;
            continue $sm;
          case 5:
            this.p8_1 = 11;
            this.o8_1 = 9;
            continue $sm;
          case 6:
            this.p8_1 = 7;
            var tmp_0 = this.r8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.r8_1;
              this.b2e_1.i2a(cause);
              close_0(this.c2e_1, cause);
              throw cause;
            } else {
              throw this.r8_1;
            }

          case 7:
            this.p8_1 = 11;
            this.e2e_1 = this.r8_1;
            this.o8_1 = 8;
            suspendResult = this.c2e_1.v29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.e2e_1;
          case 9:
            this.p8_1 = 11;
            this.o8_1 = 10;
            suspendResult = this.c2e_1.v29(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.d2e_1;
          case 11:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 11) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n2e_1 = _this__u8e3s4;
    this.o2e_1 = buffer;
    this.p2e_1 = offset;
    this.q2e_1 = length;
  }
  protoOf($readAvailableCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            if (this.n2e_1.e2a())
              return -1;
            if (this.n2e_1.x29().q1j()) {
              this.o8_1 = 1;
              suspendResult = this.n2e_1.g2a(VOID, this);
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
            if (this.n2e_1.e2a())
              return -1;
            return readAvailable_0(this.n2e_1.x29(), this.o2e_1, this.p2e_1, this.q2e_1);
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
  function $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z2e_1 = _this__u8e3s4;
    this.a2f_1 = byteString;
  }
  protoOf($skipIfFoundCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            this.o8_1 = 1;
            suspendResult = peek(this.z2e_1, this.a2f_1.d1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (equals(ARGUMENT, this.a2f_1)) {
              this.o8_1 = 3;
              suspendResult = discard(this.z2e_1, fromInt(this.a2f_1.d1()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            return true;
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
  function $readPacketCOROUTINE$(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j2f_1 = _this__u8e3s4;
    this.k2f_1 = packet;
  }
  protoOf($readPacketCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 6;
            this.l2f_1 = new Buffer();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.l2f_1.d1(), fromInt(this.k2f_1)) < 0)) {
              this.o8_1 = 5;
              continue $sm;
            }

            if (this.j2f_1.x29().q1j()) {
              this.o8_1 = 2;
              suspendResult = this.j2f_1.g2a(VOID, this);
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
            if (this.j2f_1.e2a()) {
              this.o8_1 = 5;
              continue $sm;
            } else {
              this.o8_1 = 4;
              continue $sm;
            }

          case 4:
            if (compare(get_remaining(this.j2f_1.x29()), subtract(numberToLong(this.k2f_1), this.l2f_1.d1())) > 0) {
              this.j2f_1.x29().s1k(this.l2f_1, subtract(numberToLong(this.k2f_1), this.l2f_1.d1()));
            } else {
              this.j2f_1.x29().t1k(this.l2f_1);
            }

            this.o8_1 = 1;
            continue $sm;
          case 5:
            if (compare(this.l2f_1.d1(), fromInt(this.k2f_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.k2f_1 + ' bytes but only ' + this.l2f_1.d1().toString() + ' available');
            }

            return this.l2f_1;
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
  function $readBufferCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u2f_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            this.v2f_1 = new Buffer();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.u2f_1.e2a()) {
              this.o8_1 = 3;
              continue $sm;
            }

            this.v2f_1.i1l(this.u2f_1.x29());
            this.o8_1 = 2;
            suspendResult = this.u2f_1.g2a(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o8_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.u2f_1.c2a();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.v2f_1;
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
  function $peekCOROUTINE$(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e2g_1 = _this__u8e3s4;
    this.f2g_1 = count;
  }
  protoOf($peekCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            if (this.e2g_1.e2a())
              return null;
            this.o8_1 = 1;
            suspendResult = this.e2g_1.f2a(this.f2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!suspendResult) {
              return null;
            } else {
              this.o8_1 = 2;
              continue $sm;
            }

          case 2:
            return readByteString(this.e2g_1.x29().u1k(), this.f2g_1);
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
  function $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o2g_1 = _this__u8e3s4;
    this.p2g_1 = out;
    this.q2g_1 = limit;
    this.r2g_1 = lenientLineEnding;
    this.s2g_1 = throwOnIncompleteLine;
  }
  protoOf($internalReadLineToCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 18;
            this.u2g_1 = this.o2g_1.x29();
            if (this.u2g_1.q1j()) {
              this.o8_1 = 1;
              suspendResult = this.o2g_1.g2a(VOID, this);
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
            if (this.o2g_1.e2a())
              return new Long(-1, -1);
            this.t2g_1 = {_v: new Long(0, 0)};
            this.o8_1 = 3;
            continue $sm;
          case 3:
            if (!(compare(this.t2g_1._v, this.q2g_1) < 0 && !this.o2g_1.e2a())) {
              this.o8_1 = 10;
              continue $sm;
            }

            var limitLeft = subtract(this.q2g_1, this.t2g_1._v);
            var lfIndex = indexOf(this.u2g_1, 10, VOID, limitLeft);
            var crIndex = internalReadLineTo$scanForSoleCr(this.u2g_1, this.r2g_1, lfIndex, limitLeft);
            if (compare(crIndex, new Long(0, 0)) >= 0) {
              internalReadLineTo$transferString(this.u2g_1, this.p2g_1, this.t2g_1, crIndex);
              discard_0(this.u2g_1, new Long(1, 0));
              return this.t2g_1._v;
            }

            if (equalsLong(lfIndex, new Long(0, 0))) {
              discard_0(this.u2g_1, new Long(1, 0));
              return this.t2g_1._v;
            }

            if (compare(lfIndex, new Long(0, 0)) > 0) {
              var tmp_0;
              var tmp_1 = this.u2g_1.p1j();
              if (tmp_1.l1k(subtract(lfIndex, fromInt(1))) === 13) {
                tmp_0 = new Long(1, 0);
              } else {
                tmp_0 = new Long(0, 0);
              }
              var isCrlf = tmp_0;
              internalReadLineTo$transferString(this.u2g_1, this.p2g_1, this.t2g_1, subtract(lfIndex, isCrlf));
              discard_0(this.u2g_1, add(numberToLong(1), isCrlf));
              return this.t2g_1._v;
            }

            var b = get_remaining(this.u2g_1);
            var count = compare(limitLeft, b) <= 0 ? limitLeft : b;
            var tmp_2 = this.u2g_1.p1j();
            if (tmp_2.l1k(subtract(count, fromInt(1))) === 13) {
              internalReadLineTo$transferString(this.u2g_1, this.p2g_1, this.t2g_1, subtract(count, fromInt(1)));
              this.o8_1 = 4;
              suspendResult = internalReadLineTo$discardCrlfOrCr(this.u2g_1, this.o2g_1, this.r2g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              internalReadLineTo$transferString(this.u2g_1, this.p2g_1, this.t2g_1, count);
              this.o8_1 = 6;
              continue $sm;
            }

          case 4:
            if (suspendResult) {
              return this.t2g_1._v;
            } else {
              this.o8_1 = 5;
              continue $sm;
            }

          case 5:
            internalReadLineTo$transferString(this.u2g_1, this.p2g_1, this.t2g_1, new Long(1, 0));
            this.o8_1 = 6;
            continue $sm;
          case 6:
            if (compare(this.t2g_1._v, this.q2g_1) < 0 && equalsLong(get_remaining(this.u2g_1), new Long(0, 0))) {
              this.o8_1 = 7;
              suspendResult = this.o2g_1.g2a(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.w2g_1 = false;
              this.o8_1 = 8;
              continue $sm;
            }

          case 7:
            this.w2g_1 = !suspendResult;
            this.o8_1 = 8;
            continue $sm;
          case 8:
            if (this.w2g_1) {
              this.o8_1 = 10;
              continue $sm;
            } else {
              this.o8_1 = 9;
              continue $sm;
            }

          case 9:
            this.o8_1 = 3;
            continue $sm;
          case 10:
            if (equalsLong(this.t2g_1._v, new Long(0, 0)) && this.o2g_1.e2a())
              return new Long(-1, -1);
            if (!(compare(this.t2g_1._v, this.q2g_1) <= 0)) {
              var message = 'Consumed bytes exceed the limit: ' + this.t2g_1._v.toString() + ' > ' + this.q2g_1.toString() + ". It's an implementation bug, please report it.";
              throw IllegalStateException_init_$Create$(toString_1(message));
            }

            if (equalsLong(this.t2g_1._v, this.q2g_1)) {
              if (equalsLong(this.q2g_1, new Long(-1, 2147483647)))
                throw new TooLongLineException('Max line length exceeded');
              if (equalsLong(get_remaining(this.u2g_1), new Long(0, 0))) {
                this.o8_1 = 12;
                suspendResult = this.o2g_1.g2a(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.v2g_1 = false;
                this.o8_1 = 13;
                continue $sm;
              }
            } else {
              this.o8_1 = 11;
              continue $sm;
            }

          case 11:
            if (this.s2g_1) {
              throwEndOfStreamException(this.t2g_1._v);
            }

            return this.t2g_1._v;
          case 12:
            this.v2g_1 = !suspendResult;
            this.o8_1 = 13;
            continue $sm;
          case 13:
            if (this.v2g_1) {
              throwEndOfStreamException(this.t2g_1._v);
            } else {
              this.o8_1 = 14;
              continue $sm;
            }

            break;
          case 14:
            var tmp0_subject = this.u2g_1.p1j().l1k(new Long(0, 0));
            if (tmp0_subject === 10) {
              discard_0(this.u2g_1, new Long(1, 0));
              return this.t2g_1._v;
            } else {
              if (tmp0_subject === 13) {
                this.o8_1 = 15;
                suspendResult = internalReadLineTo$discardCrlfOrCr(this.u2g_1, this.o2g_1, this.r2g_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.o8_1 = 17;
                continue $sm;
              }
            }

          case 15:
            if (suspendResult) {
              return this.t2g_1._v;
            } else {
              this.o8_1 = 16;
              continue $sm;
            }

          case 16:
            this.o8_1 = 17;
            continue $sm;
          case 17:
            throwTooLongLineException(this.q2g_1);
            break;
          case 18:
            throw this.r8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.p8_1 === 18) {
          throw e;
        } else {
          this.o8_1 = this.p8_1;
          this.r8_1 = e;
        }
      }
     while (true);
  };
  function $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f2h_1 = _this__u8e3s4;
    this.g2h_1 = $this_internalReadLineTo;
    this.h2h_1 = $lenientLineEnding;
  }
  protoOf($internalReadLineTo$discardCrlfOrCrCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            if (compare(get_remaining(this.f2h_1), new Long(2, 0)) >= 0) {
              this.j2h_1 = true;
              this.o8_1 = 2;
              continue $sm;
            } else {
              this.o8_1 = 1;
              suspendResult = this.g2h_1.f2a(2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.j2h_1 = suspendResult;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            if (this.j2h_1) {
              this.i2h_1 = this.f2h_1.p1j().l1k(new Long(1, 0)) === 10;
              this.o8_1 = 3;
              continue $sm;
            } else {
              this.i2h_1 = false;
              this.o8_1 = 3;
              continue $sm;
            }

          case 3:
            if (this.i2h_1) {
              discard_0(this.f2h_1, new Long(2, 0));
              return true;
            } else {
              this.o8_1 = 4;
              continue $sm;
            }

          case 4:
            if (this.h2h_1) {
              discard_0(this.f2h_1, new Long(1, 0));
              return true;
            }

            return false;
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
  function ByteWriteChannel() {
  }
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$(_this__u8e3s4, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function $flushIfNeededCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s2h_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            rethrowCloseCauseIfNeeded_1(this.s2h_1);
            if (this.s2h_1.w29() || get_size(this.s2h_1.a2a()) >= 1048576) {
              this.o8_1 = 1;
              suspendResult = this.s2h_1.v29(this);
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
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.t2h_1 = channel;
    this.u2h_1 = job;
  }
  protoOf(WriterJob).y1s = function () {
    return this.u2h_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.v2h_1 = channel;
    this.w2h_1 = coroutineContext;
  }
  protoOf(WriterScope).b1n = function () {
    return this.w2h_1;
  };
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.y1s().d1o(block);
  }
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.a2a().z1k(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
    } else {
      _this__u8e3s4.i2a(cause);
    }
  }
  function writePacket(_this__u8e3s4, source, $completion) {
    var tmp = new $writePacketCOROUTINE$(_this__u8e3s4, source, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.d1o(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.a2a().j1l(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function NO_CALLBACK$1() {
    this.h2i_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).u8 = function () {
    return this.h2i_1;
  };
  protoOf(NO_CALLBACK$1).v8 = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).z8 = function (result) {
    return this.v8(result);
  };
  function ByteWriteChannel$flushAndClose$ref(p0) {
    this.i2i_1 = p0;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref).j2i = function ($completion) {
    return this.i2i_1.h2a($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref).fa = function ($completion) {
    return this.j2i($completion);
  };
  function ByteWriteChannel$flushAndClose$ref_0(p0) {
    var i = new ByteWriteChannel$flushAndClose$ref(p0);
    var l = function ($completion) {
      return i.j2i($completion);
    };
    l.callableName = 'flushAndClose';
    l.$arity = 0;
    return l;
  }
  function writer$slambda($block, $channel, resultContinuation) {
    this.s2i_1 = $block;
    this.t2i_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).b2j = function ($this$launch, $completion) {
    var tmp = this.c2j($this$launch, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(writer$slambda).j9 = function (p1, $completion) {
    return this.b2j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 14;
            this.x2i_1 = Job(get_job(this.u2i_1.b1n()));
            this.o8_1 = 1;
            continue $sm;
          case 1:
            this.p8_1 = 4;
            this.p8_1 = 3;
            this.o8_1 = 2;
            suspendResult = this.s2i_1(new WriterScope(this.t2i_1, this.u2i_1.b1n().nf(this.x2i_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x2i_1.t1t();
            var tmp_0;
            if (get_job(this.u2i_1.b1n()).x1n()) {
              this.t2i_1.i2a(get_job(this.u2i_1.b1n()).a1o());
              tmp_0 = Unit_instance;
            }

            this.p8_1 = 14;
            this.o8_1 = 9;
            continue $sm;
          case 3:
            this.p8_1 = 4;
            var tmp_1 = this.r8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.r8_1;
              cancel(this.x2i_1, 'Exception thrown while writing to channel', cause);
              this.t2i_1.i2a(cause);
              this.p8_1 = 14;
              this.o8_1 = 9;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 4:
            this.p8_1 = 14;
            this.y2i_1 = this.r8_1;
            this.o8_1 = 5;
            suspendResult = this.x2i_1.h1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.u2i_1;
            this.p8_1 = 7;
            this.a2j_1 = Companion_instance;
            this.o8_1 = 6;
            suspendResult = this.t2i_1.h2a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            this.a2j_1;
            tmp_2.z2i_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.p8_1 = 14;
            this.o8_1 = 8;
            continue $sm;
          case 7:
            this.p8_1 = 14;
            var tmp_3 = this.r8_1;
            if (tmp_3 instanceof Error) {
              var e = this.r8_1;
              var tmp_4 = this;
              tmp_4.z2i_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.o8_1 = 8;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 8:
            this.p8_1 = 14;
            throw this.y2i_1;
          case 9:
            this.p8_1 = 14;
            this.o8_1 = 10;
            suspendResult = this.x2i_1.h1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.u2i_1;
            this.p8_1 = 12;
            this.w2i_1 = Companion_instance;
            this.o8_1 = 11;
            suspendResult = this.t2i_1.h2a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_5 = this;
            this.w2i_1;
            tmp_5.v2i_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.p8_1 = 14;
            this.o8_1 = 13;
            continue $sm;
          case 12:
            this.p8_1 = 14;
            var tmp_6 = this.r8_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.r8_1;
              var tmp_7 = this;
              tmp_7.v2i_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.o8_1 = 13;
              continue $sm;
            } else {
              throw this.r8_1;
            }

          case 13:
            this.p8_1 = 14;
            return Unit_instance;
          case 14:
            throw this.r8_1;
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
  protoOf(writer$slambda).c2j = function ($this$launch, completion) {
    var i = new writer$slambda(this.s2i_1, this.t2i_1, completion);
    i.u2i_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b2j($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.b2a()) {
        $channel.i2a(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function $writePacketCOROUTINE$(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f2i_1 = _this__u8e3s4;
    this.g2i_1 = source;
  }
  protoOf($writePacketCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 4;
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.g2i_1.q1j()) {
              this.o8_1 = 3;
              continue $sm;
            }

            this.f2i_1.a2a().d1l(this.g2i_1, get_remaining(this.g2i_1));
            this.o8_1 = 2;
            suspendResult = flushIfNeeded(this.f2i_1, this);
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
  var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
  function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
    if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
      properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
      NO_CALLBACK = new NO_CALLBACK$1();
    }
  }
  function get_CLOSED() {
    _init_properties_CloseToken_kt__9ucr41();
    return CLOSED;
  }
  var CLOSED;
  function ClosedByteChannelException$_init_$ref_yjp351() {
    var l = function (p0) {
      return new ClosedByteChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function CloseToken(origin) {
    this.y29_1 = origin;
  }
  protoOf(CloseToken).d2j = function (wrap) {
    var tmp0_subject = this.y29_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = this.y29_1.c1u();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(this.y29_1.message, this.y29_1);
        } else {
          tmp = wrap(this.y29_1);
        }
      }
    }
    return tmp;
  };
  protoOf(CloseToken).d2a = function (wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.d2j(wrap) : $super.d2j.call(this, wrap);
  };
  protoOf(CloseToken).z29 = function (wrap) {
    var tmp0_safe_receiver = this.d2j(wrap);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return tmp;
  };
  var properties_initialized_CloseToken_kt_lgg8zn;
  function _init_properties_CloseToken_kt__9ucr41() {
    if (!properties_initialized_CloseToken_kt_lgg8zn) {
      properties_initialized_CloseToken_kt_lgg8zn = true;
      CLOSED = new CloseToken(null);
    }
  }
  function transferFromDelegate($this) {
    updateConsumed($this);
    var appended = $this.f2j_1.i1l($this.e2j_1.x29());
    $this.g2j_1 = add($this.g2j_1, appended);
  }
  function updateConsumed($this) {
    $this.h2j_1 = add($this.h2j_1, subtract($this.g2j_1, $this.f2j_1.d1()));
    $this.g2j_1 = $this.f2j_1.d1();
  }
  function $awaitContentCOROUTINE$_0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q2j_1 = _this__u8e3s4;
    this.r2j_1 = min;
  }
  protoOf($awaitContentCOROUTINE$_0).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            if (compare(this.q2j_1.x29().d1(), fromInt(this.r2j_1)) >= 0) {
              return true;
            }

            this.o8_1 = 1;
            suspendResult = this.q2j_1.e2j_1.f2a(this.r2j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              transferFromDelegate(this.q2j_1);
              return true;
            } else {
              this.o8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
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
  function CountedByteReadChannel(delegate) {
    this.e2j_1 = delegate;
    this.f2j_1 = new Buffer();
    this.g2j_1 = new Long(0, 0);
    this.h2j_1 = new Long(0, 0);
  }
  protoOf(CountedByteReadChannel).s2j = function () {
    updateConsumed(this);
    return this.h2j_1;
  };
  protoOf(CountedByteReadChannel).c2a = function () {
    return this.e2j_1.c2a();
  };
  protoOf(CountedByteReadChannel).e2a = function () {
    return this.f2j_1.q1j() && this.e2j_1.e2a();
  };
  protoOf(CountedByteReadChannel).x29 = function () {
    transferFromDelegate(this);
    return this.f2j_1;
  };
  protoOf(CountedByteReadChannel).f2a = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$_0(this, min, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(CountedByteReadChannel).i2a = function (cause) {
    this.e2j_1.i2a(cause);
    this.f2j_1.d4();
  };
  function counted(_this__u8e3s4) {
    return new CountedByteReadChannel(_this__u8e3s4);
  }
  function readText(_this__u8e3s4) {
    return readString_0(_this__u8e3s4);
  }
  function ClosedByteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$(cause == null ? null : cause.message, cause, this);
    captureStack(this, ClosedByteChannelException);
  }
  function ClosedReadChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedReadChannelException);
  }
  function ClosedWriteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedWriteChannelException);
  }
  var LineEnding_Default_instance;
  var LineEnding_Lenient_instance;
  var LineEnding_entriesInitialized;
  function LineEnding_initEntries() {
    if (LineEnding_entriesInitialized)
      return Unit_instance;
    LineEnding_entriesInitialized = true;
    LineEnding_Default_instance = new LineEnding('Default', 0);
    LineEnding_Lenient_instance = new LineEnding('Lenient', 1);
  }
  function LineEnding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LineEnding_Default_getInstance() {
    LineEnding_initEntries();
    return LineEnding_Default_instance;
  }
  function LineEnding_Lenient_getInstance() {
    LineEnding_initEntries();
    return LineEnding_Lenient_instance;
  }
  function _LineEndingMode___init__impl__jo5bul(mode) {
    return mode;
  }
  function _get_mode__dah3bc($this) {
    return $this;
  }
  function LineEndingMode__contains_impl_q5pr68($this, other) {
    return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
  }
  function LineEndingMode__plus_impl_ttpz2j($this, other) {
    return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
  }
  function LineEndingMode__toString_impl_j4h76r($this) {
    var tmp;
    if ($this === Companion_getInstance_1().t2j_1) {
      tmp = 'CR';
    } else if ($this === Companion_getInstance_1().u2j_1) {
      tmp = 'LF';
    } else if ($this === Companion_getInstance_1().v2j_1) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_1().x2j_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var it = element.y2j_1;
        if (LineEndingMode__contains_impl_q5pr68($this, it)) {
          destination.c1(element);
        }
      }
      tmp = toString_1(destination);
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.t2j_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.u2j_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.v2j_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.w2j_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.x2j_1 = listOf([new LineEndingMode(this.t2j_1), new LineEndingMode(this.u2j_1), new LineEndingMode(this.v2j_1)]);
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function LineEndingMode__hashCode_impl_2mopm4($this) {
    return $this;
  }
  function LineEndingMode__equals_impl_qyr4nk($this, other) {
    if (!(other instanceof LineEndingMode))
      return false;
    if (!($this === other.y2j_1))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_1();
    this.y2j_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.y2j_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.y2j_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.y2j_1, other);
  };
  function SourceByteReadChannel(source) {
    this.z2j_1 = source;
    this.a2k_1 = null;
  }
  protoOf(SourceByteReadChannel).c2a = function () {
    var tmp0_safe_receiver = this.a2k_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d2a();
  };
  protoOf(SourceByteReadChannel).e2a = function () {
    return this.z2j_1.q1j();
  };
  protoOf(SourceByteReadChannel).x29 = function () {
    var tmp0_safe_receiver = this.c2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.z2j_1.p1j();
  };
  protoOf(SourceByteReadChannel).f2a = function (min, $completion) {
    var tmp0_safe_receiver = this.c2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.z2j_1.s1j(fromInt(min));
  };
  protoOf(SourceByteReadChannel).i2a = function (cause) {
    if (!(this.a2k_1 == null))
      return Unit_instance;
    this.z2j_1.d4();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.a2k_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = fromInt(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.p1j().d1();
    var tmp$ret$0 = compare(tmp0, b) <= 0 ? tmp0 : b;
    // Inline function 'kotlin.text.buildString' call
    var capacity = convertToInt(tmp$ret$0);
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    decode_0(_this__u8e3s4, input, this_0, max);
    return this_0.toString();
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
    return builder;
  }
  function TooLongLineException(message) {
    MalformedInputException.call(this, message);
    captureStack(this, TooLongLineException);
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return Unit_instance;
    $l$loop: while (true) {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
      // Inline function 'kotlin.check' call
      if (!(rc >= 0)) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      start = start + rc | 0;
      if (start >= toIndex)
        break $l$loop;
    }
  }
  function canRead(_this__u8e3s4) {
    return !_this__u8e3s4.q1j();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? convertToInt(_this__u8e3s4.d1()) : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.z1k(buffer, offset, offset + length | 0);
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.p1j();
  }
  function get_size(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.p1j().d1());
  }
  var ByteReadPacketEmpty;
  function ByteReadPacket(array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length : length;
    _init_properties_ByteReadPacket_kt__28475y();
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    this_0.z1k(array, offset, offset + length | 0);
    return this_0;
  }
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.p1j().d1();
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.q1j() && block(_this__u8e3s4.p1j())) {
    }
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? new Long(-1, 2147483647) : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.s1j(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = compare(count, b) <= 0 ? count : b;
    _this__u8e3s4.p1j().n1k(countToDiscard);
    return countToDiscard;
  }
  var properties_initialized_ByteReadPacket_kt_hw4st4;
  function _init_properties_ByteReadPacket_kt__28475y() {
    if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
      properties_initialized_ByteReadPacket_kt_hw4st4 = true;
      ByteReadPacketEmpty = new Buffer();
    }
  }
  function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var result = _this__u8e3s4.o1k(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().b2k_1 : charset;
    if (charset.equals(Charsets_getInstance().b2k_1))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.e2k(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().b2k_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().b2k_1)) {
      if (max === 2147483647)
        return readString_0(_this__u8e3s4);
      var tmp0 = _this__u8e3s4.p1j().d1();
      // Inline function 'kotlin.math.min' call
      var b = fromInt(max);
      var count = compare(tmp0, b) <= 0 ? tmp0 : b;
      return readString(_this__u8e3s4, count);
    }
    return decode(charset.f2k(), _this__u8e3s4, max);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().b2k_1 : charset;
    if (charset === Charsets_getInstance().b2k_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.e2k(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).j2k = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).r2k = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).m1q = function () {
    return Unit_instance;
  };
  function MalformedInputException(message) {
    IOException_init_$Init$_0(message, this);
    captureStack(this, MalformedInputException);
  }
  function Companion_2() {
  }
  protoOf(Companion_2).s2k = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().b2k_1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().c2k_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function Charset(_name) {
    this.d2k_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.d2k_1 === other.d2k_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.d2k_1);
  };
  protoOf(Charset).toString = function () {
    return this.d2k_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.d2k_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.b2k_1 = new CharsetImpl('UTF-8');
    this.c2k_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function CharsetDecoder(_charset) {
    this.t2k_1 = _charset;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_3.s2k(name);
  }
  function CharsetEncoder(_charset) {
    this.u2k_1 = _charset;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var tmp0 = input.p1j().d1();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = fromInt(max);
    var count = compare(tmp0, b) <= 0 ? tmp0 : b;
    var array = readByteArray(input, convertToInt(count));
    var tmp;
    try {
      // Inline function 'org.khronos.webgl.toInt8Array' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = decoder.v2k(array);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        var tmp0_elvis_lhs = cause.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
    var result = tmp;
    dst.b1(result);
    return result.length;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().c2k_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().b2k_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.c1l(result);
    return result.length;
  }
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).e2k = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).f2k = function () {
    return new CharsetDecoderImpl(this);
  };
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.t2k_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.u2k_1;
  }
  function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return new Int8Array(0);
    var dst = new Buffer();
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
    start = start + rc | 0;
    if (start === toIndex) {
      return readByteArray_0(dst);
    }
    encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
    return readByteArray_0(dst);
  }
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.y2k_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.y2k_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.y2k_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.y2k_1.equals(other.y2k_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.a2l_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.a2l_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.a2l_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.a2l_1.equals(other.a2l_1))
      return false;
    return true;
  };
  function Decoder(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.with' call
    this_0.fatal = fatal;
    return this_0;
  }
  function toKtor$1($this_toKtor) {
    this.b2l_1 = $this_toKtor;
  }
  protoOf(toKtor$1).v2k = function (buffer) {
    return this.b2l_1.decode(buffer);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.c2l_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().h2(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).v2k = function (buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.c2l_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.j1l(toByte(point >> 8));
        }
        builder.j1l(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString_0(readByteArray_0(builder));
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
  function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
    if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
      properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT = new Int8Array([-17, -65, -67]);
    }
  }
  function get_DEVELOPMENT_MODE() {
    return false;
  }
  function ioDispatcher() {
    return Dispatchers_getInstance().q1x_1;
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(input, index);
        var character = Char__toInt_impl_vasixd(this_0);
        if (character > 255) {
          failedToMapError(character);
        }
        dst.j1l(toByte(character));
      }
       while (inductionVariable < toIndex);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (!properties_initialized_Win1252Table_kt_pkmjoq) {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      // Inline function 'kotlin.intArrayOf' call
      WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
    }
  }
  function DefaultPool(capacity) {
    this.k2k_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.k2k_1;
    tmp.l2k_1 = Array(size);
    this.m2k_1 = 0;
  }
  protoOf(DefaultPool).n2k = function (instance) {
  };
  protoOf(DefaultPool).o2k = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).p2k = function (instance) {
  };
  protoOf(DefaultPool).q2k = function () {
    if (this.m2k_1 === 0)
      return this.j2k();
    this.m2k_1 = this.m2k_1 - 1 | 0;
    var idx = this.m2k_1;
    var tmp = this.l2k_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.l2k_1[idx] = null;
    return this.o2k(instance);
  };
  protoOf(DefaultPool).r2k = function (instance) {
    this.p2k(instance);
    if (this.m2k_1 === this.k2k_1) {
      this.n2k(instance);
    } else {
      var _unary__edvuaz = this.m2k_1;
      this.m2k_1 = _unary__edvuaz + 1 | 0;
      this.l2k_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).m1q = function () {
    var inductionVariable = 0;
    var last = this.m2k_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.l2k_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.l2k_1[i] = null;
        this.n2k(instance);
      }
       while (inductionVariable < last);
    this.m2k_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).a28 = resume;
  protoOf(Read).b28 = resume_0;
  protoOf(Write).a28 = resume;
  protoOf(Write).b28 = resume_0;
  protoOf(ByteChannel).g2a = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).g2a = awaitContent$default;
  protoOf(CountedByteReadChannel).g2a = awaitContent$default;
  protoOf(SourceByteReadChannel).g2a = awaitContent$default;
  protoOf(DefaultPool).d4 = close;
  protoOf(NoPoolImpl).d4 = close;
  //endregion
  //region block: init
  Empty_instance = new Empty();
  Companion_instance_3 = new Companion_2();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = copyTo;
  _.$_$.b = copyTo_0;
  _.$_$.c = readAvailable;
  _.$_$.d = readLineStrictTo;
  _.$_$.e = readPacket;
  _.$_$.f = readRemaining;
  _.$_$.g = readUntil;
  _.$_$.h = skipIfFound;
  _.$_$.i = toByteArray;
  _.$_$.j = writeFully;
  _.$_$.k = writePacket;
  _.$_$.l = LineEndingMode__plus_impl_ttpz2j;
  _.$_$.m = Charsets_getInstance;
  _.$_$.n = Companion_getInstance_0;
  _.$_$.o = Companion_getInstance_1;
  _.$_$.p = MalformedInputException;
  _.$_$.q = decode;
  _.$_$.r = encode;
  _.$_$.s = forName;
  _.$_$.t = get_name;
  _.$_$.u = BytePacketBuilder;
  _.$_$.v = ByteReadPacket;
  _.$_$.w = build;
  _.$_$.x = canRead;
  _.$_$.y = readText_0;
  _.$_$.z = get_remaining;
  _.$_$.a1 = get_size;
  _.$_$.b1 = takeWhile;
  _.$_$.c1 = toByteArray_0;
  _.$_$.d1 = writeFully_0;
  _.$_$.e1 = writeText;
  _.$_$.f1 = get_ByteArrayPool;
  _.$_$.g1 = DefaultPool;
  _.$_$.h1 = NoPoolImpl;
  _.$_$.i1 = ByteChannel;
  _.$_$.j1 = ByteReadChannel;
  _.$_$.k1 = ByteReadChannel_1;
  _.$_$.l1 = ClosedByteChannelException;
  _.$_$.m1 = WriterScope;
  _.$_$.n1 = cancel_0;
  _.$_$.o1 = close_0;
  _.$_$.p1 = counted;
  _.$_$.q1 = invokeOnCompletion;
  _.$_$.r1 = ioDispatcher;
  _.$_$.s1 = readText;
  _.$_$.t1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
