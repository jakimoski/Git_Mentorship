import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout/RootLayput";
import Home from "../pages/Home/Home";
import Create from "../pages/Create/Create";
import { Error } from "../pages/404Page/404Page";
import { TUsers } from "../types/types";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "create",
        element: <Create />,
        loader: async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");

          if (!res) {
            console.log("No users found");
          } else {
            const resData = await res.json();
            const users: TUsers[] = resData.map((el: any) => ({
              id: el.id,
              name: el.name,
            }));
            return users;
          }
        },
      },
    ],
  },
]);
