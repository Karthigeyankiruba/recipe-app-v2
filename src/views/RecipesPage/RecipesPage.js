import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { Grid } from "@mui/material";
import PopularRecipes from "../Home/PopularRecipes/PopularRecipes";
import Cuisines from "./components/Cuisines/Cuisines";
import CourseMeal from "./components/CourseMeal/CourseMeal";
const RecipesPage = () => {
  return (
    <PageWrapper width="xl">
      <Grid>
        <Cuisines />
        <PopularRecipes />
        <CourseMeal />
      </Grid>
    </PageWrapper>
  );
};

export default RecipesPage;
