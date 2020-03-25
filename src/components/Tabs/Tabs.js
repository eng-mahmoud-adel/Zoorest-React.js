import React from 'react';
import {useState} from 'react';

const Tabs = () => {
    const [tabs, setTabs] = useState (["Current tab", "Second Tab", "Third Tab", "Fourth Tab"]);

    return (
        <div className="tab text-center">
            <div className="tab-header">
                <ul className="nav tab-nav">
                {tabs.map(item => <li className="nav-item tab-item">
                        <a className="nav-link tab-link" href="/">{item}</a>
                    </li>
                    )}

                </ul>
            </div>

        </div>
    )
};

export default Tabs;
