import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import Intro from "./components/Intro";
import { Projects2 } from "./components/Projects2";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Projects />
      <Projects2 />
      <Footer />
    </div>
  );
}

export default App;
