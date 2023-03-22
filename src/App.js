import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Component/Content/About/Index";
import MenuNavbar from "./Component/Navbar/Index";
import Hero from "./Component/Content/About/Hero";

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
