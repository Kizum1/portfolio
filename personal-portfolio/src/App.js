import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { EduTimeline } from './components/EduTimeline';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <EduTimeline />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
