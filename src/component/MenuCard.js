import React, { useContext, useState } from "react";
import "../css/MenuCard.css";
import { Card, Image, CloseButton } from "@chakra-ui/react";

export default function MenuCard({ onProductCountChange }) {
  const [counter, setCounter] = useState(1);
  const defaultprice = 10000;

  function counterPlus() {
    setCounter(counter + 1);
    onProductCountChange(counter + 1, defaultprice);
    // pd_quantity = counter;
  }
  function counterSubject() {
    if (counter > 2) {
      setCounter(counter - 1);
      onProductCountChange(counter - 1, defaultprice);
    } else {
      setCounter(1);
      onProductCountChange(1, defaultprice);
    }
    // pd_quantity = counter;
  }

  return (
    <>
      <div className="menu_container">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            display={"block"}
            objectFit="cover"
            width={"100%"}
            height={"100%"}
            maxW={{ base: "100%", sm: "300px" }}
            src="img/salad01.jpg"
            alt="Menu1"
            margin={"auto"}
            mt={"10px"}
            mb={"10px"}
          />

          <div className="menu_contentbox">
            <p className="menu_ingredient">재료</p>
            <p className="menu_price font_01">{defaultprice}원</p>
          </div>
          <div>
            <CloseButton size={"lg"} />
          </div>
        </Card>
        <div className="menu_addbox">
          <button type="button" onClick={counterSubject}>
            -
          </button>
          <p>{counter}</p>
          <button type="button" onClick={counterPlus}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
