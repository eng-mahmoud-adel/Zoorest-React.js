import React from 'react';
import GoogleMap from './googleMap/GoogleMap';
import Button from '../Buttons/Button/Button';

const Location = (props) => {
    return (
        <form>
            <div className="form-group location-form col-8">
                <h3 className= "title">{props.title}</h3>
                <hr />
                <p className= "text">{props.text}</p>
                <div className= "mb-5">
                    <GoogleMap />
                </div>
                <div className= "row">
                    <div className= "ml-auto col-6">
                        <Button text= "Cancel" color= "btn btn-light" size= "btn-sm" />
                    </div>
                    <div className= "mr-auto col-6">
                        <Button text= "Save Location" color= "btn btn-info" size= "btn-sm" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Location;
