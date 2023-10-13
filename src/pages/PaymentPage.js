import React from "react";
import Header from "../component/Header";
import "../css/Payment.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Radio, RadioGroup } from "@chakra-ui/react";

export default function PaymentPage() {
  const [paymentValue, setPaymentValue] = React.useState("1");
  return (
    <>
      <Header />

      <div className="payMain_container font_01">
        <div className="pay_branch_container font_03">
          <p>익산점</p>
        </div>

        <div className="pay_choice_container">
          <Tabs isFitted variant="enclosed" bg={"white"}>
            <TabList mb="1em">
              <Tab fontSize={"1.4rem"}>
                배달 <p className="pay_tabsubtitle">(예상시간 : 40 ~ 50분)</p>
              </Tab>
              <Tab fontSize={"1.4rem"}>
                포장 <p className="pay_tabsubtitle"> (픽업시간 : 10분)</p>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="pay_adress_container">
                  <div className="pay_adress_left">--</div>
                  <div className="pay_adress_center">
                    <p>전라북도 익산시 익산대로 460(으)로 배달</p>
                    <p className="pay_tabsubtitle font_02">
                      ------ 자세한 주소 ------
                    </p>
                  </div>
                  <div className="pay_adress_right">
                    <Button
                      colorScheme="black"
                      variant="outline"
                      fontSize={"1rem"}
                      color={"gray"}
                      height={"auto"}
                      width={"50px"}
                    >
                      <p className="font_02">변경</p>
                    </Button>
                  </div>
                </div>
                <div className="pay_menu_container">
                  <div className="pay_menu_box">메뉴</div>
                  <div className="pay_menu_add">
                    <Link to={"/"}>메뉴 추가하기</Link>
                  </div>
                </div>

                <div className="pay_request_container">
                  <p className="pay_req_title">요청사항</p>
                  <div className="pay_req_default01 font_02">
                    <Checkbox
                      border={"gray"}
                      colorScheme="teal"
                      size="lg"
                      spacing="1rem"
                    >
                      문 앞에 놓고, 문자주세요.
                    </Checkbox>
                  </div>
                  <div className="pay_req_default02 font_02">
                    <Checkbox
                      border={"gray"}
                      colorScheme="teal"
                      size="lg"
                      spacing="1rem"
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
                    >
                      <option value="option1">
                        서두르지 않고 안전하게 와주세요.
                      </option>
                      <option value="option2">그냥 문 앞에 놓아 주세요.</option>
                      <option value="option3">
                        벨 누르기 전에 전화 주세요.
                      </option>
                      <option value="option4">
                        도착 후 전화주시면 직접 받으러 갈게요.
                      </option>
                      <option value="option5">직접 입력</option>
                    </Select>
                  </div>
                </div>
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
                <div className="pay_amount_container">
                  <div className="pay_amount_detailbox">
                    <p className="pay_detailkind">상품금액</p>
                    <p className="pay_detailcash">10,000 원</p>
                    <p className="pay_detailkind">추가금액</p>
                    <p className="pay_detailcash">1,000 원</p>
                    <p className="pay_detailkind">배달요금</p>
                    <p className="pay_detailcash">3,000 원</p>
                  </div>
                  <div className="pay_amount_totalbox">
                    <p className="pay_total">총 결제금액</p>
                    <p className="pay_totalcash">14,000 원</p>
                  </div>
                </div>

                {/* 버튼 */}
                <Box
                  as="button"
                  width={"300px"}
                  fontSize={"1.2rem"}
                  p={3}
                  color="white"
                  fontWeight="reguiar"
                  borderRadius="lg"
                  bgGradient="linear(to-t, blue.500, blue.400, blue.500)"
                  _hover={{
                    bgGradient: "linear(to-t,  blue.400, blue.300, blue.400)",
                  }}
                >
                  결제하기
                </Box>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
}
