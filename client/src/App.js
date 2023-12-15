import './App.css';
import { Routes, Route } from "react-router-dom"
import { useState } from 'react';
import SignUp from "./pages/SignUp"
import MacroForm from "./pages/MacroForm"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <SignUp/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/form" element={ <MacroForm/> } />
        <Route path="/home" element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
