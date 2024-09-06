import { TableCell, TextField } from "@mui/material";

type FilterFieldProps = {
    label: string;
    value: string;
    placeholder: string;
    onFilterChange: (value: string) => void;
};

const FilterField: React.FC<FilterFieldProps> = ({
    label,
    value,
    placeholder,
    onFilterChange,
}) => {
    return (
        <TableCell>
            {label}
            <TextField
                variant="outlined"
                size="small"
                value={value}
                onChange={(e) => onFilterChange(e.target.value)}
                placeholder={placeholder}
                sx={{ marginTop: "10px" }}
                fullWidth
            />
        </TableCell>
    );
};

export default FilterField;
