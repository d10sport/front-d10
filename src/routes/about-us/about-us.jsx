import Header from '../../layouts/header/header'
import './about-us.css'

import logoTeams from '../../assets/icons/logo_teams.png'

export default function AboutUs() {
  return (
    <>
      <Header/>
      
      <section className="about">
        <div className="cntr-txt__about">
          <h1 className="title-1__about">Conócenos</h1>
          <p className="text__about padding-cntr-txt__space">
            En D10 vivimos y respiramos fútbol. Somos una organización
            comprometida con el desarrollo de talentos en el fútbol, desde los
            primeros pasos hasta alcanzar su máximo potencial. Donde puedan forjar
            no solo sus habilidades en el campo, sino también su carácter y amor
            por el deporte.
          </p>
        </div>

        <div className="cntr-central__about">
          <div className="central-cntr__about">
            <h2 className="title-2__about">
              Nuestro Fundador
              <br />
              David Urrego
            </h2>
            <h3 className="title-3__about">Empresario</h3>
            <p className="text__about">
              David Urrego, fundador de D10, es un joven de 32 años con una pasión
              por el fútbol y el desarrollo juvenil. En su experiencia como
              Futbolista y hoy Orientador de jugadores, ha guiado chicos
              talentosos en su camino hasta llegar al profesionalismo, creando
              oportunidades y construyendo sueños. Su visión y liderazgo son
              fundamentales para el éxito de D10 y la inspiración de la próxima
              generación de futbolistas
            </p>
          </div>
        </div>

        <div className="cntr-txt__about">
          <h3 className="title-3__about">Objetivos:</h3>
          <p className="text__about padding-cntr-txt__space">
            Nuestro principal objetivo es entrar fuerte en el mercado deportivo
            vistiendo como mínimo un equipo en cada ciudad de Colombia,
            inicialmente tenemos como primera meta realizar 10 convenios los
            cuales se harán como pre-venta del proyecto en el segundo semestre del
            año actual y que nos servirán como modelo de trabajo para que en todo
            2025 cumplamos nuestro objetivo principal que es ver D10 en todo el
            país, teniendo una escala de crecimiento exponencial, donde podamos
            sumar más servicios a nuestro portafolio como campamentos,
            experiencias deportivas y como producto final un D10 Cup exclusivo
            para nuestros clubes asociados.
          </p>
        </div>

        <div className="cntr-img__about img-bg-right__about">
          <div className="cntr-empty__about"></div>
          <div className="cntr-side__about">
            <h3 className="title-3__about">Misión:</h3>
            <p className="text__about">
              Nuestra misión en D10 es inspirar y potenciar el rendimiento de
              atletas y entusiastas del deporte a través de prendas de alta
              calidad que fusionan diseño innovador, funcionalidad excepcional y
              estilo moderno. Nos comprometemos a ser la elección preferida para
              aquellos que buscan no solo ropa deportiva, sino una experiencia que
              refleje su pasión por el movimiento, la salud y el bienestar.
              <br />
              Nos esforzamos por impulsar un cambio positivo en la vida de las
              personas, promoviendo un estilo de vida activo y saludable. Buscamos
              superar las expectativas de nuestros clientes al ofrecer productos
              que no solo cumplan con los estándares más altos de rendimiento,
              durabilidad y comodidad, sino que también reflejen nuestra
              dedicación a la sostenibilidad y responsabilidad social.
            </p>
          </div>
        </div>

        <div className="sponsors__about">
          <img src={logoTeams} alt="Image Sponsor" className="img__about" />
          <img src={logoTeams} alt="Image Sponsor" className="img__about" />
          <img src={logoTeams} alt="Image Sponsor" className="img__about" />
          <img src={logoTeams} alt="Image Sponsor" className="img__about" />
          <img src={logoTeams} alt="Image Sponsor" className="img__about" />
        </div>

        <div className="cntr-img__about img-bg-left__about">
          <div className="cntr-side__about">
            <h3 className="title-3__about">Vision:</h3>
            <p className="text__about">
              D10 tiene como visión, por medio de una marca de ropa deportiva,
              tener un proyecto social auto sostenible que llegará a todos los
              rincones de Colombia que se respire fútbol, donde todas las escuelas
              que se quieran vincular puedan hacerlo con facilidad, logrando así ,
              tener la mayor cantidad de niños y niñas vistiendo nuestra marca
              pero también recibiendo un entrenamiento optimo, guiados por sus
              entrenadores ya formados en nuestra plataforma educativa totalmente
              gratis. Sumándole por consecuencia a ese buen trabajo aumentar las
              estadísticas de éxito en los procesos de nuestros deportistas
              afiliados.
              <br />
              En D10 , visualizamos un futuro donde nuestra marca se consolide
              como un referente en la industria de la ropa deportiva, reconocida
              por su innovación, calidad superior y compromiso inquebrantable con
              la excelencia. Aspiramos a ser más que una marca; buscamos
              convertirnos en un estilo de vida, inspirando a personas de todo el
              mundo a abrazar la actividad física y alcanzar sus metas a través de
              prendas deportivas de vanguardia.
            </p>
          </div>
          <div className="cntr-empty__about"></div>
        </div>
      </section>

    </>
  )
}