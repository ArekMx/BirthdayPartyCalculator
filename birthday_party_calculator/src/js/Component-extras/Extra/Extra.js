
export const Extra =({price, name, className}) => {
    
    // const styleOnClick =(x) =>{
    //     return parseFloat(currentPrice) === price ? x : null
    // }

    // const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    console.log(name);
    return (
            <div>
                <button
                // value={price}
                // onClick={event => onAdd(event.target.value)}
                // style={{
                //         backgroundColor: styleOnClick("purple"),
                //         color: styleOnClick("yellow"),
                //         transform: styleOnClick("none"),
                //         boxShadow: styleOnClick(boxShadowStyle)
                //     }}
                className={className}>{price} zł - {name}</button>
            </div>
    )
}