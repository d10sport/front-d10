/* eslint-disable react/prop-types */
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { ImageLoading } from '@utils/imgs/imgs.jsx'

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
          <img src={ item.icon != "" ? item.icon : ImageLoading } alt={`Item Sponsor`} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}