import "./App.css";
import { useEffect, useState } from "react";
import { getPopularRecipes } from "./service/api/rescipesApi";
import SignUpForm from "./components/SignUpForm";
import ResponsiveAppBar from "./components/Navbar/Navbar";

function App() {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    getPopularRecipes("number=5")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      })
      .finally(() => setFetching(false));
  }, []);

  // console.log("data: ", data);
  return (
    <>
      {/* <SignUpForm /> */}
      <ResponsiveAppBar />
    </>
  );
}

export default App;
