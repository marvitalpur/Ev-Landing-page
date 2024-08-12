import React, { useEffect, useState } from 'react'
import Background from './components/background/background';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';


const App = () => {
  const heroData = [
    { text1: "Dive into", text2: "what you love " },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" }
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === heroData.length - 1 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval); 
  }, [heroData.length]);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  
  )
}

export default App;