"use client";

import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { Slide } from "@mui/material";
import { useState } from "react";

//redux

import type { RootState } from "@/app/Redux/store";
import { useSelector, useDispatch } from "react-redux";

///////////////////////////////////////////////////

const icon = {
  marginRight: 1,
  fontSize: 50,
};

const links = [
  {
    label: "Linkedin",
    route: "https://www.linkedin.com/in/jonathan-kim-bk/",
    icon: <LinkedInIcon sx={icon} />,
  },
  {
    label: "Github",
    route: "https://github.com/JONNYKIMBK",
    icon: <GitHubIcon sx={icon} />,
  },
  {
    label: "Whatsapp",
    route: "https://wa.me/5493751595671",
    icon: <WhatsAppIcon sx={icon} />,
  },
  {
    label: "E-mail",
    route: "mailto:jonnykimbk@gmail.com",
    icon: <EmailIcon sx={icon} />,
  },
];

export default function Contact() {
  //redux
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  ///////////////////////////////
  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    fontSize: 50,
    color: theme.bold,
  };

  const [linkStyle, setLinkStyle] = useState({
    Linkedin: "",
    Github: "",
    Whatsapp: "",
    "E-mail": "",
  });

  const handleOver = (label: string) => {
    // setLinkStyle("big");

    setLinkStyle({ ...linkStyle, [label]: "big" });
  };
  const handleOut = (label: string) => {
    // setLinkStyle("");
    setLinkStyle({ ...linkStyle, [label]: "" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 4,
      }}
      id="contact"
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          height: "80vh",
          paddingTop: 5,
          maxHeight: { md: 150 },
        }}
      >
        {links.map(({ label, route, icon }) => (
          <Link key={label} href={route} target="_blank">
            <Box sx={container}>
              {icon}
              <span
                className={linkStyle[label as keyof typeof linkStyle]}
                onMouseOver={() => handleOver(label)}
                onMouseOut={() => handleOut(label)}
              >
                {label}
              </span>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
