import React, {useState, useEffect} from "react"
import {SelectedPrice} from './SelectedPrice/SelectedPrice';
import Slider from 'react-smooth-range-input';


export const ComponentTableSelect =({numOfkids}) => {
    
  const [pricePerKid, setPricePerKid] = useState('');
  const [numberOfKids, setNumberOfKids] = useState('7');
  const [minNumSlider, setMinNumSlider] = useState('7');

  const showSlider = (price) => {
    if (price === "44") {
      setMinNumSlider(8) 
    } else {
      setMinNumSlider(7)
    }
  }

  useEffect (() => {
    showSlider(pricePerKid);
    // console.log(pricePerKid, numberOfKids);
  }, [pricePerKid]);


  // Ustaw cenę od poniedziałku do czwartku:
  const weekPrice = 38;

  // Ustaw cenę w piątek:
  const fridayPrice = 42;

  // Ustaw cenę w wekend:
  const weekedPrice = 44;

  const setBtn = (currentPrice) => {
    setPricePerKid(currentPrice)
  };

  const handleNumberOfKids =(selectedNumber) => {
    setNumberOfKids(selectedNumber)
  };

  numOfkids(numberOfKids, pricePerKid);

  const minNum = "min.liczba dzieci"
    return (
            <>
            <table>
                <tbody>
                    <tr>
                        <th>Dni w tygodniu</th>
                        <th>Wybierz kwotę:</th>
                    </tr>
                    <tr>
                        <th className={'cell'}>Poniedziałek - czwartek</th>
                        <th><SelectedPrice price={weekPrice} onAdd={setBtn} currentPrice={pricePerKid}/></th>
                        <th>7-{minNum}</th>
                    </tr>
                    <tr>
                        <th>piątek</th>
                        <th><SelectedPrice price={fridayPrice} onAdd={setBtn} currentPrice={pricePerKid}/></th>
                        <th>7-{minNum}</th>
                    </tr>
                    <tr>
                        <th>sobota, niedziela i święta</th>
                        <th><SelectedPrice price={weekedPrice} onAdd={setBtn} currentPrice={pricePerKid}/></th>
                        <th>8-{minNum}</th>
                    </tr>
                </tbody>
            </table>
            <div className="count">
              <div className="slider">
                <h3 className="slider-title">Wybierz liczbę dzieci:</h3>
                <Slider value={numberOfKids} min={minNumSlider} max={30} onChange={handleNumberOfKids} />
              </div>     
            </div>
            <div className="count">
              <div className="slider">
                <h3 className="slider-title">Koszt: {numberOfKids*pricePerKid} zł</h3>
              </div>     
            </div>     
            </>
    )
}