import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography className={classes.logoText} variant="h6">
            {" "}
            My Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Gallery
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              Paragraph
            >
              Photo Gallery experment using Material UI
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See Photos{" "}
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Go to the next page{" "}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        {/* here we can choose sizes for responsive design :xs :for extra small devices ,  */}

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid key={card} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/collection/190727/1600x900"
                    title="Image Title"
                  />

                  <CardContent className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                      About photo
                    </Typography>
                    <Typography>Photo description :)</Typography>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Made By Maryam
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Material UI Learning Purposes
        </Typography>
      </footer>
    </>
  );
}

export default App;
