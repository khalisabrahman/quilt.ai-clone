import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import "../index.css";
import music from "../assets/music.jpg";
import track from "../assets/track.jpg";
import rebels from "../assets/rebels.jpg";

const RecentArticles = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const date = {
    color: "#000",
    fontSize: "14px",
  };
  const subtitle = {
    letterSpacing: "-.04em",
    lineHeight: "1.2",
    fontSize: "24px",
    fontWeight: "700",
  };

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      sx={{
        paddingTop: "120px",
        paddingBottom: "120px",
        backgroundColor: "#f5f5f5",
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
          Recent Articles
        </Typography>

        <Box
          ref={ref}
          display="flex"
          justifyContent="center"
          width="100%"
          columnGap="20px"
          className={`${inView ? "animateSlideIn" : ""} `}
        >
          <Card
            sx={{
              maxWidth: 345,
              borderRadius: "15px",
              boxShadow: " rgba(153, 153, 153, 0.75) 10px 10px 24px",
            }}
          >
            <CardMedia sx={{ height: 200 }} image={music} title="Music" />
            <CardContent sx={{ padding: "30px 40px" }}>
              <Typography gutterBottom sx={subtitle} component="div">
                AI Music: The Future of Music or a Threat to Musicians?
              </Typography>
              <Typography variant="body2" sx={date}>
                May 30 2023 12:53pm
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 345,
              borderRadius: "15px",
              boxShadow: " rgba(153, 153, 153, 0.75) 10px 10px 24px",
            }}
          >
            <CardMedia sx={{ height: 200 }} image={track} title="Music" />
            <CardContent sx={{ padding: "30px 40px" }}>
              <Typography gutterBottom sx={subtitle} component="div">
                Track or Wreck? Generative AI conceptualizes albums for every
                music style
              </Typography>
              <Typography variant="body2" sx={date}>
                May 26 2023 04.35pm
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 345,
              borderRadius: "15px",
              boxShadow: " rgba(153, 153, 153, 0.75) 10px 10px 24px",
            }}
          >
            <CardMedia sx={{ height: 200 }} image={rebels} title="Music" />
            <CardContent
              sx={{
                padding: "30px 40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              ></Box>
              <Typography gutterBottom sx={subtitle} component="div">
                Past Rebels, Future Hits: Predictive AI watches viral music
                videos to discover trends through time
              </Typography>
              <Typography variant="body2" sx={date}>
                May 26 2023 03:15pm
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentArticles;
