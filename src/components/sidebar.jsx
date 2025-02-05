import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NewTest } from '../context/newContext';

const Sidebar = () => {

    const data=useContext(NewTest)
    console.log(data)
    return (
        <div style={{ width: '200px', background: '#f4f4f4', padding: '15px', height: '100vh' }}>
            <h3>Sidebar</h3>
            <ul>
                {/* <li><Link to="/">Home</Link></li> */}
                <li>
                    <a href='/home'>Home</a>
                </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;