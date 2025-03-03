import React from "react";
import ParticlesBackground from "./pages/Background";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <ParticlesBackground />
      {/* Other components can go here */}
      <Navbar />
    </div>
  );
};

export default App;
