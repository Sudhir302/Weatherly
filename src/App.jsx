import Dashboard from './pages/Dashboard';
import Weather from './components/Weather';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';

function App() {
    return(
        <Router>
            <Routes>
                <Route path='/' element= {<Dashboard />} />
                <Route path='/checkweather' element = {<Weather />} />
            </Routes>
        </Router>
    )
}

export default App;
