import React from 'react';
import Image from 'next/legacy/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore,{Autoplay} from 'swiper';

type props = {
    events:Litevent[];
}

const CarouselLit = ({events}:props) => {

  SwiperCore.use([Autoplay]);
    
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:2000
      }}
    >
      {events?.map(function (item: any, index: number) {
            return (
              // eslint-disable-next-line react/jsx-key
              <SwiperSlide key={index}>
                <div className="cursor-pointer">
                    <div className="relative h-96 w-full">
                        <Image src={item.img} layout="fill" objectFit="cover" className="rounded-md"/>
                    </div>
                </div>
              </SwiperSlide>
            );
      })}
    </Swiper>
  )
}

export default CarouselLit