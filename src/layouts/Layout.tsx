import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Box
                component="main"
                sx={{
                    flex: 1,
                    maxWidth: "1440px",
                    margin: "0 auto",
                    padding: 2,
                }}
            >
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
