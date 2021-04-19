import './App.css';
import sharedimg from './shared/shared.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sharedimg} height='200' width='200' alt='no image found'></img>
      </header>
    </div>
  );
}

export default App;
