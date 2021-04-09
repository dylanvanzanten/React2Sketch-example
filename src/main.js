import * as React from 'react';
import sketch from 'sketch';
import { render, Page, Artboard, TextStyles, View } from 'react-sketchapp';
import designSystem from './styles';

import { ClassicLabelBig, DarkContrastLabelBig, AccessibilityLabelBig } from './components/Label';
import { ClassicPalette, DarkContrastPalette, AccessibilityPalette } from './components/Palette';
import { ClassicSection, DarkContrastSection, AccessibilitySection } from './components/Section';
import {
  TypeSpecimenClassic,
  TypeSpecimenDarkContrast,
  TypeSpecimenAccessibility,
} from './components/TypeSpecimen';
import {
  PrimaryClassic,
  SecondaryClassic,
  GhostClassic,
  PrimaryDarkContrast,
  SecondaryDarkContrast,
  GhostDarkContrast,
  PrimaryAccessibility,
  SecondaryAccessibility,
  GhostAccessibility,
} from './components/Button';
import {
  ClassicTextInput,
  ClassicTextInputValid,
  ClassicTextInputInvalid,
  DarkContrastTextInput,
  DarkContrastTextInputValid,
  DarkContrastTextInputInvalid,
  AccessibilityTextInput,
  AccessibilityTextInputValid,
  AccessibilityTextInputInvalid,
} from './components/Input';

const Document = ({ system }) => (
  <Page name="Styling-demo" style={{ flexDirection: 'row' }}>
    <Artboard
      name="Classic theme"
      style={{
        width: 1200,
        height: '100%',
        backgroundColor: '#F7E79C',
        padding: system.spacing * 2,
        marginRight: system.spacing * 4,
      }}
    >
      <View>
        <View name="Intro" style={{ width: 500, marginBottom: system.spacing * 4 }}>
          <ClassicLabelBig>Classic theme</ClassicLabelBig>
        </View>

        <ClassicSection title="Type styles">
          {Object.keys(system.ClassicFonts).map((name) => (
            <TypeSpecimenClassic key={name} name={name} style={TextStyles.get(name)} />
          ))}
        </ClassicSection>

        <ClassicSection title="Color Palette">
          <ClassicPalette colors={system.ClassicColors} />
        </ClassicSection>

        <ClassicSection title="Button styles">
          <View style={{ flexDirection: 'row' }}>
            <PrimaryClassic label="Primary button" />
            <SecondaryClassic label="Secondary button" />
            <GhostClassic label="Ghost button" />
          </View>
        </ClassicSection>

        <ClassicSection title="Input styles">
          <View style={{ flexDirection: 'row' }}>
            <ClassicTextInput label="Text input" value="john@doe.com" type="input" />
            <ClassicTextInputValid label="Text input valid" value="john@doe.com" type="input" />
            <ClassicTextInputInvalid label="Text input invalid" value="john@doe.com" type="input" />
          </View>
        </ClassicSection>
      </View>
    </Artboard>

    <Artboard
      name="Dark-contrast theme"
      style={{
        width: 1200,
        height: '100%',
        backgroundColor: '#16191C',
        padding: system.spacing * 2,
        marginRight: system.spacing * 4,
      }}
    >
      <View>
        <View name="Intro" style={{ width: 500, marginBottom: system.spacing * 4 }}>
          <DarkContrastLabelBig>Dark contrast theme</DarkContrastLabelBig>
        </View>

        <DarkContrastSection title="Type Styles">
          {Object.keys(system.ClassicFonts).map((name) => (
            <TypeSpecimenDarkContrast key={name} name={name} style={TextStyles.get(name)} />
          ))}
        </DarkContrastSection>

        <DarkContrastSection title="Color Palette">
          <DarkContrastPalette colors={system.DarkContrastColors} />
        </DarkContrastSection>

        <DarkContrastSection title="Button styles">
          <View style={{ flexDirection: 'row' }}>
            <PrimaryDarkContrast label="Primary button" />
            <SecondaryDarkContrast label="Secondary button" />
            <GhostDarkContrast label="Ghost button" />
          </View>
        </DarkContrastSection>

        <DarkContrastSection title="Input styles">
          <View style={{ flexDirection: 'row' }}>
            <DarkContrastTextInput label="Text input" value="john@doe.com" type="input" />
            <DarkContrastTextInputValid
              label="Text input valid"
              value="john@doe.com"
              type="input"
            />
            <DarkContrastTextInputInvalid
              label="Text input invalid"
              value="john@doe.com"
              type="input"
            />
          </View>
        </DarkContrastSection>
      </View>
    </Artboard>

    <Artboard
      name="Accessibility theme"
      style={{
        width: 1200,
        height: '100%',
        backgroundColor: '#FEFEFE',
        padding: system.spacing * 2,
        marginRight: system.spacing * 4,
      }}
    >
      <View>
        <View name="Intro" style={{ width: 500, marginBottom: system.spacing * 4 }}>
          <AccessibilityLabelBig>Accessibility theme</AccessibilityLabelBig>
        </View>

        <AccessibilitySection title="Type Styles">
          {Object.keys(system.ClassicFonts).map((name) => (
            <TypeSpecimenAccessibility key={name} name={name} style={TextStyles.get(name)} />
          ))}
        </AccessibilitySection>

        <AccessibilitySection title="Color Palette">
          <AccessibilityPalette colors={system.AccessibilityColors} />
        </AccessibilitySection>

        <AccessibilitySection title="Button styles">
          <View style={{ flexDirection: 'row' }}>
            <PrimaryAccessibility label="Primary button" />
            <SecondaryAccessibility label="Secondary button" />
            <GhostAccessibility label="Ghost button" />
          </View>
        </AccessibilitySection>

        <AccessibilitySection title="Input styles">
          <View style={{ flexDirection: 'row' }}>
            <AccessibilityTextInput label="Text input" value="john@doe.com" type="input" />
            <AccessibilityTextInputValid
              label="Text input valid"
              value="john@doe.com"
              type="input"
            />
            <AccessibilityTextInputInvalid
              label="Text input invalid"
              value="john@doe.com"
              type="input"
            />
          </View>
        </AccessibilitySection>
      </View>
    </Artboard>
  </Page>
);

export default () => {
  TextStyles.create(designSystem.ClassicFonts, {
    clearExistingStyles: true,
  });

  render(<Document system={designSystem} />);
};
