import { JobProvider } from "./context/JobContext";
import { FiltersProvider } from "./context/FiltersContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <JobProvider>
      <FiltersProvider>
        <Navbar />
        <Home />
        <Footer />
      </FiltersProvider>
    </JobProvider>
  );
}

export default App;
