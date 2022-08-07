import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Zafi" heroName="Suparman">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, rem?</p>
      </Greet>
      <Greet name="Ifaz" heroName="Sudirman">
        <button>Who is he?</button>
      </Greet>
      <Greet name="Fazi" heroName="Bapakman" />
      <hr />
      <Welcome name="Zafi" heroName="Suparman" />
      <Welcome name="Ifaz" heroName="Sudirman" />
      <Welcome name="Fazi" heroName="Bapakman" />
      <hr />
      <Message />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
