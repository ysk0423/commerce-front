import { theme } from '@/themes';

export type AppTheme = typeof theme;

//typescriptbook.jp/reference/type-reuse/keyof-type-operator
type SpaceThemeKeys = keyof typeof theme.space;
type ColorThemekeys = keyof typeof theme.colors;
type FontSizeThemeKeys = keyof typeof theme.fontSizes;
type LetterSpacingThemeKeys = keyof typeof theme.letterSpacings;
type LineHeightThemeKeys = keyof typeof theme.lineHeights;

export type Space = SpaceThemeKeys;
export type Color = ColorThemekeys;
export type fontSize = FontSizeThemeKeys;
export type letterSpacing = LetterSpacingThemeKeys;
export type lineHeight = LineHeightThemeKeys;

const BREAKPOINTS: { [key: string]: string } = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};
