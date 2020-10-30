import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTask/>
        <ListTask/>
      </header>
    </div>
  );
}

export default App;
