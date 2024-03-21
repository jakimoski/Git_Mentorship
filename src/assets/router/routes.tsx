import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout/RootLayput";
import Home from "../pages/Home/Home";
import Create from "../pages/Create/Create";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
    ],
  },
]);
