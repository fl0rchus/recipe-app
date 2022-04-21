/* eslint-disable @next/next/link-passhref */
import type { ReactElement, ReactNode, FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

import Layout from "@layout/Layout";
import { recipeAPI } from "@utils/api";

import { CategoryResult, Meal } from "interfaces/index";

import GridContainer from "@components/GridContainer";

interface Props {
  recipes: Meal[];
  getLayout: (page: ReactElement) => ReactNode;
}

const Category: FC<Props> = ({ recipes }) => {
  const {
    query: { category },
  } = useRouter();

  const items = recipes;

  return <GridContainer title={`${category}`} items={items} />;
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
