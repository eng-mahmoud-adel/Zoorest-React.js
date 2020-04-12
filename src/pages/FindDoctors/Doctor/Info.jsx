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
                            <Card.Text>
                                {/* the logic needs some modification */}
                                {props.provider.map(provider => (provider.id === id) ? (provider.about === null ?
                                    <div key={provider.id}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                        pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam
                                        molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at,
                                        auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh.
                                        Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit
                                        gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce
                                        porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue
                                        mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt
                                        turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur
                                        tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna
                                        faucibus sem, in condimentum est augue tristique risus.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium
                                        tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et
                                        aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc.
                                        Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse
                                        luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec
                                        vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at
                                        suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris
                                        venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium
                                        tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et
                                        aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc.
                                        Phasellus li… <a href="#" className="font-weight-bold">See More</a>
                                    </div> : "") : "ops")}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className= "doctor-info">
                        <Card.Body>
                            <Card.Title className= "font-weight-bold">Certificates</Card.Title>
                            {/* the logic needs some modification */}
                            {props.provider.map((provider) => (provider.id === id) ? (provider.provider_data.certificate_url !== null ?
                                <div key={provider.id}>
                                    <img src={provider.provider_data.certificate_url} alt=""/>
                                </div> : <div className="row" key={provider.id}>
                                    <div className="col-md-3">
                                        <img src={provider.photo.path_medium} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src={provider.photo.path_medium} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="col-md-3">
                                        <img src={provider.photo.path_medium} alt="" className="img-fluid"/>
                                    </div>
                                </div>)
                                :
                                "ops")}
                        </Card.Body>
                    </Card>
                </div>

                <div className= "col-md-5">
                    <Booking provider= {props.provider} />
                </div>
            </div>
        </Fragment>
    )
}

export default Info;
