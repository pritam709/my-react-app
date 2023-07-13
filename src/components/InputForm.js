import { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./InputForm.module.css";
import ErrorModal from "../UI/ErrorModal";
const InputForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef= useRef();

  const [error, setError] = useState();

  const onClickHandler = () => {
    setError(null);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const eneterdName= nameInputRef.current.value;
    const eneterdAge= ageInputRef.current.value;
    const eneterdCollege= collegeInputRef.current.value;
    if ((eneterdName === "" && eneterdAge === "" && eneterdCollege==="") || +eneterdAge < 1) {
     
      setError({
        title: "an error occured",
        message: "plz enter valid credentials and age (>1)",
      });
      return;
    }
    if (eneterdName === "") {
      
      setError({
        title: "an error occured",
        message: "plz enter valid name and",
      });
      return;
    }
    // if(inputAge ==="" || +inputAge <1){
    //     setNoAge(true);
    //     return;
    // }
    const obj = {
      id: Math.random(),
      name: eneterdName,
      age: eneterdAge,
      college:eneterdCollege
    };
    props.onSubmitForm(obj);
    nameInputRef.current.value="";
    ageInputRef.current.value="";
    collegeInputRef.current.value="";
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={onClickHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label>enter name</label>

          <input ref={nameInputRef} type="text"></input>

          <label>enter age</label>
          <input ref={ageInputRef} type="number"></input>

          <label>enter college name</label>

          <input ref={collegeInputRef} type="text"></input>

          <button className={classes.button}>submit</button>
        </form>
      </Card>
    </div>
  );
};
export default InputForm;
