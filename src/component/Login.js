import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../css/Header.css";
import "../css/login.css"
import { useState } from "react";

export default function Login() {
    const { username, setUserName } = useState("");
    const { password, setpassword } = useState("");

    return (
        <main className="layout_Mw">
            <Header />
            <Outlet />
            <form className="login">
                <div className="login_container">
                    <img className="mainImage" alt="MainLogo" src="img/logo.svg" />
                    <input
                        type={"text"}
                        placeholder="아이디"
                        value={username}
                    ></input>
                    <input
                        type={"text"}
                        placeholder="비밀번호"
                        value={password}
                    ></input>
                    <button className="login_btn">로그인</button>
                    <button className="register_btn">회원가입</button>
                </div>
            </form>
        </main>
    );
}
