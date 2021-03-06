// import logo from './logo.svg';

import React, {useState} from "react"

import { ComponentAtractions } from "../js/Component-atractions/ComponentAtractions";
import { ComponentTableSelect } from "./Component-table-select/TableSelect";
import { ComponentExtras } from './Component-extras/ComponentExtras';
import logo from "../../src/images/logo.svg";
import calculator from "../../src/images/calculator.svg";


function App() {

  const [total, setTotal] = useState('0');

  const [totalAtractions, setTotalAtractions] = useState('');
  const [totalExtras, setTotalExtras] = useState('');  
  const [extraPriceEkoTableware, setExtraPriceEkoTableware] = useState('');

  const totalAll = (numOfKids, moneyPerKid) => {
    // console.log(numOfKids);

    let costPerKid = Number(moneyPerKid) + Number(extraPriceEkoTableware);
    let productOfNumPrice = numOfKids * costPerKid;
    let sumOfTotalAtractExtras = totalAtractions + totalExtras;

    if (numOfKids > 9 && moneyPerKid === "38") {
        setTotal((productOfNumPrice - costPerKid) + sumOfTotalAtractExtras);
        if (numOfKids > 21) {
          setTotal((productOfNumPrice - costPerKid*2) + sumOfTotalAtractExtras);
        }
      } else if (numOfKids > 9 && moneyPerKid === "42") {
        setTotal((productOfNumPrice - costPerKid) + sumOfTotalAtractExtras);
        if (numOfKids > 21) {
          setTotal((productOfNumPrice - costPerKid*2) + sumOfTotalAtractExtras);
        }
      } else {
        setTotal(productOfNumPrice + sumOfTotalAtractExtras);
      }
  }

  const [showAll, setShowAll] = useState(false)

  const handleShow =(value)=> {
    setShowAll(value)
  };

  return (
    <div className="App container">
      <div className='logos'>
        <img className={"logo"} src={logo} alt={"Sala_Zabaw_Piotruś"}/>
        <img className={"calculator"} src={calculator} alt={"Kalkulator_urodzin"}/>
      </div>
      <header className="App-header">
        <ComponentTableSelect numOfkids={totalAll} onShow={handleShow}/>
      </header>
      {
        showAll ? (
        <>
        <section>
        <ComponentAtractions onUp={x=>setTotalAtractions(x)}/>
        </section>
        <section className="extras">
        <ComponentExtras onAddTotalExtras={x=>setTotalExtras(x)} onAddTableware={x=>setExtraPriceEkoTableware(x)}/>
        </section>

        <section className="total">
        <div className="total__text">
          <h1 >Łączny koszt imprezy urodzinowej:</h1>
        </div>
        <div className="total__price">
          <h1>{total} zł</h1>
        </div>
        </section>
        </>  
        ) : null
      }
    </div>
  );
}

export default App;
