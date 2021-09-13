import React from "react"
import PersonCard from "./components/PersonCard";
import './App.css';

function App() {
  return (
    <div className="App">
        <PersonCard 
        lastName={"Doe"}
        firstName={"Jane"}
        age={30}
        hairColor={"blonde"}
        />
        <PersonCard 
        lastName={"Smith"}
        firstName={"John"}
        age={40}
        hairColor={"brown"}
        />
        <PersonCard 
        lastName={"Filmore"}
        firstName={"Millard"}
        age={50}
        hairColor={"red"}
        />
        <PersonCard 
        lastName={"Garcia"}
        firstName={"Maria"}
        age={60}
        hairColor={"Silver"}
        />
    </div>
  );
}

export default App;