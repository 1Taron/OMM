import Admin_OrderCard from "../component/Admin_OrderCard";
import "../css/Admin_IndexPage.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/Admin_UserContext";
import { Navigate } from "react-router-dom";
import { MenuContext } from "../contexts/Admin_MenuContext";

export default function Admin_IndexPage() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const { setMenuInfo, menuInfo } = useContext(MenuContext);

  useEffect(() => {
    fetch("http://localhost:4000/admin/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const username = userInfo?.username;

  const [orderlists, setOrderlists] = useState([]);
  useEffect(() => {
    const orderlistData = async () => {
      try {
        const response = await fetch("http://localhost:4000/admin/orderlist", {
          credentials: "include",
        });
        const orderlists = await response.json();
        setOrderlists(orderlists);
      } catch (error) {
        console.error(error);
      }
    };

    orderlistData();
    const intervalId = setInterval(orderlistData, 5000);

    // 컴포넌트가 언마운트되면 setInterval을 해제
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {username ? (
        <main className="main_outlet font_01">
          <div className="index_titlecontainer">TEST</div>
          <div className="index_maincontainer">
            {orderlists.length > 0 &&
              orderlists.map((orderlist) => (
                <Admin_OrderCard {...orderlist} key={orderlist._id} />
              ))}
          </div>
        </main>
      ) : (
        <Navigate to={"/admin/login"} />
      )}
    </>
  );
}
