import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar/>
      </header>
      <main>
        <AllTheBooks/>
      </main>
      <footer>
        <MyFooter/>
      </footer>
    </div>
  );
}

export default App;
