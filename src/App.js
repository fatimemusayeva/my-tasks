import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import Time from './Components/Time/Time';
import Second from './Components/Second/Second';
import Timer from './Components/Timer/Timer';
import './App.css'

const App = () => {
    return (
            <div>
                <div className='cards'>
                    <NavLink to="/clock" >Saat</NavLink>
                    <NavLink to="/stopwatch" >Saniyəölçən</NavLink>
                    <NavLink to="/timer">Taymer</NavLink>
                </div>

                <Routes>
                    <Route path="/clock" element={<Time />} />
                    <Route path="/stopwatch" element={<Second />} />
                    <Route path="/timer" element={<Timer />} />
                </Routes>
            </div>
    );
};

export default App;
