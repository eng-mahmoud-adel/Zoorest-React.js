import React, {useEffect} from 'react';
import {connect} from "react-redux";
import TopQuestionsMembers from "../../../components/Cards/Questions/TopQuestionsMembers";
import ArticleTwo from '../../../components/Cards/Articles/ArticleTwo';

function SingleArticleContainer() {
    return (
        <div className= "row">
            <div className= "col-md-8">
                <ArticleTwo />
            </div>
            <div className= "col-md-4">
                <div className="row mb-3 d-none d-lg-block">
                    <TopQuestionsMembers className="top-membes-card" cardTitle="Top Questions"
                                            cardText="How to approach applying for a job at a company ?"/>
                </div>
            </div>
        </div>
    )
}

export default SingleArticleContainer;