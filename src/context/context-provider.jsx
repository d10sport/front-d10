import AppContext from "./app-context";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

const AppProvider = ({ children }) => {

  AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const urlApi = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [dataMaintenance, setDataMaintenance] = useState({
    active: false,
    title: '',
    subtitle: '',
    description: '',
    bg_photo: ''
  });

  const [dataHeader, setDataHeader] = useState({
    logo: '',
    bg_photo: '',
    navStyle: {}
  });

  const [dataFooter, setDataFooter] = useState({
    logo: '',
    bg_photo: ''
  });

  function getDateLayout() {
    axios.get(`${urlApi}landing/g/layout`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    })
      .then((response) => {
        if (response.data?.length == 0 || response.data[0] == undefined) return;
        setDataMaintenance(response.data[0].maintenance);
        setDataHeader(response.data[0].header);
        setDataFooter(response.data[0].footer);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function getConnection() {
    let conection = false;
    await axios.get(`${urlApi}conect`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
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
    if (!conn || (conn.message == "Error connecting" && conn.status == 500 )) {
      setDataMaintenance({
        active: true,
        title: 'D10 +',
        subtitle: '!!Llegaremos pronto!!',
        description: 'Estamos trabajando para mejorar tu experiencia',
        bg_photo: ''
      });
      return;
    }
  }

  useEffect(() => {
    getDateLayout();
  }, []);

  return (
    <AppContext.Provider value={{
      urlApi,
      apiKey,
      dataMaintenance,
      dataHeader,
      dataFooter,
      setDataMaintenance,
      setDataHeader,
      setDataFooter,
      fetchData
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;