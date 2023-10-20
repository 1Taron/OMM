import { useContext, useState } from "react";
import "../css/Admin_LoginPage.css";
import { Navigate } from "react-router-dom";
import logo from "../ommlogo.svg";
import { UserContext } from "../contexts/Admin_UserContext";

export default function Admin_LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUserInfo, userInfo } = useContext(UserContext);

  // useEffect(() => {
  //   fetch("http://localhost:4000/profile", {
  //     credentials: "include",
  //   }).then((res) => {
  //     res.json().then((userInfo) => {
  //       setUserInfo(userInfo);
  //     });
  //   });
  // }, []);

  const adminname = userInfo?.username;

  async function login(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/admin/login", {
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
    return <Navigate to={"/admin/"} />;
  }

  return (
    <>
      {adminname ? (
        <Navigate to={"/admin/"} />
      ) : (
        <main className="main_outlet font_01 loginmain">
          <form className="login" onSubmit={login}>
            <div className="login_imgcontainer">
              <img src={logo} alt="로고" className="ommlogo" />
            </div>
            <div className="login_inputcontainer">
              <div className="__idInputbox">
                <i class="fa-solid fa-user"></i>
                <input
                  type={"text"}
                  placeholder="아이디"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
              </div>
              <div className="__passInputbox">
                <i class="fa-solid fa-lock"></i>
                <input
                  type={"password"}
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="login_btncontainer">
              <button>로그인</button>
            </div>
          </form>
        </main>
      )}
    </>
  );
}
