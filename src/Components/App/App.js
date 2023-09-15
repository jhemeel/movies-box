import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Detail from "../../Pages/Detail/Detail";

function App() {
  document.addEventListener("scroll", () => {
   
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie/:id/" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
