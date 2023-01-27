
import './App.css';

import {Data} from "./components/Data";

const styles = {
    display: 'flex',
    justifyContent: 'space-between'
};

function App() {


    return (
        <div className="App">
            <div style={styles}>
                <Data/>

            </div>
        </div>
    );
}

export default App;