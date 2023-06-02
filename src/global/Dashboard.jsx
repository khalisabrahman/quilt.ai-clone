import React from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

import bodyWash from "../assets/body-wash.png";
import sneakers from "../assets/sneakers.png";
import restaurants from "../assets/restaurants.png";
import "../index.css";

const Dashboard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const subtitle = { fontSize: "30px", fontWeight: "700", marginTop: "20px" };
  const itemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#fff",
    transition: "transform 1s",
    "&:hover": {
      transform: "translateY(-50px)",
    },
  };
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      sx={{
        paddingTop: "100px",
        paddingBottom: "60px",
        backgroundColor: "fff",
      }}
    >
      <Box
        display="flex"
        width="100%"
        maxWidth="800px"
        sx={{ margin: "0 auto" }}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography
          fontSize="40px"
          fontWeight="700"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "120px",
            color: "rgb(17, 17, 17)",
            transition: "color 1s",
          }}
        >
          Dashboards
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          ref={ref}
          className={`${inView ? "animateSlideIn" : ""} `}
        >
          <Box width="33.3333%" sx={itemStyle}>
            <img
              width="100%"
              src={bodyWash}
              alt=""
              style={{ maxWidth: "201px" }}
            />
            <Typography sx={subtitle}>Body Wash</Typography>
          </Box>

          <Box
            //   className={`${inView ? 'animateSlideIn2' : ''} `}
            width="33.3333%"
            sx={itemStyle}
          >
            <img
              width="100%"
              src={sneakers}
              alt=""
              style={{ maxWidth: "175px" }}
            />
            <Typography sx={subtitle}>Sneakers</Typography>
          </Box>

          <Box
            //   className={`${inView ? 'animateSlideIn2' : ''} `}
            width="33.3333%"
            sx={itemStyle}
          >
            <img
              width="100%"
              src={restaurants}
              alt=""
              style={{ maxWidth: "211px" }}
            />
            <Typography sx={subtitle} textAlign="center">
              Quick Service Restaurants
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
