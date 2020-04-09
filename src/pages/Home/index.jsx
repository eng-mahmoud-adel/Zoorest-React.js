import React, {Fragment, useEffect} from 'react';
import RecentArticles from "./RecentArticles";
import {connect} from "react-redux";
import HeroSection from "./HeroSection";
import DownloadAppSection from "./DownloadAppSection";
import SponsoredProviderSection from "./SponsoredProviderSection";
import RecentQuestions from "./RecentQuestions";
import RecentPosts from "./RecentPosts";
import Testimonials from "./Testimonials";
import {getRecentArticles} from "../../store/actions/articles";

const HomeContainer = (props) => {

    useEffect(() => {
        props.getRecentArticles()
    }, []); //

    return (
        <Fragment>
            <section id="section-hero" className="container pt-sm-5 pt-0 pb-5">
                <HeroSection data={props.heroData}/>
            </section>

            <section id="section-download-apps" className="container">
                <DownloadAppSection downloadData={props.downloadData}/>
            </section>

            <section id="section-recent-questions">
                <RecentQuestions questions={props.recentQuestions}/>

            </section>

            <section id="section-nearest-provider" className="h-100">
                <div id="left-background" className="h-100"/>
                <div id="right-background" className="h-100"/>

                <div className="container pt-4">
                    <SponsoredProviderSection providers={props.sponsoredProviders}/>
                </div>
            </section>

            <section id="section-recent-posts" className="">
                <div className="container pt-4">
                    <RecentPosts data={props.recentPosts}/>
                </div>
            </section>

            <section id="section-recent-articles" className="container">

                <RecentArticles articles={props.recentArticles}/>
            </section>

            <section id="section-testimonials" className="">
                {/*TODO https://trello.com/c/p5aLLffM/*/}
                <div className="container py-5">
                    <Testimonials testimonials={props.testimonials}/>
                </div>
            </section>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    heroData: state.homepage.heroSection,
    downloadData: state.homepage.downloadAppSection,
    recentQuestionsData: state.homepage.recentQuestionsSection,

    recentArticles: state.articles.recent,
    sponsoredProviders: state.providers.sponsored,
    recentQuestions: state.questions.recent_questions,
    recentPosts: state.posts,
    testimonials: state.testimonials,

    authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
    getRecentArticles: () => {
        dispatch(getRecentArticles());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

