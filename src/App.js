import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Video from "./pages/Video"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<Music />} />
      <Route path="/video" element={<Video />} />
    </Routes>
  );
}

