import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import CutleryImage from "../../../assets/cutlery.jpg";
const CutlerySection = () => {
  return (
    <Grid
      container
      sx={{
        background: `url(${CutleryImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "45vh",
        position: "relative",
      }}
    >
      <Card
        raised={true}
        sx={{
          width: "max-content",
          height: "max-content",
          position: "absolute",
          top: "30%",
          right: "20%",
          borderRadius: 4,
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight={500}>
            50+ Breakfast Recipes That
            <br /> Very Quick And Easy
          </Typography>
          <Typography variant="body2" color={"text.secondary"} mt={1}>
            Find the perfect food ideas to start you day with
            <br /> the quickest and easiest way
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CutlerySection;
