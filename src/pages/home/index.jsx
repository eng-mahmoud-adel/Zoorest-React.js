import React, {Fragment, useEffect} from 'react';
import RecentArticles from "./RecentArticles";
import {connect} from "react-redux";
import HeroSection from "./HeroSection";
import DownloadAppSection from "./DownloadAppSection";
import SponsoredProviderSection from "./SponsoredProviderSection";
import RecentQuestions from "./RecentQuestions";
import RecentPosts from "./RecentPosts";
import Testimonials from "./Testimonials";
import {getHomeData} from "../../store/actions/pages";
import {Helmet} from "react-helmet";

const HomeContainer = ({currentLocale, seo, getHomeData}) => {


    useEffect(() => {
        getHomeData();
    }, [getHomeData]);

    return (
        <Fragment>
            {
                seo && <Helmet>

                    {seo.title && <title>{seo.getLocalizedTitle(currentLocale)}</title>}

                    {seo.meta_keywords &&
                    <meta name="keywords" content={seo.getLocalizedKeywords(currentLocale)}/>}

                    {seo.meta_description &&
                    <meta name="description" content={seo.getLocalizedDescription(currentLocale)}/>}

                    {seo.updated_at && <meta name="og:updated_time" content={seo.updated_at}/>}
                </Helmet>
            }

            <section id="section-hero" className="container pt-sm-5 pt-0 pb-5">
                <HeroSection/>
            </section>

            <section id="section-download-apps" className="container">
                <DownloadAppSection/>
            </section>

            <section id="section-recent-questions">
                <RecentQuestions/>

            </section>

            <section id="section-nearest-provider" className="h-100">
                <div id="left-background" className="h-100"/>
                <div id="right-background" className="h-100"/>

                <div className="container pt-4">
                    <SponsoredProviderSection/>
                </div>
            </section>

            <section id="section-recent-posts" className="">
                <div className="container pt-4">
                    <RecentPosts/>
                </div>
            </section>

            <section id="section-recent-articles">
                <div className="container pt-4">
                    <RecentArticles/>
                </div>
            </section>

            <section id="section-testimonials" className="">
                <div className="container py-5">
                    <Testimonials/>
                </div>
            </section>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    seo: state.pages.seo,

    currentLocale: state.i18n.value,

    authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
    getHomeData: () => {
        dispatch(getHomeData());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

