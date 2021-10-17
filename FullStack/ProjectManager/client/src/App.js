import Main from './views/Main';
import OneProduct from './components/OneProduct';
import {Router} from "@reach/router"
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Main path ="/" />
        <OneProduct path = "/:_id" />
      </Router>
    </div>
  );
}

export default App;
