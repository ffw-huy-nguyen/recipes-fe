import { Recipes } from "@/components/Recipes/Recipes";
import { getRecipes } from "@/utils/fetchData";

export default async function Home() {
  const recipes = await getRecipes(true); // TODO: Set isFake to false when using real data
  return <Recipes recipes={recipes} />;
}
