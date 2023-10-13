import Header from "../component/Header";
import "../css/SelectShop.css";
import { Link, Outlet } from "react-router-dom";
import { Map } from "react-kakao-maps-sdk";

export default function SelectShopPage() {
  return (
    <>
      <Header />
      <Outlet />
      <main className="SelectShop">
        <div className="space"></div>
        <Map
          center={{ lat: 35.968, lng: 126.96 }}
          style={{ width: "940px", height: "480px", margin: "auto" }}
          level={4}
        ></Map>
        <div className="locate_container">
          <div className="locate_shop_container">
            <ul>
              <li className="locate_url">OO님이 자주가는 매장</li>
              <Link to="/">
                <li className="shop_locate">
                  원대점
                  <span className="shop_distence">0.8km</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="locate_shop_container2">
            <ul>
              <li className="locate_url">OO님의 근처에 있는 매장</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
