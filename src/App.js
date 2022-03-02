import logo from "./logo.svg";
import "./App.css";
import ParentPart from "./components/ParentPart";
import ChildPart from "./components/ChildrenPart";

function App() {
  return (
    <div className="App">
      <div className="topPart">
        <h1>Value passing from child to parent</h1>
      </div>
      <div>
        <ParentPart />
      </div>
    </div>
  );
}

export default App;
