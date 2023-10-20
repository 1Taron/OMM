import { Link, Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import "../css/Header.css";
import "../css/Register.css";
import { useContext, useState } from "react";
import { useUser } from "../contexts/RegisterContext";

export default function Register() {
  const { userData, setUserData } = useUser();

  const setUserName = (e) => {
    setUserData({ ...userData, username: e.target.value });
  }

  const setpassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  }

  const setname = (e) => {
    setUserData({ ...userData, name: e.target.value });
  }

  const settel = (e) => {
    setUserData({ ...userData, tel: e.target.value });
  }

  const setemail = (e) => {
    setUserData({ ...userData, email: e.target.value });
  }

  return (
    <main className="layout_Mw">
      <Header />
      <Outlet />
      <form className="register">
        <div className="register_container">
          <img className="mainImage" alt="MainLogo" src="img/logo.svg" />
          <div className="regi_inputcontainer">
            <div className="regi_idbox">
              <i class="fa-solid fa-user"></i>
              <input
                type={"text"}
                placeholder="아이디"
                value={userData.username}
                onChange={setUserName}
              ></input>
            </div>
            <div className="regi_pwbox">
              <i class="fa-solid fa-lock"></i>
              <input
                type={"password"}
                placeholder="비밀번호"
                value={userData.password}
                onChange={setpassword}
              ></input>
            </div>
            <div className="regi_namebox">
              <i class="fa-solid fa-user"></i>
              <input
                type={"text"}
                placeholder="이름"
                value={userData.name}
                onChange={setname}
              ></input>
            </div>
            <div className="regi_telbox">
              <i class="fa-solid fa-mobile"></i>
              <input
                type={"text"}
                placeholder="전화번호"
                value={userData.tel}
                onChange={settel}
              ></input>
            </div>
            <div className="regi_emailbox">
              <i class="fa-solid fa-envelope"></i>
              <input
                type={"text"}
                placeholder="이메일(필수 X)"
                value={userData.email}
                onChange={setemail}
              ></input>
            </div>
          </div>
          <Link to="/adress">
            <button className="next_btn">다음</button>
          </Link>
        </div>
      </form>
    </main>
  );
}
