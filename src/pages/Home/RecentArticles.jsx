import React, {Fragment} from 'react'
import Article from "../../components/Cards/Articles/Article";
import SlickSlider from "../../components/Helpers/SlickSlider";
import {Link} from "react-router-dom";
import {Text32} from "../../components/UI/Typography";

const RecentArticles = props => {
    const articles = props.articles;
    const slickSettings = {
        rtl: false,//todo use variable when site localization is added
        infinite: true,
        dots: true,
        arrows: false,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: true,
        responsive: [
            {breakpoint: 9999, settings: "unslick"},
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '60px',

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '40px',
                }
            }
        ]
    };

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-3 title mt-0 pt-0">

                    <Text32>
                        Recent Articles
                    </Text32>
                </div>
                <div className="col-md-6"/>
                <Link to="/article" className="col-md-3">See More Articles</Link>{/*todo localise*/}
            </div>

            <div className="row d-none d-lg-flex">

                {articles && articles.map((article, index) => (
                    <div className="col-lg-4" key={index}>
                        <Article className="shadow-sm" key={index} model={article}/>
                    </div>
                ))}

            </div>

            <SlickSlider settings={slickSettings} className="d-lg-none">
                {articles && articles.map((article, index) => (
                    <Article className="shadow-sm" key={index} model={article}/>
                ))}
            </SlickSlider>
        </Fragment>
    );
};

export default RecentArticles;
