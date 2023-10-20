import "../css/Admin_Sidebar.css";
import logo from "../ommlogo.svg";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/Admin_UserContext";

export default function Admin_Sidebar() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/admin/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/admin/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <>
      <div className="sidebar_container font_01">
        <div className="sidebar_logocontainer">
          <img src={logo} alt="로고" className="ommlogo" />
        </div>
        <div className="sidebar_dashboardcontainer maincontainer">
          <p>
            <i class="fa-solid fa-table-columns"></i>
          </p>
          <p>대시보드</p>
        </div>
        <div className="sidebar_ordercontainer maincontainer">
          <p>
            <i class="fa-solid fa-cart-shopping"></i>
          </p>
          <p>주문</p>
        </div>
        <div className="sidebar_productcontainer maincontainer">
          <p>
            <i class="fa-solid fa-boxes-stacked"></i>
          </p>
          <p>상품</p>
        </div>
        <div className="sidebar_usercontainer maincontainer">
          <p>
            <i class="fa-solid fa-user"></i>
          </p>
          <p>회원</p>
        </div>
        <div className="sidebar_noticecontainer maincontainer">
          <p>
            <i class="fa-solid fa-clipboard-list"></i>
          </p>
          <p>게시글</p>
        </div>
        <div className="sidebar_remaincontainer">
          <div>
            <p>{username}</p>
            <button className="font_01" onClick={logout}>
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
