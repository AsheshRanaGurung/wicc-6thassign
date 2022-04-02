import React, { useEffect } from "react";
import useStyles from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

import { Routes, Route } from "react-router-dom";
import "./App.css";

import Homescreen from "./Screens/Homescreen";
import Login from "./components/SmallCard/Login";

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
    { id: 2, name: "formvalidation" },
    { id: 3, name: "react-chartjs" },
    { id: 4, name: "React-router-6" },
    { id: 5, name: "react-table" },
    { id: 6, name: "material-ui" },
    { id: 7, name: "Toastify" },
    { id: 8, name: "modal" },
    { id: 9, name: "uuid" },
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
            Highlighted topic in this project
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
      <Routes>
        <Route path="/table" element={<Login />} />

        <Route path="/" element={<Homescreen />} />
      </Routes>
    </>
  );
};

export default App;
