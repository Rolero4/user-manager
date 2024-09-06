import { TableRow as MuiTableRow, TableCell } from "@mui/material";
import React from "react";
import { User } from "../models/user.model";

type TableRowProps = {
    user: User;
};

const TableRow: React.FC<TableRowProps> = ({ user }) => {
    return (
        <MuiTableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
        </MuiTableRow>
    );
};

export default TableRow;
