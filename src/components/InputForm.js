import { useState } from "react";
import Card from "../UI/Card";
import classes from "./InputForm.module.css"
import ErrorModal from "../UI/ErrorModal";
const InputForm=(props)=>{
    const[inputName,setName] =useState("");
    const[inputAge,setAge] =useState("");
    const[error,setError]=useState();

    const nameChangeHandler=(event)=>{
        console.log(event.target.value);
     setName(event.target.value)



    }
    const ageChangeHandler=(event)=>{
        console.log(event.target.value);
     setAge(event.target.value)

    }

    const onClickHandler=()=>{
        setError(null)
       
    }

    const formSubmitHandler=(event)=>{
      
        event.preventDefault();
        if((inputName ==="" && inputAge==="") || +inputAge <1) {
            // setNoInputs(true);
            setError({
                title:"an error occured",
                message:"plz enter valid name and age (>1)"
            })
            return;
        }
        if(inputName ==="" ){
            // setNoName(true);
            setError({
                title:"an error occured",
                message:"plz enter valid name and"
            })
            return;
        }
        // if(inputAge ==="" || +inputAge <1){
        //     setNoAge(true);
        //     return;
        // }
        const obj={
            id:Math.random(),
            name:inputName,
            age:inputAge
          }
        props.onSubmitForm(obj);
        setAge("")
        setName("")

    }
    return <div>{error &&  <ErrorModal title={error.title} message={error.message}
    onClick={onClickHandler}></ErrorModal>}
     <Card className={classes.input}><form onSubmit={formSubmitHandler}>
    <label>enter name</label>
    
    <input type="text" value={inputName} onChange={nameChangeHandler}></input>
    
    <label>enter age</label>
    <input type="number" value={inputAge} onChange={ageChangeHandler}></input>
   
    <button className={classes.button} >submit</button>

</form></Card>
</div>
}
export default InputForm;