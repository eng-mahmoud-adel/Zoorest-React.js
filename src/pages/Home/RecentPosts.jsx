import React from 'react';
import PostImage from '../../images/assets/Group 22@3x.png';
import Tabs from '../../components/Tabs/Tabs';
import Post from '../../components/Cards/Posts/Post';

const RecentPosts = (props) => {
    const {data}= props;
    return (
        <div className= "row">
            <div className= "col-md-6 mt-5">
                <img src= {PostImage} alt= "" className= "img-fluid" />
            </div>
            <div className= "col-md-6">
                <h1 className= "title font-weight-bold">Join the Largest Community for adoption and lost Pets</h1>
                <Tabs />
                <div className= "my-3">
                    <Post data= {data} className= "post-card" cardTitle= "German Shepherd for Adaption" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" />
                </div>
            </div>
        </div>
    );
};

export default RecentPosts;
