import React, {Fragment} from 'react'
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
                <div className="bars card-text">
                    <div className="bar bar1 loading"/>
                    <div className="bar bar1 loading"/>
                    <div className="bar bar2 loading"/>
                </div>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs={9} md={7} lg={7} xl={8}>
                        <div className="bars">
                            <div className="bar bar2 loading"/>
                        </div>
                    </Col>

                    <Col xs={3} md={5} lg={5} xl={4} className="text-right">
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
};

export const
    ArticleLoadingAnimationBar = ({size, count}) => {

        return (
            <Fragment>
                {[...Array(count)].map((n, index) => (
                    <div key={`article-animation-${index}`} className={` ${size}`}>
                        <ArticleLoadingAnimation/>
                    </div>
                ))}
            </Fragment>
        )
    }

ArticleLoadingAnimationBar.defaultProps = {
    size: "col-lg-4",
    count: 3,
}
export default ArticleLoadingAnimation;
