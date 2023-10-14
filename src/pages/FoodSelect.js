import Header from "../component/Header";
import "../css/FoodSelect.css";
import { Outlet } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import { useColorModeValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

export default function FoodSelect() {
    const colors = useColorModeValue(
        ['red.50', 'teal.50', 'blue.50'],
        ['red.900', 'teal.900', 'blue.900'],
    )

    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]
    return (
        <>
            <Header />
            <Outlet />
            <main className="SelectFood">
                <div className="margin_div"></div>
                <img className="dish_img" alt="dish" src="img/dish 1.svg" />

                <Tabs className="Tabs" onChange={(index) => setTabIndex(index)} bg={bg} size='lg'>
                    <TabList margin={"0px 60px 0px 60px"}>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </TabList>
                    <TabPanels p='2rem' height={"370px"} padding={"10px 30px 10px 30px"}>
                        <TabPanel>
                            <Swiper
                                slidesPerView={4}
                                grid={{
                                    rows: 2,
                                }}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Grid, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>Slide 1</SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                                <SwiperSlide>Slide 6</SwiperSlide>
                                <SwiperSlide>Slide 7</SwiperSlide>
                                <SwiperSlide>Slide 8</SwiperSlide>
                                <SwiperSlide>Slide 9</SwiperSlide>
                            </Swiper>
                        </TabPanel>
                        <TabPanel>Are 1, 2, 3</TabPanel>
                        <TabPanel>Red, yellow and blue.</TabPanel>
                    </TabPanels>
                </Tabs>

            </main>
        </>
    );
}
