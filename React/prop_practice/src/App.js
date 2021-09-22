import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName = {"Michael"}
      lastName = {"Torres"}
      age = {"31"}
      hairColor = {"Dark Brown"}
      />
      <PersonCard 
      firstName = {"Ian"}
      lastName = {"Torres"}
      age = {"2"}
      hairColor = {"Brown"}
      />
      <PersonCard 
      firstName = {"Ellie"}
      lastName = {"Torres"}
      age = {"1"}
      hairColor = {"Brown"}
      />
      <PersonCard 
      firstName = {"Kat"}
      lastName = {"Torres"}
      age = {"31"}
      hairColor = {"Black"}
      />
    </div>
  );
}

export default App;
