import "./home.css";

export function AdminHome() {
  const sections = [
    {
      title: "Colores del texto",
      content: ["Color primario: [#000000]", "Color secundario: [Yellow]"],
      hasButton: true,
    },
    {
      title: "Colores de fondo",
      content: ["Color primario: [#ffffff]", "Color secundario: [#000000]"],
      hasButton: true,
    },
    {
      title: "Colores de iluminaciones",
      content: ["Color primario: [Yellow]"],
      hasButton: true,
    },
    {
      title: "Colores del footer",
      content: ["Color primario: [#000000]", "Color secundario: [#ffffff]"],
      hasButton: true,
    },
    {
      title: "Fuente de la letra",
      content: ["Sans serif"],
      hasButton: true,
    },
    {
      title: "Colores de fondo",
      content: ["Texto Títulos: 60px", "Texto Párrafos: 24px"],
      hasButton: true,
    },
  ];

  const images = [
    { src: "spacex1.jpg", alt: "SpaceX Image 1" },
    { src: "spacex2.jpg", alt: "SpaceX Image 2" },
    { src: "spacex3.jpg", alt: "SpaceX Image 3" },
    { src: "spacex4.jpg", alt: "SpaceX Image 4" },
  ];

  return (
    <>
      <section className="color__admin">
        <h1 className="title__color-change">Panel Administrador</h1>
        <p className="txt__color-change">Bienvenido [Nombre]</p>
        <h2 className="subtitle__color-change">
          Configuraciones de tipografía
        </h2>
        <div className="cntr-section__change">
          {sections.map((section, index) => (
            <div className="section__items" key={index}>
              <h2 className="subtitle__color-change">{section.title}</h2>
              {section.content.map((text, idx) => (
                <p className="txt__color-change" key={idx}>
                  {text}
                </p>
              ))}
              {section.hasButton && (
                <button className="btn__color-change">Cambiar</button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="img__admin">
        <h2 className="subtitle__color-change">Configuraciones de Recursos</h2>

        <div className="cntr-img-section__change">
          {images.map((image, index) => (
            <div className="img-section__items" key={index}>
              <h2 className="subtitle__color-change">Colores del texto</h2>
              <div className="cntr-img__change">
                <img src={image.src} alt={image.alt} />
              </div>
              <button className="btn__color-change">Cambiar</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
