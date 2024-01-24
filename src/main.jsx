import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Projects from "./routes/projects";
import About from "./routes/about";
import Contact from "./routes/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <p className="footer">CC BY-NC-SA 4.0 2022-PRESENT © Javier Rodriguez</p>
  </React.StrictMode>
);
