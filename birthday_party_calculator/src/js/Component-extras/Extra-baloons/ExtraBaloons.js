import React, {useState, useEffect} from "react"


export const ExtraBaloons =({price, name, className, onAdd, currentExtra}) => {
    
    const styleOnClick =(x) =>{
        return parseFloat(currentExtra) === price ? x : null
    }

    const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    const [outlineBtn, setOutlineBtn] = useState();

    const handleAddAddition =(event) => {

        if(typeof onAdd !== "function" ) {
            return
        }
        onAdd(event.target.value);
        
        setOutlineBtn(true);
        console.log("działa");
    
    }



    return (
            <div>
                <button
                value={price}
                onClick={handleAddAddition}
                style={{
                    backgroundColor: styleOnClick("purple"),
                    color: styleOnClick("yellow"),
                    transform: styleOnClick("none"),
                    boxShadow: styleOnClick(boxShadowStyle)
                }}
                className={className}>{price} zł - {name}</button>
            </div>
    )
}