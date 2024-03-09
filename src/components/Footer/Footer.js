import React from "react";
import {
  useTheme,
  Grid,
  Typography,
  TextField,
  Stack,
  Button,
  Divider,
  Box,
} from "@mui/material";
import PageWrapper from "../../../src/components/PageWrapper";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor:
          theme.palette.mode === "dark" ? "white" : theme.palette.primary.main,
        color: theme.palette.mode === "dark" ? "black" : "white",
      }}
    >
      <PageWrapper width={"xl"}>
        <Box>
          <Grid container px={10} py={10}>
            <Grid item lg={7}>
              <h2>UChef</h2>
              <Typography variant="body1" color={theme.palette.secondary.main}>
                Discover 1000+ recipes in your hand
                <br /> with the best recipe. Help you to find
                <br /> the easiest way to cook.
              </Typography>
            </Grid>
            <Grid
              item
              lg={5}
              container
              justifyContent="flex-end"
              width={"100%"}
            >
              <Grid item lg={12}>
                <Stack gap={3}>
                  <Typography variant="h4">
                    Sign up for our newsletter
                  </Typography>

                  <Stack direction="row" gap={2}>
                    <TextField
                      fullWidth
                      // value={name}
                      placeholder="Your email address"
                      variant="standard"
                      color="warning"
                      InputProps={{
                        style: { color: theme.palette.secondary.main },
                        borderColor: "red",
                      }}
                      // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      //   setName(event.target.value);
                      // }}
                    />
                    <Button variant="contained" color="warning">
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </Grid>

              {/* <Grid item lg={12}>
              <Divider variant="fullWidth" />
            </Grid> */}
              <Grid
                item
                lg={12}
                marginTop={5}
                display="flex"
                direction={"row"}
                justifyContent="space-between"
              >
                <Stack>
                  <Typography variant="h5">Help</Typography>

                  <Stack gap={0.5} mt={1}>
                    <Link to={"/"}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={theme.palette.secondary.main}
                      >
                        Home
                      </Typography>
                    </Link>
                    <Link to={"/"}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={theme.palette.secondary.main}
                      >
                        Recipes
                      </Typography>
                    </Link>{" "}
                    <Link to={"/"}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={theme.palette.secondary.main}
                      >
                        Articles
                      </Typography>
                    </Link>
                    <Link to={"/"}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={theme.palette.secondary.main}
                      >
                        About Us
                      </Typography>
                    </Link>
                  </Stack>
                </Stack>

                <Stack>
                  <Typography variant="h5">Menu</Typography>
                  <Stack gap={0.5} mt={1}>
                    <Link to={"/"}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={theme.palette.secondary.main}
                      >
                        Privacy and Policy
                      </Typography>
                    </Link>
                    <Link to={"/"}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={theme.palette.secondary.main}
                      >
                        Terms of Uses
                      </Typography>
                    </Link>
                  </Stack>
                </Stack>

                <Stack>
                  <Typography variant="h5">Social</Typography>

                  <Stack gap={0.5} mt={1}>
                    <Link to={"/"}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={theme.palette.secondary.main}
                      >
                        Facebook
                      </Typography>
                    </Link>
                    <Link to={"/"}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={theme.palette.secondary.main}
                      >
                        Instagram
                      </Typography>
                    </Link>{" "}
                    <Link to={"/"}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={theme.palette.secondary.main}
                      >
                        Twitter
                      </Typography>
                    </Link>
                    <Link to={"/"}>
                      <Typography
                        variant="body1"
                        fontSize={14}
                        color={theme.palette.secondary.main}
                      >
                        Youtube
                      </Typography>
                    </Link>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </PageWrapper>
    </div>
  );
};

export default Footer;
