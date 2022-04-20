import { FC } from "react";
import {
  Container,
  Card,
  Col,
  Text,
  Link,
  Image,
  Grid,
  Button,
} from "@nextui-org/react";
import { RecipeInformation } from "@interfaces";
import { toggleSave } from "@utils/localstorage";

interface Props {
  info: RecipeInformation;
}

const RecipeInfo: FC<Props> = ({ info }) => {
  return (
    <Grid.Container
      gap={2}
      css={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}
    >
      <Grid xs={12} md={8}>
        <Card css={{ padding: 20 }}>
          <Card.Header>
            <Col>
              <Text h1>{info.name}</Text>
              <Text weight="medium">
                Category:{" "}
                <Link href={`/category/${info.category}`} color="warning">
                  {info.category}
                </Link>
              </Text>
            </Col>
          </Card.Header>
          <Card.Body>
            <Container css={{ padding: 0, marginBottom: 20 }}>
              <Text h4>Instructions</Text>
              <Text weight="light">{info.instructions}</Text>
            </Container>
            <Container css={{ padding: 0 }}>
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
            </Container>
          </Card.Body>
          <Card.Footer>
            <Col>
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
        <Container>
          <Col>
            <Image src={info.image} alt={info.name} />
            {info.tags != null && (
              <Text color="warning" size={14} css={{ marginTop: 10 }}>
                Tags: {info.tags}
              </Text>
            )}
          </Col>
        </Container>
      </Grid>
    </Grid.Container>
  );
};

export default RecipeInfo;
