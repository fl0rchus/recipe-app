import type { ReactElement } from "react";
import Layout from "@layout/Layout";
import { Container, Text } from "@nextui-org/react";

const Favorites = () => {
  return (
    <Container>
      <Text h1>Favorites Recipes</Text>
    </Container>
  );
};

Favorites.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Favorites;
