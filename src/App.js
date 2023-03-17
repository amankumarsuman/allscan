import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./component/searchBar/SearchBar";
import Lists from "./component/recentList/Lists";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Lists />
    </div>
  );
}

export default App;
