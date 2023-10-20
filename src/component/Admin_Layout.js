import { Outlet } from "react-router-dom";
import Admin_Sidebar from "./Admin_Sidebar";
import "../css/Admin_Layout.css";

export default function Admin_Layout() {
  return (
    <main className="main_layout">
      <Admin_Sidebar />
      <Outlet />
    </main>
  );
}
