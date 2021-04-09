import * as React from 'react';
import { View } from 'react-sketchapp';
import { ClassicLabel, DarkContrastLabel, AccessibilityLabel } from './Label';

const SWATCH_WIDTH = 190;

const styles = {
  width: SWATCH_WIDTH,
  height: SWATCH_WIDTH,
  borderRadius: 3,
  marginBottom: 8,
};

export const ClassicSwatch = ({ color, name }) => (
  <View name={name} style={{ marginBottom: 48, marginRight: 48 }}>
    <View style={{ ...styles, backgroundColor: color }} />
    <ClassicLabel bold>Color name: {name.replace(/([a-z])([A-Z])/g, '$1 $2')}</ClassicLabel>
    <ClassicLabel>Hex code: {color}</ClassicLabel>
  </View>
);

export const DarkContrastSwatch = ({ color, name }) => (
  <View name={name} style={{ marginBottom: 48, marginRight: 48 }}>
    <View style={{ ...styles, backgroundColor: color }} />
    <DarkContrastLabel bold>
      Color name: {name.replace(/([a-z])([A-Z])/g, '$1 $2')}
    </DarkContrastLabel>
    <DarkContrastLabel>Hex code: {color}</DarkContrastLabel>
  </View>
);

export const AccessibilitySwatch = ({ color, name }) => (
  <View name={name} style={{ marginBottom: 48, marginRight: 48 }}>
    <View style={{ ...styles, backgroundColor: color }} />
    <AccessibilityLabel bold>
      Color name: {name.replace(/([a-z])([A-Z])/g, '$1 $2')}
    </AccessibilityLabel>
    <AccessibilityLabel>Hex code: {color}</AccessibilityLabel>
  </View>
);
