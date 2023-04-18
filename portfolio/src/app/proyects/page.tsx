"use client";

import { Box, Slide } from "@mui/material";
import style from "./page.module.css";
import { useEffect, useState } from "react";

//Languages

import { es } from "../../../public/locale/es";
import { en } from "../../../public/locale/en";

///////////////////////////////////////////////////////

//redux

import type { RootState } from "@/app/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "../Redux/hooks";

////////////////

export default function Proyects() {
  //redux
  const theme = useSelector((state: RootState) => state.theme);

  const lang = useAppSelector((state: RootState) => state.language.language);

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

  useEffect(() => {
    setLinkStyle({
      deploy1: theme.bold,
      deploy2: theme.bold,
      github1: theme.bold,
      github2: theme.bold,
    });
  }, [theme]);

  return (
    <Slide direction="up" in={true} timeout={1500}>
      <div className={style.proyect}>
        <div className="titles" style={{ color: theme.bold }}>
          {lang === "es" ? es.navbar[1] : en.navbar[1]}:
        </div>

        <div className={style.body}>
          <div className={style.container}>
            <div className={style.title}>
              <p style={{ color: theme.bold }}>Devs Learning:</p>
            </div>

            <div className={style.resume}>
              <p>{lang === "es" ? es.projects.devs[0] : en.projects.devs[0]}</p>

              <p>
                {lang === "es" ? es.projects.devs[1] : en.projects.devs[1]}{" "}
                <b style={{ color: theme.bold }}>
                  Typescript, JavaScript, Node.js, Express.js, React.js, Redux
                  toolkit, Material UI, PostgreSQL, sequelize, Firebase,
                  MercadoPago
                </b>
                , {lang === "es" ? es.projects.devs[2] : en.projects.devs[2]}
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
                {lang === "es"
                  ? es.projects.pokedex[0]
                  : en.projects.pokedex[0]}
              </p>

              <p>
                {lang === "es"
                  ? es.projects.pokedex[1]
                  : en.projects.pokedex[1]}{" "}
                <b style={{ color: theme.bold }}>PostgreSQL, sequelize</b>,{" "}
                {lang === "es"
                  ? es.projects.pokedex[2]
                  : en.projects.pokedex[2]}{" "}
                <b style={{ color: theme.bold }}>Node, Express.js</b>,{" "}
                {lang === "es"
                  ? es.projects.pokedex[3]
                  : en.projects.pokedex[3]}{" "}
                <b style={{ color: theme.bold }}> React.js, Redux</b>.
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
