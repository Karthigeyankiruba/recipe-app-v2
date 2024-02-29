import { Container, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../../../components/Navbar/Navbar";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";

const AuthLayout = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container height={"100vh"}>
        <Grid item lg={7} md={true} sm={true} maxHeight={"100vh"}>
          <img
            src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=3440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="loginImage"
            style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
          />
        </Grid>
        <Grid
          item
          lg={5}
          md={12}
          sm={12}
          sx={{ backgroundColor: theme.palette.primary.main, color: "white" }}
          maxHeight={"100vh"}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ textAlign: "center", mt: 5 }}
          >
            U<span style={{ color: theme.palette.error.light }}>Chef</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              px: 10,
              gap: 5,
            }}
          >
            <Stack gap={1} sx={{ textAlign: "start", width: "100%" }}>
              <Typography variant="h4" fontWeight={700}>
                Lets's Start Cooking <br /> With Popular{" "}
                <strong style={{ color: theme.palette.error.light }}>
                  Recipes 🍲
                </strong>
              </Typography>

              <Typography
                variant="h6"
                fontWeight={500}
                color={theme.palette.secondary.main}
                sx={{ textAlign: "start", width: "100%", mt: 2 }}
              >
                Want to learn cook but confused how to start? <br />
                No need to worry again
              </Typography>
            </Stack>

            <>
              <Outlet />
            </>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AuthLayout;
