import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';

const theme = kirkhamTheme;
theme.headerFontFamily = ['PT Serif', 'serif'];
theme.bodyFontFamily = ['Roboto', 'sans-serif'];
theme.baseFontSize = '20px';

const typography = new Typography(theme);

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
