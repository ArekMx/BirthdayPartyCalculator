import React, {useState, useEffect} from "react"
import {SelectedPrice} from './SelectedPrice/SelectedPrice';
import Slider from 'react-smooth-range-input';

import { countTotalTableSelect } from "./functions";


export const ComponentTableSelect =({numOfkids}) => {
    
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
    // console.log(pricePerKid, numberOfKids);
  }, [pricePerKid]);


  const prices = {
    week: {
      price: 38,
      title: "Od poniedziałku do czwartku",
      min: '(7 - min.liczba dzieci)'
    },
    friday: {
      price: 42,
      title: "Piątek",
      min: '(7 - min.liczba dzieci)'
    },
    weekend: {
      price: 45,
      title: "Sobota, niedziela i święta",
      min: '(8 - min.liczba dzieci)'
    }
  }


  const setBtn = (currentPrice) => {
    setPricePerKid(currentPrice)
  };

  const handleNumberOfKids =(selectedNumber) => {
    setNumberOfKids(selectedNumber)
  };

  numOfkids(numberOfKids, pricePerKid);
  
  useEffect (()=> {

    countTotalTableSelect(numberOfKids, pricePerKid, setTotal, setInfo, setText);
 
  },[numberOfKids, pricePerKid])

  
  const [info, setInfo] = useState(true);
  const [text, setText] = useState('')

    return (
            <>
            <table>
                <tbody>
                    <tr>
                        <th><p className="title-header">Wybierz dzień tygodnia:</p></th>
                    </tr>
                    <tr>
                        <th><SelectedPrice price={prices.week.price} title={prices.week.title} min={prices.week.min} onAdd={setBtn} currentPrice={pricePerKid}/></th>
                    </tr>
                    <tr>
                        <th><SelectedPrice price={prices.friday.price} title={prices.friday.title} min={prices.friday.min} onAdd={setBtn} currentPrice={pricePerKid}/></th>
                    </tr>
                    <tr>
                        <th><SelectedPrice price={prices.weekend.price} title={prices.weekend.title} min={prices.weekend.min} onAdd={setBtn} currentPrice={pricePerKid}/></th>
                    </tr>
                </tbody>
            </table>
            <div className="count">
              <div className="slider">
                <p className="slider-title">Wybierz liczbę dzieci:</p>
                <Slider value={numberOfKids} min={minNumSlider} max={30} onChange={handleNumberOfKids}/>
              </div>     
            </div>
            <div className="count">
              <div className="slider">
                <h3 className="slider-title">Koszt: {total} zł</h3>
              </div>     
            </div>
            <div className="info-promotion"> 
              {info ? <h3>{text}</h3> : null}
            </div>     
            </>
    )
}
