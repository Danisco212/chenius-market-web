import { About } from "./components/About";
import { Clients } from "./components/Clients";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { HeroBox } from "./components/HeroBox";
import RequestDemo from "./components/RequestDemo";
import Services from "./components/Services";
import { WhatClientsSay } from "./components/WhatClientsSay";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBox />
      <RequestDemo />
      <Services />
      <div style={{margin: 'auto', width: '85%', marginBottom: 10, height:1, backgroundColor: 'gray'}} />
      <About />
      <Clients />
      <WhatClientsSay />
      <Footer />
    </div>
  );
}

export default App;
