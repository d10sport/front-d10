import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState, useMemo } from "react";
import { ImageLogo } from "@utils/imgs/imgs.jsx";
import PropTypes from "prop-types";
import "./carousel-sponsors.css";

export default function CarouselSponsors({ sponsors }) {
  const [items, setItems] = useState(sponsors);
  const [deviceType, setDeviceType] = useState("desktop");

  CarouselSponsors.propTypes = {
    sponsors: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
      })
    ).isRequired,
  };

  const showCarrusel = useMemo(() => {
    switch (deviceType) {
      case "mobile":
        return { show: true };
      case "tablet":
        return { show: true };
      default:
        return { show: false };
    }
  }, [deviceType]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDeviceType("mobile");
      } else if (width > 768 && width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setItems(sponsors);
  }, [sponsors]);

  return (
    <>
      {showCarrusel.show ? (
        <Swiper
          className="w-full flex py-8 my-6 justify-center items-center"
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          pagination={{ clickable: true }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="slide">
              {item.icon != "" ? (
                <img
                  src={item.icon}
                  alt={`Item Sponsor`}
                  className="img__sponsors"
                />
              ) : (
                <ImageLogo alt={`Item Sponsor ${index}`} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          className="w-full flex py-8 my-6 justify-center items-center"
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
                <img
                  src={item.icon}
                  alt={`Item Sponsor`}
                  className="img__sponsors"
                />
              ) : (
                <ImageLogo alt={`Item Sponsor ${index}`} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
