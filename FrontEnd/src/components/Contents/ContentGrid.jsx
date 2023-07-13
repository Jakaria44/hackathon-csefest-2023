import { Wrap, WrapItem } from "@chakra-ui/react";
import { Card } from "./Card";
import { useState } from "react";
import { ContentData } from "../../assets/Contents";

const CardGrid = () => {
  const [cardData, setCardData] = useState(ContentData);
  return (
    <Wrap justify="center" minH={"75vh"}>
      {cardData &&
        cardData.map((card, index) => (
          <WrapItem key={index}>
            <Card {...card} />
          </WrapItem>
        ))}
    </Wrap>
  );
};

export default CardGrid;
