import React, {useState, useEffect} from "react"


export const Extra =({price, name, className, onAdd}) => {
    
    // const styleOnClick =(x) =>{
    //     return parseFloat(currentPrice) === price ? x : null
    // }

    // const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    const [colorBtn, setColorBtn] = useState(false);

    const handleAddAddition =(event) => {

        if(typeof onAdd !== "function" ) {
            return
        }
        onAdd(event.target.value, price);

        setColorBtn(true);

    }


    console.log(name);
    return (
            <div>
                <button
                value={price}
                onClick={handleAddAddition}
                // style={{color: colorBtn ? "gold" : "#6a1e50", backgroundColor: colorBtn ? "#6a1e50" : "gold"}}
                className={className}>{price} zł - {name}</button>
            </div>
    )
}