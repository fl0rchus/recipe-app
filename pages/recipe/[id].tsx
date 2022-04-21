import type { ReactElement } from "react";

import { GetServerSideProps } from "next";
import { NextPage } from "next";

import Layout from "@layout/Layout";
import { recipeAPI } from "@utils/api";
import { RecipeInformation } from "@interfaces";
import RecipeInfo from "@components/RecipeInfo";

interface Props {
  info: RecipeInformation;
}

const Recipe: NextPage<Props> = ({ info }) => {
  return <RecipeInfo info={info} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await recipeAPI.get(`lookup.php?i=${ctx.params?.id}`);

  // @ts-ignore
  const ingredientsArr = () => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      ingredients.push({
        label: data?.meals[0][`strIngredient${i + 1}`],
        measure: data?.meals[0][`strMeasure${i + 1}`],
      });
    }
    return ingredients;
  };

  const info: RecipeInformation = {
    id: data?.meals[0].idMeal,
    name: data?.meals[0].strMeal,
    category: data?.meals[0].strCategory,
    instructions: data?.meals[0].strInstructions,
    image: data?.meals[0].strMealThumb,
    tags: data?.meals[0].strTags,
    video: data?.meals[0].strYoutube,
    ingredients: ingredientsArr(),
    source: data?.meals[0].strSource,
  };

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
