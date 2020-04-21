import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Article from '../../../components/Cards/Articles/Article';
import ArticleTwo from '../../../components/Cards/Articles/ArticleTwo';

function SingleArticleContainer() {
    return (
        <div className= "row">
            <div className= "col-md-8">
                <ArticleTwo />
            </div>
            <div className= "col-md-4">
                <Article />
            </div>
        </div>
    )
}

export default SingleArticleContainer;