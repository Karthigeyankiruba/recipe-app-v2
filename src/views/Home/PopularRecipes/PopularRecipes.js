import { Icon } from "@iconify/react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "../../../assets/toast.png";
import { getPopularRecipes } from "../../../service/api/rescipesApi";
import PageWrapper from "../../../components/PageWrapper";
const popularRecipes = [
  {
    name: "Creamy Mussels Pasta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniamtotam amet quam? Nihil hic, doloribus rem fugiat natus istenostrum accusantium. Error ab autem explicabo earum deseruntexcepturi nobis non.",
    popular: true,
    image: Image,
  },
  {
    name: "Smoked Salmon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniamtotam amet quam? Nihil hic, doloribus rem fugiat natus istenostrum accusantium. Error ab autem explicabo earum deseruntexcepturi nobis non.",
    popular: false,
    image: Image,
  },
  {
    name: "Cobb Salad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniamtotam amet quam? Nihil hic, doloribus rem fugiat natus istenostrum accusantium. Error ab autem explicabo earum deseruntexcepturi nobis non.",
    popular: true,
    image: Image,
  },
  {
    name: "Toad in the Hole",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniamtotam amet quam? Nihil hic, doloribus rem fugiat natus istenostrum accusantium. Error ab autem explicabo earum deseruntexcepturi nobis non.",
    popular: true,
    image: Image,
  },
  {
    name: "Turkey Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniamtotam amet quam? Nihil hic, doloribus rem fugiat natus istenostrum accusantium. Error ab autem explicabo earum deseruntexcepturi nobis non.",
    popular: false,
    image: Image,
  },
];

const PopularRecipes = () => {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    const check = localStorage.getItem("popular");

    if (check) {
      setData(JSON.parse(check));
    } else {
      setFetching(true);
      getPopularRecipes("number=6")
        .then((response) => {
          localStorage.setItem(
            "popular",
            JSON.stringify(response.data.recipes)
          );
          setData(response.data.recipes);
        })
        .catch((error) => {
          console.log("error: ", error);
        })
        .finally(() => setFetching(false));
    }
  }, []);

  return (
    <PageWrapper width={"xl"}>
      {fetching ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={5} paddingY={10} px={10}>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight={500}>
              Popular Recipes
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              Our moest favorite recipes of this week
            </Typography>
          </Grid>
          {data?.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={recipe.id}>
              <Box>
                <img
                  src={recipe?.image}
                  alt="image"
                  width={180}
                  height={120}
                  style={{ objectFit: "cover", borderRadius: 8 }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </PageWrapper>
  );
};

export default PopularRecipes;
