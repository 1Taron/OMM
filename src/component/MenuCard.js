import React from "react";
import "../css/MenuCard.css";
import { Card, Image, CloseButton } from "@chakra-ui/react";

export default function MenuCard() {
  const [counter, setCounter] = React.useState(1);
  function counterPlus() {
    setCounter(counter + 1);
  }
  function counterSubject() {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      return 1;
    }
  }
  return (
    <>
      <div className="menu_container">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          //   borderTop={"1px solid #d8d9da"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src="img/salad01.jpg"
            alt="Caffe Latte"
            //   paddingTop={"5px"}
            margin={"auto"}
            mt={"10px"}
            mb={"10px"}
          />

          <div className="menu_contentbox">
            <p className="menu_ingredient">재료</p>
            <p className="menu_price font_01">10,000 원</p>
          </div>
          <div>
            <CloseButton size={"lg"} />
          </div>
        </Card>
        <div className="menu_addbox">
          <button onClick={counterSubject}>-</button>
          <p>{counter}</p>
          <button onClick={counterPlus}>+</button>
        </div>
      </div>
    </>
  );
}
