import { About } from "./components/About";
import { Clients } from "./components/Clients";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { HeroBox } from "./components/HeroBox";
import { WhatClientsSay } from "./components/WhatClientsSay";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBox />
      <About />
      <Clients />
      <WhatClientsSay />
      <Footer />
    </div>
  );
}

export default App;
