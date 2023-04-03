import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Component/Content/About";
import MenuNavbar from "./Component/Navbar";
import Hero from "./Component/Content/Hero";

function App() {
    return (
        <div className="App">
            <MenuNavbar />
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
