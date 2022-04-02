import React, { useContext, useEffect, useMemo, useState } from "react";

import { ExpenseTrackercontext } from "../../contextAPI/context";
import { useTable } from "react-table/dist/react-table.development";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { transaction } = useContext(ExpenseTrackercontext);

  const tableColumn = [
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
  ];
  const columns = useMemo(() => tableColumn, []);
  const data = useMemo(() => transaction, [transaction]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: data || [],
    });
  //   const navigate = useNavigate();

  return (
    <div style={{ margin: "7rem" }}>
      <NavLink to="/">
        <button className="button-back">Back</button>
      </NavLink>

      <TableContainer component={Paper}>
        <Table variant="striped" colorScheme="gray" {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Login;
