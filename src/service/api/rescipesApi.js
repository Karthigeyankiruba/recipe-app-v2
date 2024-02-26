import ApiService from "./apiService";
import { apiConfig } from "../../config/app";

function url(path) {
  return apiConfig.urls.recipesApi + path;
}

// function recipesUrl(path) {
//   return url(`recipes/${path}?${process.env.REACT_APP_SPOONACULAR_API_KEY}`);
// }
function recipesUrl(path, queryParams) {
  console.log("queryParams", queryParams);
  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  return url(`recipes/${path}?${queryParams}&apiKey=${apiKey}`);
}

export function getRecipes(params) {
  return ApiService.get(recipesUrl("random", params));
}

export function getPopularRecipes(params) {
  return ApiService.get(recipesUrl("random", params));
}

export function getVegiterianRecipes(params) {
  return ApiService.get(recipesUrl("random", params));
}
