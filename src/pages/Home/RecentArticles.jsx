import React, {Fragment} from 'react'
import Article from "../../components/Cards/Articles/Article";
import SlickSlider from "../../components/Helpers/SlickSlider";
import {Link} from "react-router-dom";
import {ArticleLoadingAnimationBar} from "../../components/Cards/Articles/LoadingAnimations/Article";
import {withTranslation} from 'react-i18next';
import {connect} from "react-redux";

const RecentArticles = withTranslation()(({articles, currentLocale, t}) => {

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
                    <h3>
                        {t('recent_articles')}
                    </h3>
                </div>
                <div className="col-md-6"/>
                <Link to="/article" className="col-md-3">{t('see_more_articles')}</Link>
            </div>

            <div className="row d-none d-lg-flex">

                {articles ? articles.map((article, index) => (
                    <div className="col-lg-4" key={index}>
                        <Article className="shadow-sm" key={index} model={article}/>

                    </div>
                )) : <Fragment>
                    <ArticleLoadingAnimationBar count={3}/>
                </Fragment>}

            </div>

            <SlickSlider settings={slickSettings} className="d-lg-none">
                {articles ? articles.map((article, index) => (
                        <Article className="shadow-sm" key={index} model={article}/>
                    )) :
                    <div className="row">
                        <ArticleLoadingAnimationBar count={3}/>
                    </div>
                }
            </SlickSlider>
        </Fragment>
    );
});

const mapStateToProps = (state) => ({
    articles: state.articles.recent,
    currentLocale: state.i18n,

});

export default connect(mapStateToProps)(withTranslation()(RecentArticles));
