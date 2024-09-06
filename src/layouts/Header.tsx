import { Box } from "@mui/material";
import "./Header.scss";

const Header: React.FC = () => {
    return (
        <Box component="header" className="header">
            <p>User-Manager</p>
        </Box>
    );
};

export default Header;
