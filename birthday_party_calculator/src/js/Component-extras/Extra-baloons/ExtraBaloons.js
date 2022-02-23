import React, {useState, useEffect} from "react"


export const ExtraBaloons =({price, name, className, onAdd, currentExtra}) => {
    

    const styleOnClick =(x) =>{
        return parseFloat(currentExtra) === price ? x : null
        
    }

    const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    // const [style, setStyle] = useState(false)

    const handleAddAddition =(event) => {

        if(typeof onAdd !== "function" ) {
            return
        }
        if (currentExtra === event.target.value) {
            onAdd(0);
        } else {
            onAdd(event.target.value);
        }
    }



    return (
            <div>
                <button
                value={price}
                onClick={handleAddAddition}
                style={{
                    backgroundColor: styleOnClick("#002486"),
                    color: styleOnClick("yellow"),
                    transform: styleOnClick("none"),
                    boxShadow: styleOnClick(boxShadowStyle)
                }}
                className={className}>{price} zł - {name}
                </button>
                <span  className="center label__checkbox"
                        style={{
                            backgroundColor: (parseFloat(currentExtra) === price ? "#00d478" : "white"),
                            border: (parseFloat(currentExtra) === price ? "4px solid #00d478" : "5px solid rgba(0,0,0,0.1)"),
                            color: styleOnClick('white')
                            // opacity: (parseFloat(currentExtra) === price ? "1" : "5px solid rgba(0,0,0,0.1)")
                        }}
                >
                    <i className="fa fa-check icon"
                        style={{
                            backgroundColor: styleOnClick('white')
                        }}
                   ></i>
                </span>
            </div>
    )
}