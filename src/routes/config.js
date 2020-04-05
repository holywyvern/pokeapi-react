import HomeRoute from "./HomeRoute";
import SpeciesRoute from "./SpeciesRoute";
import NotFoundRoute from "./NotFoundRoute";

export default [
  {
    key: "home",
    exact: true,
    path: "/",
    component: HomeRoute,
  },
  {
    key: "error",
    exact: true,
    path: "/error",
    component: NotFoundRoute,
  },
  {
    key: "species",
    path: "/:id",
    component: SpeciesRoute,
  },
];
