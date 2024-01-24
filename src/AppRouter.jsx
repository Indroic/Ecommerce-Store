import React from "react";
import { AppRoutes } from "./app/routes/AppRoutes";
import { Routes, Route } from "react-router-dom";
import "./main.css";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import { SearchProvider } from "./app/context/SearchContext";
import "animate.css";
import "../src/styles/css/app.css";
import { FavsProvider } from "./app/context/FavsProvider";

export const AppRouter = () => {
  return (
    <SearchProvider>
      <FavsProvider>
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
        </Routes>
      </FavsProvider>
    </SearchProvider>
  );
};
