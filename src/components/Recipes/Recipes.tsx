import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { IRecipe } from "../Recipe/IRecipe";

export const Recipes = ({ recipes }: { recipes: IRecipe[] }) => {
  return (
    <List>
      {recipes.map((recipe) => (
        <ListItem key={recipe.slug}>
          <ListItemAvatar>
            <Avatar alt={recipe.title} src={recipe.thumbnail} />
          </ListItemAvatar>
          <ListItemText
            primary={recipe.title}
            secondary={recipe.desc.slice(0, 80)}
          />
          <Link href={`/recipes/${recipe.slug}`}>View Recipe</Link>
        </ListItem>
      ))}
    </List>
  );
};
