import { Container } from "@mui/material";
import React from "react";

const PageWrapper = ({ children, width, gutters = true }) => {
  return (
    <Container maxWidth={width ? width : false} disableGutters={gutters}>
      {children}
    </Container>
  );
};

export default PageWrapper;
