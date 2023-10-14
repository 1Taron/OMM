import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../css/NotifyCard.css";

export default function Header() {
  return (
    <header className="hd">
      {/* 사이드바 더보기 아이콘 */}
      <Sidebar />

      {/* 인덱스페이지로 이동 로고? */}
      <Link to={"/"} className="hd_title font_03">
        OMM
      </Link>

      {/* 장바구니 아이콘 */}
      <Link to={"/payment"}>
        <i class="fa-solid fa-cart-shopping" id="shopcart"></i>
      </Link>
    </header>
  );
}
