import * as React from 'react';
import { View, Text } from 'react-sketchapp';
import { ClassicLabel, DarkContrastLabel, AccessibilityLabel } from './Label';

export const TypeSpecimenClassic = ({ name, style }) => (
  <View name={`TypeSpecimenClassic-${name}`} style={{ flexDirection: 'row', marginBottom: 24 }}>
    <View style={{ width: 100 }}>
      <ClassicLabel>{`${style.fontSize} / ${style.lineHeight}`}</ClassicLabel>
    </View>
    <Text
      style={{
        ...style,
        color: '#1010EB',
      }}
    >
      {name}
    </Text>
  </View>
);

export const TypeSpecimenDarkContrast = ({ name, style }) => (
  <View
    name={`TypeSpecimenDarkContrast-${name}`}
    style={{ flexDirection: 'row', marginBottom: 24 }}
  >
    <View style={{ width: 100 }}>
      <DarkContrastLabel>{`${style.fontSize} / ${style.lineHeight}`}</DarkContrastLabel>
    </View>
    <Text
      style={{
        ...style,
        color: '#AEB6BD',
      }}
    >
      {name}
    </Text>
  </View>
);

export const TypeSpecimenAccessibility = ({ name, style }) => (
  <View
    name={`TypeSpecimenAccessibility-${name}`}
    style={{ flexDirection: 'row', marginBottom: 24 }}
  >
    <View style={{ width: 100 }}>
      <AccessibilityLabel>{`${style.fontSize} / ${style.lineHeight}`}</AccessibilityLabel>
    </View>
    <Text
      style={{
        ...style,
        color: '#000000',
      }}
    >
      {name}
    </Text>
  </View>
);
