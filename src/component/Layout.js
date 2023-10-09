import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <main className="layout_Mw">
      <Header />
      <Outlet />
      <h1>기본</h1>
      <h1 className="font_01">주아체</h1>
      <h1 className="font_02">한나체</h1>
      <h1 className="font_03">어그로체</h1>
    </main>
  );
}
