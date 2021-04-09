import * as React from 'react';
import { View, Text } from 'react-sketchapp';

import {
  spacing,
  fontFamilies,
  ClassicColors,
  DarkContrastColors,
  AccessibilityColors,
} from '../styles';

const ButtonStyles = {
  primaryClassic: {
    backgroundColor: ClassicColors.Blue,
  },
  secondaryClassic: {
    backgroundColor: ClassicColors.DarkRed,
  },
  ghostClassic: {
    color: '#16191C',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#16191C',
  },
  primaryDarkContrast: {
    backgroundColor: DarkContrastColors.Blue,
  },
  secondaryDarkContrast: {
    backgroundColor: DarkContrastColors.Yellow,
  },
  ghostDarkContrast: {
    color: '#AEB6BD',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#AEB6BD',
  },
  primaryAccessibility: {
    backgroundColor: AccessibilityColors.Blue,
  },
  secondaryAccessibility: {
    backgroundColor: AccessibilityColors.Grey,
  },
  ghostAccessibility: {
    color: '#000000',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#16191C',
  },
};

export const styles = {
  borderRadius: 3,
  boxSizing: 'border-box',
  cursor: 'pointer',
  paddingTop: 12,
  paddingRight: 20,
  paddingBottom: 10,
  paddingLeft: 20,
  marginRight: spacing * 2,
};

const textStyle = {
  fontFamily: fontFamilies.bodyBold,
  fontSize: 14,
  lineHeight: 14,
  color: 'white',
  textAlign: 'center',
};

export const PrimaryClassic = ({ label }) => (
  <View style={{ ...styles, backgroundColor: ButtonStyles.primaryClassic.backgroundColor }}>
    <Text style={{ ...textStyle }}>{label}</Text>
  </View>
);

export const SecondaryClassic = ({ label }) => (
  <View style={{ ...styles, backgroundColor: ButtonStyles.secondaryClassic.backgroundColor }}>
    <Text style={{ ...textStyle }}>{label}</Text>
  </View>
);

export const GhostClassic = ({ label }) => (
  <View
    style={{
      ...styles,
      backgroundColor: ButtonStyles.ghostClassic.backgroundColor,
      borderTopWidth: ButtonStyles.ghostClassic.borderTopWidth,
      borderLeftWidth: ButtonStyles.ghostClassic.borderLeftWidth,
      borderRightWidth: ButtonStyles.ghostClassic.borderRightWidth,
      borderBottomWidth: ButtonStyles.ghostClassic.borderBottomWidth,
      borderColor: ButtonStyles.ghostClassic.borderColor,
    }}
  >
    <Text style={{ ...textStyle, color: ButtonStyles.ghostClassic.color }}>{label}</Text>
  </View>
);

export const PrimaryDarkContrast = ({ label }) => (
  <View style={{ ...styles, backgroundColor: ButtonStyles.primaryDarkContrast.backgroundColor }}>
    <Text style={{ ...textStyle }}>{label}</Text>
  </View>
);

export const SecondaryDarkContrast = ({ label }) => (
  <View style={{ ...styles, backgroundColor: ButtonStyles.secondaryDarkContrast.backgroundColor }}>
    <Text style={{ ...textStyle }}>{label}</Text>
  </View>
);

export const GhostDarkContrast = ({ label }) => (
  <View
    style={{
      ...styles,
      backgroundColor: ButtonStyles.ghostDarkContrast.backgroundColor,
      borderTopWidth: ButtonStyles.ghostDarkContrast.borderTopWidth,
      borderLeftWidth: ButtonStyles.ghostDarkContrast.borderLeftWidth,
      borderRightWidth: ButtonStyles.ghostDarkContrast.borderRightWidth,
      borderBottomWidth: ButtonStyles.ghostDarkContrast.borderBottomWidth,
      borderColor: ButtonStyles.ghostDarkContrast.borderColor,
    }}
  >
    <Text style={{ ...textStyle }}>{label}</Text>
  </View>
);

export const PrimaryAccessibility = ({ label }) => (
  <View style={{ ...styles, backgroundColor: ButtonStyles.primaryAccessibility.backgroundColor }}>
    <Text style={{ ...textStyle }}>{label}</Text>
  </View>
);

export const SecondaryAccessibility = ({ label }) => (
  <View style={{ ...styles, backgroundColor: ButtonStyles.secondaryAccessibility.backgroundColor }}>
    <Text style={{ ...textStyle }}>{label}</Text>
  </View>
);

export const GhostAccessibility = ({ label }) => (
  <View
    style={{
      ...styles,
      backgroundColor: ButtonStyles.ghostAccessibility.backgroundColor,
      borderTopWidth: ButtonStyles.ghostAccessibility.borderTopWidth,
      borderLeftWidth: ButtonStyles.ghostAccessibility.borderLeftWidth,
      borderRightWidth: ButtonStyles.ghostAccessibility.borderRightWidth,
      borderBottomWidth: ButtonStyles.ghostAccessibility.borderBottomWidth,
      borderColor: ButtonStyles.ghostAccessibility.borderColor,
    }}
  >
    <Text style={{ ...textStyle, color: ButtonStyles.ghostAccessibility.color }}>{label}</Text>
  </View>
);
