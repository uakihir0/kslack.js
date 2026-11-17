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
  var protoOf = kotlin_kotlin.$_$.dc;
  var initMetadataForInterface = kotlin_kotlin.$_$.jb;
  var VOID = kotlin_kotlin.$_$.c;
  var asList = kotlin_kotlin.$_$.a6;
  var objectCreate = kotlin_kotlin.$_$.cc;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.q2;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var constructCallableReference = kotlin_kotlin.$_$.wa;
  var emptyList = kotlin_kotlin.$_$.w6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g2;
  var lazy = kotlin_kotlin.$_$.zg;
  var KProperty1 = kotlin_kotlin.$_$.bd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.cb;
  var toString = kotlin_kotlin.$_$.gc;
  var initMetadataForClass = kotlin_kotlin.$_$.fb;
  var getKClassFromExpression = kotlin_kotlin.$_$.vc;
  var captureStack = kotlin_kotlin.$_$.oa;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.l4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.n4;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.p4;
  var IllegalArgumentException = kotlin_kotlin.$_$.vf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.cg;
  var isInterface = kotlin_kotlin.$_$.ub;
  var KClass = kotlin_kotlin.$_$.yc;
  var Triple = kotlin_kotlin.$_$.eg;
  var getKClass = kotlin_kotlin.$_$.wc;
  var Pair = kotlin_kotlin.$_$.zf;
  var Entry = kotlin_kotlin.$_$.p5;
  var KtMap = kotlin_kotlin.$_$.r5;
  var KtMutableMap = kotlin_kotlin.$_$.u5;
  var LinkedHashMap = kotlin_kotlin.$_$.m5;
  var HashMap = kotlin_kotlin.$_$.k5;
  var KtSet = kotlin_kotlin.$_$.w5;
  var KtMutableSet = kotlin_kotlin.$_$.v5;
  var LinkedHashSet = kotlin_kotlin.$_$.n5;
  var HashSet = kotlin_kotlin.$_$.l5;
  var Collection = kotlin_kotlin.$_$.j5;
  var KtList = kotlin_kotlin.$_$.o5;
  var KtMutableList = kotlin_kotlin.$_$.s5;
  var ArrayList = kotlin_kotlin.$_$.i5;
  var copyToArray = kotlin_kotlin.$_$.t6;
  var Result = kotlin_kotlin.$_$.ag;
  var ensureNotNull = kotlin_kotlin.$_$.ug;
  var equals = kotlin_kotlin.$_$.ya;
  var getStringHashCode = kotlin_kotlin.$_$.db;
  var isBlank = kotlin_kotlin.$_$.sd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var toList = kotlin_kotlin.$_$.l8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p3;
  var toHashSet = kotlin_kotlin.$_$.i8;
  var toBooleanArray = kotlin_kotlin.$_$.g8;
  var withIndex = kotlin_kotlin.$_$.s8;
  var to = kotlin_kotlin.$_$.fh;
  var toMap = kotlin_kotlin.$_$.n8;
  var lazy_0 = kotlin_kotlin.$_$.ah;
  var contentEquals = kotlin_kotlin.$_$.e6;
  var initMetadataForObject = kotlin_kotlin.$_$.lb;
  var Char = kotlin_kotlin.$_$.nf;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.g;
  var Duration = kotlin_kotlin.$_$.hf;
  var Companion_getInstance = kotlin_kotlin.$_$.t2;
  var Instant = kotlin_kotlin.$_$.if;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u2;
  var Uuid = kotlin_kotlin.$_$.kf;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.v2;
  var toIntOrNull = kotlin_kotlin.$_$.ue;
  var hashCode = kotlin_kotlin.$_$.eb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.v4;
  var isArray = kotlin_kotlin.$_$.mb;
  var arrayIterator = kotlin_kotlin.$_$.ma;
  var coerceAtLeast = kotlin_kotlin.$_$.lc;
  var addAll = kotlin_kotlin.$_$.x5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t3;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k3;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.w3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n3;
  var until = kotlin_kotlin.$_$.qc;
  var step = kotlin_kotlin.$_$.pc;
  var getValue = kotlin_kotlin.$_$.f7;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.r3;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o3;
  var LinkedHashSet_init_$Create$_1 = kotlin_kotlin.$_$.u3;
  var HashMap_init_$Create$_1 = kotlin_kotlin.$_$.l3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.gb;
  var get_lastIndex = kotlin_kotlin.$_$.m7;
  var shiftLeft = kotlin_kotlin.$_$.fa;
  var countTrailingZeroBits = kotlin_kotlin.$_$.sg;
  var getOrNull = kotlin_kotlin.$_$.e7;
  var joinToString = kotlin_kotlin.$_$.j7;
  var indexOf = kotlin_kotlin.$_$.g7;
  var contentToString = kotlin_kotlin.$_$.i6;
  var Enum = kotlin_kotlin.$_$.sf;
  var toString_0 = kotlin_kotlin.$_$.eh;
  var KTypeParameter = kotlin_kotlin.$_$.cd;
  var booleanArray = kotlin_kotlin.$_$.na;
  var emptyMap = kotlin_kotlin.$_$.x6;
  var contentHashCode = kotlin_kotlin.$_$.h6;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.w2;
  var isCharArray = kotlin_kotlin.$_$.pb;
  var copyOf = kotlin_kotlin.$_$.n6;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.m2;
  var isDoubleArray = kotlin_kotlin.$_$.rb;
  var copyOf_0 = kotlin_kotlin.$_$.p6;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.n2;
  var isFloatArray = kotlin_kotlin.$_$.sb;
  var copyOf_1 = kotlin_kotlin.$_$.q6;
  var Companion_instance = kotlin_kotlin.$_$.y2;
  var isLongArray = kotlin_kotlin.$_$.aa;
  var copyOf_2 = kotlin_kotlin.$_$.l6;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.c3;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.s1;
  var ULongArray = kotlin_kotlin.$_$.jg;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.t1;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.p1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.l1;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.q1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.m1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.o2;
  var isIntArray = kotlin_kotlin.$_$.tb;
  var copyOf_3 = kotlin_kotlin.$_$.s6;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.b3;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.j1;
  var UIntArray = kotlin_kotlin.$_$.hg;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.k1;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.g1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.c1;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.h1;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.d1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.p2;
  var isShortArray = kotlin_kotlin.$_$.wb;
  var copyOf_4 = kotlin_kotlin.$_$.k6;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.d3;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.b2;
  var UShortArray = kotlin_kotlin.$_$.lg;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.c2;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.y1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.u1;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.z1;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.v1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.l2;
  var isByteArray = kotlin_kotlin.$_$.ob;
  var copyOf_5 = kotlin_kotlin.$_$.o6;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.a3;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.a1;
  var UByteArray = kotlin_kotlin.$_$.fg;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.b1;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.w;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.t;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.y;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.u;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.k2;
  var isBooleanArray = kotlin_kotlin.$_$.nb;
  var copyOf_6 = kotlin_kotlin.$_$.m6;
  var charArray = kotlin_kotlin.$_$.qa;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.o1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.r1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.f1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.i1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.x1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.a2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.x;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.z;
  var trimIndent = kotlin_kotlin.$_$.ef;
  var Unit = kotlin_kotlin.$_$.ng;
  var charSequenceLength = kotlin_kotlin.$_$.ta;
  var lastOrNull = kotlin_kotlin.$_$.o7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.n7;
  var ULong = kotlin_kotlin.$_$.kg;
  var UInt = kotlin_kotlin.$_$.ig;
  var UByte = kotlin_kotlin.$_$.gg;
  var UShort = kotlin_kotlin.$_$.mg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.bh;
  var asSequence = kotlin_kotlin.$_$.b6;
  var get_js = kotlin_kotlin.$_$.yb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.i7;
  var get_indices_0 = kotlin_kotlin.$_$.h7;
  var mapOf = kotlin_kotlin.$_$.t7;
  var Companion_instance_0 = kotlin_kotlin.$_$.z2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.tg;
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
    return deserializer.ko(this);
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
    return $super === VOID ? this.wr(descriptor, index, deserializer, previousValue) : $super.wr.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.kr(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.jo(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.io().jp();
    if (isNullabilitySupported) {
      return this.ct(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.fs();
    } else {
      this.ft();
      this.ct(serializer, value);
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
    return this.t17(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    $this.mo_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.wo('type', serializer_0(StringCompanionObject_instance).io());
      $this$buildSerialDescriptor.wo('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.lo_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.qo_1 = this$0.mo_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.lo_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.io();
    }, 1, 0, 1);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.lo_1 = baseClass;
    this.mo_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.no_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).xo = function () {
    return this.lo_1;
  };
  protoOf(PolymorphicSerializer).io = function () {
    var tmp0 = this.no_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.lo_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.ap(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.xo());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.zo(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.xo());
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
    this.bp_1 = missingFields;
    this.cp_1 = serialName;
  }
  protoOf(MissingFieldException).dp = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.bp_1, this.cp_1);
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
      if (isInterface_0(rootClass) && !(_this__u8e3s4.fp(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.ep()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.fp(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.gp(rootClass, serializers) : tmp3_elvis_lhs;
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().hp(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().hp(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().ip(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().ip(clazz, types);
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
    if (_this__u8e3s4.io().jp()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.fp(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.io();
    }
    return tmp;
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.op_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.kp_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.np_1 = original;
    this.op_1 = kClass;
    this.pp_1 = this.np_1.qp() + '<' + this.op_1.o() + '>';
  }
  protoOf(ContextDescriptor).qp = function () {
    return this.pp_1;
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
    return equals(this.np_1, another.np_1) && another.op_1.equals(this.op_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.op_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.pp_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.op_1) + ', original: ' + toString(this.np_1) + ')';
  };
  protoOf(ContextDescriptor).rp = function () {
    return this.np_1.rp();
  };
  protoOf(ContextDescriptor).jp = function () {
    return this.np_1.jp();
  };
  protoOf(ContextDescriptor).sp = function () {
    return this.np_1.sp();
  };
  protoOf(ContextDescriptor).tp = function () {
    return this.np_1.tp();
  };
  protoOf(ContextDescriptor).up = function () {
    return this.np_1.up();
  };
  protoOf(ContextDescriptor).vp = function (index) {
    return this.np_1.vp(index);
  };
  protoOf(ContextDescriptor).wp = function (name) {
    return this.np_1.wp(name);
  };
  protoOf(ContextDescriptor).xp = function (index) {
    return this.np_1.xp(index);
  };
  protoOf(ContextDescriptor).yp = function (index) {
    return this.np_1.yp(index);
  };
  protoOf(ContextDescriptor).zp = function (index) {
    return this.np_1.zp(index);
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
    this.bq_1 = $this_elementNames;
    this.aq_1 = $this_elementNames.tp();
  }
  protoOf(elementNames$1).u = function () {
    return this.aq_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.bq_1.tp();
    var _unary__edvuaz = this.aq_1;
    this.aq_1 = _unary__edvuaz - 1 | 0;
    return this.bq_1.vp(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.cq_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.cq_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.eq_1 = $this_elementDescriptors;
    this.dq_1 = $this_elementDescriptors.tp();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.dq_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.eq_1.tp();
    var _unary__edvuaz = this.dq_1;
    this.dq_1 = _unary__edvuaz - 1 | 0;
    return this.eq_1.yp(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.fq_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.fq_1);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.ro_1.d1(), toList(typeParameters), sdBuilder);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.ro_1.d1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.oo_1 = serialName;
    this.po_1 = false;
    this.qo_1 = emptyList();
    this.ro_1 = ArrayList_init_$Create$_0();
    this.so_1 = HashSet_init_$Create$();
    this.to_1 = ArrayList_init_$Create$_0();
    this.uo_1 = ArrayList_init_$Create$_0();
    this.vo_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).gq = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.so_1.c1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.oo_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.ro_1.c1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.to_1.c1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.uo_1.c1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.vo_1.c1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).wo = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.gq(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.gq.call(this, elementName, descriptor, annotations, isOptional);
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
    var tmp0 = $this.sq_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.rq_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 2);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.hq_1 = serialName;
    this.iq_1 = kind;
    this.jq_1 = elementsCount;
    this.kq_1 = builder.qo_1;
    this.lq_1 = toHashSet(builder.ro_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.ro_1;
    tmp.mq_1 = copyToArray(this_0);
    this.nq_1 = compactArray(builder.to_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.uo_1;
    tmp_0.oq_1 = copyToArray(this_1);
    this.pq_1 = toBooleanArray(builder.vo_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.mq_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.ue_1, item.te_1);
      destination.c1(tmp$ret$4);
    }
    tmp_1.qq_1 = toMap(destination);
    this.rq_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.sq_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).qp = function () {
    return this.hq_1;
  };
  protoOf(SerialDescriptorImpl).rp = function () {
    return this.iq_1;
  };
  protoOf(SerialDescriptorImpl).tp = function () {
    return this.jq_1;
  };
  protoOf(SerialDescriptorImpl).up = function () {
    return this.kq_1;
  };
  protoOf(SerialDescriptorImpl).tq = function () {
    return this.lq_1;
  };
  protoOf(SerialDescriptorImpl).vp = function (index) {
    return getChecked(this.mq_1, index);
  };
  protoOf(SerialDescriptorImpl).wp = function (name) {
    var tmp0_elvis_lhs = this.qq_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).xp = function (index) {
    return getChecked(this.oq_1, index);
  };
  protoOf(SerialDescriptorImpl).yp = function (index) {
    return getChecked(this.nq_1, index);
  };
  protoOf(SerialDescriptorImpl).zp = function (index) {
    return getChecked_0(this.pq_1, index);
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
      if (!(this.qp() === other.qp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.rq_1, other.rq_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.tp() === other.tp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.tp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.yp(index).qp() === other.yp(index).qp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.yp(index).rp(), other.yp(index).rp())) {
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
  protoOf(AbstractDecoder).uq = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).vq = function () {
    return true;
  };
  protoOf(AbstractDecoder).wq = function () {
    return null;
  };
  protoOf(AbstractDecoder).xq = function () {
    var tmp = this.uq();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yq = function () {
    var tmp = this.uq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zq = function () {
    var tmp = this.uq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ar = function () {
    var tmp = this.uq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).br = function () {
    var tmp = this.uq();
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cr = function () {
    var tmp = this.uq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).dr = function () {
    var tmp = this.uq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).er = function () {
    var tmp = this.uq();
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).fr = function () {
    var tmp = this.uq();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).gr = function (enumDescriptor) {
    var tmp = this.uq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).hr = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ir = function (deserializer, previousValue) {
    return this.jr(deserializer);
  };
  protoOf(AbstractDecoder).kr = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).lr = function (descriptor) {
  };
  protoOf(AbstractDecoder).mr = function (descriptor, index) {
    return this.xq();
  };
  protoOf(AbstractDecoder).nr = function (descriptor, index) {
    return this.yq();
  };
  protoOf(AbstractDecoder).or = function (descriptor, index) {
    return this.zq();
  };
  protoOf(AbstractDecoder).pr = function (descriptor, index) {
    return this.ar();
  };
  protoOf(AbstractDecoder).qr = function (descriptor, index) {
    return this.br();
  };
  protoOf(AbstractDecoder).rr = function (descriptor, index) {
    return this.cr();
  };
  protoOf(AbstractDecoder).sr = function (descriptor, index) {
    return this.dr();
  };
  protoOf(AbstractDecoder).tr = function (descriptor, index) {
    return this.er();
  };
  protoOf(AbstractDecoder).ur = function (descriptor, index) {
    return this.fr();
  };
  protoOf(AbstractDecoder).vr = function (descriptor, index) {
    return this.hr(descriptor.yp(index));
  };
  protoOf(AbstractDecoder).wr = function (descriptor, index, deserializer, previousValue) {
    return this.ir(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).yr = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.io().jp();
    var tmp;
    if (isNullabilitySupported || this.vq()) {
      tmp = this.ir(deserializer, previousValue);
    } else {
      tmp = this.wq();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).kr = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).lr = function (descriptor) {
  };
  protoOf(AbstractEncoder).ds = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).es = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).fs = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).gs = function (value) {
    return this.es(value);
  };
  protoOf(AbstractEncoder).hs = function (value) {
    return this.es(value);
  };
  protoOf(AbstractEncoder).is = function (value) {
    return this.es(value);
  };
  protoOf(AbstractEncoder).js = function (value) {
    return this.es(value);
  };
  protoOf(AbstractEncoder).ks = function (value) {
    return this.es(value);
  };
  protoOf(AbstractEncoder).ls = function (value) {
    return this.es(value);
  };
  protoOf(AbstractEncoder).ms = function (value) {
    return this.es(value);
  };
  protoOf(AbstractEncoder).ns = function (value) {
    return this.es(new Char(value));
  };
  protoOf(AbstractEncoder).os = function (value) {
    return this.es(value);
  };
  protoOf(AbstractEncoder).ps = function (enumDescriptor, index) {
    return this.es(index);
  };
  protoOf(AbstractEncoder).qs = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).rs = function (descriptor, index, value) {
    if (this.ds(descriptor, index)) {
      this.gs(value);
    }
  };
  protoOf(AbstractEncoder).ss = function (descriptor, index, value) {
    if (this.ds(descriptor, index)) {
      this.hs(value);
    }
  };
  protoOf(AbstractEncoder).ts = function (descriptor, index, value) {
    if (this.ds(descriptor, index)) {
      this.is(value);
    }
  };
  protoOf(AbstractEncoder).us = function (descriptor, index, value) {
    if (this.ds(descriptor, index)) {
      this.js(value);
    }
  };
  protoOf(AbstractEncoder).vs = function (descriptor, index, value) {
    if (this.ds(descriptor, index)) {
      this.ks(value);
    }
  };
  protoOf(AbstractEncoder).ws = function (descriptor, index, value) {
    if (this.ds(descriptor, index)) {
      this.ls(value);
    }
  };
  protoOf(AbstractEncoder).xs = function (descriptor, index, value) {
    if (this.ds(descriptor, index)) {
      this.ms(value);
    }
  };
  protoOf(AbstractEncoder).ys = function (descriptor, index, value) {
    if (this.ds(descriptor, index)) {
      this.ns(value);
    }
  };
  protoOf(AbstractEncoder).zs = function (descriptor, index, value) {
    if (this.ds(descriptor, index)) {
      this.os(value);
    }
  };
  protoOf(AbstractEncoder).at = function (descriptor, index) {
    return this.ds(descriptor, index) ? this.qs(descriptor.yp(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).bt = function (descriptor, index, serializer, value) {
    if (this.ds(descriptor, index)) {
      this.ct(serializer, value);
    }
  };
  protoOf(AbstractEncoder).dt = function (descriptor, index, serializer, value) {
    if (this.ds(descriptor, index)) {
      this.et(serializer, value);
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
    var klassName = compositeDecoder.ur($this.io(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.xr($this.io(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).yo = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.io();
    var composite = encoder.kr(descriptor);
    composite.zs(this.io(), 0, actualSerializer.io().qp());
    var tmp = this.io();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$2 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.bt(tmp, 1, tmp$ret$2, value);
    composite.lr(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).jo = function (encoder, value) {
    return this.yo(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).ko = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.io();
    var composite = decoder.kr(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.as()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.bs(this.io());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.ur(this.io(), index);
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
            var serializer = findPolymorphicSerializer_0(this, composite, klassName);
            value = composite.xr(this.io(), index, serializer);
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
    composite.lr(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).zo = function (decoder, klassName) {
    return decoder.zr().it(this.xo(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).ap = function (encoder, value) {
    return encoder.zr().jt(this.xo(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.o();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.kt_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).io = function () {
    return this.kt_1;
  };
  protoOf(NothingSerializer_0).lt = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).jo = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.lt(encoder, tmp);
  };
  protoOf(NothingSerializer_0).ko = function (decoder) {
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
    this.mt_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).io = function () {
    return this.mt_1;
  };
  protoOf(DurationSerializer).nt = function (encoder, value) {
    encoder.os(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).jo = function (encoder, value) {
    return this.nt(encoder, value instanceof Duration ? value.wk_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).ot = function (decoder) {
    return Companion_getInstance().xk(decoder.fr());
  };
  protoOf(DurationSerializer).ko = function (decoder) {
    return new Duration(this.ot(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.pt_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).io = function () {
    return this.pt_1;
  };
  protoOf(InstantSerializer).qt = function (encoder, value) {
    encoder.os(value.toString());
  };
  protoOf(InstantSerializer).jo = function (encoder, value) {
    return this.qt(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).ko = function (decoder) {
    return Companion_getInstance_0().jl(decoder.fr());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.rt_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).io = function () {
    return this.rt_1;
  };
  protoOf(UuidSerializer).st = function (encoder, value) {
    encoder.os(value.toString());
  };
  protoOf(UuidSerializer).jo = function (encoder, value) {
    return this.st(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).ko = function (decoder) {
    return Companion_getInstance_1().pm(decoder.fr());
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
  protoOf(ArrayClassDesc).qp = function () {
    return 'kotlin.Array';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).qp = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).qp = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).qp = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.vt_1 = elementDescriptor;
    this.wt_1 = 1;
  }
  protoOf(ListLikeDescriptor).rp = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).tp = function () {
    return this.wt_1;
  };
  protoOf(ListLikeDescriptor).vp = function (index) {
    requireNonNegativeIndex(index, this.qp());
    return index.toString();
  };
  protoOf(ListLikeDescriptor).wp = function (name) {
    var tmp0_safe_receiver = toIntOrNull(name);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver >= 0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
  };
  protoOf(ListLikeDescriptor).zp = function (index) {
    requireNonNegativeIndex(index, this.qp());
    return false;
  };
  protoOf(ListLikeDescriptor).xp = function (index) {
    requireNonNegativeIndex(index, this.qp());
    return emptyList();
  };
  protoOf(ListLikeDescriptor).yp = function (index) {
    requireNonNegativeIndex(index, this.qp());
    return this.vt_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.vt_1, other.vt_1) && this.qp() === other.qp())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.vt_1), 31) + getStringHashCode(this.qp()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.qp() + '(' + toString(this.vt_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.xt_1 = serialName;
    this.yt_1 = keyDescriptor;
    this.zt_1 = valueDescriptor;
    this.au_1 = 2;
  }
  protoOf(MapLikeDescriptor).qp = function () {
    return this.xt_1;
  };
  protoOf(MapLikeDescriptor).rp = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).tp = function () {
    return this.au_1;
  };
  protoOf(MapLikeDescriptor).vp = function (index) {
    requireNonNegativeIndex(index, this.qp());
    return index.toString();
  };
  protoOf(MapLikeDescriptor).wp = function (name) {
    var tmp0_safe_receiver = toIntOrNull(name);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver >= 0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
  };
  protoOf(MapLikeDescriptor).zp = function (index) {
    requireNonNegativeIndex(index, this.qp());
    return false;
  };
  protoOf(MapLikeDescriptor).xp = function (index) {
    requireNonNegativeIndex(index, this.qp());
    return emptyList();
  };
  protoOf(MapLikeDescriptor).yp = function (index) {
    requireNonNegativeIndex(index, this.qp());
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.yt_1;
        break;
      case 1:
        tmp = this.zt_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.qp() === other.qp()))
      return false;
    if (!equals(this.yt_1, other.yt_1))
      return false;
    if (!equals(this.zt_1, other.zt_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.qp());
    result = imul(31, result) + hashCode(this.yt_1) | 0;
    result = imul(31, result) + hashCode(this.zt_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.qp() + '(' + toString(this.yt_1) + ', ' + toString(this.zt_1) + ')';
  };
  function requireNonNegativeIndex(index, name) {
    if (index < 0)
      throw IndexOutOfBoundsException_init_$Create$('Illegal index ' + index + ', ' + name + ' expects only non-negative indices');
  }
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.ju_1 = primitive.qp() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).qp = function () {
    return this.ju_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.lu_1 = kClass;
    this.mu_1 = new ArrayClassDesc(eSerializer.io());
  }
  protoOf(ReferenceArraySerializer).io = function () {
    return this.mu_1;
  };
  protoOf(ReferenceArraySerializer).nu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).ou = function (_this__u8e3s4) {
    return this.nu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).pu = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).qu = function (_this__u8e3s4) {
    return this.pu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ru = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.arrayListOf' call
      return ArrayList_init_$Create$_0();
    }
    return ArrayList_init_$Create$(initialCapacityHint);
  };
  protoOf(ReferenceArraySerializer).su = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(ReferenceArraySerializer).tu = function (_this__u8e3s4) {
    return this.su(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).uu = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.lu_1);
  };
  protoOf(ReferenceArraySerializer).vu = function (_this__u8e3s4) {
    return this.uu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).wu = function (_this__u8e3s4, expectedSize) {
    var expectedCapacity = coerceAtLeast(expectedSize, 0);
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$(expectedCapacity);
    addAll(this_0, _this__u8e3s4);
    return this_0;
  };
  protoOf(ReferenceArraySerializer).xu = function (_this__u8e3s4, expectedSize) {
    return this.wu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ReferenceArraySerializer).yu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.x2(index, element);
  };
  protoOf(ReferenceArraySerializer).zu = function (_this__u8e3s4, index, element) {
    return this.yu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.iv_1 = new LinkedHashMapClassDesc(kSerializer.io(), vSerializer.io());
  }
  protoOf(LinkedHashMapSerializer).io = function () {
    return this.iv_1;
  };
  protoOf(LinkedHashMapSerializer).jv = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(LinkedHashMapSerializer).ou = function (_this__u8e3s4) {
    return this.jv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).kv = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(LinkedHashMapSerializer).qu = function (_this__u8e3s4) {
    return this.kv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ru = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return LinkedHashMap_init_$Create$();
    return newLinkedHashMap(initialCapacityHint);
  };
  protoOf(LinkedHashMapSerializer).lv = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.d1(), 2);
  };
  protoOf(LinkedHashMapSerializer).tu = function (_this__u8e3s4) {
    return this.lv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).mv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).vu = function (_this__u8e3s4) {
    return this.mv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).nv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof LinkedHashMap)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.d1())
      return LinkedHashMap_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newLinkedHashMap(expectedSize);
    this_0.b3(_this__u8e3s4);
    return this_0;
  };
  protoOf(LinkedHashMapSerializer).xu = function (_this__u8e3s4, expectedSize) {
    return this.nv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.tv_1 = new ArrayListClassDesc(element.io());
  }
  protoOf(ArrayListSerializer).io = function () {
    return this.tv_1;
  };
  protoOf(ArrayListSerializer).ru = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.arrayListOf' call
      return ArrayList_init_$Create$_0();
    }
    return ArrayList_init_$Create$(initialCapacityHint);
  };
  protoOf(ArrayListSerializer).uv = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(ArrayListSerializer).tu = function (_this__u8e3s4) {
    return this.uv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).vv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).vu = function (_this__u8e3s4) {
    return this.vv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).wv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof ArrayList) {
      // Inline function 'kotlin.also' call
      _this__u8e3s4.p5(expectedSize);
      return _this__u8e3s4;
    }
    if (expectedSize === _this__u8e3s4.d1())
      return ArrayList_init_$Create$_1(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$(expectedSize);
    this_0.h1(_this__u8e3s4);
    return this_0;
  };
  protoOf(ArrayListSerializer).xu = function (_this__u8e3s4, expectedSize) {
    return this.wv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ArrayListSerializer).xv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.x2(index, element);
  };
  protoOf(ArrayListSerializer).zu = function (_this__u8e3s4, index, element) {
    return this.xv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.cw_1 = new HashSetClassDesc(eSerializer.io());
  }
  protoOf(HashSetSerializer).io = function () {
    return this.cw_1;
  };
  protoOf(HashSetSerializer).ru = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return HashSet_init_$Create$();
    return newHashSet(initialCapacityHint);
  };
  protoOf(HashSetSerializer).dw = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(HashSetSerializer).tu = function (_this__u8e3s4) {
    return this.dw(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ew = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).vu = function (_this__u8e3s4) {
    return this.ew(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).fw = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof HashSet)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.d1())
      return HashSet_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newHashSet(expectedSize);
    this_0.h1(_this__u8e3s4);
    return this_0;
  };
  protoOf(HashSetSerializer).xu = function (_this__u8e3s4, expectedSize) {
    return this.fw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(HashSetSerializer).gw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(HashSetSerializer).zu = function (_this__u8e3s4, index, element) {
    return this.gw(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.iw_1 = new LinkedHashSetClassDesc(eSerializer.io());
  }
  protoOf(LinkedHashSetSerializer).io = function () {
    return this.iw_1;
  };
  protoOf(LinkedHashSetSerializer).ru = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.linkedSetOf' call
      return LinkedHashSet_init_$Create$();
    }
    return newLinkedHashSet(initialCapacityHint);
  };
  protoOf(LinkedHashSetSerializer).jw = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(LinkedHashSetSerializer).tu = function (_this__u8e3s4) {
    return this.jw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).kw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).vu = function (_this__u8e3s4) {
    return this.kw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).fw = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof LinkedHashSet)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.d1())
      return LinkedHashSet_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newLinkedHashSet(expectedSize);
    this_0.h1(_this__u8e3s4);
    return this_0;
  };
  protoOf(LinkedHashSetSerializer).xu = function (_this__u8e3s4, expectedSize) {
    return this.fw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(LinkedHashSetSerializer).lw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(LinkedHashSetSerializer).zu = function (_this__u8e3s4, index, element) {
    return this.lw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.ow_1 = new HashMapClassDesc(kSerializer.io(), vSerializer.io());
  }
  protoOf(HashMapSerializer).io = function () {
    return this.ow_1;
  };
  protoOf(HashMapSerializer).jv = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(HashMapSerializer).ou = function (_this__u8e3s4) {
    return this.jv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).kv = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(HashMapSerializer).qu = function (_this__u8e3s4) {
    return this.kv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).ru = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return HashMap_init_$Create$();
    return newHashMap(initialCapacityHint);
  };
  protoOf(HashMapSerializer).pw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.d1(), 2);
  };
  protoOf(HashMapSerializer).tu = function (_this__u8e3s4) {
    return this.pw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).qw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).vu = function (_this__u8e3s4) {
    return this.qw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).nv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof HashMap)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.d1())
      return HashMap_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newHashMap(expectedSize);
    this_0.b3(_this__u8e3s4);
    return this_0;
  };
  protoOf(HashMapSerializer).xu = function (_this__u8e3s4, expectedSize) {
    return this.nv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.av_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).bv = function (encoder, value) {
    var size = this.ou(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.io();
    var composite = encoder.gt(descriptor, size);
    var iterator = this.qu(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.bt(this.io(), index, this.av_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.lr(descriptor);
  };
  protoOf(CollectionLikeSerializer).jo = function (encoder, value) {
    return this.bv(encoder, value);
  };
  protoOf(CollectionLikeSerializer).cv = function (decoder, builder, startIndex, size) {
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
        this.dv(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).dv = function (decoder, index, builder, checkIndex) {
    this.zu(builder, index, decoder.xr(this.io(), index, this.av_1));
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ov_1 = keySerializer;
    this.pv_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).qv = function (decoder, builder, startIndex, size) {
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
        this.rv(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).cv = function (decoder, builder, startIndex, size) {
    return this.qv(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).rv = function (decoder, index, builder, checkIndex) {
    var key = decoder.xr(this.io(), index, this.ov_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.bs(this.io());
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
    if (builder.q2(key)) {
      var tmp_2 = this.pv_1.io().rp();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.wr(this.io(), vIndex, this.pv_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.xr(this.io(), vIndex, this.pv_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.z2(key, value);
  };
  protoOf(MapLikeSerializer).dv = function (decoder, index, builder, checkIndex) {
    return this.rv(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).bv = function (encoder, value) {
    var size = this.ou(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.io();
    var composite = encoder.gt(descriptor, size);
    var iterator = this.qu(value);
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
      var tmp = this.io();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.bt(tmp, _unary__edvuaz, this.ov_1, k);
      var tmp_0 = this.io();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.bt(tmp_0, _unary__edvuaz_0, this.pv_1, v);
    }
    composite.lr(descriptor);
  };
  protoOf(MapLikeSerializer).jo = function (encoder, value) {
    return this.bv(encoder, value);
  };
  function newLinkedHashMap(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return LinkedHashMap_init_$Create$_1(capacity);
  }
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).zv = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(CollectionSerializer).ou = function (_this__u8e3s4) {
    return this.zv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).aw = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(CollectionSerializer).qu = function (_this__u8e3s4) {
    return this.aw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function newHashSet(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return HashSet_init_$Create$_1(capacity);
  }
  function newLinkedHashSet(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return LinkedHashSet_init_$Create$_1(capacity);
  }
  function newHashMap(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return HashMap_init_$Create$_1(capacity);
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).fv = function (decoder, previous) {
    var compositeDecoder = decoder.kr(this.io());
    var expectedSize = compositeDecoder.cs(this.io());
    // Inline function 'kotlin.require' call
    if (!(expectedSize >= -1)) {
      var message = 'Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: ' + expectedSize;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (!(previous == null)) {
      tmp = this.xu(previous, this.ou(previous) + coerceAtLeast(expectedSize, 0) | 0);
    } else {
      tmp = this.ru(expectedSize);
    }
    var builder = tmp;
    var startIndex = this.tu(builder);
    if (compositeDecoder.as()) {
      this.cv(compositeDecoder, builder, startIndex, expectedSize);
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.bs(this.io());
        if (index === -1)
          break $l$loop;
        this.ev(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.lr(this.io());
    return this.vu(builder);
  };
  protoOf(AbstractCollectionSerializer).ko = function (decoder) {
    return this.fv(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).ev = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.dv(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.dv.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.sw_1 = new PrimitiveArrayDescriptor(primitiveSerializer.io());
  }
  protoOf(PrimitiveArraySerializer).io = function () {
    return this.sw_1;
  };
  protoOf(PrimitiveArraySerializer).tw = function (_this__u8e3s4) {
    return _this__u8e3s4.uw();
  };
  protoOf(PrimitiveArraySerializer).tu = function (_this__u8e3s4) {
    return this.tw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).vw = function (_this__u8e3s4) {
    return _this__u8e3s4.ww();
  };
  protoOf(PrimitiveArraySerializer).vu = function (_this__u8e3s4) {
    return this.vw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).xw = function (_this__u8e3s4) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).qu = function (_this__u8e3s4) {
    return this.xw(_this__u8e3s4);
  };
  protoOf(PrimitiveArraySerializer).yw = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).zu = function (_this__u8e3s4, index, element) {
    return this.yw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).ru = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return this.zw();
    return this.ax(initialCapacityHint);
  };
  protoOf(PrimitiveArraySerializer).dx = function (encoder, value) {
    var size = this.ou(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.sw_1;
    var composite = encoder.gt(descriptor, size);
    this.cx(composite, value, size);
    composite.lr(descriptor);
  };
  protoOf(PrimitiveArraySerializer).jo = function (encoder, value) {
    return this.dx(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).bv = function (encoder, value) {
    return this.dx(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).ko = function (decoder) {
    return this.fv(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).fx = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.uw() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ex(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.ex.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_1 = this;
    this.gx_1 = new BigInt64Array(0);
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
    $this.kx_1[slot] = $this.kx_1[slot] | shiftLeft(1n, offsetInSlot);
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.kx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.kx_1[slot];
        while (!(slotMarks === -1n)) {
          var indexInSlot = countTrailingZeroBits(~slotMarks);
          slotMarks = slotMarks | shiftLeft(1n, indexInSlot);
          var index = slotOffset + indexInSlot | 0;
          if ($this.ix_1($this.hx_1, index)) {
            $this.kx_1[slot] = slotMarks;
            return index;
          }
        }
        $this.kx_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.hx_1 = descriptor;
    this.ix_1 = readIfAbsent;
    var elementsCount = this.hx_1.tp();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = 0n;
      } else {
        tmp_0 = shiftLeft(-1n, elementsCount);
      }
      tmp.jx_1 = tmp_0;
      this.kx_1 = Companion_getInstance_7().gx_1;
    } else {
      this.jx_1 = 0n;
      this.kx_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).lx = function (index) {
    if (index < 64) {
      this.jx_1 = this.jx_1 | shiftLeft(1n, index);
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).mx = function () {
    var elementsCount = this.hx_1.tp();
    while (!(this.jx_1 === -1n)) {
      var index = countTrailingZeroBits(~this.jx_1);
      this.jx_1 = this.jx_1 | shiftLeft(1n, index);
      if (this.ix_1(this.hx_1, index)) {
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
        descriptor.zx(element);
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
      descriptor.ay(elementName);
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
          descriptor.by(element_0);
        }
      }
    }
    return EnumSerializer_init_$Create$(serialName, values, descriptor);
  }
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.py_1;
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
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.vp(tmp_2), OBJECT_getInstance(), []);
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
    this.oy_1 = ENUM_getInstance();
    var tmp = this;
    tmp.py_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).rp = function () {
    return this.oy_1;
  };
  protoOf(EnumDescriptor).yp = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.rp() === ENUM_getInstance()))
      return false;
    if (!(this.qp() === other.qp()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.qp() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.qp());
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
    $this.ty_1 = descriptor;
    return $this;
  }
  function EnumSerializer_init_$Create$(serialName, values, descriptor) {
    return EnumSerializer_init_$Init$(serialName, values, descriptor, objectCreate(protoOf(EnumSerializer)));
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.sy_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.sy_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.ay(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.ty_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.io();
    }, 1, 0, 4);
  }
  function EnumSerializer(serialName, values) {
    this.sy_1 = values;
    this.ty_1 = null;
    var tmp = this;
    tmp.uy_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).io = function () {
    var tmp0 = this.uy_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).vy = function (encoder, value) {
    var index = indexOf(this.sy_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.io().qp() + ', ' + ('must be one of ' + contentToString(this.sy_1)));
    }
    encoder.ps(this.io(), index);
  };
  protoOf(EnumSerializer).jo = function (encoder, value) {
    return this.vy(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).ko = function (decoder) {
    var index = decoder.gr(this.io());
    if (!(0 <= index ? index <= (this.sy_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.io().qp() + ' enum values, ' + ('values size is ' + this.sy_1.length));
    }
    return this.sy_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.io().qp() + '>';
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.iz_1 = true;
  }
  protoOf(InlineClassDescriptor).sp = function () {
    return this.iz_1;
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
      if (!(this.qp() === other.qp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.iz_1 && contentEquals(this.qy(), other.qy()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.tp() === other.tp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.tp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.yp(index).qp() === other.yp(index).qp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.yp(index).rp(), other.yp(index).rp())) {
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
    this.jz_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).kz = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.jz_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).io = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).jo = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ko = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.dp(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.mz_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).zr = function () {
    return this.mz_1;
  };
  protoOf(NoOpEncoder).es = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).fs = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).gs = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).hs = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).is = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).js = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ks = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ls = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ms = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ns = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).os = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ps = function (enumDescriptor, index) {
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
    this.nz_1 = OBJECT_getInstance();
    this.oz_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).rp = function () {
    return this.nz_1;
  };
  protoOf(NothingSerialDescriptor).qp = function () {
    return this.oz_1;
  };
  protoOf(NothingSerialDescriptor).tp = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).vp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).wp = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).zp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).yp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).xp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.oz_1) + imul(31, this.nz_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.pz_1 = serializer;
    this.qz_1 = new SerialDescriptorForNullable(this.pz_1.io());
  }
  protoOf(NullableSerializer).io = function () {
    return this.qz_1;
  };
  protoOf(NullableSerializer).rz = function (encoder, value) {
    if (!(value == null)) {
      encoder.ft();
      encoder.ct(this.pz_1, value);
    } else {
      encoder.fs();
    }
  };
  protoOf(NullableSerializer).jo = function (encoder, value) {
    return this.rz(encoder, value);
  };
  protoOf(NullableSerializer).ko = function (decoder) {
    return decoder.vq() ? decoder.jr(this.pz_1) : decoder.wq();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.pz_1, other.pz_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.pz_1);
  };
  function SerialDescriptorForNullable(original) {
    this.kp_1 = original;
    this.lp_1 = this.kp_1.qp() + '?';
    this.mp_1 = cachedSerialNames(this.kp_1);
  }
  protoOf(SerialDescriptorForNullable).qp = function () {
    return this.lp_1;
  };
  protoOf(SerialDescriptorForNullable).tq = function () {
    return this.mp_1;
  };
  protoOf(SerialDescriptorForNullable).jp = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.kp_1, other.kp_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.kp_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.kp_1), 31);
  };
  protoOf(SerialDescriptorForNullable).rp = function () {
    return this.kp_1.rp();
  };
  protoOf(SerialDescriptorForNullable).sp = function () {
    return this.kp_1.sp();
  };
  protoOf(SerialDescriptorForNullable).tp = function () {
    return this.kp_1.tp();
  };
  protoOf(SerialDescriptorForNullable).up = function () {
    return this.kp_1.up();
  };
  protoOf(SerialDescriptorForNullable).vp = function (index) {
    return this.kp_1.vp(index);
  };
  protoOf(SerialDescriptorForNullable).wp = function (name) {
    return this.kp_1.wp(name);
  };
  protoOf(SerialDescriptorForNullable).xp = function (index) {
    return this.kp_1.xp(index);
  };
  protoOf(SerialDescriptorForNullable).yp = function (index) {
    return this.kp_1.yp(index);
  };
  protoOf(SerialDescriptorForNullable).zp = function (index) {
    return this.kp_1.zp(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.qo_1 = this$0.tz_1;
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
      return p0.io();
    }, 1, 0, 5);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.sz_1 = objectInstance;
    this.tz_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.uz_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).io = function () {
    var tmp0 = this.uz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).yo = function (encoder, value) {
    encoder.kr(this.io()).lr(this.io());
  };
  protoOf(ObjectSerializer).jo = function (encoder, value) {
    return this.yo(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).ko = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.io();
    var composite = decoder.kr(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.as()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.bs(this.io());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.lr(descriptor);
    return this.sz_1;
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
    var tmp0 = _this__u8e3s4.wi_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.wi_1);
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
      return _this__u8e3s4.tq();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.tp());
    var inductionVariable = 0;
    var last = _this__u8e3s4.tp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.vp(i);
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
          var element = descriptor.vp(i);
          missingFields.c1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.qp());
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
                var element = descriptor.vp(imul(maskSlot, 32) + i | 0);
                missingFields.c1(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.qp());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.wx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.yx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.rx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.rx_1[i];
        indices.z2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ox_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kz();
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
      var tmp0_safe_receiver = this$0.ox_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lz();
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
          var tmp$ret$2 = item.io();
          destination.c1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.qy();
    }, 1, 0, 7);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.qy());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 8);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.nx_1 = serialName;
    this.ox_1 = generatedSerializer;
    this.px_1 = elementsCount;
    this.qx_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.px_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.rx_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.px_1;
    tmp_3.sx_1 = Array(size);
    this.tx_1 = null;
    this.ux_1 = booleanArray(this.px_1);
    this.vx_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.wx_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.xx_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.yx_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).qp = function () {
    return this.nx_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).tp = function () {
    return this.px_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).rp = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).up = function () {
    var tmp0_elvis_lhs = this.tx_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).tq = function () {
    return this.vx_1.t2();
  };
  protoOf(PluginGeneratedSerialDescriptor).qy = function () {
    var tmp0 = this.xx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ry = function (name, isOptional) {
    this.qx_1 = this.qx_1 + 1 | 0;
    this.rx_1[this.qx_1] = name;
    this.ux_1[this.qx_1] = isOptional;
    this.sx_1[this.qx_1] = null;
    if (this.qx_1 === (this.px_1 - 1 | 0)) {
      this.vx_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).ay = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ry(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ry.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).by = function (annotation) {
    // Inline function 'kotlin.let' call
    var it = this.sx_1[this.qx_1];
    var tmp;
    if (it == null) {
      var result = ArrayList_init_$Create$(1);
      this.sx_1[this.qx_1] = result;
      tmp = result;
    } else {
      tmp = it;
    }
    var list = tmp;
    list.c1(annotation);
  };
  protoOf(PluginGeneratedSerialDescriptor).zx = function (a) {
    if (this.tx_1 == null) {
      this.tx_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.tx_1).c1(a);
  };
  protoOf(PluginGeneratedSerialDescriptor).yp = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).io();
  };
  protoOf(PluginGeneratedSerialDescriptor).zp = function (index) {
    return getChecked_0(this.ux_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).xp = function (index) {
    var tmp0_elvis_lhs = getChecked(this.sx_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).vp = function (index) {
    return getChecked(this.rx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).wp = function (name) {
    var tmp0_elvis_lhs = this.vx_1.s2(name);
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
      if (!(this.qp() === other.qp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.qy(), other.qy())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.tp() === other.tp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.tp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.yp(index).qp() === other.yp(index).qp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.yp(index).rp(), other.yp(index).rp())) {
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
    var result = getStringHashCode(_this__u8e3s4.qp());
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
      var tmp0_safe_receiver = element.qp();
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
      var tmp0_safe_receiver_0 = element_0.rp();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.tp());
    var tmp_0 = _this__u8e3s4.qp() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.vp(i) + ': ' + $this_toStringImpl.yp(i).qp();
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
  protoOf(CharArraySerializer_0).yz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.yz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).zz = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return CharArrayBuilder_init_$Create$(_this__u8e3s4);
    return new CharArrayBuilder(copyOf(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(CharArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.zz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(CharArraySerializer_0).ax = function (size) {
    return CharArrayBuilder_init_$Create$_0(size);
  };
  protoOf(CharArraySerializer_0).zw = function () {
    return CharArrayBuilder_init_$Create$_1();
  };
  protoOf(CharArraySerializer_0).a10 = function (decoder, index, builder, checkIndex) {
    builder.d10(decoder.tr(this.sw_1, index));
  };
  protoOf(CharArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.a10(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.a10(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).e10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ys(this.sw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).cx = function (encoder, content, size) {
    return this.e10(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).h10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.h10((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).i10 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return DoubleArrayBuilder_init_$Create$(_this__u8e3s4);
    return new DoubleArrayBuilder(copyOf_0(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(DoubleArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.i10((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(DoubleArraySerializer_0).ax = function (size) {
    return DoubleArrayBuilder_init_$Create$_0(size);
  };
  protoOf(DoubleArraySerializer_0).zw = function () {
    return DoubleArrayBuilder_init_$Create$_1();
  };
  protoOf(DoubleArraySerializer_0).j10 = function (decoder, index, builder, checkIndex) {
    builder.m10(decoder.sr(this.sw_1, index));
  };
  protoOf(DoubleArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.j10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.j10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).n10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.xs(this.sw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).cx = function (encoder, content, size) {
    return this.n10(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).q10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.q10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).r10 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return FloatArrayBuilder_init_$Create$(_this__u8e3s4);
    return new FloatArrayBuilder(copyOf_1(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(FloatArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.r10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(FloatArraySerializer_0).ax = function (size) {
    return FloatArrayBuilder_init_$Create$_0(size);
  };
  protoOf(FloatArraySerializer_0).zw = function () {
    return FloatArrayBuilder_init_$Create$_1();
  };
  protoOf(FloatArraySerializer_0).s10 = function (decoder, index, builder, checkIndex) {
    builder.v10(decoder.rr(this.sw_1, index));
  };
  protoOf(FloatArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.s10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.s10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).w10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ws(this.sw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).cx = function (encoder, content, size) {
    return this.w10(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).z10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.z10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).a11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return LongArrayBuilder_init_$Create$(_this__u8e3s4);
    return new LongArrayBuilder(copyOf_2(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(LongArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.a11((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(LongArraySerializer_0).ax = function (size) {
    return LongArrayBuilder_init_$Create$_0(size);
  };
  protoOf(LongArraySerializer_0).zw = function () {
    return LongArrayBuilder_init_$Create$_1();
  };
  protoOf(LongArraySerializer_0).b11 = function (decoder, index, builder, checkIndex) {
    builder.e11(decoder.qr(this.sw_1, index));
  };
  protoOf(LongArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).f11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.vs(this.sw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).cx = function (encoder, content, size) {
    return this.f11(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).i11 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.i11(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.xn_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).j11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4))
      return ULongArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(_this__u8e3s4), expectedSize));
    return new ULongArrayBuilder(tmp$ret$0, _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4));
  };
  protoOf(ULongArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.j11(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.xn_1 : THROW_CCE(), expectedSize);
  };
  protoOf(ULongArraySerializer_0).ax = function (size) {
    return ULongArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ULongArraySerializer_0).zw = function () {
    return ULongArrayBuilder_init_$Create$_1();
  };
  protoOf(ULongArraySerializer_0).k11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.vr(this.sw_1, index).br();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.n11(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.k11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.k11(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).o11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.at(this.sw_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.ks(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).cx = function (encoder, content, size) {
    return this.o11(encoder, content instanceof ULongArray ? content.xn_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).r11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.r11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).s11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return IntArrayBuilder_init_$Create$(_this__u8e3s4);
    return new IntArrayBuilder(copyOf_3(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(IntArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.s11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(IntArraySerializer_0).ax = function (size) {
    return IntArrayBuilder_init_$Create$_0(size);
  };
  protoOf(IntArraySerializer_0).zw = function () {
    return IntArrayBuilder_init_$Create$_1();
  };
  protoOf(IntArraySerializer_0).t11 = function (decoder, index, builder, checkIndex) {
    builder.w11(decoder.pr(this.sw_1, index));
  };
  protoOf(IntArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.t11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.t11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).x11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.us(this.sw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).cx = function (encoder, content, size) {
    return this.x11(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).a12 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.a12(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.nn_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).b12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4))
      return UIntArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(_this__u8e3s4), expectedSize));
    return new UIntArrayBuilder(tmp$ret$0, _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4));
  };
  protoOf(UIntArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.b12(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.nn_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UIntArraySerializer_0).ax = function (size) {
    return UIntArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UIntArraySerializer_0).zw = function () {
    return UIntArrayBuilder_init_$Create$_1();
  };
  protoOf(UIntArraySerializer_0).c12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.vr(this.sw_1, index).ar();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.f12(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.c12(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.c12(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).g12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.at(this.sw_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.js(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).cx = function (encoder, content, size) {
    return this.g12(encoder, content instanceof UIntArray ? content.nn_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).j12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.j12((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).k12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return ShortArrayBuilder_init_$Create$(_this__u8e3s4);
    return new ShortArrayBuilder(copyOf_4(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(ShortArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.k12((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ShortArraySerializer_0).ax = function (size) {
    return ShortArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ShortArraySerializer_0).zw = function () {
    return ShortArrayBuilder_init_$Create$_1();
  };
  protoOf(ShortArraySerializer_0).l12 = function (decoder, index, builder, checkIndex) {
    builder.o12(decoder.or(this.sw_1, index));
  };
  protoOf(ShortArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.l12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.l12(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).p12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ts(this.sw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).cx = function (encoder, content, size) {
    return this.p12(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).s12 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.s12(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.ho_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).t12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UShortArray___get_size__impl__jqto1b(_this__u8e3s4))
      return UShortArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(_this__u8e3s4), expectedSize));
    return new UShortArrayBuilder(tmp$ret$0, _UShortArray___get_size__impl__jqto1b(_this__u8e3s4));
  };
  protoOf(UShortArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.t12(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.ho_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UShortArraySerializer_0).ax = function (size) {
    return UShortArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UShortArraySerializer_0).zw = function () {
    return UShortArrayBuilder_init_$Create$_1();
  };
  protoOf(UShortArraySerializer_0).u12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.vr(this.sw_1, index).zq();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.x12(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.u12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.u12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).y12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.at(this.sw_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.is(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).cx = function (encoder, content, size) {
    return this.y12(encoder, content instanceof UShortArray ? content.ho_1 : THROW_CCE(), size);
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
  protoOf(ByteArraySerializer_0).b13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.b13((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).c13 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return ByteArrayBuilder_init_$Create$(_this__u8e3s4);
    return new ByteArrayBuilder(copyOf_5(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(ByteArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.c13((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ByteArraySerializer_0).ax = function (size) {
    return ByteArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ByteArraySerializer_0).zw = function () {
    return ByteArrayBuilder_init_$Create$_1();
  };
  protoOf(ByteArraySerializer_0).d13 = function (decoder, index, builder, checkIndex) {
    builder.g13(decoder.nr(this.sw_1, index));
  };
  protoOf(ByteArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.d13(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.d13(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).h13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ss(this.sw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).cx = function (encoder, content, size) {
    return this.h13(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).k13 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.k13(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.dn_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).l13 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4))
      return UByteArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(_this__u8e3s4), expectedSize));
    return new UByteArrayBuilder(tmp$ret$0, _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4));
  };
  protoOf(UByteArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.l13(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.dn_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UByteArraySerializer_0).ax = function (size) {
    return UByteArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UByteArraySerializer_0).zw = function () {
    return UByteArrayBuilder_init_$Create$_1();
  };
  protoOf(UByteArraySerializer_0).m13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.vr(this.sw_1, index).yq();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.p13(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.m13(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.m13(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).q13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.at(this.sw_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.hs(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).cx = function (encoder, content, size) {
    return this.q13(encoder, content instanceof UByteArray ? content.dn_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).t13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).ou = function (_this__u8e3s4) {
    return this.t13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).u13 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return BooleanArrayBuilder_init_$Create$(_this__u8e3s4);
    return new BooleanArrayBuilder(copyOf_6(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(BooleanArraySerializer_0).xu = function (_this__u8e3s4, expectedSize) {
    return this.u13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(BooleanArraySerializer_0).ax = function (size) {
    return BooleanArrayBuilder_init_$Create$_0(size);
  };
  protoOf(BooleanArraySerializer_0).zw = function () {
    return BooleanArrayBuilder_init_$Create$_1();
  };
  protoOf(BooleanArraySerializer_0).v13 = function (decoder, index, builder, checkIndex) {
    builder.y13(decoder.mr(this.sw_1, index));
  };
  protoOf(BooleanArraySerializer_0).dv = function (decoder, index, builder, checkIndex) {
    return this.v13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).bx = function (decoder, index, builder, checkIndex) {
    return this.v13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).z13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.rs(this.sw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).cx = function (encoder, content, size) {
    return this.z13(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder_init_$Init$(bufferWithData, $this) {
    CharArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function CharArrayBuilder_init_$Create$(bufferWithData) {
    return CharArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    CharArrayBuilder.call($this, charArray(initialCapacity), 0);
    return $this;
  }
  function CharArrayBuilder_init_$Create$_0(initialCapacity) {
    return CharArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder_init_$Init$_1($this) {
    CharArrayBuilder.call($this, charArray(10), 0);
    return $this;
  }
  function CharArrayBuilder_init_$Create$_1() {
    return CharArrayBuilder_init_$Init$_1(objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.b10_1 = bufferWithData;
    this.c10_1 = initialPosition;
  }
  protoOf(CharArrayBuilder).uw = function () {
    return this.c10_1;
  };
  protoOf(CharArrayBuilder).ex = function (requiredCapacity) {
    if (this.b10_1.length < requiredCapacity)
      this.b10_1 = copyOf(this.b10_1, coerceAtLeast(requiredCapacity, imul(this.b10_1.length, 2)));
  };
  protoOf(CharArrayBuilder).d10 = function (c) {
    this.fx();
    var tmp = this.b10_1;
    var _unary__edvuaz = this.c10_1;
    this.c10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).ww = function () {
    return copyOf(this.b10_1, this.c10_1);
  };
  function DoubleArrayBuilder_init_$Init$(bufferWithData, $this) {
    DoubleArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$(bufferWithData) {
    return DoubleArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    DoubleArrayBuilder.call($this, new Float64Array(initialCapacity), 0);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$_0(initialCapacity) {
    return DoubleArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder_init_$Init$_1($this) {
    DoubleArrayBuilder.call($this, new Float64Array(10), 0);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$_1() {
    return DoubleArrayBuilder_init_$Init$_1(objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.k10_1 = bufferWithData;
    this.l10_1 = initialPosition;
  }
  protoOf(DoubleArrayBuilder).uw = function () {
    return this.l10_1;
  };
  protoOf(DoubleArrayBuilder).ex = function (requiredCapacity) {
    if (this.k10_1.length < requiredCapacity)
      this.k10_1 = copyOf_0(this.k10_1, coerceAtLeast(requiredCapacity, imul(this.k10_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).m10 = function (c) {
    this.fx();
    var tmp = this.k10_1;
    var _unary__edvuaz = this.l10_1;
    this.l10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).ww = function () {
    return copyOf_0(this.k10_1, this.l10_1);
  };
  function FloatArrayBuilder_init_$Init$(bufferWithData, $this) {
    FloatArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$(bufferWithData) {
    return FloatArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    FloatArrayBuilder.call($this, new Float32Array(initialCapacity), 0);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$_0(initialCapacity) {
    return FloatArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder_init_$Init$_1($this) {
    FloatArrayBuilder.call($this, new Float32Array(10), 0);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$_1() {
    return FloatArrayBuilder_init_$Init$_1(objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.t10_1 = bufferWithData;
    this.u10_1 = initialPosition;
  }
  protoOf(FloatArrayBuilder).uw = function () {
    return this.u10_1;
  };
  protoOf(FloatArrayBuilder).ex = function (requiredCapacity) {
    if (this.t10_1.length < requiredCapacity)
      this.t10_1 = copyOf_1(this.t10_1, coerceAtLeast(requiredCapacity, imul(this.t10_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).v10 = function (c) {
    this.fx();
    var tmp = this.t10_1;
    var _unary__edvuaz = this.u10_1;
    this.u10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).ww = function () {
    return copyOf_1(this.t10_1, this.u10_1);
  };
  function LongArrayBuilder_init_$Init$(bufferWithData, $this) {
    LongArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function LongArrayBuilder_init_$Create$(bufferWithData) {
    return LongArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    LongArrayBuilder.call($this, new BigInt64Array(initialCapacity), 0);
    return $this;
  }
  function LongArrayBuilder_init_$Create$_0(initialCapacity) {
    return LongArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder_init_$Init$_1($this) {
    LongArrayBuilder.call($this, new BigInt64Array(10), 0);
    return $this;
  }
  function LongArrayBuilder_init_$Create$_1() {
    return LongArrayBuilder_init_$Init$_1(objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.c11_1 = bufferWithData;
    this.d11_1 = initialPosition;
  }
  protoOf(LongArrayBuilder).uw = function () {
    return this.d11_1;
  };
  protoOf(LongArrayBuilder).ex = function (requiredCapacity) {
    if (this.c11_1.length < requiredCapacity)
      this.c11_1 = copyOf_2(this.c11_1, coerceAtLeast(requiredCapacity, imul(this.c11_1.length, 2)));
  };
  protoOf(LongArrayBuilder).e11 = function (c) {
    this.fx();
    var tmp = this.c11_1;
    var _unary__edvuaz = this.d11_1;
    this.d11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).ww = function () {
    return copyOf_2(this.c11_1, this.d11_1);
  };
  function ULongArrayBuilder_init_$Init$(bufferWithData, $this) {
    ULongArrayBuilder.call($this, bufferWithData, _ULongArray___get_size__impl__ju6dtr(bufferWithData));
    return $this;
  }
  function ULongArrayBuilder_init_$Create$(bufferWithData) {
    return ULongArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ULongArrayBuilder.call($this, _ULongArray___init__impl__twm1l3_0(initialCapacity), 0);
    return $this;
  }
  function ULongArrayBuilder_init_$Create$_0(initialCapacity) {
    return ULongArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder_init_$Init$_1($this) {
    ULongArrayBuilder.call($this, _ULongArray___init__impl__twm1l3_0(10), 0);
    return $this;
  }
  function ULongArrayBuilder_init_$Create$_1() {
    return ULongArrayBuilder_init_$Init$_1(objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.l11_1 = bufferWithData;
    this.m11_1 = initialPosition;
  }
  protoOf(ULongArrayBuilder).uw = function () {
    return this.m11_1;
  };
  protoOf(ULongArrayBuilder).ex = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.l11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.l11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.l11_1), 2));
      tmp.l11_1 = _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).n11 = function (c) {
    this.fx();
    var tmp = this.l11_1;
    var _unary__edvuaz = this.m11_1;
    this.m11_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).a14 = function () {
    var tmp0 = this.l11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.m11_1;
    return _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).ww = function () {
    return new ULongArray(this.a14());
  };
  function IntArrayBuilder_init_$Init$(bufferWithData, $this) {
    IntArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function IntArrayBuilder_init_$Create$(bufferWithData) {
    return IntArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    IntArrayBuilder.call($this, new Int32Array(initialCapacity), 0);
    return $this;
  }
  function IntArrayBuilder_init_$Create$_0(initialCapacity) {
    return IntArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder_init_$Init$_1($this) {
    IntArrayBuilder.call($this, new Int32Array(10), 0);
    return $this;
  }
  function IntArrayBuilder_init_$Create$_1() {
    return IntArrayBuilder_init_$Init$_1(objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.u11_1 = bufferWithData;
    this.v11_1 = initialPosition;
  }
  protoOf(IntArrayBuilder).uw = function () {
    return this.v11_1;
  };
  protoOf(IntArrayBuilder).ex = function (requiredCapacity) {
    if (this.u11_1.length < requiredCapacity)
      this.u11_1 = copyOf_3(this.u11_1, coerceAtLeast(requiredCapacity, imul(this.u11_1.length, 2)));
  };
  protoOf(IntArrayBuilder).w11 = function (c) {
    this.fx();
    var tmp = this.u11_1;
    var _unary__edvuaz = this.v11_1;
    this.v11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).ww = function () {
    return copyOf_3(this.u11_1, this.v11_1);
  };
  function UIntArrayBuilder_init_$Init$(bufferWithData, $this) {
    UIntArrayBuilder.call($this, bufferWithData, _UIntArray___get_size__impl__r6l8ci(bufferWithData));
    return $this;
  }
  function UIntArrayBuilder_init_$Create$(bufferWithData) {
    return UIntArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UIntArrayBuilder.call($this, _UIntArray___init__impl__ghjpc6_0(initialCapacity), 0);
    return $this;
  }
  function UIntArrayBuilder_init_$Create$_0(initialCapacity) {
    return UIntArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder_init_$Init$_1($this) {
    UIntArrayBuilder.call($this, _UIntArray___init__impl__ghjpc6_0(10), 0);
    return $this;
  }
  function UIntArrayBuilder_init_$Create$_1() {
    return UIntArrayBuilder_init_$Init$_1(objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.d12_1 = bufferWithData;
    this.e12_1 = initialPosition;
  }
  protoOf(UIntArrayBuilder).uw = function () {
    return this.e12_1;
  };
  protoOf(UIntArrayBuilder).ex = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.d12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.d12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.d12_1), 2));
      tmp.d12_1 = _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).f12 = function (c) {
    this.fx();
    var tmp = this.d12_1;
    var _unary__edvuaz = this.e12_1;
    this.e12_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).b14 = function () {
    var tmp0 = this.d12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.e12_1;
    return _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).ww = function () {
    return new UIntArray(this.b14());
  };
  function ShortArrayBuilder_init_$Init$(bufferWithData, $this) {
    ShortArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$(bufferWithData) {
    return ShortArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ShortArrayBuilder.call($this, new Int16Array(initialCapacity), 0);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$_0(initialCapacity) {
    return ShortArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder_init_$Init$_1($this) {
    ShortArrayBuilder.call($this, new Int16Array(10), 0);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$_1() {
    return ShortArrayBuilder_init_$Init$_1(objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.m12_1 = bufferWithData;
    this.n12_1 = initialPosition;
  }
  protoOf(ShortArrayBuilder).uw = function () {
    return this.n12_1;
  };
  protoOf(ShortArrayBuilder).ex = function (requiredCapacity) {
    if (this.m12_1.length < requiredCapacity)
      this.m12_1 = copyOf_4(this.m12_1, coerceAtLeast(requiredCapacity, imul(this.m12_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).o12 = function (c) {
    this.fx();
    var tmp = this.m12_1;
    var _unary__edvuaz = this.n12_1;
    this.n12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).ww = function () {
    return copyOf_4(this.m12_1, this.n12_1);
  };
  function UShortArrayBuilder_init_$Init$(bufferWithData, $this) {
    UShortArrayBuilder.call($this, bufferWithData, _UShortArray___get_size__impl__jqto1b(bufferWithData));
    return $this;
  }
  function UShortArrayBuilder_init_$Create$(bufferWithData) {
    return UShortArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UShortArrayBuilder.call($this, _UShortArray___init__impl__9b26ef_0(initialCapacity), 0);
    return $this;
  }
  function UShortArrayBuilder_init_$Create$_0(initialCapacity) {
    return UShortArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder_init_$Init$_1($this) {
    UShortArrayBuilder.call($this, _UShortArray___init__impl__9b26ef_0(10), 0);
    return $this;
  }
  function UShortArrayBuilder_init_$Create$_1() {
    return UShortArrayBuilder_init_$Init$_1(objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.v12_1 = bufferWithData;
    this.w12_1 = initialPosition;
  }
  protoOf(UShortArrayBuilder).uw = function () {
    return this.w12_1;
  };
  protoOf(UShortArrayBuilder).ex = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.v12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.v12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.v12_1), 2));
      tmp.v12_1 = _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).x12 = function (c) {
    this.fx();
    var tmp = this.v12_1;
    var _unary__edvuaz = this.w12_1;
    this.w12_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).c14 = function () {
    var tmp0 = this.v12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.w12_1;
    return _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).ww = function () {
    return new UShortArray(this.c14());
  };
  function ByteArrayBuilder_init_$Init$(bufferWithData, $this) {
    ByteArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$(bufferWithData) {
    return ByteArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ByteArrayBuilder.call($this, new Int8Array(initialCapacity), 0);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$_0(initialCapacity) {
    return ByteArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder_init_$Init$_1($this) {
    ByteArrayBuilder.call($this, new Int8Array(10), 0);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$_1() {
    return ByteArrayBuilder_init_$Init$_1(objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.e13_1 = bufferWithData;
    this.f13_1 = initialPosition;
  }
  protoOf(ByteArrayBuilder).uw = function () {
    return this.f13_1;
  };
  protoOf(ByteArrayBuilder).ex = function (requiredCapacity) {
    if (this.e13_1.length < requiredCapacity)
      this.e13_1 = copyOf_5(this.e13_1, coerceAtLeast(requiredCapacity, imul(this.e13_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).g13 = function (c) {
    this.fx();
    var tmp = this.e13_1;
    var _unary__edvuaz = this.f13_1;
    this.f13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).ww = function () {
    return copyOf_5(this.e13_1, this.f13_1);
  };
  function UByteArrayBuilder_init_$Init$(bufferWithData, $this) {
    UByteArrayBuilder.call($this, bufferWithData, _UByteArray___get_size__impl__h6pkdv(bufferWithData));
    return $this;
  }
  function UByteArrayBuilder_init_$Create$(bufferWithData) {
    return UByteArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UByteArrayBuilder.call($this, _UByteArray___init__impl__ip4y9n_0(initialCapacity), 0);
    return $this;
  }
  function UByteArrayBuilder_init_$Create$_0(initialCapacity) {
    return UByteArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder_init_$Init$_1($this) {
    UByteArrayBuilder.call($this, _UByteArray___init__impl__ip4y9n_0(10), 0);
    return $this;
  }
  function UByteArrayBuilder_init_$Create$_1() {
    return UByteArrayBuilder_init_$Init$_1(objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.n13_1 = bufferWithData;
    this.o13_1 = initialPosition;
  }
  protoOf(UByteArrayBuilder).uw = function () {
    return this.o13_1;
  };
  protoOf(UByteArrayBuilder).ex = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.n13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.n13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.n13_1), 2));
      tmp.n13_1 = _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).p13 = function (c) {
    this.fx();
    var tmp = this.n13_1;
    var _unary__edvuaz = this.o13_1;
    this.o13_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).d14 = function () {
    var tmp0 = this.n13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.o13_1;
    return _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).ww = function () {
    return new UByteArray(this.d14());
  };
  function BooleanArrayBuilder_init_$Init$(bufferWithData, $this) {
    BooleanArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$(bufferWithData) {
    return BooleanArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    BooleanArrayBuilder.call($this, booleanArray(initialCapacity), 0);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$_0(initialCapacity) {
    return BooleanArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder_init_$Init$_1($this) {
    BooleanArrayBuilder.call($this, booleanArray(10), 0);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$_1() {
    return BooleanArrayBuilder_init_$Init$_1(objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.w13_1 = bufferWithData;
    this.x13_1 = initialPosition;
  }
  protoOf(BooleanArrayBuilder).uw = function () {
    return this.x13_1;
  };
  protoOf(BooleanArrayBuilder).ex = function (requiredCapacity) {
    if (this.w13_1.length < requiredCapacity)
      this.w13_1 = copyOf_6(this.w13_1, coerceAtLeast(requiredCapacity, imul(this.w13_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).y13 = function (c) {
    this.fx();
    var tmp = this.w13_1;
    var _unary__edvuaz = this.x13_1;
    this.x13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).ww = function () {
    return copyOf_6(this.w13_1, this.x13_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.e14_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).io = function () {
    return this.e14_1;
  };
  protoOf(StringSerializer).f14 = function (encoder, value) {
    return encoder.os(value);
  };
  protoOf(StringSerializer).jo = function (encoder, value) {
    return this.f14(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).ko = function (decoder) {
    return decoder.fr();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.g14_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).io = function () {
    return this.g14_1;
  };
  protoOf(BooleanSerializer).h14 = function (encoder, value) {
    return encoder.gs(value);
  };
  protoOf(BooleanSerializer).jo = function (encoder, value) {
    return this.h14(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).ko = function (decoder) {
    return decoder.xq();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.i14_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).io = function () {
    return this.i14_1;
  };
  protoOf(IntSerializer).j14 = function (encoder, value) {
    return encoder.js(value);
  };
  protoOf(IntSerializer).jo = function (encoder, value) {
    return this.j14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).ko = function (decoder) {
    return decoder.ar();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.k14_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).io = function () {
    return this.k14_1;
  };
  protoOf(DoubleSerializer).l14 = function (encoder, value) {
    return encoder.ms(value);
  };
  protoOf(DoubleSerializer).jo = function (encoder, value) {
    return this.l14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).ko = function (decoder) {
    return decoder.dr();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.m14_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).io = function () {
    return this.m14_1;
  };
  protoOf(LongSerializer).n14 = function (encoder, value) {
    return encoder.ks(value);
  };
  protoOf(LongSerializer).jo = function (encoder, value) {
    return this.n14(encoder, (!(value == null) ? typeof value === 'bigint' : false) ? value : THROW_CCE());
  };
  protoOf(LongSerializer).ko = function (decoder) {
    return decoder.br();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().s2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.o14_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.o14_1 = serialName;
    this.p14_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).qp = function () {
    return this.o14_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).rp = function () {
    return this.p14_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).tp = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).vp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).wp = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).zp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).yp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).xp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.o14_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.o14_1 === other.o14_1 && equals(this.p14_1, other.p14_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.o14_1) + imul(31, this.p14_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().u2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.io().qp();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.q14_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).io = function () {
    return this.q14_1;
  };
  protoOf(ByteSerializer).r14 = function (encoder, value) {
    return encoder.hs(value);
  };
  protoOf(ByteSerializer).jo = function (encoder, value) {
    return this.r14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).ko = function (decoder) {
    return decoder.yq();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.s14_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).io = function () {
    return this.s14_1;
  };
  protoOf(ShortSerializer).t14 = function (encoder, value) {
    return encoder.is(value);
  };
  protoOf(ShortSerializer).jo = function (encoder, value) {
    return this.t14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).ko = function (decoder) {
    return decoder.zq();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.u14_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).io = function () {
    return this.u14_1;
  };
  protoOf(CharSerializer).v14 = function (encoder, value) {
    return encoder.ns(value);
  };
  protoOf(CharSerializer).jo = function (encoder, value) {
    return this.v14(encoder, value instanceof Char ? value.w1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).w14 = function (decoder) {
    return decoder.er();
  };
  protoOf(CharSerializer).ko = function (decoder) {
    return new Char(this.w14(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.x14_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).io = function () {
    return this.x14_1;
  };
  protoOf(FloatSerializer).y14 = function (encoder, value) {
    return encoder.ls(value);
  };
  protoOf(FloatSerializer).jo = function (encoder, value) {
    return this.y14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).ko = function (decoder) {
    return decoder.cr();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.z14_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).io = function () {
    return this.z14_1.io();
  };
  protoOf(UnitSerializer).a15 = function (encoder, value) {
    this.z14_1.yo(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).jo = function (encoder, value) {
    return this.a15(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).b15 = function (decoder) {
    this.z14_1.ko(decoder);
  };
  protoOf(UnitSerializer).ko = function (decoder) {
    this.b15(decoder);
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
  protoOf(NamedValueDecoder).e15 = function (_this__u8e3s4, index) {
    return this.g15(this.f15(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).g15 = function (nestedName) {
    var tmp0_elvis_lhs = this.j15();
    return this.k15(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).f15 = function (descriptor, index) {
    return descriptor.vp(index);
  };
  protoOf(NamedValueDecoder).k15 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).l15 = function () {
    return this.h15_1.r() ? '$' : joinToString(this.h15_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.z15(tag);
    var r = block();
    if (!$this.i15_1) {
      $this.a16();
    }
    $this.i15_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.ir($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.io().jp();
      var tmp;
      if (isNullabilitySupported || tmp0.vq()) {
        tmp = this$0.ir($deserializer, $previousValue);
      } else {
        tmp = tmp0.wq();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.h15_1 = ArrayList_init_$Create$_0();
    this.i15_1 = false;
  }
  protoOf(TaggedDecoder).zr = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).m15 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).n15 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).o15 = function (tag) {
    var tmp = this.m15(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p15 = function (tag) {
    var tmp = this.m15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q15 = function (tag) {
    var tmp = this.m15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).r15 = function (tag) {
    var tmp = this.m15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s15 = function (tag) {
    var tmp = this.m15(tag);
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t15 = function (tag) {
    var tmp = this.m15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u15 = function (tag) {
    var tmp = this.m15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v15 = function (tag) {
    var tmp = this.m15(tag);
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).w15 = function (tag) {
    var tmp = this.m15(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x15 = function (tag, enumDescriptor) {
    var tmp = this.m15(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y15 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.z15(tag);
    return this;
  };
  protoOf(TaggedDecoder).ir = function (deserializer, previousValue) {
    return this.jr(deserializer);
  };
  protoOf(TaggedDecoder).hr = function (descriptor) {
    return this.y15(this.a16(), descriptor);
  };
  protoOf(TaggedDecoder).vq = function () {
    var tmp0_elvis_lhs = this.j15();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.n15(currentTag);
  };
  protoOf(TaggedDecoder).wq = function () {
    return null;
  };
  protoOf(TaggedDecoder).xq = function () {
    return this.o15(this.a16());
  };
  protoOf(TaggedDecoder).yq = function () {
    return this.p15(this.a16());
  };
  protoOf(TaggedDecoder).zq = function () {
    return this.q15(this.a16());
  };
  protoOf(TaggedDecoder).ar = function () {
    return this.r15(this.a16());
  };
  protoOf(TaggedDecoder).br = function () {
    return this.s15(this.a16());
  };
  protoOf(TaggedDecoder).cr = function () {
    return this.t15(this.a16());
  };
  protoOf(TaggedDecoder).dr = function () {
    return this.u15(this.a16());
  };
  protoOf(TaggedDecoder).er = function () {
    return this.v15(this.a16());
  };
  protoOf(TaggedDecoder).fr = function () {
    return this.w15(this.a16());
  };
  protoOf(TaggedDecoder).gr = function (enumDescriptor) {
    return this.x15(this.a16(), enumDescriptor);
  };
  protoOf(TaggedDecoder).kr = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).lr = function (descriptor) {
  };
  protoOf(TaggedDecoder).mr = function (descriptor, index) {
    return this.o15(this.e15(descriptor, index));
  };
  protoOf(TaggedDecoder).nr = function (descriptor, index) {
    return this.p15(this.e15(descriptor, index));
  };
  protoOf(TaggedDecoder).or = function (descriptor, index) {
    return this.q15(this.e15(descriptor, index));
  };
  protoOf(TaggedDecoder).pr = function (descriptor, index) {
    return this.r15(this.e15(descriptor, index));
  };
  protoOf(TaggedDecoder).qr = function (descriptor, index) {
    return this.s15(this.e15(descriptor, index));
  };
  protoOf(TaggedDecoder).rr = function (descriptor, index) {
    return this.t15(this.e15(descriptor, index));
  };
  protoOf(TaggedDecoder).sr = function (descriptor, index) {
    return this.u15(this.e15(descriptor, index));
  };
  protoOf(TaggedDecoder).tr = function (descriptor, index) {
    return this.v15(this.e15(descriptor, index));
  };
  protoOf(TaggedDecoder).ur = function (descriptor, index) {
    return this.w15(this.e15(descriptor, index));
  };
  protoOf(TaggedDecoder).vr = function (descriptor, index) {
    return this.y15(this.e15(descriptor, index), descriptor.yp(index));
  };
  protoOf(TaggedDecoder).wr = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.e15(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).yr = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.e15(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).j15 = function () {
    return lastOrNull(this.h15_1);
  };
  protoOf(TaggedDecoder).z15 = function (name) {
    this.h15_1.c1(name);
  };
  protoOf(TaggedDecoder).a16 = function () {
    var r = this.h15_1.y2(get_lastIndex_0(this.h15_1));
    this.i15_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.b16_1 = key;
    this.c16_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.b16_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.c16_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.b16_1) + ', value=' + toString_0(this.c16_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.b16_1 == null ? 0 : hashCode(this.b16_1);
    result = imul(result, 31) + (this.c16_1 == null ? 0 : hashCode(this.c16_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.b16_1, other.b16_1))
      return false;
    if (!equals(this.c16_1, other.c16_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.wo('key', $keySerializer.io());
      $this$buildSerialDescriptor.wo('value', $valueSerializer.io());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.f16_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).io = function () {
    return this.f16_1;
  };
  protoOf(MapEntrySerializer_0).g16 = function (_this__u8e3s4) {
    return _this__u8e3s4.m1();
  };
  protoOf(MapEntrySerializer_0).h16 = function (_this__u8e3s4) {
    return this.g16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).i16 = function (_this__u8e3s4) {
    return _this__u8e3s4.n1();
  };
  protoOf(MapEntrySerializer_0).j16 = function (_this__u8e3s4) {
    return this.i16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).k16 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.wo('first', $keySerializer.io());
      $this$buildClassSerialDescriptor.wo('second', $valueSerializer.io());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.q16_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).io = function () {
    return this.q16_1;
  };
  protoOf(PairSerializer_0).r16 = function (_this__u8e3s4) {
    return _this__u8e3s4.df_1;
  };
  protoOf(PairSerializer_0).h16 = function (_this__u8e3s4) {
    return this.r16(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).s16 = function (_this__u8e3s4) {
    return _this__u8e3s4.ef_1;
  };
  protoOf(PairSerializer_0).j16 = function (_this__u8e3s4) {
    return this.s16(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).k16 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.xr($this.w16_1, 0, $this.t16_1);
    var b = composite.xr($this.w16_1, 1, $this.u16_1);
    var c = composite.xr($this.w16_1, 2, $this.v16_1);
    composite.lr($this.w16_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.bs($this.w16_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.xr($this.w16_1, 0, $this.t16_1);
          break;
        case 1:
          b = composite.xr($this.w16_1, 1, $this.u16_1);
          break;
        case 2:
          c = composite.xr($this.w16_1, 2, $this.v16_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.lr($this.w16_1);
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
      $this$buildClassSerialDescriptor.wo('first', this$0.t16_1.io());
      $this$buildClassSerialDescriptor.wo('second', this$0.u16_1.io());
      $this$buildClassSerialDescriptor.wo('third', this$0.v16_1.io());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.t16_1 = aSerializer;
    this.u16_1 = bSerializer;
    this.v16_1 = cSerializer;
    var tmp = this;
    tmp.w16_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).io = function () {
    return this.w16_1;
  };
  protoOf(TripleSerializer_0).x16 = function (encoder, value) {
    var structuredEncoder = encoder.kr(this.w16_1);
    structuredEncoder.bt(this.w16_1, 0, this.t16_1, value.mm_1);
    structuredEncoder.bt(this.w16_1, 1, this.u16_1, value.nm_1);
    structuredEncoder.bt(this.w16_1, 2, this.v16_1, value.om_1);
    structuredEncoder.lr(this.w16_1);
  };
  protoOf(TripleSerializer_0).jo = function (encoder, value) {
    return this.x16(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).ko = function (decoder) {
    var composite = decoder.kr(this.w16_1);
    if (composite.as()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.l16_1 = keySerializer;
    this.m16_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).n16 = function (encoder, value) {
    var structuredEncoder = encoder.kr(this.io());
    structuredEncoder.bt(this.io(), 0, this.l16_1, this.h16(value));
    structuredEncoder.bt(this.io(), 1, this.m16_1, this.j16(value));
    structuredEncoder.lr(this.io());
  };
  protoOf(KeyValueSerializer).jo = function (encoder, value) {
    return this.n16(encoder, value);
  };
  protoOf(KeyValueSerializer).ko = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.io();
    var composite = decoder.kr(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.as()) {
        var key = composite.xr(this.io(), 0, this.l16_1);
        var value = composite.xr(this.io(), 1, this.m16_1);
        tmp$ret$1 = this.k16(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.bs(this.io());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.xr(this.io(), 0, this.l16_1);
            break;
          case 1:
            value_0 = composite.xr(this.io(), 1, this.m16_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.k16(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.lr(descriptor);
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
    this.y16_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_instance));
  }
  protoOf(ULongSerializer).io = function () {
    return this.y16_1;
  };
  protoOf(ULongSerializer).z16 = function (encoder, value) {
    var tmp = encoder.qs(this.y16_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.ks(tmp$ret$0);
  };
  protoOf(ULongSerializer).jo = function (encoder, value) {
    return this.z16(encoder, value instanceof ULong ? value.sn_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).a17 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.hr(this.y16_1).br();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).ko = function (decoder) {
    return new ULong(this.a17(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.b17_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).io = function () {
    return this.b17_1;
  };
  protoOf(UIntSerializer).c17 = function (encoder, value) {
    var tmp = encoder.qs(this.b17_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.js(tmp$ret$0);
  };
  protoOf(UIntSerializer).jo = function (encoder, value) {
    return this.c17(encoder, value instanceof UInt ? value.in_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).d17 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.hr(this.b17_1).ar();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).ko = function (decoder) {
    return new UInt(this.d17(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.e17_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).io = function () {
    return this.e17_1;
  };
  protoOf(UByteSerializer).f17 = function (encoder, value) {
    var tmp = encoder.qs(this.e17_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.hs(tmp$ret$0);
  };
  protoOf(UByteSerializer).jo = function (encoder, value) {
    return this.f17(encoder, value instanceof UByte ? value.ym_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).g17 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.hr(this.e17_1).yq();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).ko = function (decoder) {
    return new UByte(this.g17(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.h17_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).io = function () {
    return this.h17_1;
  };
  protoOf(UShortSerializer).i17 = function (encoder, value) {
    var tmp = encoder.qs(this.h17_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.is(tmp$ret$0);
  };
  protoOf(UShortSerializer).jo = function (encoder, value) {
    return this.i17(encoder, value instanceof UShort ? value.co_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).j17 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.hr(this.h17_1).zq();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).ko = function (decoder) {
    return new UShort(this.j17(decoder));
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
  protoOf(SerializersModule).fp = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.gp(kClass, typeArgumentsSerializers) : $super.gp.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.l17_1 = class2ContextualFactory;
    this.m17_1 = polyBase2Serializers;
    this.n17_1 = polyBase2DefaultSerializerProvider;
    this.o17_1 = polyBase2NamedSerializers;
    this.p17_1 = polyBase2DefaultDeserializerProvider;
    this.q17_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).ep = function () {
    return this.q17_1;
  };
  protoOf(SerialModuleImpl).jt = function (baseClass, value) {
    if (!baseClass.za(value))
      return null;
    var tmp0_safe_receiver = this.m17_1.s2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.n17_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).it = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.o17_1.s2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).s2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.p17_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).gp = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.l17_1.s2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r17(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).k17 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.l17_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.u17_1;
        collector.v17(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.t17(kclass, serial.s17_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.m17_1.l1().t();
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
        collector.w17(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.n17_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.x17(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.p17_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.y17(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.u17_1 = serializer;
  }
  protoOf(Argless).r17 = function (typeArgumentsSerializers) {
    return this.u17_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.u17_1, this.u17_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.u17_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.s17_1 = provider;
  }
  protoOf(WithTypeArguments).r17 = function (typeArgumentsSerializers) {
    return this.s17_1(typeArgumentsSerializers);
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
    tmp.z17_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.a18_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.b18_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.c18_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.d18_1 = HashMap_init_$Create$();
    this.e18_1 = false;
  }
  protoOf(SerializersModuleBuilder).v17 = function (kClass, serializer) {
    return this.f18(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).t17 = function (kClass, provider) {
    return this.f18(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).w17 = function (baseClass, actualClass, actualSerializer) {
    this.g18(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).x17 = function (baseClass, defaultSerializerProvider) {
    this.h18(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).y17 = function (baseClass, defaultDeserializerProvider) {
    this.i18(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).j18 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.z17_1.s2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.z17_1.z2(forClass, provider);
    if (isInterface_0(forClass))
      this.e18_1 = true;
  };
  protoOf(SerializersModuleBuilder).f18 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.j18(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.j18.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).h18 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.b18_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.b18_1.z2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).i18 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.d18_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.d18_1.z2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).k18 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.io().qp();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.a18_1;
    var value = this_0.s2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.z2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.c18_1;
    var value_0 = this_1.s2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.z2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.s2(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.a3(previousSerializer.io().qp());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.s2(name);
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
        baseClassSerializers.a3(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.z2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.z2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).g18 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.k18(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.k18.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).ww = function () {
    return new SerialModuleImpl(this.z17_1, this.a18_1, this.b18_1, this.c18_1, this.d18_1, this.e18_1);
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
    this.l18_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.l18_1.equals(tmp0_other_with_cast.l18_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.l18_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.l18_1) + ')';
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
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().tb()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().bc());
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
          var tmp_1 = assocObject.vz(args.slice());
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
  function estimateCapacityForHashMap(requiredCapacity) {
    return requiredCapacity;
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().cc(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().fc(), CharArraySerializer()), to(PrimitiveClasses_getInstance().ac(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().mc(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().zb(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().lc(), FloatArraySerializer()), to(PrimitiveClasses_getInstance().yb(), serializer_5(Companion_instance)), to(PrimitiveClasses_getInstance().kc(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().xb(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().ic(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().wb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().hc(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().vb(), serializer_7(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().gc(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().ub(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().ec(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().tb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().tb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.m18_1 = $factory;
  }
  protoOf(createCache$1).hp = function (key) {
    return this.m18_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.n18_1 = $factory;
  }
  protoOf(createParametrizedCache$1).ip = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.n18_1(key, types);
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
  protoOf(SerialDescriptorImpl).jp = get_isNullable;
  protoOf(SerialDescriptorImpl).sp = get_isInline;
  protoOf(AbstractDecoder).xr = decodeSerializableElement$default;
  protoOf(AbstractDecoder).jr = decodeSerializableValue;
  protoOf(AbstractDecoder).as = decodeSequentially;
  protoOf(AbstractDecoder).cs = decodeCollectionSize;
  protoOf(AbstractEncoder).ft = encodeNotNullMark;
  protoOf(AbstractEncoder).gt = beginCollection;
  protoOf(AbstractEncoder).ct = encodeSerializableValue;
  protoOf(AbstractEncoder).et = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ht = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).jp = get_isNullable;
  protoOf(ListLikeDescriptor).sp = get_isInline;
  protoOf(ListLikeDescriptor).up = get_annotations;
  protoOf(MapLikeDescriptor).jp = get_isNullable;
  protoOf(MapLikeDescriptor).sp = get_isInline;
  protoOf(MapLikeDescriptor).up = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).jp = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).sp = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).lz = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).jp = get_isNullable;
  protoOf(NothingSerialDescriptor).sp = get_isInline;
  protoOf(NothingSerialDescriptor).up = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).jp = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).sp = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).up = get_annotations;
  protoOf(TaggedDecoder).xr = decodeSerializableElement$default;
  protoOf(TaggedDecoder).jr = decodeSerializableValue;
  protoOf(TaggedDecoder).as = decodeSequentially;
  protoOf(TaggedDecoder).cs = decodeCollectionSize;
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
  _.$_$.o = SerializationException_init_$Create$_0;
  _.$_$.p = SerializationException_init_$Init$_1;
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
  _.$_$.q2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
