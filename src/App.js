import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Total } from "./components/Total";
import { Movielist } from "./components/Movielist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Total/>}></Route>
          <Route path="/home" exact element={<Total/>}></Route>
          <Route path="/list" exact element={<Movielist/>}></Route>
          <Route path="/home/:name" exact element={<Movielist/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
