import React from "react";
import Layout from "../Layout";
import AllPage from "../pages/all";
import YourPage from "../pages/your";
import BlockedPage from "../pages/blocked";
import { Route, Routes, Navigate } from "react-router-dom";

function RouterContainer() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/all" />} />
        <Route path="/all" element={<AllPage />} />
        <Route path="/your" element={<YourPage />} />
        <Route path="/blocked" element={<BlockedPage />} />
      </Route>
    </Routes>
  );
}

export default RouterContainer;
