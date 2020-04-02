import React from 'react';
import Question from '../../../components/Cards/Questions/Question';
import Tag from '../../../components/Tags/Tag';

const Questions = () => {
    return (
        <div className= "row">
            <div className= "col-md-9 mb-3">
                <Question className= "question-card" cardTitle= "Is this statement, “i see him last night” can be understood as “I saw him last night”?" cardTime= "2 hours ago" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" tag= {Tag} />
            </div>
            <div className= "col-md-9 mb-3">
                <Question className= "question-card" cardTitle= "Is this statement, “i see him last night” can be understood as “I saw him last night”?" cardTime= "2 hours ago" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" tag= {Tag} />
            </div>
            <div className= "col-md-9 mb-3">
                <Question className= "question-card" cardTitle= "Is this statement, “i see him last night” can be understood as “I saw him last night”?" cardTime= "2 hours ago" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" tag= {Tag} />
            </div>
        </div>
    )
}

export default Questions;
