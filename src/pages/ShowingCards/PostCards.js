import React from 'react';
import Post from '../../components/Cards/Posts/Post';
import AddPost from '../../components/Cards/Posts/AddPost';
import SinglePost from '../../components/Cards/Posts/SinglePost';

const PostCards = () => {
    return (
        <div>
            <div className= "container mt-5">
                <div className= "row">
                    <div className= "col-9 mb-3">
                        <Post className= "post-card" cardTitle= "German Shepherd for Adaption" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" />
                    </div>
                    <div className= "col-3">
                        <AddPost className= "add-post-card" cardTitle= "Do you have something to post ?" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet." />
                    </div>

                    <div className= "col-9 mb-3">
                        <Post className= "post-card" cardTitle= "German Shepherd for Adaption" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" />
                    </div>

                    <div className= "col-10 mb-3">
                        <SinglePost className= "single-post-card" cardTitle= "German Shepherd for Adaption" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction." noteText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting." classification= "German Shepard" type= "Dog" age= "13 months" gender= "male" dateOfBirth= "November 9, 2017" weigth= "7.2 kg" separation= "Dog" vaccnation= "Distemper, Parvo, Canine Infectious Hepatitis, and Rabies" purtyOfThePlatioon= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities" distinctiveSigns= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting." licenseNumber= "1564165165165165" price= "5,000 EGP" icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "255 comments" number_two= "355 likes" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCards;
