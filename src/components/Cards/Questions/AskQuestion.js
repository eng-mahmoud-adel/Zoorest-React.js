import React from 'react';
import SmallButton from '../../Buttons/SmallButtons/SmallButton';

const AskQuestion = (props) => {
    return (
        <div className={props.className + " card"}>
            <div className= "row">
                <div className= "col-10 mx-auto mb-5 mt-3">
                <SmallButton text= "Ask a question" color= "btn btn-danger" size= "btn-sm" />
                </div>
            </div>
            <div className= "row text-center justify-content-center">
                <div className= "col-4 wrapper-one">
                    <p className= "small-text">{props.cardTextOne}</p>
                    <p className= "card-text">{props.numberOne}</p>
                </div>
                <div className= "col-4 wrapper-two">
                    <p className= "small-text">{props.cardTextOne}</p>
                    <p className= "card-text">{props.numberTwo}</p>
                </div>
            </div>
        </div>
    )
}

export default AskQuestion;
