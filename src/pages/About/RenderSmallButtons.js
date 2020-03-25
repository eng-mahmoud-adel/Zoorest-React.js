import React from 'react';
import Button from '../../components/Buttons/Button/Button';

function RenderButtons() {
    return (
        <div>
            <hr/>
            <h1 className="font-weight-bold">Small Buttons</h1>
            <hr/>
            <div className="row">
                <div className="col-2">
                    <Button text="Download" color="btn btn-info" size="btn-sm"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" color="btn btn-secondary" size="btn-sm" disabled="disabled"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" color="btn btn-light" size="btn-sm"/>
                </div>
                <div className="col-2 mb-2 offset-1">
                    <Button text="Download" color="btn btn-outline-info" size="btn-sm"/>
                </div>

                <div className="col-2">
                    <Button text="Download" color="btn btn-info" size="btn-sm" right_icon="fa fa-search"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" color="btn btn-secondary" size="btn-sm" right_icon="fa fa-chevron-down"
                            disabled="disabled"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" color="btn btn-light" size="btn-sm" right_icon="fa fa-chevron-down"/>
                </div>
                <div className="col-2 mb-2 offset-1">
                    <Button text="Download" color="btn btn-outline-info" size="btn-sm" right_icon="fa fa-chevron-down"/>
                </div>

                <div className="col-2">
                    <Button text="Download" color="btn btn-info" size="btn-sm" left_icon="fa fa-search"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" color="btn btn-secondary" size="btn-sm" left_icon="fa fa-chevron-down"
                            disabled="disabled"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" color="btn btn-light" size="btn-sm" left_icon="fa fa-chevron-down"/>
                </div>
                <div className="col-2 mb-2 offset-1">
                    <Button text="Download" color="btn btn-outline-info" size="btn-sm" left_icon="fa fa-chevron-down"/>
                </div>
            </div>
        </div>
    )
}

export default RenderButtons;
