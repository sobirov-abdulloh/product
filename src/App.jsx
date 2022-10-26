import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { StateContext } from "./Context/context";
import { reducer, initialState } from "./Reduser/reduser";
import Home from "./pages/Home/Home";
import Trash from "./pages/Trash/Trash";
import TaskVazifa from "./pages/TaskVazifa/TaskVazifa";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task_vazifa" element={<TaskVazifa />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="*" element={<h1>Bunaqa sahifa yoq!</h1>} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
