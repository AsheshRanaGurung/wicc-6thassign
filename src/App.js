import React, { useEffect, useState } from "react";
import Details from "./components/SmallCard/Details";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Main from "./components/MainCard/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const App = () => {
  const classes = useStyles();

  const topic = [
    { id: 1, name: "ContextAPI" },
    { id: 2, name: "formik" },
    { id: 3, name: "react-chartjs" },
    { id: 4, name: "material-ui" },
    { id: 5, name: "Toastify" },
    { id: 6, name: "modal" },
    { id: 7, name: "uuid" },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        style={{ backdropFilter: "blur(5px)" }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Topics covered in this project
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul>
              {topic.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </Typography>
        </Box>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
      />
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items added</Modal.Title>
        </Modal.Header>
        <Modal.Body>body</Modal.Body>

        <Modal.Footer>foot</Modal.Footer>
      </Modal> */}
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
    </>
  );
};

export default App;
