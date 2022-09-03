
import { createTheme } from '@mui/material/styles';
export let theme = createTheme({
  palette: {
    primary: {
      main: '#141B1A',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});