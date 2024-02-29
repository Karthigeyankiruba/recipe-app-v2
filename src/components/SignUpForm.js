import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { signUpSuccess } from "../redux/reducers/authReducer";
import { IoMdMail } from "react-icons/io";
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
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: (values) => {
      dispatch(signUpSuccess(values));
      localStorage.setItem("userDetails", JSON.stringify(values));
      formik.resetForm();
      navigate("/auth/login");
    },
  });

  console.log("formik.values", formik.values);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 1,
        width: "100%",
      }}
    >
      <FormControl variant="standard">
        <FormLabel htmlFor="outlined-username" sx={{ mb: 1, color: "white" }}>
          Username
        </FormLabel>
        <TextField
          fullWidth
          id="outlined-basic"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            border: "none",
          }}
          variant="outlined"
          type="text"
          value={formik.values.name}
          name="name"
          placeholder="Username"
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
        <FormLabel htmlFor="outlined-email" sx={{ mb: 1, color: "white" }}>
          Email
        </FormLabel>
        <TextField
          fullWidth
          id="outlined-email"
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            border: "none",
          }}
          variant="outlined"
          type="text"
          value={formik.values.email}
          name="email"
          placeholder="Enter email"
          onChange={formik.handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IoMdMail fontSize={25} />
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
        color="warning"
        variant="contained"
        type="submit"
        onClick={formik.handleSubmit}
        sx={{
          textTransform: "none",
          py: 2,
          mt: 1,
          "&:hover": { backgroundColor: "white" },
        }}
      >
        <Typography fontWeight={500} color={theme.palette.grey.dark}>
          Sign In
        </Typography>
      </Button>

      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Already have an account?
        <Link style={{ color: theme.palette.warning.light }} to={"/auth/login"}>
          Log In
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUpForm;
