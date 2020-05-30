import React, {Fragment, useState} from 'react'
import PropTypes from "prop-types";
import {FormControl} from "react-bootstrap";

const SearchBar = ({className, placeholder, onInputChange, size, name, type}) => {
    const [query, setQuery] = useState('');
    let search = "";
    const handleInputChange = (x) => {
        setQuery(search.value)

        onInputChange(query, query.length)

        //call onInputChange only when there is at-least 2 characters
        if (query && query.length > 1) {
            if (query.length % 2 === 0) {

            }
        }
    }
    return (
        <Fragment>
            <FormControl
                required
                type={type}
                name={name}
                size={size}
                className={className}
                placeholder={placeholder}
                value={query}
                ref={input => search = input}
                onChange={handleInputChange}
            />
        </Fragment>
    );
};

SearchBar.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    size: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
}
SearchBar.defaultProps = {
    placeholder: "Search for...",
    size: "lg",
    type: "text",
    name: "search",
}

export default SearchBar;
