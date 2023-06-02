import { Box } from "@mui/material";
import gradientImg from "../assets/gradient.jpg";

const HeroImg = () => {
  return (
    <Box
      sx={{
        height: "400px",
        backgroundImage: `url(${gradientImg})`,
        backgroundPosition: "50% 0",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        marginTop: 0,
      }}
    ></Box>
  );
};

export default HeroImg;
