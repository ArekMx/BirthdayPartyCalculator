// import logo from './logo.svg';

import {SelectedPrice} from '../js/SelectedPrice/SelectedPrice'
import React, {useState, useEffect} from "react"
import Slider from 'react-smooth-range-input';

function App() {

  const [pricePerKid, setPricePerKid] = useState('');
  const [numberOfKids, setNumberOfKids] = useState('7');
  const [minNumSlider, setMinNumSlider] = useState('7');

  const [total, setTotal] = useState('0');

  const showSlider = (price) => {

    
    if (price === "44") {
      setMinNumSlider(8) 
    } else {
      setMinNumSlider(7)
    }
  }

  useEffect (() => {
    showSlider(pricePerKid);
  }, [pricePerKid]);

  

  // Ustaw cenę od poniedziałku do czwartku:
  const weekPrice = 38;

  // Ustaw cenę w piątek:
  const fridayPrice = 42;

  // Ustaw cenę w wekend:
  const weekedPrice = 44;

  const setBtn = (currentPrice) => {
    setPricePerKid(currentPrice)

  }

  const handleNumberOfKids =(selectedNumber) => {

    setNumberOfKids(selectedNumber)
  }

  return (
    <div className="App container">
      <header className="App-header">
        <table>
        <tbody>
          <tr>
            <th>Dni w tygodniu</th>
            <th>Własny barek</th>
          </tr>
          <tr>
            <th className={'week'}>Poniedziałek - czwartek</th>
            <th><SelectedPrice price={weekPrice} onAdd={setBtn}/></th>
          </tr>
          <tr>
            <th>piątek</th>
            <th><SelectedPrice price={fridayPrice} onAdd={setBtn}/></th>
          </tr>
          <tr>
            <th>sobota, niedziela i święta</th>
            <th><SelectedPrice price={weekedPrice} onAdd={setBtn}/></th>
          </tr>
          <tr>
            <th>Wybrałeś cenę:</th>
            <th>{pricePerKid}</th>
          </tr>
        </tbody>
        </table>
      </header>
      <section className="count">
        <div className="slider">
          <h1 style={{color: "yellow"}}>Wybierz liczbę dzieci:</h1>
          <Slider value={numberOfKids} min={minNumSlider} max={30} onChange={handleNumberOfKids} />
        </div>     
      </section>
      <section className="total">
        <div>
          <h1>{numberOfKids * pricePerKid} zł</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
