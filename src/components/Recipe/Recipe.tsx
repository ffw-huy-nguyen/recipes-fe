import { LABELS } from "@/utils/labels";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { IRecipe } from "./IRecipe";
import styles from "./Recipe.module.scss";

export const Recipe = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <h1 className={styles.title}>{recipe.title}</h1>
        <p className={styles.desc}>{recipe.desc}</p>
        <Stack direction="row" spacing={2}>
          <AccessTimeIcon />
          <div>
            <p className={styles.label}>{LABELS.prep}</p>
            <p>{recipe.prep}</p>
          </div>
          <div>
            <p className={styles.label}>{LABELS.bake}</p>
            <p>{recipe.bake}</p>
          </div>
          <div>
            <p className={styles.label}>{LABELS.total}</p>
            <p>{recipe.total}</p>
          </div>
        </Stack>
        <div className={styles.times}></div>
        <div className={styles.times}>
          <Stack direction="row" spacing={2}>
            <AddCircleOutline />
            <div>
              <p className={styles.label}>{LABELS.yield}</p>
              <p>{recipe.yield}</p>
            </div>
            <div>
              <Button variant="outlined">{LABELS.save}</Button>
            </div>
            <div>
              <Button variant="outlined">{LABELS.print}</Button>
            </div>
          </Stack>
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src={recipe.thumbnail}
          width={500}
          height={380}
          alt={recipe.title}
        />
      </Grid>
    </Grid>
  );
};
