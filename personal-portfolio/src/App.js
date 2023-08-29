import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { EduTimeline } from './components/EduTimeline';
import { Techstack } from './components/Tech';
import { Toolstack } from './components/Tool';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <EduTimeline />
      <Projects />
      <Techstack />
      <Toolstack />
      <Footer />
    </div>
  );
}

export default App;
