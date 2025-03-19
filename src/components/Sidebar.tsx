import React from 'react';
import { Link } from 'react-router-dom';
// import './Sidebar.css';

function Sidebar() {
    return (
        <div>
            <ul>
                <li>
                    I am a sidebar.
                </li>
            </ul>
            <ul>
                <li>
                    Sidebar: My Reviews
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;