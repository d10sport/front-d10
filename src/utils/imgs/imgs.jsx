import imageLoading from '@assets/img/logo_company_1.jpg'
// import item1 from '@assets/img/photo_carousel_item1.png'

function ImageLoading() {
  return (
    <img className="relative object-cover w-full h-full" src={imageLoading} />
  );
}

// function Item1() {
//   return (
//     <img
//       src={item1}
//       alt="Modelo"
//       className="model__coleccion disabled-model__colleccion big-padding__colleccion "
//     />
//   );
// }

export { 
  // Item1, 
  ImageLoading 
};
