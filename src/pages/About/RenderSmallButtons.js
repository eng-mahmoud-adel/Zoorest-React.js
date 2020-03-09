import React from 'react';
import SmallButton from '../../components/Buttons/SmallButtons/SmallButton';

function RenderSmallButtons() {
    return (
        <div>
            <hr />
            <h1 className= "font-weight-bold">Small Buttons</h1>
            <hr />
            <div className= "row">
                <div className= "col-3">
                    <SmallButton text= "Download" color= "btn btn-info" size= "btn-sm" />
                </div>
                <div className= "col-3">
                    <SmallButton text= "Download" color= "btn btn-secondary" size= "btn-sm" disabled= "disabled" />
                </div>
                <div className= "col-3">
                    <SmallButton text= "Download" color= "btn btn-light" size= "btn-sm" />
                </div>
                <div className= "col-3 mb-2">
                    <SmallButton text= "Download" color= "btn btn-outline-info" size= "btn-sm" />
                </div>

                <div className= "col-3">
                    <SmallButton text= "Download" color= "btn btn-info" size= "btn-sm" right_icon= "fa fa-search" />
                </div>
                <div className= "col-3">
                    <SmallButton text= "Download" color= "btn btn-secondary" size= "btn-sm" right_icon= "fa fa-chevron-down" disabled= "disabled" />
                </div>
                <div className= "col-3">
                    <SmallButton text= "Download" color= "btn btn-light" size= "btn-sm" right_icon= "fa fa-chevron-down" />
                </div>
                <div className= "col-3 mb-2">
                    <SmallButton text= "Download" color= "btn btn-outline-info" size= "btn-sm" right_icon= "fa fa-chevron-down" />
                </div>

                <div className= "col-3">
                    <SmallButton text= "Download" color= "btn btn-info" size= "btn-sm" left_icon= "fa fa-search" />
                </div>
                <div className= "col-3">
                    <SmallButton text= "Download" color= "btn btn-secondary" size= "btn-sm" left_icon= "fa fa-chevron-down" disabled= "disabled" />
                </div>
                <div className= "col-3">
                    <SmallButton text= "Download" color= "btn btn-light" size= "btn-sm" left_icon= "fa fa-chevron-down" />
                </div>
                <div className= "col-3 mb-2">
                    <SmallButton text= "Download" color= "btn btn-outline-info" size= "btn-sm" left_icon= "fa fa-chevron-down" />
                </div>
            </div>
        </div>
    )
}

export default RenderSmallButtons;
