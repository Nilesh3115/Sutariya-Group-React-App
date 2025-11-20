import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layouts/AppLayout";


import "./App.css";
import "./Media.css";


import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ErrorPage } from "./pages/ErrorPage";
import { Project } from "./pages/Project";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "services",
        element: <Services />,
      },]
  }

]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};


export default App;