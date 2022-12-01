import React from "react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import { urlFor } from "../sanity";
import { PortableText } from "@portabletext/react";
const Banner = ({ home }) => {
  return (
    <section className="home" id="home">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        navigation
        slidesPerView={1}
        effect="fade"
        loop
        autoplay={{
          delay: 2500,
        }}
      >
        {home.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="home__content">
              <div className="home__data opacity-black">
                <Image
                  src={urlFor(item.image).url()}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
                <div className="home__desc">
                  <h1>{item.title}</h1>
                  <PortableText value={item.description} />
                  <a href="#" className="button">
                    Check Menu
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
