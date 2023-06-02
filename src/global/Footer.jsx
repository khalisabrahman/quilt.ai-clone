import { Box, Typography, TextField, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import logo from "../assets/small-logo.png";
import "../index.css";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "150px 56px",
        backgroundColor: "#333",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1140px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateRows: "auto",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img src={logo} width="114px" alt="logo"></img>
            <Typography sx={{ color: "#fff", fontSize: "17px" }}>
              Subscribe to stay up to date with our latest products, articles
              and newsletters.
            </Typography>
            <Box width="100%" display="flex" gap="10px" alignItems="center">
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  border: "none",
                }}
              />
              <IconButton
                sx={{
                  color: "white",
                  backgroundColor: "#555",
                  borderRadius: "15px",
                }}
              >
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
              </IconButton>
            </Box>
          </Box>
          <Box>
            <Typography className="footer-title" fontWeight="600">
              Pages
            </Typography>
            <Typography className="footer-link">Home</Typography>
            <Typography className="footer-link">About</Typography>
            <Typography className="footer-link">Products</Typography>
            <Typography className="footer-link">Social Impact</Typography>
            <Typography className="footer-link">Quilt Health</Typography>
          </Box>
          <Box>
            <Typography className="footer-title" fontWeight="600">
              Resources
            </Typography>
            <Typography className="footer-link">Magazine</Typography>
            <Typography className="footer-link">Dashboards</Typography>
            <Typography className="footer-link">Case Studies</Typography>
            <Typography className="footer-link">Trend Trackers</Typography>
          </Box>
          <Box>
            <Typography className="footer-title" fontWeight="600">
              Product
            </Typography>
            <Typography className="footer-link">Sphere</Typography>
            <Typography className="footer-link">Create</Typography>
            <Typography className="footer-link">Contact</Typography>
          </Box>
          <Box>
            <Typography className="footer-title" fontWeight="600">
              Policy
            </Typography>
            <Typography className="footer-link">Privacy Notice</Typography>
            <Typography className="footer-link">Cookie Notice</Typography>
            <Typography className="footer-link">
              Terms and Conditions
            </Typography>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Footer;
