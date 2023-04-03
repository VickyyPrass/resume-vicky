import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Component/Content/About/About.jsx";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Content/Hero/Hero";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="App-Content">
                <Hero />
                <div className="main-content">
                    <About />
                </div>
            </div>
        </div>
    );
}

export default App;
