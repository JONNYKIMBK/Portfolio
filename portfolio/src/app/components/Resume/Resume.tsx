"use client";

import Link from "next/link";
import styles from "./Resume.module.css";
import { Box, Slide } from "@mui/material";
import { useEffect, useState } from "react";

//redux

import type { RootState } from "@/app/Redux/store";
import { useSelector, useDispatch } from "react-redux";

///////////////////////////////////////////////////

export default function Resume() {
  //redux
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  ///////////////////////////////
  const [linkStyle, setLinkStyle] = useState(theme.bold);

  const handleOver = () => {
    setLinkStyle(theme.link);
  };
  const handleOut = () => {
    setLinkStyle(theme.bold);
  };

  useEffect(() => {
    setLinkStyle(theme.bold);
  }, [theme]);

  return (
    // <Box sx={{ bgcolor: theme.background }}>
    <div className={styles.body}>
      <div className={styles.resume}>
        <Slide direction="right" in={true} timeout={1500}>
          <div className={styles.first}>
            <Box sx={{ color: theme.bold }}>
              <div className={styles.name}>Jonathan Kim</div>
            </Box>
            <p>
              Hola, mi nombre es Jonathan, y soy un desarrollador web Full Stack
              de Posadas, Misiones, Argentina. Recientemente, he completado un
              bootcamp de más de 800 horas de programación, y actualmente estoy
              ampliando mis habilidades técnicas a través de una tecnicatura en
              análisis de sistemas.
            </p>
            <p>
              Anteriormente, estudié Ciencias Económicas, específicamente la
              carrera de Contador Público, y trabajé en el e-commerce de una
              empresa líder en productos eléctricos e iluminación. En esa
              posición, fui responsable de mantener la página web y de cargar
              todos los productos que vendían, lo que me permitió adquirir
              valiosas habilidades en atención al cliente y en el mundo
              empresarial.
            </p>
            <p>
              Actualmente, estoy buscando una empresa innovadora donde pueda
              combinar mis habilidades en programación con mi experiencia previa
              para desarrollarme en puestos de nivel junior en Frontend o
              Backend. Estoy muy emocionado por las oportunidades que me puedan
              ofrecer y estoy seguro de que podré aportar valor a cualquier
              proyecto en el que participe.
            </p>

            <p>
              <Link
                href="https://drive.google.com/file/d/1yQyp-fHjKJSGt6QrYtERDz6HOYCBu5oa/view?usp=share_link"
                target="_blank"
              >
                <b
                  style={{ color: linkStyle }}
                  // className={linkStyle}
                  onMouseOver={handleOver}
                  onMouseOut={handleOut}
                >
                  CV - Resume
                </b>
              </Link>
            </p>
          </div>
        </Slide>
        <Slide direction="left" in={true} timeout={1500}>
          <div className={styles.second}>
            <p className="titles" style={{ color: theme.bold }}>
              Habilidades técnicas:
            </p>
            <div className={styles.resume}>
              <div className={styles.first}>
                <p>Lenguajes:</p>

                <ul>
                  <li key="Javascript">Javascript</li>
                  <li key="Typescript">Typescript</li>
                </ul>

                <p>Backend:</p>
                <ul>
                  <li key="Node.js">Node.js</li>
                  <li key="Express.js">Express.js</li>
                </ul>
              </div>
              <div className={styles.first}>
                <p>Frontend:</p>
                <ul>
                  <li key="React.js">React.js</li>
                  <li key="Redux">Redux</li>
                  <li key="HTML5">HTML5</li>
                  <li key="CSS3">CSS3</li>
                  <li key="Material UI">Material UI</li>
                </ul>
                <p>Bases de datos:</p>
                <ul>
                  <li key="PostgreSQL">PostgreSQL</li>
                </ul>
              </div>
            </div>
            <p className="titles" style={{ color: theme.bold }}>
              Habilidades blandas:
            </p>
            <ul>
              <li key="Gestión del tiempo">Gestión del tiempo</li>
              <li key="Trabajo en equipo">Trabajo en equipo</li>
              <li key="Adaptabilidad al cambio">Adaptabilidad al cambio</li>
            </ul>
          </div>
        </Slide>
      </div>
    </div>
    // </Box>
  );
}
