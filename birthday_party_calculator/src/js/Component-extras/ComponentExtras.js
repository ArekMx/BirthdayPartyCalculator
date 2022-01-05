import { Extra } from './Extra/Extra'

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

    return (
            <>
                <div className={"assistant"}>
                    <Extra price={extra.assistant.price} name={extra.assistant.title} className="btn-assistant"/>
                </div>
                <div className="bouquet">
                    <h3 className={"bouquet-title"}>BUKIETY BALONOWE</h3>
                    <div className={"bouquet-btns"}>
                        <div className="btn-bouquet">
                            <Extra price={extra.bouquet[1].price} name={extra.bouquet[1].balloon} className="btn-baloons"/>
                        </div>
                        <div className="btn-bouquet">
                            <Extra price={extra.bouquet[2].price} name={extra.bouquet[2].balloon} className="btn-baloons"/>
                        </div>
                        <div className="btn-bouquet">
                            <Extra price={extra.bouquet[3].price} name={extra.bouquet[3].balloon} className="btn-baloons"/>
                        </div>  
                    </div>
                </div>
                <div className={"numberBaloon"}>
                    <Extra price={extra.numberBaloon.price} name={extra.numberBaloon.title} className="btn-number"/>
                </div>
            </>
    )
}