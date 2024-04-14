/* eslint-disable @next/next/no-img-element */
"use client";

import style from "./projects.module.css";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

//Languages

import { es } from "../../../../public/locale/es";
import { en } from "../../../../public/locale/en";

///////////////////////////////////////////////////////

//redux

import type { RootState } from "@/app/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "@/app/Redux/hooks";

////////////////

export default function Projects() {
  //redux
  const theme = useSelector((state: RootState) => state.theme);

  const lang = useAppSelector((state: RootState) => state.language.language);

  ///////////////////////////////

  const [linkStyle, setLinkStyle] = useState({
    deploy1: theme.bold,
    deploy2: theme.bold,
    deploy3: theme.bold,
    deploy4: theme.bold,
    github1: theme.bold,
    github2: theme.bold,
    github3: theme.bold,
    github4: theme.bold,
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
      deploy3: theme.bold,
      deploy4: theme.bold,
      github1: theme.bold,
      github2: theme.bold,
      github3: theme.bold,
      github4: theme.bold,
    });
  }, [theme]);

  return (
    <div className={style.project}>
      <div id="projects" className="titles" style={{ color: theme.bold }}>
        {lang === "es" ? es.navbar[1] : en.navbar[1]}:
      </div>

      <div className={style.body}>
        {/* rick & morty */}

        <div className={style.container}>
          <div className={style.title}>
            <p style={{ color: theme.bold }}>
              <b>Rick & Morty:</b>
            </p>
            <Zoom>
              <img
                src="https://i.postimg.cc/4d1YkQ2d/Screenshot-2024-04-12-215246.png"
                alt="quiz"
                width="200"
              />
            </Zoom>

            <p style={{ color: theme.bold }}>
              <b>01/2024</b>
            </p>
          </div>

          <div className={style.resume}>
            <p>{lang === "es" ? es.projects.rick[0] : en.projects.rick[0]}</p>

            <p>
              {lang === "es" ? es.projects.rick[1] : en.projects.rick[1]}
              <b style={{ color: theme.bold }}>
                React.js, Vite, Graphql & Apollo
              </b>
              {"."}
            </p>

            <div className={style.links}>
              <p>
                <a
                  href="https://rick-morty-jonnykims-projects.vercel.app/"
                  target="_blank"
                >
                  <b
                    onMouseOver={() => handleOver("deploy4")}
                    onMouseOut={() => handleOut("deploy4")}
                    style={{ color: linkStyle.deploy4 }}
                  >
                    Deploy
                  </b>
                </a>
              </p>

              <p>
                <a
                  href="https://github.com/JONNYKIMBK/rick-morty"
                  target="_blank"
                >
                  <b
                    onMouseOver={() => handleOver("github4")}
                    onMouseOut={() => handleOut("github4")}
                    style={{ color: linkStyle.github4 }}
                  >
                    Github
                  </b>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////// */}

        {/* quiz */}

        <div className={style.container}>
          <div className={style.title}>
            <p style={{ color: theme.bold }}>
              <b>Quiz:</b>
            </p>
            <Zoom>
              <img
                src="https://i.postimg.cc/65h0cLNq/quiz.webp"
                alt="quiz"
                width="200"
              />
            </Zoom>

            <p style={{ color: theme.bold }}>
              <b>05/2023</b>
            </p>
          </div>

          <div className={style.resume}>
            <p>{lang === "es" ? es.projects.quiz[0] : en.projects.quiz[0]}</p>

            <p>
              {lang === "es" ? es.projects.quiz[1] : en.projects.quiz[1]}{" "}
              <b style={{ color: theme.bold }}>Next.js & Tailwind CSS</b>{" "}
              {lang === "es" ? es.projects.quiz[2] : en.projects.quiz[2]}
            </p>

            <div className={style.links}>
              <p>
                <a href="https://quiz-jonnykim.vercel.app/" target="_blank">
                  <b
                    onMouseOver={() => handleOver("deploy4")}
                    onMouseOut={() => handleOut("deploy4")}
                    style={{ color: linkStyle.deploy4 }}
                  >
                    Deploy
                  </b>
                </a>
              </p>

              <p>
                <a
                  href="https://github.com/JONNYKIMBK/quiz/tree/main/quiz-app"
                  target="_blank"
                >
                  <b
                    onMouseOver={() => handleOver("github4")}
                    onMouseOut={() => handleOut("github4")}
                    style={{ color: linkStyle.github4 }}
                  >
                    Github
                  </b>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////// */}

        {/* dollar */}

        <div className={style.container}>
          <div className={style.title}>
            <p style={{ color: theme.bold }}>
              <b>Dollar-blue:</b>
            </p>
            <Zoom>
              <img
                src="https://i.postimg.cc/DzTdXWzv/dollar.webp"
                alt="dollar"
                width="200"
              />
            </Zoom>

            <p style={{ color: theme.bold }}>
              <b>05/2023</b>
            </p>
          </div>

          <div className={style.resume}>
            <p>
              {lang === "es" ? es.projects.dollar[0] : en.projects.dollar[0]}
            </p>

            <p>
              {lang === "es" ? es.projects.dollar[1] : en.projects.dollar[1]}{" "}
              <b style={{ color: theme.bold }}>
                Typescript, Next.js 13, Next.js API, React, Bluelytics, React
                Google Charts.
              </b>
            </p>

            <div className={style.links}>
              <p>
                <a href="https://dollar-blue.vercel.app/" target="_blank">
                  <b
                    onMouseOver={() => handleOver("deploy3")}
                    onMouseOut={() => handleOut("deploy3")}
                    style={{ color: linkStyle.deploy3 }}
                  >
                    Deploy
                  </b>
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/JONNYKIMBK/dollar-blue"
                  target="_blank"
                >
                  <b
                    onMouseOver={() => handleOver("github3")}
                    onMouseOut={() => handleOut("github3")}
                    style={{ color: linkStyle.github3 }}
                  >
                    Github
                  </b>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* /////////////////////////////////////////////////// */}

        {/* devs */}
        <div className={style.container}>
          <div className={style.title}>
            <p style={{ color: theme.bold }}>
              <b>Devs Learning:</b>
            </p>
            <Zoom>
              <img
                src="https://i.postimg.cc/Px8XnqmD/devs.webp"
                alt="devs"
                width="200"
              />
            </Zoom>

            <p style={{ color: theme.bold }}>
              <b>02/2023 - 03/2023</b>
            </p>
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
        {/* /////////////////////////////////////////////// */}

        {/* pokemon */}
        <div className={style.container}>
          <div className={style.title}>
            <p style={{ color: theme.bold }}>
              <b>Pokedex:</b>
            </p>
            <Zoom>
              <img
                src="https://i.postimg.cc/dtZ8NRkQ/pokemon.webp"
                alt="pokedex"
                width="200"
              />
            </Zoom>

            <p style={{ color: theme.bold }}>
              <b>01/2023 - 02/2023</b>
            </p>
          </div>

          <div className={style.resume}>
            <p>
              {lang === "es" ? es.projects.pokedex[0] : en.projects.pokedex[0]}
            </p>

            <p>
              {lang === "es" ? es.projects.pokedex[1] : en.projects.pokedex[1]}{" "}
              <b style={{ color: theme.bold }}>PostgreSQL, sequelize</b>,{" "}
              {lang === "es" ? es.projects.pokedex[2] : en.projects.pokedex[2]}{" "}
              <b style={{ color: theme.bold }}>Node, Express.js</b>,{" "}
              {lang === "es" ? es.projects.pokedex[3] : en.projects.pokedex[3]}{" "}
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
        {/* ////////////////////////////////////// */}
      </div>
    </div>
  );
}
