import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import "./Layout.scss";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Box component="main" className="main-container">
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
