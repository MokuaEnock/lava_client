import React from "react";
import Bar from "./bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "./userHome/UserHome";
export default function Home() {
  return (
    <BrowserRouter>
      <Bar />
      <Routes>
        <Route path="/home" element={<UserHome />} />
        <Route path="/profile" element={<UserHome />} />
        <Route path="/messages" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
}
