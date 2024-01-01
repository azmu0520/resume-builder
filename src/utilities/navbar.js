import About from "../pages/About";
import Home from "../components/Home";
import Pricing from "../pages/Pricing";
import Templates from "../pages/Templates";
import Contact from "../pages/Contact";
export const data = [
  {
    id: 1,
    title: "Home",
    path: "/",
    Component: Home,
  },
  {
    id: 2,
    title: "About Us",
    path: "about-us",
    Component: About,
  },
  {
    id: 3,
    title: "Pricing",
    path: "pricing",
    Component: Pricing,
  },
  {
    id: 4,
    title: "Templates",
    path: "templates",
    Component: Templates,
  },
  {
    id: 5,
    title: "Contact",
    path: "contact",
    Component: Contact,
  },
];
