import { NextPage, GetServerSideProps } from "next";

import { Container, Text } from "@nextui-org/react";

import Layout from "@layout/Layout";
import GridContainer from "@components/GridContainer";

import { getResults } from "@utils/getResult";
import { Meal } from "@interfaces";
import Link from "next/link";

interface Props {
  results: Meal[];
  query: string;
}

const SearchPage: NextPage<Props> = ({ results, query }) => {
  const items = results;

  if (items == null) {
    return (
      <Container
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 40,
        }}
      >
        <Text h2>No results</Text>
        <Link href="/">Go back</Link>
      </Container>
    );
  }

  return <GridContainer title={`Results for ${query}`} items={items} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx.params as { query: string };

  const results = await getResults(query);

  return {
    props: {
      results: JSON.parse(JSON.stringify(results)),
      query,
    },
  };
};

//@ts-ignore
SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SearchPage;
