import React from "react";
import { Grid } from "@material-ui/core";
import Details from "../components/SmallCard/Details";
import Main from "../components/MainCard/Main";
import useStyles from "../styles";
import { NavLink, useNavigate } from "react-router-dom";

const Homescreen = () => {
  const navigate = useNavigate;
  const classes = useStyles();

  return (
    <Grid
      className={classes.grid}
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh" }}
    >
      {/* container spacing le grid horizontal banayo */}
      <Grid item xs={12} sm={3}>
        <Details title="Income" />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Main />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Details title="Expense" />
      </Grid>
    </Grid>
  );
};

export default Homescreen;
