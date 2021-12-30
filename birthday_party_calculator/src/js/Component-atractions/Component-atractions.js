import React, {useState, useEffect} from "react"
import Slider from 'react-smooth-range-input';

export const ComponentAtractions =({onUp}) => {
    
    // const [{pigtails, setPigtails},
    //        {facePainting, setFacePainting},
    //        {tatoos, setTatoos},
    //        {baloons, setBaloons}
    //       ] = useState('');
          
    const [pigtails, setPigtails] = useState('');
    const [facePainting, setFacePainting] = useState(''); 
    const [tatoos, setTatoos] = useState(''); 
    const [baloons, setBaloons] = useState('');
    const [totalAtractions, setTotalAtractions] = useState('')       
    
    const handleNumberOfPigtails = (selected) => {setPigtails(selected)};
    const handleNumberOfFacePainting = (selected) => {setFacePainting(selected)};
    const handleNumberOfTatoos = (selected) => {setTatoos(selected)};
    const handleNumberOfBaloons = (selected) => {setBaloons(selected)};
    


      
    useEffect (() => {
        setTotalAtractions(pigtails*12 + facePainting*10 + tatoos*8 + baloons*4);
        
      }, [pigtails, facePainting, tatoos, baloons]);

    onUp(totalAtractions);

    

    return (
        <>
        <div className="atractions">
            <h1 className="slider-title">Ustaw ilość dzieci które skorzystają z poniższych atrakcji (płatne od dziecka):</h1>
            <div className="sliders">
            <div className="atractions-slider">
                <h1 className="atractions-title pigtails">Warkoczyki - 12 zł </h1>
                <Slider value={0} min={0} max={30} onChange={handleNumberOfPigtails} />
            </div>
            <div className="atractions-slider">
                <h1 className="atractions-title face-painting ">Malowanie twarzy - 10 zł</h1>
                <Slider value={0} min={0} max={30} onChange={handleNumberOfFacePainting} />
            </div>
            <div className="atractions-slider">
                <h1 className="slider-title tatoos">Tatuaże - 8 zł</h1>
                <Slider value={0} min={0} max={30} onChange={handleNumberOfTatoos} />
            </div>
            <div className="atractions-slider">
                <h1 className="atractions-title baloons">Balonik modelowany (figurka zoo) - 4 zł</h1>
                <Slider value={0} min={0} max={30} onChange={handleNumberOfBaloons} />
            </div>
            <div className="atractions-slider">
                <h1 className="atractions-title baloons">Cena za atrkacje: {totalAtractions} zł</h1>
            </div>
            </div> 
        </div> 
        </>
    )
}