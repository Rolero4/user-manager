import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks"; // Import the typed hooks

import { UserFilter } from "../models/user.model";
import {
    selectUserFilters,
    selectUsers,
} from "../services/users/user.selector";
import { fetchUsers, setFilter } from "../services/users/user.slice";
import TableHeader from "./UsersTableHeader";
import UsersTableRow from "./UsersTableRow";

import "./UsersTable.scss";

const UsersTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);
    const filters = useAppSelector(selectUserFilters);
    const fetchCalledRef = useRef(false);

    useEffect(() => {
        if (!fetchCalledRef.current) {
            console.log("Fetching users");
            dispatch(fetchUsers());
            fetchCalledRef.current = true;
        }
    }, [dispatch]);

    const handleFilterChange = (field: UserFilter, value: string) => {
        dispatch(setFilter({ field, value }));
    };

    const filteredUsers = users.filter((user) => {
        return (
            user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            user.username
                .toLowerCase()
                .includes(filters.username.toLowerCase()) &&
            user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
            user.phone.toLowerCase().includes(filters.phone.toLowerCase())
        );
    });

    return (
        <div className="table-container fade-in">
            <Table>
                <TableHeader
                    onFilterChange={handleFilterChange}
                    filters={filters}
                />
                <TableBody>
                    {filteredUsers.map((user) => (
                        <UsersTableRow key={user.id} user={user} />
                    ))}
                    {filteredUsers.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={4} className="fade-in">
                                No users found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default UsersTable;
