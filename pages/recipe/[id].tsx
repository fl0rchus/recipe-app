import type { ReactElement } from "react";

import { GetServerSideProps } from "next";
import { NextPage } from "next";

import Layout from "@layout/Layout";

import RecipeInfo from "@components/RecipeInfo";

import { RecipeInformation } from "@interfaces";
import { getRecipeInfo } from "@utils/getRecipeInfo";

interface Props {
  info: RecipeInformation;
}

const Recipe: NextPage<Props> = ({ info }) => {
  return <RecipeInfo info={info} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  const info = await getRecipeInfo(id);

  return {
    props: {
      info: JSON.parse(JSON.stringify(info)),
    },
  };
};

//@ts-ignore
Recipe.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Recipe;
