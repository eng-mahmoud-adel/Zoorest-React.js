import React, {Fragment} from 'react';
import Card from "react-bootstrap/Card";
import {ProfileAvatarLoadingAnimation} from "../../../Avatars/ProfileAvatar";

const QuestionLoadingAnimation = ({className}) => {

    return (
        <Card className={`question-card loading-card my-2 w-100 ${className || ""}`}>
            <Card.Body>
                <Card.Subtitle className="small-text">
                    <div className="bars">
                        <div className="bar loading-time loading"/>
                    </div>
                </Card.Subtitle>
                <div className="bars">
                    <div className="bar bar2 loading"/>
                </div>
                <Card.Text className="m-0">
                    <div className="bars">
                        <div className="bar bar1 loading"/>
                        <div className="bar bar1 loading"/>
                        <div className="bar bar2 loading"/>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="pb-0">
                <div className="row">
                    <div className="col-xl-4 col-md-6 mb-3 mb-xl-0">

                        <ProfileAvatarLoadingAnimation/>
                    </div>
                    <div className="col-xl-4 col-md-6 mb-3 mb-xl-0 icons align-self-center">
                        {/*<div className="row">*/}
                        {/*    <div className="bars">*/}
                        {/*        <div className="bar bar2 loading"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    <div
                        className="col-xl-4 col-md-6 text-center align-content-center align-items-center align-self-center">
                        <div className="bars">
                            <div className="bar loading-button loading"/>
                        </div>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    )
};

export const QuestionLoadingAnimationBar = ({size, count}) => {

    return (
        <Fragment>
            {[...Array(count)].map((n, index) => (
                <div key={`question-animation-${index}`} className={` ${size}`}>
                    <QuestionLoadingAnimation/>
                </div>
            ))}
        </Fragment>
    )
}

QuestionLoadingAnimationBar.defaultProps = {
    size: "col-lg-4",
    count: 3,
}
export default QuestionLoadingAnimation;
