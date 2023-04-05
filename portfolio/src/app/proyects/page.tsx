import style from "./page.module.css";

export default function Proyects() {
  return (
    <div className={style.proyect}>
      <div className="titles">Proyectos:</div>

      <div className={style.body}>
        <div className={style.container}>
          <div className={style.title}>
            <p>Devs Learning:</p>
          </div>

          <div className={style.resume}>
            <p>
              Desarrollo de una plataforma de e-learning, donde un usuario
              invitado puede ver los cursos que se presentan, precios,
              descripción e imagen, agregar los cursos al carrito de compra,
              para completar la compra hay que loguearse en la aplicación o
              registrarse, con un formulario o con la cuenta de Google con
              Firebase. También del lado del administrador se puede ver todos
              los cursos, modificar y crear nuevos, ver los usuarios y darle
              permisos o banearlos y ver todas las ventas. Utilizando
              metodologías ágiles como Scrum, me enfoqué en varias tareas
              específicas, incluyendo la implementación de la barra de búsqueda
              y los filtros, la integración de la pasarela de pagos con
              MercadoPago y otras funciones clave del proyecto. Este proyecto me
              permitió mejorar mis habilidades de trabajo en equipo y
              colaboración en un ambiente de desarrollo ágil.
            </p>

            <p>
              Las tecnologías usadas fueron{" "}
              <b className={style.bold}>
                Typescript, JavaScript, Node.js, Express.js, React.js, Redux
                toolkit, Material UI, PostgreSQL, sequelize, Firebase,
                MercadoPago
              </b>
              , entre otros
            </p>
            <div className={style.links}>
              <p>
                <a href="https://devs-learning-5hal.vercel.app/">
                  <b>Deploy</b>
                </a>
              </p>
              <p>
                <a href="https://github.com/Jonatan-R-Villalva/Devs-Learning">
                  <b>Github</b>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={style.container}>
          <div className={style.title}>
            <p>Pokedex:</p>
          </div>

          <div className={style.resume}>
            <p>
              Proyecto individual para el bootcamp de Henry que consiste en una
              pagina para mostrar tanto pokemones de una api externa como los
              creados en la base de datos propia.
            </p>

            <p>
              Para la base de datos se utilizo{" "}
              <b className={style.bold}>PostgreSQL y sequelize</b>, para el
              backend <b className={style.bold}>Node y Express.js</b>, y para el
              frontend con <b className={style.bold}> React.js y Redux</b>.
            </p>

            <div className={style.links}>
              <p>
                <a href="https://pi-pokemon-jonnykim.vercel.app/">
                  <b>Deploy</b>
                </a>
              </p>
              <p>
                <a href="https://github.com/JONNYKIMBK/PI_Pokemon">
                  <b>Github</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
