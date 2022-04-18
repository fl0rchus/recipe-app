/* eslint-disable @next/next/link-passhref */
import type { ReactElement, ReactNode, FC } from "react";
import { useRouter } from "next/router";

import { Container, Grid, Text } from "@nextui-org/react";
import { recipeAPI } from "@utils/api";
import RecipeCard from "@components/RecipeCard";

import { GetStaticProps } from "next";
import { CategoryResult, Meal } from "interfaces/index";
import { GetStaticPaths } from "next";
import Layout from "@layout/Layout";
import Link from "next/link";
interface Props {
  recipes: Meal[];
  getLayout: (page: ReactElement) => ReactNode;
}

const Category: FC<Props> = ({ recipes }) => {
  const {
    query: { category },
  } = useRouter();

  return (
    <Container css={{ marginTop: 20, marginBottom: 20 }}>
      <Text h1 weight="medium" css={{ marginBottom: 20 }}>
        {category}
      </Text>
      <Grid.Container gap={4} css={{ padding: 0 }}>
        {recipes.map((item, index) => (
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

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await recipeAPI.get("list.php?c=list");

  return {
    paths: data.meals.map((category: { strCategory: string }) => ({
      params: { category: category.strCategory },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as { category: string };
  const { data } = await recipeAPI.get<CategoryResult>(
    `filter.php?c=${category}`
  );
  return {
    props: {
      recipes: data.meals,
    },
  };
};

//@ts-ignore
Category.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Category;
