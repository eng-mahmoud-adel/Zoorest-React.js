import React from 'react';
import Button from '../../Buttons/Button/Button';

const AskQuestion = (props) => {
    return (
        <div className={props.className + " card w-100"}>
            <div className= "row">
                <div className= "col-10 mx-auto mb-5 mt-3">
                    <Button text= "Ask a question" color= "btn btn-danger" size= "btn-sm" />
                </div>
            </div>
            <div className= "row text-center justify-content-center pb-4">
                <div className= "col-5 wrapper-one pb-2">
                    <p className= "small-text">{props.cardTextOne}</p>
                    <p className= "card-text">{props.numberOne}</p>
                </div>
                <div className= "col-5 wrapper-two pb-2">
                    <p className= "small-text">{props.cardTextOne}</p>
                    <p className= "card-text">{props.numberTwo}</p>
                </div>
            </div>
        </div>
    )
}

export default AskQuestion;
