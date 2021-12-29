import React, {useState, useEffect} from "react"
import Slider from 'react-smooth-range-input';

export const ComponentAtractions =() => {
    
    const [numberOfKids, setNumberOfKids] = useState('');

    return (
        <>
        <div className="atractions">
            <h1 className="slider-title">Ustaw ilość dzieci które skorzystają z poniższych atrakcji (płatne od dziecka):</h1>
            <div className="sliders">
            <div className="atractions-slider">
                <h1 className="slider-title pigtails">Warkoczyki - 12 zł </h1>
                <Slider value={0} min={0} max={30} onChange={numberOfKids} />
            </div>
            <div className="atractions-slider">
                <h1 className="slider-title face-painting ">Malowanie twarzy - 10 zł</h1>
                <Slider value={0} min={0} max={30} onChange={numberOfKids} />
            </div>
            <div className="atractions-slider">
                <h1 className="slider-title tatoos">Tatuaże - 8 zł</h1>
                <Slider value={0} min={0} max={30} onChange={numberOfKids} />
            </div>
            <div className="atractions-slider">
                <h1 className="slider-title baloons">Balonik modelowany (figurka zoo) - 4 zł</h1>
                <Slider value={0} min={0} max={30} onChange={numberOfKids} />
            </div>
            </div> 
        </div> 
        </>
    )
}