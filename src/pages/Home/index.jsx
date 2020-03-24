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
                {/*TODO https://trello.com/c/k437rjNI/*/}

                <HeroSection data={props.heroData}/>
            </section>

            <section id="section-download-apps" className="container">
                {/*TODO https://trello.com/c/FGK2BmVx/*/}
                <DownloadAppSection downloadData= {props.downloadData}/>
            </section>

            <section id="section-nearest-provider" className="container">
                {/*TODO https://trello.com/c/eQEIbLS0/*/}

                <SponsoredProviderSection providers={props.sponsoredProviders}/>
            </section>

            <section id="section-recent-questions" className="container-fluid">
                {/*TODO https://trello.com/c/GOceSjXD/*/}

                <RecentQuestions questions={props.recentQuestions}/>
            </section>

            <section id="section-recent-posts" className="container">
                {/*TODO https://trello.com/c/aCBqlXgN/*/}

                <RecentPosts data={props.recentPosts}/>
            </section>

            <section id="section-recent-articles" className="container">
                {/*TODO https://trello.com/c/ib36x9yX/*/}

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
    recentPosts: state.posts.recent,
    testimonials: state.testimonials,

    //todo authUser: state.authUser,
});

export default connect(mapStateToProps)(HomeContainer);

