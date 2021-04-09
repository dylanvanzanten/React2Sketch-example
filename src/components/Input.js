import * as React from 'react';
import { View, Text } from 'react-sketchapp';
import {
  spacing,
  fontFamilies,
  ClassicColors,
  DarkContrastColors,
  AccessibilityColors,
} from '../styles';

export const styles = {
  formElement: {
    marginBottom: spacing,
  },
  label: {
    fontFamily: fontFamilies.bodyBold,
    marginBottom: spacing,
  },
  textbox: {
    boxSizing: 'border-box',
    borderWidth: 3,
    borderRadius: 3,
    borderStyle: 'solid',
    fontFamily: fontFamilies.bodyBold,
    fontSize: 16,
    lineHeight: 16,
    padding: spacing,
    width: 250,
    marginRight: spacing * 2,
  },
  input: {
    fontFamily: fontFamilies.bodyBold,
    fontSize: 16,
    color: '#16191C',
    opacity: 0.5,
  },
  classicInput: {
    borderColor: '#16191C',
    backgroundColor: '#EEEEEE',
    label: {
      color: '#1010EB',
    },
    valid: {
      borderColor: '#5C590F',
      color: '#5C590F',
      opacity: 1,
    },
    invalid: {
      borderColor: '#F4354F',
      color: '#F4354F',
      opacity: 1,
    },
  },
  darkContrastInput: {
    color: '#AEB6BD',
    borderColor: '#AEB6BD',
    backgroundColor: 'transparent',
    label: {
      color: '#AEB6BD',
    },
    valid: {
      borderColor: '#28A745',
      color: '#28A745',
      opacity: 1,
    },
    invalid: {
      borderColor: '#DC3545',
      color: '#DC3545',
      opacity: 1,
    },
  },
  accessibilityInput: {
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    label: {
      color: '#000000',
    },
    valid: {
      borderColor: '#28A228',
      color: '#28A228',
      opacity: 1,
    },
    invalid: {
      borderColor: '#E00000',
      color: '#E00000',
      opacity: 1,
    },
  },
};

export const ClassicTextInput = ({ label, value }) => (
  <View style={styles.formElement}>
    <Text style={{ ...styles.label, color: styles.classicInput.label.color }}>{label}</Text>
    <View
      style={{
        ...styles.textbox,
        borderColor: styles.classicInput.borderColor,
        backgroundColor: styles.classicInput.backgroundColor,
      }}
    >
      <Text style={styles.input}>{value}</Text>
    </View>
  </View>
);

export const ClassicTextInputValid = ({ label, value }) => (
  <View style={styles.formElement}>
    <Text style={{ ...styles.label, color: styles.classicInput.label.color }}>{label}</Text>
    <View
      style={{
        ...styles.textbox,
        borderColor: styles.classicInput.valid.borderColor,
        backgroundColor: styles.classicInput.backgroundColor,
      }}
    >
      <Text
        style={{
          ...styles.input,
          color: styles.classicInput.valid.color,
          opacity: styles.classicInput.valid.opacity,
        }}
      >
        {value}
      </Text>
    </View>
  </View>
);

export const ClassicTextInputInvalid = ({ label, value }) => (
  <View style={styles.formElement}>
    <Text style={{ ...styles.label, color: styles.classicInput.label.color }}>{label}</Text>
    <View
      style={{
        ...styles.textbox,
        borderColor: styles.classicInput.invalid.borderColor,
        backgroundColor: styles.classicInput.backgroundColor,
        color: styles.classicInput.invalid.color,
      }}
    >
      <Text
        style={{
          ...styles.input,
          color: styles.classicInput.invalid.color,
          opacity: styles.classicInput.invalid.opacity,
        }}
      >
        {value}
      </Text>
    </View>
  </View>
);

export const DarkContrastTextInput = ({ label, value }) => (
  <View style={styles.formElement}>
    <Text style={{ ...styles.label, color: styles.darkContrastInput.label.color }}>{label}</Text>
    <View
      style={{
        ...styles.textbox,
        borderColor: styles.darkContrastInput.borderColor,
        backgroundColor: styles.darkContrastInput.backgroundColor,
      }}
    >
      <Text style={{ ...styles.input, color: styles.darkContrastInput.color }}>{value}</Text>
    </View>
  </View>
);

export const DarkContrastTextInputValid = ({ label, value }) => (
  <View style={styles.formElement}>
    <Text style={{ ...styles.label, color: styles.darkContrastInput.label.color }}>{label}</Text>
    <View
      style={{
        ...styles.textbox,
        borderColor: styles.darkContrastInput.valid.borderColor,
        backgroundColor: styles.darkContrastInput.backgroundColor,
      }}
    >
      <Text
        style={{
          ...styles.input,
          color: styles.darkContrastInput.valid.color,
          opacity: styles.darkContrastInput.valid.opacity,
        }}
      >
        {value}
      </Text>
    </View>
  </View>
);

export const DarkContrastTextInputInvalid = ({ label, value }) => (
  <View style={styles.formElement}>
    <Text style={{ ...styles.label, color: styles.darkContrastInput.label.color }}>{label}</Text>
    <View
      style={{
        ...styles.textbox,
        borderColor: styles.darkContrastInput.invalid.borderColor,
        backgroundColor: styles.darkContrastInput.backgroundColor,
        color: styles.darkContrastInput.invalid.color,
      }}
    >
      <Text
        style={{
          ...styles.input,
          color: styles.darkContrastInput.invalid.color,
          opacity: styles.darkContrastInput.invalid.opacity,
        }}
      >
        {value}
      </Text>
    </View>
  </View>
);

export const AccessibilityTextInput = ({ label, value }) => (
  <View style={styles.formElement}>
    <Text style={{ ...styles.label, color: styles.accessibilityInput.label.color }}>{label}</Text>
    <View
      style={{
        ...styles.textbox,
        borderColor: styles.accessibilityInput.borderColor,
        backgroundColor: styles.accessibilityInput.backgroundColor,
      }}
    >
      <Text style={{ ...styles.input, color: styles.accessibilityInput.color }}>{value}</Text>
    </View>
  </View>
);

export const AccessibilityTextInputValid = ({ label, value }) => (
  <View style={styles.formElement}>
    <Text style={{ ...styles.label, color: styles.accessibilityInput.label.color }}>{label}</Text>
    <View
      style={{
        ...styles.textbox,
        borderColor: styles.accessibilityInput.valid.borderColor,
        backgroundColor: styles.accessibilityInput.valid.backgroundColor,
      }}
    >
      <Text style={{ ...styles.input, color: styles.accessibilityInput.valid.color }}>{value}</Text>
    </View>
  </View>
);

export const AccessibilityTextInputInvalid = ({ label, value }) => (
  <View style={styles.formElement}>
    <Text style={{ ...styles.label, color: styles.accessibilityInput.label.color }}>{label}</Text>
    <View
      style={{
        ...styles.textbox,
        borderColor: styles.accessibilityInput.invalid.borderColor,
        backgroundColor: styles.accessibilityInput.invalid.backgroundColor,
      }}
    >
      <Text style={{ ...styles.input, color: styles.accessibilityInput.invalid.color }}>
        {value}
      </Text>
    </View>
  </View>
);
