import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      }
    ]
  },
]);

export default router;