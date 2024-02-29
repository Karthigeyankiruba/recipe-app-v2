import React from "react";
import Hero from "./Hero/Hero";
import PopularRecipes from "./PopularRecipes/PopularRecipes";
import CutlerySection from "./CutlerySectiom/CutlerySection";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularRecipes />
      <CutlerySection />
    </>
  );
};

export default Home;
