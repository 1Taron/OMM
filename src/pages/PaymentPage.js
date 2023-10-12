import React from "react";
import Header from "../component/Header";
import "../css/Payment.css";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

export default function PaymentPage() {
  const [value, setValue] = React.useState("1");
  return (
    <>
      <Header />

      <div className="payMain_container font_01">
        <div className="pay_order_container">
          <div className="pay_order_box01">
            <div className="pay_order_img">
              <img alt="salad" src="img/salad01.jpg" />
            </div>
            <div className="pay_order_price">가격</div>
          </div>
          <div className="pay_order_box02">
            <div className="pay_order_ingredient">
              <p>재료1</p>
              <p>재료2</p>
              <p>재료3</p>
            </div>
          </div>
        </div>

        <div className="pay_remain_container">
          <div className="pay_delivery_box">
            <p className="pay_subtitle">배송지</p>
            <RadioGroup onChange={setValue} value={value} m="10px">
              <Stack direction="row">
                <Radio value="1">기본 배송지</Radio>
                <Radio value="2">신규 입력</Radio>
              </Stack>
            </RadioGroup>
            <div className="pay_delivery_adress">
              <p className="font_02">전라북도 익산시 익산대로 460</p>
            </div>
            <div className="pay_delivery_request">
              <p>배달 시 요청 사항</p>
              <input type="text" className="font_02" />
            </div>
          </div>
          <div className="pay_privacy_box">개인정보</div>
        </div>
      </div>
    </>
  );
}
