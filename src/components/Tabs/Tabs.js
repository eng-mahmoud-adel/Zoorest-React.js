import React from 'react';

const Tabs = (props) => {
    const {tabs} = props;

    return (
        <div className="tab text-center">
            <div className="tab-header">
                <ul className="nav tab-nav">
                    {tabs.map((tab, index) => <li key={`tabs_${index}`} className="nav-item tab-item">
                            <a className="nav-link tab-link" href="/">{tab.charAt(0).toUpperCase() + tab.slice(1)}</a>
                        </li>
                    )}

                </ul>
            </div>

        </div>
    )
};

export default Tabs;
