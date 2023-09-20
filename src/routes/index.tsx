import { lazy } from "react";

const HomePage = lazy(() => import("../views/HomePage"));
const indexRoutes = [
  {
    path: "",
    name: "Home Page",
    components: <HomePage />,
    exact: true,
  },
];

export default indexRoutes;
