import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';

const theme = kirkhamTheme;
theme.headerFontFamily = ['Merriweather', 'serif'];
theme.bodyFontFamily = ['PT Sans', 'sans-serif'];
// theme.scaleRatio = 1.5;
theme.baseFontSize = '20px';

const typography = new Typography(theme);

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
