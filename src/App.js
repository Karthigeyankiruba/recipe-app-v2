// import "./App.css";
import { useEffect, useState } from "react";
import { getPopularRecipes } from "./service/api/rescipesApi";
import SignUpForm from "./components/SignUpForm";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import { Box, Typography, useTheme } from "@mui/material";
import LoginForm from "./components/LoginForm";
import Home from "./views/Home/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./views/layout/PageLayout";
import AuthLayout from "./views/Auth/layout/AuthLayout";

function App() {
  // const [data, setData] = useState(null);
  // const [fetching, setFetching] = useState(false);
  // const theme = useTheme();
  // useEffect(() => {
  //   setFetching(true);
  //   getPopularRecipes("number=5")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error: ", error);
  //     })
  //     .finally(() => setFetching(false));
  // }, []);

  // console.log("data: ", data);
  return (
    <div>
      {/* <ResponsiveAppBar /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="signin" index element={<SignUpForm />} />
            <Route path="login" element={<LoginForm />} />
          </Route>

          {/* Non-protected Home route */}
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
          </Route>

          {/* Protected Routes */}
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/" element={<ProtectedRoute />}>
            {/* <Route element={<PageLayout />}> */}
            <Route path="home" element={<Home />} />
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
