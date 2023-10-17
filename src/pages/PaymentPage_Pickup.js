import React, { useState } from "react";
import Header from "../component/Header";
import MenuCard from "../component/MenuCard";
import "../css/Payment.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
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

import { Search2Icon } from "@chakra-ui/icons";

export default function PaymentPage_Pickup() {
  const [paymentValue, setPaymentValue] = React.useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [goodPrice] = React.useState(10000);
  const [extraPrice] = React.useState(1000);
  const [deliveryPrice] = React.useState(3000);

  const [customInput, setCustomInput] = useState("");
  const maxLength = 50;

  const handleCustomInputChange = (e) => {
    const inputText = e.target.value;

    // 글자 수가 최대 길이를 초과하지 않도록 제한
    if (inputText.length <= maxLength) {
      setCustomInput(inputText);
    }
  };

  return (
    <>
      <Header />

      <div className="payMain_container font_01">
        <div className="pay_branch_container font_03">
          <p>익산점</p>
        </div>
        <div className="__payMain_container">
          <div className="pay_choice_container">
            <Link to={"/payment_delivery"}>
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
              <MenuCard />
              <MenuCard />
              <MenuCard />
            </div>
            <div className="pay_menu_add">
              <Link to={"/"}>메뉴 추가하기</Link>
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
              >
                일회용 수저, 포크가 필요해요.
              </Checkbox>
            </div>
            <div className="pay_req_choice">
              <div className="request_directbox">
                <p>직접 입력</p>
                <textarea
                  className="request_directinput"
                  value={customInput}
                  onChange={handleCustomInputChange}
                  placeholder="요청사항을 입력해주세요."
                />
                <p>
                  {customInput.length}/{maxLength}
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
              <p className="pay_detailcash">{goodPrice} 원</p>
            </div>
            <div className="pay_amount_totalbox">
              <p className="pay_total">총 결제금액</p>
              <p className="pay_totalcash">{goodPrice} 원</p>
            </div>
          </div>

          {/* 버튼 */}
          <button className="_payment_paybtn">결제하기</button>
        </div>
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
