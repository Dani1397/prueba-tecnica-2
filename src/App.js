import './App.css';
import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import{useState} from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Navbar onSearch={setSearch}/>
      <Home search={ search}/>
    </div>
  );
}

export default App;
