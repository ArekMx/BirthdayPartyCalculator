


export const countTotalTableSelect= (numberOfKids, pricePerKid, setTotal, setInfo, setText)=> {



    if (numberOfKids > 10 && pricePerKid === "38") {
        setTotal((numberOfKids * pricePerKid) - pricePerKid);
        setInfo(true);
        setText("Jubilat gratis! Nie płacisz za 1 dziecko!");
        if (numberOfKids > 21) {
          setTotal((numberOfKids * pricePerKid) - pricePerKid*2);
          setText("Jubilat i Gość gratis! Nie płacisz za 2 dzieci!");
        }
      } else if (numberOfKids > 10 && pricePerKid === "42") {
        setTotal((numberOfKids * pricePerKid) - pricePerKid);
        setInfo(true);
        setText("Jubilat gratis! Nie płacisz za 1 dziecko!");
        if (numberOfKids > 21) {
          setTotal((numberOfKids * pricePerKid) - pricePerKid*2);
          setText("Jubilat i Gość gratis! Nie płacisz za 2 dzieci!");
        }
      } else {
        setTotal(numberOfKids * pricePerKid);
        setInfo(false)
      }
}


