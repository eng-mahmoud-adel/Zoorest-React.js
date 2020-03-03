import React from 'react';

const DropDownOne = () => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary btn-light text-left dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown Expanded</button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">First Point</a>
                    <a className="dropdown-item" href="#">Second Point</a>
                    <a className="dropdown-item" href="#">Third Point</a>
                    <a className="dropdown-item" href="#">Fourth Point</a>
                </div>
            </div>
        </div>
    )
}

export default DropDownOne;
