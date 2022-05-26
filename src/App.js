import logo from "./logo.svg";
import "./App.css";
import { Employee } from "./Components/Employee";
import Table from "./Components/Table";

function App() {
  return (
    <>
  <h1 className="head">Employee Data</h1>  
    <div className="App">
      
      <div>
        <Employee></Employee>
      </div>
      <div>
        <Table></Table>
      </div>
    </div>
    </>
  );
}

export default App;
