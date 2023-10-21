import React, { useState, useContext, useEffect } from "react";
import Header from "../component/Header";
import MenuCard from "../component/MenuCard";
import "../css/Payment.css";
import {
  useDisclosure,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Checkbox,
  Select,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

import { Search2Icon } from "@chakra-ui/icons";

export default function PaymentPage() {
  const { userInfo } = useContext(UserContext);
  const mainadress = userInfo?.mainadress;
  const sideadress = userInfo?.sideadress;
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
  const food_id = FoodData._id;
  const S_index = FoodData.Sangchu_index;
  console.log("_id=======>>>>" + FoodData._id);

  const Sangchu = "상추 x" + S_index;
  const [paymentValue, setPaymentValue] = React.useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [extraPrice] = React.useState(1000);
  const [deliveryPrice] = React.useState(3000);

  const maxLength = 50;

  const handlePd_textareaValueChange = (e) => {
    const inputText = e.target.value;

    // 글자 수가 최대 길이를 초과하지 않도록 제한
    if (inputText.length <= maxLength) {
      setpd_TextareaValue(inputText);
    }
  };

  const [pd_checkboxValue1, setpd_CheckboxValue1] = useState(false);
  const [pd_checkboxValue2, setpd_CheckboxValue2] = useState(false);
  const [pd_selectedValue, setpd_SelectedValue] = useState("");
  const [pd_textareaValue, setpd_TextareaValue] = useState("");

  const [redirect, setRedirect] = useState(false);

  const [totalProductCount, setTotalProductCount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleProductCountChange = (productCount, Account1) => {
    setTotalProductCount(productCount);
    setTotalAmount(productCount * Account1);
  };

  async function delivery_pay(e) {
    e.preventDefault();

    //adress push
    const adressToSave = [];
    adressToSave.push(mainadress);
    adressToSave.push(sideadress);
    //requset push
    const requsetToSave = [];

    if (pd_checkboxValue1) {
      requsetToSave.push("문 앞에 놓고, 문자주세요.");
    }
    if (pd_checkboxValue2) {
      requsetToSave.push("일회용 수저, 포크가 필요해요.");
    }
    if (pd_selectedValue) {
      requsetToSave.push(pd_selectedValue);
    }
    if (pd_textareaValue) {
      requsetToSave.push(pd_textareaValue);
    }

    const pd_kind = "배달";
    const pd_price = totalAmount + extraPrice + deliveryPrice;
    const pd_quantity = totalProductCount;
    const pd_context = requsetToSave.join("_");
    const pd_adress = adressToSave.join("_");
    const pd_ingredient = Sangchu;
    const response = await fetch("http://localhost:4000/payment_delivery", {
      method: "POST",
      body: JSON.stringify({
        pd_kind,
        pd_quantity,
        pd_price,
        pd_adress,
        pd_context,
        pd_ingredient,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.status === 200) {
      // alert("이메일 주소에 @를 입력해주세요");
      DeleteFoodDoc(e);
      // setRedirect(true);
    } else {
      alert("실패");
    }
  }
  const [deletedDocf, setDeletedDocf] = useState(null);
  async function DeleteFoodDoc(e) {
    e.preventDefault();

    try {
      console.log("_id12123123 ====>" + food_id);
      const response = await fetch("http://localhost:4000/deletefoodDoc", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          documentId: food_id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setDeletedDocf(data);
        setRedirect(true);
      } else {
        console.log("_id ====>" + food_id);
        console.error("문서 삭제 실패:", response.statusText);
      }
    } catch (error) {
      console.log("_id ====>" + food_id);
      console.error("문서 삭제 오류:", error);
    }
  }
  if (redirect) return <Navigate to={"/user"} />;
  return (
    <>
      <div className="payMain_container font_01">
        <form onSubmit={delivery_pay}>
          <div className="pay_branch_container font_03">
            <p>익산점</p>
          </div>

          <div className="__payMain_container">
            <div className="pay_choice_container">
              <button className="__pay_delivery_btn01">
                배달
                <p className="pay_tabsubtitle">(예상시간 : 40 ~ 50분)</p>
              </button>
              <Link to={"/user/payment_pickup"}>
                <button className="__pay_delivery_btn02">
                  포장
                  <p className="pay_tabsubtitle">(픽업시간 : 10분)</p>
                </button>
              </Link>
            </div>
            {/* 주소 */}
            <div className="pay_adress_container">
              <div className="pay_adress_left">--</div>
              <div className="pay_adress_center">
                <p>{mainadress}(으)로 배달</p>
                <p className="pay_tabsubtitle font_02">{sideadress}</p>
              </div>
              <div className="pay_adress_right">
                <Button
                  onClick={onOpen}
                  colorScheme="black"
                  variant="outline"
                  fontSize={"1rem"}
                  color={"gray"}
                  height={"25px"}
                  width={"70px"}
                >
                  <p className="font_02">변경</p>
                </Button>
              </div>
            </div>

            {/* 장바구니 */}
            <div className="pay_menu_container">
              <div className="pay_menu_box">
                {/* <MenuCard pd_quantity={pd_quantity} /> */}
                <MenuCard onProductCountChange={handleProductCountChange} />
              </div>
              <div className="pay_menu_add">
                <Link to={"/user/"}>메뉴 추가하기</Link>
              </div>
            </div>

            {/* 요청사항 */}
            <div className="pay_request_container">
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
                  문 앞에 놓고, 문자주세요.
                </Checkbox>
              </div>
              <div className="pay_req_default02 font_02">
                <Checkbox
                  border={"gray"}
                  colorScheme="blue"
                  size="lg"
                  spacing="1rem"
                  isChecked={pd_checkboxValue2}
                  onChange={(e) => setpd_CheckboxValue2(e.target.checked)}
                >
                  일회용 수저, 포크가 필요해요.
                </Checkbox>
              </div>
              <div className="pay_req_choice">
                <Select
                  placeholder="요청사항을 선택해주세요."
                  bg={"initial"}
                  fontSize={"1.2rem"}
                  color={"gray"}
                  size={"lg"}
                  mt={"15px"}
                  border={"none"}
                  value={pd_selectedValue}
                  onChange={(e) => setpd_SelectedValue(e.target.value)}
                >
                  <option value="서두르지 않고 안전하게 와주세요.">
                    서두르지 않고 안전하게 와주세요.
                  </option>
                  <option value="그냥 문 앞에 놓아 주세요.">
                    그냥 문 앞에 놓아 주세요.
                  </option>
                  <option value="벨 누르기 전에 전화 주세요.">
                    벨 누르기 전에 전화 주세요.
                  </option>
                  <option value="도착 후 전화주시면 직접 받으러 갈게요.">
                    도착 후 전화주시면 직접 받으러 갈게요.
                  </option>
                </Select>
              </div>
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

            {/* 결제 수단 */}
            <div className="pay_paymethod_container">
              <p className="pay_method_title">결제수단</p>
              <div className="pay_methid_radio">
                <RadioGroup onChange={setPaymentValue} value={paymentValue}>
                  <Stack direction="row">
                    <Radio
                      value="1"
                      size={"lg"}
                      mr={"12rem"}
                      spacing={"3"}
                      border={"1px solid #d8d9da"}
                    >
                      <p className="pay_radio01 font_02">신용 카드</p>
                    </Radio>
                    <Radio
                      value="2"
                      size="lg"
                      spacing={"3"}
                      border={"1px solid #d8d9da"}
                    >
                      <p className="pay_radio01 font_02">현장 결재</p>
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
                <p className="pay_detailkind">추가금액</p>
                <p className="pay_detailcash">{extraPrice} 원</p>
                <p className="pay_detailkind">배달요금</p>
                <p className="pay_detailcash">{deliveryPrice} 원</p>
              </div>
              <div className="pay_amount_totalbox">
                <p className="pay_total">총 결제금액</p>
                <p className="pay_totalcash">
                  {totalProductCount === 1
                    ? Account1 + extraPrice + deliveryPrice
                    : totalAmount + extraPrice + deliveryPrice}{" "}
                  원
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

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <p className="pay_modal_title font_01">주소 변경</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="도로명 또는 지명으로 검색"
                _placeholder={{ opacity: 1, color: "gray.500" }}
                variant="filled"
              />
            </InputGroup>
            <div className="blankSpace"></div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
