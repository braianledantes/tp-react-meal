function App() {

    return (
        <div className="font-roboto">
            <Router />
        </div>
    )
}

import Router from "./routes/Router";
import { Buffer } from 'buffer';
window.Buffer = Buffer;

export default App
