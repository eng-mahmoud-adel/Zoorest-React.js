import React from 'react'
import PropTypes from "prop-types";

const DropdownActions = ({id, options, prefix = "option"}) => {
    return (
        <div id={id} className="dropdown-content">

            {
                options.map(option => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a key={`${id}_${prefix}_${option.title}`} href="#">{option.title}</a>
                ))
            }
        </div>
    );
};

DropdownActions.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    prefix: PropTypes.string,
};
export default DropdownActions;
