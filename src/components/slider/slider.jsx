import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import './slider.css'

//Importing all Home slider images
import hs1 from '/Users/dharshan/Documents/dharsh/web-stack/itsShowTime/src/assets/hs1.jpg';
import hs2 from '/Users/dharshan/Documents/dharsh/web-stack/itsShowTime/src/assets/hs2.jpg';
import hs3 from '/Users/dharshan/Documents/dharsh/web-stack/itsShowTime/src/assets/hs3.jpg';
import hs4 from '/Users/dharshan/Documents/dharsh/web-stack/itsShowTime/src/assets/hs4.jpg';




import {Navigation , Pagination ,Mousewheel ,Keyboard,Autoplay} from 'swiper/modules'


const width=window.innerWidth;
const height=window.innerHeight;


function Slider(){
  SwiperCore.use([Autoplay])
  const [banners,setBanners]=useState([
    hs1, hs2, hs3, hs4
  ]);

  return (
    <>
      <div className="slider">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          autoplay={{ delay: 3000 }}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img src={banner} alt={`Banner ${index}`}  height={height / 2.5}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Slider
