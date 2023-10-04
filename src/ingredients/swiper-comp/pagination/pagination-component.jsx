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
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
            el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=".sliderFeaturedPosts"
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
