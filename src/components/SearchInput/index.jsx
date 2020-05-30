import React from 'react'
import {SearchIcon} from "../Icons";
import SearchBar from "../SearchBar";

const SearchInput = ({className, placeholder, onInputChange, size, type}) => {

    return (
        <div className="input-group w-100">
            <SearchBar
                placeholder="Start searching for anything"
                size={"md"}
                onInputChange={() => {
                }}/>

            <div className="input-group-append">
                                <span className="input-group-text icon">
                                    <SearchIcon/>
                                </span>
            </div>
        </div>
    );
};

// SearchInput.propTypes = {
//     onInputChange: PropTypes.func.isRequired,
//     size: PropTypes.string,
//     type: PropTypes.string,
// }
// SearchInput.defaultProps = {
//     placeholder: "Search for...",
//     size: "lg",
//     type: "text",
// }

export default SearchInput;
