import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Grid, Pagination, Navigation, Autoplay } from "swiper";


const Products = ({inW, inH}) => {
  return (

    <Swiper
        slidesPerView={inW < 600 ? 1 : inW < 970 ? 2 : 4}
        grid={{
          rows: 1,
        }}
        spaceBetween={10}
        pagination={{clickable: inW < 970 ? true : false,}}
        loop={inW < 970 ? true : false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,            
        }}
        navigation={inW < 970 ? true : false}
        modules={[Grid, Pagination, Navigation, Autoplay]}
        
      >
        
        <SwiperSlide><div className="product-card one">
            
            
          </div>
          <h3>Exchange Dollar</h3>
          </SwiperSlide>
        <SwiperSlide><div className="product-card two">
            
           
          </div>
          <h3>Transfers</h3>
          </SwiperSlide>
        <SwiperSlide><div className="product-card three">
        
          </div>
          <h3>Crypto</h3>
          </SwiperSlide>
        <SwiperSlide><div className="product-card four">
            
          </div>
          <h3>Letter of Credit</h3>
          </SwiperSlide>
        
        
      </Swiper>    
    
  )
}

export default Products