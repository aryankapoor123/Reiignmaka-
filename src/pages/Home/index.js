import React from "react";

import Info from "../../components/Info";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Collage from "../../components/Collage";
import "./Home.css";

export default function Home() {
  return (
    <div className="root">
      <Header />
      <main className="content">
        <Info />
        <span className="mask">
          <img src="mask.png" />
        </span>
        <Collage />
      </main>
      <Footer />
    </div>
  );
}
