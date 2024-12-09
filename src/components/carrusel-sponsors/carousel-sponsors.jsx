/* eslint-disable react/prop-types */
import { Team1
  // Team2, Team3, Team4, Team5
} from '@utils/imgs/imgs.jsx'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

export default function CarouselSponsors({ sponsors }) {
  const [items, setItems] = useState(sponsors);

  useEffect(() => {
    setItems(sponsors);
  }, [sponsors]);

  return (
    <Swiper className='w-full flex py-8 my-4 justify-center items-center'
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={4}
      pagination={{ clickable: true }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          {item.icon != '' ? item.icon : <Team1/>}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}