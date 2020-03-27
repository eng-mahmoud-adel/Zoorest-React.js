import React from 'react';
import img from '../../../images/article-cover.png';
import Avatar from '../../Avatars/Avatar';
import image from "../../../images/placeholders/100X100.png";
import {Card} from "react-bootstrap";

const SinglePost = (props) => {
    return (
        <Card className={`advertisement-card ${props.className}`}>
            <div className="img-container">
                <Card.Img variant="top" src={img} className="card-img-top img-fluid h-100" alt=""/>
            </div>
            <Card.Body>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text>{props.cardText}</Card.Text>
                <div className="note">
                    <h6 className="small-text">Notes :</h6>
                    <p className="note-text">{props.noteText}</p>
                </div>
            </Card.Body>
            <div className="card-footer">
                <div className="row">
                    <div className="col-4 mb-2"><span className="detail">Classification :</span> <span
                        className="value">{props.classification}</span></div>
                    <div className="col-2 mb-2"><span className="detail">Type :</span> <span
                        className="value">{props.type}</span></div>
                    <div className="col-3 mb-2"><span className="detail">Age :</span> <span
                        className="value">{props.age}</span></div>
                    <div className="col-3 mb-2"><span className="detail">Gender :</span> <span
                        className="value">{props.gender}</span></div>
                    <div className="col-4 mb-2"><span className="detail">Date of Birth :</span> <span
                        className="value">{props.dateOfBirth}</span></div>
                    <div className="col-2 mb-2"><span className="detail">Weight :</span> <span
                        className="value">{props.weigth}</span></div>
                    <div className="col-3 mb-2"><span className="detail">Separation :</span> <span
                        className="value">{props.separation}</span></div>
                    <div className="col-12 mb-2"><span className="detail">Vaccnation :</span> <span
                        className="value">{props.vaccnation}</span></div>
                    <div className="col-12 mb-2"><span className="detail">Purty of The Platioon :</span> <br/><span
                        className="value">{props.purtyOfThePlatioon}</span></div>
                    <div className="col-12 mb-2"><span className="detail">Distinctive Signs :</span> <br/><span
                        className="value">{props.distinctiveSigns}</span></div>
                    <div className="col-5 mb-2"><span className="detail">License Number :</span> <span
                        className="value">{props.licenseNumber}</span></div>
                    <div className="col-5 mb-2"><span className="detail">Price :</span> <span
                        className="value">{props.price}</span></div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <Avatar className="avatar-four" name="Terry Williams" span="Manager" image={image}/>
                    </div>
                    <div className="icons col-4">
                        <div className="row">
                            <div className="col-7">
                                <i className={props.icon_one + " icon-one"} aria-hidden="true"><span
                                    className={props.number_one}>{props.number_one}</span></i>
                            </div>
                            <div className="col-5">
                                <i className={props.icon_two + " icon-two"} aria-hidden="true"><span
                                    className={props.number_two}>{props.number_two}</span></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default SinglePost;
