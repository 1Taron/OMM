import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import "../css/Header.css";
import "../css/Register.css";
import { useState } from "react";

export default function Register() {

  const { resusername, ressetUserName } = useState("");
  const { respassword, ressetpassword } = useState("");
  const { name, setname } = useState("");
  const { tel, settel } = useState("");
  const { email, setemail } = useState("");


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
                value={resusername}>
              </input>
            </div>
            <div className="regi_pwbox">
              <i class="fa-solid fa-lock"></i>
              <input
                type={"text"}
                placeholder="비밀번호"
                value={respassword}>
              </input>
            </div>
            <div className="regi_namebox">
              <i class="fa-solid fa-user"></i>
              <input
                type={"text"}
                placeholder="이름"
                value={name}>
              </input>
            </div>
            <div className="regi_telbox">
              <i class="fa-solid fa-mobile"></i>
              <input
                type={"text"}
                placeholder="전화번호"
                value={tel}>
              </input>
            </div>
            <div className="regi_emailbox">
              <i class="fa-solid fa-envelope"></i>
              <input
                type={"text"}
                placeholder="이메일(필수 X)"
                value={email}
              ></input>
            </div>
          </div>
          <Link to="/yaggwan">
            <button className="next_btn">다음</button>
          </Link>
        </div>
      </form>
    </main>
  );
}
