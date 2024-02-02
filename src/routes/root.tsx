import { createBrowserRouter } from "react-router-dom";
import Create from '../pages/create/create';
import Home from "../pages/home/home";
import Edit from "../pages/edit/edit";

const AppRouter = createBrowserRouter([
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit/:bookId",
    element: <Edit />,
  },
]);

export default AppRouter;
