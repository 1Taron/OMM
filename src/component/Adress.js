import "../css/Adress.css"
import Header from "./Header"
import "../css/Header.css"
import { Navigate, Outlet } from "react-router-dom"
import DaumPostcode, { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { useContext, useState } from "react";
import { useUser } from "../contexts/RegisterContext";


export default function Adress() {

    const { userData } = useUser();

    const username = userData.username;
    const password = userData.password;
    const name = userData.name;
    const tel = userData.tel;
    const email = userData.email;

    //Daum Adress API
    const [mainadress, fullAddress1] = useState("");
    const [sideadress, setsideadress] = useState("");
    const [redirect, setRedirect] = useState(false);

    const open = useDaumPostcodePopup(postcodeScriptUrl);

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        fullAddress1(fullAddress);
    };
    //button 누를때 daum api 실행
    const handleClick = () => {
        open({ onComplete: handleComplete });
    };


    //db로 put 하기
    async function register1(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({ username, password, name, tel, email, mainadress, sideadress }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.status === 200) {
            setRedirect(true);
        } else {
            alert("초 비 상");
        }
    }
    if (redirect) return <Navigate to={"/yaggwan"} />;

    return (
        <main className="layout_Mw">
            <Header />
            <Outlet />
            <form className="Adress" onSubmit={register1}>
                <div className="adress_container">
                    <div className="adress_container1">
                        <img className="mainImage" alt="MainLogo" src="img/logo.svg" />
                        <div className="space_12345622255"></div>
                        <input
                            className="adress_input"
                            value={mainadress}
                            type={"text"}
                            placeholder="메인주소"
                        ></input>
                        <button type="button" onClick={handleClick} >주소 찾기</button>
                        <input
                            className="adress_input"
                            value={sideadress}
                            type={"text"}
                            placeholder="상세주소"
                            onChange={(e) => setsideadress(e.target.value)}
                        ></input>
                    </div>
                    <div className="submit_container">
                        <button type="submit" className="submit">다음</button>
                    </div>
                </div>
            </form>
        </main>
    )

}
