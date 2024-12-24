import type { Colors, Palettes } from './color';
import type { Spaces } from './space';

export interface BaseTheme {
  palette: Palettes;
  color: Colors;
  // typo: Typo;
  space: Spaces;
}
