export const ClassicColors = {
  Green: '#5C590F',
  LightGreen: '#A8A32D',
  Blue: '#1010EB',
  LightBlue: '#428FB5',
  DarkRed: '#751421',
  HotPink: '#F4354F',
  Yellow: '#DBD400',
  Orange: '#FF4B00',
};

export const DarkContrastColors = {
  Blue: '#007BFF',
  Indigo: '#6610F2',
  LightPink: '#17A2b8',
  LightGrey: '#A5A4AB',
  Yellow: '#FAAF19',
  Green: '#28A745',
  Red: '#DC3545',
  Teal: '#20C997',
};

export const AccessibilityColors = {
  Blue: '#1E90FF',
  Red: '#E00000',
  Green: '#28A228',
  DarkGreen: '#382903',
  DarkPink: '#DC143C',
  Yellow: '#FFD700',
  Grey: '#939393',
  Purple: '#AA00AA',
};

const typeSizes = [72, 64, 48, 36, 24, 20, 16];

export const spacing = 16;

export const fontFamilies = {
  headingRegular: 'Averta',
  headingBold: 'Averta Bold',
  bodyRegular: 'MarkPro',
  bodyBold: 'MarkPro-Bold',
};

export const ClassicFonts = {
  Headline: {
    color: ClassicColors.Blue,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.headingBold,
    lineHeight: 72,
  },
  'Title 2': {
    color: ClassicColors.Blue,
    fontSize: typeSizes[1],
    fontFamily: fontFamilies.headingBold,
    lineHeight: 64,
  },
  'Title 3': {
    color: ClassicColors.Blue,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.headingBold,
    lineHeight: 48,
  },
  'Title 4': {
    color: ClassicColors.Blue,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.headingBold,
    lineHeight: 36,
  },
  'Title 5': {
    color: ClassicColors.Blue,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.headingRegular,
    lineHeight: 24,
    marginBottom: 24,
  },
  'Title 6': {
    color: ClassicColors.Blue,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.headingRegular,
    lineHeight: 20,
    marginBottom: 20,
  },
  Body: {
    color: ClassicColors.Blue,
    fontSize: typeSizes[6],
    fontFamily: fontFamilies.bodyRegular,
    lineHeight: 16,
    marginBottom: 16,
  },
};

export default {
  ClassicColors,
  DarkContrastColors,
  AccessibilityColors,
  ClassicFonts,
  spacing,
};
