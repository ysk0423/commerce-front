// eslint-disable-next-line import/no-named-as-default, import/order
import type {
  CSSPropertyAlignContent,
  CSSPropertyAlignItems,
  CSSPropertyAlignSelf,
  CSSPropertyFlexDirection,
  CSSPropertyFlexWrap,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyJustifySelf,
  Responsive,
} from '@/types/styles';
import styled from 'styled-components';
import Box, { BoxProps } from '../Box';
// eslint-disable-next-line import/no-named-as-default
import { toPropValue } from '@/utils/styles';

type FlexProps = BoxProps & {
  alignItems?: Responsive<CSSPropertyAlignItems>;
  alignContent?: Responsive<CSSPropertyAlignContent>;
  justifyContent?: Responsive<CSSPropertyJustifyContent>;
  justifyItems?: Responsive<CSSPropertyJustifyItems>;
  flexWrap?: Responsive<CSSPropertyFlexWrap>;
  flexBasis?: Responsive<string>;
  flexDirection?: Responsive<CSSPropertyFlexDirection>;
  flexGrow?: Responsive<string>;
  flexShrink?: Responsive<string>;
  justifySelf?: Responsive<CSSPropertyJustifySelf>;
  alignSelf?: Responsive<CSSPropertyAlignSelf>;
  order?: Responsive<string>;
};

/**
 * Flexコンポーネント
 * flexboxの実現に利用する
 */
const Flex = styled(Box)<FlexProps>`
  ${(props) => toPropValue('align-items', props.alignItems, props.theme.any)}
  ${(props) =>
    toPropValue('align-content', props.alignContent, props.theme.any)}
  ${(props) =>
    toPropValue('justify-content', props.justifyContent, props.theme.any)}
  ${(props) =>
    toPropValue('justify-items', props.justifyItems, props.theme.any)}
  ${(props) => toPropValue('flex-wrap', props.flexWrap, props.theme.any)}
  ${(props) => toPropValue('flex-basis', props.flexBasis, props.theme.any)}
  ${(props) =>
    toPropValue('flex-direction', props.flexDirection, props.theme.any)}
  ${(props) => toPropValue('flex-grow', props.flexGrow, props.theme.any)}
  ${(props) => toPropValue('flex-shrink', props.flexShrink, props.theme.any)}
  ${(props) => toPropValue('justify-self', props.justifySelf, props.theme.any)}
  ${(props) => toPropValue('align-self', props.alignSelf, props.theme.any)}
  ${(props) => toPropValue('order', props.order, props.theme.any)}
`;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
