import React, {Fragment} from 'react';

const Avatar = (props) => {
    return (
        <Fragment>
            {props.text && <Fragment>
                <div className="avatar">
                    <div className={props.className}>{props.text}</div>
                    {props.name && <h6>{props.name}</h6>}
                    {props.span && <span>{props.span}</span>}
                </div>
            </Fragment>}

            {props.image && <Fragment>
                <div className={props.className}>
                    <div className="img-container">
                        <img src={props.image} alt="avatar"/>
                    </div>
                    {props.name && <h6>{props.name}</h6>}
                    {props.span && <span>{props.span}</span>}
                </div>
            </Fragment>}
        </Fragment>
    )
};

export default Avatar;
