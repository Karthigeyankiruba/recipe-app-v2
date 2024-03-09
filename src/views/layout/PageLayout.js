import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const PageLayout = () => {
  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <ResponsiveAppBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
