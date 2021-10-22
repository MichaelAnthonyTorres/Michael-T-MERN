import './App.css';
import {Router} from '@reach/router';
import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthors';

function App() {
  return (
    <div className="App">
      <Router>
        <AllAuthors path="/"/>
        <NewAuthor path="/new"/>
        <EditAuthor path="/edit/:id"/>
      </Router>

    </div>
  );
}

export default App;
