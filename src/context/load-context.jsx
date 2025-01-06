import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import AppContext from "@context/app-context";

const LoadContext = createContext();

export const LoadProvider = ({ children }) => {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const initialState = {
    sectionOne: { slogan: "", company: "", bg_photo: "" },
    sectionTwo: { title: "", description: "", bg_photo: "" },
    sectionThree: { video: "" },
    sectionFour: {
      collection: [{ title: "", photo: "", link: "" }],
      news: { h1: "", title: "", description: "", link: "" },
    },
    sectionFive: {
      title_1: "",
      title_2: "",
      text_link: "",
      link: "",
      bg_photo: "",
    },
    sectionSix: { title: "", icons: [{ icon: "" }] },
  };

  const [sections, setSections] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${urlApi}landing/g/home`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      });

      const data = response.data?.[0] || null;

      if (data) {
        setSections({
          sectionOne: data.section_one || initialState.sectionOne,
          sectionTwo: data.section_two || initialState.sectionTwo,
          sectionThree: data.section_three || initialState.sectionThree,
          sectionFour: data.section_four || initialState.sectionFour,
          sectionFive: data.section_five || initialState.sectionFive,
          sectionSix: data.section_six || initialState.sectionSix,
        });
        setLoading(false); // Datos cargados correctamente
      } else {
        throw new Error("Datos inválidos");
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setLoading(true); // Mantener estado de carga en caso de error
    }
  };

  // Recarga periódica si los datos no son válidos
  useEffect(() => {
    const interval = setInterval(() => {
      if (loading) fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, [loading]);

  // Primera carga
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LoadContext.Provider value={{ sections, loading }}>
      {children}
    </LoadContext.Provider>
  );
};

LoadProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoadContext;
