import { useState } from 'react';
import './App.css';
import Button from './Component/Button';
import Display from './Component/Display';


function App() {

  //const [state, setstate] = useState(initialState)

  const [skills, setSkills] = useState("Elm")

  const handleReact/**handle function-simple way of writing function */ = ()=>{
    setSkills("React")
   
  }

  const handleElm =()=>{
    setSkills("Elm")
    
  }

  const handleRedux =()=>{
    setSkills("React-Redux")
   
  }

  return (
    <>
      <div className="appstyling">
        <Display tech={skills} />

        <Button ClickHandler = {handleReact} btntext={"React"}/>
        <Button ClickHandler = {handleElm} btntext={"Elm"}/>
        <Button ClickHandler = {handleRedux} btntext={"React-Redux"}/>
        {/*<div className="btns">
          <button onClick ={handleReact}>React</button>
          <button onClick ={handleElm}>Elm</button>
          <button onClick ={handleRedux}>React-Redux</button>
        </div>*/}
      
      </div>
    </>

  );
}

export default App;
//Todo
/*react component(function and class component)- breaking down work in different component e.g header in se
parete folder under component folder in src*/
//react props - a property/variable you pass to a component i.e you want it to be in both display file and app.js
//state