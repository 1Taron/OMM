import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../css/Header.css";

export default function Layout() {
  return (
    <main className="layout_Mw">
      <Header />
      <Outlet />
      <div className="mw_ex">main</div>
    </main>
  );
}
