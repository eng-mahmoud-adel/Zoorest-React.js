import React, {useState} from 'react';
import PostImage from '../../images/assets/images/Group 22@3x.png';
import Tabs from 'react-bootstrap/Tabs';
import Post from '../../components/Cards/Posts/Post';
import Tab from "react-bootstrap/Tab";
import LazyLoad from "react-lazyload";
import {connect} from "react-redux";

const RecentPosts = ({posts, currentLocale}) => {

    const [key, setKey] = useState(Object.keys(posts)[0]);

    return (
        <div className="row">
            <div className="title d-lg-none">

                <h3>
                    Join the Largest Community for adoption and lost Pets
                </h3>

            </div>

            <div className="col-lg-6 mt-5">
                <LazyLoad unmountIfInvisible={true} once={true}
                          placeholder={<h5 className="lazy loading">loading...</h5>}>
                    <img src={PostImage} alt="" className="img-fluid"/>
                </LazyLoad>
            </div>
            <div className="col-lg-6">
                <div className="title d-none d-lg-block">
                    <h3>
                        Join the Largest Community for adoption and lost Pets
                    </h3>
                </div>

                <Tabs id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                      className="mb-4">

                    {
                        Object.keys(posts).map((key, index1) => {
                            return (
                                <Tab key={index1} eventKey={key} title={key}>
                                    {posts[key].data.length > 0 && <Post model={posts[key].data[0]}/>}
                                </Tab>
                            )
                        })
                    }

                </Tabs>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    posts: state.posts,
    currentLocale: state.i18n,

});

export default connect(mapStateToProps)(RecentPosts);

