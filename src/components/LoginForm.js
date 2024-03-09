import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, signUpSuccess } from "../redux/reducers/authReducer";
import { IoMdMail } from "react-icons/io";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  console.log("user", user);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // Retrieve user details object from localStorage
      const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

      if (storedUserDetails) {
        const savedEmail = storedUserDetails.email;
        const savedPassword = storedUserDetails.password;

        console.log("values", values);
        console.log("savedEmail", savedEmail);
        console.log("savedPassword", savedPassword);

        if (savedEmail === values.email && savedPassword === values.password) {
          const token = "9876543210";
          dispatch(loginSuccess(values));
          localStorage.setItem("token", token);
          navigate("/");
        } else if (savedEmail !== values.email) {
          alert("User not found");
        } else {
          alert("Email or password does not match");
        }
      } else {
        alert("User details not found in localStorage");
      }
    },
  });

  console.log("formik.values", formik.values);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        mt: 3,
        width: "100%",
      }}
    >
      <FormControl variant="standard">
        <FormLabel htmlFor="outlined-username" sx={{ mb: 1, color: "white" }}>
          Username
        </FormLabel>
        <TextField
          fullWidth
          id="outlined-username"
          // label="Username"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            border: "none",
          }}
          variant="outlined"
          type="text"
          value={formik.values.email}
          name="email"
          placeholder="Enter Username"
          onChange={formik.handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon icon="iconamoon:profile-fill" fontSize={25} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <FormControl variant="standard">
        <FormLabel htmlFor="outlined-password" sx={{ mb: 1, color: "white" }}>
          Password
        </FormLabel>
        <TextField
          fullWidth
          id="outlined-password"
          // label="Password"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            border: "none",
          }}
          variant="outlined"
          type="text"
          value={formik.values.password}
          name="password"
          placeholder="Enter Password"
          onChange={formik.handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon icon="solar:lock-password-bold" fontSize={25} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <Button
        size="large"
        color="warning"
        variant="contained"
        type="submit"
        onClick={formik.handleSubmit}
        sx={{
          textTransform: "none",
          py: 2,
          "&:hover": { backgroundColor: "white" },
        }}
      >
        <Typography fontWeight={500} color={theme.palette.grey.dark}>
          Log In
        </Typography>
      </Button>

      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Don't have an account?
        <Link
          style={{ color: theme.palette.warning.light }}
          to={"/auth/signin"}
        >
          Sign In
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
