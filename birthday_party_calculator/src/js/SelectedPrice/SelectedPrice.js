// import React, {useState} from "react"

export const SelectedPrice =({price, onAdd}) => {

    // const [colorBtn, setColorBtn] = useState("");

    // const handleOnEnter =()=> {
    //     setColorBtn(prevState => !prevState)
    // }

    // console.log(onAdd);

    const sendPriceUp = (event) => {
        // console.log(event.target.value);
        onAdd(event.target.value)
    }

    return (
            <div>
                {/* <button onMouseEnter={handleOnEnter} style={{backgroundColor: parseFloat(currentPackage) === price ? "#fff500" : colorBtn,
                    color: parseFloat(currentPackage) === price ? "#00aa00" : colorBtn }}
                        value={price} onClick={event => onAdd(event.target.value) }
                        className={"selected-button"}>{price}zł</button> */}
                <button
                value={price}
                // onClick={event => onAdd(event.target.value)}
                onClick={sendPriceUp}
                // onMouseEnter={handleOnEnter}  
                style={{cursor: "pointer"}}>{price}</button>
            </div>
    )
}

// <button style={{color: colorBtn2? "red" : "black"}} value={secondWeekPrice} onClick={event => {setPacage(event.target.value);setColorBtn2("red");}} className={"selected-button"}>399zł</button>
