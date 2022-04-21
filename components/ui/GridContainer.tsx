/* eslint-disable @next/next/link-passhref */
import { FC } from "react";
import Link from "next/link";
import RecipeCard from "./RecipeCard";
import { Container, Text, Grid } from "@nextui-org/react";
import { Meal } from "@interfaces";

interface Props {
  title: string;
  items: Meal[];
}

const GridContainer: FC<Props> = ({ title, items }) => {
  return (
    <Container css={{ marginTop: 20 }}>
      <Text h1 weight="medium" css={{ marginBottom: 20 }}>
        {title}
      </Text>
      <Grid.Container gap={4} css={{ padding: 0 }}>
        {items.map((item: any, index: number) => (
          <Link href={`/recipe/${item.idMeal}`} key={item.idMeal}>
            <Grid key={index}>
              <RecipeCard data={item} />
            </Grid>
          </Link>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default GridContainer;
