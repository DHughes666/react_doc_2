import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import './swiper-styles.css';


SwiperCore.use([EffectCoverflow, Pagination]);

const Sweep = () => {
    return (
        <div>
            <Swiper 
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifiers: 1,
                    slideShadows: false,
                }}
                pagination={true}
                className="mySwiper"
            />

            <SwiperSlide>
                <img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://swiperjs.com/demos/images/nature-3.jpg' alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://swiperjs.com/demos/images/nature-4.jpg' alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://swiperjs.com/demos/images/nature-5.jpg' alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://swiperjs.com/demos/images/nature-6.jpg' alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://swiperjs.com/demos/images/nature-7.jpg' alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://swiperjs.com/demos/images/nature-8.jpg' alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://swiperjs.com/demos/images/nature-9.jpg' alt='' />
            </SwiperSlide>
        </div>
    )
}

export default Sweep;