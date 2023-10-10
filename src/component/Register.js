import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../css/Header.css";
import "../css/Register.css"

export default function Register() {

    return (
        <main className="layout_Mw">
            <Header />
            <Outlet />
            <form className="register">
                <div className="register_container">
                    <img className="mainImage" alt="MainLogo" src="img/logo.svg" />
                    <input
                        type={"text"}
                        placeholder="아이디"
                        value=""
                    ></input>
                    <input
                        type={"text"}
                        placeholder="비밀번호"
                        value=""
                    ></input>
                    <input
                        type={"text"}
                        placeholder="이름"
                        value=""
                    ></input>
                    <input
                        type={"text"}
                        placeholder="전화번호"
                        value=""
                    ></input>
                    <input
                        type={"text"}
                        placeholder="이메일(필수 X)"
                        value=""
                    ></input>
                    <button className="next_btn">다음</button>
                </div>
            </form>
        </main >
    );
}