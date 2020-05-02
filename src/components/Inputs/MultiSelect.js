import React, {useState} from 'react';
import Select from "react-select";
import Creatable from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import PropTypes from "prop-types";

const animatedComponents = makeAnimated();

// https://react-select.com/home
export const SingleSelect = ({options, name, className, classNamePrefix, placeholder}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    // const handleChange = selectedOption => {
    //     setSelectedOption(selectedOption);
    // };
    return (
        <Select
            isMulti={false}
            isRtl={false}
            components={animatedComponents}
            value={selectedOption}
            placeholder={placeholder}
            onChange={setSelectedOption}
            options={options}
            name={name}
            className={className}
            classNamePrefix={classNamePrefix}
        />
    );

}

export const MultiSelect = ({options, name, className, classNamePrefix}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    // const handleChange = selectedOption => {
    //     setSelectedOption(selectedOption);
    // };
    return (
        <Select
            isMulti
            isRtl={false}
            components={animatedComponents}
            value={selectedOption}
            onChange={setSelectedOption}


            options={options}
            name={name}
            className={className}
            classNamePrefix={classNamePrefix}
        />
    );

}

//https://react-select.com/creatable
export const TagsSelect = ({options,name,className,classNamePrefix}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        setSelectedOption(newValue);
    };

    return (
        <Creatable
            isMulti
            isClearable
            components={animatedComponents}
            value={selectedOption}
            onChange={handleChange}



            options={options}
            name={name}
            className={className}
            classNamePrefix={classNamePrefix}
        />
    );
}

MultiSelect.propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
    classNamePrefix: PropTypes.string,
};

TagsSelect.propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
    classNamePrefix: PropTypes.string,
};

