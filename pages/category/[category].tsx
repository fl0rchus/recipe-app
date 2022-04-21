/* eslint-disable @next/next/link-passhref */
import type { ReactElement, ReactNode, FC } from "react";

import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

import Layout from "@layout/Layout";

import GridContainer from "@components/GridContainer";

import { Meal } from "@interfaces";

import { getCategoryItems } from "@utils/getCategoryItems";
import { getCategoriesList } from "@utils/getCategoriesList";

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
  const categories = await getCategoriesList();

  return {
    //@ts-ignore
    paths: categories.map((category: { strCategory: string }) => ({
      params: { category: category.strCategory },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as { category: string };

  const recipes = await getCategoryItems(category);

  return {
    props: {
      recipes,
    },
  };
};

//@ts-ignore
Category.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Category;
