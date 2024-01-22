import React from "react";
import { AppRoutes } from "./app/routes/AppRoutes";
import { Routes, Route } from "react-router-dom";
import "./main.css";
import { AuthRoutes } from "./auth/routes/AuthRoutes";
import { SearchProvider } from "./app/context/SearchContext";
import '../public/src/styles/css/app.css'

export const AppRouter = () => {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </SearchProvider>
  );
};
