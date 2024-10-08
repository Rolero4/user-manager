import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks"; // Import the typed hooks

import {
    selectUserError,
    selectUserLoading,
    selectUsers,
} from "../services/users/user.selector";
import { fetchUsers } from "../services/users/user.slice";
import TableHeader from "./UsersTableHeader";
import UsersTableRow from "./UsersTableRow";

import { filterUsers } from "../helpers/filterUsers.helper";
import { selectFilters } from "../services/filters/filters.selector";
import { setFilter } from "../services/filters/filters.slice";
import "./UsersTable.scss";

const UsersTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);
    const filters = useAppSelector(selectFilters);
    const loading = useAppSelector(selectUserLoading);
    const error = useAppSelector(selectUserError);
    const filteredUsers = filterUsers(users, filters);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleFilterChange = (field: keyof typeof filters, value: string) => {
        dispatch(setFilter({ field, value }));
    };

    return (
        <div className="table-container fade-in">
            <Table>
                <TableHeader
                    onFilterChange={handleFilterChange}
                    filters={filters}
                />
                <TableBody>
                    {loading && (
                        <TableRow>
                            <TableCell colSpan={4} className="fade-in">
                                Loading...
                            </TableCell>
                        </TableRow>
                    )}
                    {error && (
                        <TableRow>
                            <TableCell
                                colSpan={4}
                                className="error-message fade-in"
                            >
                                {error}
                            </TableCell>
                        </TableRow>
                    )}
                    {!loading && !error && filteredUsers.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={4} className="fade-in">
                                No users found.
                            </TableCell>
                        </TableRow>
                    )}
                    {!loading &&
                        !error &&
                        filteredUsers.length > 0 &&
                        filteredUsers.map((user) => (
                            <UsersTableRow key={user.id} user={user} />
                        ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UsersTable;
