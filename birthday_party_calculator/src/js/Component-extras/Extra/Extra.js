import React, {useState, useEffect} from "react"


export const Extra =({price, name, className, onAdd, currentExtra}) => {
    
    // const styleOnClick =(x) =>{
    //     return parseFloat(currentPrice) === price ? x : null
    // }

    // const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    const [styleBtn, setStyleBtn] = useState();

    const handleAddAddition =(event) => {

        if(typeof onAdd !== "function" ) {
            return
        }

        if (currentExtra === event.target.value) {
            onAdd(0);
            setStyleBtn(false);
        } else {
            setStyleBtn(true);
            onAdd(event.target.value);
        }

               
        
    
    }



    const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    return (
            <div>
                <button
                value={price}
                onClick={handleAddAddition}
                style={{color: styleBtn ? "gold" : null, 
                background: styleBtn ? "olivedrab" : null,
                boxShadow: styleBtn ? boxShadowStyle : null}}
                className={className}>{price} zł - {name}</button>
            </div>
    )
}