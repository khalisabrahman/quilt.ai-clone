import { Box } from "@mui/material";

import Hero from "../global/Hero";
import Products from "../global/Products";
import Dashboard from "../global/Dashboard";
import RecentArticles from "../global/RecentArticles";
import Footer from "../global/Footer";

const Home = () => {
  return (
    <Box>
      <Hero></Hero>
      <Products></Products>
      <Dashboard></Dashboard>
      <RecentArticles></RecentArticles>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
