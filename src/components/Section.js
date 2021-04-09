import * as React from 'react';
import { View } from 'react-sketchapp';
import { ClassicLabel, DarkContrastLabel, AccessibilityLabel } from './Label';

export const ClassicSection = ({ title, children }) => (
  <View style={{ marginBottom: 100, flexDirection: 'row' }}>
    <View style={{ width: 200 }}>
      <ClassicLabel bold>{title}</ClassicLabel>
    </View>
    <View>{children}</View>
  </View>
);

export const DarkContrastSection = ({ title, children }) => (
  <View style={{ marginBottom: 100, flexDirection: 'row' }}>
    <View style={{ width: 200 }}>
      <DarkContrastLabel bold>{title}</DarkContrastLabel>
    </View>
    <View>{children}</View>
  </View>
);

export const AccessibilitySection = ({ title, children }) => (
  <View style={{ marginBottom: 100, flexDirection: 'row' }}>
    <View style={{ width: 200 }}>
      <AccessibilityLabel bold>{title}</AccessibilityLabel>
    </View>
    <View>{children}</View>
  </View>
);
