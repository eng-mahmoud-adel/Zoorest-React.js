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

const HomeContainer = (
    {
        currentLocale, page, recentQuestions, sponsoredProviders,
        recentPosts, recentArticles, testimonials,
        getHomeData
    }) => {

    const {heroSection, downloadAppSection, recentQuestionsSection, sponsoredProvidersSection} = page
    useEffect(() => {
        getHomeData();
    }, [getHomeData]);

    return (
        <Fragment>
            {
                <Helmet>

                    {page.seo.title && <title>{page.seo.getLocalizedTitle(currentLocale)}</title>}

                    {page.seo.meta_keywords &&
                    <meta name="keywords" content={page.seo.getLocalizedKeywords(currentLocale)}/>}

                    {page.seo.meta_description &&
                    <meta name="description" content={page.seo.getLocalizedDescription(currentLocale)}/>}

                    {page.seo.updated_at && <meta name="og:updated_time" content={page.seo.updated_at}/>}
                </Helmet>
            }

            <section id="section-hero" className="container pt-sm-5 pt-0 pb-5">
                <HeroSection currentLocale={currentLocale} data={heroSection}/>
            </section>

            <section id="section-download-apps" className="container">
                <DownloadAppSection currentLocale={currentLocale} downloadData={downloadAppSection}/>
            </section>

            <section id="section-recent-questions">
                <RecentQuestions currentLocale={currentLocale} questions={recentQuestions}
                                 questionsData={recentQuestionsSection}/>

            </section>

            <section id="section-nearest-provider" className="h-100">
                <div id="left-background" className="h-100"/>
                <div id="right-background" className="h-100"/>

                <div className="container pt-4">
                    <SponsoredProviderSection currentLocale={currentLocale} providers={sponsoredProviders}
                                              section={sponsoredProvidersSection}/>
                </div>
            </section>

            <section id="section-recent-posts" className="">
                <div className="container pt-4">
                    <RecentPosts currentLocale={currentLocale} data={recentPosts}/>
                </div>
            </section>

            <section id="section-recent-articles">
                <div className="container pt-4">
                    <RecentArticles currentLocale={currentLocale} articles={recentArticles}/>
                </div>
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
    page: state.pages.homepage,
    recentArticles: state.articles.recent,
    sponsoredProviders: state.providers.sponsored,
    recentQuestions: state.questions.recent_questions,
    recentPosts: state.posts,
    testimonials: state.testimonials,
    currentLocale: state.i18n.value,

    authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
    getHomeData: () => {
        dispatch(getHomeData());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

