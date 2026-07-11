(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ac;
  var initMetadataForInterface = kotlin_kotlin.$_$.gb;
  var VOID = kotlin_kotlin.$_$.c;
  var asList = kotlin_kotlin.$_$.x5;
  var objectCreate = kotlin_kotlin.$_$.zb;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.m2;
  var Unit_instance = kotlin_kotlin.$_$.z2;
  var constructCallableReference = kotlin_kotlin.$_$.ta;
  var emptyList = kotlin_kotlin.$_$.s6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d3;
  var lazy = kotlin_kotlin.$_$.wg;
  var KProperty1 = kotlin_kotlin.$_$.yc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.za;
  var toString = kotlin_kotlin.$_$.dc;
  var initMetadataForClass = kotlin_kotlin.$_$.cb;
  var getKClassFromExpression = kotlin_kotlin.$_$.sc;
  var captureStack = kotlin_kotlin.$_$.la;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.j4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.l4;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.n4;
  var IllegalArgumentException = kotlin_kotlin.$_$.sf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var isInterface = kotlin_kotlin.$_$.rb;
  var KClass = kotlin_kotlin.$_$.vc;
  var Triple = kotlin_kotlin.$_$.bg;
  var getKClass = kotlin_kotlin.$_$.tc;
  var Pair = kotlin_kotlin.$_$.wf;
  var Entry = kotlin_kotlin.$_$.n5;
  var KtMap = kotlin_kotlin.$_$.p5;
  var KtMutableMap = kotlin_kotlin.$_$.s5;
  var LinkedHashMap = kotlin_kotlin.$_$.k5;
  var HashMap = kotlin_kotlin.$_$.i5;
  var KtSet = kotlin_kotlin.$_$.u5;
  var KtMutableSet = kotlin_kotlin.$_$.t5;
  var LinkedHashSet = kotlin_kotlin.$_$.l5;
  var HashSet = kotlin_kotlin.$_$.j5;
  var Collection = kotlin_kotlin.$_$.h5;
  var KtList = kotlin_kotlin.$_$.m5;
  var KtMutableList = kotlin_kotlin.$_$.q5;
  var ArrayList = kotlin_kotlin.$_$.g5;
  var copyToArray = kotlin_kotlin.$_$.p6;
  var Result = kotlin_kotlin.$_$.xf;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var equals = kotlin_kotlin.$_$.va;
  var getStringHashCode = kotlin_kotlin.$_$.ab;
  var isBlank = kotlin_kotlin.$_$.pd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m4;
  var toList = kotlin_kotlin.$_$.i8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.o3;
  var toHashSet = kotlin_kotlin.$_$.f8;
  var toBooleanArray = kotlin_kotlin.$_$.d8;
  var withIndex = kotlin_kotlin.$_$.p8;
  var to = kotlin_kotlin.$_$.ch;
  var toMap = kotlin_kotlin.$_$.k8;
  var lazy_0 = kotlin_kotlin.$_$.xg;
  var contentEquals = kotlin_kotlin.$_$.a6;
  var initMetadataForObject = kotlin_kotlin.$_$.ib;
  var Char = kotlin_kotlin.$_$.kf;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.g;
  var Duration = kotlin_kotlin.$_$.ef;
  var Companion_getInstance = kotlin_kotlin.$_$.p2;
  var Instant = kotlin_kotlin.$_$.ff;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.q2;
  var Uuid = kotlin_kotlin.$_$.hf;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.r2;
  var toIntOrNull = kotlin_kotlin.$_$.re;
  var hashCode = kotlin_kotlin.$_$.bb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q4;
  var isArray = kotlin_kotlin.$_$.jb;
  var arrayIterator = kotlin_kotlin.$_$.ja;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.j3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s3;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.p3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.t3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.u3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.m3;
  var until = kotlin_kotlin.$_$.nc;
  var step = kotlin_kotlin.$_$.mc;
  var getValue = kotlin_kotlin.$_$.b7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.db;
  var get_lastIndex = kotlin_kotlin.$_$.i7;
  var shiftLeft = kotlin_kotlin.$_$.da;
  var countTrailingZeroBits = kotlin_kotlin.$_$.pg;
  var getOrNull = kotlin_kotlin.$_$.a7;
  var joinToString = kotlin_kotlin.$_$.f7;
  var indexOf = kotlin_kotlin.$_$.c7;
  var contentToString = kotlin_kotlin.$_$.e6;
  var Enum = kotlin_kotlin.$_$.pf;
  var toString_0 = kotlin_kotlin.$_$.bh;
  var KTypeParameter = kotlin_kotlin.$_$.zc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.n3;
  var booleanArray = kotlin_kotlin.$_$.ka;
  var emptyMap = kotlin_kotlin.$_$.t6;
  var contentHashCode = kotlin_kotlin.$_$.d6;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.s2;
  var isCharArray = kotlin_kotlin.$_$.mb;
  var charArray = kotlin_kotlin.$_$.na;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.i2;
  var isDoubleArray = kotlin_kotlin.$_$.ob;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.j2;
  var isFloatArray = kotlin_kotlin.$_$.pb;
  var Companion_instance = kotlin_kotlin.$_$.t2;
  var isLongArray = kotlin_kotlin.$_$.x9;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.x2;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.s1;
  var ULongArray = kotlin_kotlin.$_$.gg;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.o1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.l1;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.q1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.m1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.k2;
  var isIntArray = kotlin_kotlin.$_$.qb;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.w2;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.j1;
  var UIntArray = kotlin_kotlin.$_$.eg;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.f1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.c1;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.h1;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.d1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.l2;
  var isShortArray = kotlin_kotlin.$_$.tb;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.y2;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.b2;
  var UShortArray = kotlin_kotlin.$_$.ig;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.x1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.u1;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.z1;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.v1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.h2;
  var isByteArray = kotlin_kotlin.$_$.lb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.v2;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.a1;
  var UByteArray = kotlin_kotlin.$_$.cg;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.x;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.t;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.y;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.u;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.g2;
  var isBooleanArray = kotlin_kotlin.$_$.kb;
  var coerceAtLeast = kotlin_kotlin.$_$.ic;
  var copyOf = kotlin_kotlin.$_$.j6;
  var copyOf_0 = kotlin_kotlin.$_$.l6;
  var copyOf_1 = kotlin_kotlin.$_$.m6;
  var copyOf_2 = kotlin_kotlin.$_$.h6;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.t1;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.p1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.r1;
  var copyOf_3 = kotlin_kotlin.$_$.o6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.k1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.g1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.i1;
  var copyOf_4 = kotlin_kotlin.$_$.g6;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.c2;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.y1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.a2;
  var copyOf_5 = kotlin_kotlin.$_$.k6;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.b1;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.w;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.z;
  var copyOf_6 = kotlin_kotlin.$_$.i6;
  var trimIndent = kotlin_kotlin.$_$.bf;
  var Unit = kotlin_kotlin.$_$.kg;
  var charSequenceLength = kotlin_kotlin.$_$.qa;
  var lastOrNull = kotlin_kotlin.$_$.k7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.j7;
  var ULong = kotlin_kotlin.$_$.hg;
  var UInt = kotlin_kotlin.$_$.fg;
  var UByte = kotlin_kotlin.$_$.dg;
  var UShort = kotlin_kotlin.$_$.jg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.yg;
  var asSequence = kotlin_kotlin.$_$.y5;
  var get_js = kotlin_kotlin.$_$.vb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.e7;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t4;
  var get_indices_0 = kotlin_kotlin.$_$.d7;
  var get_longArrayClass = kotlin_kotlin.$_$.y9;
  var mapOf = kotlin_kotlin.$_$.p7;
  var Companion_instance_0 = kotlin_kotlin.$_$.u2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.qg;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.wn(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.ir(descriptor, index, deserializer, previousValue) : $super.ir.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.wq(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.vn(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.un().vo();
    if (isNullabilitySupported) {
      return this.os(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.rr();
    } else {
      this.rs();
      this.os(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NoOpEncoder, 'NoOpEncoder', VOID, AbstractEncoder);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.q17(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializersModuleBuilder, 'SerializersModuleBuilder', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', VOID, IllegalArgumentException);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.yn_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.io('type', serializer_0(StringCompanionObject_instance).un());
      $this$buildSerialDescriptor.io('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.xn_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.co_1 = this$0.yn_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.xn_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.un();
    }, 1, 0, 1);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.xn_1 = baseClass;
    this.yn_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.zn_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).jo = function () {
    return this.xn_1;
  };
  protoOf(PolymorphicSerializer).un = function () {
    var tmp0 = this.zn_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.xn_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.lo(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.jo());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.mo(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(getKClassFromExpression(value), _this__u8e3s4.jo());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    var tmp0_message = missingFields.d1() === 1 ? "Field '" + missingFields.i1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing";
    MissingFieldException.call($this, tmp0_message, null, missingFields, serialName);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause, missingFields, serialName) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.no_1 = missingFields;
    this.oo_1 = serialName;
  }
  protoOf(MissingFieldException).po = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.no_1, this.oo_1);
  };
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.l();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.k();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = typeOrThrow(item);
      destination.c1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.ro(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.qo()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        tmp_1 = _Result___get_isFailure__impl__jpiriv(this_1) ? null : _Result___get_value__impl__bjfvqg(this_1);
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_2;
    if (typeArguments.r()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.ro(rootClass) : tmp0_elvis_lhs;
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_3 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      tmp_2 = tmp_3;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var serializers = tmp_4;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.so(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_5;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp4_elvis_lhs;
      }
      tmp_2 = tmp_5;
    }
    var contextualSerializer = tmp_2;
    var tmp_6;
    if (contextualSerializer == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_6 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_6;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$2 = serializer(_this__u8e3s4, item);
        destination.c1(tmp$ret$2);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$5 = tmp_0;
        destination_0.c1(tmp$ret$5);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.i1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.i1(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.i1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.i1(0), serializers.i1(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.i1(0), serializers.i1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.i1(0), serializers.i1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.i1(0), serializers.i1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.i1(0), serializers.i1(1), serializers.i1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.i1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.i1(0).j();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().to(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().to(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().uo(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().uo(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.i1(0).j();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.i1(0).j();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.un().vo()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function serializer_1(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.ro(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.un();
    }
    return tmp;
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ap_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.wo_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.zo_1 = original;
    this.ap_1 = kClass;
    this.bp_1 = this.zo_1.cp() + '<' + this.ap_1.o() + '>';
  }
  protoOf(ContextDescriptor).cp = function () {
    return this.bp_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.zo_1, another.zo_1) && another.ap_1.equals(this.ap_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.ap_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.bp_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.ap_1) + ', original: ' + toString(this.zo_1) + ')';
  };
  protoOf(ContextDescriptor).dp = function () {
    return this.zo_1.dp();
  };
  protoOf(ContextDescriptor).vo = function () {
    return this.zo_1.vo();
  };
  protoOf(ContextDescriptor).ep = function () {
    return this.zo_1.ep();
  };
  protoOf(ContextDescriptor).fp = function () {
    return this.zo_1.fp();
  };
  protoOf(ContextDescriptor).gp = function () {
    return this.zo_1.gp();
  };
  protoOf(ContextDescriptor).hp = function (index) {
    return this.zo_1.hp(index);
  };
  protoOf(ContextDescriptor).ip = function (name) {
    return this.zo_1.ip(name);
  };
  protoOf(ContextDescriptor).jp = function (index) {
    return this.zo_1.jp(index);
  };
  protoOf(ContextDescriptor).kp = function (index) {
    return this.zo_1.kp(index);
  };
  protoOf(ContextDescriptor).lp = function (index) {
    return this.zo_1.lp(index);
  };
  function SerialDescriptor() {
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementNames$1($this_elementNames) {
    this.np_1 = $this_elementNames;
    this.mp_1 = $this_elementNames.fp();
  }
  protoOf(elementNames$1).u = function () {
    return this.mp_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.np_1.fp();
    var _unary__edvuaz = this.mp_1;
    this.mp_1 = _unary__edvuaz - 1 | 0;
    return this.np_1.hp(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.op_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.op_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.qp_1 = $this_elementDescriptors;
    this.pp_1 = $this_elementDescriptors.fp();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.pp_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.qp_1.fp();
    var _unary__edvuaz = this.pp_1;
    this.pp_1 = _unary__edvuaz - 1 | 0;
    return this.qp_1.kp(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.rp_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.rp_1);
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.do_1.d1(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.do_1.d1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.ao_1 = serialName;
    this.bo_1 = false;
    this.co_1 = emptyList();
    this.do_1 = ArrayList_init_$Create$_0();
    this.eo_1 = HashSet_init_$Create$();
    this.fo_1 = ArrayList_init_$Create$_0();
    this.go_1 = ArrayList_init_$Create$_0();
    this.ho_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).sp = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.eo_1.c1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.ao_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.do_1.c1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.fo_1.c1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.go_1.c1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ho_1.c1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).io = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.sp(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.sp.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.eq_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.dq_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 2);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.tp_1 = serialName;
    this.up_1 = kind;
    this.vp_1 = elementsCount;
    this.wp_1 = builder.co_1;
    this.xp_1 = toHashSet(builder.do_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.do_1;
    tmp.yp_1 = copyToArray(this_0);
    this.zp_1 = compactArray(builder.fo_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.go_1;
    tmp_0.aq_1 = copyToArray(this_1);
    this.bq_1 = toBooleanArray(builder.ho_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.yp_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.je_1, item.ie_1);
      destination.c1(tmp$ret$4);
    }
    tmp_1.cq_1 = toMap(destination);
    this.dq_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.eq_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).cp = function () {
    return this.tp_1;
  };
  protoOf(SerialDescriptorImpl).dp = function () {
    return this.up_1;
  };
  protoOf(SerialDescriptorImpl).fp = function () {
    return this.vp_1;
  };
  protoOf(SerialDescriptorImpl).gp = function () {
    return this.wp_1;
  };
  protoOf(SerialDescriptorImpl).fq = function () {
    return this.xp_1;
  };
  protoOf(SerialDescriptorImpl).hp = function (index) {
    return getChecked(this.yp_1, index);
  };
  protoOf(SerialDescriptorImpl).ip = function (name) {
    var tmp0_elvis_lhs = this.cq_1.n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).jp = function (index) {
    return getChecked(this.aq_1, index);
  };
  protoOf(SerialDescriptorImpl).kp = function (index) {
    return getChecked(this.zp_1, index);
  };
  protoOf(SerialDescriptorImpl).lp = function (index) {
    return getChecked_0(this.bq_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.cp() === other.cp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.dq_1, other.dq_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.fp() === other.fp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.fp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.kp(index).cp() === other.kp(index).cp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.kp(index).dp(), other.kp(index).dp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).o());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).gq = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).hq = function () {
    return true;
  };
  protoOf(AbstractDecoder).iq = function () {
    return null;
  };
  protoOf(AbstractDecoder).jq = function () {
    var tmp = this.gq();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).kq = function () {
    var tmp = this.gq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).lq = function () {
    var tmp = this.gq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).mq = function () {
    var tmp = this.gq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).nq = function () {
    var tmp = this.gq();
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).oq = function () {
    var tmp = this.gq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).pq = function () {
    var tmp = this.gq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).qq = function () {
    var tmp = this.gq();
    return tmp instanceof Char ? tmp.v1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).rq = function () {
    var tmp = this.gq();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).sq = function (enumDescriptor) {
    var tmp = this.gq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).uq = function (deserializer, previousValue) {
    return this.vq(deserializer);
  };
  protoOf(AbstractDecoder).wq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).xq = function (descriptor) {
  };
  protoOf(AbstractDecoder).yq = function (descriptor, index) {
    return this.jq();
  };
  protoOf(AbstractDecoder).zq = function (descriptor, index) {
    return this.kq();
  };
  protoOf(AbstractDecoder).ar = function (descriptor, index) {
    return this.lq();
  };
  protoOf(AbstractDecoder).br = function (descriptor, index) {
    return this.mq();
  };
  protoOf(AbstractDecoder).cr = function (descriptor, index) {
    return this.nq();
  };
  protoOf(AbstractDecoder).dr = function (descriptor, index) {
    return this.oq();
  };
  protoOf(AbstractDecoder).er = function (descriptor, index) {
    return this.pq();
  };
  protoOf(AbstractDecoder).fr = function (descriptor, index) {
    return this.qq();
  };
  protoOf(AbstractDecoder).gr = function (descriptor, index) {
    return this.rq();
  };
  protoOf(AbstractDecoder).hr = function (descriptor, index) {
    return this.tq(descriptor.kp(index));
  };
  protoOf(AbstractDecoder).ir = function (descriptor, index, deserializer, previousValue) {
    return this.uq(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).kr = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.un().vo();
    var tmp;
    if (isNullabilitySupported || this.hq()) {
      tmp = this.uq(deserializer, previousValue);
    } else {
      tmp = this.iq();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).wq = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).xq = function (descriptor) {
  };
  protoOf(AbstractEncoder).pr = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).qr = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).rr = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).sr = function (value) {
    return this.qr(value);
  };
  protoOf(AbstractEncoder).tr = function (value) {
    return this.qr(value);
  };
  protoOf(AbstractEncoder).ur = function (value) {
    return this.qr(value);
  };
  protoOf(AbstractEncoder).vr = function (value) {
    return this.qr(value);
  };
  protoOf(AbstractEncoder).wr = function (value) {
    return this.qr(value);
  };
  protoOf(AbstractEncoder).xr = function (value) {
    return this.qr(value);
  };
  protoOf(AbstractEncoder).yr = function (value) {
    return this.qr(value);
  };
  protoOf(AbstractEncoder).zr = function (value) {
    return this.qr(new Char(value));
  };
  protoOf(AbstractEncoder).as = function (value) {
    return this.qr(value);
  };
  protoOf(AbstractEncoder).bs = function (enumDescriptor, index) {
    return this.qr(index);
  };
  protoOf(AbstractEncoder).cs = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).ds = function (descriptor, index, value) {
    if (this.pr(descriptor, index)) {
      this.sr(value);
    }
  };
  protoOf(AbstractEncoder).es = function (descriptor, index, value) {
    if (this.pr(descriptor, index)) {
      this.tr(value);
    }
  };
  protoOf(AbstractEncoder).fs = function (descriptor, index, value) {
    if (this.pr(descriptor, index)) {
      this.ur(value);
    }
  };
  protoOf(AbstractEncoder).gs = function (descriptor, index, value) {
    if (this.pr(descriptor, index)) {
      this.vr(value);
    }
  };
  protoOf(AbstractEncoder).hs = function (descriptor, index, value) {
    if (this.pr(descriptor, index)) {
      this.wr(value);
    }
  };
  protoOf(AbstractEncoder).is = function (descriptor, index, value) {
    if (this.pr(descriptor, index)) {
      this.xr(value);
    }
  };
  protoOf(AbstractEncoder).js = function (descriptor, index, value) {
    if (this.pr(descriptor, index)) {
      this.yr(value);
    }
  };
  protoOf(AbstractEncoder).ks = function (descriptor, index, value) {
    if (this.pr(descriptor, index)) {
      this.zr(value);
    }
  };
  protoOf(AbstractEncoder).ls = function (descriptor, index, value) {
    if (this.pr(descriptor, index)) {
      this.as(value);
    }
  };
  protoOf(AbstractEncoder).ms = function (descriptor, index) {
    return this.pr(descriptor, index) ? this.cs(descriptor.kp(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).ns = function (descriptor, index, serializer, value) {
    if (this.pr(descriptor, index)) {
      this.os(serializer, value);
    }
  };
  protoOf(AbstractEncoder).ps = function (descriptor, index, serializer, value) {
    if (this.pr(descriptor, index)) {
      this.qs(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.gr($this.un(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.jr($this.un(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).ko = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.un();
    var composite = encoder.wq(descriptor);
    composite.ls(this.un(), 0, actualSerializer.un().cp());
    var tmp = this.un();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$2 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.ns(tmp, 1, tmp$ret$2, value);
    composite.xq(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).vn = function (encoder, value) {
    return this.ko(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).wn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.un();
    var composite = decoder.wq(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.mr()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.nr(this.un());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.gr(this.un(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer(this, composite, klassName);
            value = composite.jr(this.un(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$1 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$1;
    composite.xq(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).lo = function (decoder, klassName) {
    return decoder.lr().us(this.jo(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).mo = function (encoder, value) {
    return encoder.lr().vs(this.jo(), value);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function throwSubtypeNotRegistered_0(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.o();
    throwSubtypeNotRegistered(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.ws_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).un = function () {
    return this.ws_1;
  };
  protoOf(NothingSerializer_0).xs = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).vn = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.xs(encoder, tmp);
  };
  protoOf(NothingSerializer_0).wn = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.ys_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).un = function () {
    return this.ys_1;
  };
  protoOf(DurationSerializer).zs = function (encoder, value) {
    encoder.as(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).vn = function (encoder, value) {
    return this.zs(encoder, value instanceof Duration ? value.ik_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).at = function (decoder) {
    return Companion_getInstance().jk(decoder.rq());
  };
  protoOf(DurationSerializer).wn = function (decoder) {
    return new Duration(this.at(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.bt_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).un = function () {
    return this.bt_1;
  };
  protoOf(InstantSerializer).ct = function (encoder, value) {
    encoder.as(value.toString());
  };
  protoOf(InstantSerializer).vn = function (encoder, value) {
    return this.ct(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).wn = function (decoder) {
    return Companion_getInstance_0().vk(decoder.rq());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.dt_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).un = function () {
    return this.dt_1;
  };
  protoOf(UuidSerializer).et = function (encoder, value) {
    encoder.as(value.toString());
  };
  protoOf(UuidSerializer).vn = function (encoder, value) {
    return this.et(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).wn = function (decoder) {
    return Companion_getInstance_1().bm(decoder.rq());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).cp = function () {
    return 'kotlin.Array';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).cp = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).cp = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).cp = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.ht_1 = elementDescriptor;
    this.it_1 = 1;
  }
  protoOf(ListLikeDescriptor).dp = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).fp = function () {
    return this.it_1;
  };
  protoOf(ListLikeDescriptor).hp = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).ip = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).lp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.cp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).jp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.cp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).kp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.cp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.ht_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.ht_1, other.ht_1) && this.cp() === other.cp())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.ht_1), 31) + getStringHashCode(this.cp()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.cp() + '(' + toString(this.ht_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.jt_1 = serialName;
    this.kt_1 = keyDescriptor;
    this.lt_1 = valueDescriptor;
    this.mt_1 = 2;
  }
  protoOf(MapLikeDescriptor).cp = function () {
    return this.jt_1;
  };
  protoOf(MapLikeDescriptor).dp = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).fp = function () {
    return this.mt_1;
  };
  protoOf(MapLikeDescriptor).hp = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).ip = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).lp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.cp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).jp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.cp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).kp = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.cp() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.kt_1;
        break;
      case 1:
        tmp = this.lt_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.cp() === other.cp()))
      return false;
    if (!equals(this.kt_1, other.kt_1))
      return false;
    if (!equals(this.lt_1, other.lt_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.cp());
    result = imul(31, result) + hashCode(this.kt_1) | 0;
    result = imul(31, result) + hashCode(this.lt_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.cp() + '(' + toString(this.kt_1) + ', ' + toString(this.lt_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.vt_1 = primitive.cp() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).cp = function () {
    return this.vt_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.xt_1 = kClass;
    this.yt_1 = new ArrayClassDesc(eSerializer.un());
  }
  protoOf(ReferenceArraySerializer).un = function () {
    return this.yt_1;
  };
  protoOf(ReferenceArraySerializer).zt = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).au = function (_this__u8e3s4) {
    return this.zt((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).bu = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).cu = function (_this__u8e3s4) {
    return this.bu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).du = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).eu = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(ReferenceArraySerializer).fu = function (_this__u8e3s4) {
    return this.eu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).gu = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.xt_1);
  };
  protoOf(ReferenceArraySerializer).hu = function (_this__u8e3s4) {
    return this.gu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).iu = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).ju = function (_this__u8e3s4) {
    return this.iu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ku = function (_this__u8e3s4, size) {
    return _this__u8e3s4.i5(size);
  };
  protoOf(ReferenceArraySerializer).lu = function (_this__u8e3s4, size) {
    return this.ku(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).mu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v2(index, element);
  };
  protoOf(ReferenceArraySerializer).nu = function (_this__u8e3s4, index, element) {
    return this.mu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.wu_1 = new LinkedHashMapClassDesc(kSerializer.un(), vSerializer.un());
  }
  protoOf(LinkedHashMapSerializer).un = function () {
    return this.wu_1;
  };
  protoOf(LinkedHashMapSerializer).xu = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(LinkedHashMapSerializer).au = function (_this__u8e3s4) {
    return this.xu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).yu = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(LinkedHashMapSerializer).cu = function (_this__u8e3s4) {
    return this.yu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).du = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).zu = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.d1(), 2);
  };
  protoOf(LinkedHashMapSerializer).fu = function (_this__u8e3s4) {
    return this.zu(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).av = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).hu = function (_this__u8e3s4) {
    return this.av(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).bv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).ju = function (_this__u8e3s4) {
    return this.bv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).cv = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).lu = function (_this__u8e3s4, size) {
    return this.cv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.iv_1 = new ArrayListClassDesc(element.un());
  }
  protoOf(ArrayListSerializer).un = function () {
    return this.iv_1;
  };
  protoOf(ArrayListSerializer).du = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).jv = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(ArrayListSerializer).fu = function (_this__u8e3s4) {
    return this.jv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).kv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).hu = function (_this__u8e3s4) {
    return this.kv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).lv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).ju = function (_this__u8e3s4) {
    return this.lv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).mv = function (_this__u8e3s4, size) {
    return _this__u8e3s4.i5(size);
  };
  protoOf(ArrayListSerializer).lu = function (_this__u8e3s4, size) {
    return this.mv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).nv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v2(index, element);
  };
  protoOf(ArrayListSerializer).nu = function (_this__u8e3s4, index, element) {
    return this.nv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.sv_1 = new HashSetClassDesc(eSerializer.un());
  }
  protoOf(HashSetSerializer).un = function () {
    return this.sv_1;
  };
  protoOf(HashSetSerializer).du = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).tv = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(HashSetSerializer).fu = function (_this__u8e3s4) {
    return this.tv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).uv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).hu = function (_this__u8e3s4) {
    return this.uv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).vv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).ju = function (_this__u8e3s4) {
    return this.vv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).wv = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).lu = function (_this__u8e3s4, size) {
    return this.wv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).xv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(HashSetSerializer).nu = function (_this__u8e3s4, index, element) {
    return this.xv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.zv_1 = new LinkedHashSetClassDesc(eSerializer.un());
  }
  protoOf(LinkedHashSetSerializer).un = function () {
    return this.zv_1;
  };
  protoOf(LinkedHashSetSerializer).du = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).aw = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(LinkedHashSetSerializer).fu = function (_this__u8e3s4) {
    return this.aw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).bw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).hu = function (_this__u8e3s4) {
    return this.bw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).vv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).ju = function (_this__u8e3s4) {
    return this.vv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).cw = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).lu = function (_this__u8e3s4, size) {
    return this.cw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).dw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(LinkedHashSetSerializer).nu = function (_this__u8e3s4, index, element) {
    return this.dw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.gw_1 = new HashMapClassDesc(kSerializer.un(), vSerializer.un());
  }
  protoOf(HashMapSerializer).un = function () {
    return this.gw_1;
  };
  protoOf(HashMapSerializer).xu = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(HashMapSerializer).au = function (_this__u8e3s4) {
    return this.xu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).yu = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(HashMapSerializer).cu = function (_this__u8e3s4) {
    return this.yu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).du = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).hw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.d1(), 2);
  };
  protoOf(HashMapSerializer).fu = function (_this__u8e3s4) {
    return this.hw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).iw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).hu = function (_this__u8e3s4) {
    return this.iw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).bv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).ju = function (_this__u8e3s4) {
    return this.bv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).jw = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).lu = function (_this__u8e3s4, size) {
    return this.jw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ou_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).pu = function (encoder, value) {
    var size = this.au(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.un();
    var composite = encoder.ss(descriptor, size);
    var iterator = this.cu(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.ns(this.un(), index, this.ou_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.xq(descriptor);
  };
  protoOf(CollectionLikeSerializer).vn = function (encoder, value) {
    return this.pu(encoder, value);
  };
  protoOf(CollectionLikeSerializer).qu = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.ru(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).ru = function (decoder, index, builder, checkIndex) {
    this.nu(builder, index, decoder.jr(this.un(), index, this.ou_1));
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.dv_1 = keySerializer;
    this.ev_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).fv = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.q1_1;
    var last = progression.r1_1;
    var step_0 = progression.s1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.gv(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).qu = function (decoder, builder, startIndex, size) {
    return this.fv(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).gv = function (decoder, index, builder, checkIndex) {
    var key = decoder.jr(this.un(), index, this.dv_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.nr(this.un());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.l2(key)) {
      var tmp_2 = this.ev_1.un().dp();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.ir(this.un(), vIndex, this.ev_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.jr(this.un(), vIndex, this.ev_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.q2(key, value);
  };
  protoOf(MapLikeSerializer).ru = function (decoder, index, builder, checkIndex) {
    return this.gv(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).pu = function (encoder, value) {
    var size = this.au(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.un();
    var composite = encoder.ss(descriptor, size);
    var iterator = this.cu(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var k = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.n1();
      var tmp = this.un();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.ns(tmp, _unary__edvuaz, this.dv_1, k);
      var tmp_0 = this.un();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.ns(tmp_0, _unary__edvuaz_0, this.ev_1, v);
    }
    composite.xq(descriptor);
  };
  protoOf(MapLikeSerializer).vn = function (encoder, value) {
    return this.pu(encoder, value);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).pv = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(CollectionSerializer).au = function (_this__u8e3s4) {
    return this.pv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).qv = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(CollectionSerializer).cu = function (_this__u8e3s4) {
    return this.qv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function readSize($this, decoder, builder) {
    var size = decoder.or($this.un());
    $this.lu(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).tu = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.ju(previous);
    var builder = tmp1_elvis_lhs == null ? this.du() : tmp1_elvis_lhs;
    var startIndex = this.fu(builder);
    var compositeDecoder = decoder.wq(this.un());
    if (compositeDecoder.mr()) {
      this.qu(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.nr(this.un());
        if (index === -1)
          break $l$loop;
        this.su(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.xq(this.un());
    return this.hu(builder);
  };
  protoOf(AbstractCollectionSerializer).wn = function (decoder) {
    return this.tu(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).su = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.ru(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.ru.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.lw_1 = new PrimitiveArrayDescriptor(primitiveSerializer.un());
  }
  protoOf(PrimitiveArraySerializer).un = function () {
    return this.lw_1;
  };
  protoOf(PrimitiveArraySerializer).mw = function (_this__u8e3s4) {
    return _this__u8e3s4.nw();
  };
  protoOf(PrimitiveArraySerializer).fu = function (_this__u8e3s4) {
    return this.mw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).ow = function (_this__u8e3s4) {
    return _this__u8e3s4.pw();
  };
  protoOf(PrimitiveArraySerializer).hu = function (_this__u8e3s4) {
    return this.ow(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).qw = function (_this__u8e3s4, size) {
    return _this__u8e3s4.rw(size);
  };
  protoOf(PrimitiveArraySerializer).lu = function (_this__u8e3s4, size) {
    return this.qw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).sw = function (_this__u8e3s4) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).cu = function (_this__u8e3s4) {
    return this.sw(_this__u8e3s4);
  };
  protoOf(PrimitiveArraySerializer).tw = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).nu = function (_this__u8e3s4, index, element) {
    return this.tw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).du = function () {
    return this.ju(this.uw());
  };
  protoOf(PrimitiveArraySerializer).xw = function (encoder, value) {
    var size = this.au(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.lw_1;
    var composite = encoder.ss(descriptor, size);
    this.ww(composite, value, size);
    composite.xq(descriptor);
  };
  protoOf(PrimitiveArraySerializer).vn = function (encoder, value) {
    return this.xw(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).pu = function (encoder, value) {
    return this.xw(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).wn = function (decoder) {
    return this.tu(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).yw = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.nw() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.rw(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.rw.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_1 = this;
    this.zw_1 = new BigInt64Array(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = new BigInt64Array(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(-1n, elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.dx_1[slot] = $this.dx_1[slot] | shiftLeft(1n, offsetInSlot);
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.dx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.dx_1[slot];
        while (!(slotMarks === -1n)) {
          var indexInSlot = countTrailingZeroBits(~slotMarks);
          slotMarks = slotMarks | shiftLeft(1n, indexInSlot);
          var index = slotOffset + indexInSlot | 0;
          if ($this.bx_1($this.ax_1, index)) {
            $this.dx_1[slot] = slotMarks;
            return index;
          }
        }
        $this.dx_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.ax_1 = descriptor;
    this.bx_1 = readIfAbsent;
    var elementsCount = this.ax_1.fp();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = 0n;
      } else {
        tmp_0 = shiftLeft(-1n, elementsCount);
      }
      tmp.cx_1 = tmp_0;
      this.dx_1 = Companion_getInstance_7().zw_1;
    } else {
      this.cx_1 = 0n;
      this.dx_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).ex = function (index) {
    if (index < 64) {
      this.cx_1 = this.cx_1 | shiftLeft(1n, index);
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).fx = function () {
    var elementsCount = this.ax_1.fp();
    while (!(this.cx_1 === -1n)) {
      var index = countTrailingZeroBits(~this.cx_1);
      this.cx_1 = this.cx_1 | shiftLeft(1n, index);
      if (this.bx_1(this.ax_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createAnnotatedEnumSerializer(serialName, values, names, entryAnnotations, classAnnotations) {
    var descriptor = new EnumDescriptor(serialName, values.length);
    if (classAnnotations == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = 0;
      var last = classAnnotations.length;
      while (inductionVariable < last) {
        var element = classAnnotations[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        descriptor.sx(element);
      }
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var inductionVariable_0 = 0;
    var last_0 = values.length;
    while (inductionVariable_0 < last_0) {
      var item = values[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var tmp0_elvis_lhs = getOrNull(names, _unary__edvuaz);
      var elementName = tmp0_elvis_lhs == null ? item.z_1 : tmp0_elvis_lhs;
      descriptor.tx(elementName);
      var tmp1_safe_receiver = getOrNull(entryAnnotations, _unary__edvuaz);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_1 = 0;
        var last_1 = tmp1_safe_receiver.length;
        while (inductionVariable_1 < last_1) {
          var element_0 = tmp1_safe_receiver[inductionVariable_1];
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          descriptor.ux(element_0);
        }
      }
    }
    return EnumSerializer_init_$Create$(serialName, values, descriptor);
  }
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.iy_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.n1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.hp(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return constructCallableReference(function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    }, 1, 0, 3);
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.hy_1 = ENUM_getInstance();
    var tmp = this;
    tmp.iy_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).dp = function () {
    return this.hy_1;
  };
  protoOf(EnumDescriptor).kp = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.dp() === ENUM_getInstance()))
      return false;
    if (!(this.cp() === other.cp()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.cp() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.cp());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function EnumSerializer_init_$Init$(serialName, values, descriptor, $this) {
    EnumSerializer.call($this, serialName, values);
    $this.my_1 = descriptor;
    return $this;
  }
  function EnumSerializer_init_$Create$(serialName, values, descriptor) {
    return EnumSerializer_init_$Init$(serialName, values, descriptor, objectCreate(protoOf(EnumSerializer)));
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.ly_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.ly_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.tx(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.my_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.un();
    }, 1, 0, 4);
  }
  function EnumSerializer(serialName, values) {
    this.ly_1 = values;
    this.my_1 = null;
    var tmp = this;
    tmp.ny_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).un = function () {
    var tmp0 = this.ny_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).oy = function (encoder, value) {
    var index = indexOf(this.ly_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.un().cp() + ', ' + ('must be one of ' + contentToString(this.ly_1)));
    }
    encoder.bs(this.un(), index);
  };
  protoOf(EnumSerializer).vn = function (encoder, value) {
    return this.oy(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).wn = function (decoder) {
    var index = decoder.sq(this.un());
    if (!(0 <= index ? index <= (this.ly_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.un().cp() + ' enum values, ' + ('values size is ' + this.ly_1.length));
    }
    return this.ly_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.un().cp() + '>';
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.bz_1 = true;
  }
  protoOf(InlineClassDescriptor).ep = function () {
    return this.bz_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.cp() === other.cp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.bz_1 && contentEquals(this.jy(), other.jy()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.fp() === other.fp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.fp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.kp(index).cp() === other.kp(index).cp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.kp(index).dp(), other.kp(index).dp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.cz_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).dz = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.cz_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).un = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).vn = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).wn = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.po(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.fz_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).lr = function () {
    return this.fz_1;
  };
  protoOf(NoOpEncoder).qr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).rr = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).sr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).tr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ur = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).vr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).wr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).xr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).yr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).zr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).as = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).bs = function (enumDescriptor, index) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.gz_1 = OBJECT_getInstance();
    this.hz_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).dp = function () {
    return this.gz_1;
  };
  protoOf(NothingSerialDescriptor).cp = function () {
    return this.hz_1;
  };
  protoOf(NothingSerialDescriptor).fp = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).hp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).ip = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).lp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).kp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).jp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.hz_1) + imul(31, this.gz_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.iz_1 = serializer;
    this.jz_1 = new SerialDescriptorForNullable(this.iz_1.un());
  }
  protoOf(NullableSerializer).un = function () {
    return this.jz_1;
  };
  protoOf(NullableSerializer).kz = function (encoder, value) {
    if (!(value == null)) {
      encoder.rs();
      encoder.os(this.iz_1, value);
    } else {
      encoder.rr();
    }
  };
  protoOf(NullableSerializer).vn = function (encoder, value) {
    return this.kz(encoder, value);
  };
  protoOf(NullableSerializer).wn = function (decoder) {
    return decoder.hq() ? decoder.vq(this.iz_1) : decoder.iq();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.iz_1, other.iz_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.iz_1);
  };
  function SerialDescriptorForNullable(original) {
    this.wo_1 = original;
    this.xo_1 = this.wo_1.cp() + '?';
    this.yo_1 = cachedSerialNames(this.wo_1);
  }
  protoOf(SerialDescriptorForNullable).cp = function () {
    return this.xo_1;
  };
  protoOf(SerialDescriptorForNullable).fq = function () {
    return this.yo_1;
  };
  protoOf(SerialDescriptorForNullable).vo = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.wo_1, other.wo_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.wo_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.wo_1), 31);
  };
  protoOf(SerialDescriptorForNullable).dp = function () {
    return this.wo_1.dp();
  };
  protoOf(SerialDescriptorForNullable).ep = function () {
    return this.wo_1.ep();
  };
  protoOf(SerialDescriptorForNullable).fp = function () {
    return this.wo_1.fp();
  };
  protoOf(SerialDescriptorForNullable).gp = function () {
    return this.wo_1.gp();
  };
  protoOf(SerialDescriptorForNullable).hp = function (index) {
    return this.wo_1.hp(index);
  };
  protoOf(SerialDescriptorForNullable).ip = function (name) {
    return this.wo_1.ip(name);
  };
  protoOf(SerialDescriptorForNullable).jp = function (index) {
    return this.wo_1.jp(index);
  };
  protoOf(SerialDescriptorForNullable).kp = function (index) {
    return this.wo_1.kp(index);
  };
  protoOf(SerialDescriptorForNullable).lp = function (index) {
    return this.wo_1.lp(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.co_1 = this$0.mz_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return constructCallableReference(function (p0) {
      return p0.un();
    }, 1, 0, 5);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.lz_1 = objectInstance;
    this.mz_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.nz_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).un = function () {
    var tmp0 = this.nz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).ko = function (encoder, value) {
    encoder.wq(this.un()).xq(this.un());
  };
  protoOf(ObjectSerializer).vn = function (encoder, value) {
    return this.ko(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).wn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.un();
    var composite = decoder.wq(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.mr()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.nr(this.un());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.xq(descriptor);
    return this.lz_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.j();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.ki_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.ki_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.r())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.fq();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.fp());
    var inductionVariable = 0;
    var last = _this__u8e3s4.fp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.hp(i);
        result.c1(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.o();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.hp(i);
          missingFields.c1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.cp());
  }
  function throwArrayMissingFieldException(seenArray, goldenMaskArray, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = goldenMaskArray.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var maskSlot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var missingFieldsBits = goldenMaskArray[maskSlot] & ~seenArray[maskSlot];
        if (!(missingFieldsBits === 0)) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 32)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!((missingFieldsBits & 1) === 0)) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element = descriptor.hp(imul(maskSlot, 32) + i | 0);
                missingFields.c1(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.cp());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.px_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.rx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.kx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.kx_1[i];
        indices.q2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.hx_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dz();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return constructCallableReference(function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    }, 1, 0, 6);
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.hx_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ez();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2 = item.un();
          destination.c1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.jy();
    }, 1, 0, 7);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.jy());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 8);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.gx_1 = serialName;
    this.hx_1 = generatedSerializer;
    this.ix_1 = elementsCount;
    this.jx_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ix_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.kx_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.ix_1;
    tmp_3.lx_1 = Array(size);
    this.mx_1 = null;
    this.nx_1 = booleanArray(this.ix_1);
    this.ox_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.px_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.qx_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.rx_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).cp = function () {
    return this.gx_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).fp = function () {
    return this.ix_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).dp = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).gp = function () {
    var tmp0_elvis_lhs = this.mx_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).fq = function () {
    return this.ox_1.o2();
  };
  protoOf(PluginGeneratedSerialDescriptor).jy = function () {
    var tmp0 = this.qx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ky = function (name, isOptional) {
    this.jx_1 = this.jx_1 + 1 | 0;
    this.kx_1[this.jx_1] = name;
    this.nx_1[this.jx_1] = isOptional;
    this.lx_1[this.jx_1] = null;
    if (this.jx_1 === (this.ix_1 - 1 | 0)) {
      this.ox_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).tx = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ky(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ky.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).ux = function (annotation) {
    // Inline function 'kotlin.let' call
    var it = this.lx_1[this.jx_1];
    var tmp;
    if (it == null) {
      var result = ArrayList_init_$Create$(1);
      this.lx_1[this.jx_1] = result;
      tmp = result;
    } else {
      tmp = it;
    }
    var list = tmp;
    list.c1(annotation);
  };
  protoOf(PluginGeneratedSerialDescriptor).sx = function (a) {
    if (this.mx_1 == null) {
      this.mx_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.mx_1).c1(a);
  };
  protoOf(PluginGeneratedSerialDescriptor).kp = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).un();
  };
  protoOf(PluginGeneratedSerialDescriptor).lp = function (index) {
    return getChecked_0(this.nx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).jp = function (index) {
    var tmp0_elvis_lhs = getChecked(this.lx_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).hp = function (index) {
    return getChecked(this.kx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).ip = function (name) {
    var tmp0_elvis_lhs = this.ox_1.n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.cp() === other.cp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.jy(), other.jy())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.fp() === other.fp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.fp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.kp(index).cp() === other.kp(index).cp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.kp(index).dp(), other.kp(index).dp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.cp());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.cp();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.dp();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.fp());
    var tmp_0 = _this__u8e3s4.cp() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.hp(i) + ': ' + $this_toStringImpl.kp(i).cp();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).rz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).au = function (_this__u8e3s4) {
    return this.rz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).sz = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.sz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).uw = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).tz = function (decoder, index, builder, checkIndex) {
    builder.wz(decoder.fr(this.lw_1, index));
  };
  protoOf(CharArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.tz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.tz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).xz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ks(this.lw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).ww = function (encoder, content, size) {
    return this.xz(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).a10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).au = function (_this__u8e3s4) {
    return this.a10((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).b10 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.b10((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).uw = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).c10 = function (decoder, index, builder, checkIndex) {
    builder.f10(decoder.er(this.lw_1, index));
  };
  protoOf(DoubleArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.c10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.c10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).g10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.js(this.lw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).ww = function (encoder, content, size) {
    return this.g10(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).j10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).au = function (_this__u8e3s4) {
    return this.j10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).k10 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.k10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).uw = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).l10 = function (decoder, index, builder, checkIndex) {
    builder.o10(decoder.dr(this.lw_1, index));
  };
  protoOf(FloatArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.l10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.l10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).p10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.is(this.lw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).ww = function (encoder, content, size) {
    return this.p10(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_instance));
  }
  protoOf(LongArraySerializer_0).s10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).au = function (_this__u8e3s4) {
    return this.s10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).t10 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.t10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).uw = function () {
    return new BigInt64Array(0);
  };
  protoOf(LongArraySerializer_0).u10 = function (decoder, index, builder, checkIndex) {
    builder.x10(decoder.cr(this.lw_1, index));
  };
  protoOf(LongArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.u10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.u10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).y10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.hs(this.lw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).ww = function (encoder, content, size) {
    return this.y10(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_3()));
  }
  protoOf(ULongArraySerializer_0).b11 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).au = function (_this__u8e3s4) {
    return this.b11(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.jn_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).c11 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.c11(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.jn_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).d11 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).uw = function () {
    return new ULongArray(this.d11());
  };
  protoOf(ULongArraySerializer_0).e11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.hr(this.lw_1, index).nq();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.h11(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.e11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.e11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).i11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ms(this.lw_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.wr(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).ww = function (encoder, content, size) {
    return this.i11(encoder, content instanceof ULongArray ? content.jn_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).l11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).au = function (_this__u8e3s4) {
    return this.l11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).m11 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.m11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).uw = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).n11 = function (decoder, index, builder, checkIndex) {
    builder.q11(decoder.br(this.lw_1, index));
  };
  protoOf(IntArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.n11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.n11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).r11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.gs(this.lw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).ww = function (encoder, content, size) {
    return this.r11(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_4()));
  }
  protoOf(UIntArraySerializer_0).u11 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).au = function (_this__u8e3s4) {
    return this.u11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.zm_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).v11 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.v11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.zm_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).w11 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).uw = function () {
    return new UIntArray(this.w11());
  };
  protoOf(UIntArraySerializer_0).x11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.hr(this.lw_1, index).mq();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.a12(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.x11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.x11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).b12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ms(this.lw_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.vr(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).ww = function (encoder, content, size) {
    return this.b12(encoder, content instanceof UIntArray ? content.zm_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).e12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).au = function (_this__u8e3s4) {
    return this.e12((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).f12 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.f12((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).uw = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).g12 = function (decoder, index, builder, checkIndex) {
    builder.j12(decoder.ar(this.lw_1, index));
  };
  protoOf(ShortArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.g12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.g12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).k12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.fs(this.lw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).ww = function (encoder, content, size) {
    return this.k12(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_5()));
  }
  protoOf(UShortArraySerializer_0).n12 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).au = function (_this__u8e3s4) {
    return this.n12(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.tn_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).o12 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.o12(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.tn_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).p12 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).uw = function () {
    return new UShortArray(this.p12());
  };
  protoOf(UShortArraySerializer_0).q12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.hr(this.lw_1, index).lq();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.t12(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.q12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.q12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).u12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ms(this.lw_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.ur(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).ww = function (encoder, content, size) {
    return this.u12(encoder, content instanceof UShortArray ? content.tn_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).x12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).au = function (_this__u8e3s4) {
    return this.x12((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).y12 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.y12((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).uw = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).z12 = function (decoder, index, builder, checkIndex) {
    builder.c13(decoder.zq(this.lw_1, index));
  };
  protoOf(ByteArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.z12(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.z12(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).d13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.es(this.lw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).ww = function (encoder, content, size) {
    return this.d13(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_6()));
  }
  protoOf(UByteArraySerializer_0).g13 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).au = function (_this__u8e3s4) {
    return this.g13(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.pm_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).h13 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.h13(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.pm_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).i13 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).uw = function () {
    return new UByteArray(this.i13());
  };
  protoOf(UByteArraySerializer_0).j13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.hr(this.lw_1, index).kq();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.m13(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.j13(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.j13(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).n13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ms(this.lw_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.tr(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).ww = function (encoder, content, size) {
    return this.n13(encoder, content instanceof UByteArray ? content.pm_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).q13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).au = function (_this__u8e3s4) {
    return this.q13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).r13 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).ju = function (_this__u8e3s4) {
    return this.r13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).uw = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).s13 = function (decoder, index, builder, checkIndex) {
    builder.v13(decoder.yq(this.lw_1, index));
  };
  protoOf(BooleanArraySerializer_0).ru = function (decoder, index, builder, checkIndex) {
    return this.s13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).vw = function (decoder, index, builder, checkIndex) {
    return this.s13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).w13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ds(this.lw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).ww = function (encoder, content, size) {
    return this.w13(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.uz_1 = bufferWithData;
    this.vz_1 = bufferWithData.length;
    this.rw(10);
  }
  protoOf(CharArrayBuilder).nw = function () {
    return this.vz_1;
  };
  protoOf(CharArrayBuilder).rw = function (requiredCapacity) {
    if (this.uz_1.length < requiredCapacity)
      this.uz_1 = copyOf(this.uz_1, coerceAtLeast(requiredCapacity, imul(this.uz_1.length, 2)));
  };
  protoOf(CharArrayBuilder).wz = function (c) {
    this.yw();
    var tmp = this.uz_1;
    var _unary__edvuaz = this.vz_1;
    this.vz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).pw = function () {
    return copyOf(this.uz_1, this.vz_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d10_1 = bufferWithData;
    this.e10_1 = bufferWithData.length;
    this.rw(10);
  }
  protoOf(DoubleArrayBuilder).nw = function () {
    return this.e10_1;
  };
  protoOf(DoubleArrayBuilder).rw = function (requiredCapacity) {
    if (this.d10_1.length < requiredCapacity)
      this.d10_1 = copyOf_0(this.d10_1, coerceAtLeast(requiredCapacity, imul(this.d10_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).f10 = function (c) {
    this.yw();
    var tmp = this.d10_1;
    var _unary__edvuaz = this.e10_1;
    this.e10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).pw = function () {
    return copyOf_0(this.d10_1, this.e10_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m10_1 = bufferWithData;
    this.n10_1 = bufferWithData.length;
    this.rw(10);
  }
  protoOf(FloatArrayBuilder).nw = function () {
    return this.n10_1;
  };
  protoOf(FloatArrayBuilder).rw = function (requiredCapacity) {
    if (this.m10_1.length < requiredCapacity)
      this.m10_1 = copyOf_1(this.m10_1, coerceAtLeast(requiredCapacity, imul(this.m10_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).o10 = function (c) {
    this.yw();
    var tmp = this.m10_1;
    var _unary__edvuaz = this.n10_1;
    this.n10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).pw = function () {
    return copyOf_1(this.m10_1, this.n10_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v10_1 = bufferWithData;
    this.w10_1 = bufferWithData.length;
    this.rw(10);
  }
  protoOf(LongArrayBuilder).nw = function () {
    return this.w10_1;
  };
  protoOf(LongArrayBuilder).rw = function (requiredCapacity) {
    if (this.v10_1.length < requiredCapacity)
      this.v10_1 = copyOf_2(this.v10_1, coerceAtLeast(requiredCapacity, imul(this.v10_1.length, 2)));
  };
  protoOf(LongArrayBuilder).x10 = function (c) {
    this.yw();
    var tmp = this.v10_1;
    var _unary__edvuaz = this.w10_1;
    this.w10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).pw = function () {
    return copyOf_2(this.v10_1, this.w10_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.f11_1 = bufferWithData;
    this.g11_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.rw(10);
  }
  protoOf(ULongArrayBuilder).nw = function () {
    return this.g11_1;
  };
  protoOf(ULongArrayBuilder).rw = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.f11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.f11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.f11_1), 2));
      tmp.f11_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).h11 = function (c) {
    this.yw();
    var tmp = this.f11_1;
    var _unary__edvuaz = this.g11_1;
    this.g11_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).x13 = function () {
    var tmp0 = this.f11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.g11_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).pw = function () {
    return new ULongArray(this.x13());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o11_1 = bufferWithData;
    this.p11_1 = bufferWithData.length;
    this.rw(10);
  }
  protoOf(IntArrayBuilder).nw = function () {
    return this.p11_1;
  };
  protoOf(IntArrayBuilder).rw = function (requiredCapacity) {
    if (this.o11_1.length < requiredCapacity)
      this.o11_1 = copyOf_3(this.o11_1, coerceAtLeast(requiredCapacity, imul(this.o11_1.length, 2)));
  };
  protoOf(IntArrayBuilder).q11 = function (c) {
    this.yw();
    var tmp = this.o11_1;
    var _unary__edvuaz = this.p11_1;
    this.p11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).pw = function () {
    return copyOf_3(this.o11_1, this.p11_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.y11_1 = bufferWithData;
    this.z11_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.rw(10);
  }
  protoOf(UIntArrayBuilder).nw = function () {
    return this.z11_1;
  };
  protoOf(UIntArrayBuilder).rw = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.y11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.y11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.y11_1), 2));
      tmp.y11_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).a12 = function (c) {
    this.yw();
    var tmp = this.y11_1;
    var _unary__edvuaz = this.z11_1;
    this.z11_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).y13 = function () {
    var tmp0 = this.y11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.z11_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).pw = function () {
    return new UIntArray(this.y13());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h12_1 = bufferWithData;
    this.i12_1 = bufferWithData.length;
    this.rw(10);
  }
  protoOf(ShortArrayBuilder).nw = function () {
    return this.i12_1;
  };
  protoOf(ShortArrayBuilder).rw = function (requiredCapacity) {
    if (this.h12_1.length < requiredCapacity)
      this.h12_1 = copyOf_4(this.h12_1, coerceAtLeast(requiredCapacity, imul(this.h12_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).j12 = function (c) {
    this.yw();
    var tmp = this.h12_1;
    var _unary__edvuaz = this.i12_1;
    this.i12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).pw = function () {
    return copyOf_4(this.h12_1, this.i12_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r12_1 = bufferWithData;
    this.s12_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.rw(10);
  }
  protoOf(UShortArrayBuilder).nw = function () {
    return this.s12_1;
  };
  protoOf(UShortArrayBuilder).rw = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.r12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.r12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.r12_1), 2));
      tmp.r12_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).t12 = function (c) {
    this.yw();
    var tmp = this.r12_1;
    var _unary__edvuaz = this.s12_1;
    this.s12_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).z13 = function () {
    var tmp0 = this.r12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.s12_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).pw = function () {
    return new UShortArray(this.z13());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a13_1 = bufferWithData;
    this.b13_1 = bufferWithData.length;
    this.rw(10);
  }
  protoOf(ByteArrayBuilder).nw = function () {
    return this.b13_1;
  };
  protoOf(ByteArrayBuilder).rw = function (requiredCapacity) {
    if (this.a13_1.length < requiredCapacity)
      this.a13_1 = copyOf_5(this.a13_1, coerceAtLeast(requiredCapacity, imul(this.a13_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).c13 = function (c) {
    this.yw();
    var tmp = this.a13_1;
    var _unary__edvuaz = this.b13_1;
    this.b13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).pw = function () {
    return copyOf_5(this.a13_1, this.b13_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k13_1 = bufferWithData;
    this.l13_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.rw(10);
  }
  protoOf(UByteArrayBuilder).nw = function () {
    return this.l13_1;
  };
  protoOf(UByteArrayBuilder).rw = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.k13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.k13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.k13_1), 2));
      tmp.k13_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).m13 = function (c) {
    this.yw();
    var tmp = this.k13_1;
    var _unary__edvuaz = this.l13_1;
    this.l13_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).a14 = function () {
    var tmp0 = this.k13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.l13_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).pw = function () {
    return new UByteArray(this.a14());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t13_1 = bufferWithData;
    this.u13_1 = bufferWithData.length;
    this.rw(10);
  }
  protoOf(BooleanArrayBuilder).nw = function () {
    return this.u13_1;
  };
  protoOf(BooleanArrayBuilder).rw = function (requiredCapacity) {
    if (this.t13_1.length < requiredCapacity)
      this.t13_1 = copyOf_6(this.t13_1, coerceAtLeast(requiredCapacity, imul(this.t13_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).v13 = function (c) {
    this.yw();
    var tmp = this.t13_1;
    var _unary__edvuaz = this.u13_1;
    this.u13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).pw = function () {
    return copyOf_6(this.t13_1, this.u13_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.b14_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).un = function () {
    return this.b14_1;
  };
  protoOf(StringSerializer).c14 = function (encoder, value) {
    return encoder.as(value);
  };
  protoOf(StringSerializer).vn = function (encoder, value) {
    return this.c14(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).wn = function (decoder) {
    return decoder.rq();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.d14_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).un = function () {
    return this.d14_1;
  };
  protoOf(BooleanSerializer).e14 = function (encoder, value) {
    return encoder.sr(value);
  };
  protoOf(BooleanSerializer).vn = function (encoder, value) {
    return this.e14(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).wn = function (decoder) {
    return decoder.jq();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.f14_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).un = function () {
    return this.f14_1;
  };
  protoOf(IntSerializer).g14 = function (encoder, value) {
    return encoder.vr(value);
  };
  protoOf(IntSerializer).vn = function (encoder, value) {
    return this.g14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).wn = function (decoder) {
    return decoder.mq();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.h14_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).un = function () {
    return this.h14_1;
  };
  protoOf(DoubleSerializer).i14 = function (encoder, value) {
    return encoder.yr(value);
  };
  protoOf(DoubleSerializer).vn = function (encoder, value) {
    return this.i14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).wn = function (decoder) {
    return decoder.pq();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.j14_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).un = function () {
    return this.j14_1;
  };
  protoOf(LongSerializer).k14 = function (encoder, value) {
    return encoder.wr(value);
  };
  protoOf(LongSerializer).vn = function (encoder, value) {
    return this.k14(encoder, (!(value == null) ? typeof value === 'bigint' : false) ? value : THROW_CCE());
  };
  protoOf(LongSerializer).wn = function (decoder) {
    return decoder.nq();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().n2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.l14_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.l14_1 = serialName;
    this.m14_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).cp = function () {
    return this.l14_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).dp = function () {
    return this.m14_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).fp = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).hp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).ip = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).lp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).kp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).jp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.l14_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.l14_1 === other.l14_1 && equals(this.m14_1, other.m14_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.l14_1) + imul(31, this.m14_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().p2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.un().cp();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.n14_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).un = function () {
    return this.n14_1;
  };
  protoOf(ByteSerializer).o14 = function (encoder, value) {
    return encoder.tr(value);
  };
  protoOf(ByteSerializer).vn = function (encoder, value) {
    return this.o14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).wn = function (decoder) {
    return decoder.kq();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.p14_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).un = function () {
    return this.p14_1;
  };
  protoOf(ShortSerializer).q14 = function (encoder, value) {
    return encoder.ur(value);
  };
  protoOf(ShortSerializer).vn = function (encoder, value) {
    return this.q14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).wn = function (decoder) {
    return decoder.lq();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.r14_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).un = function () {
    return this.r14_1;
  };
  protoOf(CharSerializer).s14 = function (encoder, value) {
    return encoder.zr(value);
  };
  protoOf(CharSerializer).vn = function (encoder, value) {
    return this.s14(encoder, value instanceof Char ? value.v1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).t14 = function (decoder) {
    return decoder.qq();
  };
  protoOf(CharSerializer).wn = function (decoder) {
    return new Char(this.t14(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.u14_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).un = function () {
    return this.u14_1;
  };
  protoOf(FloatSerializer).v14 = function (encoder, value) {
    return encoder.xr(value);
  };
  protoOf(FloatSerializer).vn = function (encoder, value) {
    return this.v14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).wn = function (decoder) {
    return decoder.oq();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.w14_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).un = function () {
    return this.w14_1.un();
  };
  protoOf(UnitSerializer).x14 = function (encoder, value) {
    this.w14_1.ko(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).vn = function (encoder, value) {
    return this.x14(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).y14 = function (decoder) {
    this.w14_1.wn(decoder);
  };
  protoOf(UnitSerializer).wn = function (decoder) {
    this.y14(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).b15 = function (_this__u8e3s4, index) {
    return this.d15(this.c15(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).d15 = function (nestedName) {
    var tmp0_elvis_lhs = this.g15();
    return this.h15(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).c15 = function (descriptor, index) {
    return descriptor.hp(index);
  };
  protoOf(NamedValueDecoder).h15 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).i15 = function () {
    return this.e15_1.r() ? '$' : joinToString(this.e15_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.w15(tag);
    var r = block();
    if (!$this.f15_1) {
      $this.x15();
    }
    $this.f15_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.uq($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.un().vo();
      var tmp;
      if (isNullabilitySupported || tmp0.hq()) {
        tmp = this$0.uq($deserializer, $previousValue);
      } else {
        tmp = tmp0.iq();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.e15_1 = ArrayList_init_$Create$_0();
    this.f15_1 = false;
  }
  protoOf(TaggedDecoder).lr = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).j15 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).k15 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).l15 = function (tag) {
    var tmp = this.j15(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).m15 = function (tag) {
    var tmp = this.j15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).n15 = function (tag) {
    var tmp = this.j15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).o15 = function (tag) {
    var tmp = this.j15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p15 = function (tag) {
    var tmp = this.j15(tag);
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q15 = function (tag) {
    var tmp = this.j15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).r15 = function (tag) {
    var tmp = this.j15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s15 = function (tag) {
    var tmp = this.j15(tag);
    return tmp instanceof Char ? tmp.v1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).t15 = function (tag) {
    var tmp = this.j15(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u15 = function (tag, enumDescriptor) {
    var tmp = this.j15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v15 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.w15(tag);
    return this;
  };
  protoOf(TaggedDecoder).uq = function (deserializer, previousValue) {
    return this.vq(deserializer);
  };
  protoOf(TaggedDecoder).tq = function (descriptor) {
    return this.v15(this.x15(), descriptor);
  };
  protoOf(TaggedDecoder).hq = function () {
    var tmp0_elvis_lhs = this.g15();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.k15(currentTag);
  };
  protoOf(TaggedDecoder).iq = function () {
    return null;
  };
  protoOf(TaggedDecoder).jq = function () {
    return this.l15(this.x15());
  };
  protoOf(TaggedDecoder).kq = function () {
    return this.m15(this.x15());
  };
  protoOf(TaggedDecoder).lq = function () {
    return this.n15(this.x15());
  };
  protoOf(TaggedDecoder).mq = function () {
    return this.o15(this.x15());
  };
  protoOf(TaggedDecoder).nq = function () {
    return this.p15(this.x15());
  };
  protoOf(TaggedDecoder).oq = function () {
    return this.q15(this.x15());
  };
  protoOf(TaggedDecoder).pq = function () {
    return this.r15(this.x15());
  };
  protoOf(TaggedDecoder).qq = function () {
    return this.s15(this.x15());
  };
  protoOf(TaggedDecoder).rq = function () {
    return this.t15(this.x15());
  };
  protoOf(TaggedDecoder).sq = function (enumDescriptor) {
    return this.u15(this.x15(), enumDescriptor);
  };
  protoOf(TaggedDecoder).wq = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).xq = function (descriptor) {
  };
  protoOf(TaggedDecoder).yq = function (descriptor, index) {
    return this.l15(this.b15(descriptor, index));
  };
  protoOf(TaggedDecoder).zq = function (descriptor, index) {
    return this.m15(this.b15(descriptor, index));
  };
  protoOf(TaggedDecoder).ar = function (descriptor, index) {
    return this.n15(this.b15(descriptor, index));
  };
  protoOf(TaggedDecoder).br = function (descriptor, index) {
    return this.o15(this.b15(descriptor, index));
  };
  protoOf(TaggedDecoder).cr = function (descriptor, index) {
    return this.p15(this.b15(descriptor, index));
  };
  protoOf(TaggedDecoder).dr = function (descriptor, index) {
    return this.q15(this.b15(descriptor, index));
  };
  protoOf(TaggedDecoder).er = function (descriptor, index) {
    return this.r15(this.b15(descriptor, index));
  };
  protoOf(TaggedDecoder).fr = function (descriptor, index) {
    return this.s15(this.b15(descriptor, index));
  };
  protoOf(TaggedDecoder).gr = function (descriptor, index) {
    return this.t15(this.b15(descriptor, index));
  };
  protoOf(TaggedDecoder).hr = function (descriptor, index) {
    return this.v15(this.b15(descriptor, index), descriptor.kp(index));
  };
  protoOf(TaggedDecoder).ir = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.b15(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).kr = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.b15(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).g15 = function () {
    return lastOrNull(this.e15_1);
  };
  protoOf(TaggedDecoder).w15 = function (name) {
    this.e15_1.c1(name);
  };
  protoOf(TaggedDecoder).x15 = function () {
    var r = this.e15_1.w2(get_lastIndex_0(this.e15_1));
    this.f15_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.y15_1 = key;
    this.z15_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.y15_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.z15_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.y15_1) + ', value=' + toString_0(this.z15_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.y15_1 == null ? 0 : hashCode(this.y15_1);
    result = imul(result, 31) + (this.z15_1 == null ? 0 : hashCode(this.z15_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.y15_1, other.y15_1))
      return false;
    if (!equals(this.z15_1, other.z15_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.io('key', $keySerializer.un());
      $this$buildSerialDescriptor.io('value', $valueSerializer.un());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.c16_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).un = function () {
    return this.c16_1;
  };
  protoOf(MapEntrySerializer_0).d16 = function (_this__u8e3s4) {
    return _this__u8e3s4.m1();
  };
  protoOf(MapEntrySerializer_0).e16 = function (_this__u8e3s4) {
    return this.d16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).f16 = function (_this__u8e3s4) {
    return _this__u8e3s4.n1();
  };
  protoOf(MapEntrySerializer_0).g16 = function (_this__u8e3s4) {
    return this.f16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).h16 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.io('first', $keySerializer.un());
      $this$buildClassSerialDescriptor.io('second', $valueSerializer.un());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.n16_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).un = function () {
    return this.n16_1;
  };
  protoOf(PairSerializer_0).o16 = function (_this__u8e3s4) {
    return _this__u8e3s4.se_1;
  };
  protoOf(PairSerializer_0).e16 = function (_this__u8e3s4) {
    return this.o16(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).p16 = function (_this__u8e3s4) {
    return _this__u8e3s4.te_1;
  };
  protoOf(PairSerializer_0).g16 = function (_this__u8e3s4) {
    return this.p16(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).h16 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.jr($this.t16_1, 0, $this.q16_1);
    var b = composite.jr($this.t16_1, 1, $this.r16_1);
    var c = composite.jr($this.t16_1, 2, $this.s16_1);
    composite.xq($this.t16_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.nr($this.t16_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.jr($this.t16_1, 0, $this.q16_1);
          break;
        case 1:
          b = composite.jr($this.t16_1, 1, $this.r16_1);
          break;
        case 2:
          c = composite.jr($this.t16_1, 2, $this.s16_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.xq($this.t16_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    return new Triple(a, b, c);
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.io('first', this$0.q16_1.un());
      $this$buildClassSerialDescriptor.io('second', this$0.r16_1.un());
      $this$buildClassSerialDescriptor.io('third', this$0.s16_1.un());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.q16_1 = aSerializer;
    this.r16_1 = bSerializer;
    this.s16_1 = cSerializer;
    var tmp = this;
    tmp.t16_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).un = function () {
    return this.t16_1;
  };
  protoOf(TripleSerializer_0).u16 = function (encoder, value) {
    var structuredEncoder = encoder.wq(this.t16_1);
    structuredEncoder.ns(this.t16_1, 0, this.q16_1, value.yl_1);
    structuredEncoder.ns(this.t16_1, 1, this.r16_1, value.zl_1);
    structuredEncoder.ns(this.t16_1, 2, this.s16_1, value.am_1);
    structuredEncoder.xq(this.t16_1);
  };
  protoOf(TripleSerializer_0).vn = function (encoder, value) {
    return this.u16(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).wn = function (decoder) {
    var composite = decoder.wq(this.t16_1);
    if (composite.mr()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.i16_1 = keySerializer;
    this.j16_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).k16 = function (encoder, value) {
    var structuredEncoder = encoder.wq(this.un());
    structuredEncoder.ns(this.un(), 0, this.i16_1, this.e16(value));
    structuredEncoder.ns(this.un(), 1, this.j16_1, this.g16(value));
    structuredEncoder.xq(this.un());
  };
  protoOf(KeyValueSerializer).vn = function (encoder, value) {
    return this.k16(encoder, value);
  };
  protoOf(KeyValueSerializer).wn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.un();
    var composite = decoder.wq(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.mr()) {
        var key = composite.jr(this.un(), 0, this.i16_1);
        var value = composite.jr(this.un(), 1, this.j16_1);
        tmp$ret$1 = this.h16(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.nr(this.un());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.jr(this.un(), 0, this.i16_1);
            break;
          case 1:
            value_0 = composite.jr(this.un(), 1, this.j16_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.h16(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.xq(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.v16_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_instance));
  }
  protoOf(ULongSerializer).un = function () {
    return this.v16_1;
  };
  protoOf(ULongSerializer).w16 = function (encoder, value) {
    var tmp = encoder.cs(this.v16_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.wr(tmp$ret$0);
  };
  protoOf(ULongSerializer).vn = function (encoder, value) {
    return this.w16(encoder, value instanceof ULong ? value.en_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).x16 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.tq(this.v16_1).nq();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).wn = function (decoder) {
    return new ULong(this.x16(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.y16_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).un = function () {
    return this.y16_1;
  };
  protoOf(UIntSerializer).z16 = function (encoder, value) {
    var tmp = encoder.cs(this.y16_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.vr(tmp$ret$0);
  };
  protoOf(UIntSerializer).vn = function (encoder, value) {
    return this.z16(encoder, value instanceof UInt ? value.um_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).a17 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.tq(this.y16_1).mq();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).wn = function (decoder) {
    return new UInt(this.a17(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.b17_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).un = function () {
    return this.b17_1;
  };
  protoOf(UByteSerializer).c17 = function (encoder, value) {
    var tmp = encoder.cs(this.b17_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.tr(tmp$ret$0);
  };
  protoOf(UByteSerializer).vn = function (encoder, value) {
    return this.c17(encoder, value instanceof UByte ? value.km_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).d17 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.tq(this.b17_1).kq();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).wn = function (decoder) {
    return new UByte(this.d17(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.e17_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).un = function () {
    return this.e17_1;
  };
  protoOf(UShortSerializer).f17 = function (encoder, value) {
    var tmp = encoder.cs(this.e17_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.ur(tmp$ret$0);
  };
  protoOf(UShortSerializer).vn = function (encoder, value) {
    return this.f17(encoder, value instanceof UShort ? value.on_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).g17 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.tq(this.e17_1).lq();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).wn = function (decoder) {
    return new UShort(this.g17(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).ro = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.so(kClass, typeArgumentsSerializers) : $super.so.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.i17_1 = class2ContextualFactory;
    this.j17_1 = polyBase2Serializers;
    this.k17_1 = polyBase2DefaultSerializerProvider;
    this.l17_1 = polyBase2NamedSerializers;
    this.m17_1 = polyBase2DefaultDeserializerProvider;
    this.n17_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).qo = function () {
    return this.n17_1;
  };
  protoOf(SerialModuleImpl).vs = function (baseClass, value) {
    if (!baseClass.sa(value))
      return null;
    var tmp0_safe_receiver = this.j17_1.n2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.k17_1.n2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).us = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.l17_1.n2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).n2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.m17_1.n2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).so = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.i17_1.n2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o17(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).h17 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.i17_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.r17_1;
        collector.s17(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.q17(kclass, serial.p17_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.j17_1.l1().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.m1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.n1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.l1().t();
      while (_iterator__ex2g4s_1.u()) {
        var element_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.m1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.n1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$15 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.t17(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.k17_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.u17(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.m17_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.v17(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.r17_1 = serializer;
  }
  protoOf(Argless).o17 = function (typeArgumentsSerializers) {
    return this.r17_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.r17_1, this.r17_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.r17_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.p17_1 = provider;
  }
  protoOf(WithTypeArguments).o17 = function (typeArgumentsSerializers) {
    return this.p17_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.w17_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.x17_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.y17_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.z17_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.a18_1 = HashMap_init_$Create$();
    this.b18_1 = false;
  }
  protoOf(SerializersModuleBuilder).s17 = function (kClass, serializer) {
    return this.c18(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).q17 = function (kClass, provider) {
    return this.c18(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).t17 = function (baseClass, actualClass, actualSerializer) {
    this.d18(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).u17 = function (baseClass, defaultSerializerProvider) {
    this.e18(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).v17 = function (baseClass, defaultDeserializerProvider) {
    this.f18(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).g18 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.w17_1.n2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.w17_1.q2(forClass, provider);
    if (isInterface_0(forClass))
      this.b18_1 = true;
  };
  protoOf(SerializersModuleBuilder).c18 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.g18(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.g18.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).e18 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.y17_1.n2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.y17_1.q2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).f18 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.a18_1.n2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.a18_1.q2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).h18 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.un().cp();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.x17_1;
    var value = this_0.n2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.q2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.z17_1;
    var value_0 = this_1.n2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.q2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.n2(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.r2(previousSerializer.un().cp());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.n2(name);
    if (!(previousByName == null) && !equals(previousByName, concreteSerializer)) {
      // Inline function 'kotlin.sequences.find' call
      var tmp0 = asSequence(baseClassSerializers);
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element.n1() === previousByName) {
            tmp$ret$7 = element;
            break $l$block;
          }
        }
        tmp$ret$7 = null;
      }
      var tmp0_safe_receiver = tmp$ret$7;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'Name ' + name + ' is registered in the module but no Kotlin class is associated with it.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var previousClass = tmp_1;
      if (allowOverwrite)
        baseClassSerializers.r2(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.q2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.q2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).d18 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.h18(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.h18.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).pw = function () {
    return new SerialModuleImpl(this.w17_1, this.x17_1, this.y17_1, this.z17_1, this.a18_1, this.b18_1);
  };
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + toString(concreteClass) + ' already registered in the scope of ' + toString(baseClass));
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, objectCreate(protoOf(SerializerAlreadyRegisteredException)));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$_0(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.i18_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.i18_1.equals(tmp0_other_with_cast.i18_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.i18_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.i18_1) + ')';
  };
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterfaceHack(_this__u8e3s4);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().mb()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().ub());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.oz(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().vb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().yb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().tb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().ec(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().sb(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().dc(), FloatArraySerializer()), to(PrimitiveClasses_getInstance().rb(), serializer_5(Companion_instance)), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().qb(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().bc(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().pb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().ac(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().ob(), serializer_7(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().zb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().nb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().xb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().mb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().mb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.j18_1 = $factory;
  }
  protoOf(createCache$1).to = function (key) {
    return this.j18_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.k18_1 = $factory;
  }
  protoOf(createParametrizedCache$1).uo = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.k18_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).vo = get_isNullable;
  protoOf(SerialDescriptorImpl).ep = get_isInline;
  protoOf(AbstractDecoder).jr = decodeSerializableElement$default;
  protoOf(AbstractDecoder).vq = decodeSerializableValue;
  protoOf(AbstractDecoder).mr = decodeSequentially;
  protoOf(AbstractDecoder).or = decodeCollectionSize;
  protoOf(AbstractEncoder).rs = encodeNotNullMark;
  protoOf(AbstractEncoder).ss = beginCollection;
  protoOf(AbstractEncoder).os = encodeSerializableValue;
  protoOf(AbstractEncoder).qs = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ts = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).vo = get_isNullable;
  protoOf(ListLikeDescriptor).ep = get_isInline;
  protoOf(ListLikeDescriptor).gp = get_annotations;
  protoOf(MapLikeDescriptor).vo = get_isNullable;
  protoOf(MapLikeDescriptor).ep = get_isInline;
  protoOf(MapLikeDescriptor).gp = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).vo = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).ep = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).ez = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).vo = get_isNullable;
  protoOf(NothingSerialDescriptor).ep = get_isInline;
  protoOf(NothingSerialDescriptor).gp = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).vo = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).ep = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).gp = get_annotations;
  protoOf(TaggedDecoder).jr = decodeSerializableElement$default;
  protoOf(TaggedDecoder).vq = decodeSerializableValue;
  protoOf(TaggedDecoder).mr = decodeSequentially;
  protoOf(TaggedDecoder).or = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SEALED_getInstance;
  _.$_$.b = STRING_getInstance;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = ENUM_getInstance;
  _.$_$.e = CLASS_getInstance;
  _.$_$.f = LIST_getInstance;
  _.$_$.g = MAP_getInstance;
  _.$_$.h = OBJECT_getInstance;
  _.$_$.i = BooleanSerializer_getInstance;
  _.$_$.j = DoubleSerializer_getInstance;
  _.$_$.k = IntSerializer_getInstance;
  _.$_$.l = LongSerializer_getInstance;
  _.$_$.m = StringSerializer_getInstance;
  _.$_$.n = PolymorphicSerializer_init_$Create$;
  _.$_$.o = SerializationException_init_$Init$_0;
  _.$_$.p = SerializationException_init_$Create$_0;
  _.$_$.q = UnknownFieldException_init_$Create$;
  _.$_$.r = ListSerializer;
  _.$_$.s = MapSerializer;
  _.$_$.t = get_nullable;
  _.$_$.u = serializer_0;
  _.$_$.v = serializer_4;
  _.$_$.w = serializer_2;
  _.$_$.x = serializer_3;
  _.$_$.y = serializer_1;
  _.$_$.z = PolymorphicKind;
  _.$_$.a1 = PrimitiveKind;
  _.$_$.b1 = PrimitiveSerialDescriptor;
  _.$_$.c1 = get_annotations;
  _.$_$.d1 = get_isInline;
  _.$_$.e1 = get_isNullable;
  _.$_$.f1 = SerialDescriptor;
  _.$_$.g1 = ENUM;
  _.$_$.h1 = buildClassSerialDescriptor;
  _.$_$.i1 = buildSerialDescriptor;
  _.$_$.j1 = getContextualDescriptor;
  _.$_$.k1 = AbstractDecoder;
  _.$_$.l1 = AbstractEncoder;
  _.$_$.m1 = CompositeDecoder;
  _.$_$.n1 = CompositeEncoder;
  _.$_$.o1 = Decoder;
  _.$_$.p1 = Encoder;
  _.$_$.q1 = AbstractPolymorphicSerializer;
  _.$_$.r1 = ElementMarker;
  _.$_$.s1 = typeParametersSerializers;
  _.$_$.t1 = GeneratedSerializer;
  _.$_$.u1 = InlinePrimitiveDescriptor;
  _.$_$.v1 = LinkedHashMapSerializer;
  _.$_$.w1 = NamedValueDecoder;
  _.$_$.x1 = PluginGeneratedSerialDescriptor;
  _.$_$.y1 = ReferenceArraySerializer;
  _.$_$.z1 = SerializerFactory;
  _.$_$.a2 = createAnnotatedEnumSerializer;
  _.$_$.b2 = createSimpleEnumSerializer;
  _.$_$.c2 = jsonCachedSerialNames;
  _.$_$.d2 = missingFieldExceptionWithNewMessage;
  _.$_$.e2 = throwArrayMissingFieldException;
  _.$_$.f2 = throwMissingFieldException;
  _.$_$.g2 = EmptySerializersModule_0;
  _.$_$.h2 = SerializersModuleBuilder;
  _.$_$.i2 = contextual;
  _.$_$.j2 = SerializersModuleCollector;
  _.$_$.k2 = DeserializationStrategy;
  _.$_$.l2 = KSerializer;
  _.$_$.m2 = MissingFieldException;
  _.$_$.n2 = SerializableWith;
  _.$_$.o2 = SerializationException;
  _.$_$.p2 = SerializationStrategy;
  _.$_$.q2 = findPolymorphicSerializer;
  _.$_$.r2 = findPolymorphicSerializer_0;
  _.$_$.s2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
