/* export const withCommas = (numberToFormat) => {
    if (!numberToFormat) return "";
  
    try {
      let newPrice = numberToFormat.slice(1);
      let nepaliPrice = Number(newPrice) * 119;
      nepaliPrice=nepaliPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let seperateByPeriod=nepaliPrice.split(" ");
      seperateByPeriod.unshift("Rs");
      return seperateByPeriod.join(" ");
    } catch (error) {
      return "";
    }
  }; */
  
  export const withCommas = (numberToFormat) => {
    if (!numberToFormat) return "";
  
    try { 
      let seperateByPeriod = numberToFormat.toString().split(".");
      seperateByPeriod[0] = seperateByPeriod[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return seperateByPeriod.join(".");
    } catch (error) {
      return "";
    }
  };
  