import { BrowserRouter } from "react-router-dom";
import { Container } from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import StyledAppBar from "./components/StyledAppBar";
import Routes from "./routes/Routes";
import Background from "./assets/images/background.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 2, 4),
    maxWidth: "900px",
    height: "500px",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "900px",
    backgroundAttachment: "fixed",
    display: "flex",
    justifyContent: "center",
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: "Caveat",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledAppBar />
        <Container className={classes.container}>
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
