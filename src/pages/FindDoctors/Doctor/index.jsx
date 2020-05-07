import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Info from './Info';
import {Tab, Tabs} from 'react-bootstrap';
import RateBar from '../../../components';
import {CallIcon, ViewsIcon} from "../../../components/Icons";
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
import ProfileAvatar from "../../../components/Avatars/ProfileAvatar";
import {Text18Bold, Text48} from "../../../components/UI/Typography";
import QuestionLoadingAnimation from "../../../components/Cards/Questions/LoadingAnimations/Question";
import ArticleLoadingAnimation, {ArticleLoadingAnimationBar} from "../../../components/Cards/Articles/LoadingAnimations/Article";

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
                stateData.loading === false &&
                <div className="row" key={stateData.model.id}>
                    <div className="provider-image col-xl-2 col-md-3 col-sm-3 col-12">
                        <ProfileAvatar model={stateData.model} withName={false} withJoiningDate={false}/>
                    </div>

                    <div className="col-xl-10 col-md-9 col-sm-9 col-12">
                        <h2 className="mt-xl-0 mt-lg-2">
                            <Text48>{stateData.model.official_name || stateData.model.name}</Text48>
                        </h2>

                        <div className="d-flex">
                            <div>
                                <RateBar rate={stateData.model.provider.average_rating}/>
                            </div>
                            <div className="views ml-5">
                                <ViewsIcon
                                    text={"Views"}
                                    className={"mr-2"}
                                    value={stateData.model.views_count}/>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="contact">
                                <CallIcon className="mr-2 text-info" value={stateData.model.phone}/>
                            </div>
                            {
                                stateData.model.additional_phone_number &&
                                <div className="contact ml-5">
                                    <CallIcon className="mr-2 text-info"
                                              value={stateData.model.additional_phone_number}/>
                                </div>}
                        </div>

                        <div className="address mt-2">
                            <Text18Bold>{stateData.model.provider.address}</Text18Bold> | <a
                            href={`https://www.google.com/maps/@${stateData.model.provider.latitude()},${stateData.model.provider.longitude()},15z`}
                            className="font-weight-bold" target="_blank" rel="noopener noreferrer">
                            <Text18Bold className="text-info">Show on Maps</Text18Bold>
                        </a>
                        </div>

                    </div>
                </div>
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
                        loadMoreMessage={"Load More Questions"}
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
                            loadMoreMessage={"Load More Articles"}
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
