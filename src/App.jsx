import { useState } from 'react';
import Header from './componentes/Header';
import Article from './componentes/Article';
import Creation from './componentes/Creation';
import Footer from './componentes/Footer';
import './App.sass'

function App() {
  const [ openMode, setOpenMode ] = useState(false);

    const alterMenu = () => {
        setOpenMode(!openMode)
    }  

  return (
    <div className="App">
      <Header alterMenu={alterMenu} openMode={openMode}/>
      <Article />
      <Creation />
      <Footer />
    </div>
  )
}

export default App
