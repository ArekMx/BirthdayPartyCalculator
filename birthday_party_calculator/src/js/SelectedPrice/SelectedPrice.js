

export const SelectedPrice =({price, onAdd, currentPrice}) => {
    
    const styleOnClick =(x) =>{
        return parseFloat(currentPrice) === price ? x : null
    }

    const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"

    return (
            <div>
                <button
                value={price}
                onClick={event => onAdd(event.target.value)}
                style={{
                        backgroundColor: styleOnClick("purple"),
                        color: styleOnClick("yellow"),
                        transform: styleOnClick("none"),
                        boxShadow: styleOnClick(boxShadowStyle)
                    }}
                className={
                    "button"
                }>{price} zł</button>
            </div>
    )
}