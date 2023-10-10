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
              <button className="sd_pf_mybtn">내 정보</button>
            </div>
            <div className="sd_pf_info">
              <p>이름</p>
              <p>등급</p>
            </div>
            {/* <div className="sd_pf_exinfo">
              <div className="sd_pf_mygift">
                <p>포인트</p>
                <p>쿠폰</p>
              </div>
            </div> */}
          </div>

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
