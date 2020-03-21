import React from 'react'
import Article from "../../components/Cards/Articles/Article";

const RecentArticles = props => {
    const articles = props.articles;

    return (
        <div>
            <div className="row">
                <h2 className="col-md-3">Recent Articles</h2>
                <div className="col-md-6"/>
                <a href="/articles" className="col-md-3">See More Articles</a>{/*todo localise*/}
            </div>

            <div className="row">

                {articles ? articles.map((article,index) => (
                    <div className="col-lg-4" key={index}>
                        {/*pass the current article to the component */}
                        <Article className="card-one" article={article} link_size="col-8" icons_size="col-4"/>
                    </div>
                )) : <h1>loading</h1>}

            </div>
        </div>
    );
};

export default RecentArticles;
