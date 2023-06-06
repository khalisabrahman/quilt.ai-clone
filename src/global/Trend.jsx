import { Box, Typography, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import "../index.css";
import accelerations from "../assets/accelerations.png";
import alterations from "../assets/alterations.png";
import holidaying from "../assets/holidaying.png";

const Trend = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const volume = {
    fontSize: "14px",
    fontWeight: "600",
    textAlign: "center",
  };
  const date = {
    color: "#000",
    fontSize: "14px",
    textAlign: "center",
  };
  const subtitle = {
    letterSpacing: "-.04em",
    lineHeight: "1.2",
    fontSize: "30px",
    fontWeight: "700",
    textAlign: "center",
  };

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      sx={{
        paddingTop: "120px",
        paddingBottom: "120px",
        backgroundColor: "#fff",
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
            marginBottom: "60px",
            color: "rgb(17, 17, 17)",
          }}
        >
          Trend Trackers
        </Typography>

        <Box
          ref={ref}
          display="flex"
          justifyContent="center"
          width="100%"
          columnGap="20px"
          rowGap="20px"
          flexWrap="wrap"
          className={`${inView ? "animateSlideIn" : ""} `}
        >
          <Box>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: "0px",
                boxShadow: "none",
                cursor: "pointer",
              }}
            >
              <CardMedia
                sx={{ height: 375 }}
                image={accelerations}
                title="accelerations"
              />
              <CardContent
                sx={{ padding: "30px 40px", backgroundColor: "#F0F3FF" }}
              >
                <Typography gutterBottom sx={subtitle} component="div">
                  Human Accelerations
                </Typography>
                <Typography sx={volume}>#Volume35</Typography>
                <Typography variant="body2" sx={date}>
                  2023-02-07
                </Typography>
              </CardContent>
            </Card>

            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontSize: "14px",
                borderRadius: "0px",
                width: "100%",
                marginTop: "10px",
                display: "block",
                color: "#fff",
                backgroundColor: "#111",
              }}
            >
              Download
            </Button>
          </Box>

          <Box>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: "0px",
                boxShadow: "none",
                cursor: "pointer",
              }}
            >
              <CardMedia
                sx={{ height: 375 }}
                image={alterations}
                title="accelerations"
              />
              <CardContent
                sx={{ padding: "30px 40px", backgroundColor: "#F0F3FF" }}
              >
                <Typography gutterBottom sx={subtitle} component="div">
                  Physical Alterations
                </Typography>
                <Typography sx={volume}>#Volume34</Typography>
                <Typography variant="body2" sx={date}>
                  2022-09-01
                </Typography>
              </CardContent>
            </Card>

            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontSize: "14px",
                borderRadius: "0px",
                width: "100%",
                marginTop: "10px",
                display: "block",
                color: "#fff",
                backgroundColor: "#111",
              }}
            >
              Download
            </Button>
          </Box>

          <Box>
            <Card
              sx={{
                maxWidth: 300,
                borderRadius: "0px",
                boxShadow: "none",
                cursor: "pointer",
              }}
            >
              <CardMedia
                sx={{ height: 375 }}
                image={holidaying}
                title="accelerations"
              />
              <CardContent
                sx={{ padding: "30px 40px", backgroundColor: "#F0F3FF" }}
              >
                <Typography gutterBottom sx={subtitle} component="div">
                  Hyper-holidaying
                </Typography>
                <Typography sx={volume}>#Volume33</Typography>
                <Typography variant="body2" sx={date}>
                  2022-08-15
                </Typography>
              </CardContent>
            </Card>

            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontSize: "14px",
                borderRadius: "0px",
                width: "100%",
                marginTop: "10px",
                display: "block",
                color: "#fff",
                backgroundColor: "#111",
              }}
            >
              Download
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Trend;
