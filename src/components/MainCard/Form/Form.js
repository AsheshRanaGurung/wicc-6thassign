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
import { Formik, Form } from "formik";
import * as Yup from "yup";

const initialValues = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date(),
};

const validationSchema = Yup.object().shape({
  amount: Yup.number().required(),
});

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
        {/* <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(JSON.stringify(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <div className="content" style={{ width: "24rem" }}>
              <Form style={{ paddingTop: "1rem" }}>
                <Grid item xs={6}>
                  <InputLabel> Amount:</InputLabel>
                  <input
                    className="form-control"
                    name="amount"
                    placeholder="Enter your amount "
                    value={values.amount}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  ></input>
                  {errors.amount && touched.amount ? (
                    <span style={{ color: "red" }}>{errors.amount}</span>
                  ) : null}
                </Grid>
                <Grid item xs={6} style={{ paddingTop: "1rem" }}>
                  <InputLabel>Type</InputLabel>
                  <Select
                    value={values.type}
                    onChange={(e) =>
                      setFormdata({ ...formdata, type: e.target.value })
                    }
                  >
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">expense</MenuItem>
                  </Select>
                </Grid>
                <br />
                <button
                  className="success"
                  type="submit"
                  disabled={isSubmitting === true}
                >
                  <div className="primary-btn text" style={{ color: "white" }}>
                    {isSubmitting ? "submitting" : "Buy"}
                  </div>
                </button>
              </Form>
            </div>
          )}
        </Formik> */}
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
