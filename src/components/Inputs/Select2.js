import React, {Fragment, useState} from 'react';
import Select from "react-select";
import Creatable from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import PropTypes from "prop-types";
import {useField} from "formik";

const animatedComponents = makeAnimated();

export const SelectField = ({label, onChange, ...props}) => {
    const {options} = props
    const [field, meta, helpers] = useField(props);
    const {setValue} = helpers;

    return (
        <Fragment>
            <label htmlFor={field.name}>{props.label}</label>
            <Select
                {...field}
                {...props}
                options={options}
                value={(options ? options.find(option => option.value === field.value) : '')}
                onChange={option => {
                    setValue(option.value);
                    if (onChange) {
                        onChange(option)
                    }
                }}
            />
            {meta.touched && meta.errors && (
                <p className="field-error">{meta.errors}</p>
            )}
        </Fragment>
    )
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
            className={`tag ${className || ""}`}
            classNamePrefix={classNamePrefix}
        />
    );
}

SelectField.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    // options: PropTypes.array.isRequired,
    // name: PropTypes.string,
    // className: PropTypes.string,
    // classNamePrefix: PropTypes.string,
};

TagsSelect.propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
    classNamePrefix: PropTypes.string,
};

