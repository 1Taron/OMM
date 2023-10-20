import React, { useContext, useState } from "react";
import "../css/MenuCard.css";
import { Card, Image, CloseButton } from "@chakra-ui/react";
import { useEffect } from "react";
export default function MenuCard({ onProductCountChange, username }) {
  const [counter, setCounter] = useState(1);

  // http://localhost:4000/food로 부터 데이터 받아와서 쏘기
  const [FoodData, setFoodData] = useState("");
  const Account = FoodData.Account;
  const index = FoodData.Sangchu_index;
  useEffect(() => {
    fetch("http://localhost:4000/food")
      .then((Response) => {
        if (Response.status === 200) {
          return Response.json();
        } else {
          throw new Error("데이터 가져오기 실패");
        }
      })
      .then((data) => setFoodData(data))
      .catch((error) => console.error(error));
  }, []);

  const defaultprice = Account;

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
            src="/salad01.jpg"
            alt="Menu1"
            margin={"auto"}
            mt={"10px"}
            mb={"10px"}
          />

          <div className="menu_contentbox">
            <p className="menu_ingredient">상추 X {index}</p>

            <p className="menu_price font_01">{Account} 원</p>
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
