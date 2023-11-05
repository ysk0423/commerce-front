import type { Responsive } from '@/types/styles';
import { Color, Space, toPropValue } from '@/utils/styles';
// eslint-disable-next-line import/order
import { styled } from 'styled-components';

export type BoxProps = {
  color?: Responsive<Color>;
  backgroundColor?: Responsive<Color>;
  width?: Responsive<string>;
  height?: Responsive<string>;
  minWidth?: Responsive<string>;
  minHeight?: Responsive<string>;
  display?: Responsive<string>;
  border?: Responsive<string>;
  overflow?: Responsive<string>;
  margin?: Responsive<Space>;
  marginTop?: Responsive<Space>;
  marginRight?: Responsive<Space>;
  marginBottom?: Responsive<Space>;
  marginLeft?: Responsive<Space>;
  padding?: Responsive<Space>;
  paddingTop?: Responsive<Space>;
  paddingRight?: Responsive<Space>;
  paddingBottom?: Responsive<Space>;
  paddingLeft?: Responsive<Space>;
};

// Boxコンポーネントレイアウトの調整
const Box = styled.div<BoxProps>`
  ${(props) => toPropValue('color', props.color, props.theme.color)}
  ${(props) =>
    toPropValue('background-color', props.backgroundColor, props.theme.color)}
  ${(props) => toPropValue('width', props.width, props.theme.any)}
  ${(props) => toPropValue('height', props.height, props.theme.any)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme.any)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme.any)}
  ${(props) => toPropValue('display', props.display, props.theme.any)}
  ${(props) => toPropValue('border', props.border, props.theme.any)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme.any)}
  ${(props) => toPropValue('margin', props.margin, props.theme.Space)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme.Space)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme.Space)}
  ${(props) =>
    toPropValue('margin-bottom', props.marginBottom, props.theme.Space)}
  ${(props) =>
    toPropValue('margin-right', props.marginRight, props.theme.Space)}
  ${(props) => toPropValue('padding', props.padding, props.theme.Space)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme.Space)}
  ${(props) =>
    toPropValue('padding-left', props.paddingLeft, props.theme.Space)}
  ${(props) =>
    toPropValue('padding-bottom', props.paddingBottom, props.theme.Space)}
  ${(props) =>
    toPropValue('padding-right', props.paddingRight, props.theme.Space)}
`;

export default Box;
