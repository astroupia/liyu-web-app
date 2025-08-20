"use client";

import Hero1 from "@/public/assets/images/h1.png";
import Hero2 from "@/public/assets/images/h3.jpeg";
import Hero3 from "@/public/assets/images/h4.jpeg";
import Hero10 from "@/public/assets/images/h55.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import "swiper/css";
import Image from "next/image";




export default function ImageSlider() {
  return (
    <Swiper
      modules={[Autoplay]} 
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      loop={true} 
      style={{ transitionTimingFunction: "ease-in-out",width: "100%", height: "100vh" }} 
    >
      <SwiperSlide>
        <Image
          src={Hero1}
          alt="Ethiopian traditional catering platter for events in San Diego California"
          className="w-full h-full object-cover bg-black "
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src={Hero2}
          alt="Luxury modern wedding catering setup in San Diego"
          className="w-full h-full object-cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src={Hero3}
          alt="event catering with Ethiopian cuisine in San Diego"
          className="w-full h-full object-cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={Hero10}
          alt="Slide 3"
          className="w-full h-full object-cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </SwiperSlide>


      
    </Swiper>
  );
}
