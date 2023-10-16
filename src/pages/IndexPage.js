import "../css/Mainpage.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="main_back">
      <div className="mainp_container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="eventbannerSwiper"
        >
          <SwiperSlide className="eb_swiper_slide">
            <img alt="이벤트배너01" src="img/eventbanner01_950px.png" />
          </SwiperSlide>
          <SwiperSlide className="eb_swiper_slide">
            <img alt="이벤트배너02" src="img/eventbanner02_950px.png" />
          </SwiperSlide>
          <SwiperSlide className="eb_swiper_slide">
            <img alt="이벤트배너03" src="img/eventbanner03_950px.png" />
          </SwiperSlide>
        </Swiper>

        <div className="mainp_iconbox">
          <div className="mainp_deliveryicon">
            <Link to={"/select"}>
              <img alt="배달" src="img/delivery02.png" />
            </Link>
          </div>
          <div className="mainp_pickupicon">
            <Link to={"/select"}>
              <img alt="포장" src="img/pickup02.png" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
