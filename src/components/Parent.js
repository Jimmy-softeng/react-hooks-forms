import React,{useState} from "react";
import Form from "./Form";
import Formdata from "./Formdata";

function Parent(){
   
        
        const [firstName, setFirstName] = useState("John");
        const [lastName, setLastName] = useState("Henry");
        const [newsletter,setNewsletter]=useState(false)
      
        function handleFirstNameChange(event){
          setFirstName(event.target.value)
        }
        function handleLastNameChange(event){
          setLastName(event.target.value)
        }
        function handleNewsletter(event){
          setNewsletter(event.target.checked)
        }
    return(
        <div>
     <Form firstName={firstName} 
           lastName={lastName}
           newsletter={newsletter}
           handleFirstNameChange={handleFirstNameChange}
           handleLastNameChange={handleLastNameChange}
           handleNewsletter={handleNewsletter}
           />
    <Formdata firstName={firstName}
              lastName={lastName}/>
           </div>
    )
}


export default Parent;