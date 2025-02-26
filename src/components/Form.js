import React, { useState } from "react";

  function Form({firstName,lastName,newsletter,handleFirstNameChange,handleLastNameChange,
    handleNewsletter
  }){
  const[number,setNumber]=useState(0);
  const [isInvalidNumber, setIsInvalidNumber] = useState(null);
  function handleNumberChange(event){
    const newNumber=parseInt(event.target.value);
   if(newNumber>=0 && newNumber <=5 ){
     setNumber(newNumber)
     setIsInvalidNumber(null);
   }else{
    setIsInvalidNumber(`${newNumber} is not a valid number!`);
   }
  }


  return (
    <form>
      <input type="text" onChange={handleFirstNameChange}value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input type="checkbox" id="newsletter" onChange={handleNewsletter} checked={newsletter}/>
      <input type="number" value={number} onChange={handleNumberChange}/>
      {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
