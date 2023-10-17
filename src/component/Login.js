import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import "../css/Header.css";
import "../css/login.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUserInfo } = useContext(UserContext);

  async function login(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("로그인 실패");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className="layout_Mw">
      <Header />
      <Outlet />
      <form className="login" onSubmit={login}>
        <div className="login_container">
          <img className="mainImage_1" alt="MainLogo" src="img/logo.svg" />
          <div className="login_box">
            <div className="login_idInput">
              <i class="fa-solid fa-user"></i>
              <input
                type={"text"}
                placeholder="아이디"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div>
            <div className="login_pwInput">
              <i class="fa-solid fa-lock"></i>
              <input
                type={"password"}
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <button className="login_btn">로그인</button>
          <Link to="/register">
            <button className="register_btn">회원가입</button>
          </Link>
        </div>
      </form>
    </main>
  );
}
