import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { Container, Grid, Text } from "@nextui-org/react";

import SearchBar from "@components/SearchBar";
import CategoryCard from "@components/CategoryCard";

import { getCategoriesList } from "@utils/GetCategoriesList";
import { CategoriesList } from "interfaces/CategoriesList";

interface Props {
  categories: any;
}

const Home: NextPage<Props> = ({ categories }) => {
  console.log(categories);

  return (
    <Container>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        direction="column"
        css={{ marginTop: 30 }}
      >
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 100%",
          }}
          weight="bold"
        >
          Recipe App
        </Text>
        <SearchBar />
      </Container>
      <Container css={{ marginTop: 20 }}>
        <Text h3>Categories</Text>
        <Grid.Container gap={6} css={{ padding: 0, marginTop: 20 }}>
          {categories.map((item, index) => (
            <Grid key={index}>
              <CategoryCard category={item.strCategory} />
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );
  const res = await data.json();

  return {
    props: {
      categories: res.meals,
    },
  };
};

export default Home;
