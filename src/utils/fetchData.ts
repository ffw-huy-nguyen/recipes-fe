import { IRecipe } from "@/components/Recipe/IRecipe";
import { fakeRecipesData } from "./fakeData";
export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getRecipes = async (
  isFake: boolean = false
): Promise<IRecipe[]> => {
  if (isFake) {
    return fakeRecipesData;
  }
  return fetchData("/api/recipes");
};

export const getRecipe = async (
  slug: string,
  isFake: boolean = false
): Promise<IRecipe | undefined> => {
  if (isFake) {
    return fakeRecipesData.find((recipe) => recipe.slug === slug);
  }
  return fetchData(`/api/recipes/${slug}`);
};
