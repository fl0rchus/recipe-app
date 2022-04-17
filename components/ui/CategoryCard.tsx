import { Card, Text } from "@nextui-org/react";
import { FC } from "react";

interface Prop {
  category: string;
}

const CategoryCard: FC<Prop> = ({ category }) => {
  return (
    <Card hoverable clickable>
      <Text h5 transform="capitalize" weight="bold">
        {category}
      </Text>
    </Card>
  );
};

export default CategoryCard;
