import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import { Recipe } from "@/components/Recipe/Recipe";
import { getRecipe } from "@/utils/fetchData";
import { notFound } from "next/navigation";

export default async function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log(slug);
  const recipe = await getRecipe(slug, true); // TODO: Set isFake to false when using real data
  if (!recipe) {
    notFound();
  }
  return (
    <>
      <Breadcrumbs
        items={recipe.categories.map((cat) => ({
          title: cat,
          href: `/recipes/${cat}`, // TODO: Add correct href for category
        }))}
      />
      <Recipe recipe={recipe} />
    </>
  );
}
