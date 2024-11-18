import { useState } from 'react'
import './App.css'

// Import the component
import Card from './components/Card'

function App() {
  // ! Making a "local" state for App.jsx
    // * 1. import useState (this is the hook)
    // Parts of our state: [getter (the value), setter (function to set new value)]
  const [myNumber, setMyNumber] = useState(100)
  const [myBool, setMyBool] = useState("false")


  // ! Arrow functions are typically used inside of a component.
  const displayAlert = () => {
    console.log("My Alert")
  }

  // let myNumber = 0

  const changeNumber = () => {
    console.log("About to change number... in state")
    // * change the state by using the setter (setter is a function)
    setMyNumber(myNumber + 1)
  }

  // You can pass functiosn to children.
  const changeMyBool = () => {
    console.log("About to change myBool...")
    console.log("current myBool: ", myBool)
    setMyBool("True")
  }

  // ! Components RETURN the thing you want you user to see.
    // Components can only return 1 thing.
  return (<> 
    {/* ! This section is where you write the code for the UI */}


    <button onClick={changeNumber}>Change Number: {myNumber}</button>

    <button onClick={changeMyBool}>My Boolean is: {myBool}</button>
    
    {/* ! Components are reusable elements that can have custom props. Props are used to provide specific details for an otherwise generic element. */}
    <Card display={displayAlert} title={"Video 1"} subTitle={"My 1st Subtitle"} bodyText="Something or rather" changeBoolFun={changeMyBool}/>

    <Card display={displayAlert} title={"Video 2"} subTitle={"My 2nd Subtitle"} bodyText="Something or rather" changeBoolFun={changeMyBool}/>

    <Card 
      display={displayAlert}
      title={"Video 3"} 
      subTitle={"My 3rd Subtitle"} 
      bodyText="Something or rather"
      changeBoolFun={changeMyBool}
    />

    {/* When you call  <Card/ >  and give it properties, that's the same as calling the function Card() and passing an object with the props*/}
    {Card({
      title: "MyFunctCard",
      subTitle:"mysubtitle"
    })}

  </>)
}

export default App
