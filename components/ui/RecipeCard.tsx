import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  data: any;
}

const RecipeCard: FC<Props> = ({ data }) => {
  return (
    <Card cover hoverable clickable css={{ w: "100%" }}>
      <Card.Body>
        <Card.Image
          src={data.strMealThumb}
          height={400}
          width="100%"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: "absolute",
          bgBlur: "#ffffff",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row css={{ display: "flex", alignItems: "center" }}>
          <Col>
            <Text color="#000" size={14} weight="bold">
              {data.strMeal}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="warning">
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Info +
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default RecipeCard;
