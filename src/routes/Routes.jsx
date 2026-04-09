import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/homepage/books/Books";
import ErrorPage from "../pages/errorpage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: "/books",

        element: <Books></Books>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
]);
