(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var protoOf = kotlin_kotlin.$_$.ac;
  var initMetadataForObject = kotlin_kotlin.$_$.ib;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.z2;
  var initMetadataForClass = kotlin_kotlin.$_$.cb;
  var toString = kotlin_kotlin.$_$.dc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m4;
  var charSequenceLength = kotlin_kotlin.$_$.qa;
  var charSequenceGet = kotlin_kotlin.$_$.pa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var equals = kotlin_kotlin.$_$.va;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var Enum = kotlin_kotlin.$_$.pf;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var initMetadataForInterface = kotlin_kotlin.$_$.gb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.db;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b4;
  var hashCode = kotlin_kotlin.$_$.bb;
  var joinToString = kotlin_kotlin.$_$.f7;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var KtMap = kotlin_kotlin.$_$.p5;
  var numberRangeToNumber = kotlin_kotlin.$_$.xb;
  var ClosedRange = kotlin_kotlin.$_$.hc;
  var isInterface = kotlin_kotlin.$_$.rb;
  var contains = kotlin_kotlin.$_$.lc;
  var convertToInt = kotlin_kotlin.$_$.t9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.x4;
  var toDoubleOrNull = kotlin_kotlin.$_$.oe;
  var toDouble = kotlin_kotlin.$_$.pe;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q4;
  var KtList = kotlin_kotlin.$_$.m5;
  var getKClassFromExpression = kotlin_kotlin.$_$.sc;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var getBooleanHashCode = kotlin_kotlin.$_$.ya;
  var getStringHashCode = kotlin_kotlin.$_$.ab;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.m2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var toLongOrNull = kotlin_kotlin.$_$.te;
  var toULongOrNull = kotlin_kotlin.$_$.ye;
  var ULong = kotlin_kotlin.$_$.hg;
  var Companion_getInstance = kotlin_kotlin.$_$.x2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.m1;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.me;
  var KProperty1 = kotlin_kotlin.$_$.yc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.za;
  var constructCallableReference = kotlin_kotlin.$_$.ta;
  var lazy = kotlin_kotlin.$_$.xg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.la;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var defineProp = kotlin_kotlin.$_$.ua;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.a4;
  var isLetter = kotlin_kotlin.$_$.qd;
  var Char = kotlin_kotlin.$_$.kf;
  var last = kotlin_kotlin.$_$.wd;
  var toString_1 = kotlin_kotlin.$_$.o;
  var charCodeAt = kotlin_kotlin.$_$.oa;
  var isUpperCase = kotlin_kotlin.$_$.sd;
  var fromInt = kotlin_kotlin.$_$.w9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.c1;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.e1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.l1;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.n1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.t;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.v;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.u1;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.w1;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ra;
  var coerceAtLeast = kotlin_kotlin.$_$.ic;
  var coerceAtMost = kotlin_kotlin.$_$.jc;
  var isBlank = kotlin_kotlin.$_$.pd;
  var Collection = kotlin_kotlin.$_$.h5;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var toSet = kotlin_kotlin.$_$.n8;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i3;
  var singleOrNull = kotlin_kotlin.$_$.b8;
  var emptyMap = kotlin_kotlin.$_$.t6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.t3;
  var getValue = kotlin_kotlin.$_$.b7;
  var copyOf = kotlin_kotlin.$_$.n6;
  var arrayCopy = kotlin_kotlin.$_$.w5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.nf;
  var invoke = kotlin_kotlin.$_$.sg;
  var CoroutineImpl = kotlin_kotlin.$_$.l9;
  var DeepRecursiveScope = kotlin_kotlin.$_$.of;
  var Unit = kotlin_kotlin.$_$.kg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.t8;
  var initMetadataForLambda = kotlin_kotlin.$_$.hb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eb;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var getKClass = kotlin_kotlin.$_$.tc;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var substringBefore = kotlin_kotlin.$_$.ie;
  var removeSuffix = kotlin_kotlin.$_$.xd;
  var substringAfter = kotlin_kotlin.$_$.he;
  var contains_0 = kotlin_kotlin.$_$.ed;
  var plus = kotlin_kotlin.$_$.zg;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var convertToByte = kotlin_kotlin.$_$.s9;
  var convertToShort = kotlin_kotlin.$_$.u9;
  var IllegalArgumentException = kotlin_kotlin.$_$.sf;
  var isFinite = kotlin_kotlin.$_$.ug;
  var isFinite_0 = kotlin_kotlin.$_$.tg;
  var toUInt = kotlin_kotlin.$_$.xe;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.d1;
  var toULong = kotlin_kotlin.$_$.ze;
  var toUByte = kotlin_kotlin.$_$.we;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.u;
  var toUShort = kotlin_kotlin.$_$.af;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.v1;
  var objectCreate = kotlin_kotlin.$_$.zb;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.w2;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.v2;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.y2;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var setOf = kotlin_kotlin.$_$.a8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  var equals_0 = kotlin_kotlin.$_$.kd;
  var numberToChar = kotlin_kotlin.$_$.yb;
  var toByte = kotlin_kotlin.$_$.bc;
  var startsWith = kotlin_kotlin.$_$.de;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var single = kotlin_kotlin.$_$.ae;
  var emptySet = kotlin_kotlin.$_$.u6;
  var plus_0 = kotlin_kotlin.$_$.s7;
  var toInt = kotlin_kotlin.$_$.se;
  var toList = kotlin_kotlin.$_$.h8;
  var enumEntries = kotlin_kotlin.$_$.n9;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var toNumber = kotlin_kotlin.$_$.ga;
  var last_0 = kotlin_kotlin.$_$.l7;
  var removeLast = kotlin_kotlin.$_$.x7;
  var lastIndexOf = kotlin_kotlin.$_$.vd;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.j;
  var multiply = kotlin_kotlin.$_$.aa;
  var add = kotlin_kotlin.$_$.r9;
  var subtract = kotlin_kotlin.$_$.fa;
  var numberToLong = kotlin_kotlin.$_$.ca;
  var negate = kotlin_kotlin.$_$.ba;
  var charArray = kotlin_kotlin.$_$.na;
  var indexOf = kotlin_kotlin.$_$.nd;
  var indexOf_0 = kotlin_kotlin.$_$.od;
  var substring = kotlin_kotlin.$_$.ke;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(JsonNamingStrategy$Builtins$SnakeCase$1);
  initMetadataForClass(JsonNamingStrategy$Builtins$KebabCase$1);
  initMetadataForObject(Builtins, 'Builtins');
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
  initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForObject(RedactedKey, 'RedactedKey');
  initMetadataForClass(JsonPath, 'JsonPath');
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.l18_1 = configuration;
    this.m18_1 = serializersModule;
    this.n18_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).lr = function () {
    return this.m18_1;
  };
  protoOf(Json).o18 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.s18();
    }
  };
  protoOf(Json).p18 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.un(), null);
    var result = input.vq(deserializer);
    lexer.g19();
    return result;
  };
  protoOf(Json).q18 = function (string) {
    return this.p18(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.a1a();
    return new JsonImpl(conf, builder.y19_1);
  }
  function JsonBuilder(json) {
    this.h19_1 = json.l18_1.b1a_1;
    this.i19_1 = json.l18_1.g1a_1;
    this.j19_1 = json.l18_1.c1a_1;
    this.k19_1 = json.l18_1.d1a_1;
    this.l19_1 = json.l18_1.f1a_1;
    this.m19_1 = json.l18_1.h1a_1;
    this.n19_1 = json.l18_1.i1a_1;
    this.o19_1 = json.l18_1.k1a_1;
    this.p19_1 = json.l18_1.r1a_1;
    this.q19_1 = json.l18_1.m1a_1;
    this.r19_1 = json.l18_1.n1a_1;
    this.s19_1 = json.l18_1.o1a_1;
    this.t19_1 = json.l18_1.p1a_1;
    this.u19_1 = json.l18_1.q1a_1;
    this.v19_1 = json.l18_1.l1a_1;
    this.w19_1 = json.l18_1.e1a_1;
    this.x19_1 = json.l18_1.j1a_1;
    this.y19_1 = json.lr();
    this.z19_1 = json.l18_1.s1a_1;
  }
  protoOf(JsonBuilder).a1a = function () {
    if (this.x19_1) {
      // Inline function 'kotlin.require' call
      if (!(this.o19_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.p19_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.l19_1) {
      // Inline function 'kotlin.require' call
      if (!(this.m19_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.m19_1 === '    ')) {
      var tmp0 = this.m19_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.m19_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.h19_1, this.j19_1, this.k19_1, this.w19_1, this.l19_1, this.i19_1, this.m19_1, this.n19_1, this.x19_1, this.o19_1, this.v19_1, this.q19_1, this.r19_1, this.s19_1, this.t19_1, this.u19_1, this.p19_1, this.z19_1);
  };
  function validateConfiguration($this) {
    if (equals($this.lr(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.l18_1);
    $this.lr().h17(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    exceptionsWithDebugInfo = exceptionsWithDebugInfo === VOID ? true : exceptionsWithDebugInfo;
    this.b1a_1 = encodeDefaults;
    this.c1a_1 = ignoreUnknownKeys;
    this.d1a_1 = isLenient;
    this.e1a_1 = allowStructuredMapKeys;
    this.f1a_1 = prettyPrint;
    this.g1a_1 = explicitNulls;
    this.h1a_1 = prettyPrintIndent;
    this.i1a_1 = coerceInputValues;
    this.j1a_1 = useArrayPolymorphism;
    this.k1a_1 = classDiscriminator;
    this.l1a_1 = allowSpecialFloatingPointValues;
    this.m1a_1 = useAlternativeNames;
    this.n1a_1 = namingStrategy;
    this.o1a_1 = decodeEnumsCaseInsensitive;
    this.p1a_1 = allowTrailingComma;
    this.q1a_1 = allowComments;
    this.r1a_1 = classDiscriminatorMode;
    this.s1a_1 = exceptionsWithDebugInfo;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.b1a_1 + ', ignoreUnknownKeys=' + this.c1a_1 + ', isLenient=' + this.d1a_1 + ', ' + ('allowStructuredMapKeys=' + this.e1a_1 + ', prettyPrint=' + this.f1a_1 + ', explicitNulls=' + this.g1a_1 + ', ') + ("prettyPrintIndent='" + this.h1a_1 + "', coerceInputValues=" + this.i1a_1 + ', useArrayPolymorphism=' + this.j1a_1 + ', ') + ("classDiscriminator='" + this.k1a_1 + "', allowSpecialFloatingPointValues=" + this.l1a_1 + ', ') + ('useAlternativeNames=' + this.m1a_1 + ', namingStrategy=' + toString_0(this.n1a_1) + ', decodeEnumsCaseInsensitive=' + this.o1a_1 + ', ') + ('allowTrailingComma=' + this.p1a_1 + ', allowComments=' + this.q1a_1 + ', classDiscriminatorMode=' + this.r1a_1.toString() + ', exceptionsWithDebugInfo=' + this.s1a_1 + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.m1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.n1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.s(_Char___init__impl__6a9atx(58));
    this_0.w(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.v1a_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.v1a_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.v1a_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.v1a_1.l1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.v1a_1.r();
  };
  protoOf(JsonObject).w1a = function (key) {
    return this.v1a_1.l2(key);
  };
  protoOf(JsonObject).l2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.w1a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).x1a = function (value) {
    return this.v1a_1.m2(value);
  };
  protoOf(JsonObject).m2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.x1a(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).y1a = function (key) {
    return this.v1a_1.n2(key);
  };
  protoOf(JsonObject).n2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.y1a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.v1a_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).d1 = function () {
    return this.v1a_1.d1();
  };
  protoOf(JsonObject).o2 = function () {
    return this.v1a_1.o2();
  };
  protoOf(JsonObject).p2 = function () {
    return this.v1a_1.p2();
  };
  protoOf(JsonObject).l1 = function () {
    return this.v1a_1.l1();
  };
  function get_jsonObject(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.a1b();
  };
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_intOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNull' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp0_elvis_lhs = tmp;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var result = tmp_1;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      return null;
    return convertToInt(result);
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.e());
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.a1b() + ' is not an Int');
    return convertToInt(result);
  }
  function get_longOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNull' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.e());
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_floatOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloatOrNull' call
    var this_0 = _this__u8e3s4.a1b();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDoubleOrNull(this_0);
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.a1b();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.a1b());
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.a1b());
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.a1b());
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.a1b());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$(_this__u8e3s4.toString() + ' does not represent a Boolean');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.c1b_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.c1b_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.c1b_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.c1b_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.c1b_1.r();
  };
  protoOf(JsonArray).d1b = function (element) {
    return this.c1b_1.h2(element);
  };
  protoOf(JsonArray).h2 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.d1b(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.c1b_1.t();
  };
  protoOf(JsonArray).i1 = function (index) {
    return this.c1b_1.i1(index);
  };
  protoOf(JsonArray).j1 = function (index) {
    return this.c1b_1.j1(index);
  };
  protoOf(JsonArray).i2 = function (fromIndex, toIndex) {
    return this.c1b_1.i2(fromIndex, toIndex);
  };
  protoOf(JsonArray).d1 = function () {
    return this.c1b_1.d1();
  };
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.a1b()).e1b();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.f1b_1 = 'null';
  }
  protoOf(JsonNull).z1a = function () {
    return false;
  };
  protoOf(JsonNull).a1b = function () {
    return this.f1b_1;
  };
  protoOf(JsonNull).g1b = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).oz = function (typeParamsSerializers) {
    return this.g1b();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.h1b_1 = isString;
    this.i1b_1 = coerceToInlineType;
    this.j1b_1 = toString(body);
    if (!(this.i1b_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.i1b_1.ep()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).z1a = function () {
    return this.h1b_1;
  };
  protoOf(JsonLiteral).a1b = function () {
    return this.j1b_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.h1b_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.j1b_1);
      tmp = this_0.toString();
    } else {
      tmp = this.j1b_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.h1b_1 === other.h1b_1))
      return false;
    if (!(this.j1b_1 === other.j1b_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.h1b_1);
    result = imul(31, result) + getStringHashCode(this.j1b_1) | 0;
    return result;
  };
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.a1b();
    }
    return tmp;
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.io('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.io('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.io('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.io('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.io('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().k1b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().l1b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().m1b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().n1b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().o1b_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.p1b_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).un = function () {
    return this.p1b_1;
  };
  protoOf(JsonElementSerializer).q1b = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.os(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.os(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.os(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).vn = function (encoder, value) {
    return this.q1b(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).wn = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.u1a();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.r1b_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).un();
    this.s1b_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).cp = function () {
    return this.s1b_1;
  };
  protoOf(JsonObjectDescriptor).hp = function (index) {
    return this.r1b_1.hp(index);
  };
  protoOf(JsonObjectDescriptor).ip = function (name) {
    return this.r1b_1.ip(name);
  };
  protoOf(JsonObjectDescriptor).jp = function (index) {
    return this.r1b_1.jp(index);
  };
  protoOf(JsonObjectDescriptor).kp = function (index) {
    return this.r1b_1.kp(index);
  };
  protoOf(JsonObjectDescriptor).lp = function (index) {
    return this.r1b_1.lp(index);
  };
  protoOf(JsonObjectDescriptor).dp = function () {
    return this.r1b_1.dp();
  };
  protoOf(JsonObjectDescriptor).vo = function () {
    return this.r1b_1.vo();
  };
  protoOf(JsonObjectDescriptor).ep = function () {
    return this.r1b_1.ep();
  };
  protoOf(JsonObjectDescriptor).fp = function () {
    return this.r1b_1.fp();
  };
  protoOf(JsonObjectDescriptor).gp = function () {
    return this.r1b_1.gp();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.n1b_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).un = function () {
    return this.n1b_1;
  };
  protoOf(JsonObjectSerializer).t1b = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).vn(encoder, value);
  };
  protoOf(JsonObjectSerializer).vn = function (encoder, value) {
    return this.t1b(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).wn = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).wn(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.k1b_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).un = function () {
    return this.k1b_1;
  };
  protoOf(JsonPrimitiveSerializer).u1b = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.os(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.os(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).vn = function (encoder, value) {
    return this.u1b(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).wn = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.u1a();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.t1a().l18_1.s1a_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.v1b_1 = ListSerializer(JsonElementSerializer_getInstance()).un();
    this.w1b_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).cp = function () {
    return this.w1b_1;
  };
  protoOf(JsonArrayDescriptor).hp = function (index) {
    return this.v1b_1.hp(index);
  };
  protoOf(JsonArrayDescriptor).ip = function (name) {
    return this.v1b_1.ip(name);
  };
  protoOf(JsonArrayDescriptor).jp = function (index) {
    return this.v1b_1.jp(index);
  };
  protoOf(JsonArrayDescriptor).kp = function (index) {
    return this.v1b_1.kp(index);
  };
  protoOf(JsonArrayDescriptor).lp = function (index) {
    return this.v1b_1.lp(index);
  };
  protoOf(JsonArrayDescriptor).dp = function () {
    return this.v1b_1.dp();
  };
  protoOf(JsonArrayDescriptor).vo = function () {
    return this.v1b_1.vo();
  };
  protoOf(JsonArrayDescriptor).ep = function () {
    return this.v1b_1.ep();
  };
  protoOf(JsonArrayDescriptor).fp = function () {
    return this.v1b_1.fp();
  };
  protoOf(JsonArrayDescriptor).gp = function () {
    return this.v1b_1.gp();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.o1b_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).un = function () {
    return this.o1b_1;
  };
  protoOf(JsonArraySerializer).x1b = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).vn(encoder, value);
  };
  protoOf(JsonArraySerializer).vn = function (encoder, value) {
    return this.x1b(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).wn = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).wn(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.l1b_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).un = function () {
    return this.l1b_1;
  };
  protoOf(JsonNullSerializer).y1b = function (encoder, value) {
    verify(encoder);
    encoder.rr();
  };
  protoOf(JsonNullSerializer).vn = function (encoder, value) {
    return this.y1b(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).wn = function (decoder) {
    verify_0(decoder);
    if (decoder.hq()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.iq();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.m1b_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).un = function () {
    return this.m1b_1;
  };
  protoOf(JsonLiteralSerializer).z1b = function (encoder, value) {
    verify(encoder);
    if (value.h1b_1) {
      return encoder.as(value.j1b_1);
    }
    if (!(value.i1b_1 == null)) {
      return encoder.cs(value.i1b_1).as(value.j1b_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.j1b_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.wr(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.j1b_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).en_1;
      var tmp_1 = encoder.cs(serializer_0(Companion_getInstance()).un());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.wr(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.j1b_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.yr(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.j1b_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.sr(tmp3_safe_receiver);
    }
    encoder.as(value.j1b_1);
  };
  protoOf(JsonLiteralSerializer).vn = function (encoder, value) {
    return this.z1b(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).wn = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.u1a();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.t1a().l18_1.s1a_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.a1c_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.n1();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return constructCallableReference(function (p0) {
      return _get_original__l7ku1m(p0);
    }, 1, 0, 9);
  }
  function defer$1($deferred) {
    this.a1c_1 = lazy($deferred);
  }
  protoOf(defer$1).cp = function () {
    return _get_original__l7ku1m(this).cp();
  };
  protoOf(defer$1).dp = function () {
    return _get_original__l7ku1m(this).dp();
  };
  protoOf(defer$1).fp = function () {
    return _get_original__l7ku1m(this).fp();
  };
  protoOf(defer$1).hp = function (index) {
    return _get_original__l7ku1m(this).hp(index);
  };
  protoOf(defer$1).ip = function (name) {
    return _get_original__l7ku1m(this).ip(name);
  };
  protoOf(defer$1).jp = function (index) {
    return _get_original__l7ku1m(this).jp(index);
  };
  protoOf(defer$1).kp = function (index) {
    return _get_original__l7ku1m(this).kp(index);
  };
  protoOf(defer$1).lp = function (index) {
    return _get_original__l7ku1m(this).lp(index);
  };
  function JsonEncoder() {
  }
  function JsonDecodingException(fullMessage, shortMessage, offset, path, input, hint) {
    JsonException.call(this, fullMessage);
    captureStack(this, JsonDecodingException);
    this.d1c_1 = shortMessage;
    this.e1c_1 = offset;
    this.f1c_1 = path;
    this.g1c_1 = input;
    this.h1c_1 = hint;
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
    this.b1b_1 = message;
    delete this.message;
  }
  protoOf(JsonException).e = function () {
    return this.b1b_1;
  };
  function JsonEncodingException(shortMessage, classSerialName, hint) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    JsonException.call(this, formatEncodingException(shortMessage, hint));
    captureStack(this, JsonEncodingException);
    this.j1c_1 = shortMessage;
    this.k1c_1 = classSerialName;
    this.l1c_1 = hint;
  }
  function convertCamelCase($this, serialName, delimiter) {
    // Inline function 'kotlin.text.buildString' call
    var capacity = imul(serialName.length, 2);
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0(capacity);
    var bufferedChar = null;
    var previousUpperCharsCount = 0;
    // Inline function 'kotlin.text.forEach' call
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(serialName)) {
      var element = charSequenceGet(serialName, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (isUpperCase(element)) {
        var tmp;
        var tmp_0;
        if (previousUpperCharsCount === 0) {
          // Inline function 'kotlin.text.isNotEmpty' call
          tmp_0 = charSequenceLength(this_0) > 0;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = !(last(this_0) === delimiter);
        } else {
          tmp = false;
        }
        if (tmp) {
          this_0.s(delimiter);
        }
        var tmp0_safe_receiver = bufferedChar;
        var tmp_1 = tmp0_safe_receiver;
        if ((tmp_1 == null ? null : new Char(tmp_1)) == null)
          null;
        else {
          var tmp_2 = tmp0_safe_receiver;
          // Inline function 'kotlin.let' call
          var p0 = (tmp_2 == null ? null : new Char(tmp_2)).v1_1;
          this_0.s(p0);
        }
        previousUpperCharsCount = previousUpperCharsCount + 1 | 0;
        // Inline function 'kotlin.text.lowercaseChar' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$9 = toString_1(element).toLowerCase();
        bufferedChar = charCodeAt(tmp$ret$9, 0);
      } else {
        var tmp_3 = bufferedChar;
        if (!((tmp_3 == null ? null : new Char(tmp_3)) == null)) {
          if (previousUpperCharsCount > 1 && isLetter(element)) {
            this_0.s(delimiter);
          }
          this_0.s(bufferedChar);
          previousUpperCharsCount = 0;
          bufferedChar = null;
        }
        this_0.s(element);
      }
    }
    var tmp_4 = bufferedChar;
    if (!((tmp_4 == null ? null : new Char(tmp_4)) == null)) {
      this_0.s(bufferedChar);
    }
    return this_0.toString();
  }
  function JsonNamingStrategy$Builtins$SnakeCase$1() {
  }
  protoOf(JsonNamingStrategy$Builtins$SnakeCase$1).m1c = function (descriptor, elementIndex, serialName) {
    return convertCamelCase(Builtins_getInstance(), serialName, _Char___init__impl__6a9atx(95));
  };
  protoOf(JsonNamingStrategy$Builtins$SnakeCase$1).toString = function () {
    return 'kotlinx.serialization.json.JsonNamingStrategy.SnakeCase';
  };
  function JsonNamingStrategy$Builtins$KebabCase$1() {
  }
  protoOf(JsonNamingStrategy$Builtins$KebabCase$1).m1c = function (descriptor, elementIndex, serialName) {
    return convertCamelCase(Builtins_getInstance(), serialName, _Char___init__impl__6a9atx(45));
  };
  protoOf(JsonNamingStrategy$Builtins$KebabCase$1).toString = function () {
    return 'kotlinx.serialization.json.JsonNamingStrategy.KebabCase';
  };
  function Builtins() {
    Builtins_instance = this;
    var tmp = this;
    tmp.n1c_1 = new JsonNamingStrategy$Builtins$SnakeCase$1();
    var tmp_0 = this;
    tmp_0.o1c_1 = new JsonNamingStrategy$Builtins$KebabCase$1();
  }
  var Builtins_instance;
  function Builtins_getInstance() {
    if (Builtins_instance == null)
      new Builtins();
    return Builtins_instance;
  }
  function Composer(writer) {
    this.p1c_1 = writer;
    this.q1c_1 = true;
  }
  protoOf(Composer).r1c = function () {
    this.q1c_1 = true;
  };
  protoOf(Composer).s1c = function () {
    return Unit_instance;
  };
  protoOf(Composer).t1c = function () {
    this.q1c_1 = false;
  };
  protoOf(Composer).u1c = function () {
    this.q1c_1 = false;
  };
  protoOf(Composer).v1c = function () {
    return Unit_instance;
  };
  protoOf(Composer).w1c = function (v) {
    return this.p1c_1.x1c(v);
  };
  protoOf(Composer).y1c = function (v) {
    return this.p1c_1.z1c(v);
  };
  protoOf(Composer).a1d = function (v) {
    return this.p1c_1.z1c(v.toString());
  };
  protoOf(Composer).b1d = function (v) {
    return this.p1c_1.z1c(v.toString());
  };
  protoOf(Composer).c1d = function (v) {
    return this.p1c_1.d1d(fromInt(v));
  };
  protoOf(Composer).e1d = function (v) {
    return this.p1c_1.d1d(fromInt(v));
  };
  protoOf(Composer).f1d = function (v) {
    return this.p1c_1.d1d(fromInt(v));
  };
  protoOf(Composer).g1d = function (v) {
    return this.p1c_1.d1d(v);
  };
  protoOf(Composer).h1d = function (v) {
    return this.p1c_1.z1c(v.toString());
  };
  protoOf(Composer).i1d = function (value) {
    return this.p1c_1.j1d(value);
  };
  function Composer_0(sb, json) {
    return json.l18_1.f1a_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.m1d_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).f1d = function (v) {
    if (this.m1d_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.i1d(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.y1c(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).g1d = function (v) {
    if (this.m1d_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.i1d(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.y1c(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).c1d = function (v) {
    if (this.m1d_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.i1d(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.y1c(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).e1d = function (v) {
    if (this.m1d_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.i1d(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.y1c(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.p1d_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).i1d = function (value) {
    if (this.p1d_1) {
      protoOf(Composer).i1d.call(this, value);
    } else {
      protoOf(Composer).y1c.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.s1d_1 = json;
    this.t1d_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).r1c = function () {
    this.q1c_1 = true;
    this.t1d_1 = this.t1d_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).s1c = function () {
    this.t1d_1 = this.t1d_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).t1c = function () {
    this.q1c_1 = false;
    this.y1c('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.t1d_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.y1c(this.s1d_1.l18_1.h1a_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).u1c = function () {
    if (this.q1c_1)
      this.q1c_1 = false;
    else {
      this.t1c();
    }
  };
  protoOf(ComposerWithPrettyPrint).v1c = function () {
    this.w1c(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.v1d_1 = (!descriptor.lp(index) && descriptor.kp(index).vo());
    return $this.v1d_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, p0_0, p1);
    }, 2, 0, 10, 'readIfAbsent', [p0]);
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.u1d_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.v1d_1 = false;
  }
  protoOf(JsonElementMarker).w1d = function (index) {
    this.u1d_1.ex(index);
  };
  protoOf(JsonElementMarker).x1d = function () {
    return this.u1d_1.fx();
  };
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function access$formatDecodingException$tJsonExceptionsKt(offset, shortMessage, path, hint, input) {
    return formatDecodingException(offset, shortMessage, path, hint, input);
  }
  function decodingExceptionOf(shortMessage) {
    return new JsonDecodingException(formatDecodingException(-1, shortMessage, null, null, null), shortMessage, -1, null, null, null);
  }
  function formatDecodingException(offset, shortMessage, path, hint, input) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (offset >= 0) {
      this_0.q('Unexpected JSON token at offset ' + offset + ': ');
    }
    this_0.q(shortMessage);
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(path == null || isBlank(path))) {
      this_0.q(' at path: ');
      this_0.q(path);
    }
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(hint == null || isBlank(hint))) {
      this_0.q('\n' + hint);
    }
    if (!(input == null)) {
      this_0.q('\nJSON input: ');
      this_0.q(input);
    }
    return this_0.toString();
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.y1d('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.c19_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.z1d(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidFloatingPointEncoded(value, key) {
    key = key === VOID ? null : key;
    return new JsonEncodingException(nonFiniteFpMessage(value, key), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.cp() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.dp().toString() + "'"), keyDescriptor.cp(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
    return nonFiniteFpMessage(value, key);
  }
  function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input) {
    // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
    var tmp;
    if (_this__u8e3s4.b19_1.s1a_1) {
      tmp = toString(minify(input, offset));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    return new JsonDecodingException(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint);
  }
  function formatEncodingException(shortMessage, hint) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (hint == null || isBlank(hint)) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    return shortMessage + tmp;
  }
  function nonFiniteFpMessage(value, key) {
    return 'Unexpected special floating-point value ' + toString(value) + (!(key == null) ? ' with key ' + key + '. ' : '. ') + 'By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification.';
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.l18_1.c1a_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.gp();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.ip(name);
    if (!(index === -3))
      return index;
    if (!json.l18_1.m1a_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.cp() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.hp(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.dp(), CLASS_getInstance()) ? json.l18_1.n1a_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.b1e(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function getJsonEncodedNames(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.l18_1.o1a_1 && equals(descriptor.dp(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.b1e(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.fp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.jp(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonNames) {
            destination.c1(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1e_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.hp(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.m1c(_this__u8e3s4, i, _this__u8e3s4.hp(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.r()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      // Inline function 'kotlin.collections.mutableSetOf' call
      var trackingSet = LinkedHashSet_init_$Create$();
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.fp();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.hp(tmp_2);
        var name = $strategy.m1c($this_serializationNamesIndices, tmp_2, baseName);
        if (!trackingSet.c1(name))
          throw new JsonEncodingException("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)), $this_serializationNamesIndices.cp());
        tmp_1[tmp_2] = name;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.dp(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).l2(name)) {
      throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.hp(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.hp(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.q2(name, index);
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function RedactedKey() {
  }
  var RedactedKey_instance;
  function RedactedKey_getInstance() {
    return RedactedKey_instance;
  }
  function resize($this) {
    var newSize = imul($this.g1e_1, 2);
    $this.e1e_1 = copyOf($this.e1e_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.f1e_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.f1e_1 = newIndices;
  }
  function JsonPath(configuration) {
    this.d1e_1 = configuration;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.e1e_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.f1e_1 = tmp_2;
    this.g1e_1 = -1;
  }
  protoOf(JsonPath).h1e = function (sd) {
    this.g1e_1 = this.g1e_1 + 1 | 0;
    var depth = this.g1e_1;
    if (depth === this.e1e_1.length) {
      resize(this);
    }
    this.e1e_1[depth] = sd;
  };
  protoOf(JsonPath).i1e = function (index) {
    this.f1e_1[this.g1e_1] = index;
  };
  protoOf(JsonPath).j1e = function (key) {
    var tmp;
    if (!(this.f1e_1[this.g1e_1] === -2)) {
      this.g1e_1 = this.g1e_1 + 1 | 0;
      tmp = this.g1e_1 === this.e1e_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.e1e_1[this.g1e_1] = this.d1e_1.s1a_1 ? key : RedactedKey_instance;
    this.f1e_1[this.g1e_1] = -2;
  };
  protoOf(JsonPath).k1e = function () {
    if (this.f1e_1[this.g1e_1] === -2) {
      this.e1e_1[this.g1e_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).l1e = function () {
    var depth = this.g1e_1;
    if (this.f1e_1[depth] === -2) {
      this.f1e_1[depth] = -1;
      this.g1e_1 = this.g1e_1 - 1 | 0;
    }
    if (!(this.g1e_1 === -1)) {
      this.g1e_1 = this.g1e_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).m1e = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.g1e_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.e1e_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.dp(), LIST_getInstance())) {
            if (!(this.f1e_1[index] === -1)) {
              this_0.q('[');
              this_0.ic(this.f1e_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.f1e_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.hp(idx));
            }
          }
        } else {
          if (element === RedactedKey_instance) {
            this_0.q('[<debug info disabled>]');
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.q('[');
              this_0.q("'");
              this_0.w(element);
              this_0.q("'");
              this_0.q(']');
            }
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.m1e();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.dp();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.n1e_1)
      return Unit_instance;
    if (!$this.o1e_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function JsonSerializersModuleValidator(configuration) {
    this.n1e_1 = configuration.j1a_1;
    this.o1e_1 = !configuration.r1a_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).q17 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).t17 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.un();
    checkKind(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).u17 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).v17 = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().d1();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.os(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.y1e_1.c1f(6);
    if ($this.y1e_1.d1f() === 4) {
      $this.y1e_1.z1d('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.y1e_1.e1f()) {
      var key = $this.z1e_1 ? $this.y1e_1.g1f() : $this.y1e_1.f1f();
      $this.y1e_1.c1f(5);
      var element = $this.h1f();
      // Inline function 'kotlin.collections.set' call
      result.q2(key, element);
      lastToken = $this.y1e_1.i1f();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.y1e_1.z1d('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.y1e_1.c1f(7);
    } else if (lastToken === 4) {
      if (!$this.a1f_1) {
        invalidTrailingComma($this.y1e_1);
      }
      $this.y1e_1.c1f(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, $receiver, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, $receiver, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function readArray($this) {
    var lastToken = $this.y1e_1.i1f();
    if ($this.y1e_1.d1f() === 4) {
      $this.y1e_1.z1d('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.y1e_1.e1f()) {
      var element = $this.h1f();
      result.c1(element);
      lastToken = $this.y1e_1.i1f();
      if (!(lastToken === 4)) {
        var tmp0 = $this.y1e_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.c19_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.z1d(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.y1e_1.c1f(9);
    } else if (lastToken === 4) {
      if (!$this.a1f_1) {
        invalidTrailingComma($this.y1e_1, 'array');
      }
      $this.y1e_1.c1f(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.z1e_1 || !isString) {
      tmp = $this.y1e_1.g1f();
    } else {
      tmp = $this.y1e_1.f1f();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.f1g_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).j1g = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.k1g($this$DeepRecursiveFunction, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.j1g(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp0_subject = this.f1g_1.y1e_1.d1f();
            if (tmp0_subject === 1) {
              this.i1g_1 = readValue(this.f1g_1, true);
              this.o8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.i1g_1 = readValue(this.f1g_1, false);
                this.o8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.o8_1 = 1;
                  suspendResult = readObject_0(this.f1g_1, this.g1g_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.i1g_1 = readArray(this.f1g_1);
                    this.o8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.f1g_1.y1e_1.z1d("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.i1g_1 = suspendResult;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            return this.i1g_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).k1g = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.f1g_1, completion);
    i.g1g_1 = $this$DeepRecursiveFunction;
    i.h1g_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$DeepRecursiveFunction, it, $completion) {
      return i.j1g($this$DeepRecursiveFunction, it, $completion);
    }, 2);
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1f_1 = _this__u8e3s4;
    this.s1f_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.u1f_1 = this.r1f_1;
            this.v1f_1 = this.u1f_1.y1e_1.c1f(6);
            if (this.u1f_1.y1e_1.d1f() === 4) {
              this.u1f_1.y1e_1.z1d('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.t1f_1 = LinkedHashMap_init_$Create$();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!this.u1f_1.y1e_1.e1f()) {
              this.o8_1 = 4;
              continue $sm;
            }

            this.w1f_1 = this.u1f_1.z1e_1 ? this.u1f_1.y1e_1.g1f() : this.u1f_1.y1e_1.f1f();
            this.u1f_1.y1e_1.c1f(5);
            this.o8_1 = 2;
            suspendResult = this.s1f_1.ml(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.t1f_1;
            var key = this.w1f_1;
            tmp0.q2(key, element);
            this.v1f_1 = this.u1f_1.y1e_1.i1f();
            var tmp0_subject = this.v1f_1;
            if (tmp0_subject === 4) {
              this.o8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.o8_1 = 4;
                continue $sm;
              } else {
                this.u1f_1.y1e_1.z1d('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.o8_1 = 1;
            continue $sm;
          case 4:
            if (this.v1f_1 === 6) {
              this.u1f_1.y1e_1.c1f(7);
            } else if (this.v1f_1 === 4) {
              if (!this.u1f_1.a1f_1) {
                invalidTrailingComma(this.u1f_1.y1e_1);
              }
              this.u1f_1.y1e_1.c1f(7);
            }

            return new JsonObject(this.t1f_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.y1e_1 = lexer;
    this.z1e_1 = configuration.d1a_1;
    this.a1f_1 = configuration.p1a_1;
    this.b1f_1 = 0;
  }
  protoOf(JsonTreeReader).h1f = function () {
    var token = this.y1e_1.d1f();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.b1f_1 = this.b1f_1 + 1 | 0;
      if (this.b1f_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.b1f_1 = this.b1f_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.y1e_1.z1d('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.gp().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.l1g_1;
    }
    return json.l18_1.k1a_1;
  }
  function throwJsonElementPolymorphicException(serialName, element) {
    var tmp0_shortMessage = 'Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).o() + '.';
    throw new JsonEncodingException(tmp0_shortMessage, serialName, 'Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
  }
  function access$checkEncodingConflicts$tPolymorphicKt($receiver, serializer, actualSerializer, classDiscriminator) {
    return checkEncodingConflicts($receiver, serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function checkEncodingConflicts(_this__u8e3s4, serializer, actualSerializer, classDiscriminator) {
    if (getJsonEncodedNames(actualSerializer.un(), _this__u8e3s4).h2(classDiscriminator)) {
      var baseName = serializer.un().cp();
      var actualName = actualSerializer.un().cp();
      var text = _this__u8e3s4.l18_1.r1a_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
      var tmp0_shortMessage = "Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'.");
      var tmp1_hint = 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.';
      throw new JsonEncodingException(tmp0_shortMessage, actualName, tmp1_hint);
    }
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.a1e_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).m1g = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.a1e_1;
    var value_0 = this_0.n2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.q2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.q2(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).b1e = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.n1g(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.m1g(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).n1g = function (descriptor, key) {
    var tmp0_safe_receiver = this.a1e_1.n2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.n2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.o1g_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.o1g_1 === unknownKey) {
      $receiver.o1g_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.nr(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.v18_1.d1f() === 4) {
      $this.v18_1.z1d('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.x18_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.x18_1 === -1)) {
        hasComma = $this.v18_1.q1g();
      }
    } else {
      $this.v18_1.p1g(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.v18_1.e1f()) {
      if (decodingKey) {
        if ($this.x18_1 === -1) {
          var tmp0 = $this.v18_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.c19_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.z1d(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.v18_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.c19_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.z1d(tmp$ret$3, position_0);
          }
        }
      }
      $this.x18_1 = $this.x18_1 + 1 | 0;
      tmp = $this.x18_1;
    } else {
      if (hasComma && !$this.t18_1.l18_1.p1a_1) {
        invalidTrailingComma($this.v18_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.t18_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.lp(index);
      var elementDescriptor = descriptor.kp(index);
      var tmp;
      if (isOptional && !elementDescriptor.vo()) {
        tmp = $this.v18_1.r1g(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.dp(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.vo()) {
          tmp_0 = $this.v18_1.r1g(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.v18_1.s1g($this.z18_1.d1a_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.l18_1.g1a_1 && elementDescriptor.vo();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.v18_1.f1f();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.v18_1.q1g();
    while ($this.v18_1.e1f()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.v18_1.p1g(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.t18_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.z18_1.i1a_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.v18_1.q1g();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.a19_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.w1d(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.t18_1.l18_1.p1a_1) {
      invalidTrailingComma($this.v18_1);
    }
    var tmp1_safe_receiver = $this.a19_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x1d();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.t18_1) || trySkip($this, $this.y18_1, key)) {
      $this.v18_1.u1g($this.z18_1.d1a_1);
    } else {
      $this.v18_1.d19_1.l1e();
      $this.v18_1.t1g(key);
    }
    return $this.v18_1.q1g();
  }
  function decodeListIndex($this) {
    var hasComma = $this.v18_1.q1g();
    var tmp;
    if ($this.v18_1.e1f()) {
      if (!($this.x18_1 === -1) && !hasComma) {
        $this.v18_1.z1d('Expected end of the array or comma');
      }
      $this.x18_1 = $this.x18_1 + 1 | 0;
      tmp = $this.x18_1;
    } else {
      if (hasComma && !$this.t18_1.l18_1.p1a_1) {
        invalidTrailingComma($this.v18_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.z18_1.d1a_1) {
      tmp = $this.v18_1.w1g();
    } else {
      tmp = $this.v18_1.v1g();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.t18_1 = json;
    this.u18_1 = mode;
    this.v18_1 = lexer;
    this.w18_1 = this.t18_1.lr();
    this.x18_1 = -1;
    this.y18_1 = discriminatorHolder;
    this.z18_1 = this.t18_1.l18_1;
    this.a19_1 = this.z18_1.g1a_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).t1a = function () {
    return this.t18_1;
  };
  protoOf(StreamingJsonDecoder).lr = function () {
    return this.w18_1;
  };
  protoOf(StreamingJsonDecoder).u1a = function () {
    return (new JsonTreeReader(this.t18_1.l18_1, this.v18_1)).h1f();
  };
  protoOf(StreamingJsonDecoder).vq = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.t18_1.l18_1.j1a_1;
      }
      if (tmp) {
        return deserializer.wn(this);
      }
      var discriminator = classDiscriminator(deserializer.un(), this.t18_1);
      var tmp0_elvis_lhs = this.v18_1.x1g(discriminator, this.z18_1.d1a_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.t1a().l18_1.j1a_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.wn(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.un(), this.t1a());
          var tmp2_0 = this.u1a();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.un().cp();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2_0).o() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.v18_1.d19_1.m1e();
            var tmp_2;
            if (this.t1a().l18_1.s1a_1) {
              var tmp$ret$6 = toString(tmp2_0);
              tmp_2 = toString(minify(tmp$ret$6));
            } else {
              tmp_2 = null;
            }
            var inputValue = tmp_2;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.y1a(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_3;
          try {
            tmp_3 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_4;
            if ($p instanceof SerializationException) {
              var it = $p;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var shortMessage = ensureNotNull(it.message);
              var tmp_5;
              if (this.t1a().l18_1.s1a_1) {
                var tmp$ret$10 = jsonTree.toString();
                tmp_5 = toString(minify(tmp$ret$10));
              } else {
                tmp_5 = null;
              }
              var inputValue_0 = tmp_5;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_3;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.t1a(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p_0) {
        var tmp_8;
        if ($p_0 instanceof SerializationException) {
          var it_0 = $p_0;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.v18_1.z1d(message, VOID, hint);
        } else {
          throw $p_0;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.y18_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.wn(this);
    } catch ($p_1) {
      if ($p_1 instanceof MissingFieldException) {
        var e = $p_1;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.v18_1.d19_1.m1e());
      } else {
        throw $p_1;
      }
    }
  };
  protoOf(StreamingJsonDecoder).wq = function (descriptor) {
    var newMode = switchMode(this.t18_1, descriptor);
    this.v18_1.d19_1.h1e(descriptor);
    this.v18_1.p1g(newMode.a1h_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.t18_1, newMode, this.v18_1, descriptor, this.y18_1);
        break;
      default:
        var tmp_0;
        if (this.u18_1.equals(newMode) && this.t18_1.l18_1.g1a_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.t18_1, newMode, this.v18_1, descriptor, this.y18_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).xq = function (descriptor) {
    if (descriptor.fp() === 0 && ignoreUnknownKeys(descriptor, this.t18_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.v18_1.q1g() && !this.t18_1.l18_1.p1a_1) {
      invalidTrailingComma(this.v18_1, '');
    }
    this.v18_1.p1g(this.u18_1.b1h_1);
    this.v18_1.d19_1.l1e();
  };
  protoOf(StreamingJsonDecoder).hq = function () {
    var tmp;
    var tmp0_safe_receiver = this.a19_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1d_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.v18_1.c1h();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).iq = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).ir = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.u18_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.v18_1.d19_1.k1e();
    }
    var value = protoOf(AbstractDecoder).ir.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.v18_1.d19_1.j1e(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).nr = function (descriptor) {
    var index;
    switch (this.u18_1.a1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.u18_1.equals(WriteMode_MAP_getInstance())) {
      this.v18_1.d19_1.i1e(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).jq = function () {
    return this.v18_1.d1h();
  };
  protoOf(StreamingJsonDecoder).kq = function () {
    var value = this.v18_1.e1h();
    if (!(value === fromInt(convertToByte(value)))) {
      this.v18_1.z1d("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).lq = function () {
    var value = this.v18_1.e1h();
    if (!(value === fromInt(convertToShort(value)))) {
      this.v18_1.z1d("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).mq = function () {
    var value = this.v18_1.e1h();
    if (!(value === fromInt(convertToInt(value)))) {
      this.v18_1.z1d("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).nq = function () {
    return this.v18_1.e1h();
  };
  protoOf(StreamingJsonDecoder).oq = function () {
    var tmp0 = this.v18_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g1f();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.z1d("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.t18_1.l18_1.l1a_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.v18_1, result);
  };
  protoOf(StreamingJsonDecoder).pq = function () {
    var tmp0 = this.v18_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g1f();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.z1d("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.t18_1.l18_1.l1a_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.v18_1, result);
  };
  protoOf(StreamingJsonDecoder).qq = function () {
    var string = this.v18_1.g1f();
    if (!(string.length === 1)) {
      this.v18_1.z1d("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).rq = function () {
    var tmp;
    if (this.z18_1.d1a_1) {
      tmp = this.v18_1.w1g();
    } else {
      tmp = this.v18_1.f1f();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).tq = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.v18_1, this.t18_1) : protoOf(AbstractDecoder).tq.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).sq = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.t18_1, this.rq(), ' at path ' + this.v18_1.d19_1.m1e());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.f1h_1 = lexer;
    this.g1h_1 = json.lr();
  }
  protoOf(JsonDecoderForUnsignedTypes).lr = function () {
    return this.g1h_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).nr = function (descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).mq = function () {
    var tmp0 = this.f1h_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g1f();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.z1d("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).nq = function () {
    var tmp0 = this.f1h_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g1f();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.z1d("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).kq = function () {
    var tmp0 = this.f1h_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g1f();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.z1d("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).lq = function () {
    var tmp0 = this.f1h_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.g1f();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.z1d("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.p1e_1.t1c();
    $this.as(discriminator);
    $this.p1e_1.w1c(_Char___init__impl__6a9atx(58));
    $this.p1e_1.v1c();
    $this.as(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.p1e_1 = composer;
    this.q1e_1 = json;
    this.r1e_1 = mode;
    this.s1e_1 = modeReuseCache;
    this.t1e_1 = this.q1e_1.lr();
    this.u1e_1 = this.q1e_1.l18_1;
    this.v1e_1 = false;
    this.w1e_1 = null;
    this.x1e_1 = null;
    var i = this.r1e_1.a1_1;
    if (!(this.s1e_1 == null)) {
      if (!(this.s1e_1[i] === null) || !(this.s1e_1[i] === this)) {
        this.s1e_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).t1a = function () {
    return this.q1e_1;
  };
  protoOf(StreamingJsonEncoder).lr = function () {
    return this.t1e_1;
  };
  protoOf(StreamingJsonEncoder).b1c = function (element) {
    var tmp;
    if (!(this.w1e_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.x1e_1, element);
    }
    this.os(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).ts = function (descriptor, index) {
    return this.u1e_1.b1a_1;
  };
  protoOf(StreamingJsonEncoder).os = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.t1a().l18_1.j1a_1) {
        serializer.vn(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.t1a().l18_1.r1a_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.t1a().l18_1.r1a_1.a1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.un().dp();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.un(), this.t1a()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.un()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        access$checkEncodingConflicts$tPolymorphicKt(this.t1a(), serializer, actualSerializer, baseClassDiscriminator);
        checkKind_0(actualSerializer.un().dp());
        var serialName = actualSerializer.un().cp();
        this.w1e_1 = baseClassDiscriminator;
        this.x1e_1 = serialName;
      }
      actualSerializer.vn(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).wq = function (descriptor) {
    var newMode = switchMode(this.q1e_1, descriptor);
    if (!(newMode.a1h_1 === _Char___init__impl__6a9atx(0))) {
      this.p1e_1.w1c(newMode.a1h_1);
      this.p1e_1.r1c();
    }
    var discriminator = this.w1e_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.x1e_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.cp() : tmp0_elvis_lhs);
      this.w1e_1 = null;
      this.x1e_1 = null;
    }
    if (this.r1e_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.s1e_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.a1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.p1e_1, this.q1e_1, newMode, this.s1e_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).xq = function (descriptor) {
    if (!(this.r1e_1.b1h_1 === _Char___init__impl__6a9atx(0))) {
      this.p1e_1.s1c();
      this.p1e_1.u1c();
      this.p1e_1.w1c(this.r1e_1.b1h_1);
    }
  };
  protoOf(StreamingJsonEncoder).pr = function (descriptor, index) {
    switch (this.r1e_1.a1_1) {
      case 1:
        if (!this.p1e_1.q1c_1) {
          this.p1e_1.w1c(_Char___init__impl__6a9atx(44));
        }

        this.p1e_1.t1c();
        break;
      case 2:
        if (!this.p1e_1.q1c_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.p1e_1.w1c(_Char___init__impl__6a9atx(44));
            this.p1e_1.t1c();
            tmp_0 = true;
          } else {
            this.p1e_1.w1c(_Char___init__impl__6a9atx(58));
            this.p1e_1.v1c();
            tmp_0 = false;
          }
          tmp.v1e_1 = tmp_0;
        } else {
          this.v1e_1 = true;
          this.p1e_1.t1c();
        }

        break;
      case 3:
        if (index === 0)
          this.v1e_1 = true;
        if (index === 1) {
          this.p1e_1.w1c(_Char___init__impl__6a9atx(44));
          this.p1e_1.v1c();
          this.v1e_1 = false;
        }

        break;
      default:
        if (!this.p1e_1.q1c_1) {
          this.p1e_1.w1c(_Char___init__impl__6a9atx(44));
        }

        this.p1e_1.t1c();
        this.as(getJsonElementName(descriptor, this.q1e_1, index));
        this.p1e_1.w1c(_Char___init__impl__6a9atx(58));
        this.p1e_1.v1c();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).ps = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.u1e_1.g1a_1) {
      protoOf(AbstractEncoder).ps.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).cs = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.p1e_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.p1e_1;
      } else {
        var tmp0 = this.p1e_1.p1c_1;
        var p1 = this.v1e_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$0, this.q1e_1, this.r1e_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.p1e_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.p1e_1;
      } else {
        var tmp0_0 = this.p1e_1.p1c_1;
        var p1_0 = this.v1e_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$2, this.q1e_1, this.r1e_1, null);
    } else if (!(this.w1e_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.x1e_1 = descriptor.cp();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).cs.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).rr = function () {
    this.p1e_1.y1c('null');
  };
  protoOf(StreamingJsonEncoder).sr = function (value) {
    if (this.v1e_1) {
      this.as(value.toString());
    } else {
      this.p1e_1.h1d(value);
    }
  };
  protoOf(StreamingJsonEncoder).tr = function (value) {
    if (this.v1e_1) {
      this.as(value.toString());
    } else {
      this.p1e_1.c1d(value);
    }
  };
  protoOf(StreamingJsonEncoder).ur = function (value) {
    if (this.v1e_1) {
      this.as(value.toString());
    } else {
      this.p1e_1.e1d(value);
    }
  };
  protoOf(StreamingJsonEncoder).vr = function (value) {
    if (this.v1e_1) {
      this.as(value.toString());
    } else {
      this.p1e_1.f1d(value);
    }
  };
  protoOf(StreamingJsonEncoder).wr = function (value) {
    if (this.v1e_1) {
      this.as(value.toString());
    } else {
      this.p1e_1.g1d(value);
    }
  };
  protoOf(StreamingJsonEncoder).xr = function (value) {
    if (this.v1e_1) {
      this.as(value.toString());
    } else {
      this.p1e_1.a1d(value);
    }
    if (!this.u1e_1.l1a_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).yr = function (value) {
    if (this.v1e_1) {
      this.as(value.toString());
    } else {
      this.p1e_1.b1d(value);
    }
    if (!this.u1e_1.l1a_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).zr = function (value) {
    this.as(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).as = function (value) {
    return this.p1e_1.i1d(value);
  };
  protoOf(StreamingJsonEncoder).bs = function (enumDescriptor, index) {
    this.as(enumDescriptor.hp(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.ep() && get_unsignedNumberDescriptors().h2(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.ep() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).un(), serializer_0(Companion_getInstance()).un(), serializer_2(Companion_getInstance_1()).un(), serializer_3(Companion_getInstance_2()).un()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.fc(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.fc(value, lastPos, value.length);
    else
      _this__u8e3s4.q(value);
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$13);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$14);
      ESCAPE_MARKERS = this_7;
    }
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.un())).vq(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var path = $this.n1h(tag);
    var tmp;
    if ($this.t1a().l18_1.s1a_1) {
      var tmp$ret$3 = toString($this.o1h());
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.j1h_1 = json;
    this.k1h_1 = value;
    this.l1h_1 = polymorphicDiscriminator;
    this.m1h_1 = this.t1a().l18_1;
  }
  protoOf(AbstractJsonTreeDecoder).t1a = function () {
    return this.j1h_1;
  };
  protoOf(AbstractJsonTreeDecoder).n1 = function () {
    return this.k1h_1;
  };
  protoOf(AbstractJsonTreeDecoder).lr = function () {
    return this.t1a().lr();
  };
  protoOf(AbstractJsonTreeDecoder).o1h = function () {
    var tmp0_safe_receiver = this.g15();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.p1h(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.n1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).n1h = function (currentTag) {
    return this.i15() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).u1a = function () {
    return this.o1h();
  };
  protoOf(AbstractJsonTreeDecoder).vq = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.t1a().l18_1.j1a_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.wn(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.un(), this.t1a());
      var tmp2 = this.u1a();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.un().cp();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i15();
        var tmp_0;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var jsonTree = tmp2;
      var tmp0_safe_receiver = jsonTree.y1a(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var shortMessage = ensureNotNull(it.message);
          var tmp_3;
          if (this.t1a().l18_1.s1a_1) {
            var tmp$ret$10 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$10));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_1;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.t1a(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).h15 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).wq = function (descriptor) {
    var currentObject = this.o1h();
    var tmp0_subject = descriptor.dp();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.t1a();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.cp();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i15();
        var tmp_2;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.t1a();
        var keyDescriptor = carrierDescriptor(descriptor.kp(0), this_0.lr());
        var keyKind = keyDescriptor.dp();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.t1a();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.cp();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.i15();
            var tmp_6;
            if (this.t1a().l18_1.s1a_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject);
        } else {
          if (this_0.l18_1.e1a_1) {
            var tmp_7 = this.t1a();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.cp();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.i15();
              var tmp_8;
              if (this.t1a().l18_1.s1a_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.t1a();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.cp();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.i15();
          var tmp_10;
          if (this.t1a().l18_1.s1a_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, this.l1h_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).xq = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).hq = function () {
    var tmp = this.o1h();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).q1h = function (tag, enumDescriptor) {
    var tmp = this.t1a();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.p1h(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.cp();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.n1h(tag);
      var tmp_0;
      if (this.t1a().l18_1.s1a_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.a1b());
  };
  protoOf(AbstractJsonTreeDecoder).u15 = function (tag, enumDescriptor) {
    return this.q1h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).r1h = function (tag) {
    return !(this.p1h(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).k15 = function (tag) {
    return this.r1h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s1h = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.p1h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.n1h(tag);
        var tmp;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).l15 = function (tag) {
    return this.s1h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).t1h = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.p1h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.n1h(tag);
        var tmp;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToByte(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).m15 = function (tag) {
    return this.t1h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u1h = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.p1h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.n1h(tag);
        var tmp;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToShort(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).n15 = function (tag) {
    return this.u1h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v1h = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.p1h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.n1h(tag);
        var tmp;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToInt(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).o15 = function (tag) {
    return this.v1h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w1h = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.p1h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.n1h(tag);
        var tmp;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).p15 = function (tag) {
    return this.w1h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x1h = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.p1h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.n1h(tag);
        var tmp;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.t1a().l18_1.l1a_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.t1a().l18_1.s1a_1) {
      var tmp$ret$13 = toString(this.o1h());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).q15 = function (tag) {
    return this.x1h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y1h = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.p1h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.n1h(tag);
        var tmp;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.t1a().l18_1.l1a_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.t1a().l18_1.s1a_1) {
      var tmp$ret$13 = toString(this.o1h());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).r15 = function (tag) {
    return this.y1h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z1h = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.p1h(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.n1h(tag);
        var tmp;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.a1b()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.v1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).s15 = function (tag) {
    return this.z1h((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).a1i = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.p1h(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.n1h(tag);
      var tmp;
      if (this.t1a().l18_1.s1a_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.n1h(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.t1a().l18_1.s1a_1) {
        var tmp$ret$10 = toString(this.o1h());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.h1b_1 && !this.t1a().l18_1.d1a_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.n1h(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.t1a().l18_1.s1a_1) {
        var tmp$ret$14 = toString(this.o1h());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.j1b_1;
  };
  protoOf(AbstractJsonTreeDecoder).t15 = function (tag) {
    return this.a1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b1i = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.t1a();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.p1h(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.cp();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.n1h(tag);
        var tmp_1;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.a1b());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.t1a());
    } else {
      tmp = protoOf(NamedValueDecoder).v15.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).v15 = function (tag, inlineDescriptor) {
    return this.b1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).tq = function (descriptor) {
    return !(this.g15() == null) ? protoOf(NamedValueDecoder).tq.call(this, descriptor) : (new JsonPrimitiveDecoder(this.t1a(), this.n1(), this.l1h_1)).tq(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.l1i_1 = (!$this.t1a().l18_1.g1a_1 && !descriptor.lp(index) && descriptor.kp(index).vo());
    return $this.l1i_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.i1i_1 = value;
    this.j1i_1 = polyDescriptor;
    this.k1i_1 = 0;
    this.l1i_1 = false;
  }
  protoOf(JsonTreeDecoder).n1 = function () {
    return this.i1i_1;
  };
  protoOf(JsonTreeDecoder).nr = function (descriptor) {
    $l$loop: while (this.k1i_1 < descriptor.fp()) {
      var _unary__edvuaz = this.k1i_1;
      this.k1i_1 = _unary__edvuaz + 1 | 0;
      var name = this.b15(descriptor, _unary__edvuaz);
      var index = this.k1i_1 - 1 | 0;
      this.l1i_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.n1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l2(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.m1h_1.i1a_1)
          return index;
        var tmp0 = this.t1a();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.lp(index);
          var elementDescriptor = descriptor.kp(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.vo()) {
            var tmp_1 = this.m1i(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.dp(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.vo()) {
              var tmp_3 = this.m1i(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.m1i(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$2 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.l18_1.g1a_1 && elementDescriptor.vo();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$2 = true;
              break $l$block_2;
            }
          }
          tmp$ret$2 = false;
        }
        if (tmp$ret$2)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).hq = function () {
    return !this.l1i_1 && protoOf(AbstractJsonTreeDecoder).hq.call(this);
  };
  protoOf(JsonTreeDecoder).c15 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.t1a());
    var baseName = descriptor.hp(index);
    if (strategy == null) {
      if (!this.m1h_1.m1a_1)
        return baseName;
      if (this.n1().o2().h2(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.t1a(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.n1().o2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (deserializationNamesMap_0.n2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.m1c(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).p1h = function (tag) {
    return getValue(this.n1(), tag);
  };
  protoOf(JsonTreeDecoder).m1i = function (tag) {
    return this.n1().y1a(tag);
  };
  protoOf(JsonTreeDecoder).wq = function (descriptor) {
    if (descriptor === this.j1i_1) {
      var tmp = this.t1a();
      var tmp2 = this.o1h();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.j1i_1.cp();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i15();
        var tmp_0;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, this.l1h_1, this.j1i_1);
    }
    return protoOf(AbstractJsonTreeDecoder).wq.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).xq = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.t1a())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.dp();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.t1a());
    var tmp_1;
    if (strategy == null && !this.m1h_1.m1a_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.t1a(), descriptor).o2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.t1a()).n1g(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.n1().o2().t();
    while (_iterator__ex2g4s.u()) {
      var key = _iterator__ex2g4s.v();
      if (!names.h2(key) && !(key === this.l1h_1)) {
        var tmp2 = "Encountered an unknown key '" + key + "'";
        var tmp4 = this.i15();
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
        var tmp_3;
        if (this.t1a().l18_1.s1a_1) {
          var tmp$ret$4 = this.n1().toString();
          tmp_3 = toString(minify(tmp$ret$4));
        } else {
          tmp_3 = null;
        }
        var inputValue = tmp_3;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.t1i_1 = value;
    this.u1i_1 = this.t1i_1.d1();
    this.v1i_1 = -1;
  }
  protoOf(JsonTreeListDecoder).n1 = function () {
    return this.t1i_1;
  };
  protoOf(JsonTreeListDecoder).c15 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).p1h = function (tag) {
    return this.t1i_1.i1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).nr = function (descriptor) {
    while (this.v1i_1 < (this.u1i_1 - 1 | 0)) {
      this.v1i_1 = this.v1i_1 + 1 | 0;
      return this.v1i_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.c1j_1 = value;
    this.w15('primitive');
  }
  protoOf(JsonPrimitiveDecoder).n1 = function () {
    return this.c1j_1;
  };
  protoOf(JsonPrimitiveDecoder).nr = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).p1h = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.c1j_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.n1j_1 = value;
    this.o1j_1 = toList(this.n1j_1.o2());
    this.p1j_1 = imul(this.o1j_1.d1(), 2);
    this.q1j_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).n1 = function () {
    return this.n1j_1;
  };
  protoOf(JsonTreeMapDecoder).c15 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.o1j_1.i1(i);
  };
  protoOf(JsonTreeMapDecoder).nr = function (descriptor) {
    while (this.q1j_1 < (this.p1j_1 - 1 | 0)) {
      this.q1j_1 = this.q1j_1 + 1 | 0;
      return this.q1j_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).p1h = function (tag) {
    return (this.q1j_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.n1j_1, tag);
  };
  protoOf(JsonTreeMapDecoder).xq = function (descriptor) {
  };
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.a1h_1 = begin;
    this.b1h_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.dp();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.kp(0), _this__u8e3s4.lr());
          var keyKind = keyDescriptor.dp();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.l18_1.e1a_1) {
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.dp(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.ep()) {
      tmp = carrierDescriptor(_this__u8e3s4.kp(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.r1j(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.r1j(lastPosition, currentPosition);
    var result = $this.f19_1.toString();
    $this.f19_1.lc(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.e19_1);
    $this.e19_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.s1j(), $this.c19_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.t1j(currentPosition);
    if (currentPosition === -1) {
      $this.z1d('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.s1j();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.s1j(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.z1d("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.f19_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.c19_1 = startPos;
      $this.u1j();
      if (($this.c19_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.z1d('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.c19_1);
    }
    $this.f19_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.z1d("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.t1j(start);
    if (current >= charSequenceLength($this.s1j()) || current === -1) {
      $this.z1d('EOF');
    }
    var tmp = $this.s1j();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.z1d("Expected valid boolean literal prefix, but had '" + $this.g1f() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.s1j()) - current | 0) < literalSuffix.length) {
      $this.z1d('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.s1j(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.z1d("Expected valid boolean literal prefix, but had '" + $this.g1f() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.c19_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer(configuration) {
    this.b19_1 = configuration;
    this.c19_1 = 0;
    this.d19_1 = new JsonPath(this.b19_1);
    this.e19_1 = null;
    this.f19_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).u1j = function () {
  };
  protoOf(AbstractJsonLexer).q1g = function () {
    var current = this.v1j();
    var source = this.s1j();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.c19_1 = this.c19_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).w1j = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).g19 = function () {
    var nextToken = this.i1f();
    if (!(nextToken === 10)) {
      this.z1d('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.s1j(), this.c19_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).c1f = function (expected) {
    var token = this.i1f();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.c19_1 > 0 ? this.c19_1 - 1 | 0 : this.c19_1;
      var s = this.c19_1 === charSequenceLength(this.s1j()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.s1j(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.z1d(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).x1j = function (expected) {
    if (this.c19_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.c19_1;
        try {
          this.c19_1 = this.c19_1 - 1 | 0;
          tmp$ret$0 = this.g1f();
          break $l$block;
        }finally {
          this.c19_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.y1d("Expected string literal but 'null' literal was found", this.c19_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.c19_1 > 0 ? this.c19_1 - 1 | 0 : this.c19_1;
    var s = this.c19_1 === charSequenceLength(this.s1j()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.s1j(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.z1d(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).d1f = function () {
    var source = this.s1j();
    var cpos = this.c19_1;
    $l$loop_0: while (true) {
      cpos = this.t1j(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.c19_1 = cpos;
      return charToTokenClass(ch);
    }
    this.c19_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).r1g = function (doConsume) {
    var current = this.v1j();
    current = this.t1j(current);
    var len = charSequenceLength(this.s1j()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.s1j(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.s1j(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.c19_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).c1h = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.r1g(doConsume) : $super.r1g.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).s1g = function (isLenient) {
    var token = this.d1f();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.g1f();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.f1f();
    }
    var string = tmp;
    this.e19_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).y1j = function () {
    this.e19_1 = null;
  };
  protoOf(AbstractJsonLexer).z1j = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.s1j();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).f1f = function () {
    if (!(this.e19_1 == null)) {
      return takePeeked(this);
    }
    return this.v1g();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.t1j(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.z1d('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.r1j(lastPosition, currentPosition);
          currentPosition = this.t1j(currentPosition);
          if (currentPosition === -1) {
            this.z1d('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.z1j(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.c19_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).w1g = function () {
    var result = this.g1f();
    if (result === 'null' && wasUnquotedString(this)) {
      this.z1d("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).g1f = function () {
    if (!(this.e19_1 == null)) {
      return takePeeked(this);
    }
    var current = this.v1j();
    if (current >= charSequenceLength(this.s1j()) || current === -1) {
      this.z1d('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.s1j(), current));
    if (token === 1) {
      return this.f1f();
    }
    if (!(token === 0)) {
      this.z1d('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.s1j(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.s1j(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.s1j())) {
        usedAppend = true;
        this.r1j(this.c19_1, current);
        var eof = this.t1j(current);
        if (eof === -1) {
          this.c19_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.z1j(this.c19_1, current);
    } else {
      tmp = decodedString(this, this.c19_1, current);
    }
    var result = tmp;
    this.c19_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).r1j = function (fromIndex, toIndex) {
    this.f19_1.fc(this.s1j(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).u1g = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.d1f();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.g1f();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.d1f();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.g1f();
        else
          this.v1g();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.c1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last_0(tokenStack) === 8)) {
          this.z1d('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last_0(tokenStack) === 6)) {
          this.z1d('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.z1d('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.i1f();
      if (tokenStack.d1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.s1j()) + "', currentPosition=" + this.c19_1 + ')';
  };
  protoOf(AbstractJsonLexer).t1g = function (key) {
    var processed = this.z1j(0, this.c19_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.y1d("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).y1d = function (message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.d19_1.m1e(), hint, this.s1j());
  };
  protoOf(AbstractJsonLexer).z1d = function (message, position, hint, $super) {
    position = position === VOID ? this.c19_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.y1d(message, position, hint) : $super.y1d.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).e1h = function () {
    var current = this.v1j();
    current = this.t1j(current);
    if (current >= charSequenceLength(this.s1j()) || current === -1) {
      this.z1d('EOF');
    }
    var tmp;
    if (charSequenceGet(this.s1j(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.s1j())) {
        this.z1d('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = 0n;
    var exponentAccumulator = 0n;
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.s1j()))) {
      var ch = charSequenceGet(this.s1j(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.z1d("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.z1d("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.z1d("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.z1d("Unexpected symbol '-' in numeric literal", current);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.z1d("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (accumulator > 0n) {
        this.z1d('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.z1d('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.z1d('EOF');
      }
      if (!(charSequenceGet(this.s1j(), current) === _Char___init__impl__6a9atx(34))) {
        this.z1d('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.c19_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(9223372036854775807n) || doubleAccumulator < toNumber(-9223372036854775808n)) {
        this.z1d('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.z1d("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!(accumulator === -9223372036854775808n)) {
      tmp_0 = negate(accumulator);
    } else {
      this.z1d('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).e1b = function () {
    var result = this.e1h();
    var next = this.i1f();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.c19_1 > 0 ? this.c19_1 - 1 | 0 : this.c19_1;
      var s = this.c19_1 === charSequenceLength(this.s1j()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.s1j(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.z1d(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).d1h = function () {
    var current = this.v1j();
    if (current === charSequenceLength(this.s1j())) {
      this.z1d('EOF');
    }
    var tmp;
    if (charSequenceGet(this.s1j(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.c19_1 === charSequenceLength(this.s1j())) {
        this.z1d('EOF');
      }
      if (!(charSequenceGet(this.s1j(), this.c19_1) === _Char___init__impl__6a9atx(34))) {
        this.z1d('Expected closing quotation mark');
      }
      this.c19_1 = this.c19_1 + 1 | 0;
    }
    return result;
  };
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().b1k_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().a1k_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.a1k_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.b1k_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.a1k_1 = charArray(117);
    this.b1k_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source, configuration) {
    StringJsonLexer.call(this, source, configuration);
  }
  protoOf(StringJsonLexerWithComments).i1f = function () {
    var source = this.s1j();
    var cpos = this.v1j();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.c19_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).e1f = function () {
    var current = this.v1j();
    if (current >= this.s1j().length || current === -1)
      return false;
    return this.w1j(charCodeAt(this.s1j(), current));
  };
  protoOf(StringJsonLexerWithComments).p1g = function (expected) {
    var source = this.s1j();
    var current = this.v1j();
    if (current >= source.length || current === -1) {
      this.c19_1 = -1;
      this.x1j(expected);
    }
    var c = charCodeAt(source, current);
    this.c19_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.x1j(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).d1f = function () {
    var source = this.s1j();
    var cpos = this.v1j();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.c19_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).v1j = function () {
    var current = this.c19_1;
    if (current === -1)
      return current;
    var source = this.s1j();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.c19_1 = source.length;
            this.z1d('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.c19_1 = current;
    return current;
  };
  function StringJsonLexer(source, configuration) {
    AbstractJsonLexer.call(this, configuration);
    this.n1k_1 = source;
  }
  protoOf(StringJsonLexer).s1j = function () {
    return this.n1k_1;
  };
  protoOf(StringJsonLexer).t1j = function (position) {
    return position < this.s1j().length ? position : -1;
  };
  protoOf(StringJsonLexer).i1f = function () {
    var source = this.s1j();
    var cpos = this.c19_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.c19_1 = cpos;
      return charToTokenClass(c);
    }
    this.c19_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).e1f = function () {
    var current = this.c19_1;
    if (current === -1)
      return false;
    var source = this.s1j();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.c19_1 = current;
      return this.w1j(c);
    }
    this.c19_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).v1j = function () {
    var current = this.c19_1;
    if (current === -1)
      return current;
    var source = this.s1j();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.c19_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).p1g = function (expected) {
    if (this.c19_1 === -1) {
      this.x1j(expected);
    }
    var source = this.s1j();
    var cpos = this.c19_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.c19_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.x1j(expected);
    }
    this.c19_1 = -1;
    this.x1j(expected);
  };
  protoOf(StringJsonLexer).v1g = function () {
    this.p1g(_Char___init__impl__6a9atx(34));
    var current = this.c19_1;
    var closingQuote = indexOf_0(this.s1j(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.g1f();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.c19_1 > 0 ? this.c19_1 - 1 | 0 : this.c19_1;
      var s = this.c19_1 === charSequenceLength(this.s1j()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.s1j(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.z1d(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.s1j(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.s1j(), this.c19_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.c19_1 = closingQuote + 1 | 0;
    return substring(this.s1j(), current, closingQuote);
  };
  protoOf(StringJsonLexer).x1g = function (keyToMatch, isLenient) {
    var positionSnapshot = this.c19_1;
    try {
      if (!(this.i1f() === 6))
        return null;
      var firstKey = this.s1g(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.y1j();
      if (!(this.i1f() === 5))
        return null;
      return this.s1g(isLenient);
    }finally {
      this.c19_1 = positionSnapshot;
      this.y1j();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.l18_1.q1a_1 ? new StringJsonLexer(source, json.l18_1) : new StringJsonLexerWithComments(source, json.l18_1);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.n18_1;
  }
  function JsonToStringWriter() {
    this.r18_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).d1d = function (value) {
    this.r18_1.jc(value);
  };
  protoOf(JsonToStringWriter).x1c = function (char) {
    this.r18_1.s(char);
  };
  protoOf(JsonToStringWriter).z1c = function (text) {
    this.r18_1.q(text);
  };
  protoOf(JsonToStringWriter).j1d = function (text) {
    printQuoted(this.r18_1, text);
  };
  protoOf(JsonToStringWriter).s18 = function () {
    this.r18_1.mc();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.r18_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).vo = get_isNullable;
  protoOf(defer$1).ep = get_isInline;
  protoOf(defer$1).gp = get_annotations;
  defineProp(protoOf(JsonException), 'message', function () {
    return this.e();
  });
  protoOf(JsonSerializersModuleValidator).s17 = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  RedactedKey_instance = new RedactedKey();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonElementSerializer_getInstance;
  _.$_$.b = Builtins_getInstance;
  _.$_$.c = JsonArray;
  _.$_$.d = JsonDecoder;
  _.$_$.e = JsonEncoder;
  _.$_$.f = JsonObject;
  _.$_$.g = JsonPrimitive;
  _.$_$.h = Json_0;
  _.$_$.i = get_boolean;
  _.$_$.j = get_booleanOrNull;
  _.$_$.k = get_double;
  _.$_$.l = get_doubleOrNull;
  _.$_$.m = get_float;
  _.$_$.n = get_floatOrNull;
  _.$_$.o = get_int;
  _.$_$.p = get_intOrNull;
  _.$_$.q = get_jsonObject;
  _.$_$.r = get_jsonPrimitive;
  _.$_$.s = get_long;
  _.$_$.t = get_longOrNull;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
