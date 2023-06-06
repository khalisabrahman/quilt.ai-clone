import { Box, keyframes } from "@mui/material";
import { useEffect, useState } from "react";
import gradientImg from "../assets/gradient.jpg";

const rollInBottom = keyframes`
  0% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }

`;

const HeroImg = () => {
  const [roll, setRoll] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setRoll(true);
    }, 500);
  }, []);

  return (
    <Box
      sx={{
        height: "400px",
        backgroundImage: `url(${gradientImg})`,
        backgroundPosition: "50% 0",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        marginTop: 0,
        animation: roll && `${rollInBottom} 0.6s ease-out both`,
      }}
    ></Box>
  );
};

export default HeroImg;
