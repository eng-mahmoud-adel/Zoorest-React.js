import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Info from './Info';
import {Tab, Tabs} from 'react-bootstrap';
import {showModal} from "../../../store/actions/modal";
import {
    callProvider,
    getMoreProviderArticles,
    getMoreProviderQuestions,
    getProviderArticles,
    getProviderQuestions,
    getSingleProvider,
    setSingleProvider,
    viewProvider
} from "../../../store/actions/providers";
import LazyList from "../../../components/DataList";
import Article from "../../../components/Cards/Articles/Article";
import Question from "../../../components/Cards/Questions/Question";
import QuestionLoadingAnimation from "../../../components/Cards/Questions/LoadingAnimations/Question";
import ArticleLoadingAnimation, {ArticleLoadingAnimationBar} from "../../../components/Cards/Articles/LoadingAnimations/Article";
import UserBio, {UserBioLoadingAnimation} from "../../../components/UserBio";

const DoctorProfile = (
    {
        stateData,
        providers, match,
        incrementViews,
        setSingleProvider,
        getSingleProvider,
        getProviderArticles, getMoreProviderArticles,
        getProviderQuestions, getMoreProviderQuestions,

    }) => {

    const [key, setKey] = useState('doctor-information');
    const id = match.params.id;
    // const singleProvider = provider.filter(provider => provider.id == id);
    const singleProvider = providers.find(provider => (provider.getKey() === id))

    useEffect(() => {
        if (singleProvider) {
            setSingleProvider(singleProvider)
        } else {
            getSingleProvider(id);
            incrementViews(id);
        }

    }, [setSingleProvider, getSingleProvider, incrementViews, id, singleProvider]);

    useEffect(() => {
        if (id)
            getProviderArticles(id);
    }, [getProviderArticles, id]);

    useEffect(() => {
        if (id)
            getProviderQuestions(id);
    }, [getProviderQuestions, id]);

    return (
        <div className="container profile my-5 pt-5">

            {
                stateData.loading === false ?
                    <UserBio user={stateData.model}/> :
                    <UserBioLoadingAnimation/>
            }

            <Tabs
                className="my-5"
                id="doctor-profile"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="doctor-information" title="Doctor Information">
                    {stateData.loading === false && <Info user={stateData.model}/>}
                </Tab>
                <Tab eventKey="recent-questions" title="Recent Questions">

                    {stateData.loadingQuestions === false ? <LazyList
                        data={stateData.questions}
                        itemCols={"col-8"}
                        loadMoreMessage={"Load More question"}
                        component={Question}
                        placeholderComponent={QuestionLoadingAnimation}
                        fetchMoreData={getMoreProviderQuestions}
                        refresh={getProviderQuestions}
                    /> : <QuestionLoadingAnimation/>}
                </Tab>
                <Tab eventKey="doctor-articles" title="Doctor's Articles">
                    {!stateData.loadingArticles === false ?
                        <LazyList
                            data={stateData.articles}
                            itemCols={"col-4"}
                            loadMoreMessage={"Load More articles"}
                            component={Article}
                            placeholderComponent={ArticleLoadingAnimation}
                            fetchMoreData={getMoreProviderArticles}
                            refresh={getProviderArticles}
                        /> : <div className="row">
                            <ArticleLoadingAnimationBar/>
                        </div>}
                </Tab>
            </Tabs>
        </div>
    )
}

const mapStateToProps = (state) => ({
    providers: state.providers.all.data,
    // pageData: state.providersPage,
    stateData: state.singleProviderPage,
    authUser: state.authUser,
})
const mapDispatchToProps = dispatch => ({
    getSingleProvider: (id) => {
        dispatch(getSingleProvider(id));
    },
    setSingleProvider: (provider) => {
        dispatch(setSingleProvider(provider));
    },
    getProviderArticles: (slug) => {
        dispatch(getProviderArticles(slug));
    },
    getMoreProviderArticles: (nextPageUrl) => {
        dispatch(getMoreProviderArticles(nextPageUrl));
    },
    getProviderQuestions: (slug) => {
        dispatch(getProviderQuestions(slug));
    },
    getMoreProviderQuestions: (nextPageUrl) => {
        dispatch(getMoreProviderQuestions(nextPageUrl));
    },
    incrementViews: (provider_id) => {
        dispatch(viewProvider(provider_id))
    },
    incrementCalls: (provider_id) => {
        dispatch(callProvider(provider_id))
    },
    // like: () => {
    //     //todo implement
    // },
    showModal: (component) => {
        dispatch(showModal(component));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorProfile);
