import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout/RootLayput";
import Home from "../pages/Home/Home";
import Create from "../pages/Create/Create";
import { Error } from "../pages/404Page/404Page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
    ],
  },
]);
