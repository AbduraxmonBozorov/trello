import React from "react";
import Task from "./components/Task";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/task" element={<Task></Task>}></Route>
      </Routes>
    </div>
  )
}

export default App
