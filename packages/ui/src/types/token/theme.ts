import type { Colors, Palettes } from '../../theme/color/color.type';
import type { Spaces } from '../../theme/space/space.types';

export interface BaseTheme {
  palette: Palettes;
  color: Colors;
  // typo: Typo;
  space: Spaces;
}
