import Header from "../component/Header";
import "../css/SelectShop.css";
import { Outlet } from "react-router-dom";
import { Map } from 'react-kakao-maps-sdk';

export default function SelectShopPage() {



    return (
        <>
            <Header />
            <Outlet />
            <main className="SelectShop">
                <div className="space"></div>
                <Map
                    center={{ lat: 35.968, lng: 126.96 }}
                    style={{ width: '940px', height: '480px', margin: 'auto' }}
                    level={4}>
                </Map>
                <div className="locate_container">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </main>

        </>
    );
}