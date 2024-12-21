/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import axios from 'axios';

function ImageLoading() {

  const urlApi = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [sectionOne, setSectionOne] = useState({
    img: ''
  });
  function LoadData() {

    axios.get(`${urlApi}landing/g/error`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    })
      .then((response) => {

        setSectionOne(response.data[0].section_one);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    LoadData();
  }, []);

  return sectionOne.img;
}

export { ImageLoading };
