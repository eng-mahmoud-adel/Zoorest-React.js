import React from 'react';

const DropDownOne = () => {
    return (
        // <div className="input-group mb-3">
        //     <div className="input-group-prepend">
        //         <button className="btn btn-outline-secondary btn-light text-left dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown Expanded</button>
        //         <div className="dropdown-menu">
        //             <a className="dropdown-item" href="#">First Point</a>
        //             <a className="dropdown-item" href="#">Second Point</a>
        //             <a className="dropdown-item" href="#">Third Point</a>
        //             <a className="dropdown-item" href="#">Fourth Point</a>
        //         </div>
        //     </div>
        // </div>

        // <div className="dropdown">
        //     <button className="btn btn-outline-secondary btn-light text-left dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //     Dropdown Expanded
        //     </button>
        //     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        //         <a className="dropdown-item" href="#">First Point</a>
        //         <a className="dropdown-item" href="#">Second Point</a>
        //         <a className="dropdown-item" href="#">Third Point</a>
        //         <a className="dropdown-item" href="#">Fourth Point</a>
        //     </div>
        // </div>

        <select className= "dropdown">
            <optgroup label="Graphic Resources">
                <option value="First Point">First Point</option>
                <option value="Second Point">Second Point</option>
                <option value="Third Point">Third Point</option>
                <option value="Fourth Point">Fourth Point</option>
            </optgroup>
            <optgroup label="Graphic Resources">
                <option value="Fifth Point">Fifth Point</option>
            </optgroup>
        </select>

    )
}

export default DropDownOne;
