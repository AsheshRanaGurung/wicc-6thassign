import React, { useState, useContext } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./styles";
import { ExpenseTrackercontext } from "../../../contextAPI/context";
import { v4 as uniqueid } from "uuid";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/category";

const initialValues = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date(),
};

const FormikCreation = () => {
  const classes = useStyles();
  const [formdata, setFormdata] = useState(initialValues);

  const { addTransacation, transaction } = useContext(ExpenseTrackercontext);

  const createTransaction = () => {
    const transaction = {
      ...formdata,
      amount: Number(formdata.amount),
      id: uniqueid(),
    };
    addTransacation(transaction);
    localStorage.setItem("transaction", JSON.stringify(transaction));

    setFormdata(initialValues);
  };

  const selectedCategories =
    formdata.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <>
      <Grid container spacing={2}>
        {/* dallae form vitra 2 ko padding deko jastae */}

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={formdata.type}
              onChange={(e) =>
                setFormdata({ ...formdata, type: e.target.value })
              }
            >
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formdata.category}
              onChange={(e) =>
                setFormdata({ ...formdata, category: e.target.value })
              }
            >
              {selectedCategories.map((type) => (
                <MenuItem key={type.id} value={type.type}>
                  {type.type}
                </MenuItem>
              ))}
              {/* <MenuItem value="business">Business</MenuItem>
              <MenuItem value="salary">Salary</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={formdata.amount}
            onChange={(e) =>
              setFormdata({ ...formdata, amount: e.target.value })
            }
            type="number"
            label="Amount"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} style={{ paddingTop: "1.5rem" }}>
          <TextField
            value={formdata.date}
            onChange={(e) => setFormdata({ ...formdata, date: e.target.value })}
            type="date"
            fullWidth
          />
        </Grid>

        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth
          disabled={formdata.category === "" || formdata.amount === ""}
          onClick={createTransaction}
        >
          Create
        </Button>
      </Grid>
    </>
  );
};

export default FormikCreation;
