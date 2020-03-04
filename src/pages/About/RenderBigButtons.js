import React from 'react';
import BigButton from '../../components/Buttons/BigButtons/BigButton';

function RenderBigButtons() {
    return (
        <div>
            <hr />
            <h1 className= "font-weight-bold">Big Buttons</h1>
            <hr />
            <div className= "row">
                <div className= "col-3">
                    <BigButton color= "btn btn-info" size= "btn-lg" />
                </div>
                <div className= "col-3">
                    <BigButton color= "btn btn-secondary" size= "btn-lg" />
                </div>
                <div className= "col-3">
                    <BigButton color= "btn btn-light" size= "btn-lg" />
                </div>
                <div className= "col-3 mb-2">
                    <BigButton color= "btn btn-outline-info" size= "btn-lg" />
                </div>

                <div className= "col-3">
                    <BigButton color= "btn btn-info" size= "btn-lg" right_icon= "fa fa-search" />
                </div>
                <div className= "col-3">
                    <BigButton color= "btn btn-secondary" size= "btn-lg" right_icon= "fa fa-search" />
                </div>
                <div className= "col-3">
                    <BigButton color= "btn btn-light" size= "btn-lg" right_icon= "fa fa-chevron-down" />
                </div>
                <div className= "col-3 mb-2">
                    <BigButton color= "btn btn-outline-info" size= "btn-lg" right_icon= "fa fa-chevron-down" />
                </div>

                <div className= "col-3">
                    <BigButton color= "btn btn-info" size= "btn-lg" left_icon= "fa fa-search" />
                </div>
                <div className= "col-3">
                    <BigButton color= "btn btn-secondary" size= "btn-lg" left_icon= "fa fa-search" />
                </div>
                <div className= "col-3">
                    <BigButton color= "btn btn-light" size= "btn-lg" left_icon= "fa fa-car" />
                </div>
                <div className= "col-3 mb-2">
                    <BigButton color= "btn btn-outline-info" size= "btn-lg" left_icon= "fa fa-search" />
                </div>
            </div>
        </div>
    )
}

export default RenderBigButtons;
