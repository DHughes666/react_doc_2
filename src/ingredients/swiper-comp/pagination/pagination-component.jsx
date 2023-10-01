import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './pagination-styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img 
                src='assets/images/1.jpg' alt='hi'
            />
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src='assets/images/2.jpg' alt='hi'
            />
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src='assets/images/3.jpg' alt='hi'
            />
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src='assets/images/1.jpg' alt='hi'
            />
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src='assets/images/2.jpg' alt='hi'
            />
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src='assets/images/3.jpg' alt='hi'
            />
        </SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
