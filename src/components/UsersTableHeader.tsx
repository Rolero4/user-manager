import { TableHead, TableRow } from "@mui/material";
import React from "react";
import { UserFilter } from "../models/user.model";
import FilterField from "./FilterField";

type TableHeaderProps = {
    filters: {
        name: string;
        username: string;
        email: string;
        phone: string;
    };
    onFilterChange: (field: UserFilter, value: string) => void;
};

const TableHeader: React.FC<TableHeaderProps> = ({
    filters,
    onFilterChange,
}) => {
    return (
        <TableHead>
            <TableRow>
                <FilterField
                    label="Name"
                    value={filters.name}
                    placeholder="Search Name"
                    onFilterChange={(value) => onFilterChange("name", value)}
                />
                <FilterField
                    label="Username"
                    value={filters.username}
                    placeholder="Search Username"
                    onFilterChange={(value) =>
                        onFilterChange("username", value)
                    }
                />
                <FilterField
                    label="Email"
                    value={filters.email}
                    placeholder="Search Email"
                    onFilterChange={(value) => onFilterChange("email", value)}
                />
                <FilterField
                    label="Phone"
                    value={filters.phone}
                    placeholder="Search Phone"
                    onFilterChange={(value) => onFilterChange("phone", value)}
                />
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
