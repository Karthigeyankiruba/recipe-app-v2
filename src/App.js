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
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Recipe App V2 Started
        </a>
      </header>
    </div>
=======
    <>
      {/* <SignUpForm /> */}
      <ResponsiveAppBar />
    </>
>>>>>>> main
  );
}

export default App;
