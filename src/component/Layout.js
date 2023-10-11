import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import "../css/Header.css";

export default function Layout() {
  return (
    <main className="layout_Mw">
      <Header />
      <Outlet />
      <div className="mw_ex">
        <div className="font_01">
          <Link to={"/payment"}>결제 페이지</Link>
        </div>
      </div>
    </main>
  );
}
