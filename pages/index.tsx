import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { Container, Grid, Text } from "@nextui-org/react";
import Link from "next/link";

import SearchBar from "@components/SearchBar";
import CategoryCard from "@components/CategoryCard";

import { recipeAPI } from "@utils/api";
import { CategoriesList, Meal } from "interfaces/CategoriesListResponse";

interface Props {
  categories: Meal[];
}

const Home: NextPage<Props> = ({ categories }) => {
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
        <Text h3>Search by category</Text>
        <Grid.Container gap={6} css={{ padding: 0, marginTop: 20 }}>
          {categories.map((item, index) => (
            <Link
              href={`/category/${item.strCategory}`}
              passHref
              key={`${item}-${index}`}
            >
              <Grid>
                <CategoryCard category={item.strCategory} />
              </Grid>
            </Link>
          ))}
        </Grid.Container>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await recipeAPI.get<CategoriesList>("list.php?c=list");
  const categories: Meal[] = data.meals.map((item) => item);

  return {
    props: {
      categories: categories,
    },
  };
};

export default Home;
