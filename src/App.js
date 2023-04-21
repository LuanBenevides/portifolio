import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projetos from "./components/Projetos/Projetos";
import Sobre from "./components/Sobre/Sobre";

function CenterApp( {emExibicao}) {
  
  if(emExibicao == 'banner') {
    return <Banner />
  }else if(emExibicao == 'projetos') {
    return <Projetos /> 
  }else if(emExibicao == 'sobre') {
    return <Sobre />
  }
}

function App() {
  const [emExibicao, setEmExibicao] = useState('banner');

  return (
    <div>
      <Header setEmExibicao={setEmExibicao} emExibicao={emExibicao}/>
      <CenterApp emExibicao={emExibicao}/>
      <Footer />
    </div>
  );
}

export default App;
