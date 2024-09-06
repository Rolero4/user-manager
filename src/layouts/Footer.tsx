import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                backgroundColor: "grey.900",
                color: "white",
                textAlign: "center",
            }}
        >
            <Typography variant="body2">© 2024 My Application</Typography>
        </Box>
    );
};

export default Footer;
