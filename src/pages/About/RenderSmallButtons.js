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
                    <Button text="Download" variant="info" size="sm"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" variant="secondary" size="sm" disabled="disabled"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" variant="light" size="sm"/>
                </div>
                <div className="col-2 mb-2 offset-1">
                    <Button text="Download" variant="outline-info" size="sm"/>
                </div>

                <div className="col-2">
                    <Button text="Download" variant="info" size="sm" right_icon="fa fa-search"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" variant="secondary" size="sm" right_icon="fa fa-chevron-down"
                            disabled="disabled"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" variant="light" size="sm" right_icon="fa fa-chevron-down"/>
                </div>
                <div className="col-2 mb-2 offset-1">
                    <Button text="Download" variant="outline-info" size="sm" right_icon="fa fa-chevron-down"/>
                </div>

                <div className="col-2">
                    <Button text="Download" variant="info" size="sm" left_icon="fa fa-search"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" variant="secondary" size="sm" left_icon="fa fa-chevron-down"
                            disabled="disabled"/>
                </div>
                <div className="col-2 offset-1">
                    <Button text="Download" variant="light" size="sm" left_icon="fa fa-chevron-down"/>
                </div>
                <div className="col-2 mb-2 offset-1">
                    <Button text="Download" variant="outline-info" size="sm" left_icon="fa fa-chevron-down"/>
                </div>
            </div>
        </div>
    )
}

export default RenderButtons;
