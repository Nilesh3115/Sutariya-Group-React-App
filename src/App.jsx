import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layouts/AppLayout";


import "./App.css";
import "./Media.css";


import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";



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
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      }]
  }

]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};


export default App;