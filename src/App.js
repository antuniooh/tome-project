import './App.css';

import data from './data.json';
import Player from "./Player"

function App() {

  return (
   
    <div className="orders-container">
      <header className="App-header">
        <h1>Dança gatinho dança</h1>
      </header>
      <div className="orders-list-container">
            <div className="orders-list-items">
                {data.map(product => (
                    <Player
                        song={product.song}
                        name={product.title} 
                        imgUri={product.img}
                    />
                        
                ))}
            </div>
        </div>
        <div className="App-header">
          <h2>Todos direitos autorais de toninho </h2>
      </div>
    </div>
  );
}

export default App;
