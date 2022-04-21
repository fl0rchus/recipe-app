import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";

import { Container, Grid, Text } from "@nextui-org/react";

import { getCategoriesList } from "@utils/getCategoriesList";
import { CategoryLabel } from "@interfaces";

import SearchBar from "@components/SearchBar";
import CategoryCard from "@components/CategoryCard";
interface Props {
  categories: CategoryLabel[];
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
  return {
    props: {
      categories: await getCategoriesList(),
    },
  };
};

export default Home;
