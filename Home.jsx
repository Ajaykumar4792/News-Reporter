import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import React from 'react';
import Headlines from './Headlines'
import Science from './Science'
import Sports from './Sports'
import Technology from './Technology';
import Bussiness from './Bussiness';
import Entertainment from './Entertainment';
import Health from './Health';
import General from './General';
const Home = () => {
  return (
    <Router>
      <nav className="nav">
        <ul>
            <li>
                <Link to='/Bussiness' className="link">Bussiness</Link>
                <Link to='/Entertainment' className="link">Entertainment</Link>
                <Link to='/General' className="link">General</Link>
                <Link to='/Headlines' className="link">Headlines</Link>
                <Link to='/Health' className='link'>Health</Link>
                <Link to='/Science' className="link">Science</Link>
                <Link to='/Sports' className="link">Sports</Link>
                <Link to='/Technology' className="link">Technology</Link>
            </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/headlines' element={<Headlines/>} />
        <Route exact path='/science' element={<Science/>} />
        <Route exact path='/sports' element={<Sports/>} />
        <Route exact path='/technology' element={<Technology/>} />
        <Route exact path='/bussiness' element={<Bussiness/>} />
        <Route exact path='/entertainment' element={<Entertainment/>} />
        <Route exact path='/health' element={<Health/>} />
        <Route exact path='/general' element={<General/>} />
      </Routes>
    </Router>
  );
}

export default Home;
