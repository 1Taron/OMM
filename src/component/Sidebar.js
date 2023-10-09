import { Link } from "react-router-dom";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  IconButton,
} from "@chakra-ui/react";
import React from "react";

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
          <DrawerHeader bg="#d8d9da">
            <div className="sd_myprofile">내 정보</div>
          </DrawerHeader>
          <div className="test01">test</div>

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
