// import logo from './logo.svg';

import React, {useState, useEffect} from "react"

import { ComponentAtractions } from "../js/Component-atractions/ComponentAtractions";
import { ComponentTableSelect } from "./Component-table-select/TableSelect";
import { ComponentExtras } from './Component-extras/ComponentExtras';


function App() {

  const [total, setTotal] = useState('0');


  const [totalAtractions, setTotalAtractions] = useState('');
  const [totalExtras, setTotalExtras] = useState('');  
  
  // console.log(totalExtras);

  const totalAll = (numOfKids, moneyPerKid) => {

    let productOfNumPrice = numOfKids * moneyPerKid;
    let sumOfTotalAtractExtras = totalAtractions + totalExtras;

    if (numOfKids > 10 && moneyPerKid === "38") {
      setTotal((productOfNumPrice - moneyPerKid) + sumOfTotalAtractExtras);
      if (numOfKids > 22) {
        setTotal((productOfNumPrice - moneyPerKid*2) + sumOfTotalAtractExtras);
      }
    } else if (numOfKids > 10 && moneyPerKid === "42") {
      setTotal((productOfNumPrice - moneyPerKid) + sumOfTotalAtractExtras);
      if (numOfKids > 22) {
        setTotal((productOfNumPrice - moneyPerKid*2) + sumOfTotalAtractExtras);
      }
    } else {
      setTotal(productOfNumPrice + sumOfTotalAtractExtras);
    }

  }


  return (
    <div className="App container">
      <header className="App-header">
        <ComponentTableSelect numOfkids={totalAll}/>
      </header>
      <section>
        <ComponentAtractions onUp={x=>setTotalAtractions(x)}/>
      </section>
      <section className="extras">
        <ComponentExtras onAddTotalExtras={x=>setTotalExtras(x)}/>
      </section>

      <section className="total">
        <div className="total__text">
          <h1 >Łączna kwota imprezy urodzinowej:</h1>
        </div>
        <div className="total__price">
          <h1>{total} zł</h1>
        </div>
      </section>
      
    </div>
  );
}

export default App;
