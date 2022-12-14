import './App.css';
import ClickClass from './components/ClickClass';
import ClickFunction from './components/ClickFunction';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h4>Functional Component</h4>
      <Greet name="Zafi" heroName="Suparman">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, rem?</p>
      </Greet>
      <Greet name="Ifaz" heroName="Sudirman">
        <button>Who is he?</button>
      </Greet>
      <Greet name="Fazi" heroName="Bapakman" />
      <hr />
      <h4>Class Component</h4>
      <Welcome name="Zafi" heroName="Suparman" />
      <Welcome name="Ifaz" heroName="Sudirman" />
      <Welcome name="Fazi" heroName="Bapakman" />
      <hr />
      <h4>State</h4>
      <Message />
      <hr />
      <h4>setState</h4>
      <Counter />
      <hr />
      <h4>Event Handling in Functional Component</h4>
      <ClickFunction />
      <hr />
      <h4>Event Handling in Class Component</h4>
      <ClickClass />
    </div>
  );
}

export default App;
