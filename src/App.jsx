import Router from "./routes/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            <Header />

            <Router />
            
            <Footer />
        </div>
    )
}

export default App
