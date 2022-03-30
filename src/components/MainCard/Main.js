import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import Lists from "./Lists/Lists";

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          align="center"
          title="Kharcha Pani hisab-kitab niyantran Yantra"
          subheader="WICC InfoDev"
        />
        <CardContent>
          <Typography align="center" variant="h5">
            Total amount: Rs.10000
          </Typography>

          <Divider />
          <Form />
        </CardContent>
        <CardContent className={classes.CartContent}>
          <Grid>
            <Grid>
              <Lists />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Main;
