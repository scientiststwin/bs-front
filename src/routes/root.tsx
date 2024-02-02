import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const AppRouter = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
]);

export default AppRouter;
