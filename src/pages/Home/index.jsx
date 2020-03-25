import React, {Fragment} from 'react';
import RecentArticles from "./RecentArticles";
import {connect} from "react-redux";
import HeroSection from "./HeroSection";
import DownloadAppSection from "./DownloadAppSection";
import SponsoredProviderSection from "./SponsoredProviderSection";
import RecentQuestions from "./RecentQuestions";
import RecentPosts from "./RecentPosts";
import Testimonials from "./Testimonials";

const HomeContainer = (props) => {

    return (
        <Fragment>
            <section id="section-hero" className="container">
                <HeroSection data={props.heroData}/>
            </section>

            <section id="section-download-apps" className="container">
                <DownloadAppSection downloadData={props.downloadData}/>
            </section>

            <section id="section-recent-questions">
                <RecentQuestions questions={props.recentQuestions}/>

            </section>

            <section id="section-nearest-provider" className="">
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

            <section id="section-testimonials" className="container">
                {/*TODO https://trello.com/c/p5aLLffM/*/}

                <Testimonials testimonials={props.testimonials}/>
            </section>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    heroData: state.homepage.hero,
    // i added DownloadData
    downloadData: state.homepage.download,
    recentArticles: state.articles.recent,
    sponsoredProviders: state.providers.sponsored,
    recentQuestions: state.questions.recent,
    recentPosts: state.posts,
    testimonials: state.testimonials,

    //todo authUser: state.authUser,
});

export default connect(mapStateToProps)(HomeContainer);

