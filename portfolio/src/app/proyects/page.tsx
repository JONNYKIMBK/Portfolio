"use client";

import { Box, Slide } from "@mui/material";
import style from "./page.module.css";
import { useState } from "react";

//redux

import type { RootState } from "@/app/Redux/store";
import { useSelector, useDispatch } from "react-redux";

////////////////

export default function Proyects() {
  //redux
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  ///////////////////////////////

  const [linkStyle, setLinkStyle] = useState({
    deploy1: theme.bold,
    deploy2: theme.bold,
    github1: theme.bold,
    github2: theme.bold,
  });

  const handleOver = (label: string) => {
    // setLinkStyle("color");
    setLinkStyle({ ...linkStyle, [label]: theme.link });
  };
  const handleOut = (label: string) => {
    // setLinkStyle("");
    setLinkStyle({ ...linkStyle, [label]: theme.bold });
  };

  return (
    <Slide direction="up" in={true} timeout={1500}>
      <div className={style.proyect}>
        <div className="titles" style={{ color: theme.bold }}>
          Proyectos:
        </div>

        <div className={style.body}>
          <div className={style.container}>
            <div className={style.title}>
              <p style={{ color: theme.bold }}>Devs Learning:</p>
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
                específicas, incluyendo la implementación de la barra de
                búsqueda y los filtros, la integración de la pasarela de pagos
                con MercadoPago y otras funciones clave del proyecto. Este
                proyecto me permitió mejorar mis habilidades de trabajo en
                equipo y colaboración en un ambiente de desarrollo ágil.
              </p>

              <p>
                Las tecnologías usadas fueron{" "}
                <b style={{ color: theme.bold }}>
                  Typescript, JavaScript, Node.js, Express.js, React.js, Redux
                  toolkit, Material UI, PostgreSQL, sequelize, Firebase,
                  MercadoPago
                </b>
                , entre otros
              </p>
              <div className={style.links}>
                <p>
                  <a
                    href="https://devs-learning-5hal.vercel.app/"
                    target="_blank"
                  >
                    <b
                      onMouseOver={() => handleOver("deploy1")}
                      onMouseOut={() => handleOut("deploy1")}
                      style={{ color: linkStyle.deploy1 }}
                    >
                      Deploy
                    </b>
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/Jonatan-R-Villalva/Devs-Learning"
                    target="_blank"
                  >
                    <b
                      onMouseOver={() => handleOver("github1")}
                      onMouseOut={() => handleOut("github1")}
                      style={{ color: linkStyle.github1 }}
                    >
                      Github
                    </b>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className={style.container}>
            <div className={style.title}>
              <p style={{ color: theme.bold }}>Pokedex:</p>
            </div>

            <div className={style.resume}>
              <p>
                Proyecto individual para el bootcamp de Henry que consiste en
                una pagina para mostrar tanto pokemones de una api externa como
                los creados en la base de datos propia.
              </p>

              <p>
                Para la base de datos se utilizo{" "}
                <b className={style.bold}>PostgreSQL y sequelize</b>, para el
                backend <b className={style.bold}>Node y Express.js</b>, y para
                el frontend con <b className={style.bold}> React.js y Redux</b>.
              </p>

              <div className={style.links}>
                <p>
                  <a
                    href="https://pi-pokemon-jonnykim.vercel.app/"
                    target="_blank"
                  >
                    <b
                      onMouseOver={() => handleOver("deploy2")}
                      onMouseOut={() => handleOut("deploy2")}
                      style={{ color: linkStyle.deploy2 }}
                    >
                      Deploy
                    </b>
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/JONNYKIMBK/PI_Pokemon"
                    target="_blank"
                  >
                    <b
                      onMouseOver={() => handleOver("github2")}
                      onMouseOut={() => handleOut("github2")}
                      style={{ color: linkStyle.github2 }}
                    >
                      Github
                    </b>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
