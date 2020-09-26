import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4e74e6",
      main: "#2955d9",
      dark: "#0e3bc2"
    },
    secondary: {
      light: "#eb9e2a",
      main: "#db5c18",
      dark: "#bd7304"
    },
    action: {
      hover: undefined
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: false,
    }
  },
  typography: {
    fontFamily: "Segoe UI"
  }
});

export default responsiveFontSizes(theme);