import type { ReactElement } from "react";
import Layout from "@layout/Layout";
import { GetServerSideProps } from "next";
import { NextPage } from "next";
import { recipeAPI } from "@utils/api";
import { RecipeInformation } from "@interfaces";
import { Card, Col, Grid, Text, Link, Table, Image } from "@nextui-org/react";

interface Props {
  info: RecipeInformation;
}

const Recipe: NextPage<Props> = ({ info }) => {
  console.log(info);
  return (
    <Grid.Container
      gap={2}
      css={{ marginTop: 40, paddingLeft: 20, paddingRight: 20 }}
    >
      <Grid xs={12} md={8}>
        <Card css={{ padding: 20 }}>
          <Card.Header>
            <Col>
              <Text h1>{info.name}</Text>
              <Text weight="medium" color="warning">
                Category: {info.category}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body>
            <Col>
              <Text h4>Instructions</Text>
              <Text weight="light">{info.instructions}</Text>
              <Text h4>Ingredients</Text>
              {info.ingredients.map(
                (item, index) =>
                  item.label &&
                  item.measure != "" && (
                    <Text key={index} weight="light">
                      {item.label} - {item.measure}
                    </Text>
                  )
              )}
            </Col>
          </Card.Body>
          <Card.Footer>
            <Col>
              <Text color="warning" size={14}>
                Tags: {info.tags}
              </Text>
              <Link href={info.video} target="_blank">
                Link to video
              </Link>
            </Col>
            <Link href={info.source} target="_blank">
              Source
            </Link>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid xs={12} md={4}>
        <Card>
          <Card.Body>
            <Card.Image src={info.image} alt={info.name} />
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
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
