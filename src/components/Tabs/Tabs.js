import React from 'react';
import {useState} from 'react';

const Tabs = () => {
    const [tabs, setTabs] = useState (["curent tab","Second Tab", "Third Tab", "Fourth Tab" ]) 
    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav">
                {tabs.map(item => <li className="nav-item">
                        <a className="nav-link active" href="#">{item}</a>
                    </li>
                    )}
                    
                </ul>
            </div>

        </div>
    )
}

export default Tabs;
