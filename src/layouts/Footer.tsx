import { Box } from "@mui/material";
import React from "react";

import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <Box component="footer" className="footer">
            <p>© 2024 User-Manager</p>
        </Box>
    );
};

export default Footer;
