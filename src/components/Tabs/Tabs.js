import React from 'react';

const Tabs = () => {
    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Current Tab</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Second Tab</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Third Tab</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Fourth Tab</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Tabs;
