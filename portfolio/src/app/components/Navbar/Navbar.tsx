"use client";

import { AppBar, Box, Toolbar, Zoom } from "@mui/material";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TuneIcon from "@mui/icons-material/Tune";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

//redux

import type { RootState } from "@/app/Redux/store";
import { setColor } from "@/app/Redux/Theme/actions";
import { useAppDispatch, useAppSelector } from "@/app/Redux/hooks";

///////////////////////////////////////////////////

const links = [
  {
    label: "Resumen",
    route: "/",
    icon: <PersonIcon />,
  },
  {
    label: "Proyectos",
    route: "/proyects",
    icon: <FormatListBulletedIcon />,
  },
  {
    label: "Contacto",
    route: "/contact",
    icon: <ContactPageIcon />,
  },
];

export default function Navbar() {
  //redux
  const theme = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setColor(event.target.value as string));
  };

  ///////////////////////////////

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

  return (
    <Box>
      <AppBar sx={{ backgroundColor: theme.navbarColor }} position="static">
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
            <Link href="/">
              <img
                // onClick={handleChange}
                onMouseOver={hoverChange}
                onMouseOut={hoverChange2}
                className={style}
                src="https://media.licdn.com/dms/image/C4E03AQFkrhTACqM0qg/profile-displayphoto-shrink_800_800/0/1655984250480?e=1685577600&v=beta&t=usXAAKA5n8E0sGG3KhCH_0XIzZxkhPifJQmo5HeYRYM"
                alt=""
              />
            </Link>
          </Box>

          {/* 
          ////////////////////////////////
          mobile */}
          <Box
            sx={{
              display: { md: "none", xs: "flex" },

              justifyContent: { xs: "space-between", md: "space-around" },
              width: "80vw",
            }}
          >
            {links.map(({ label, route, icon }) => (
              <Box
                key={label}
                sx={{ border: 1, padding: "1vw", borderRadius: "10px" }}
              >
                <Link
                  key={label}
                  href={route}
                  // className={styles.link}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: "center",
                      //redux
                      color: theme.title,
                      /////////////////////////////////
                      border: "1 solid",
                      fontSize: "bold",
                    }}
                  >
                    {icon}
                    <div>{label}</div>
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>

          {/* ///////////////////////////////// */}

          {/* ////////////////////////////////////////////
          desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: { xs: "space-between", md: "space-around" },
              width: "80vw",
              padding: "1vw",
            }}
          >
            {links.map(({ label, route, icon }) => (
              <Zoom key={label} in={true} timeout={1500}>
                <Box
                  key={label}
                  sx={{
                    border: 1,
                    padding: 1,
                    borderRadius: "10px",
                  }}
                >
                  <Link
                    key={label}
                    href={route}
                    // className={styles.link}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        //redux
                        color: theme.title,
                        /////////////////////////////////
                        border: "1 solid",
                        fontSize: "bold",
                      }}
                    >
                      {icon}
                      <div>{label}</div>
                    </Box>
                  </Link>
                </Box>
              </Zoom>
            ))}
          </Box>
          {/* /////////////////////////////////////////////////// */}

          {/* //theme */}
          <Box sx={{ marginTop: 2 }}>
            <FormControl sx={{ width: 100 }} variant="outlined">
              <InputLabel>
                <TuneIcon></TuneIcon>
              </InputLabel>
              <Select
                sx={{ borderColor: "blue" }}
                onChange={handleChange}
                label="Color"
                autoWidth={true}
              >
                <MenuItem value={"blue"}>
                  <CircleOutlinedIcon
                    sx={{ color: "#0a3143", backgroundColor: "#276e90" }}
                  >
                    Blue
                  </CircleOutlinedIcon>
                </MenuItem>
                <MenuItem value={"green"}>
                  <CircleOutlinedIcon
                    sx={{ color: "#eee9c7", backgroundColor: "#5a5239" }}
                  >
                    Green
                  </CircleOutlinedIcon>
                </MenuItem>
                <MenuItem value={"orange"}>
                  <CircleOutlinedIcon
                    sx={{ color: "#333333", backgroundColor: "#e6621f" }}
                  >
                    Orange
                  </CircleOutlinedIcon>
                </MenuItem>

                <MenuItem value={"red"}>
                  <CircleOutlinedIcon
                    sx={{ color: "#ff3b3f", backgroundColor: "#232323" }}
                  >
                    Red
                  </CircleOutlinedIcon>
                </MenuItem>

                <MenuItem value={"dark"}>
                  <CircleOutlinedIcon
                    sx={{ color: "#FFFFFF", backgroundColor: "#000000" }}
                  >
                    Dark
                  </CircleOutlinedIcon>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* //////////////////////////////////////////////////////////////// */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
