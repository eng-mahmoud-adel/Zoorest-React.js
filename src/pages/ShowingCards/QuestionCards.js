import React from 'react';
import Question from '../../components/Cards/Questions/Question';
import Tag from '../../components/Tags/Tag';
import TopQuestions_Members from '../../components/Cards/Questions/TopQuestions_Members';
import Avatar from '../../components/Avatars/Avatar';
import AskQuestion from '../../components/Cards/Questions/AskQuestion';

const QuestionCards = () => {
    return (
        <div>
            <div className= "container mt-5">
                <div className= "row">
                    <div className= "col-9">
                        <div className= "row mb-3">
                            <Question className= "card-four" cardTitle= "Is this statement, “i see him last night” can be understood as “I saw him last night”?" cardTime= "2 hours ago" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" tag= {Tag} />
                        </div>
                        <div className= "row mb-3">
                            <Question className= "card-four" cardTitle= "Is this statement, “i see him last night” can be understood as “I saw him last night”?" cardTime= "2 hours ago" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" tag= {Tag} />
                        </div>
                        <div className= "row mb-3">
                            <Question className= "card-four" cardTitle= "Is this statement, “i see him last night” can be understood as “I saw him last night”?" cardTime= "2 hours ago" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" tag= {Tag} />
                        </div>
                    </div>
                    <div className= "col-3 px-5">
                        <div className= "row mb-3">
                            <AskQuestion className= "card-eleven" cardTextOne= "Questions" cardTextTwo= "Answers" numberOne= "33333" numberTwo= "33333" />
                        </div>
                        <div className= "row mb-3">
                            <TopQuestions_Members className= "card-five" cardTitle= "Top Questions" cardText= "How to approach applying for a job at a company ?" />
                        </div>
                        <div className= "row mb-3">
                            <TopQuestions_Members className= "card-five" cardTitle= "Top Members" avatar= {Avatar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCards;
