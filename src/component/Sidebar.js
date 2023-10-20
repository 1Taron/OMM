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
import React, { useContext, useEffect, useState } from "react";
import MyAvatar from "./MyAvatar";
import NotifyCard from "./NotifyCard";
import NonAvatar from "./NonAvatar";
import { UserContext } from "../contexts/UserContext";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  const mainadress = userInfo?.mainadress;
  const sideadress = userInfo?.sideadress;

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
            <>{username ? <MyAvatar username={username} /> : <NonAvatar />}</>
          </div>
          <div className="sd_pf_exinfo">
            <div className="sd_pf_mypoint">
              <p className="exinfo_num font_01">{username ? 0 : "-"}</p>
              <Link to={"/user/point"}>
                <p className="font_01">포인트</p>
              </Link>
            </div>
            <div className="sd_pf_mycoup">
              <p className="exinfo_num font_01">{username ? 0 : "-"}</p>
              <Link to={"/user/coupon"}>
                <p className="font_01">쿠폰</p>
              </Link>
            </div>
          </div>

          <div className="sd_adress">
            {username ? (
              <>
                <div className="sd_adr_title font_01">{mainadress}</div>
                <Link to={"/user/adress"} className="sd_adr_content font_01">
                  {sideadress}
                </Link>
              </>
            ) : (
              <>
                <div className="sd_adr_title font_01">주소</div>
                <div className="sd_adr_content font_01">
                  - - - - - - - - - - - - -
                </div>
              </>
            )}
          </div>

          <div className="sd_remain">
            <div className="sd_rem_orderhty">
              <Link to={"/user/orderhistory"} className="font_01">
                <p>주문 내역</p>
              </Link>
            </div>
            <div className="sd_rem_config">
              <Link to={"/user/config"} className="font_01">
                <p>환경 설정</p>
              </Link>
            </div>
          </div>

          <div className="sd_notify">
            <div className="sd_notify_container">
              <p className="font_01">알림</p>
              <div className="sd_notify_contentbox">
                {username ? (
                  <>
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
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <DrawerFooter>
            <Button colorScheme="red" m={"auto"} onClick={logout}>
              logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
