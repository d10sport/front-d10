import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { ImageLogo } from "@utils/imgs/imgs.jsx";
import PropTypes from "prop-types";

export default function CarouselSponsors({ sponsors }) {
  const [items, setItems] = useState(sponsors);

  CarouselSponsors.propTypes = {
    sponsors: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
      })
    ).isRequired,
  };

  useEffect(() => {
    setItems(sponsors);
  }, [sponsors]);

  return (
    <Swiper
      className="w-full flex py-8 my-4 justify-center items-center"
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
          {item.icon != "" ? (
            <img src={item.icon} alt={`Item Sponsor`} className="w-1/2" />
          ) : (
            <ImageLogo alt={`Item Sponsor ${index}`} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
