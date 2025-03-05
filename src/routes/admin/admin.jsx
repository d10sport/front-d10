import { useContext } from "react";
import SplineModel from "@components/spline/spline.jsx";
import Header from "@layouts/header/header.jsx";
import Footer from "@layouts/footer/footer.jsx";
import AppContext from "@context/app-context";
// import { Canvas } from "@react-three/fiber";
// import { Loading } from "@utils/imgs/imgs";
// import { Link } from "react-router-dom";
import HomeAdmin from "@components/admin-components/admin-home/admin-home.jsx";
import AboutUsAdmin from "@components/admin-components/admin-aboutus/admin-aboutus.jsx";
import ServicesAdmin from "@components/admin-components/admin-services/admin-services.jsx";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./admin.css";

export default function Admin() {
  const context = useContext(AppContext);

  return (
    <>
      <Header dataHeader={context.dataHeader} />

      <section className="admin-section">
        <SplineModel />

        <HomeAdmin />

        <AboutUsAdmin />

        <ServicesAdmin />
      </section>

      <Footer dataFooter={context.dataFooter} />
    </>
  );
}
