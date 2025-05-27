import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

import palettes from './themes/palettes';

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { style: { minHeight: 40 }, props: {} } });

export const ExpoImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
  });

export const DatePickerStyles = theme =>
  StyleSheet.create({ 'Date Picker': { style: {}, props: {} } });

export const PickerStyles = theme =>
  StyleSheet.create({ Picker: { style: {}, props: {} } });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
  });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { style: { height: 1 }, props: {} } });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.text.strong }, props: {} },
  });
