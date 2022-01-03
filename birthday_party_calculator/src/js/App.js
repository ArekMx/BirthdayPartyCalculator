// import logo from './logo.svg';

import React, {useState, useEffect} from "react"

import { ComponentAtractions } from "../js/Component-atractions/ComponentAtractions";
import { ComponentTableSelect } from "./Component-table-select/TableSelect";

function App() {

  const [total, setTotal] = useState('0');


  const [totalAtractions, setTotalAtractions] = useState('')  

  const totalAll = (numOfKids, moneyPerKid) => {

    setTotal(numOfKids * moneyPerKid + totalAtractions)

  }

  const totalllAtractions = (totalAtractions) => {

    setTotalAtractions(totalAtractions)
    console.log(totalAtractions);
  }


  return (
    <div className="App container">
      <header className="App-header">
        <ComponentTableSelect numOfkids={totalAll}/>
      </header>
      <section>
        <ComponentAtractions onUp={totalllAtractions}/>
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
