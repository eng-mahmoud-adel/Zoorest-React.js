import React from 'react'
import {Card, Col, Row} from "react-bootstrap";

const ArticleLoadingAnimation = props => {

    return (
        <Card className="article-card loading-card">
            <Card.Title>
                <div className="bars">
                    <div className="bar bar1 loading"/>
                    <div className="bar bar2 loading"/>
                </div>
            </Card.Title>

            <div className="img-container">
                <div className="image loading"/>
            </div>
            <Card.Body>
                <Card.Text>
                    <div className="bars">
                        <div className="bar bar1 loading"/>
                        <div className="bar bar2 loading"/>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs={9} md={7} lg={7} xl={8}>
                        {/*todo use profile loading animation*/}
                        <div className="bar bar2 loading"/>
                    </Col>

                    <Col xs={3} md={5} lg={5} xl={4} className="text-right">
                        <div className="bar bar2 loading"/>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
};

export default ArticleLoadingAnimation;
