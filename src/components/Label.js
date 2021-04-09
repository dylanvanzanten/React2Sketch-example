import * as React from 'react';
import { Text } from 'react-sketchapp';

import { fontFamilies } from '../styles';

const styles = {
  color: '#16191C',
  fontFamily: fontFamilies.headingBold,
  fontSize: 16,
  lineHeight: 24,
};

const LabelStyles = {
  big: {
    fontSize: 36,
    lineHeight: 36,
  },
  classicLabelBig: {
    color: '#1010EB',
  },
  DarkContrastLabelBig: {
    color: '#AEB6BD',
  },
  AccessibilityLabelBig: {
    color: '#000000',
  },
};

export const ClassicLabel = ({ children }) => (
  <Text style={{ ...styles, color: '#1010EB' }}>{children}</Text>
);

export const ClassicLabelBig = ({ children }) => (
  <Text
    style={{
      ...styles,
      fontSize: LabelStyles.big.fontSize,
      lineHeight: LabelStyles.big.lineHeight,
      color: LabelStyles.classicLabelBig.color,
    }}
  >
    {children}
  </Text>
);

export const DarkContrastLabel = ({ children }) => (
  <Text style={{ ...styles, color: '#AEB6BD' }}>{children}</Text>
);

export const DarkContrastLabelBig = ({ children }) => (
  <Text
    style={{
      ...styles,
      fontSize: LabelStyles.big.fontSize,
      lineHeight: LabelStyles.big.lineHeight,
      color: LabelStyles.DarkContrastLabelBig.color,
    }}
  >
    {children}
  </Text>
);

export const AccessibilityLabel = ({ children }) => (
  <Text style={{ ...styles, color: '#000000' }}>{children}</Text>
);

export const AccessibilityLabelBig = ({ children }) => (
  <Text
    style={{
      ...styles,
      fontSize: LabelStyles.big.fontSize,
      lineHeight: LabelStyles.big.lineHeight,
      color: LabelStyles.AccessibilityLabelBig.color,
    }}
  >
    {children}
  </Text>
);
