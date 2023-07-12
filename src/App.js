
import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Users from './components/Users';
const dummyArray=[];

function App() {
  const[array,setArray]=useState(dummyArray);
  const formInputsHandler=(user)=>{
    
    console.log(user);
    // dummyArray.push(user);
    setArray(prevState=>{
      return [user, ...prevState]
    });


  }


  return (
    <div>

     <InputForm onSubmitForm={formInputsHandler}/>
     <Users items={array} />
    </div>
  );
}

export default App;
