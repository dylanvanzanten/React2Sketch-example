import * as React from 'react';
import { View } from 'react-sketchapp';
import { ClassicSwatch, DarkContrastSwatch, AccessibilitySwatch } from './Swatch';

const SWATCH_WIDTH = 190;

const styles = {
  width: (SWATCH_WIDTH + 48) * 4,
  flexWrap: 'wrap',
  flexDirection: 'row',
};

export const ClassicPalette = ({ colors }) => (
  <View style={{ ...styles }}>
    {Object.keys(colors).map((name) => (
      <ClassicSwatch key={name} color={colors[name]} name={name} />
    ))}
  </View>
);

export const DarkContrastPalette = ({ colors }) => (
  <View style={{ ...styles }}>
    {Object.keys(colors).map((name) => (
      <DarkContrastSwatch key={name} color={colors[name]} name={name} />
    ))}
  </View>
);

export const AccessibilityPalette = ({ colors }) => (
  <View style={{ ...styles }}>
    {Object.keys(colors).map((name) => (
      <AccessibilitySwatch key={name} color={colors[name]} name={name} />
    ))}
  </View>
);
