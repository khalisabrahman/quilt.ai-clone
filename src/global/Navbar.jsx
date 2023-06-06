import { Box, Button, IconButton } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/quilt-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const buttonStyles = {
    textTransform: "none",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "10px",
    color: "#000000",
    padding: "10px 19px",
    "&:hover": { backgroundColor: "#f0f3ff" },
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="104px"
      backgroundColor="rgba(255,255,255,0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, .06)",
      }}
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" sx={{ gap: "20px" }}>
          <Box sx={{ "&:hover": { cursor: "pointer" } }}>
            <img
              alt="Quilt Logo"
              width="135px"
              height="32px"
              src={logo}
              onClick={() => navigate(`/`)}
            />
          </Box>

          {/* Desktop navbar */}
          <Box
            sx={{
              display: {
                xs: "none",
                lg: "block",
              },
            }}
          >
            <Button variant="text" sx={buttonStyles}>
              Products
            </Button>
            <Button variant="text" sx={buttonStyles}>
              About
            </Button>
            <Button variant="text" sx={buttonStyles}>
              Social Impact
            </Button>
            <Button variant="text" sx={buttonStyles}>
              Resources
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          sx={{
            gap: "10px",
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          <Button variant="text" sx={buttonStyles}>
            Events
          </Button>
          <Button variant="text" sx={buttonStyles}>
            Quilt Health
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontSize: "13px",
              borderRadius: "10px",
              "&:hover": {
                transform: "translateY(-5px)",
                transition: "transform 0.2s ease-in",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>

        {/* Mobile navbar */}
        <Box
          sx={{
            display: {
              xs: "block",
              lg: "none",
            },
          }}
        >
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
