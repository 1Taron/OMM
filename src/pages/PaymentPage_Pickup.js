import React, { useContext, useEffect, useState } from "react";
import MenuCard from "../component/MenuCard";
import "../css/Payment.css";
import { Stack, Checkbox, Radio, RadioGroup } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function PaymentPage_Pickup() {
  const { userInfo } = useContext(UserContext);
  const [FoodData, setFoodData] = useState("");
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
  const Account1 = FoodData.Account;

  const [paymentValue, setPaymentValue] = React.useState("1");

  const maxLength = 50;

  const handlePd_textareaValueChange = (e) => {
    const inputText = e.target.value;

    // 글자 수가 최대 길이를 초과하지 않도록 제한
    if (inputText.length <= maxLength) {
      setpd_TextareaValue(inputText);
    }
  };

  const [pd_checkboxValue1, setpd_CheckboxValue1] = useState(false);
  const [pd_textareaValue, setpd_TextareaValue] = useState("");

  const [redirect, setRedirect] = useState(false);

  const [totalProductCount, setTotalProductCount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleProductCountChange = (productCount, Account1) => {
    setTotalProductCount(productCount);
    setTotalAmount(productCount * Account1);
  };

  async function pickup_pay(e) {
    e.preventDefault();

    //requset push
    const requsetToSave = [];

    if (pd_checkboxValue1) {
      requsetToSave.push("일회용 수저, 포크가 필요해요.");
    }
    if (pd_textareaValue) {
      requsetToSave.push(pd_textareaValue);
    }

    const pd_kind = "포장";
    const pd_price = totalAmount;
    const pd_quantity = totalProductCount;
    const pd_context = requsetToSave.join("_");
    const pd_adress = " ";
    const response = await fetch("http://localhost:4000/payment_pickup", {
      method: "POST",
      body: JSON.stringify({
        pd_kind,
        pd_quantity,
        pd_price,
        pd_adress,
        pd_context,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.status === 200) {
      setRedirect(true);
    } else {
      alert("실패");
    }
  }

  if (redirect) return <Navigate to={"/user"} />;

  return (
    <>
      <div className="payMain_container font_01">
        <form onSubmit={pickup_pay}>
          <div className="pay_branch_container font_03">
            <p>익산점</p>
          </div>
          <div className="__payMain_container">
            <div className="pay_choice_container">
              <Link to={"/user/payment_delivery"}>
                <button className="__pay_pickup_btn01">
                  배달
                  <p className="pay_tabsubtitle">(예상시간 : 40 ~ 50분)</p>
                </button>
              </Link>
              <button className="__pay_pickup_btn02">
                포장
                <p className="pay_tabsubtitle">(픽업시간 : 10분)</p>
              </button>
            </div>
            {/* 주소 */}
            <div className="pay_adress_container">
              <div className="pay_adress_left">--</div>
              <div className="pay_adress_center">
                <p>익산점 픽업</p>
                <p className="pay_tabsubtitle font_02">
                  전라북도 익산시 익산대로 460
                </p>
              </div>
              <div className="pay_adress_right2">--</div>
            </div>

            {/* 장바구니 */}
            <div className="pay_menu_container">
              <div className="pay_menu_box">
                <MenuCard onProductCountChange={handleProductCountChange} />
              </div>
              <div className="pay_menu_add">
                <Link to={"/user"}>메뉴 추가하기</Link>
              </div>
            </div>

            {/* 요청사항 */}
            <div className="pay_request_container_pick">
              <p className="pay_req_title">요청사항</p>
              <div className="pay_req_default01 font_02">
                <Checkbox
                  border={"gray"}
                  colorScheme="blue"
                  size="lg"
                  spacing="1rem"
                  isChecked={pd_checkboxValue1}
                  onChange={(e) => setpd_CheckboxValue1(e.target.checked)}
                >
                  일회용 수저, 포크가 필요해요.
                </Checkbox>
              </div>
              <div className="pay_req_choice">
                <div className="request_directbox">
                  <p>직접 입력</p>
                  <textarea
                    className="request_directinput"
                    value={pd_textareaValue}
                    onChange={handlePd_textareaValueChange}
                    placeholder="요청사항을 입력해주세요."
                  />
                  <p>
                    {pd_textareaValue.length}/{maxLength}
                  </p>
                </div>
              </div>
            </div>

            {/* 결제 수단 */}
            <div className="pay_paymethod_container">
              <p className="pay_method_title">결제수단</p>
              <div className="pay_methid_radio">
                <RadioGroup onChange={setPaymentValue} value={paymentValue}>
                  <Stack direction="row">
                    <Radio
                      value="1"
                      size={"lg"}
                      m={"auto"}
                      spacing={"3"}
                      border={"1px solid #d8d9da"}
                    >
                      <p className="pay_radio01 font_02">신용 카드</p>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </div>
            </div>

            {/* 금액 */}
            <div className="pay_amount_container">
              <div className="pay_amount_detailbox">
                <p className="pay_detailkind">상품금액</p>
                <p className="pay_detailcash">
                  {totalProductCount === 1 ? Account1 : totalAmount} 원
                </p>
              </div>
              <div className="pay_amount_totalbox">
                <p className="pay_total">총 결제금액</p>
                <p className="pay_totalcash">
                  {totalProductCount === 1 ? Account1 : totalAmount} 원
                </p>
              </div>
            </div>

            {/* 버튼 */}
            <button className="_payment_paybtn" type="submit">
              결제하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
