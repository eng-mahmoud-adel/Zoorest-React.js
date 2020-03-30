import React, {Fragment} from 'react';
import LazyLoad from "react-lazyload";

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
                        <LazyLoad unmountIfInvisible={true} once={true}>
                            <img src={props.image} width={props.radius} alt="avatar"/>
                        </LazyLoad>
                    </div>
                    {props.name && <h6>{props.name}</h6>}
                    {props.span && <span>{props.span}</span>}
                </div>
            </Fragment>}
        </Fragment>
    )
};

export default Avatar;
