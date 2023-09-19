"use client";

import Link from "next/link";
import styles from "./Resume.module.css";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

//Languages

import { es } from "../../../../public/locale/es";
import { en } from "../../../../public/locale/en";

///////////////////////////////////////////////////////

//redux

import type { RootState } from "@/app/Redux/store";
import { useSelector } from "react-redux";
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
    <div id="resume" className={styles.body}>
      <div className={styles.resume}>
        <div className={styles.first}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
                href={lang === "es" ? es.summary.cv : en.summary.cv}
                target="_blank"
              >
                <b
                  style={{ color: linkStyle }}
                  onMouseOver={handleOver}
                  onMouseOut={handleOut}
                >
                  CV - Resume
                </b>
              </Link>
            </p>
          </Box>
        </div>
        <div className={styles.second}>
          <p className="titles" style={{ color: theme.bold }}>
            {lang === "es" ? es.summary.titles[0] : en.summary.titles[0]}
          </p>
          <div className={styles.resume}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: 2,
                gap: 2,
              }}
            >
              <img
                src="https://camo.githubusercontent.com/899faceac4ba793d1b47c461a572a228f852b16827a75a3c1744db1502d2b4ce/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f353936382f353936383239322e706e67"
                alt="Javascript"
                width="80"
                height="80"
              />
              <img
                src="https://camo.githubusercontent.com/fc7b04de41a9e7c4f788a5311d10d3f14db021edfd1e91c1b526b7ebb3f06f5c/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f353936382f353936383338312e706e67"
                alt="Typescript"
                width="80"
                height="80"
              />

              <img
                src="https://www.pinclipart.com/picdir/middle/534-5345877_python-logo-clipart.png"
                alt="Python"
                width="80"
                height="80"
              />
              <img
                src="https://camo.githubusercontent.com/c128a632c96ba308e5ede4c2f0ec513856f663c6794c27e1624beb8a88aa7309/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3931392f3931393832352e706e67"
                alt="Node"
                width="80"
                height="80"
              />
              <img
                src="https://camo.githubusercontent.com/5707f6e31f0340f0f98c21f65e5d7f2eeb50d1d64b9fec28220f8fd89b9ccd36/68747470733a2f2f77372e706e6777696e672e636f6d2f706e67732f3932352f3434372f706e672d7472616e73706172656e742d657870726573732d6a732d6e6f64652d6a732d6a6176617363726970742d6d6f6e676f64622d6e6f64652d6a732d746578742d74726164656d61726b2d6c6f676f2e706e67"
                alt="Express"
                width="80"
                height="80"
              />
              <img
                src="https://camo.githubusercontent.com/171f89b0d975a02e03e851541df5b1a0cf4a87aec6092a9f842c9d0f2b9ccb4a/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f313132362f313132363031322e706e67"
                alt="React"
                width="80"
                height="80"
              />
              <img
                src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                alt="Redux"
                width="80"
                height="80"
              />

              <img
                src="https://th.bing.com/th/id/R.6fc1c04b114f92b2ea6747c9a0b57f61?rik=xXmXG%2bKcP3wJWw&pid=ImgRaw&r=0"
                alt="Vue"
                width="80"
                height="80"
              />

              <img
                src="https://camo.githubusercontent.com/0d780585b41551e0d1aeafb0a7841acd91586bcf39d5b7f8eceb707175fcacfd/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3137342f3137343835342e706e67"
                alt="HTML5"
                width="80"
                height="80"
              />
              <img
                src="https://camo.githubusercontent.com/809a763f1c8f3497709ff0a974bfe7dd11be4dd7a29085645f8e98fbaa4a26e4/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3733322f3733323139302e706e67"
                alt="CSS3"
                width="80"
                height="80"
              />
              <img
                src="https://mui.com/static/logo.png"
                alt="Material UI"
                width="80"
                height="80"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                alt="Tailwind CSS"
                width="80"
                height="80"
              />

              <img
                src="https://camo.githubusercontent.com/cec0f4d96b259673ed3ace71c57ba5e1c7dd8dcab9d0f249f2cce368f314adee/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f353936382f353936383334322e706e67"
                alt="PostgreSQL"
                width="80"
                height="80"
              />

              <img
                src="https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2019/07/GraphQL_Logo.svg.png?fit=2000%2C2000&ssl=1"
                alt="Graphql"
                width="80"
                height="80"
              />
            </Box>
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
      </div>
    </div>
  );
}
