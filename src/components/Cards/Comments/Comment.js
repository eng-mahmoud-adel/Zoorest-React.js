import React from 'react';
import {Card, Row} from "react-bootstrap";
import {HeartIcon} from "../../Icons";
import ProfileAvatar, {ProfileAvatarLoadingAnimation} from "../../Avatars/ProfileAvatar";
import {VerticalEllipsisIcon} from '../../Icons/index';

const Comment = (props) => {
    const {model} = props;

    const showDropdown = () => {
        document.getElementById(`comment_${model.id}`).classList.toggle("show");

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                let dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    console.log(openDropdown)
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
        }

    return (
        <Card className={`comment-card ${props.className || ""}`}>
            <Card.Body>
                <div className="d-flex">

                    <small className="small-text">{model.humanizedCreatedAt()}</small>

                    <VerticalEllipsisIcon className="ml-auto dropbtn" style={{cursor: "pointer"}}
                                          onClick={showDropdown}/>
                    <div id={`comment_${model.id}`} className="dropdown-content">
                        <a href="#edit">Edit</a>
                        <a href="#remove">Remove</a>
                        <a href="#report">Report</a>
                    </div>
                </div>

                    <Card.Text>
                        {model && (model.body || model.text)}
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <div className="col-10 p-0">
                        <ProfileAvatar model={model.author}/>
                    </div>
                    <div className="p-0 icon align-self-end pull-right">

                        <HeartIcon value={model.likes_count}/>
                    </div>
                </Row>
            </Card.Footer>
        </Card>
    )
};
export const CommentLoadingAnimation = ({className}) => {

    return (
        <Card className={`comment-card loading-card ${className || ""}`}>
            <Card.Body>
                <Card.Subtitle className="small-text">
                    <div className="bars">
                        <div className="bar loading-time loading"/>
                    </div>
                </Card.Subtitle>
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
                </div>
            </Card.Footer>
        </Card>
    )
};

export default Comment;
