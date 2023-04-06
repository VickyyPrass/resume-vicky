import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Component/Content/About";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Content/Hero/Index";
import Resume from "./Component/Content/Resume/Resume";
import Contact from "./Component/Content/Contact/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="App-Content">
                <Hero />
                <div className="main-content">
                    <About />
                    <Resume />
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default App;
