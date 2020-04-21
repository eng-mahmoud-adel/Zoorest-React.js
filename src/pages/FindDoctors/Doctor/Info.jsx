import React, {Fragment} from 'react';
import {Card} from 'react-bootstrap';
import Booking from '../../../components/Cards/Booking/Booking';

const Info = (props) => {

    const {id} = props;

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-7">
                    <Card className= "doctor-info mb-4">
                        <Card.Body>
                            <Card.Title className="font-weight-bold">About The Doctor</Card.Title>
                        
                            {props.provider.about && 
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna faucibus sem, in condimentum est augue tristique risus.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus li… <a href= "#" className= "font-weight-bold">See More</a>
                                </Card.Text>
                            }
                            
                        </Card.Body>
                    </Card>

                    <Card className= "doctor-info">
                        <Card.Body>
                            <Card.Title className= "font-weight-bold">Certificates</Card.Title>
                            {props.provider.provider_data.certificate_url !== null ?
                                <div className= "col-md-3 mb-md-0 mb-2">
                                    <img src={props.provider.provider_data.certificate_url} alt=""/>
                                </div> : <div className="row">
                                <div className= "col-md-3 mb-md-0 mb-2">
                                        <img src={props.provider.photo.path_medium} alt="" className="img-fluid"/>
                                    </div>
                                <div className= "col-md-3 mb-md-0 mb-2">
                                        <img src={props.provider.photo.path_medium} alt="" className="img-fluid"/>
                                    </div>
                                <div className= "col-md-3 mb-md-0 mb-2">
                                        <img src={props.provider.photo.path_medium} alt="" className="img-fluid"/>
                                    </div>
                                </div>}
                        </Card.Body>
                    </Card>
                </div>

                <div className= "col-md-5 mt-md-0 mt-4">
                    <Booking provider= {props.provider} />
                </div>
            </div>
        </Fragment>
    )
}

export default Info;
