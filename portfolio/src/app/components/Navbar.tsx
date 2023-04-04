"use client";

import { AppBar, Box, Toolbar, Zoom } from "@mui/material";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Proyectos",
    route: "/proyects",
  },
  {
    label: "Contacto",
    route: "/contact",
  },
];

export default function Navbar() {
  const [checked, setChecked] = useState(false);
  const [style, setStyle] = useState(styles.img);

  const hoverChange = () => {
    if (style === styles.img) {
      setStyle(styles.img2);
    } else {
      setStyle(styles.img);
    }
  };
  const hoverChange2 = () => {
    if (style === styles.img) {
      setStyle(styles.img2);
    } else {
      setStyle(styles.img);
    }
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#2F4F4F" }} position="static">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginBottom: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "20vw",
              maxHeight: "10vh",
              justifyContent: { xs: "center" },
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            <img
              onClick={handleChange}
              onMouseOver={hoverChange}
              onMouseOut={hoverChange2}
              className={style}
              src="https://media.licdn.com/dms/image/C4E03AQFkrhTACqM0qg/profile-displayphoto-shrink_800_800/0/1655984250480?e=1685577600&v=beta&t=usXAAKA5n8E0sGG3KhCH_0XIzZxkhPifJQmo5HeYRYM"
              alt=""
            />
          </Box>

          {/* 
          ////////////////////////////////
          desktop */}
          <Box
            sx={{
              display: { md: "none", xs: "flex" },

              justifyContent: { xs: "space-between", md: "space-around" },
              width: "80vw",
            }}
          >
            {links.map(({ label, route }) => (
              <Box sx={{ border: 1, padding: 1, borderRadius: "20%" }}>
                <Link href={route} className={styles.link}>
                  <div>{label}</div>
                </Link>
              </Box>
            ))}
          </Box>

          {/* ///////////////////////////////// */}

          {/* ////////////////////////////////////////////
          mobile */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: { xs: "space-between", md: "space-around" },
              width: "80vw",
            }}
          >
            {links.map(({ label, route }) => (
              <Zoom in={checked}>
                <Box sx={{ border: 1, padding: 1, borderRadius: "20%" }}>
                  <Link href={route} className={styles.link}>
                    <div>{label}</div>
                  </Link>
                </Box>
              </Zoom>
            ))}
          </Box>
          {/* /////////////////////////////////////////////////// */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}