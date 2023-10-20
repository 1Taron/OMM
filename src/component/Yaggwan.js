import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import "../css/Header.css";
import "../css/yaggwan.css";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  AccordionIcon,
  AccordionPanel,
  transition,
  background,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { useRef, useCallback } from "react";

export default function yaggwan() {
  return (
    <main className="layout_Mw">
      <form className="yaggwan">
        <div className="yaggwan_container">
          <img className="mainImage_2" alt="MainLogo" src="/logo.svg" />

          <Accordion allowToggle>
            <AccordionItem padding="10px">
              <h2>
                <AccordionButton
                  background="gainsboro"
                  _hover={{ backgroundColor: "#7E7E7E" }}
                >
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    fontSize="18px"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    이용약관
                  </Box>
                  <span className="check_info">&#40;필수&#41;</span>
                  <Checkbox size="lg" bg="white"></Checkbox>
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                border="solid black 1px"
                height={170}
                overflow="auto"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem padding="10px">
              <h2>
                <AccordionButton
                  background="gainsboro"
                  _hover={{ backgroundColor: "#7E7E7E" }}
                >
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    fontSize="18px"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    마케팅 수신 동의
                  </Box>
                  <span className="check_info">&#40;선택&#41;</span>
                  <Checkbox size="lg" bg="white"></Checkbox>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} border="solid black 1px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem padding="10px">
              <h2>
                <AccordionButton
                  background="gainsboro"
                  _hover={{ backgroundColor: "#7E7E7E" }}
                >
                  <AccordionIcon />
                  <Box
                    as="span"
                    flex="1"
                    fontSize="18px"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    이메일 수신 동의
                  </Box>
                  <span className="check_info">&#40;선택&#41;</span>
                  <Checkbox size="lg" bg="white"></Checkbox>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} border="solid black 1px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Link to="/user/login">
            <button className="register_done_btn">회원가입 하기</button>
          </Link>
        </div>
      </form>
    </main>
  );
}
