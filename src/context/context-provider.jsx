import AppContext from "./app-context";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AppProvider = ({ children }) => {
  AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  let urlApi;
  let apiKey;

  if (import.meta.env.DEV) {
    // Local con Vite
    urlApi = import.meta.env.VITE_API_URL;
    apiKey = import.meta.env.VITE_API_KEY;
  } else {
    // Producción: variables inyectadas en runtime
    urlApi = window.__ENV__?.API_URL;
    apiKey = window.__ENV__?.API_KEY;
  }

  const [loading, setLoading] = useState(false);

  const [dataMaintenance, setDataMaintenance] = useState({
    active: false,
    title: "",
    subtitle: "",
    description: "",
    bg_photo: "",
  });

  const [dataHeader, setDataHeader] = useState({
    logo: "",
    bg_photo: "",
    navStyle: {},
  });

  const [dataFooter, setDataFooter] = useState({
    logo: "",
    bg_photo: "",
  });

  function getDateLayout() {
    setLoading(true);
    axios
      .get(`${urlApi}landing/g/layout`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        if (response.data?.length == 0 || response.data[0] == undefined) return;
        setDataHeader(response.data[0].header);
        setDataFooter(response.data[0].footer);
        setLoading(false);
      })
      .catch((error) => {
        setDataMaintenance({
          active: true,
          title: "D10 +",
          subtitle: "!!Llegaremos pronto!!",
          description: "Estamos trabajando para mejorar tu experiencia",
          bg_photo: "",
        });
        console.error(error);
        setLoading(false);
      });
  }

  async function getConnection() {
    let conection = false;
    await axios
      .get(`${urlApi}conect`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        conection = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
    return conection;
  }

  async function fetchData() {
    const conn = await getConnection();
    if (
      !conn ||
      (conn.message == "Error obteniendo los datos" && conn.status == 500)
    ) {
      setDataMaintenance({
        active: true,
        title: "D10 +",
        subtitle: "!!Llegaremos pronto!!",
        description: "Estamos trabajando para mejorar tu experiencia",
        bg_photo: "",
      });
      return;
    }
  }

  function getDataPage(callback) {
    window.scrollTo(0, 0);
    setLoading(true);
    callback.then((response) => {
      setTimeout(() => {
        if (response) {
          setLoading(false);
        } else {
          setLoading(false);
          setDataMaintenance({
            active: true,
            title: "D10 +",
            subtitle: "!!Llegaremos pronto!!",
            description: "Estamos trabajando para mejorar tu experiencia",
            bg_photo: "",
          });
        }
      }, 1000);
    })
  }

  useEffect(() => {
    getDateLayout();
  }, []);

  return (
    <AppContext.Provider
      value={{
        urlApi,
        apiKey,
        dataMaintenance,
        dataHeader,
        dataFooter,
        setDataMaintenance,
        setDataHeader,
        setDataFooter,
        fetchData,
        loading,
        setLoading,
        getDataPage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
