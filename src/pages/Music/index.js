import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./music.css"

let appleMusic = [
    'https://embed.music.apple.com/us/album/solid-feat-truthknocks-big-preme-medallion/1619563637?i=1619563638',
    'https://embed.music.apple.com/us/album/forever-feat-mista-j-mic-pen/1574825033?i=1574825035',
    'https://embed.music.apple.com/us/album/timeline-feat-big-preme-chiddy-sivraj-truthknox/1614963167?i=1614963169',
    'https://embed.music.apple.com/us/album/why-i-hustle-feat-truth-knocks-kico-sam/1638006396?i=1638006397',
    'https://embed.music.apple.com/us/album/love-sutra/1562421327?i=1562421334',
    'https://embed.music.apple.com/us/album/osmosis/1566418973?i=1566418976',
]

export default function Music() {
    
  return (
    <div className="music">
      <Header />
      <main>
        {
            appleMusic.map(e => {
               return <iframe style={{padding: "1rem",height:'165px'}} allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={e}></iframe>
            })
        }
        </main>
      <Footer />
    </div>
  );
}
