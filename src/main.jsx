import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/errorPage/errorPage";
import Landing from "./pages/Landing/Landing";
import Start from "./pages/Start/Start";
import EnterMobile from "./pages/Start/pages/EnterMobile/EnterMobile";
import EnterOTP from "./pages/Start/pages/EnterOTP/EnterOTP";
import PrerecordInstructions from "./pages/Start/pages/PrerecordInstructions/PrerecordInstructions";
import Record from "./pages/Record/Record";
import HandlePC from "./HandlePC";
import Result from "./pages/Result/Result";
// Primereact
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/soho-light/theme.css";
import "primeicons/primeicons.css";

const isMobile = window.matchMedia("(max-width: 767px)").matches;

const pcRouter = createBrowserRouter([
  {
    path: "/",
    element: <HandlePC />,
    errorElement: <ErrorPage />,
  },
]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/start",
    element: <Start />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/start/step-1",
        element: <EnterMobile />,
      },
      {
        path: "/start/step-2",
        element: <EnterOTP />,
      },
      {
        path: "/start/step-3",
        element: <PrerecordInstructions />,
      },
    ],
  },
  {
    path: "/record",
    element: <Record />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={isMobile ? router : pcRouter} />
  </React.StrictMode>
);
