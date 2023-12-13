import './App.css';
import { Routes, Route } from "react-router-dom"
import MacroForm from "./pages/MacroForm"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MacroForm/> } />
        <Route path="/home" element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;