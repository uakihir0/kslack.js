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
  var protoOf = kotlin_kotlin.$_$.qb;
  var initMetadataForObject = kotlin_kotlin.$_$.xa;
  var VOID = kotlin_kotlin.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.w4;
  var initMetadataForClass = kotlin_kotlin.$_$.ra;
  var toString = kotlin_kotlin.$_$.tb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var charSequenceLength = kotlin_kotlin.$_$.ha;
  var charSequenceGet = kotlin_kotlin.$_$.ga;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var equals = kotlin_kotlin.$_$.la;
  var toString_0 = kotlin_kotlin.$_$.qg;
  var Enum = kotlin_kotlin.$_$.df;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var initMetadataForInterface = kotlin_kotlin.$_$.va;
  var initMetadataForCompanion = kotlin_kotlin.$_$.sa;
  var numberRangeToNumber = kotlin_kotlin.$_$.nb;
  var THROW_CCE = kotlin_kotlin.$_$.of;
  var ClosedRange = kotlin_kotlin.$_$.xb;
  var isInterface = kotlin_kotlin.$_$.gb;
  var contains = kotlin_kotlin.$_$.bc;
  var convertToInt = kotlin_kotlin.$_$.i9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var toDoubleOrNull = kotlin_kotlin.$_$.de;
  var toDouble = kotlin_kotlin.$_$.ee;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var hashCode = kotlin_kotlin.$_$.qa;
  var joinToString = kotlin_kotlin.$_$.u6;
  var KtList = kotlin_kotlin.$_$.d5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var KtMap = kotlin_kotlin.$_$.g5;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var getKClassFromExpression = kotlin_kotlin.$_$.hc;
  var getBooleanHashCode = kotlin_kotlin.$_$.na;
  var getStringHashCode = kotlin_kotlin.$_$.pa;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.j4;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ng;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var toLongOrNull = kotlin_kotlin.$_$.he;
  var toULongOrNull = kotlin_kotlin.$_$.me;
  var ULong = kotlin_kotlin.$_$.wf;
  var Companion_getInstance = kotlin_kotlin.$_$.u4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j3;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.be;
  var KProperty1 = kotlin_kotlin.$_$.nc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.oa;
  var lazy = kotlin_kotlin.$_$.mg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var isLetter = kotlin_kotlin.$_$.fd;
  var Char = kotlin_kotlin.$_$.ye;
  var last = kotlin_kotlin.$_$.ld;
  var toString_1 = kotlin_kotlin.$_$.l2;
  var charCodeAt = kotlin_kotlin.$_$.fa;
  var isUpperCase = kotlin_kotlin.$_$.hd;
  var fromInt = kotlin_kotlin.$_$.m9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.b3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.k3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.s2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.t3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var captureStack = kotlin_kotlin.$_$.ca;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ia;
  var coerceAtLeast = kotlin_kotlin.$_$.yb;
  var coerceAtMost = kotlin_kotlin.$_$.zb;
  var Collection = kotlin_kotlin.$_$.y4;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var toSet = kotlin_kotlin.$_$.b8;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var singleOrNull = kotlin_kotlin.$_$.p7;
  var emptyMap = kotlin_kotlin.$_$.j6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var getValue = kotlin_kotlin.$_$.q6;
  var copyOf = kotlin_kotlin.$_$.d6;
  var arrayCopy = kotlin_kotlin.$_$.m5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.bf;
  var invoke = kotlin_kotlin.$_$.hg;
  var CoroutineImpl = kotlin_kotlin.$_$.x8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.cf;
  var Unit = kotlin_kotlin.$_$.zf;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var initMetadataForLambda = kotlin_kotlin.$_$.wa;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ta;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var getKClass = kotlin_kotlin.$_$.ic;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var ensureNotNull = kotlin_kotlin.$_$.gg;
  var substringBefore = kotlin_kotlin.$_$.xd;
  var removeSuffix = kotlin_kotlin.$_$.md;
  var substringAfter = kotlin_kotlin.$_$.wd;
  var contains_0 = kotlin_kotlin.$_$.tc;
  var plus = kotlin_kotlin.$_$.og;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var convertToByte = kotlin_kotlin.$_$.h9;
  var equalsLong = kotlin_kotlin.$_$.l9;
  var convertToShort = kotlin_kotlin.$_$.j9;
  var IllegalArgumentException = kotlin_kotlin.$_$.gf;
  var isFinite = kotlin_kotlin.$_$.jg;
  var isFinite_0 = kotlin_kotlin.$_$.ig;
  var toUInt = kotlin_kotlin.$_$.le;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a3;
  var toULong = kotlin_kotlin.$_$.ne;
  var toUByte = kotlin_kotlin.$_$.ke;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r2;
  var toUShort = kotlin_kotlin.$_$.oe;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s3;
  var objectCreate = kotlin_kotlin.$_$.pb;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.t4;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.s4;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.v4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var setOf = kotlin_kotlin.$_$.o7;
  var equals_0 = kotlin_kotlin.$_$.zc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k2;
  var numberToChar = kotlin_kotlin.$_$.ob;
  var toByte = kotlin_kotlin.$_$.rb;
  var startsWith = kotlin_kotlin.$_$.sd;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var single = kotlin_kotlin.$_$.pd;
  var emptySet = kotlin_kotlin.$_$.k6;
  var plus_0 = kotlin_kotlin.$_$.g7;
  var toInt = kotlin_kotlin.$_$.ge;
  var toList = kotlin_kotlin.$_$.v7;
  var enumEntries = kotlin_kotlin.$_$.z8;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var toNumber = kotlin_kotlin.$_$.x9;
  var last_0 = kotlin_kotlin.$_$.a7;
  var removeLast = kotlin_kotlin.$_$.l7;
  var lastIndexOf = kotlin_kotlin.$_$.kd;
  var Long = kotlin_kotlin.$_$.if;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.g2;
  var multiply = kotlin_kotlin.$_$.r9;
  var add = kotlin_kotlin.$_$.d9;
  var subtract = kotlin_kotlin.$_$.w9;
  var compare = kotlin_kotlin.$_$.g9;
  var numberToLong = kotlin_kotlin.$_$.t9;
  var negate = kotlin_kotlin.$_$.s9;
  var charArray = kotlin_kotlin.$_$.ea;
  var indexOf = kotlin_kotlin.$_$.cd;
  var indexOf_0 = kotlin_kotlin.$_$.dd;
  var substring = kotlin_kotlin.$_$.zd;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
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
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(JsonNamingStrategy$Builtins$SnakeCase$1);
  initMetadataForClass(JsonNamingStrategy$Builtins$KebabCase$1);
  initMetadataForObject(Builtins, 'Builtins');
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
  initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
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
    this.s17_1 = configuration;
    this.t17_1 = serializersModule;
    this.u17_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).sq = function () {
    return this.t17_1;
  };
  protoOf(Json).v17 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.y17();
    }
  };
  protoOf(Json).w17 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.bn(), null);
    var result = input.cq(deserializer);
    lexer.l18();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.e19();
    return new JsonImpl(conf, builder.d19_1);
  }
  function JsonBuilder(json) {
    this.m18_1 = json.s17_1.f19_1;
    this.n18_1 = json.s17_1.k19_1;
    this.o18_1 = json.s17_1.g19_1;
    this.p18_1 = json.s17_1.h19_1;
    this.q18_1 = json.s17_1.j19_1;
    this.r18_1 = json.s17_1.l19_1;
    this.s18_1 = json.s17_1.m19_1;
    this.t18_1 = json.s17_1.o19_1;
    this.u18_1 = json.s17_1.v19_1;
    this.v18_1 = json.s17_1.q19_1;
    this.w18_1 = json.s17_1.r19_1;
    this.x18_1 = json.s17_1.s19_1;
    this.y18_1 = json.s17_1.t19_1;
    this.z18_1 = json.s17_1.u19_1;
    this.a19_1 = json.s17_1.p19_1;
    this.b19_1 = json.s17_1.i19_1;
    this.c19_1 = json.s17_1.n19_1;
    this.d19_1 = json.sq();
  }
  protoOf(JsonBuilder).e19 = function () {
    if (this.c19_1) {
      // Inline function 'kotlin.require' call
      if (!(this.t18_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.u18_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.q18_1) {
      // Inline function 'kotlin.require' call
      if (!(this.r18_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.r18_1 === '    ')) {
      var tmp0 = this.r18_1;
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$7 = false;
            break $l$block;
          }
        }
        tmp$ret$7 = true;
      }
      var allWhitespaces = tmp$ret$7;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.r18_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.m18_1, this.o18_1, this.p18_1, this.b19_1, this.q18_1, this.n18_1, this.r18_1, this.s18_1, this.c19_1, this.t18_1, this.a19_1, this.v18_1, this.w18_1, this.x18_1, this.y18_1, this.z18_1, this.u18_1);
  };
  function validateConfiguration($this) {
    if (equals($this.sq(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.s17_1);
    $this.sq().o16(collector);
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
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
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
    this.f19_1 = encodeDefaults;
    this.g19_1 = ignoreUnknownKeys;
    this.h19_1 = isLenient;
    this.i19_1 = allowStructuredMapKeys;
    this.j19_1 = prettyPrint;
    this.k19_1 = explicitNulls;
    this.l19_1 = prettyPrintIndent;
    this.m19_1 = coerceInputValues;
    this.n19_1 = useArrayPolymorphism;
    this.o19_1 = classDiscriminator;
    this.p19_1 = allowSpecialFloatingPointValues;
    this.q19_1 = useAlternativeNames;
    this.r19_1 = namingStrategy;
    this.s19_1 = decodeEnumsCaseInsensitive;
    this.t19_1 = allowTrailingComma;
    this.u19_1 = allowComments;
    this.v19_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.f19_1 + ', ignoreUnknownKeys=' + this.g19_1 + ', isLenient=' + this.h19_1 + ', ' + ('allowStructuredMapKeys=' + this.i19_1 + ', prettyPrint=' + this.j19_1 + ', explicitNulls=' + this.k19_1 + ', ') + ("prettyPrintIndent='" + this.l19_1 + "', coerceInputValues=" + this.m19_1 + ', useArrayPolymorphism=' + this.n19_1 + ', ') + ("classDiscriminator='" + this.o19_1 + "', allowSpecialFloatingPointValues=" + this.p19_1 + ', ') + ('useAlternativeNames=' + this.q19_1 + ', namingStrategy=' + toString_0(this.r19_1) + ', decodeEnumsCaseInsensitive=' + this.s19_1 + ', ') + ('allowTrailingComma=' + this.t19_1 + ', allowComments=' + this.u19_1 + ', classDiscriminatorMode=' + this.v19_1.toString() + ')');
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
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.z19();
  };
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
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.z19() + ' is not an Int');
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
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_floatOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloatOrNull' call
    var this_0 = _this__u8e3s4.z19();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDoubleOrNull(this_0);
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.z19();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.z19());
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.z19());
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.z19());
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.z19());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$(_this__u8e3s4.toString() + ' does not represent a Boolean');
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
  function JsonArray(content) {
    JsonElement.call(this);
    this.a1a_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.a1a_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.a1a_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.a1a_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.a1a_1.r();
  };
  protoOf(JsonArray).b1a = function (element) {
    return this.a1a_1.h2(element);
  };
  protoOf(JsonArray).h2 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.b1a(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.a1a_1.t();
  };
  protoOf(JsonArray).c1a = function (elements) {
    return this.a1a_1.i2(elements);
  };
  protoOf(JsonArray).i2 = function (elements) {
    return this.c1a(elements);
  };
  protoOf(JsonArray).e1 = function (index) {
    return this.a1a_1.e1(index);
  };
  protoOf(JsonArray).j1 = function (index) {
    return this.a1a_1.j1(index);
  };
  protoOf(JsonArray).j2 = function (fromIndex, toIndex) {
    return this.a1a_1.j2(fromIndex, toIndex);
  };
  protoOf(JsonArray).d1 = function () {
    return this.a1a_1.d1();
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
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
    this.d1a_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.d1a_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.d1a_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.d1a_1.l1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.d1a_1.r();
  };
  protoOf(JsonObject).e1a = function (key) {
    return this.d1a_1.l2(key);
  };
  protoOf(JsonObject).l2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.e1a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).f1a = function (value) {
    return this.d1a_1.m2(value);
  };
  protoOf(JsonObject).m2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.f1a(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).g1a = function (key) {
    return this.d1a_1.n2(key);
  };
  protoOf(JsonObject).n2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.g1a((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.d1a_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).d1 = function () {
    return this.d1a_1.d1();
  };
  protoOf(JsonObject).o2 = function () {
    return this.d1a_1.o2();
  };
  protoOf(JsonObject).p2 = function () {
    return this.d1a_1.p2();
  };
  protoOf(JsonObject).l1 = function () {
    return this.d1a_1.l1();
  };
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.z19())).h1a();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.i1a_1 = 'null';
  }
  protoOf(JsonNull).y19 = function () {
    return false;
  };
  protoOf(JsonNull).z19 = function () {
    return this.i1a_1;
  };
  protoOf(JsonNull).j1a = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).vy = function (typeParamsSerializers) {
    return this.j1a();
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
    this.k1a_1 = isString;
    this.l1a_1 = coerceToInlineType;
    this.m1a_1 = toString(body);
    if (!(this.l1a_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.l1a_1.lo()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).y19 = function () {
    return this.k1a_1;
  };
  protoOf(JsonLiteral).z19 = function () {
    return this.m1a_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.k1a_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.m1a_1);
      tmp = this_0.toString();
    } else {
      tmp = this.m1a_1;
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
    if (!(this.k1a_1 === other.k1a_1))
      return false;
    if (!(this.m1a_1 === other.m1a_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.k1a_1);
    result = imul(31, result) + getStringHashCode(this.m1a_1) | 0;
    return result;
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
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.z19();
    }
    return tmp;
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.pn('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.pn('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.pn('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.pn('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.pn('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().n1a_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().o1a_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().p1a_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().q1a_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().r1a_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.s1a_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).bn = function () {
    return this.s1a_1;
  };
  protoOf(JsonElementSerializer).t1a = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.vr(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.vr(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.vr(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).cn = function (encoder, value) {
    return this.t1a(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).dn = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.x19();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.n1a_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).bn = function () {
    return this.n1a_1;
  };
  protoOf(JsonPrimitiveSerializer).u1a = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.vr(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.vr(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).cn = function (encoder, value) {
    return this.u1a(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).dn = function (decoder) {
    var result = asJsonDecoder(decoder).x19();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
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
    this.v1a_1 = ListSerializer(JsonElementSerializer_getInstance()).bn();
    this.w1a_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).jo = function () {
    return this.w1a_1;
  };
  protoOf(JsonArrayDescriptor).oo = function (index) {
    return this.v1a_1.oo(index);
  };
  protoOf(JsonArrayDescriptor).po = function (name) {
    return this.v1a_1.po(name);
  };
  protoOf(JsonArrayDescriptor).qo = function (index) {
    return this.v1a_1.qo(index);
  };
  protoOf(JsonArrayDescriptor).ro = function (index) {
    return this.v1a_1.ro(index);
  };
  protoOf(JsonArrayDescriptor).so = function (index) {
    return this.v1a_1.so(index);
  };
  protoOf(JsonArrayDescriptor).ko = function () {
    return this.v1a_1.ko();
  };
  protoOf(JsonArrayDescriptor).co = function () {
    return this.v1a_1.co();
  };
  protoOf(JsonArrayDescriptor).lo = function () {
    return this.v1a_1.lo();
  };
  protoOf(JsonArrayDescriptor).mo = function () {
    return this.v1a_1.mo();
  };
  protoOf(JsonArrayDescriptor).no = function () {
    return this.v1a_1.no();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.r1a_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).bn = function () {
    return this.r1a_1;
  };
  protoOf(JsonArraySerializer).x1a = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).cn(encoder, value);
  };
  protoOf(JsonArraySerializer).cn = function (encoder, value) {
    return this.x1a(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).dn = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).dn(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.y1a_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).bn();
    this.z1a_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).jo = function () {
    return this.z1a_1;
  };
  protoOf(JsonObjectDescriptor).oo = function (index) {
    return this.y1a_1.oo(index);
  };
  protoOf(JsonObjectDescriptor).po = function (name) {
    return this.y1a_1.po(name);
  };
  protoOf(JsonObjectDescriptor).qo = function (index) {
    return this.y1a_1.qo(index);
  };
  protoOf(JsonObjectDescriptor).ro = function (index) {
    return this.y1a_1.ro(index);
  };
  protoOf(JsonObjectDescriptor).so = function (index) {
    return this.y1a_1.so(index);
  };
  protoOf(JsonObjectDescriptor).ko = function () {
    return this.y1a_1.ko();
  };
  protoOf(JsonObjectDescriptor).co = function () {
    return this.y1a_1.co();
  };
  protoOf(JsonObjectDescriptor).lo = function () {
    return this.y1a_1.lo();
  };
  protoOf(JsonObjectDescriptor).mo = function () {
    return this.y1a_1.mo();
  };
  protoOf(JsonObjectDescriptor).no = function () {
    return this.y1a_1.no();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.q1a_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).bn = function () {
    return this.q1a_1;
  };
  protoOf(JsonObjectSerializer).a1b = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).cn(encoder, value);
  };
  protoOf(JsonObjectSerializer).cn = function (encoder, value) {
    return this.a1b(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).dn = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).dn(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.o1a_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).bn = function () {
    return this.o1a_1;
  };
  protoOf(JsonNullSerializer).b1b = function (encoder, value) {
    verify(encoder);
    encoder.yq();
  };
  protoOf(JsonNullSerializer).cn = function (encoder, value) {
    return this.b1b(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).dn = function (decoder) {
    verify_0(decoder);
    if (decoder.op()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.pp();
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
    this.p1a_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).bn = function () {
    return this.p1a_1;
  };
  protoOf(JsonLiteralSerializer).c1b = function (encoder, value) {
    verify(encoder);
    if (value.k1a_1) {
      return encoder.hr(value.m1a_1);
    }
    if (!(value.l1a_1 == null)) {
      return encoder.jr(value.l1a_1).hr(value.m1a_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.m1a_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.dr(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.m1a_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).hm_1;
      var tmp_1 = encoder.jr(serializer_0(Companion_getInstance()).bn());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.dr(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.m1a_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.fr(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.m1a_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.zq(tmp3_safe_receiver);
    }
    encoder.hr(value.m1a_1);
  };
  protoOf(JsonLiteralSerializer).cn = function (encoder, value) {
    return this.c1b(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).dn = function (decoder) {
    var result = asJsonDecoder(decoder).x19();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
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
    var tmp0 = $this.d1b_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.n1();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return function (p0) {
      return _get_original__l7ku1m(p0);
    };
  }
  function defer$1($deferred) {
    this.d1b_1 = lazy($deferred);
  }
  protoOf(defer$1).jo = function () {
    return _get_original__l7ku1m(this).jo();
  };
  protoOf(defer$1).ko = function () {
    return _get_original__l7ku1m(this).ko();
  };
  protoOf(defer$1).mo = function () {
    return _get_original__l7ku1m(this).mo();
  };
  protoOf(defer$1).oo = function (index) {
    return _get_original__l7ku1m(this).oo(index);
  };
  protoOf(defer$1).po = function (name) {
    return _get_original__l7ku1m(this).po(name);
  };
  protoOf(defer$1).qo = function (index) {
    return _get_original__l7ku1m(this).qo(index);
  };
  protoOf(defer$1).ro = function (index) {
    return _get_original__l7ku1m(this).ro(index);
  };
  protoOf(defer$1).so = function (index) {
    return _get_original__l7ku1m(this).so(index);
  };
  function JsonEncoder() {
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
        var tmp$ret$5 = toString_1(element).toLowerCase();
        bufferedChar = charCodeAt(tmp$ret$5, 0);
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
  protoOf(JsonNamingStrategy$Builtins$SnakeCase$1).e1b = function (descriptor, elementIndex, serialName) {
    return convertCamelCase(Builtins_getInstance(), serialName, _Char___init__impl__6a9atx(95));
  };
  protoOf(JsonNamingStrategy$Builtins$SnakeCase$1).toString = function () {
    return 'kotlinx.serialization.json.JsonNamingStrategy.SnakeCase';
  };
  function JsonNamingStrategy$Builtins$KebabCase$1() {
  }
  protoOf(JsonNamingStrategy$Builtins$KebabCase$1).e1b = function (descriptor, elementIndex, serialName) {
    return convertCamelCase(Builtins_getInstance(), serialName, _Char___init__impl__6a9atx(45));
  };
  protoOf(JsonNamingStrategy$Builtins$KebabCase$1).toString = function () {
    return 'kotlinx.serialization.json.JsonNamingStrategy.KebabCase';
  };
  function Builtins() {
    Builtins_instance = this;
    var tmp = this;
    tmp.f1b_1 = new JsonNamingStrategy$Builtins$SnakeCase$1();
    var tmp_0 = this;
    tmp_0.g1b_1 = new JsonNamingStrategy$Builtins$KebabCase$1();
  }
  var Builtins_instance;
  function Builtins_getInstance() {
    if (Builtins_instance == null)
      new Builtins();
    return Builtins_instance;
  }
  function Composer(writer) {
    this.h1b_1 = writer;
    this.i1b_1 = true;
  }
  protoOf(Composer).j1b = function () {
    this.i1b_1 = true;
  };
  protoOf(Composer).k1b = function () {
    return Unit_instance;
  };
  protoOf(Composer).l1b = function () {
    this.i1b_1 = false;
  };
  protoOf(Composer).m1b = function () {
    this.i1b_1 = false;
  };
  protoOf(Composer).n1b = function () {
    return Unit_instance;
  };
  protoOf(Composer).o1b = function (v) {
    return this.h1b_1.p1b(v);
  };
  protoOf(Composer).q1b = function (v) {
    return this.h1b_1.r1b(v);
  };
  protoOf(Composer).s1b = function (v) {
    return this.h1b_1.r1b(v.toString());
  };
  protoOf(Composer).t1b = function (v) {
    return this.h1b_1.r1b(v.toString());
  };
  protoOf(Composer).u1b = function (v) {
    return this.h1b_1.v1b(fromInt(v));
  };
  protoOf(Composer).w1b = function (v) {
    return this.h1b_1.v1b(fromInt(v));
  };
  protoOf(Composer).x1b = function (v) {
    return this.h1b_1.v1b(fromInt(v));
  };
  protoOf(Composer).y1b = function (v) {
    return this.h1b_1.v1b(v);
  };
  protoOf(Composer).z1b = function (v) {
    return this.h1b_1.r1b(v.toString());
  };
  protoOf(Composer).a1c = function (value) {
    return this.h1b_1.b1c(value);
  };
  function Composer_0(sb, json) {
    return json.s17_1.j19_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.e1c_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).x1b = function (v) {
    if (this.e1c_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.a1c(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.q1b(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).y1b = function (v) {
    if (this.e1c_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.a1c(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.q1b(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).u1b = function (v) {
    if (this.e1c_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.a1c(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.q1b(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).w1b = function (v) {
    if (this.e1c_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.a1c(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.q1b(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.h1c_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).a1c = function (value) {
    if (this.h1c_1) {
      protoOf(Composer).a1c.call(this, value);
    } else {
      protoOf(Composer).q1b.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.k1c_1 = json;
    this.l1c_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).j1b = function () {
    this.i1b_1 = true;
    this.l1c_1 = this.l1c_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).k1b = function () {
    this.l1c_1 = this.l1c_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).l1b = function () {
    this.i1b_1 = false;
    this.q1b('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.l1c_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.q1b(this.k1c_1.s17_1.l19_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).m1b = function () {
    if (this.i1b_1)
      this.i1b_1 = false;
    else {
      this.l1b();
    }
  };
  protoOf(ComposerWithPrettyPrint).n1b = function () {
    this.o1b(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.n1c_1 = (!descriptor.so(index) && descriptor.ro(index).co());
    return $this.n1c_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    var l = function (_this__u8e3s4, p0_0) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.m1c_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.n1c_1 = false;
  }
  protoOf(JsonElementMarker).o1c = function (index) {
    this.m1c_1.lw(index);
  };
  protoOf(JsonElementMarker).p1c = function () {
    return this.m1c_1.mw();
  };
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
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
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.q1c('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.h18_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.r1c('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.jo() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.ko().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
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
    if (json.s17_1.g19_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.no();
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
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.po(name);
    if (!(index === -3))
      return index;
    if (!json.s17_1.q19_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.jo() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.oo(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.ko(), CLASS_getInstance()) ? json.s17_1.r19_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.t1c(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function getJsonEncodedNames(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.s17_1.s19_1 && equals(descriptor.ko(), ENUM_getInstance());
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
    return tmp.t1c(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.mo();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.qo(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1c_1;
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
          tmp_0 = _this__u8e3s4.oo(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.e1b(_this__u8e3s4, i, _this__u8e3s4.oo(i));
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
      var tmp_0 = $this_serializationNamesIndices.mo();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.oo(tmp_2);
        var name = $strategy.e1b($this_serializationNamesIndices, tmp_2, baseName);
        if (!trackingSet.c1(name))
          throw new JsonEncodingException("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)));
        tmp_1[tmp_2] = name;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.ko(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).l2(name)) {
      throw new JsonDecodingException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.oo(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.oo(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
  function resize($this) {
    var newSize = imul($this.x1c_1, 2);
    $this.v1c_1 = copyOf($this.v1c_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.w1c_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.w1c_1 = newIndices;
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.v1c_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.w1c_1 = tmp_2;
    this.x1c_1 = -1;
  }
  protoOf(JsonPath).y1c = function (sd) {
    this.x1c_1 = this.x1c_1 + 1 | 0;
    var depth = this.x1c_1;
    if (depth === this.v1c_1.length) {
      resize(this);
    }
    this.v1c_1[depth] = sd;
  };
  protoOf(JsonPath).z1c = function (index) {
    this.w1c_1[this.x1c_1] = index;
  };
  protoOf(JsonPath).a1d = function (key) {
    var tmp;
    if (!(this.w1c_1[this.x1c_1] === -2)) {
      this.x1c_1 = this.x1c_1 + 1 | 0;
      tmp = this.x1c_1 === this.v1c_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.v1c_1[this.x1c_1] = key;
    this.w1c_1[this.x1c_1] = -2;
  };
  protoOf(JsonPath).b1d = function () {
    if (this.w1c_1[this.x1c_1] === -2) {
      this.v1c_1[this.x1c_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).c1d = function () {
    var depth = this.x1c_1;
    if (this.w1c_1[depth] === -2) {
      this.w1c_1[depth] = -1;
      this.x1c_1 = this.x1c_1 - 1 | 0;
    }
    if (!(this.x1c_1 === -1)) {
      this.x1c_1 = this.x1c_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).d1d = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.x1c_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.v1c_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.ko(), LIST_getInstance())) {
            if (!(this.w1c_1[index] === -1)) {
              this_0.q('[');
              this_0.dc(this.w1c_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.w1c_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.oo(idx));
            }
          }
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
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.d1d();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.ko();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.e1d_1)
      return Unit_instance;
    if (!$this.f1d_1)
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
    this.e1d_1 = configuration.n19_1;
    this.f1d_1 = !configuration.v19_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).x16 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).a17 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.bn();
    checkKind(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).b17 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).c17 = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().d1();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.vr(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.p1d_1.t1d(6);
    if ($this.p1d_1.u1d() === 4) {
      $this.p1d_1.r1c('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.p1d_1.v1d()) {
      var key = $this.q1d_1 ? $this.p1d_1.x1d() : $this.p1d_1.w1d();
      $this.p1d_1.t1d(5);
      var element = $this.y1d();
      // Inline function 'kotlin.collections.set' call
      result.q2(key, element);
      lastToken = $this.p1d_1.z1d();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.p1d_1.r1c('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.p1d_1.t1d(7);
    } else if (lastToken === 4) {
      if (!$this.r1d_1) {
        invalidTrailingComma($this.p1d_1);
      }
      $this.p1d_1.t1d(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, _this__u8e3s4, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  }
  function readArray($this) {
    var lastToken = $this.p1d_1.z1d();
    if ($this.p1d_1.u1d() === 4) {
      $this.p1d_1.r1c('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.p1d_1.v1d()) {
      var element = $this.y1d();
      result.c1(element);
      lastToken = $this.p1d_1.z1d();
      if (!(lastToken === 4)) {
        var tmp0 = $this.p1d_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.h18_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.r1c(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.p1d_1.t1d(9);
    } else if (lastToken === 4) {
      if (!$this.r1d_1) {
        invalidTrailingComma($this.p1d_1, 'array');
      }
      $this.p1d_1.t1d(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.q1d_1 || !isString) {
      tmp = $this.p1d_1.x1d();
    } else {
      tmp = $this.p1d_1.w1d();
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
    this.w1e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).a1f = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.b1f($this$DeepRecursiveFunction, it, $completion);
    tmp.q8_1 = Unit_instance;
    tmp.r8_1 = null;
    return tmp.w8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).i9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.a1f(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 3;
            var tmp0_subject = this.w1e_1.p1d_1.u1d();
            if (tmp0_subject === 1) {
              this.z1e_1 = readValue(this.w1e_1, true);
              this.o8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.z1e_1 = readValue(this.w1e_1, false);
                this.o8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.o8_1 = 1;
                  suspendResult = readObject_0(this.w1e_1, this.x1e_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.z1e_1 = readArray(this.w1e_1);
                    this.o8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.w1e_1.p1d_1.r1c("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.z1e_1 = suspendResult;
            this.o8_1 = 2;
            continue $sm;
          case 2:
            return this.z1e_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).b1f = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.w1e_1, completion);
    i.x1e_1 = $this$DeepRecursiveFunction;
    i.y1e_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.a1f($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1e_1 = _this__u8e3s4;
    this.j1e_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).w8 = function () {
    var suspendResult = this.q8_1;
    $sm: do
      try {
        var tmp = this.o8_1;
        switch (tmp) {
          case 0:
            this.p8_1 = 5;
            this.l1e_1 = this.i1e_1;
            this.m1e_1 = this.l1e_1.p1d_1.t1d(6);
            if (this.l1e_1.p1d_1.u1d() === 4) {
              this.l1e_1.p1d_1.r1c('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.k1e_1 = LinkedHashMap_init_$Create$();
            this.o8_1 = 1;
            continue $sm;
          case 1:
            if (!this.l1e_1.p1d_1.v1d()) {
              this.o8_1 = 4;
              continue $sm;
            }

            this.n1e_1 = this.l1e_1.q1d_1 ? this.l1e_1.p1d_1.x1d() : this.l1e_1.p1d_1.w1d();
            this.l1e_1.p1d_1.t1d(5);
            this.o8_1 = 2;
            suspendResult = this.j1e_1.nk(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.k1e_1;
            var key = this.n1e_1;
            tmp0.q2(key, element);
            this.m1e_1 = this.l1e_1.p1d_1.z1d();
            var tmp0_subject = this.m1e_1;
            if (tmp0_subject === 4) {
              this.o8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.o8_1 = 4;
                continue $sm;
              } else {
                this.l1e_1.p1d_1.r1c('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.o8_1 = 1;
            continue $sm;
          case 4:
            if (this.m1e_1 === 6) {
              this.l1e_1.p1d_1.t1d(7);
            } else if (this.m1e_1 === 4) {
              if (!this.l1e_1.r1d_1) {
                invalidTrailingComma(this.l1e_1.p1d_1);
              }
              this.l1e_1.p1d_1.t1d(7);
            }

            return new JsonObject(this.k1e_1);
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
    this.p1d_1 = lexer;
    this.q1d_1 = configuration.h19_1;
    this.r1d_1 = configuration.t19_1;
    this.s1d_1 = 0;
  }
  protoOf(JsonTreeReader).y1d = function () {
    var token = this.p1d_1.u1d();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.s1d_1 = this.s1d_1 + 1 | 0;
      if (this.s1d_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.s1d_1 = this.s1d_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.p1d_1.r1c('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.no().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.c1f_1;
    }
    return json.s17_1.o19_1;
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
    if (getJsonEncodedNames(actualSerializer.bn(), _this__u8e3s4).h2(classDiscriminator)) {
      var baseName = serializer.bn().jo();
      var actualName = actualSerializer.bn().jo();
      var text = _this__u8e3s4.s17_1.v19_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
      throw new JsonEncodingException("Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.');
    }
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.s1c_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).d1f = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.s1c_1;
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
  protoOf(DescriptorSchemaCache).t1c = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.e1f(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.d1f(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).e1f = function (descriptor, key) {
    var tmp0_safe_receiver = this.s1c_1.n2(descriptor);
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
    this.f1f_1 = discriminatorToSkip;
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.f1f_1 === unknownKey) {
      _this__u8e3s4.f1f_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.uq(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.b18_1.u1d() === 4) {
      $this.b18_1.r1c('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.d18_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.d18_1 === -1)) {
        hasComma = $this.b18_1.h1f();
      }
    } else {
      $this.b18_1.g1f(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.b18_1.v1d()) {
      if (decodingKey) {
        if ($this.d18_1 === -1) {
          var tmp0 = $this.b18_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.h18_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.r1c(tmp$ret$0, position);
          }
        } else {
          var tmp0_0 = $this.b18_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.h18_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp0_0.r1c(tmp$ret$2, position_0);
          }
        }
      }
      $this.d18_1 = $this.d18_1 + 1 | 0;
      tmp = $this.d18_1;
    } else {
      if (hasComma && !$this.z17_1.s17_1.t19_1) {
        invalidTrailingComma($this.b18_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.z17_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.so(index);
      var elementDescriptor = descriptor.ro(index);
      var tmp;
      if (isOptional && !elementDescriptor.co()) {
        tmp = $this.b18_1.i1f(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.ko(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.co()) {
          tmp_0 = $this.b18_1.i1f(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.b18_1.j1f($this.f18_1.h19_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.s17_1.k19_1 && elementDescriptor.co();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.b18_1.w1d();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.b18_1.h1f();
    while ($this.b18_1.v1d()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.b18_1.g1f(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.z17_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.f18_1.m19_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.b18_1.h1f();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.g18_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.o1c(index);
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
    if (hasComma && !$this.z17_1.s17_1.t19_1) {
      invalidTrailingComma($this.b18_1);
    }
    var tmp1_safe_receiver = $this.g18_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p1c();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.z17_1) || trySkip($this, $this.e18_1, key)) {
      $this.b18_1.l1f($this.f18_1.h19_1);
    } else {
      $this.b18_1.i18_1.c1d();
      $this.b18_1.k1f(key);
    }
    return $this.b18_1.h1f();
  }
  function decodeListIndex($this) {
    var hasComma = $this.b18_1.h1f();
    var tmp;
    if ($this.b18_1.v1d()) {
      if (!($this.d18_1 === -1) && !hasComma) {
        $this.b18_1.r1c('Expected end of the array or comma');
      }
      $this.d18_1 = $this.d18_1 + 1 | 0;
      tmp = $this.d18_1;
    } else {
      if (hasComma && !$this.z17_1.s17_1.t19_1) {
        invalidTrailingComma($this.b18_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.f18_1.h19_1) {
      tmp = $this.b18_1.n1f();
    } else {
      tmp = $this.b18_1.m1f();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.z17_1 = json;
    this.a18_1 = mode;
    this.b18_1 = lexer;
    this.c18_1 = this.z17_1.sq();
    this.d18_1 = -1;
    this.e18_1 = discriminatorHolder;
    this.f18_1 = this.z17_1.s17_1;
    this.g18_1 = this.f18_1.k19_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).w19 = function () {
    return this.z17_1;
  };
  protoOf(StreamingJsonDecoder).sq = function () {
    return this.c18_1;
  };
  protoOf(StreamingJsonDecoder).x19 = function () {
    return (new JsonTreeReader(this.z17_1.s17_1, this.b18_1)).y1d();
  };
  protoOf(StreamingJsonDecoder).cq = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.z17_1.s17_1.n19_1;
      }
      if (tmp) {
        return deserializer.dn(this);
      }
      var discriminator = classDiscriminator(deserializer.bn(), this.z17_1);
      var tmp0_elvis_lhs = this.b18_1.o1f(discriminator, this.f18_1.h19_1);
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
            tmp_1 = this.w19().s17_1.n19_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.dn(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.bn(), this.w19());
          var tmp0 = this.x19();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.bn().jo();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).o();
            var tmp_3 = getKClassFromExpression(tmp0).o();
            var tmp$ret$1 = this.b18_1.i18_1.d1d();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.g1a(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.w19(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.b18_1.r1c(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.e18_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.dn(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.b18_1.i18_1.d1d());
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).dq = function (descriptor) {
    var newMode = switchMode(this.z17_1, descriptor);
    this.b18_1.i18_1.y1c(descriptor);
    this.b18_1.g1f(newMode.r1f_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.z17_1, newMode, this.b18_1, descriptor, this.e18_1);
        break;
      default:
        var tmp_0;
        if (this.a18_1.equals(newMode) && this.z17_1.s17_1.k19_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.z17_1, newMode, this.b18_1, descriptor, this.e18_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).eq = function (descriptor) {
    if (descriptor.mo() === 0 && ignoreUnknownKeys(descriptor, this.z17_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.b18_1.h1f() && !this.z17_1.s17_1.t19_1) {
      invalidTrailingComma(this.b18_1, '');
    }
    this.b18_1.g1f(this.a18_1.s1f_1);
    this.b18_1.i18_1.c1d();
  };
  protoOf(StreamingJsonDecoder).op = function () {
    var tmp;
    var tmp0_safe_receiver = this.g18_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1c_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.b18_1.t1f();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).pp = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).pq = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.a18_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.b18_1.i18_1.b1d();
    }
    var value = protoOf(AbstractDecoder).pq.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.b18_1.i18_1.a1d(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).uq = function (descriptor) {
    var index;
    switch (this.a18_1.a1_1) {
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
    if (!this.a18_1.equals(WriteMode_MAP_getInstance())) {
      this.b18_1.i18_1.z1c(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).qp = function () {
    return this.b18_1.u1f();
  };
  protoOf(StreamingJsonDecoder).rp = function () {
    var value = this.b18_1.v1f();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.b18_1.r1c("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).sp = function () {
    var value = this.b18_1.v1f();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.b18_1.r1c("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).tp = function () {
    var value = this.b18_1.v1f();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.b18_1.r1c("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).up = function () {
    return this.b18_1.v1f();
  };
  protoOf(StreamingJsonDecoder).vp = function () {
    var tmp0 = this.b18_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x1d();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r1c("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.z17_1.s17_1.p19_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.b18_1, result);
  };
  protoOf(StreamingJsonDecoder).wp = function () {
    var tmp0 = this.b18_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x1d();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r1c("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.z17_1.s17_1.p19_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.b18_1, result);
  };
  protoOf(StreamingJsonDecoder).xp = function () {
    var string = this.b18_1.x1d();
    if (!(string.length === 1)) {
      this.b18_1.r1c("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).yp = function () {
    var tmp;
    if (this.f18_1.h19_1) {
      tmp = this.b18_1.n1f();
    } else {
      tmp = this.b18_1.w1d();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).aq = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.b18_1, this.z17_1) : protoOf(AbstractDecoder).aq.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).zp = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.z17_1, this.yp(), ' at path ' + this.b18_1.i18_1.d1d());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.w1f_1 = lexer;
    this.x1f_1 = json.sq();
  }
  protoOf(JsonDecoderForUnsignedTypes).sq = function () {
    return this.x1f_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).uq = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).tp = function () {
    var tmp0 = this.w1f_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x1d();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r1c("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).up = function () {
    var tmp0 = this.w1f_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x1d();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r1c("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).rp = function () {
    var tmp0 = this.w1f_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x1d();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r1c("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).sp = function () {
    var tmp0 = this.w1f_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.x1d();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.r1c("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
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
    $this.g1d_1.l1b();
    $this.hr(discriminator);
    $this.g1d_1.o1b(_Char___init__impl__6a9atx(58));
    $this.g1d_1.n1b();
    $this.hr(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.g1d_1 = composer;
    this.h1d_1 = json;
    this.i1d_1 = mode;
    this.j1d_1 = modeReuseCache;
    this.k1d_1 = this.h1d_1.sq();
    this.l1d_1 = this.h1d_1.s17_1;
    this.m1d_1 = false;
    this.n1d_1 = null;
    this.o1d_1 = null;
    var i = this.i1d_1.a1_1;
    if (!(this.j1d_1 == null)) {
      if (!(this.j1d_1[i] === null) || !(this.j1d_1[i] === this)) {
        this.j1d_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).w19 = function () {
    return this.h1d_1;
  };
  protoOf(StreamingJsonEncoder).sq = function () {
    return this.k1d_1;
  };
  protoOf(StreamingJsonEncoder).as = function (descriptor, index) {
    return this.l1d_1.f19_1;
  };
  protoOf(StreamingJsonEncoder).vr = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.w19().s17_1.n19_1) {
        serializer.cn(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.w19().s17_1.v19_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.w19().s17_1.v19_1.a1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.bn().ko();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.bn(), this.w19()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.bn()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
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
        access$checkEncodingConflicts$tPolymorphicKt(this.w19(), serializer, actualSerializer, baseClassDiscriminator);
        checkKind_0(actualSerializer.bn().ko());
        var serialName = actualSerializer.bn().jo();
        this.n1d_1 = baseClassDiscriminator;
        this.o1d_1 = serialName;
      }
      actualSerializer.cn(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).dq = function (descriptor) {
    var newMode = switchMode(this.h1d_1, descriptor);
    if (!(newMode.r1f_1 === _Char___init__impl__6a9atx(0))) {
      this.g1d_1.o1b(newMode.r1f_1);
      this.g1d_1.j1b();
    }
    var discriminator = this.n1d_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.o1d_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.jo() : tmp0_elvis_lhs);
      this.n1d_1 = null;
      this.o1d_1 = null;
    }
    if (this.i1d_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.j1d_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.a1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.g1d_1, this.h1d_1, newMode, this.j1d_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).eq = function (descriptor) {
    if (!(this.i1d_1.s1f_1 === _Char___init__impl__6a9atx(0))) {
      this.g1d_1.k1b();
      this.g1d_1.m1b();
      this.g1d_1.o1b(this.i1d_1.s1f_1);
    }
  };
  protoOf(StreamingJsonEncoder).wq = function (descriptor, index) {
    switch (this.i1d_1.a1_1) {
      case 1:
        if (!this.g1d_1.i1b_1) {
          this.g1d_1.o1b(_Char___init__impl__6a9atx(44));
        }

        this.g1d_1.l1b();
        break;
      case 2:
        if (!this.g1d_1.i1b_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.g1d_1.o1b(_Char___init__impl__6a9atx(44));
            this.g1d_1.l1b();
            tmp_0 = true;
          } else {
            this.g1d_1.o1b(_Char___init__impl__6a9atx(58));
            this.g1d_1.n1b();
            tmp_0 = false;
          }
          tmp.m1d_1 = tmp_0;
        } else {
          this.m1d_1 = true;
          this.g1d_1.l1b();
        }

        break;
      case 3:
        if (index === 0)
          this.m1d_1 = true;
        if (index === 1) {
          this.g1d_1.o1b(_Char___init__impl__6a9atx(44));
          this.g1d_1.n1b();
          this.m1d_1 = false;
        }

        break;
      default:
        if (!this.g1d_1.i1b_1) {
          this.g1d_1.o1b(_Char___init__impl__6a9atx(44));
        }

        this.g1d_1.l1b();
        this.hr(getJsonElementName(descriptor, this.h1d_1, index));
        this.g1d_1.o1b(_Char___init__impl__6a9atx(58));
        this.g1d_1.n1b();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).wr = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.l1d_1.k19_1) {
      protoOf(AbstractEncoder).wr.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).jr = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.g1d_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.g1d_1;
      } else {
        var tmp0 = this.g1d_1.h1b_1;
        var p1 = this.m1d_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.h1d_1, this.i1d_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.g1d_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.g1d_1;
      } else {
        var tmp0_0 = this.g1d_1.h1b_1;
        var p1_0 = this.m1d_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.h1d_1, this.i1d_1, null);
    } else if (!(this.n1d_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.o1d_1 = descriptor.jo();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).jr.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).yq = function () {
    this.g1d_1.q1b('null');
  };
  protoOf(StreamingJsonEncoder).zq = function (value) {
    if (this.m1d_1) {
      this.hr(value.toString());
    } else {
      this.g1d_1.z1b(value);
    }
  };
  protoOf(StreamingJsonEncoder).ar = function (value) {
    if (this.m1d_1) {
      this.hr(value.toString());
    } else {
      this.g1d_1.u1b(value);
    }
  };
  protoOf(StreamingJsonEncoder).br = function (value) {
    if (this.m1d_1) {
      this.hr(value.toString());
    } else {
      this.g1d_1.w1b(value);
    }
  };
  protoOf(StreamingJsonEncoder).cr = function (value) {
    if (this.m1d_1) {
      this.hr(value.toString());
    } else {
      this.g1d_1.x1b(value);
    }
  };
  protoOf(StreamingJsonEncoder).dr = function (value) {
    if (this.m1d_1) {
      this.hr(value.toString());
    } else {
      this.g1d_1.y1b(value);
    }
  };
  protoOf(StreamingJsonEncoder).er = function (value) {
    if (this.m1d_1) {
      this.hr(value.toString());
    } else {
      this.g1d_1.s1b(value);
    }
    if (!this.l1d_1.p19_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.g1d_1.h1b_1));
    }
  };
  protoOf(StreamingJsonEncoder).fr = function (value) {
    if (this.m1d_1) {
      this.hr(value.toString());
    } else {
      this.g1d_1.t1b(value);
    }
    if (!this.l1d_1.p19_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, toString(this.g1d_1.h1b_1));
    }
  };
  protoOf(StreamingJsonEncoder).gr = function (value) {
    this.hr(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).hr = function (value) {
    return this.g1d_1.a1c(value);
  };
  protoOf(StreamingJsonEncoder).ir = function (enumDescriptor, index) {
    this.hr(enumDescriptor.oo(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.lo() && get_unsignedNumberDescriptors().h2(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.lo() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).bn(), serializer_0(Companion_getInstance()).bn(), serializer_2(Companion_getInstance_1()).bn(), serializer_3(Companion_getInstance_2()).bn()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
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
          _this__u8e3s4.bc(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.bc(value, lastPos, value.length);
    else
      _this__u8e3s4.q(value);
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
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
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$1);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$12);
      ESCAPE_MARKERS = this_7;
    }
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.bn())).cq(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.e1g(tag), toString($this.f1g()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.a1g_1 = json;
    this.b1g_1 = value;
    this.c1g_1 = polymorphicDiscriminator;
    this.d1g_1 = this.w19().s17_1;
  }
  protoOf(AbstractJsonTreeDecoder).w19 = function () {
    return this.a1g_1;
  };
  protoOf(AbstractJsonTreeDecoder).n1 = function () {
    return this.b1g_1;
  };
  protoOf(AbstractJsonTreeDecoder).sq = function () {
    return this.w19().sq();
  };
  protoOf(AbstractJsonTreeDecoder).f1g = function () {
    var tmp0_safe_receiver = this.n14();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.g1g(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.n1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).e1g = function (currentTag) {
    return this.p14() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).x19 = function () {
    return this.f1g();
  };
  protoOf(AbstractJsonTreeDecoder).cq = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.w19().s17_1.n19_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.dn(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.bn(), this.w19());
      var tmp0 = this.x19();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.bn().jo();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).o();
        var tmp_1 = getKClassFromExpression(tmp0).o();
        var tmp$ret$1 = this.p14();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.g1a(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.w19(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).o14 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).dq = function (descriptor) {
    var currentObject = this.f1g();
    var tmp0_subject = descriptor.ko();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.w19();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.jo();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).o();
        var tmp_3 = getKClassFromExpression(currentObject).o();
        var tmp$ret$0 = this.p14();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.w19();
        var keyDescriptor = carrierDescriptor(descriptor.ro(0), this_0.sq());
        var keyKind = keyDescriptor.ko();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.w19();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.jo();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).o();
            var tmp_8 = getKClassFromExpression(currentObject).o();
            var tmp$ret$3 = this.p14();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.s17_1.i19_1) {
            var tmp_9 = this.w19();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.jo();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).o();
              var tmp_11 = getKClassFromExpression(currentObject).o();
              var tmp$ret$7 = this.p14();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.w19();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.jo();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).o();
          var tmp_14 = getKClassFromExpression(currentObject).o();
          var tmp$ret$12 = this.p14();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.c1g_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).eq = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).op = function () {
    var tmp = this.f1g();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).h1g = function (tag, enumDescriptor) {
    var tmp = this.w19();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.g1g(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.jo();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).o();
      var tmp_1 = getKClassFromExpression(tmp2).o();
      var tmp$ret$0 = this.e1g(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.z19());
  };
  protoOf(AbstractJsonTreeDecoder).b15 = function (tag, enumDescriptor) {
    return this.h1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).i1g = function (tag) {
    return !(this.g1g(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).r14 = function (tag) {
    return this.i1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j1g = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g1g(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.e1g(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).s14 = function (tag) {
    return this.j1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k1g = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g1g(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.e1g(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToByte(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).t14 = function (tag) {
    return this.k1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l1g = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g1g(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.e1g(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToShort(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).u14 = function (tag) {
    return this.l1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m1g = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g1g(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.e1g(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToInt(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
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
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).v14 = function (tag) {
    return this.m1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n1g = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g1g(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.e1g(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).w14 = function (tag) {
    return this.n1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o1g = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g1g(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.e1g(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    var result = tmp$ret$4;
    var specialFp = this.w19().s17_1.p19_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.f1g()));
  };
  protoOf(AbstractJsonTreeDecoder).x14 = function (tag) {
    return this.o1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p1g = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g1g(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.e1g(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
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
    var result = tmp$ret$4;
    var specialFp = this.w19().s17_1.p19_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.f1g()));
  };
  protoOf(AbstractJsonTreeDecoder).y14 = function (tag) {
    return this.p1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q1g = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.g1g(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).o();
        var tmp_0 = getKClassFromExpression(value).o();
        var tmp$ret$0 = this.e1g(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.z19()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.v1_1;
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
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).z14 = function (tag) {
    return this.q1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r1g = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.g1g(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).o();
      var tmp_0 = getKClassFromExpression(value).o();
      var tmp$ret$0 = this.e1g(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.e1g(tag), toString(this.f1g()));
    if (!value_0.k1a_1 && !this.w19().s17_1.h19_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.e1g(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.f1g()));
    }
    return value_0.m1a_1;
  };
  protoOf(AbstractJsonTreeDecoder).a15 = function (tag) {
    return this.r1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s1g = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.w19();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.g1g(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.jo();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).o();
        var tmp_2 = getKClassFromExpression(tmp2).o();
        var tmp$ret$0 = this.e1g(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.z19());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.w19());
    } else {
      tmp = protoOf(NamedValueDecoder).c15.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).c15 = function (tag, inlineDescriptor) {
    return this.s1g((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).aq = function (descriptor) {
    return !(this.n14() == null) ? protoOf(NamedValueDecoder).aq.call(this, descriptor) : (new JsonPrimitiveDecoder(this.w19(), this.n1(), this.c1g_1)).aq(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.c1h_1 = (!$this.w19().s17_1.k19_1 && !descriptor.so(index) && descriptor.ro(index).co());
    return $this.c1h_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.z1g_1 = value;
    this.a1h_1 = polyDescriptor;
    this.b1h_1 = 0;
    this.c1h_1 = false;
  }
  protoOf(JsonTreeDecoder).n1 = function () {
    return this.z1g_1;
  };
  protoOf(JsonTreeDecoder).uq = function (descriptor) {
    $l$loop: while (this.b1h_1 < descriptor.mo()) {
      var _unary__edvuaz = this.b1h_1;
      this.b1h_1 = _unary__edvuaz + 1 | 0;
      var name = this.i14(descriptor, _unary__edvuaz);
      var index = this.b1h_1 - 1 | 0;
      this.c1h_1 = false;
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
        if (!this.d1g_1.m19_1)
          return index;
        var tmp0 = this.w19();
        var tmp$ret$3;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.so(index);
          var elementDescriptor = descriptor.ro(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.co()) {
            var tmp_1 = this.d1h(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.ko(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.co()) {
              var tmp_3 = this.d1h(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$3 = false;
              break $l$block_2;
            }
            var tmp_4 = this.d1h(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$3 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.s17_1.k19_1 && elementDescriptor.co();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$3 = true;
              break $l$block_2;
            }
          }
          tmp$ret$3 = false;
        }
        if (tmp$ret$3)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).op = function () {
    return !this.c1h_1 && protoOf(AbstractJsonTreeDecoder).op.call(this);
  };
  protoOf(JsonTreeDecoder).j14 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.w19());
    var baseName = descriptor.oo(index);
    if (strategy == null) {
      if (!this.d1g_1.q19_1)
        return baseName;
      if (this.n1().o2().h2(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.w19(), descriptor);
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
    var fallbackName = strategy == null ? null : strategy.e1b(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).g1g = function (tag) {
    return getValue(this.n1(), tag);
  };
  protoOf(JsonTreeDecoder).d1h = function (tag) {
    return this.n1().g1a(tag);
  };
  protoOf(JsonTreeDecoder).dq = function (descriptor) {
    if (descriptor === this.a1h_1) {
      var tmp = this.w19();
      var tmp2 = this.f1g();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.a1h_1.jo();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).o();
        var tmp_1 = getKClassFromExpression(tmp2).o();
        var tmp$ret$0 = this.p14();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.c1g_1, this.a1h_1);
    }
    return protoOf(AbstractJsonTreeDecoder).dq.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).eq = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.w19())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.ko();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.w19());
    var tmp_1;
    if (strategy == null && !this.d1g_1.q19_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.w19(), descriptor).o2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.w19()).e1f(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.n1().o2().t();
    while (_iterator__ex2g4s.u()) {
      var key = _iterator__ex2g4s.v();
      if (!names.h2(key) && !(key === this.c1g_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.p14() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.n1().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.k1h_1 = value;
    this.l1h_1 = this.k1h_1.d1();
    this.m1h_1 = -1;
  }
  protoOf(JsonTreeListDecoder).n1 = function () {
    return this.k1h_1;
  };
  protoOf(JsonTreeListDecoder).j14 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).g1g = function (tag) {
    return this.k1h_1.e1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).uq = function (descriptor) {
    while (this.m1h_1 < (this.l1h_1 - 1 | 0)) {
      this.m1h_1 = this.m1h_1 + 1 | 0;
      return this.m1h_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.t1h_1 = value;
    this.d15('primitive');
  }
  protoOf(JsonPrimitiveDecoder).n1 = function () {
    return this.t1h_1;
  };
  protoOf(JsonPrimitiveDecoder).uq = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).g1g = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.t1h_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.e1i_1 = value;
    this.f1i_1 = toList(this.e1i_1.o2());
    this.g1i_1 = imul(this.f1i_1.d1(), 2);
    this.h1i_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).n1 = function () {
    return this.e1i_1;
  };
  protoOf(JsonTreeMapDecoder).j14 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.f1i_1.e1(i);
  };
  protoOf(JsonTreeMapDecoder).uq = function (descriptor) {
    while (this.h1i_1 < (this.g1i_1 - 1 | 0)) {
      this.h1i_1 = this.h1i_1 + 1 | 0;
      return this.h1i_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).g1g = function (tag) {
    return (this.h1i_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.e1i_1, tag);
  };
  protoOf(JsonTreeMapDecoder).eq = function (descriptor) {
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
    this.r1f_1 = begin;
    this.s1f_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.ko();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.ro(0), _this__u8e3s4.sq());
          var keyKind = keyDescriptor.ko();
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
            if (_this__u8e3s4.s17_1.i19_1) {
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
    if (equals(_this__u8e3s4.ko(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.lo()) {
      tmp = carrierDescriptor(_this__u8e3s4.ro(0), module_0);
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
    $this.i1i(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.i1i(lastPosition, currentPosition);
    var result = $this.k18_1.toString();
    $this.k18_1.gc(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.j18_1);
    $this.j18_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.j1i(), $this.h18_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.k1i(currentPosition);
    if (currentPosition === -1) {
      $this.r1c('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.j1i();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.j1i(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.r1c("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.k18_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.h18_1 = startPos;
      $this.l1i();
      if (($this.h18_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.r1c('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.h18_1);
    }
    $this.k18_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.r1c("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.k1i(start);
    if (current >= charSequenceLength($this.j1i()) || current === -1) {
      $this.r1c('EOF');
    }
    var tmp = $this.j1i();
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
        $this.r1c("Expected valid boolean literal prefix, but had '" + $this.x1d() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.j1i()) - current | 0) < literalSuffix.length) {
      $this.r1c('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.j1i(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.r1c("Expected valid boolean literal prefix, but had '" + $this.x1d() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.h18_1 = current + literalSuffix.length | 0;
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
  function AbstractJsonLexer() {
    this.h18_1 = 0;
    this.i18_1 = new JsonPath();
    this.j18_1 = null;
    this.k18_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).l1i = function () {
  };
  protoOf(AbstractJsonLexer).h1f = function () {
    var current = this.m1i();
    var source = this.j1i();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.h18_1 = this.h18_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).n1i = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).l18 = function () {
    var nextToken = this.z1d();
    if (!(nextToken === 10)) {
      this.r1c('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.j1i(), this.h18_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).t1d = function (expected) {
    var token = this.z1d();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.h18_1 - 1 | 0 : this.h18_1;
      var s = this.h18_1 === charSequenceLength(this.j1i()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j1i(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.r1c(tmp$ret$0, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).o1i = function (expected) {
    if (this.h18_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.h18_1;
        try {
          this.h18_1 = this.h18_1 - 1 | 0;
          tmp$ret$1 = this.x1d();
          break $l$block;
        }finally {
          this.h18_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.q1c("Expected string literal but 'null' literal was found", this.h18_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.h18_1 - 1 | 0 : this.h18_1;
    var s = this.h18_1 === charSequenceLength(this.j1i()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j1i(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.r1c(tmp$ret$2, position);
  };
  protoOf(AbstractJsonLexer).u1d = function () {
    var source = this.j1i();
    var cpos = this.h18_1;
    $l$loop_0: while (true) {
      cpos = this.k1i(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.h18_1 = cpos;
      return charToTokenClass(ch);
    }
    this.h18_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).i1f = function (doConsume) {
    var current = this.m1i();
    current = this.k1i(current);
    var len = charSequenceLength(this.j1i()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.j1i(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.j1i(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.h18_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).t1f = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.i1f(doConsume) : $super.i1f.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).j1f = function (isLenient) {
    var token = this.u1d();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.x1d();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.w1d();
    }
    var string = tmp;
    this.j18_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).p1i = function () {
    this.j18_1 = null;
  };
  protoOf(AbstractJsonLexer).q1i = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.j1i();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).w1d = function () {
    if (!(this.j18_1 == null)) {
      return takePeeked(this);
    }
    return this.m1f();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.k1i(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.r1c('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.i1i(lastPosition, currentPosition);
          currentPosition = this.k1i(currentPosition);
          if (currentPosition === -1) {
            this.r1c('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.q1i(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.h18_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).n1f = function () {
    var result = this.x1d();
    if (result === 'null' && wasUnquotedString(this)) {
      this.r1c("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).x1d = function () {
    if (!(this.j18_1 == null)) {
      return takePeeked(this);
    }
    var current = this.m1i();
    if (current >= charSequenceLength(this.j1i()) || current === -1) {
      this.r1c('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.j1i(), current));
    if (token === 1) {
      return this.w1d();
    }
    if (!(token === 0)) {
      this.r1c('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.j1i(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.j1i(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.j1i())) {
        usedAppend = true;
        this.i1i(this.h18_1, current);
        var eof = this.k1i(current);
        if (eof === -1) {
          this.h18_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.q1i(this.h18_1, current);
    } else {
      tmp = decodedString(this, this.h18_1, current);
    }
    var result = tmp;
    this.h18_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).i1i = function (fromIndex, toIndex) {
    this.k18_1.bc(this.j1i(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).l1f = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.u1d();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.x1d();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.u1d();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.x1d();
        else
          this.m1f();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.c1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last_0(tokenStack) === 8))
          throw JsonDecodingException_0(this.h18_1, 'found ] instead of } at path: ' + this.i18_1.toString(), this.j1i());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last_0(tokenStack) === 6))
          throw JsonDecodingException_0(this.h18_1, 'found } instead of ] at path: ' + this.i18_1.toString(), this.j1i());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.r1c('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.z1d();
      if (tokenStack.d1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.j1i()) + "', currentPosition=" + this.h18_1 + ')';
  };
  protoOf(AbstractJsonLexer).k1f = function (key) {
    var processed = this.q1i(0, this.h18_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.i18_1.d1d() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.j1i(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).q1c = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.i18_1.d1d() + hintMessage, this.j1i());
  };
  protoOf(AbstractJsonLexer).r1c = function (message, position, hint, $super) {
    position = position === VOID ? this.h18_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.q1c(message, position, hint) : $super.q1c.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).v1f = function () {
    var current = this.m1i();
    current = this.k1i(current);
    if (current >= charSequenceLength(this.j1i()) || current === -1) {
      this.r1c('EOF');
    }
    var tmp;
    if (charSequenceGet(this.j1i(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.j1i())) {
        this.r1c('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.j1i()))) {
      var ch = charSequenceGet(this.j1i(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.r1c('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.r1c("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.r1c("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.r1c("Unexpected symbol '-' in numeric literal");
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
        this.r1c("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
      if (compare(accumulator, new Long(0, 0)) > 0) {
        this.r1c('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.r1c('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.r1c('EOF');
      }
      if (!(charSequenceGet(this.j1i(), current) === _Char___init__impl__6a9atx(34))) {
        this.r1c('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.h18_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.r1c('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.r1c("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.r1c('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).h1a = function () {
    var result = this.v1f();
    var next = this.z1d();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.h18_1 - 1 | 0 : this.h18_1;
      var s = this.h18_1 === charSequenceLength(this.j1i()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j1i(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.r1c(tmp$ret$0, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).u1f = function () {
    var current = this.m1i();
    if (current === charSequenceLength(this.j1i())) {
      this.r1c('EOF');
    }
    var tmp;
    if (charSequenceGet(this.j1i(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.h18_1 === charSequenceLength(this.j1i())) {
        this.r1c('EOF');
      }
      if (!(charSequenceGet(this.j1i(), this.h18_1) === _Char___init__impl__6a9atx(34))) {
        this.r1c('Expected closing quotation mark');
      }
      this.h18_1 = this.h18_1 + 1 | 0;
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
      var tmp_0 = CharMappings_getInstance().s1i_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().r1i_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.r1i_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.s1i_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.r1i_1 = charArray(117);
    this.s1i_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source) {
    StringJsonLexer.call(this, source);
  }
  protoOf(StringJsonLexerWithComments).z1d = function () {
    var source = this.j1i();
    var cpos = this.m1i();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.h18_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).v1d = function () {
    var current = this.m1i();
    if (current >= this.j1i().length || current === -1)
      return false;
    return this.n1i(charCodeAt(this.j1i(), current));
  };
  protoOf(StringJsonLexerWithComments).g1f = function (expected) {
    var source = this.j1i();
    var current = this.m1i();
    if (current >= source.length || current === -1) {
      this.h18_1 = -1;
      this.o1i(expected);
    }
    var c = charCodeAt(source, current);
    this.h18_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.o1i(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).u1d = function () {
    var source = this.j1i();
    var cpos = this.m1i();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.h18_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).m1i = function () {
    var current = this.h18_1;
    if (current === -1)
      return current;
    var source = this.j1i();
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
            this.h18_1 = source.length;
            this.r1c('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.h18_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.c1j_1 = source;
  }
  protoOf(StringJsonLexer).j1i = function () {
    return this.c1j_1;
  };
  protoOf(StringJsonLexer).k1i = function (position) {
    return position < this.j1i().length ? position : -1;
  };
  protoOf(StringJsonLexer).z1d = function () {
    var source = this.j1i();
    var cpos = this.h18_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.h18_1 = cpos;
      return charToTokenClass(c);
    }
    this.h18_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).v1d = function () {
    var current = this.h18_1;
    if (current === -1)
      return false;
    var source = this.j1i();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.h18_1 = current;
      return this.n1i(c);
    }
    this.h18_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).m1i = function () {
    var current = this.h18_1;
    if (current === -1)
      return current;
    var source = this.j1i();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.h18_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).g1f = function (expected) {
    if (this.h18_1 === -1) {
      this.o1i(expected);
    }
    var source = this.j1i();
    var cpos = this.h18_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.h18_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.o1i(expected);
    }
    this.h18_1 = -1;
    this.o1i(expected);
  };
  protoOf(StringJsonLexer).m1f = function () {
    this.g1f(_Char___init__impl__6a9atx(34));
    var current = this.h18_1;
    var closingQuote = indexOf_0(this.j1i(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.x1d();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.h18_1 - 1 | 0 : this.h18_1;
      var s = this.h18_1 === charSequenceLength(this.j1i()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j1i(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.r1c(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.j1i(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.j1i(), this.h18_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.h18_1 = closingQuote + 1 | 0;
    return substring(this.j1i(), current, closingQuote);
  };
  protoOf(StringJsonLexer).o1f = function (keyToMatch, isLenient) {
    var positionSnapshot = this.h18_1;
    try {
      if (!(this.z1d() === 6))
        return null;
      var firstKey = this.j1f(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.p1i();
      if (!(this.z1d() === 5))
        return null;
      return this.j1f(isLenient);
    }finally {
      this.h18_1 = positionSnapshot;
      this.p1i();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.s17_1.u19_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.u17_1;
  }
  function JsonToStringWriter() {
    this.x17_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).v1b = function (value) {
    this.x17_1.ec(value);
  };
  protoOf(JsonToStringWriter).p1b = function (char) {
    this.x17_1.s(char);
  };
  protoOf(JsonToStringWriter).r1b = function (text) {
    this.x17_1.q(text);
  };
  protoOf(JsonToStringWriter).b1c = function (text) {
    printQuoted(this.x17_1, text);
  };
  protoOf(JsonToStringWriter).y17 = function () {
    this.x17_1.hc();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.x17_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).co = get_isNullable;
  protoOf(defer$1).lo = get_isInline;
  protoOf(defer$1).no = get_annotations;
  protoOf(JsonSerializersModuleValidator).z16 = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonElementSerializer_getInstance;
  _.$_$.b = Builtins_getInstance;
  _.$_$.c = JsonArray;
  _.$_$.d = JsonDecoder;
  _.$_$.e = JsonObject;
  _.$_$.f = JsonPrimitive;
  _.$_$.g = Json_0;
  _.$_$.h = get_boolean;
  _.$_$.i = get_booleanOrNull;
  _.$_$.j = get_double;
  _.$_$.k = get_doubleOrNull;
  _.$_$.l = get_float;
  _.$_$.m = get_floatOrNull;
  _.$_$.n = get_int;
  _.$_$.o = get_intOrNull;
  _.$_$.p = get_long;
  _.$_$.q = get_longOrNull;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
