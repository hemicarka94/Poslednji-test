import React, {  useState } from 'react';
import ReactDOM from 'react-dom';
import { Ispis } from './Components/Ispis';
import { Odabir } from './Components/Odabir';


const App = () => {
    const [ispis, setIspis] = useState([])
    const [kontinent, setKontinent] = useState([])
    
  return(
    <>
    <Odabir  kontinent={kontinent} setKontinent={setKontinent} setIspis={setIspis} ispis={ispis}/>
    <br></br>
    <Ispis ispis={ispis} setIspis={setIspis}/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


