// import React, {useState} from "react"

export const SelectedPrice =({price, onAdd, currentPrice}) => {

    // const [colorBtn, setColorBtn] = useState("");

    // const handleOnEnter =()=> {
    //     setColorBtn(prevState => !prevState)
    // }
    
    const styleOnClick =(x) =>{
        return parseFloat(currentPrice) === price ? x : null
    }

    const boxShadow = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    return (
            <div>
                <button
                value={price}
                onClick={event => onAdd(event.target.value)}
                // onMouseEnter={handleOnEnter}  
                style={{
                        backgroundColor: styleOnClick("purple"),
                        color: styleOnClick("yellow"),
                        transform: styleOnClick("none"),
                        boxShadow: styleOnClick(boxShadow),
                    }}
                className={
                    "button"
                }>{price} zł</button>
            </div>
    )
}