import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      {/* <h2>[Placeholder]</h2> */}
      <Header message="Welcome to the site!" /> {/* Header({ message: 'Welcome' }) */}
      {/* <Header message="About us" /> */}

      <Counter />
    </div>
  );
};

export default App;
