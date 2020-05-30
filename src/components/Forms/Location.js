import React, {useState} from 'react';
import Button from '../Buttons/Button/Button';
import LocationPicker from 'react-location-picker';

const Location = ({onLocationSelected, center}) => {

    const [state, setState] = useState({
        position: center,
        address: "",
    });
    const defaultPosition = {
        lat: center ? center.lat : 27.9878,
        lng: center ? center.lng : 86.9250
    };

    const handleLocationChange = ({position, address, places}) => {
        // Set new location
        setState({
            position,
            address
        });
    }

    const handleSubmit = () => {
        onLocationSelected(state)
    }

    return (
        <form>
            <h5 className="font-medium">Select Location</h5>
            <hr/>
            <p className="label font-regular">Drag the marker to your location</p>
            <div className="mb-5">
                <LocationPicker
                    containerElement={<div style={{height: '100%'}}/>}
                    mapElement={<div style={{height: '400px'}}/>}
                    defaultPosition={defaultPosition}
                    radius={-1}//optional, Circle radius in meter. or Pass -1 to hide it.
                    onChange={handleLocationChange}
                />
            </div>
            <div className="row">
                <div className="ml-auto col-6">
                    <Button text="Cancel" variant="light" size="sm"/>
                </div>
                <div className="mr-auto col-6">
                    <Button onClick={handleSubmit} text="Save Location" variant="info" size="sm"/>
                </div>
            </div>
        </form>
    )
}

export default Location;
