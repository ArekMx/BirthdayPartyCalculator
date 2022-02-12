


export const countTotalTableSelect= (numberOfKids, pricePerKid, setTotal)=> {

    if (numberOfKids > 10 && pricePerKid === "38") {
        setTotal((numberOfKids * pricePerKid) - pricePerKid);
        if (numberOfKids > 22) {
          setTotal((numberOfKids * pricePerKid) - pricePerKid*2);
        }
      } else if (numberOfKids > 10 && pricePerKid === "42") {
        setTotal((numberOfKids * pricePerKid) - pricePerKid);
        if (numberOfKids > 22) {
          setTotal((numberOfKids * pricePerKid) - pricePerKid*2);
        }
      } else {
        setTotal(numberOfKids * pricePerKid);
      }
     
}


