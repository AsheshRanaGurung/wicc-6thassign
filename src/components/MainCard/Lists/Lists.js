import React, { useContext } from "react";
import { Delete, MoneyOff } from "@material-ui/icons";
import {
  List as MeroList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { ExpenseTrackercontext } from "../../../contextAPI/context";
import useStyles from "./styles";

const Lists = () => {
  const classes = useStyles();
  const { deleteTransacation, transaction } = useContext(ExpenseTrackercontext);

  return (
    <MeroList className={classes.list}>
      {transaction.map((item) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={item.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  item.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.category}
              secondary={`Rs.${item.amount} -${item.date}`}
            ></ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransacation(item.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MeroList>
  );
};

export default Lists;
