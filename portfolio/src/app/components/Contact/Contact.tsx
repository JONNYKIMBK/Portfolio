"use client";

import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 2,
  fontSize: 50,
  color: "antiquewhite",
};

const icon = {
  marginRight: 1,
  fontSize: 50,
};

export default function Contact() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
      <Box
        sx={{
          width: { xs: "90%", md: "30%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "80vh",
        }}
      >
        <Link
          href="https://www.linkedin.com/in/jonathan-kim-bk/"
          target="_blank"
        >
          <Box sx={container}>
            <LinkedInIcon sx={icon} />
            <span>Linkedin</span>
          </Box>
        </Link>

        <Link href="https://github.com/JONNYKIMBK" target="_blank">
          <Box sx={container}>
            <GitHubIcon sx={icon} />
            <span>Github</span>
          </Box>
        </Link>

        <Link href="https://wa.me/5493751595671" target="_blank">
          <Box sx={container}>
            <WhatsAppIcon sx={icon} />
            <span>Whatsapp</span>
          </Box>
        </Link>

        <Link href="mailto:jonnykimbk@gmail.com" target="_blank">
          <Box sx={container}>
            <EmailIcon sx={icon} />
            <span>E-mail</span>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
