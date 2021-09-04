// this is to import the css designing
import { makeStyles } from "@material-ui/core/styles";
// creating hook useStyle which contain a function makestyles inside function pass callback functtion which immiedialty return an object which contain styles
const useStyles = makeStyles((theme) => ({
  // here adding the css styles, we have an object of theme can use the built in color padding ... form Material UI itself
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: { marginRight: "20px" },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20 0",
  },
  Card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
  logoText: {
    fontFamily: "arial",
  },
}));

export default useStyles;
