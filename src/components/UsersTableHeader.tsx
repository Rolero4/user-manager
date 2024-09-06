import { TableCell, TableHead, TableRow, TextField } from "@mui/material";
import React from "react";

type TableHeaderProps = {
    filters: {
        name: string;
        username: string;
        email: string;
        phone: string;
    };
    onFilterChange: (field: string, value: string) => void;
};

const TableHeader: React.FC<TableHeaderProps> = ({
    filters,
    onFilterChange,
}) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    Name
                    <TextField
                        variant="outlined"
                        size="small"
                        value={filters.name}
                        onChange={(e) => onFilterChange("name", e.target.value)}
                        placeholder="Search Name"
                        fullWidth
                    />
                </TableCell>
                <TableCell>
                    Username
                    <TextField
                        variant="outlined"
                        size="small"
                        value={filters.username}
                        onChange={(e) =>
                            onFilterChange("username", e.target.value)
                        }
                        placeholder="Search Username"
                        fullWidth
                    />
                </TableCell>
                <TableCell>
                    Email
                    <TextField
                        variant="outlined"
                        size="small"
                        value={filters.email}
                        onChange={(e) =>
                            onFilterChange("email", e.target.value)
                        }
                        placeholder="Search Email"
                        fullWidth
                    />
                </TableCell>
                <TableCell>
                    Phone
                    <TextField
                        variant="outlined"
                        size="small"
                        value={filters.phone}
                        onChange={(e) =>
                            onFilterChange("phone", e.target.value)
                        }
                        placeholder="Search Phone"
                        fullWidth
                    />
                </TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
