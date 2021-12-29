// import logo from './logo.svg';

import {SelectedPrice} from '../js/SelectedPrice/SelectedPrice'
import React, {useState, useEffect} from "react"
import Slider from 'react-smooth-range-input';
import { ComponentAtractions } from "../js/Component-atractions/Component-atractions";

function App() {

  const [pricePerKid, setPricePerKid] = useState('');
  const [numberOfKids, setNumberOfKids] = useState('7');
  const [minNumSlider, setMinNumSlider] = useState('7');

  // const [total, setTotal] = useState('0');

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

////// Component Atractions
const [priceTotalAtractions, setPriceTotalAtractions] = useState('')

const totalAtractions = (totalAtractions) => {
      setPriceTotalAtractions(totalAtractions)
}

console.log(priceTotalAtractions);


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
            <th className={'cell'}>Poniedziałek - czwartek</th>
            <th><SelectedPrice price={weekPrice} onAdd={setBtn} currentPrice={pricePerKid}/></th>
            <th>Min. liczba dzieci - 7</th>
          </tr>
          <tr>
            <th>piątek</th>
            <th><SelectedPrice price={fridayPrice} onAdd={setBtn} currentPrice={pricePerKid}/></th>
            <th>Min. liczba dzieci - 7</th>
          </tr>
          <tr>
            <th>sobota, niedziela i święta</th>
            <th><SelectedPrice price={weekedPrice} onAdd={setBtn} currentPrice={pricePerKid}/></th>
            <th>Min. liczba dzieci - 8</th>
          </tr>
        </tbody>
        </table>
      </header>
      <section className="count">
        <div className="slider">
          <h1 className="slider-title">Wybierz liczbę dzieci:</h1>
          <Slider value={numberOfKids} min={minNumSlider} max={30} onChange={handleNumberOfKids} />
        </div>     
      </section>
      <section>
        <ComponentAtractions onUp={totalAtractions}/>
      </section>
      <section className="total">
        <div className="total__text">
          <h1 >Łączna kwota imprezy urodzinowej:</h1>
        </div>
        <div className="total__price">
          <h1>{numberOfKids * pricePerKid} zł</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
