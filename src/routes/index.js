import React from "react";
import { useRoutes } from "react-router-dom";
import Calculator from "../components/Calculator";
import ProductsPage from "../components/ProductsPage";

export default function Router() {
  return useRoutes([
    { path: "/", element: <ProductsPage /> },
    { path: "/calculator", element: <Calculator /> },
  ]);
}
