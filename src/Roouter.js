import { useRoutes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import Portfolios from "./Pages/PortfoliosPage";

const Roouter = () => {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/resume", element: <ResumePage /> },
    { path: "/blogs", element: <BlogsPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/portfolios", element: <Portfolios /> },
  ]);
  return element;
};

export default Roouter;
