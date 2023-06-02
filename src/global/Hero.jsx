import { Box, Button, keyframes } from "@mui/material";
import { useEffect, useState } from "react";

import HeroImg from "./HeroImg";

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

const Hero = () => {
  const [roll, setRoll] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setRoll(true);
    }, 500);
  }, []);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          marginTop: "254px",
          marginBottom: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            maxWidth: "970px",
            animation: roll && `${rollInBottom} 0.6s ease-out both`,
          }}
        >
          <div
            style={{
              color: "rgba(17, 17, 17, 0.57)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "22px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Human empathy at scale
          </div>
          <h1
            style={{
              marginTop: "0",
              marginBottom: "16px",
              color: "rgb(41, 12, 190)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "56px",
              letterSpacing: "-.04em",
              lineHeight: "1.15",
            }}
          >
            We Intepret the Internet
          </h1>
          <p
            style={{
              color: "#111",
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "1.6",
              letterSpacing: "-.02em",
              marginTop: "0",
            }}
          >
            Our approach combines the very best of human expertise and
            artificial intelligence to deliver insights that help organizations
            translate data into action.
          </p>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                fontSize: "15px",
                fontWeight: "bold",
                borderRadius: "10px",
                color: "#3968ff",
                padding: "15px 30px 17px",
                fontFamily: "'Inter', sans-serif",
                border: "1px solid #3968ff",
                "&:hover": {
                  backgroundColor: '#fff',
                  border: "1px solid #3968ff",
                  transform: "translateY(-10px)",
                  transition: "transform 0.2s ease-in",
                },
              }}
            >
              Our Products
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontSize: "15px",
                fontWeight: "bold",
                borderRadius: "10px",
                color: "#fff",
                padding: "15px 30px 17px",
                fontFamily: "'Inter', sans-serif",
                border: "1px solid #3968ff",
                backgroundColor: "#3968ff",
                "&:hover": {
                  border: "1px solid #3968ff",
                  backgroundColor: "#3968ff",
                  transform: "translateY(-10px)",
                  transition: "transform 0.2s ease-in",
                },
              }}
            >
              About Us
            </Button>
          </Box>
        </Box>
      </Box>
      <HeroImg />
    </div>
  );
};

export default Hero;
