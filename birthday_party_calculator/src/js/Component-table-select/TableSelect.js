import React, {useState, useEffect} from "react"
import {SelectedPrice} from './SelectedPrice/SelectedPrice';
import Slider from 'react-smooth-range-input';

import { countTotalTableSelect } from "./functions";


export const ComponentTableSelect =({numOfkids}) => {
    
  const [pricePerKid, setPricePerKid] = useState('');
  const [numberOfKids, setNumberOfKids] = useState('7');
  const [minNumSlider, setMinNumSlider] = useState('7');
  const [total, setTotal] = useState('0');
  const [showSliderMain, setShowSliderMain] = useState('')



  const showSlider = (price) => {
    if (price === "45") {
      setMinNumSlider(8)
      // setShowSliderMain(true);
      if(numberOfKids === '7'){
      setNumberOfKids(8);
      }
    } else {
      setMinNumSlider(7)
      if(minNumSlider === 8 && numberOfKids === 8) {
        setNumberOfKids(7);
      }
      // setNumberOfKids(8)
      // setShowSliderMain(false);
      // if(numberOfKids === 8) {
      //   setMinNumSlider(7);
      // }
    }
  }

  useEffect (() => {
    showSlider(pricePerKid);
    // console.log(pricePerKid, numberOfKids);
  }, [pricePerKid, numberOfKids, minNumSlider]);


  const prices = {
    week: {
      price: 38,
      title: "Od poniedziałku do czwartku",
      min: '( 7 - min. liczba dzieci )'
    },
    friday: {
      price: 42,
      title: "Piątek",
      min: '( 7 - min. liczba dzieci )'
    },
    weekend: {
      price: 45,
      title: "Sobota, niedziela i święta",
      min: '( 8 - min. liczba dzieci )'
    }
  }

  numOfkids(numberOfKids, pricePerKid);

  const setBtn = (currentPrice) => {
    setPricePerKid(currentPrice)
  };

  const handleNumberOfKids =(selectedNumber) => {
    setNumberOfKids(selectedNumber);
    
  };

  
  
  useEffect (()=> {

    countTotalTableSelect(numberOfKids, pricePerKid, setTotal, setInfo, setText);
 

  },[numberOfKids, pricePerKid, minNumSlider])

  
  const [info, setInfo] = useState(true);
  const [text, setText] = useState('')

    return (
            <>
            <div>
              <p className="title-header">Wybierz dzień tygodnia:</p>
            </div>
            <div className="selectedPrice">
              <div>
                <SelectedPrice price={prices.week.price} title={prices.week.title} min={prices.week.min} onAdd={setBtn} currentPrice={pricePerKid}/>
              </div>
              <div>
                 <SelectedPrice price={prices.friday.price} title={prices.friday.title} min={prices.friday.min} onAdd={setBtn} currentPrice={pricePerKid}/>
              </div>
              <div>
                <SelectedPrice price={prices.weekend.price} title={prices.weekend.title} min={prices.weekend.min} onAdd={setBtn} currentPrice={pricePerKid}/>
              </div>
            </div>
            <div className="info-promotion"> 
              {info ? <p className="info-promotion-text">{text}</p> : null}
            </div> 
            <div className="count">
              <div>
                <p className="slider-title">Wybierz liczbę dzieci:</p>
              </div>
              <div className="slider">
                <Slider value={numberOfKids} min={minNumSlider} max={30} onChange={handleNumberOfKids}/>
              </div>       
              {/* {
              showSliderMain ? 
            <div className="slider">
              <Slider value={numberOfKids} min={8} max={30} onChange={handleNumberOfKids}/>
            </div> 
            :
            <div className="slider">
              <Slider value={numberOfKids} min={7} max={30} onChange={handleNumberOfKids}/>
              </div> 
            } */}
            </div>
            {/* <div className="count">
              <div className="slider">
                <h3 className="slider-title">Koszt: {total} zł</h3>
              </div>     
            </div> */}    
            </>
    )
}
