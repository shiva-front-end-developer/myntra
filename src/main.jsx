import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import "./App.css";
import Bag from "./components/Bag.jsx";
import Home from "./routes/Home.jsx";
import Men from "./products/Men.jsx";
import Women from "./products/Women.jsx";
import Kids from "./products/Kids.jsx";
import HomeLiving from "./products/HomeLiving.jsx";
import Beauty from "./products/Beauty.jsx";
import Studio from "./products/Studio.jsx";
import store from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/bag", element: <Bag /> },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/home/living",
        element: <HomeLiving />,
      },
      {
        path: "/beauty",
        element: <Beauty />,
      },
      {
        path: "/studio",
        element: <Studio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
