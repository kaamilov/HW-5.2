import "./App.css";
import Expert from "./components/Export/Expert";
const blocks = [
  {
    id: 'b1',
    block: 'yellow',
  },
  {
    id: 'b2',
    block: 'green',
  },
  {
    id: 'b3',
    block: 'color',
  },
  {
    id: 'b4',
    block: `${Math.random()}`,
  },
];


function App() {
  return <div className="App">
    
    <h2>  HOME WORK 5.2</h2>
    <button className="button">нажмите обновление </button>
    <Expert blocks={blocks}/>
  </div>
}

export default App;
