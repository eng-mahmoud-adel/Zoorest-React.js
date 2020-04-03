import React from 'react';
import img from '../../../images/article-cover.png';
import {Card,Row,Col} from "react-bootstrap";

const Article = (props) => {
    const model = props.article;
    return (
        <Card className={"article-card m-1"}>
            <Card.Title>{model ? model.title : props.cardTitle}</Card.Title>
            <small className="small-text">{model ? model.human_created_at : props.cardTime}</small>
            <div className="img-container">
                <Card.Img variant={null} src={model ? model.photo.path_small : img} className="img-fluid h-100 w-100" alt=""/>
            </div>
            <Card.Body>
                <Card.Text>{model ? model.cleaned_body.substring(0, 200) : props.cardText}...</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs="8">
                        {/*TODO: Redirect to Article Page and pass the model object/id*/}
                        <a href="/" className="card-link">Read More</a>
                    </Col>

                    <Col xs="4">
                        <div className="icons">

                            <i className="fa fa-commenting-o icon-one" aria-hidden="true">
                                <span>{(model && model.comments_count) ? model.comments_count : 0}</span>
                            </i>

                            {/*Todo: add hover and favorite action when clicked*/}
                            <i className="fa fa-heart-o icon-two" aria-hidden="true">
                                <span>{(model && model.favorites) ? model.favorites : 0}</span>
                            </i>
                        </div>

                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
};

export default Article;
