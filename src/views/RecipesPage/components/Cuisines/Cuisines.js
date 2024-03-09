import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { getCuisines } from "../../../../service/api/rescipesApi";
import PageWrapper from "../../../../components/PageWrapper";
import { Grid, CircularProgress, Typography, Box } from "@mui/material";
import Indian from "../../../../assets/indian.jpg";
import Mexican from "../../../../assets/mexican.jpg";
import Italian from "../../../../assets/italian.jpg";
import American from "../../../../assets/american.jpg";
import Chinese from "../../../../assets/chinese.jpg";
import Thai from "../../../../assets/thai.jpg";
import French from "../../../../assets/french.jpg";

const cuisinesList = [
  {
    cuisineName: "Indian",
    url: "indian",
    imageUrl: Indian,
  },
  {
    cuisineName: "Mexican",
    url: "Mexican",
    imageUrl: Mexican,
  },
  {
    cuisineName: "Italian",
    url: "Italian",
    imageUrl: Italian,
  },
  {
    cuisineName: "American",
    url: "American",
    imageUrl: American,
  },
  {
    cuisineName: "Chinese",
    url: "Chinese",
    imageUrl: Chinese,
  },
  {
    cuisineName: "Thai",
    url: "Thai",
    imageUrl: Thai,
  },
  {
    cuisineName: "French",
    url: "French",
    imageUrl: French,
  },
];

const Cuisines = () => {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);
  const theme = useTheme();

  const handleCuisine = async (url) => {
    console.log("url", url);
    setFetching(true);
    await getCuisines(`cuisine=${url}&number=25`)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log("error: ", error);
      })
      .finally(() => setFetching(false));
  };

  // console.log("data cuisine", data);

  return (
    <PageWrapper width={"xl"}>
      {fetching ? (
        <CircularProgress />
      ) : (
        <Grid container paddingY={10} spacing={3} px={10}>
          <Grid item xs={12}>
            <Typography variant="h4" fontWeight={500}>
              Cuisines
            </Typography>
            <Typography variant="body1" color={"text.secondary"}>
              Try Out Diffrent Cuisine
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

export default Cuisines;
