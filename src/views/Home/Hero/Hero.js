import React from "react";
import { Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import HeroImage from "../../../assets/4k.jpg";

const Hero = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        background: `url(${HeroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Grid
        item
        lg={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack gap={5}>
          <Typography
            color={theme.palette.grey[100]}
            variant="h2"
            fontWeight={600}
          >
            The Easiest Way
            <br /> To Make Your
            <br /> Favorite Meal
          </Typography>

          <Typography color={theme.palette.secondary.light} variant="h6">
            Discover 1000+ recipes in your hand with the best recipe.
            <br />
            Help you find the easiest way to cook.
          </Typography>

          <Button
            // color="warning"
            variant="contained"
            size="large"
            sx={{
              width: "max-content",
              px: 5,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
              backgroundColor: theme.palette.warning.main,
              ":hover": {
                backgroundColor: theme.palette.warning.light,
                color: theme.palette.grey.dark,
              },
            }}
          >
            Explore Recipes
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Hero;
