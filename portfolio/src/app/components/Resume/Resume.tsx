"use client";

import Link from "next/link";
import styles from "./Resume.module.css";
import { Box, Slide } from "@mui/material";
import { useEffect, useState } from "react";

//Languages

import { es } from "../../../../public/locale/es";
import { en } from "../../../../public/locale/en";

///////////////////////////////////////////////////////

//redux

import type { RootState } from "@/app/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "@/app/Redux/hooks";

///////////////////////////////////////////////////

export default function Resume() {
  //redux
  const theme = useSelector((state: RootState) => state.theme);

  const lang = useAppSelector((state: RootState) => state.language.language);

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
              {lang === "es"
                ? es.summary.description[0]
                : en.summary.description[0]}
            </p>
            <p>
              {lang === "es"
                ? es.summary.description[1]
                : en.summary.description[1]}
            </p>
            <p>
              {lang === "es"
                ? es.summary.description[2]
                : en.summary.description[2]}
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
              {lang === "es" ? es.summary.titles[0] : en.summary.titles[0]}
            </p>
            <div className={styles.resume}>
              <div className={styles.first}>
                <p>{lang === "es" ? es.summary.lang : en.summary.lang}</p>

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
                <p>{lang === "es" ? es.summary.db : en.summary.db}</p>

                <ul>
                  <li key="PostgreSQL">PostgreSQL</li>
                </ul>
              </div>
            </div>
            <p className="titles" style={{ color: theme.bold }}>
              {lang === "es" ? es.summary.titles[1] : en.summary.titles[1]}
            </p>
            <ul>
              <li key="Gestión del tiempo">
                {lang === "es" ? es.summary.soft[0] : en.summary.soft[0]}
              </li>
              <li key="Trabajo en equipo">
                {lang === "es" ? es.summary.soft[1] : en.summary.soft[1]}
              </li>
              <li key="Adaptabilidad al cambio">
                {lang === "es" ? es.summary.soft[2] : en.summary.soft[2]}
              </li>
            </ul>
          </div>
        </Slide>
      </div>
    </div>
    // </Box>
  );
}
