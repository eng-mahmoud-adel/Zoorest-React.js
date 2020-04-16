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
import {loginUser} from "../../store/actions/auth";
import {getHomeData} from "../../store/actions/home";

const HomeContainer = (
    {
        currentLocale, heroData, downloadData, recentQuestions, sponsoredProviders,
        recentPosts, recentArticles, testimonials,
        getRecentArticles, login, getHomeData
    }) => {

    useEffect(() => {
        getRecentArticles();
        login({
            "email": "rami.amro.ahmed@gmail.com",
            "password": "123456",
        });
        getHomeData();
    }, [getRecentArticles, login, getHomeData]);

    return (
        <Fragment>
            <section id="section-hero" className="container pt-sm-5 pt-0 pb-5">
                <HeroSection currentLocale={currentLocale} data={heroData}/>
            </section>

            <section id="section-download-apps" className="container">
                <DownloadAppSection currentLocale={currentLocale} downloadData={downloadData}/>
            </section>

            <section id="section-recent-questions">
                <RecentQuestions currentLocale={currentLocale} questions={recentQuestions}/>

            </section>

            <section id="section-nearest-provider" className="h-100">
                <div id="left-background" className="h-100"/>
                <div id="right-background" className="h-100"/>

                <div className="container pt-4">
                    <SponsoredProviderSection currentLocale={currentLocale} providers={sponsoredProviders}/>
                </div>
            </section>

            <section id="section-recent-posts" className="">
                <div className="container pt-4">
                    <RecentPosts currentLocale={currentLocale} data={recentPosts}/>
                </div>
            </section>

            <section id="section-recent-articles" className="container">

                <RecentArticles currentLocale={currentLocale} articles={recentArticles}/>
            </section>

            <section id="section-testimonials" className="">
                <div className="container py-5">
                    <Testimonials currentLocale={currentLocale} testimonials={testimonials}/>
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
    currentLocale: state.i18n.value,

    authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
    getRecentArticles: () => {
        dispatch(getRecentArticles());
    },
    login: (values) => {
        dispatch(loginUser(values))
    },
    getHomeData: () => {
        dispatch(getHomeData());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

