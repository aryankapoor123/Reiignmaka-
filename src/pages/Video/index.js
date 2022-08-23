import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css"

const video = [
    "https://www.youtube.com/embed/BSbRDQVIaq8",
    "https://www.youtube.com/embed/UJFuMLL4fHs",
    "https://www.youtube.com/embed/KcpH2zHv6c4",
    "https://www.youtube.com/embed/S7YESoCdkEU",
    "https://www.youtube.com/embed/0AdTApcu0pE",
    "https://www.youtube.com/embed/OT7hFWj24mA",
    "https://www.youtube.com/embed/ssSHSzrKriY",
    "https://www.youtube.com/embed/LVZ8tdnhp9A",
    "https://www.youtube.com/embed/o6pqUG2n4L0"
]

export default function Music() {
    
  return (
    <div className="video">
      <Header />
        <main>
            {
                video.map(e => {
                    return <iframe src={e} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                })
            }
        
        </main>
      <Footer />
    </div>
  );
}