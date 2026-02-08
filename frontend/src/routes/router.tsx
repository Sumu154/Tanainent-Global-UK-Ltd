import { createBrowserRouter } from "react-router";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div> Hello div </div>,
    children: [
    ]
  },
]);

export default router;