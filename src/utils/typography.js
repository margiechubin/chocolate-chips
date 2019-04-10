import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';

const theme = kirkhamTheme;
theme.headerFontFamily = ['Merriweather', 'serif'];
theme.bodyFontFamily = ['PT Sans', 'sans-serif'];
theme.scaleRatio = 2;
theme.baseFontSize = '20px';

const typography = new Typography(theme);

export default typography;
