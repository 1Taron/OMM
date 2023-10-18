import Header from "../component/Header";
import "../css/FoodSelect.css";
import { Link, Outlet } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { Navigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";



export default function FoodSelect() {
    const [redirect, setRedirect] = useState(false);
    const colors = useColorModeValue(
        ["#ffEFC8", "teal.50", "blue.50"],
        ["red.900", "teal.900", "blue.900"]
    );

    const [images, setImages] = useState([]);

    //상추의 갯수
    const [Sangchu_index, setSangchu_index] = useState(0);
    //전체 가격

    const Account = Sangchu_index * 1000;


    const handleButtonClick = (event) => {
        // 클릭된 위치 (마우스 이벤트의 clientX 및 clientY 속성 사용)
        const { clientX, clientY } = event;

        // 이미지 배열에 새 이미지를 추가
        setImages([...images, { x: clientX, y: clientY }]);
        //버튼 클릭시 상추 +1
        setSangchu_index(Sangchu_index + 1);
    };

    const [tabIndex, setTabIndex] = useState(0);
    const bg = colors[tabIndex];

    //mongodb에 정보 저장
    const SaveInfo = async () => {
        const response = await fetch("http://localhost:4000/food", {
            method: "POST",
            body: JSON.stringify({ Account, Sangchu_index }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.status === 200) {
            setRedirect(true);
        } else {
            alert("초 비 상");
        }
    }
    if (redirect) return <Navigate to={"/payment_delivery"} />;

    return (
        <>
            <Header />
            <Outlet />

            {images.map((image, index) => (
                <img
                    id="SpawnImg"
                    key={index}
                    src="img/상추2.svg"
                    alt="스폰된 이미지"
                    style={{
                        zIndex: '1',
                        position: 'absolute',
                        top: image.y + 'px',
                        left: image.x + 'px',
                        animation: 'moving_animation 1s ease-in-out forwards'
                    }}
                />
            ))}
            <main className="SelectFood">
                <div className="margin_div"></div>
                <img className="dish_img" alt="dish" src="img/dish 1.svg" />
                <Tabs
                    className="Tabs"
                    onChange={(index) => setTabIndex(index)}
                    bg={bg}
                    size="lg"
                >
                    <TabList margin={"0px 60px 0px 60px"}>
                        <Tab>채소</Tab>
                        <Tab>고기</Tab>
                        <Tab>아무개</Tab>
                    </TabList>
                    <TabPanels p="2rem" height={"370px"} padding={"10px 30px 10px 30px"}>
                        <TabPanel>
                            <Swiper
                                slidesPerView={4}
                                grid={{
                                    rows: 2,
                                    fill: "row",
                                }}
                                spaceBetween={30}
                                modules={[Grid]}
                                className="fs_mySwiper"
                            >
                                <SwiperSlide className="fs_swiper_slide">
                                    <button onClick={handleButtonClick}>
                                        <img className="ingrediant_img" src="img/sangchu.png" alt="sangchu"></img>
                                        <div className="ingrediant_name">상추 1000원</div>
                                    </button>
                                </SwiperSlide>

                            </Swiper>
                        </TabPanel>
                        <TabPanel>Are 1, 2, 3</TabPanel>
                        <TabPanel>Red, yellow and blue.</TabPanel>
                    </TabPanels>
                </Tabs>
                <div className="btn_container">
                    <button className="Select_btn" onClick={SaveInfo}>선택 완료</button>
                </div>
            </main>


        </>
    );
}
