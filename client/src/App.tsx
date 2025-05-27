import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Genders from "./pages/gender/Genders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Genders />,
  },
  {
    path: "/gender/edit",
    element: <Genders/>,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
