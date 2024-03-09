import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import PageWrapper from "../../../../components/PageWrapper";
import { Grid, CircularProgress, Typography, Box } from "@mui/material";
import Indian from "../../../../assets/indian.jpg";
import Mexican from "../../../../assets/mexican.jpg";
import Italian from "../../../../assets/italian.jpg";
import American from "../../../../assets/american.jpg";
import Chinese from "../../../../assets/chinese.jpg";
import Thai from "../../../../assets/thai.jpg";
import French from "../../../../assets/french.jpg";
import { getCourseMeals } from "../../../../service/api/rescipesApi";

const cuisinesList = [
  {
    cuisineName: "Breakfast",
    url: "breakfast",
    imageUrl:
      "https://images.pexels.com/photos/4725650/pexels-photo-4725650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    cuisineName: "Soup",
    url: "soup",
    imageUrl:
      "https://images.pexels.com/photos/7656553/pexels-photo-7656553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    cuisineName: "Snack",
    url: "snack",
    imageUrl:
      "https://images.pexels.com/photos/266706/pexels-photo-266706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    cuisineName: "Salad",
    url: "salad",
    imageUrl:
      "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    cuisineName: "Drink",
    url: "drink",
    imageUrl:
      "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    cuisineName: "Dessert",
    url: "dessert",
    imageUrl:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const CourseMeal = () => {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);
  const theme = useTheme();

  const handleCuisine = async (url) => {
    console.log("url", url);
    setFetching(true);
    await getCourseMeals(`type=${url}&number=25`)
      .then((response) => {
        console.log("response", response);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log("error: ", error);
      })
      .finally(() => setFetching(false));
  };

  console.log("data Meals", data);

  return (
    <PageWrapper width={"xl"}>
      {fetching ? (
        <CircularProgress />
      ) : (
        <Grid container paddingY={10} spacing={3} px={10}>
          <Grid item xs={12}>
            <Typography variant="h4" fontWeight={500}>
              Course Of Meals
            </Typography>
            <Typography variant="body1" color={"text.secondary"}>
              Try Out Diffrent Meals
            </Typography>
          </Grid>
          {cuisinesList?.map((cuisine) => (
            <>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2}
                key={cuisine.cuisineName}
                onClick={() => handleCuisine(cuisine.url)}
                justifyContent="flex-end"
                width={"100%"}
                height={"100%"}
              >
                <Box>
                  <img
                    src={cuisine?.imageUrl}
                    alt="image"
                    width={180}
                    height={120}
                    style={{ objectFit: "cover", borderRadius: 8 }}
                  />
                </Box>
                <Typography variant="h6">{cuisine.cuisineName}</Typography>
              </Grid>
            </>
          ))}
        </Grid>
      )}
    </PageWrapper>
  );
};

export default CourseMeal;
