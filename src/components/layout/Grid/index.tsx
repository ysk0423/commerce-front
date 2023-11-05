// eslint-disable-next-line import/order
import {
  CSSPropertyGridArea,
  CSSPropertyGridAutoFlow,
  CSSPropertyGridColumn,
  CSSPropertyGridRow,
  Responsive,
} from '@/types/styles';
import { styled } from 'styled-components';
import Box, { BoxProps } from '../Box';
// eslint-disable-next-line import/no-unresolved
import { toPropValue } from '@/utils/styles';

type GridProps = BoxProps & {
  gridGap?: Responsive<string>;
  gridColumnGap?: Responsive<string>;
  gridRowGap?: Responsive<string>;
  gridColumn?: Responsive<CSSPropertyGridColumn>;
  gridRow?: Responsive<CSSPropertyGridRow>;
  gridAutoFlow?: Responsive<CSSPropertyGridAutoFlow>;
  gridAutoColumns?: Responsive<string>;
  gridAutoRows?: Responsive<string>;
  gridTemplateColumns?: Responsive<string>;
  gridTemplateRows?: Responsive<string>;
  gridTemplateAreas?: Responsive<CSSPropertyGridArea>;
  gridArea?: Responsive<string>;
};

/**
 * Gridコンポーネント
 * gridレイアウトの実現に利用する
 */
const Grid = styled(Box)<GridProps>`
  ${(props) => toPropValue('grid-gap', props.gridGap, props.theme.any)}
  ${(props) =>
    toPropValue('grid-column-gap', props.gridColumnGap, props.theme.any)}
  ${(props) => toPropValue('grid-row-gap', props.gridRowGap, props.theme.any)}
  ${(props) => toPropValue('grid-row', props.gridRow, props.theme.any)}
  ${(props) => toPropValue('grid-column', props.gridColumn, props.theme.any)}
  ${(props) =>
    toPropValue('grid-auto-flow', props.gridAutoFlow, props.theme.any)}
  ${(props) =>
    toPropValue('grid-auto-columns', props.gridAutoColumns, props.theme.any)}
  ${(props) =>
    toPropValue('grid-auto-rows', props.gridAutoRows, props.theme.any)}
  ${(props) =>
    toPropValue(
      'grid-template-columns',
      props.gridTemplateColumns,
      props.theme.any,
    )}
  ${(props) =>
    toPropValue('grid-template-rows', props.gridTemplateRows, props.theme.any)}
  ${(props) =>
    toPropValue(
      'grid-template-areas',
      props.gridTemplateAreas,
      props.theme.any,
    )}
  ${(props) => toPropValue('grid-area', props.gridArea, props.theme.any)}
`;

Grid.defaultProps = {
  display: 'grid',
};

export default Grid;
