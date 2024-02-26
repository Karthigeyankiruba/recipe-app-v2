import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/authReducer";

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: (values) => {
      dispatch(loginSuccess(values));
      localStorage.setItem("userDetails", JSON.stringify(values));
    },
  });

  console.log("formik.values", formik.values);
  return (
    <>
      <label htmlFor="name">Username</label>
      <input
        type="text"
        value={formik.values.name}
        name="name"
        placeholder="Username"
        onChange={formik.handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        value={formik.values.email}
        name="email"
        placeholder="Enter email"
        onChange={formik.handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        value={formik.values.password}
        name="password"
        placeholder="Enter Password"
        onChange={formik.handleChange}
      />

      <button type="submit" onClick={formik.handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default LoginForm;
