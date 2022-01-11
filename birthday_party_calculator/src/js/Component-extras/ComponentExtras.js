import { Extra } from './Extra/Extra'
import { ExtraBaloons } from './Extra-baloons/ExtraBaloons';
import React, {useState, useEffect} from "react"

export const ComponentExtras =() => {
    
    // const styleOnClick =(x) =>{
    //     return parseFloat(currentPrice) === price ? x : null
    // }

    // const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"


    const extra = {
        assistant: {
            price: 100,
            title: "Asystent urodzin",
        },
        bouquet: {
            1: {
                price: 30,
                balloon: "1 bukiety",
            },
            2: {
                price: 50,
                balloon: "2 bukiety",
            },
            3: {
                price: 70,
                balloon: "3 bukiety",
            },
        },
        numberBaloon: {
            price: 30,
            title: "Balon cyfra na powietrze",
        },

    }

    const [extraPrice, setExtraPrice] = useState()

    const addExtras =(extraValue)=> {
        setExtraPrice(extraValue)
    }

    const [extraPriceBaloons, setExtraPriceBaloons] = useState()
    
    const addExtrasBaloons =(extraValue)=> {
        setExtraPriceBaloons(extraValue)
    }

    return (
            <>
                <div className={"assistant"}>
                    <Extra price={extra.assistant.price} name={extra.assistant.title} className="btn-assistant" onAdd={addExtras} currentExtra={extraPrice}/>
                </div>
                <div className="bouquet">
                    <h3 className={"bouquet-title"}>BUKIETY BALONOWE</h3>
                    <div className={"bouquet-btns"}>
                        <div className="btn-bouquet">
                            <ExtraBaloons price={extra.bouquet[1].price} name={extra.bouquet[1].balloon} className="btn-baloons" onAdd={addExtrasBaloons} currentExtra={extraPriceBaloons}/>
                        </div>
                        <div className="btn-bouquet">
                            <ExtraBaloons price={extra.bouquet[2].price} name={extra.bouquet[2].balloon} className="btn-baloons" onAdd={addExtrasBaloons} currentExtra={extraPriceBaloons}/>
                        </div>
                        <div className="btn-bouquet">
                            <ExtraBaloons price={extra.bouquet[3].price} name={extra.bouquet[3].balloon} className="btn-baloons" onAdd={addExtrasBaloons} currentExtra={extraPriceBaloons}/>
                        </div>  
                    </div>
                </div>
                <div className={"numberBaloon"}>
                    <Extra price={extra.numberBaloon.price} name={extra.numberBaloon.title} className="btn-number" onAdd={addExtras} currentExtra={extraPrice}/>
                </div>
            </>
    )
}