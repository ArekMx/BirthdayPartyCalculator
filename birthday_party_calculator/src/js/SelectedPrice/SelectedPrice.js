import React, {useState} from "react"

export const SelectedPrice =({price, onAdd, currentPrice}) => {

    const [colorBtn, setColorBtn] = useState("");

    const handleOnEnter =()=> {
        setColorBtn(prevState => !prevState)
        console.log(currentPrice);
        // console.log(price);
    }
    
    console.log(colorBtn);
    console.log(typeof(parseFloat(currentPrice)));
    console.log(typeof(price));
    
    return (
            <div>
                {/* <button onMouseEnter={handleOnEnter} style={{backgroundColor: parseFloat(currentPackage) === price ? "#fff500" : colorBtn,
                    color: parseFloat(currentPackage) === price ? "#00aa00" : colorBtn }}
                        value={price} onClick={event => onAdd(event.target.value) }
                        className={"selected-button"}>{price}zł</button> */}
                <button
                value={price}
                // onClick={event => onAdd(event.target.value)}
                onClick={event => onAdd(event.target.value)}
                onMouseEnter={handleOnEnter}  
                style={{backgroundColor: parseFloat(currentPrice) === price ? "red" : colorBtn,
                    color: parseFloat(currentPrice) === price ? "yellow" : colorBtn }}
                className={"selected-button"}>{price}</button>
            </div>
    )
}

// <button style={{color: colorBtn2? "red" : "black"}} value={secondWeekPrice} onClick={event => {setPacage(event.target.value);setColorBtn2("red");}} className={"selected-button"}>399zł</button>
