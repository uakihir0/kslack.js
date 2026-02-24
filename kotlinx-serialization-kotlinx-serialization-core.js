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
  var protoOf = kotlin_kotlin.$_$.qb;
  var initMetadataForInterface = kotlin_kotlin.$_$.va;
  var VOID = kotlin_kotlin.$_$.b;
  var asList = kotlin_kotlin.$_$.n5;
  var objectCreate = kotlin_kotlin.$_$.pb;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.j4;
  var Unit_instance = kotlin_kotlin.$_$.w4;
  var emptyList = kotlin_kotlin.$_$.i6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.lg;
  var KProperty1 = kotlin_kotlin.$_$.nc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.oa;
  var toString = kotlin_kotlin.$_$.tb;
  var initMetadataForClass = kotlin_kotlin.$_$.ra;
  var getKClassFromExpression = kotlin_kotlin.$_$.hc;
  var captureStack = kotlin_kotlin.$_$.ca;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.j1;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.l1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.n1;
  var IllegalArgumentException = kotlin_kotlin.$_$.gf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.p5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p2;
  var THROW_CCE = kotlin_kotlin.$_$.of;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o2;
  var isInterface = kotlin_kotlin.$_$.gb;
  var KClass = kotlin_kotlin.$_$.kc;
  var Triple = kotlin_kotlin.$_$.qf;
  var getKClass = kotlin_kotlin.$_$.ic;
  var Pair = kotlin_kotlin.$_$.lf;
  var Entry = kotlin_kotlin.$_$.e5;
  var KtMap = kotlin_kotlin.$_$.g5;
  var KtMutableMap = kotlin_kotlin.$_$.i5;
  var LinkedHashMap = kotlin_kotlin.$_$.b5;
  var HashMap = kotlin_kotlin.$_$.z4;
  var KtSet = kotlin_kotlin.$_$.k5;
  var KtMutableSet = kotlin_kotlin.$_$.j5;
  var LinkedHashSet = kotlin_kotlin.$_$.c5;
  var HashSet = kotlin_kotlin.$_$.a5;
  var Collection = kotlin_kotlin.$_$.y4;
  var KtList = kotlin_kotlin.$_$.d5;
  var KtMutableList = kotlin_kotlin.$_$.h5;
  var ArrayList = kotlin_kotlin.$_$.x4;
  var copyToArray = kotlin_kotlin.$_$.f6;
  var Result = kotlin_kotlin.$_$.mf;
  var ensureNotNull = kotlin_kotlin.$_$.gg;
  var equals = kotlin_kotlin.$_$.la;
  var getStringHashCode = kotlin_kotlin.$_$.pa;
  var isBlank = kotlin_kotlin.$_$.ed;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var toList = kotlin_kotlin.$_$.w7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var toHashSet = kotlin_kotlin.$_$.t7;
  var toBooleanArray = kotlin_kotlin.$_$.r7;
  var withIndex = kotlin_kotlin.$_$.d8;
  var to = kotlin_kotlin.$_$.rg;
  var toMap = kotlin_kotlin.$_$.y7;
  var lazy_0 = kotlin_kotlin.$_$.mg;
  var contentEquals = kotlin_kotlin.$_$.q5;
  var initMetadataForObject = kotlin_kotlin.$_$.xa;
  var Long = kotlin_kotlin.$_$.if;
  var Char = kotlin_kotlin.$_$.ye;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.d2;
  var Duration = kotlin_kotlin.$_$.se;
  var Companion_getInstance = kotlin_kotlin.$_$.m4;
  var Instant = kotlin_kotlin.$_$.te;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.n4;
  var Uuid = kotlin_kotlin.$_$.ve;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.o4;
  var toIntOrNull = kotlin_kotlin.$_$.fe;
  var hashCode = kotlin_kotlin.$_$.qa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var isArray = kotlin_kotlin.$_$.ya;
  var arrayIterator = kotlin_kotlin.$_$.aa;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var until = kotlin_kotlin.$_$.dc;
  var step = kotlin_kotlin.$_$.cc;
  var getValue = kotlin_kotlin.$_$.q6;
  var longArray = kotlin_kotlin.$_$.lb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.sa;
  var get_lastIndex = kotlin_kotlin.$_$.x6;
  var shiftLeft = kotlin_kotlin.$_$.u9;
  var bitwiseOr = kotlin_kotlin.$_$.f9;
  var equalsLong = kotlin_kotlin.$_$.l9;
  var invert = kotlin_kotlin.$_$.n9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.eg;
  var getOrNull = kotlin_kotlin.$_$.p6;
  var joinToString = kotlin_kotlin.$_$.u6;
  var indexOf = kotlin_kotlin.$_$.r6;
  var contentToString = kotlin_kotlin.$_$.u5;
  var Enum = kotlin_kotlin.$_$.df;
  var toString_0 = kotlin_kotlin.$_$.qg;
  var KTypeParameter = kotlin_kotlin.$_$.oc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var booleanArray = kotlin_kotlin.$_$.ba;
  var emptyMap = kotlin_kotlin.$_$.j6;
  var contentHashCode = kotlin_kotlin.$_$.t5;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.p4;
  var isCharArray = kotlin_kotlin.$_$.bb;
  var charArray = kotlin_kotlin.$_$.ea;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.f4;
  var isDoubleArray = kotlin_kotlin.$_$.db;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g4;
  var isFloatArray = kotlin_kotlin.$_$.eb;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.q4;
  var isLongArray = kotlin_kotlin.$_$.o9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.u4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.p3;
  var ULongArray = kotlin_kotlin.$_$.vf;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.l3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i3;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.n3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.h4;
  var isIntArray = kotlin_kotlin.$_$.fb;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.t4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.g3;
  var UIntArray = kotlin_kotlin.$_$.tf;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.c3;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z2;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.e3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a3;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.i4;
  var isShortArray = kotlin_kotlin.$_$.ib;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.v4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.y3;
  var UShortArray = kotlin_kotlin.$_$.xf;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.u3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r3;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.w3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s3;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.e4;
  var isByteArray = kotlin_kotlin.$_$.ab;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.s4;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.x2;
  var UByteArray = kotlin_kotlin.$_$.rf;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.u2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q2;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.v2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.d4;
  var isBooleanArray = kotlin_kotlin.$_$.za;
  var coerceAtLeast = kotlin_kotlin.$_$.yb;
  var copyOf = kotlin_kotlin.$_$.z5;
  var copyOf_0 = kotlin_kotlin.$_$.b6;
  var copyOf_1 = kotlin_kotlin.$_$.c6;
  var copyOf_2 = kotlin_kotlin.$_$.x5;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.q3;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.m3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.o3;
  var copyOf_3 = kotlin_kotlin.$_$.e6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.h3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.d3;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.f3;
  var copyOf_4 = kotlin_kotlin.$_$.w5;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.z3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.v3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.x3;
  var copyOf_5 = kotlin_kotlin.$_$.a6;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.y2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.t2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.w2;
  var copyOf_6 = kotlin_kotlin.$_$.y5;
  var trimIndent = kotlin_kotlin.$_$.pe;
  var Unit = kotlin_kotlin.$_$.zf;
  var charSequenceLength = kotlin_kotlin.$_$.ha;
  var lastOrNull = kotlin_kotlin.$_$.z6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.y6;
  var ULong = kotlin_kotlin.$_$.wf;
  var UInt = kotlin_kotlin.$_$.uf;
  var UByte = kotlin_kotlin.$_$.sf;
  var UShort = kotlin_kotlin.$_$.yf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ng;
  var asSequence = kotlin_kotlin.$_$.o5;
  var get_js = kotlin_kotlin.$_$.kb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l4;
  var findAssociatedObject = kotlin_kotlin.$_$.a;
  var get_indices = kotlin_kotlin.$_$.t6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var get_indices_0 = kotlin_kotlin.$_$.s6;
  var get_longArrayClass = kotlin_kotlin.$_$.p9;
  var mapOf = kotlin_kotlin.$_$.e7;
  var Companion_instance = kotlin_kotlin.$_$.r4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m2;
  var createFailure = kotlin_kotlin.$_$.fg;
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
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.dn(this);
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
    return $super === VOID ? this.pq(descriptor, index, deserializer, previousValue) : $super.pq.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.dq(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.cn(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.bn().co();
    if (isNullabilitySupported) {
      return this.vr(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.yq();
    } else {
      this.yr();
      this.vr(serializer, value);
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
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
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
    return this.x16(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
  function DeserializationStrategy() {
  }
  function SerializationStrategy() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.fn_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.pn('type', serializer_0(StringCompanionObject_instance).bn());
      $this$buildSerialDescriptor.pn('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.en_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.jn_1 = this$0.fn_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.en_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return function (p0) {
      return p0.bn();
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.en_1 = baseClass;
    this.fn_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.gn_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).qn = function () {
    return this.en_1;
  };
  protoOf(PolymorphicSerializer).bn = function () {
    var tmp0 = this.gn_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.en_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.sn(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.qn());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.tn(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(getKClassFromExpression(value), _this__u8e3s4.qn());
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
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    var tmp0_message = missingFields.d1() === 1 ? "Field '" + missingFields.e1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing";
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
    this.un_1 = missingFields;
    this.vn_1 = serialName;
  }
  protoOf(MissingFieldException).wn = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.un_1, this.vn_1);
  };
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
      var tmp$ret$0 = typeOrThrow(item);
      destination.c1(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.yn(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.xn()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        var tmp_2;
        if (_Result___get_isFailure__impl__jpiriv(this_1)) {
          tmp_2 = null;
        } else {
          var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
        tmp_1 = tmp_2;
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_4;
    if (typeArguments.r()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.yn(rootClass) : tmp0_elvis_lhs;
      var tmp_5;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp1_elvis_lhs;
      }
      tmp_4 = tmp_5;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.zn(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_7;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_7 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_7 = tmp4_elvis_lhs;
      }
      tmp_4 = tmp_7;
    }
    var contextualSerializer = tmp_4;
    var tmp_8;
    if (contextualSerializer == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_8 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_8;
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
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.c1(tmp$ret$0);
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
        var tmp$ret$3 = tmp_0;
        destination_0.c1(tmp$ret$3);
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
      tmp = new ArrayListSerializer(serializers.e1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.e1(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.e1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.e1(0), serializers.e1(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.e1(0), serializers.e1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.e1(0), serializers.e1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.e1(0), serializers.e1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.e1(0), serializers.e1(1), serializers.e1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.e1(0));
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
      return $typeArguments.e1(0).j();
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().ao(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().ao(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().bo(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().bo(clazz, types);
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
      return $types.e1(0).j();
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
      return $types.e1(0).j();
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
    if (_this__u8e3s4.bn().co()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.yn(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.bn();
    }
    return tmp;
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ho_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.do_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.go_1 = original;
    this.ho_1 = kClass;
    this.io_1 = this.go_1.jo() + '<' + this.ho_1.o() + '>';
  }
  protoOf(ContextDescriptor).jo = function () {
    return this.io_1;
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
    return equals(this.go_1, another.go_1) && another.ho_1.equals(this.ho_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.ho_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.io_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.ho_1) + ', original: ' + toString(this.go_1) + ')';
  };
  protoOf(ContextDescriptor).ko = function () {
    return this.go_1.ko();
  };
  protoOf(ContextDescriptor).co = function () {
    return this.go_1.co();
  };
  protoOf(ContextDescriptor).lo = function () {
    return this.go_1.lo();
  };
  protoOf(ContextDescriptor).mo = function () {
    return this.go_1.mo();
  };
  protoOf(ContextDescriptor).no = function () {
    return this.go_1.no();
  };
  protoOf(ContextDescriptor).oo = function (index) {
    return this.go_1.oo(index);
  };
  protoOf(ContextDescriptor).po = function (name) {
    return this.go_1.po(name);
  };
  protoOf(ContextDescriptor).qo = function (index) {
    return this.go_1.qo(index);
  };
  protoOf(ContextDescriptor).ro = function (index) {
    return this.go_1.ro(index);
  };
  protoOf(ContextDescriptor).so = function (index) {
    return this.go_1.so(index);
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
    this.uo_1 = $this_elementNames;
    this.to_1 = $this_elementNames.mo();
  }
  protoOf(elementNames$1).u = function () {
    return this.to_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.uo_1.mo();
    var _unary__edvuaz = this.to_1;
    this.to_1 = _unary__edvuaz - 1 | 0;
    return this.uo_1.oo(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.vo_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.vo_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.xo_1 = $this_elementDescriptors;
    this.wo_1 = $this_elementDescriptors.mo();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.wo_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.xo_1.mo();
    var _unary__edvuaz = this.wo_1;
    this.wo_1 = _unary__edvuaz - 1 | 0;
    return this.xo_1.ro(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.yo_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.yo_1);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.kn_1.d1(), toList(typeParameters), sdBuilder);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.hn_1 = serialName;
    this.in_1 = false;
    this.jn_1 = emptyList();
    this.kn_1 = ArrayList_init_$Create$_0();
    this.ln_1 = HashSet_init_$Create$();
    this.mn_1 = ArrayList_init_$Create$_0();
    this.nn_1 = ArrayList_init_$Create$_0();
    this.on_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).zo = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.ln_1.c1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.hn_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.kn_1.c1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.mn_1.c1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.nn_1.c1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.on_1.c1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).pn = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.zo(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.zo.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.kn_1.d1(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.lp_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.kp_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return function (p0) {
      return _get__hashCode__tgwhef(p0);
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.ap_1 = serialName;
    this.bp_1 = kind;
    this.cp_1 = elementsCount;
    this.dp_1 = builder.jn_1;
    this.ep_1 = toHashSet(builder.kn_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.kn_1;
    tmp.fp_1 = copyToArray(this_0);
    this.gp_1 = compactArray(builder.mn_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.nn_1;
    tmp_0.hp_1 = copyToArray(this_1);
    this.ip_1 = toBooleanArray(builder.on_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.fp_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = to(item.je_1, item.ie_1);
      destination.c1(tmp$ret$2);
    }
    tmp_1.jp_1 = toMap(destination);
    this.kp_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.lp_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).jo = function () {
    return this.ap_1;
  };
  protoOf(SerialDescriptorImpl).ko = function () {
    return this.bp_1;
  };
  protoOf(SerialDescriptorImpl).mo = function () {
    return this.cp_1;
  };
  protoOf(SerialDescriptorImpl).no = function () {
    return this.dp_1;
  };
  protoOf(SerialDescriptorImpl).mp = function () {
    return this.ep_1;
  };
  protoOf(SerialDescriptorImpl).oo = function (index) {
    return getChecked(this.fp_1, index);
  };
  protoOf(SerialDescriptorImpl).po = function (name) {
    var tmp0_elvis_lhs = this.jp_1.n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).qo = function (index) {
    return getChecked(this.hp_1, index);
  };
  protoOf(SerialDescriptorImpl).ro = function (index) {
    return getChecked(this.gp_1, index);
  };
  protoOf(SerialDescriptorImpl).so = function (index) {
    return getChecked_0(this.ip_1, index);
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
      if (!(this.jo() === other.jo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.kp_1, other.kp_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.mo() === other.mo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.mo();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ro(index).jo() === other.ro(index).jo())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ro(index).ko(), other.ro(index).ko())) {
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
  protoOf(AbstractDecoder).np = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).op = function () {
    return true;
  };
  protoOf(AbstractDecoder).pp = function () {
    return null;
  };
  protoOf(AbstractDecoder).qp = function () {
    var tmp = this.np();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).rp = function () {
    var tmp = this.np();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).sp = function () {
    var tmp = this.np();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tp = function () {
    var tmp = this.np();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).up = function () {
    var tmp = this.np();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vp = function () {
    var tmp = this.np();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wp = function () {
    var tmp = this.np();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xp = function () {
    var tmp = this.np();
    return tmp instanceof Char ? tmp.v1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).yp = function () {
    var tmp = this.np();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zp = function (enumDescriptor) {
    var tmp = this.np();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).aq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).bq = function (deserializer, previousValue) {
    return this.cq(deserializer);
  };
  protoOf(AbstractDecoder).dq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).eq = function (descriptor) {
  };
  protoOf(AbstractDecoder).fq = function (descriptor, index) {
    return this.qp();
  };
  protoOf(AbstractDecoder).gq = function (descriptor, index) {
    return this.rp();
  };
  protoOf(AbstractDecoder).hq = function (descriptor, index) {
    return this.sp();
  };
  protoOf(AbstractDecoder).iq = function (descriptor, index) {
    return this.tp();
  };
  protoOf(AbstractDecoder).jq = function (descriptor, index) {
    return this.up();
  };
  protoOf(AbstractDecoder).kq = function (descriptor, index) {
    return this.vp();
  };
  protoOf(AbstractDecoder).lq = function (descriptor, index) {
    return this.wp();
  };
  protoOf(AbstractDecoder).mq = function (descriptor, index) {
    return this.xp();
  };
  protoOf(AbstractDecoder).nq = function (descriptor, index) {
    return this.yp();
  };
  protoOf(AbstractDecoder).oq = function (descriptor, index) {
    return this.aq(descriptor.ro(index));
  };
  protoOf(AbstractDecoder).pq = function (descriptor, index, deserializer, previousValue) {
    return this.bq(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).rq = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.bn().co();
    var tmp;
    if (isNullabilitySupported || this.op()) {
      tmp = this.bq(deserializer, previousValue);
    } else {
      tmp = this.pp();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).dq = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).eq = function (descriptor) {
  };
  protoOf(AbstractEncoder).wq = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).xq = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).yq = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).zq = function (value) {
    return this.xq(value);
  };
  protoOf(AbstractEncoder).ar = function (value) {
    return this.xq(value);
  };
  protoOf(AbstractEncoder).br = function (value) {
    return this.xq(value);
  };
  protoOf(AbstractEncoder).cr = function (value) {
    return this.xq(value);
  };
  protoOf(AbstractEncoder).dr = function (value) {
    return this.xq(value);
  };
  protoOf(AbstractEncoder).er = function (value) {
    return this.xq(value);
  };
  protoOf(AbstractEncoder).fr = function (value) {
    return this.xq(value);
  };
  protoOf(AbstractEncoder).gr = function (value) {
    return this.xq(new Char(value));
  };
  protoOf(AbstractEncoder).hr = function (value) {
    return this.xq(value);
  };
  protoOf(AbstractEncoder).ir = function (enumDescriptor, index) {
    return this.xq(index);
  };
  protoOf(AbstractEncoder).jr = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).kr = function (descriptor, index, value) {
    if (this.wq(descriptor, index)) {
      this.zq(value);
    }
  };
  protoOf(AbstractEncoder).lr = function (descriptor, index, value) {
    if (this.wq(descriptor, index)) {
      this.ar(value);
    }
  };
  protoOf(AbstractEncoder).mr = function (descriptor, index, value) {
    if (this.wq(descriptor, index)) {
      this.br(value);
    }
  };
  protoOf(AbstractEncoder).nr = function (descriptor, index, value) {
    if (this.wq(descriptor, index)) {
      this.cr(value);
    }
  };
  protoOf(AbstractEncoder).or = function (descriptor, index, value) {
    if (this.wq(descriptor, index)) {
      this.dr(value);
    }
  };
  protoOf(AbstractEncoder).pr = function (descriptor, index, value) {
    if (this.wq(descriptor, index)) {
      this.er(value);
    }
  };
  protoOf(AbstractEncoder).qr = function (descriptor, index, value) {
    if (this.wq(descriptor, index)) {
      this.fr(value);
    }
  };
  protoOf(AbstractEncoder).rr = function (descriptor, index, value) {
    if (this.wq(descriptor, index)) {
      this.gr(value);
    }
  };
  protoOf(AbstractEncoder).sr = function (descriptor, index, value) {
    if (this.wq(descriptor, index)) {
      this.hr(value);
    }
  };
  protoOf(AbstractEncoder).tr = function (descriptor, index) {
    return this.wq(descriptor, index) ? this.jr(descriptor.ro(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).ur = function (descriptor, index, serializer, value) {
    if (this.wq(descriptor, index)) {
      this.vr(serializer, value);
    }
  };
  protoOf(AbstractEncoder).wr = function (descriptor, index, serializer, value) {
    if (this.wq(descriptor, index)) {
      this.xr(serializer, value);
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
    var klassName = compositeDecoder.nq($this.bn(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.qq($this.bn(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).rn = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.bn();
    var composite = encoder.dq(descriptor);
    composite.sr(this.bn(), 0, actualSerializer.bn().jo());
    var tmp = this.bn();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.ur(tmp, 1, tmp$ret$0, value);
    composite.eq(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).cn = function (encoder, value) {
    return this.rn(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).dn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.bn();
    var composite = decoder.dq(descriptor);
    var tmp$ret$0;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.tq()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.uq(this.bn());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.nq(this.bn(), index);
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
            value = composite.qq(this.bn(), index, serializer);
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
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.eq(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).sn = function (decoder, klassName) {
    return decoder.sq().bs(this.qn(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).tn = function (encoder, value) {
    return encoder.sq().cs(this.qn(), value);
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
    this.ds_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).bn = function () {
    return this.ds_1;
  };
  protoOf(NothingSerializer_0).es = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).cn = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.es(encoder, tmp);
  };
  protoOf(NothingSerializer_0).dn = function (decoder) {
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
    this.fs_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).bn = function () {
    return this.fs_1;
  };
  protoOf(DurationSerializer).gs = function (encoder, value) {
    encoder.hr(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).cn = function (encoder, value) {
    return this.gs(encoder, value instanceof Duration ? value.jj_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).hs = function (decoder) {
    return Companion_getInstance().kj(decoder.yp());
  };
  protoOf(DurationSerializer).dn = function (decoder) {
    return new Duration(this.hs(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.is_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).bn = function () {
    return this.is_1;
  };
  protoOf(InstantSerializer).js = function (encoder, value) {
    encoder.hr(value.toString());
  };
  protoOf(InstantSerializer).cn = function (encoder, value) {
    return this.js(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).dn = function (decoder) {
    return Companion_getInstance_0().wj(decoder.yp());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.ks_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).bn = function () {
    return this.ks_1;
  };
  protoOf(UuidSerializer).ls = function (encoder, value) {
    encoder.hr(value.toString());
  };
  protoOf(UuidSerializer).cn = function (encoder, value) {
    return this.ls(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).dn = function (decoder) {
    return Companion_getInstance_1().cl(decoder.yp());
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
  protoOf(ArrayClassDesc).jo = function () {
    return 'kotlin.Array';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).jo = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).jo = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).jo = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.os_1 = elementDescriptor;
    this.ps_1 = 1;
  }
  protoOf(ListLikeDescriptor).ko = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).mo = function () {
    return this.ps_1;
  };
  protoOf(ListLikeDescriptor).oo = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).po = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).so = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.jo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).qo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.jo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).ro = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.jo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.os_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.os_1, other.os_1) && this.jo() === other.jo())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.os_1), 31) + getStringHashCode(this.jo()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.jo() + '(' + toString(this.os_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.qs_1 = serialName;
    this.rs_1 = keyDescriptor;
    this.ss_1 = valueDescriptor;
    this.ts_1 = 2;
  }
  protoOf(MapLikeDescriptor).jo = function () {
    return this.qs_1;
  };
  protoOf(MapLikeDescriptor).ko = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).mo = function () {
    return this.ts_1;
  };
  protoOf(MapLikeDescriptor).oo = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).po = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).so = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.jo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).qo = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.jo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).ro = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.jo() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.rs_1;
        break;
      case 1:
        tmp = this.ss_1;
        break;
      default:
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
    if (!(this.jo() === other.jo()))
      return false;
    if (!equals(this.rs_1, other.rs_1))
      return false;
    if (!equals(this.ss_1, other.ss_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.jo());
    result = imul(31, result) + hashCode(this.rs_1) | 0;
    result = imul(31, result) + hashCode(this.ss_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.jo() + '(' + toString(this.rs_1) + ', ' + toString(this.ss_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.ct_1 = primitive.jo() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).jo = function () {
    return this.ct_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.et_1 = kClass;
    this.ft_1 = new ArrayClassDesc(eSerializer.bn());
  }
  protoOf(ReferenceArraySerializer).bn = function () {
    return this.ft_1;
  };
  protoOf(ReferenceArraySerializer).gt = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).ht = function (_this__u8e3s4) {
    return this.gt((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).it = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).jt = function (_this__u8e3s4) {
    return this.it((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).kt = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).lt = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(ReferenceArraySerializer).mt = function (_this__u8e3s4) {
    return this.lt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).nt = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.et_1);
  };
  protoOf(ReferenceArraySerializer).ot = function (_this__u8e3s4) {
    return this.nt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).pt = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).qt = function (_this__u8e3s4) {
    return this.pt((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).rt = function (_this__u8e3s4, size) {
    return _this__u8e3s4.l5(size);
  };
  protoOf(ReferenceArraySerializer).st = function (_this__u8e3s4, size) {
    return this.rt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).tt = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v2(index, element);
  };
  protoOf(ReferenceArraySerializer).ut = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.tt(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.du_1 = new LinkedHashMapClassDesc(kSerializer.bn(), vSerializer.bn());
  }
  protoOf(LinkedHashMapSerializer).bn = function () {
    return this.du_1;
  };
  protoOf(LinkedHashMapSerializer).eu = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(LinkedHashMapSerializer).ht = function (_this__u8e3s4) {
    return this.eu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).fu = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(LinkedHashMapSerializer).jt = function (_this__u8e3s4) {
    return this.fu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).kt = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).gu = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.d1(), 2);
  };
  protoOf(LinkedHashMapSerializer).mt = function (_this__u8e3s4) {
    return this.gu(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).hu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).ot = function (_this__u8e3s4) {
    return this.hu(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).iu = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).qt = function (_this__u8e3s4) {
    return this.iu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ju = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).st = function (_this__u8e3s4, size) {
    return this.ju(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.pu_1 = new ArrayListClassDesc(element.bn());
  }
  protoOf(ArrayListSerializer).bn = function () {
    return this.pu_1;
  };
  protoOf(ArrayListSerializer).kt = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).qu = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(ArrayListSerializer).mt = function (_this__u8e3s4) {
    return this.qu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ru = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).ot = function (_this__u8e3s4) {
    return this.ru(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).su = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).qt = function (_this__u8e3s4) {
    return this.su((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).tu = function (_this__u8e3s4, size) {
    return _this__u8e3s4.l5(size);
  };
  protoOf(ArrayListSerializer).st = function (_this__u8e3s4, size) {
    return this.tu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).uu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.v2(index, element);
  };
  protoOf(ArrayListSerializer).ut = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.uu(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.zu_1 = new HashSetClassDesc(eSerializer.bn());
  }
  protoOf(HashSetSerializer).bn = function () {
    return this.zu_1;
  };
  protoOf(HashSetSerializer).kt = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).av = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(HashSetSerializer).mt = function (_this__u8e3s4) {
    return this.av(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).bv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).ot = function (_this__u8e3s4) {
    return this.bv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).cv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).qt = function (_this__u8e3s4) {
    return this.cv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).dv = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).st = function (_this__u8e3s4, size) {
    return this.dv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).ev = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(HashSetSerializer).ut = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.ev(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.gv_1 = new LinkedHashSetClassDesc(eSerializer.bn());
  }
  protoOf(LinkedHashSetSerializer).bn = function () {
    return this.gv_1;
  };
  protoOf(LinkedHashSetSerializer).kt = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).hv = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(LinkedHashSetSerializer).mt = function (_this__u8e3s4) {
    return this.hv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).iv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).ot = function (_this__u8e3s4) {
    return this.iv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).cv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).qt = function (_this__u8e3s4) {
    return this.cv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).jv = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).st = function (_this__u8e3s4, size) {
    return this.jv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).kv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(LinkedHashSetSerializer).ut = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.kv(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.nv_1 = new HashMapClassDesc(kSerializer.bn(), vSerializer.bn());
  }
  protoOf(HashMapSerializer).bn = function () {
    return this.nv_1;
  };
  protoOf(HashMapSerializer).eu = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(HashMapSerializer).ht = function (_this__u8e3s4) {
    return this.eu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).fu = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(HashMapSerializer).jt = function (_this__u8e3s4) {
    return this.fu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).kt = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).ov = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.d1(), 2);
  };
  protoOf(HashMapSerializer).mt = function (_this__u8e3s4) {
    return this.ov(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).pv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).ot = function (_this__u8e3s4) {
    return this.pv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).iu = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).qt = function (_this__u8e3s4) {
    return this.iu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).qv = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).st = function (_this__u8e3s4, size) {
    return this.qv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.vt_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).wt = function (encoder, value) {
    var size = this.ht(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.bn();
    var composite = encoder.zr(descriptor, size);
    var iterator = this.jt(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.ur(this.bn(), index, this.vt_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.eq(descriptor);
  };
  protoOf(CollectionLikeSerializer).cn = function (encoder, value) {
    return this.wt(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).xt = function (decoder, builder, startIndex, size) {
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
        this.yt(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).yt = function (decoder, index, builder, checkIndex) {
    this.ut(builder, index, decoder.qq(this.bn(), index, this.vt_1));
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ku_1 = keySerializer;
    this.lu_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).mu = function (decoder, builder, startIndex, size) {
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
        this.nu(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).xt = function (decoder, builder, startIndex, size) {
    return this.mu(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).nu = function (decoder, index, builder, checkIndex) {
    var key = decoder.qq(this.bn(), index, this.ku_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.uq(this.bn());
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
      var tmp_2 = this.lu_1.bn().ko();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.pq(this.bn(), vIndex, this.lu_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.qq(this.bn(), vIndex, this.lu_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.q2(key, value);
  };
  protoOf(MapLikeSerializer).yt = function (decoder, index, builder, checkIndex) {
    return this.nu(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).wt = function (encoder, value) {
    var size = this.ht(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.bn();
    var composite = encoder.zr(descriptor, size);
    var iterator = this.jt(value);
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
      var tmp = this.bn();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.ur(tmp, _unary__edvuaz, this.ku_1, k);
      var tmp_0 = this.bn();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.ur(tmp_0, _unary__edvuaz_0, this.lu_1, v);
    }
    composite.eq(descriptor);
  };
  protoOf(MapLikeSerializer).cn = function (encoder, value) {
    return this.wt(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).wu = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(CollectionSerializer).ht = function (_this__u8e3s4) {
    return this.wu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).xu = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(CollectionSerializer).jt = function (_this__u8e3s4) {
    return this.xu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function readSize($this, decoder, builder) {
    var size = decoder.vq($this.bn());
    $this.st(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).au = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.qt(previous);
    var builder = tmp1_elvis_lhs == null ? this.kt() : tmp1_elvis_lhs;
    var startIndex = this.mt(builder);
    var compositeDecoder = decoder.dq(this.bn());
    if (compositeDecoder.tq()) {
      this.xt(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.uq(this.bn());
        if (index === -1)
          break $l$loop;
        this.zt(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.eq(this.bn());
    return this.ot(builder);
  };
  protoOf(AbstractCollectionSerializer).dn = function (decoder) {
    return this.au(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).zt = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.yt(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.yt.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.sv_1 = new PrimitiveArrayDescriptor(primitiveSerializer.bn());
  }
  protoOf(PrimitiveArraySerializer).bn = function () {
    return this.sv_1;
  };
  protoOf(PrimitiveArraySerializer).tv = function (_this__u8e3s4) {
    return _this__u8e3s4.uv();
  };
  protoOf(PrimitiveArraySerializer).mt = function (_this__u8e3s4) {
    return this.tv(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).vv = function (_this__u8e3s4) {
    return _this__u8e3s4.wv();
  };
  protoOf(PrimitiveArraySerializer).ot = function (_this__u8e3s4) {
    return this.vv(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).xv = function (_this__u8e3s4, size) {
    return _this__u8e3s4.yv(size);
  };
  protoOf(PrimitiveArraySerializer).st = function (_this__u8e3s4, size) {
    return this.xv(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).zv = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).jt = function (_this__u8e3s4) {
    return this.zv((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).aw = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).ut = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.aw(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).kt = function () {
    return this.qt(this.bw());
  };
  protoOf(PrimitiveArraySerializer).ew = function (encoder, value) {
    var size = this.ht(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.sv_1;
    var composite = encoder.zr(descriptor, size);
    this.dw(composite, value, size);
    composite.eq(descriptor);
  };
  protoOf(PrimitiveArraySerializer).cn = function (encoder, value) {
    return this.ew(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).wt = function (encoder, value) {
    return this.ew(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).dn = function (decoder) {
    return this.au(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).fw = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.uv() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.yv(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.yv.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.gw_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(new Long(-1, -1), elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.kw_1[slot] = bitwiseOr($this.kw_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.kw_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.kw_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.iw_1($this.hw_1, index)) {
            $this.kw_1[slot] = slotMarks;
            return index;
          }
        }
        $this.kw_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.hw_1 = descriptor;
    this.iw_1 = readIfAbsent;
    var elementsCount = this.hw_1.mo();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.jw_1 = tmp_0;
      this.kw_1 = Companion_getInstance_8().gw_1;
    } else {
      this.jw_1 = new Long(0, 0);
      this.kw_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).lw = function (index) {
    if (index < 64) {
      this.jw_1 = bitwiseOr(this.jw_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).mw = function () {
    var elementsCount = this.hw_1.mo();
    while (!equalsLong(this.jw_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.jw_1));
      this.jw_1 = bitwiseOr(this.jw_1, shiftLeft(new Long(1, 0), index));
      if (this.iw_1(this.hw_1, index)) {
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
        descriptor.zw(element);
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
      descriptor.ax(elementName);
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
          descriptor.bx(element_0);
        }
      }
    }
    return EnumSerializer_init_$Create$(serialName, values, descriptor);
  }
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.px_1;
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
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.oo(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.ox_1 = ENUM_getInstance();
    var tmp = this;
    tmp.px_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).ko = function () {
    return this.ox_1;
  };
  protoOf(EnumDescriptor).ro = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.ko() === ENUM_getInstance()))
      return false;
    if (!(this.jo() === other.jo()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.jo() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.jo());
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
    $this.tx_1 = descriptor;
    return $this;
  }
  function EnumSerializer_init_$Create$(serialName, values, descriptor) {
    return EnumSerializer_init_$Init$(serialName, values, descriptor, objectCreate(protoOf(EnumSerializer)));
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.sx_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.sx_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.ax(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.tx_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return function (p0) {
      return p0.bn();
    };
  }
  function EnumSerializer(serialName, values) {
    this.sx_1 = values;
    this.tx_1 = null;
    var tmp = this;
    tmp.ux_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).bn = function () {
    var tmp0 = this.ux_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).vx = function (encoder, value) {
    var index = indexOf(this.sx_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.bn().jo() + ', ' + ('must be one of ' + contentToString(this.sx_1)));
    }
    encoder.ir(this.bn(), index);
  };
  protoOf(EnumSerializer).cn = function (encoder, value) {
    return this.vx(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).dn = function (decoder) {
    var index = decoder.zp(this.bn());
    if (!(0 <= index ? index <= (this.sx_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.bn().jo() + ' enum values, ' + ('values size is ' + this.sx_1.length));
    }
    return this.sx_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.bn().jo() + '>';
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.iy_1 = true;
  }
  protoOf(InlineClassDescriptor).lo = function () {
    return this.iy_1;
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
      if (!(this.jo() === other.jo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.iy_1 && contentEquals(this.qx(), other.qx()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.mo() === other.mo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.mo();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ro(index).jo() === other.ro(index).jo())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ro(index).ko(), other.ro(index).ko())) {
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
    this.jy_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).ky = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.jy_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).bn = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).cn = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).dn = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.wn(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.my_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).sq = function () {
    return this.my_1;
  };
  protoOf(NoOpEncoder).xq = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).yq = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).zq = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ar = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).br = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).cr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).dr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).er = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).fr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).gr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).hr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ir = function (enumDescriptor, index) {
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
    this.ny_1 = OBJECT_getInstance();
    this.oy_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).ko = function () {
    return this.ny_1;
  };
  protoOf(NothingSerialDescriptor).jo = function () {
    return this.oy_1;
  };
  protoOf(NothingSerialDescriptor).mo = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).oo = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).po = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).so = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).ro = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).qo = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.oy_1) + imul(31, this.ny_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.py_1 = serializer;
    this.qy_1 = new SerialDescriptorForNullable(this.py_1.bn());
  }
  protoOf(NullableSerializer).bn = function () {
    return this.qy_1;
  };
  protoOf(NullableSerializer).ry = function (encoder, value) {
    if (!(value == null)) {
      encoder.yr();
      encoder.vr(this.py_1, value);
    } else {
      encoder.yq();
    }
  };
  protoOf(NullableSerializer).cn = function (encoder, value) {
    return this.ry(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).dn = function (decoder) {
    return decoder.op() ? decoder.cq(this.py_1) : decoder.pp();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.py_1, other.py_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.py_1);
  };
  function SerialDescriptorForNullable(original) {
    this.do_1 = original;
    this.eo_1 = this.do_1.jo() + '?';
    this.fo_1 = cachedSerialNames(this.do_1);
  }
  protoOf(SerialDescriptorForNullable).jo = function () {
    return this.eo_1;
  };
  protoOf(SerialDescriptorForNullable).mp = function () {
    return this.fo_1;
  };
  protoOf(SerialDescriptorForNullable).co = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.do_1, other.do_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.do_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.do_1), 31);
  };
  protoOf(SerialDescriptorForNullable).ko = function () {
    return this.do_1.ko();
  };
  protoOf(SerialDescriptorForNullable).lo = function () {
    return this.do_1.lo();
  };
  protoOf(SerialDescriptorForNullable).mo = function () {
    return this.do_1.mo();
  };
  protoOf(SerialDescriptorForNullable).no = function () {
    return this.do_1.no();
  };
  protoOf(SerialDescriptorForNullable).oo = function (index) {
    return this.do_1.oo(index);
  };
  protoOf(SerialDescriptorForNullable).po = function (name) {
    return this.do_1.po(name);
  };
  protoOf(SerialDescriptorForNullable).qo = function (index) {
    return this.do_1.qo(index);
  };
  protoOf(SerialDescriptorForNullable).ro = function (index) {
    return this.do_1.ro(index);
  };
  protoOf(SerialDescriptorForNullable).so = function (index) {
    return this.do_1.so(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.jn_1 = this$0.ty_1;
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
    return function (p0) {
      return p0.bn();
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.sy_1 = objectInstance;
    this.ty_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.uy_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).bn = function () {
    var tmp0 = this.uy_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).rn = function (encoder, value) {
    encoder.dq(this.bn()).eq(this.bn());
  };
  protoOf(ObjectSerializer).cn = function (encoder, value) {
    return this.rn(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).dn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.bn();
    var composite = decoder.dq(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.tq()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.uq(this.bn());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.eq(descriptor);
    return this.sy_1;
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
    var tmp0 = _this__u8e3s4.ji_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.ji_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
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
      return _this__u8e3s4.mp();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.mo());
    var inductionVariable = 0;
    var last = _this__u8e3s4.mo();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.oo(i);
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
          var element = descriptor.oo(i);
          missingFields.c1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.jo());
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
                var element = descriptor.oo(imul(maskSlot, 32) + i | 0);
                missingFields.c1(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.jo());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.ww_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.yw_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.rw_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.rw_1[i];
        indices.q2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ow_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ky();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ow_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ly();
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
          var tmp$ret$0 = item.bn();
          destination.c1(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return function (p0) {
      return p0.qx();
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.qx());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.nw_1 = serialName;
    this.ow_1 = generatedSerializer;
    this.pw_1 = elementsCount;
    this.qw_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.pw_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.rw_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.pw_1;
    tmp_3.sw_1 = Array(size);
    this.tw_1 = null;
    this.uw_1 = booleanArray(this.pw_1);
    this.vw_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.ww_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.xw_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.yw_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).jo = function () {
    return this.nw_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).mo = function () {
    return this.pw_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ko = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).no = function () {
    var tmp0_elvis_lhs = this.tw_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).mp = function () {
    return this.vw_1.o2();
  };
  protoOf(PluginGeneratedSerialDescriptor).qx = function () {
    var tmp0 = this.xw_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).rx = function (name, isOptional) {
    this.qw_1 = this.qw_1 + 1 | 0;
    this.rw_1[this.qw_1] = name;
    this.uw_1[this.qw_1] = isOptional;
    this.sw_1[this.qw_1] = null;
    if (this.qw_1 === (this.pw_1 - 1 | 0)) {
      this.vw_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).ax = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.rx(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.rx.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).bx = function (annotation) {
    // Inline function 'kotlin.let' call
    var it = this.sw_1[this.qw_1];
    var tmp;
    if (it == null) {
      var result = ArrayList_init_$Create$(1);
      this.sw_1[this.qw_1] = result;
      tmp = result;
    } else {
      tmp = it;
    }
    var list = tmp;
    list.c1(annotation);
  };
  protoOf(PluginGeneratedSerialDescriptor).zw = function (a) {
    if (this.tw_1 == null) {
      this.tw_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.tw_1).c1(a);
  };
  protoOf(PluginGeneratedSerialDescriptor).ro = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).bn();
  };
  protoOf(PluginGeneratedSerialDescriptor).so = function (index) {
    return getChecked_0(this.uw_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).qo = function (index) {
    var tmp0_elvis_lhs = getChecked(this.sw_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).oo = function (index) {
    return getChecked(this.rw_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).po = function (name) {
    var tmp0_elvis_lhs = this.vw_1.n2(name);
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
      if (!(this.jo() === other.jo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.qx(), other.qx())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.mo() === other.mo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.mo();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ro(index).jo() === other.ro(index).jo())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ro(index).ko(), other.ro(index).ko())) {
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
    var result = getStringHashCode(_this__u8e3s4.jo());
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
      var tmp0_safe_receiver = element.jo();
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
      var tmp0_safe_receiver_0 = element_0.ko();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.mo());
    var tmp_0 = _this__u8e3s4.jo() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.oo(i) + ': ' + $this_toStringImpl.ro(i).jo();
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
  protoOf(CharArraySerializer_0).yy = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.yy((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).zy = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.zy((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).bw = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).az = function (decoder, index, builder, checkIndex) {
    builder.dz(decoder.mq(this.sv_1, index));
  };
  protoOf(CharArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.az(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.az(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).ez = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.rr(this.sv_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).dw = function (encoder, content, size) {
    return this.ez(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).hz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.hz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).iz = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.iz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).bw = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).jz = function (decoder, index, builder, checkIndex) {
    builder.mz(decoder.lq(this.sv_1, index));
  };
  protoOf(DoubleArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.jz(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.jz(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).nz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.qr(this.sv_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).dw = function (encoder, content, size) {
    return this.nz(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).qz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.qz((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).rz = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.rz((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).bw = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).sz = function (decoder, index, builder, checkIndex) {
    builder.vz(decoder.kq(this.sv_1, index));
  };
  protoOf(FloatArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.sz(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.sz(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).wz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.pr(this.sv_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).dw = function (encoder, content, size) {
    return this.wz(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_3()));
  }
  protoOf(LongArraySerializer_0).zz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.zz((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).a10 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.a10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).bw = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).b10 = function (decoder, index, builder, checkIndex) {
    builder.e10(decoder.jq(this.sv_1, index));
  };
  protoOf(LongArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.b10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.b10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).f10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.or(this.sv_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).dw = function (encoder, content, size) {
    return this.f10(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_4()));
  }
  protoOf(ULongArraySerializer_0).i10 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.i10(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.mm_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).j10 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.j10(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.mm_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).k10 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).bw = function () {
    return new ULongArray(this.k10());
  };
  protoOf(ULongArraySerializer_0).l10 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.oq(this.sv_1, index).up();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.o10(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.l10(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.l10(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).p10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.tr(this.sv_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.dr(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).dw = function (encoder, content, size) {
    return this.p10(encoder, content instanceof ULongArray ? content.mm_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).s10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.s10((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).t10 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.t10((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).bw = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).u10 = function (decoder, index, builder, checkIndex) {
    builder.x10(decoder.iq(this.sv_1, index));
  };
  protoOf(IntArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.u10(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.u10(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).y10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.nr(this.sv_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).dw = function (encoder, content, size) {
    return this.y10(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_5()));
  }
  protoOf(UIntArraySerializer_0).b11 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.b11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.bm_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).c11 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.c11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.bm_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).d11 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).bw = function () {
    return new UIntArray(this.d11());
  };
  protoOf(UIntArraySerializer_0).e11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.oq(this.sv_1, index).tp();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.h11(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.e11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.e11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).i11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.tr(this.sv_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.cr(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).dw = function (encoder, content, size) {
    return this.i11(encoder, content instanceof UIntArray ? content.bm_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).l11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.l11((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).m11 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.m11((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).bw = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).n11 = function (decoder, index, builder, checkIndex) {
    builder.q11(decoder.hq(this.sv_1, index));
  };
  protoOf(ShortArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.n11(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.n11(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).r11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.mr(this.sv_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).dw = function (encoder, content, size) {
    return this.r11(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_6()));
  }
  protoOf(UShortArraySerializer_0).u11 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.u11(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.xm_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).v11 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.v11(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.xm_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).w11 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).bw = function () {
    return new UShortArray(this.w11());
  };
  protoOf(UShortArraySerializer_0).x11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.oq(this.sv_1, index).sp();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.a12(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.x11(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.x11(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).b12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.tr(this.sv_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.br(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).dw = function (encoder, content, size) {
    return this.b12(encoder, content instanceof UShortArray ? content.xm_1 : THROW_CCE(), size);
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
  protoOf(ByteArraySerializer_0).e12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.e12((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).f12 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.f12((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).bw = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).g12 = function (decoder, index, builder, checkIndex) {
    builder.j12(decoder.gq(this.sv_1, index));
  };
  protoOf(ByteArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.g12(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.g12(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).k12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.lr(this.sv_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).dw = function (encoder, content, size) {
    return this.k12(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_7()));
  }
  protoOf(UByteArraySerializer_0).n12 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.n12(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.ql_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).o12 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.o12(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.ql_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).p12 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).bw = function () {
    return new UByteArray(this.p12());
  };
  protoOf(UByteArraySerializer_0).q12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.oq(this.sv_1, index).rp();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.t12(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.q12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.q12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).u12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.tr(this.sv_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.ar(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).dw = function (encoder, content, size) {
    return this.u12(encoder, content instanceof UByteArray ? content.ql_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).x12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).ht = function (_this__u8e3s4) {
    return this.x12((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).y12 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).qt = function (_this__u8e3s4) {
    return this.y12((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).bw = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).z12 = function (decoder, index, builder, checkIndex) {
    builder.c13(decoder.fq(this.sv_1, index));
  };
  protoOf(BooleanArraySerializer_0).yt = function (decoder, index, builder, checkIndex) {
    return this.z12(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).cw = function (decoder, index, builder, checkIndex) {
    return this.z12(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).d13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.kr(this.sv_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).dw = function (encoder, content, size) {
    return this.d13(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.bz_1 = bufferWithData;
    this.cz_1 = bufferWithData.length;
    this.yv(10);
  }
  protoOf(CharArrayBuilder).uv = function () {
    return this.cz_1;
  };
  protoOf(CharArrayBuilder).yv = function (requiredCapacity) {
    if (this.bz_1.length < requiredCapacity)
      this.bz_1 = copyOf(this.bz_1, coerceAtLeast(requiredCapacity, imul(this.bz_1.length, 2)));
  };
  protoOf(CharArrayBuilder).dz = function (c) {
    this.fw();
    var tmp = this.bz_1;
    var _unary__edvuaz = this.cz_1;
    this.cz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).wv = function () {
    return copyOf(this.bz_1, this.cz_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.kz_1 = bufferWithData;
    this.lz_1 = bufferWithData.length;
    this.yv(10);
  }
  protoOf(DoubleArrayBuilder).uv = function () {
    return this.lz_1;
  };
  protoOf(DoubleArrayBuilder).yv = function (requiredCapacity) {
    if (this.kz_1.length < requiredCapacity)
      this.kz_1 = copyOf_0(this.kz_1, coerceAtLeast(requiredCapacity, imul(this.kz_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).mz = function (c) {
    this.fw();
    var tmp = this.kz_1;
    var _unary__edvuaz = this.lz_1;
    this.lz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).wv = function () {
    return copyOf_0(this.kz_1, this.lz_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.tz_1 = bufferWithData;
    this.uz_1 = bufferWithData.length;
    this.yv(10);
  }
  protoOf(FloatArrayBuilder).uv = function () {
    return this.uz_1;
  };
  protoOf(FloatArrayBuilder).yv = function (requiredCapacity) {
    if (this.tz_1.length < requiredCapacity)
      this.tz_1 = copyOf_1(this.tz_1, coerceAtLeast(requiredCapacity, imul(this.tz_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).vz = function (c) {
    this.fw();
    var tmp = this.tz_1;
    var _unary__edvuaz = this.uz_1;
    this.uz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).wv = function () {
    return copyOf_1(this.tz_1, this.uz_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c10_1 = bufferWithData;
    this.d10_1 = bufferWithData.length;
    this.yv(10);
  }
  protoOf(LongArrayBuilder).uv = function () {
    return this.d10_1;
  };
  protoOf(LongArrayBuilder).yv = function (requiredCapacity) {
    if (this.c10_1.length < requiredCapacity)
      this.c10_1 = copyOf_2(this.c10_1, coerceAtLeast(requiredCapacity, imul(this.c10_1.length, 2)));
  };
  protoOf(LongArrayBuilder).e10 = function (c) {
    this.fw();
    var tmp = this.c10_1;
    var _unary__edvuaz = this.d10_1;
    this.d10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).wv = function () {
    return copyOf_2(this.c10_1, this.d10_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m10_1 = bufferWithData;
    this.n10_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.yv(10);
  }
  protoOf(ULongArrayBuilder).uv = function () {
    return this.n10_1;
  };
  protoOf(ULongArrayBuilder).yv = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.m10_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.m10_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.m10_1), 2));
      tmp.m10_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).o10 = function (c) {
    this.fw();
    var tmp = this.m10_1;
    var _unary__edvuaz = this.n10_1;
    this.n10_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).e13 = function () {
    var tmp0 = this.m10_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.n10_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).wv = function () {
    return new ULongArray(this.e13());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v10_1 = bufferWithData;
    this.w10_1 = bufferWithData.length;
    this.yv(10);
  }
  protoOf(IntArrayBuilder).uv = function () {
    return this.w10_1;
  };
  protoOf(IntArrayBuilder).yv = function (requiredCapacity) {
    if (this.v10_1.length < requiredCapacity)
      this.v10_1 = copyOf_3(this.v10_1, coerceAtLeast(requiredCapacity, imul(this.v10_1.length, 2)));
  };
  protoOf(IntArrayBuilder).x10 = function (c) {
    this.fw();
    var tmp = this.v10_1;
    var _unary__edvuaz = this.w10_1;
    this.w10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).wv = function () {
    return copyOf_3(this.v10_1, this.w10_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.f11_1 = bufferWithData;
    this.g11_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.yv(10);
  }
  protoOf(UIntArrayBuilder).uv = function () {
    return this.g11_1;
  };
  protoOf(UIntArrayBuilder).yv = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.f11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.f11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.f11_1), 2));
      tmp.f11_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).h11 = function (c) {
    this.fw();
    var tmp = this.f11_1;
    var _unary__edvuaz = this.g11_1;
    this.g11_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).f13 = function () {
    var tmp0 = this.f11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.g11_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).wv = function () {
    return new UIntArray(this.f13());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o11_1 = bufferWithData;
    this.p11_1 = bufferWithData.length;
    this.yv(10);
  }
  protoOf(ShortArrayBuilder).uv = function () {
    return this.p11_1;
  };
  protoOf(ShortArrayBuilder).yv = function (requiredCapacity) {
    if (this.o11_1.length < requiredCapacity)
      this.o11_1 = copyOf_4(this.o11_1, coerceAtLeast(requiredCapacity, imul(this.o11_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).q11 = function (c) {
    this.fw();
    var tmp = this.o11_1;
    var _unary__edvuaz = this.p11_1;
    this.p11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).wv = function () {
    return copyOf_4(this.o11_1, this.p11_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.y11_1 = bufferWithData;
    this.z11_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.yv(10);
  }
  protoOf(UShortArrayBuilder).uv = function () {
    return this.z11_1;
  };
  protoOf(UShortArrayBuilder).yv = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.y11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.y11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.y11_1), 2));
      tmp.y11_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).a12 = function (c) {
    this.fw();
    var tmp = this.y11_1;
    var _unary__edvuaz = this.z11_1;
    this.z11_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).g13 = function () {
    var tmp0 = this.y11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.z11_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).wv = function () {
    return new UShortArray(this.g13());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h12_1 = bufferWithData;
    this.i12_1 = bufferWithData.length;
    this.yv(10);
  }
  protoOf(ByteArrayBuilder).uv = function () {
    return this.i12_1;
  };
  protoOf(ByteArrayBuilder).yv = function (requiredCapacity) {
    if (this.h12_1.length < requiredCapacity)
      this.h12_1 = copyOf_5(this.h12_1, coerceAtLeast(requiredCapacity, imul(this.h12_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).j12 = function (c) {
    this.fw();
    var tmp = this.h12_1;
    var _unary__edvuaz = this.i12_1;
    this.i12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).wv = function () {
    return copyOf_5(this.h12_1, this.i12_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r12_1 = bufferWithData;
    this.s12_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.yv(10);
  }
  protoOf(UByteArrayBuilder).uv = function () {
    return this.s12_1;
  };
  protoOf(UByteArrayBuilder).yv = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.r12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.r12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.r12_1), 2));
      tmp.r12_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).t12 = function (c) {
    this.fw();
    var tmp = this.r12_1;
    var _unary__edvuaz = this.s12_1;
    this.s12_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).h13 = function () {
    var tmp0 = this.r12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.s12_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).wv = function () {
    return new UByteArray(this.h13());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a13_1 = bufferWithData;
    this.b13_1 = bufferWithData.length;
    this.yv(10);
  }
  protoOf(BooleanArrayBuilder).uv = function () {
    return this.b13_1;
  };
  protoOf(BooleanArrayBuilder).yv = function (requiredCapacity) {
    if (this.a13_1.length < requiredCapacity)
      this.a13_1 = copyOf_6(this.a13_1, coerceAtLeast(requiredCapacity, imul(this.a13_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).c13 = function (c) {
    this.fw();
    var tmp = this.a13_1;
    var _unary__edvuaz = this.b13_1;
    this.b13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).wv = function () {
    return copyOf_6(this.a13_1, this.b13_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.i13_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).bn = function () {
    return this.i13_1;
  };
  protoOf(StringSerializer).j13 = function (encoder, value) {
    return encoder.hr(value);
  };
  protoOf(StringSerializer).cn = function (encoder, value) {
    return this.j13(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).dn = function (decoder) {
    return decoder.yp();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.k13_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).bn = function () {
    return this.k13_1;
  };
  protoOf(BooleanSerializer).l13 = function (encoder, value) {
    return encoder.zq(value);
  };
  protoOf(BooleanSerializer).cn = function (encoder, value) {
    return this.l13(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).dn = function (decoder) {
    return decoder.qp();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.m13_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).bn = function () {
    return this.m13_1;
  };
  protoOf(IntSerializer).n13 = function (encoder, value) {
    return encoder.cr(value);
  };
  protoOf(IntSerializer).cn = function (encoder, value) {
    return this.n13(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).dn = function (decoder) {
    return decoder.tp();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.o13_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).bn = function () {
    return this.o13_1;
  };
  protoOf(DoubleSerializer).p13 = function (encoder, value) {
    return encoder.fr(value);
  };
  protoOf(DoubleSerializer).cn = function (encoder, value) {
    return this.p13(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).dn = function (decoder) {
    return decoder.wp();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.q13_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).bn = function () {
    return this.q13_1;
  };
  protoOf(LongSerializer).r13 = function (encoder, value) {
    return encoder.dr(value);
  };
  protoOf(LongSerializer).cn = function (encoder, value) {
    return this.r13(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).dn = function (decoder) {
    return decoder.up();
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
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.s13_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.s13_1 = serialName;
    this.t13_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).jo = function () {
    return this.s13_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).ko = function () {
    return this.t13_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).mo = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).oo = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).po = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).so = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).ro = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).qo = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.s13_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.s13_1 === other.s13_1 && equals(this.t13_1, other.t13_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.s13_1) + imul(31, this.t13_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().p2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.bn().jo();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.u13_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).bn = function () {
    return this.u13_1;
  };
  protoOf(ByteSerializer).v13 = function (encoder, value) {
    return encoder.ar(value);
  };
  protoOf(ByteSerializer).cn = function (encoder, value) {
    return this.v13(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).dn = function (decoder) {
    return decoder.rp();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.w13_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).bn = function () {
    return this.w13_1;
  };
  protoOf(ShortSerializer).x13 = function (encoder, value) {
    return encoder.br(value);
  };
  protoOf(ShortSerializer).cn = function (encoder, value) {
    return this.x13(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).dn = function (decoder) {
    return decoder.sp();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.y13_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).bn = function () {
    return this.y13_1;
  };
  protoOf(CharSerializer).z13 = function (encoder, value) {
    return encoder.gr(value);
  };
  protoOf(CharSerializer).cn = function (encoder, value) {
    return this.z13(encoder, value instanceof Char ? value.v1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).a14 = function (decoder) {
    return decoder.xp();
  };
  protoOf(CharSerializer).dn = function (decoder) {
    return new Char(this.a14(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.b14_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).bn = function () {
    return this.b14_1;
  };
  protoOf(FloatSerializer).c14 = function (encoder, value) {
    return encoder.er(value);
  };
  protoOf(FloatSerializer).cn = function (encoder, value) {
    return this.c14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).dn = function (decoder) {
    return decoder.vp();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.d14_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).bn = function () {
    return this.d14_1.bn();
  };
  protoOf(UnitSerializer).e14 = function (encoder, value) {
    this.d14_1.rn(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).cn = function (encoder, value) {
    return this.e14(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).f14 = function (decoder) {
    this.d14_1.dn(decoder);
  };
  protoOf(UnitSerializer).dn = function (decoder) {
    this.f14(decoder);
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
  protoOf(NamedValueDecoder).i14 = function (_this__u8e3s4, index) {
    return this.k14(this.j14(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).k14 = function (nestedName) {
    var tmp0_elvis_lhs = this.n14();
    return this.o14(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).j14 = function (descriptor, index) {
    return descriptor.oo(index);
  };
  protoOf(NamedValueDecoder).o14 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).p14 = function () {
    return this.l14_1.r() ? '$' : joinToString(this.l14_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.d15(tag);
    var r = block();
    if (!$this.m14_1) {
      $this.e15();
    }
    $this.m14_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.bq($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.bn().co();
      var tmp;
      if (isNullabilitySupported || tmp0.op()) {
        tmp = this$0.bq($deserializer, $previousValue);
      } else {
        tmp = tmp0.pp();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.l14_1 = ArrayList_init_$Create$_0();
    this.m14_1 = false;
  }
  protoOf(TaggedDecoder).sq = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).q14 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).r14 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).s14 = function (tag) {
    var tmp = this.q14(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t14 = function (tag) {
    var tmp = this.q14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u14 = function (tag) {
    var tmp = this.q14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v14 = function (tag) {
    var tmp = this.q14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w14 = function (tag) {
    var tmp = this.q14(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x14 = function (tag) {
    var tmp = this.q14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y14 = function (tag) {
    var tmp = this.q14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z14 = function (tag) {
    var tmp = this.q14(tag);
    return tmp instanceof Char ? tmp.v1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).a15 = function (tag) {
    var tmp = this.q14(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b15 = function (tag, enumDescriptor) {
    var tmp = this.q14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c15 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.d15(tag);
    return this;
  };
  protoOf(TaggedDecoder).bq = function (deserializer, previousValue) {
    return this.cq(deserializer);
  };
  protoOf(TaggedDecoder).aq = function (descriptor) {
    return this.c15(this.e15(), descriptor);
  };
  protoOf(TaggedDecoder).op = function () {
    var tmp0_elvis_lhs = this.n14();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.r14(currentTag);
  };
  protoOf(TaggedDecoder).pp = function () {
    return null;
  };
  protoOf(TaggedDecoder).qp = function () {
    return this.s14(this.e15());
  };
  protoOf(TaggedDecoder).rp = function () {
    return this.t14(this.e15());
  };
  protoOf(TaggedDecoder).sp = function () {
    return this.u14(this.e15());
  };
  protoOf(TaggedDecoder).tp = function () {
    return this.v14(this.e15());
  };
  protoOf(TaggedDecoder).up = function () {
    return this.w14(this.e15());
  };
  protoOf(TaggedDecoder).vp = function () {
    return this.x14(this.e15());
  };
  protoOf(TaggedDecoder).wp = function () {
    return this.y14(this.e15());
  };
  protoOf(TaggedDecoder).xp = function () {
    return this.z14(this.e15());
  };
  protoOf(TaggedDecoder).yp = function () {
    return this.a15(this.e15());
  };
  protoOf(TaggedDecoder).zp = function (enumDescriptor) {
    return this.b15(this.e15(), enumDescriptor);
  };
  protoOf(TaggedDecoder).dq = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).eq = function (descriptor) {
  };
  protoOf(TaggedDecoder).fq = function (descriptor, index) {
    return this.s14(this.i14(descriptor, index));
  };
  protoOf(TaggedDecoder).gq = function (descriptor, index) {
    return this.t14(this.i14(descriptor, index));
  };
  protoOf(TaggedDecoder).hq = function (descriptor, index) {
    return this.u14(this.i14(descriptor, index));
  };
  protoOf(TaggedDecoder).iq = function (descriptor, index) {
    return this.v14(this.i14(descriptor, index));
  };
  protoOf(TaggedDecoder).jq = function (descriptor, index) {
    return this.w14(this.i14(descriptor, index));
  };
  protoOf(TaggedDecoder).kq = function (descriptor, index) {
    return this.x14(this.i14(descriptor, index));
  };
  protoOf(TaggedDecoder).lq = function (descriptor, index) {
    return this.y14(this.i14(descriptor, index));
  };
  protoOf(TaggedDecoder).mq = function (descriptor, index) {
    return this.z14(this.i14(descriptor, index));
  };
  protoOf(TaggedDecoder).nq = function (descriptor, index) {
    return this.a15(this.i14(descriptor, index));
  };
  protoOf(TaggedDecoder).oq = function (descriptor, index) {
    return this.c15(this.i14(descriptor, index), descriptor.ro(index));
  };
  protoOf(TaggedDecoder).pq = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i14(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).rq = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i14(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).n14 = function () {
    return lastOrNull(this.l14_1);
  };
  protoOf(TaggedDecoder).d15 = function (name) {
    this.l14_1.c1(name);
  };
  protoOf(TaggedDecoder).e15 = function () {
    var r = this.l14_1.w2(get_lastIndex_0(this.l14_1));
    this.m14_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.f15_1 = key;
    this.g15_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.f15_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.g15_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.f15_1) + ', value=' + toString_0(this.g15_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.f15_1 == null ? 0 : hashCode(this.f15_1);
    result = imul(result, 31) + (this.g15_1 == null ? 0 : hashCode(this.g15_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.f15_1, other.f15_1))
      return false;
    if (!equals(this.g15_1, other.g15_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.pn('key', $keySerializer.bn());
      $this$buildSerialDescriptor.pn('value', $valueSerializer.bn());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.j15_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).bn = function () {
    return this.j15_1;
  };
  protoOf(MapEntrySerializer_0).k15 = function (_this__u8e3s4) {
    return _this__u8e3s4.m1();
  };
  protoOf(MapEntrySerializer_0).l15 = function (_this__u8e3s4) {
    return this.k15((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).m15 = function (_this__u8e3s4) {
    return _this__u8e3s4.n1();
  };
  protoOf(MapEntrySerializer_0).n15 = function (_this__u8e3s4) {
    return this.m15((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).o15 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.pn('first', $keySerializer.bn());
      $this$buildClassSerialDescriptor.pn('second', $valueSerializer.bn());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.u15_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).bn = function () {
    return this.u15_1;
  };
  protoOf(PairSerializer_0).v15 = function (_this__u8e3s4) {
    return _this__u8e3s4.se_1;
  };
  protoOf(PairSerializer_0).l15 = function (_this__u8e3s4) {
    return this.v15(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).w15 = function (_this__u8e3s4) {
    return _this__u8e3s4.te_1;
  };
  protoOf(PairSerializer_0).n15 = function (_this__u8e3s4) {
    return this.w15(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).o15 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.qq($this.a16_1, 0, $this.x15_1);
    var b = composite.qq($this.a16_1, 1, $this.y15_1);
    var c = composite.qq($this.a16_1, 2, $this.z15_1);
    composite.eq($this.a16_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.uq($this.a16_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.qq($this.a16_1, 0, $this.x15_1);
          break;
        case 1:
          b = composite.qq($this.a16_1, 1, $this.y15_1);
          break;
        case 2:
          c = composite.qq($this.a16_1, 2, $this.z15_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.eq($this.a16_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.pn('first', this$0.x15_1.bn());
      $this$buildClassSerialDescriptor.pn('second', this$0.y15_1.bn());
      $this$buildClassSerialDescriptor.pn('third', this$0.z15_1.bn());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.x15_1 = aSerializer;
    this.y15_1 = bSerializer;
    this.z15_1 = cSerializer;
    var tmp = this;
    tmp.a16_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).bn = function () {
    return this.a16_1;
  };
  protoOf(TripleSerializer_0).b16 = function (encoder, value) {
    var structuredEncoder = encoder.dq(this.a16_1);
    structuredEncoder.ur(this.a16_1, 0, this.x15_1, value.zk_1);
    structuredEncoder.ur(this.a16_1, 1, this.y15_1, value.al_1);
    structuredEncoder.ur(this.a16_1, 2, this.z15_1, value.bl_1);
    structuredEncoder.eq(this.a16_1);
  };
  protoOf(TripleSerializer_0).cn = function (encoder, value) {
    return this.b16(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).dn = function (decoder) {
    var composite = decoder.dq(this.a16_1);
    if (composite.tq()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.p15_1 = keySerializer;
    this.q15_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).r15 = function (encoder, value) {
    var structuredEncoder = encoder.dq(this.bn());
    structuredEncoder.ur(this.bn(), 0, this.p15_1, this.l15(value));
    structuredEncoder.ur(this.bn(), 1, this.q15_1, this.n15(value));
    structuredEncoder.eq(this.bn());
  };
  protoOf(KeyValueSerializer).cn = function (encoder, value) {
    return this.r15(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).dn = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.bn();
    var composite = decoder.dq(descriptor);
    var tmp$ret$0;
    $l$block: {
      if (composite.tq()) {
        var key = composite.qq(this.bn(), 0, this.p15_1);
        var value = composite.qq(this.bn(), 1, this.q15_1);
        tmp$ret$0 = this.o15(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.uq(this.bn());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.qq(this.bn(), 0, this.p15_1);
            break;
          case 1:
            value_0 = composite.qq(this.bn(), 1, this.q15_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.o15(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.eq(descriptor);
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
    this.c16_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).bn = function () {
    return this.c16_1;
  };
  protoOf(ULongSerializer).d16 = function (encoder, value) {
    var tmp = encoder.jr(this.c16_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.dr(tmp$ret$0);
  };
  protoOf(ULongSerializer).cn = function (encoder, value) {
    return this.d16(encoder, value instanceof ULong ? value.hm_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).e16 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.aq(this.c16_1).up();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).dn = function (decoder) {
    return new ULong(this.e16(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.f16_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).bn = function () {
    return this.f16_1;
  };
  protoOf(UIntSerializer).g16 = function (encoder, value) {
    var tmp = encoder.jr(this.f16_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.cr(tmp$ret$0);
  };
  protoOf(UIntSerializer).cn = function (encoder, value) {
    return this.g16(encoder, value instanceof UInt ? value.wl_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).h16 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.aq(this.f16_1).tp();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).dn = function (decoder) {
    return new UInt(this.h16(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.i16_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).bn = function () {
    return this.i16_1;
  };
  protoOf(UByteSerializer).j16 = function (encoder, value) {
    var tmp = encoder.jr(this.i16_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.ar(tmp$ret$0);
  };
  protoOf(UByteSerializer).cn = function (encoder, value) {
    return this.j16(encoder, value instanceof UByte ? value.ll_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).k16 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.aq(this.i16_1).rp();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).dn = function (decoder) {
    return new UByte(this.k16(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.l16_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).bn = function () {
    return this.l16_1;
  };
  protoOf(UShortSerializer).m16 = function (encoder, value) {
    var tmp = encoder.jr(this.l16_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.br(tmp$ret$0);
  };
  protoOf(UShortSerializer).cn = function (encoder, value) {
    return this.m16(encoder, value instanceof UShort ? value.sm_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).n16 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.aq(this.l16_1).sp();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).dn = function (decoder) {
    return new UShort(this.n16(decoder));
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
  protoOf(SerializersModule).yn = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.zn(kClass, typeArgumentsSerializers) : $super.zn.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.p16_1 = class2ContextualFactory;
    this.q16_1 = polyBase2Serializers;
    this.r16_1 = polyBase2DefaultSerializerProvider;
    this.s16_1 = polyBase2NamedSerializers;
    this.t16_1 = polyBase2DefaultDeserializerProvider;
    this.u16_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).xn = function () {
    return this.u16_1;
  };
  protoOf(SerialModuleImpl).cs = function (baseClass, value) {
    if (!baseClass.sa(value))
      return null;
    var tmp0_safe_receiver = this.q16_1.n2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.r16_1.n2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).bs = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.s16_1.n2(baseClass);
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
    var tmp_1 = this.t16_1.n2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).zn = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.p16_1.n2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v16(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).o16 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.p16_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.y16_1;
        collector.z16(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.x16(kclass, serial.w16_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.q16_1.l1().t();
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
        var tmp$ret$11 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.a17(tmp_1, tmp_2, tmp$ret$11);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.r16_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.b17(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.t16_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.c17(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.y16_1 = serializer;
  }
  protoOf(Argless).v16 = function (typeArgumentsSerializers) {
    return this.y16_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.y16_1, this.y16_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.y16_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.w16_1 = provider;
  }
  protoOf(WithTypeArguments).v16 = function (typeArgumentsSerializers) {
    return this.w16_1(typeArgumentsSerializers);
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
    tmp.d17_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.e17_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.f17_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.g17_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.h17_1 = HashMap_init_$Create$();
    this.i17_1 = false;
  }
  protoOf(SerializersModuleBuilder).z16 = function (kClass, serializer) {
    return this.j17(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).x16 = function (kClass, provider) {
    return this.j17(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).a17 = function (baseClass, actualClass, actualSerializer) {
    this.k17(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).b17 = function (baseClass, defaultSerializerProvider) {
    this.l17(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).c17 = function (baseClass, defaultDeserializerProvider) {
    this.m17(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).n17 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.d17_1.n2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.d17_1.q2(forClass, provider);
    if (isInterface_0(forClass))
      this.i17_1 = true;
  };
  protoOf(SerializersModuleBuilder).j17 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.n17(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.n17.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).l17 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.f17_1.n2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.f17_1.q2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).m17 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.h17_1.n2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.h17_1.q2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).o17 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.bn().jo();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.e17_1;
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
    var this_1 = this.g17_1;
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
        names.r2(previousSerializer.bn().jo());
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
  protoOf(SerializersModuleBuilder).k17 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.o17(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.o17.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).wv = function () {
    return new SerialModuleImpl(this.d17_1, this.e17_1, this.f17_1, this.g17_1, this.h17_1, this.i17_1);
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
    this.p17_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.p17_1.equals(tmp0_other_with_cast.p17_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.p17_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.p17_1) + ')';
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
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().jb()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().rb());
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
          var tmp_1 = assocObject.vy(args.slice());
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
    return mapOf([to(PrimitiveClasses_getInstance().sb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().vb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().qb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().ac(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().pb(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().zb(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance_3())), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().nb(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().yb(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().mb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().xb(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().lb(), serializer_7(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().wb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().kb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().ub(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().jb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().jb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.q17_1 = $factory;
  }
  protoOf(createCache$1).ao = function (key) {
    return this.q17_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.r17_1 = $factory;
  }
  protoOf(createParametrizedCache$1).bo = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.r17_1(key, types);
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
  protoOf(SerialDescriptorImpl).co = get_isNullable;
  protoOf(SerialDescriptorImpl).lo = get_isInline;
  protoOf(AbstractDecoder).qq = decodeSerializableElement$default;
  protoOf(AbstractDecoder).cq = decodeSerializableValue;
  protoOf(AbstractDecoder).tq = decodeSequentially;
  protoOf(AbstractDecoder).vq = decodeCollectionSize;
  protoOf(AbstractEncoder).yr = encodeNotNullMark;
  protoOf(AbstractEncoder).zr = beginCollection;
  protoOf(AbstractEncoder).vr = encodeSerializableValue;
  protoOf(AbstractEncoder).xr = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).as = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).co = get_isNullable;
  protoOf(ListLikeDescriptor).lo = get_isInline;
  protoOf(ListLikeDescriptor).no = get_annotations;
  protoOf(MapLikeDescriptor).co = get_isNullable;
  protoOf(MapLikeDescriptor).lo = get_isInline;
  protoOf(MapLikeDescriptor).no = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).co = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).lo = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).ly = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).co = get_isNullable;
  protoOf(NothingSerialDescriptor).lo = get_isInline;
  protoOf(NothingSerialDescriptor).no = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).co = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).lo = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).no = get_annotations;
  protoOf(TaggedDecoder).qq = decodeSerializableElement$default;
  protoOf(TaggedDecoder).cq = decodeSerializableValue;
  protoOf(TaggedDecoder).tq = decodeSequentially;
  protoOf(TaggedDecoder).vq = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PolymorphicSerializer_init_$Create$;
  _.$_$.b = SerializationException_init_$Init$_0;
  _.$_$.c = SerializationException_init_$Create$_0;
  _.$_$.d = UnknownFieldException_init_$Create$;
  _.$_$.e = SEALED_getInstance;
  _.$_$.f = STRING_getInstance;
  _.$_$.g = CONTEXTUAL_getInstance;
  _.$_$.h = ENUM_getInstance;
  _.$_$.i = CLASS_getInstance;
  _.$_$.j = LIST_getInstance;
  _.$_$.k = MAP_getInstance;
  _.$_$.l = OBJECT_getInstance;
  _.$_$.m = BooleanSerializer_getInstance;
  _.$_$.n = DoubleSerializer_getInstance;
  _.$_$.o = IntSerializer_getInstance;
  _.$_$.p = LongSerializer_getInstance;
  _.$_$.q = StringSerializer_getInstance;
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
  _.$_$.n2 = SerializationException;
  _.$_$.o2 = SerializationStrategy;
  _.$_$.p2 = findPolymorphicSerializer;
  _.$_$.q2 = findPolymorphicSerializer_0;
  _.$_$.r2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
