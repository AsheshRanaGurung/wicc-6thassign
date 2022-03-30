import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";

import useCustomhookTransaction from "../../useCustomhookTransaction";

import useStyles from "./styles";

const Details = (props) => {
  const { title } = props;
  const classes = useStyles();
  const { total, chartData } = useCustomhookTransaction(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">Rs.{total}</Typography>
        <div className="control-doughnut" style={{ width: "350px" }}>
          <Doughnut data={chartData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default Details;
