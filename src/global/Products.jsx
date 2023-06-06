import { Box, Button, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

import emailImg from "../assets/email.jpg";
import sphere from "../assets/sphere.jpg";
import "../index.css";

const Products = () => {
  const [isHoveredId, setIsHoveredId] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  function handleMouseOver(ID) {
    return () => {
      setIsHoveredId(ID);
    };
  }

  function handleMouseOut() {
    setIsHoveredId("");
  }

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      sx={{
        paddingTop: "160px",
        paddingBottom: "20px",
        backgroundColor:
          isHoveredId === "1"
            ? "#3968ff"
            : isHoveredId === "2"
            ? "rgb(72, 15, 186)"
            : "rgb(229, 229, 229)",
        transition: "background-color 1s",
      }}
    >
      <Box
        display="flex"
        width="100%"
        maxWidth="1140px"
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
            color: isHoveredId ? "#fff" : "rgb(17, 17, 17)",
            transition: "color 1s",
          }}
        >
          Our Products
        </Typography>

        <Box
          ref={ref}
          display="flex"
          justifyContent="center"
          width="100%"
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        >
          {inView && (
            <Box
              className={`${inView ? "animateSlideIn" : "fade-in"} `}
              onMouseOver={handleMouseOver("1")}
              onMouseOut={handleMouseOut}
              sx={{
                borderRadius: "15px",
                padding: "45px",
                backgroundColor: "#fff",
                boxShadow: "1px 1px 6px #b8b8b8",
                margin: "10px",
                width: {
                  xs: "100%",
                  md: "50%",
                },
              }}
            >
              <Typography
                variant="h1"
                fontWeight="bold"
                fontSize="40px"
                sx={{
                  marginBottom: "31px",
                  color: isHoveredId === "1" ? "#3968ff" : "#111111",
                  transition: "color 1s",
                }}
              >
                Create
              </Typography>
              <img
                src={emailImg}
                alt=""
                style={{ borderRadius: "15px", maxWidth: "100%" }}
              />
              <Typography
                variant="h3"
                sx={{
                  color: "#555",
                  lineHeight: "1.6",
                  letterSpacing: "-.02em",
                  marginTop: "35px",
                  marginBottom: "35px",
                }}
              >
                Quilt & Create is an AI-powered remedy for creator’s block that
                inspires you with ideas for ad campaigns, product descriptions,
                slogans and social media posts in seconds.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontSize: "14px",
                  borderRadius: "10px",
                  width: "80%",
                  margin: "0 auto",
                  display: "block",
                  backgroundColor: isHoveredId === "1" ? "#3968ff" : "#111111",
                  "&:hover": { backgroundColor: "#3968ff" },
                  transition: "background-color 1s",
                }}
              >
                Create your next big idea
              </Button>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                marginTop="25px"
              >
                <IconButton
                  sx={{ backgroundColor: "#bdbdbd", borderRadius: "50%" }}
                >
                  <ExpandMoreIcon></ExpandMoreIcon>
                </IconButton>
              </Box>
            </Box>
          )}

          {inView && (
            <Box
              className={`${inView ? "animateSlideIn" : ""} `}
              onMouseOver={handleMouseOver("2")}
              onMouseOut={handleMouseOut}
              sx={{
                borderRadius: "15px",
                padding: "45px",
                backgroundColor: "#fff",
                boxShadow: "1px 1px 6px #b8b8b8",
                margin: "10px",
                width: {
                  xs: "100%",
                  md: "50%",
                },
              }}
            >
              <Typography
                variant="h1"
                fontWeight="bold"
                fontSize="40px"
                sx={{
                  marginBottom: "31px",
                  color: isHoveredId === "2" ? "rgb(72, 15, 186)" : "#111111",
                  transition: "color 1s",
                }}
              >
                Sphere
              </Typography>
              <img
                src={sphere}
                alt=""
                style={{ borderRadius: "15px", maxWidth: "100%" }}
              />
              <Typography
                variant="h3"
                sx={{
                  color: "#555",
                  lineHeight: "1.6",
                  letterSpacing: "-.02em",
                  marginTop: "35px",
                  marginBottom: "35px",
                }}
              >
                Sphere is an insights tool that makes sense of human culture by
                using Internet data and machine learning to decode the nuances
                of human behavior, from emotions to everyday experiences to
                sweeping trends.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontSize: "14px",
                  borderRadius: "10px",
                  width: "80%",
                  margin: "0 auto",
                  display: "block",
                  backgroundColor:
                    isHoveredId === "2" ? "rgb(72, 15, 186)" : "#111111",
                  "&:hover": { backgroundColor: "rgb(72, 15, 186)" },
                  transition: "background-color 1s",
                }}
              >
                Start generating insights
              </Button>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                marginTop="25px"
              >
                <IconButton
                  sx={{ backgroundColor: "#bdbdbd", borderRadius: "50%" }}
                >
                  <ExpandMoreIcon></ExpandMoreIcon>
                </IconButton>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
