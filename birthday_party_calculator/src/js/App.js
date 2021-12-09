// import logo from './logo.svg';
import '../scss/App.scss';
import {SelectedPrice} from '../js/SelectedPrice/SelectedPrice'
import React, {useState} from "react"

import Slider from 'react-smooth-range-input';

function App() {

  const [pricePerKid, setPricePerKid] = useState()

  // Ustaw cenę od poniedziałku do czwartku:
  const weekPrice = 38;

  // Ustaw cenę w piątek:
  const fridayPrice = 42;

  // Ustaw cenę w wekend:
  const weekedPrice = 44;

  const setBtn = (currentPrice) => {
    setPricePerKid(currentPrice)

  }

  return (
    <div className="App">
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
      <div>
        <Slider value={numberOfKids} min={1} max={30} onChange={handleNumberOfKids} />
      </div>
    </div>
  );
}

export default App;
