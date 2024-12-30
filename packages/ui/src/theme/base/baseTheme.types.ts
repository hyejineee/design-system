import type { Colors, Palettes } from '../color/color.type';
import type { Spaces } from '../space/space.types';

export interface BaseTheme {
  palette: Palettes;
  color: Colors;
  space: Spaces;
}
