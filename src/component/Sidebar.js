import { Link } from "react-router-dom";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import MyAvatar from "./MyAvatar";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        variant="outline"
        _hover={{ bg: "#d6e7cb" }}
        icon={<i class="fa-solid fa-bars" id="sideicon" />}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton /> */}
          <div className="sd_myprofile">
            <div className="sd_pf_atr">
              <MyAvatar />
              <Button
                className="sd_pf_mybtn"
                width="100px"
                height="25px"
                bg="teal.400"
                _hover={{ bg: "teal.300" }}
                border="none"
              >
                내 정보
              </Button>
            </div>
            <div className="sd_pf_info">
              <p className="font_01">이름</p>
              <p className="font_01">등급</p>
            </div>
          </div>
          <div className="sd_pf_exinfo">
            <div className="sd_pf_mypoint">
              <p className="exinfo_num font_01">0</p>
              <p className="font_01">포인트</p>
            </div>
            <div className="sd_pf_mycoup">
              <p className="exinfo_num font_01">0</p>
              <p className="font_01">쿠폰</p>
            </div>
          </div>

          <div>주소</div>

          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="red" m={"auto"}>
              logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

// { 버튼 커스텀?
// <Button
//         ref={btnRef}
//         onClick={onOpen}
//         bg="#d6e7cb"
//         _hover={{ bg: "#d6e7cb" }}
//       >
//         <i class="fa-solid fa-bars" id="sideicon"></i>
//       </Button> }
