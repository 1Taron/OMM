import { Link } from "react-router-dom";

import {
  Drawer,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import MyAvatar from "./MyAvatar";
import NotifyCard from "./NotifyCard";

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
              <Link to={"/point"}>
                <p className="font_01">포인트</p>
              </Link>
            </div>
            <div className="sd_pf_mycoup">
              <p className="exinfo_num font_01">0</p>
              <Link to={"/coupon"}>
                <p className="font_01">쿠폰</p>
              </Link>
            </div>
          </div>

          <div className="sd_adress">
            <div className="sd_adr_title font_01">주소</div>
            <Link to={"/adress/"} className="sd_adr_content font_01">
              전라북도 익산시 익산대로 460
            </Link>
          </div>

          <div className="sd_remain">
            <div className="sd_rem_orderhty">
              <Link to={"/orderhistory"} className="font_01">
                <p>주문 내역</p>
              </Link>
            </div>
            <div className="sd_rem_config">
              <Link to={"/config"} className="font_01">
                <p>환경 설정</p>
              </Link>
            </div>
          </div>

          <div className="sd_notify">
            <div className="sd_notify_container">
              <p className="font_01">알림</p>
              <div className="sd_notify_contentbox">
                <NotifyCard />
                <NotifyCard />
                <NotifyCard />
                <NotifyCard />
                <NotifyCard />
                <NotifyCard />
                <NotifyCard />
                <NotifyCard />
                <NotifyCard />
                <NotifyCard />
              </div>
            </div>
          </div>

          <DrawerFooter>
            <Button colorScheme="red" m={"auto"}>
              logout
            </Button>
            <Link to={"/login"}>
              <Button colorScheme="blue" m={"auto"}>
                login
              </Button>
            </Link>
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
