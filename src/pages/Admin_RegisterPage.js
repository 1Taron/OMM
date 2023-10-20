// import { Navigate } from "react-router-dom";
// import "../css/RegisterPage.css";
// import { useState } from "react";
// export default function RegisterPage() {
//   const [username, setUserName] = useState("");
//   const [password, setpassword] = useState("");
//   const [redirect, setRedirect] = useState(false);

//   async function register(e) {
//     e.preventDefault();

//     const response = await fetch("http://localhost:4000/register", {
//       method: "POST",
//       body: JSON.stringify({ username, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.status === 200) {
//       setRedirect(true);
//     } else {
//       alert("이미 존재하는 아이디입니다.");
//     }
//   }
//   if (redirect) return <Navigate to={"/"} />;
//   return (
//     <main className="main_outlet font_01">
//       <form className="register" onSubmit={register}>
//         <div className="register_container">
//           <img className="mainImage" alt="MainLogo" src="img/logo.svg" />
//           <div className="regi_inputcontainer">
//             <div className="regi_idbox">
//               <i class="fa-solid fa-user"></i>
//               <input
//                 type={"text"}
//                 placeholder="아이디"
//                 value={username}
//                 onChange={(e) => setUserName(e.target.value)}
//               ></input>
//             </div>
//             <div className="regi_pwbox">
//               <i class="fa-solid fa-lock"></i>
//               <input
//                 type={"password"}
//                 placeholder="비밀번호"
//                 value={password}
//                 onChange={(e) => setpassword(e.target.value)}
//               ></input>
//             </div>
//           </div>
//           <button className="next_btn">다음</button>
//         </div>
//       </form>
//     </main>
//   );
// }
