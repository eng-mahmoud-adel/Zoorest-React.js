import React from 'react';
import CardOne from '../../components/Cards/CardOne';
import CardTwo from '../../components/Cards/CardTwo';
import CardThree from '../../components/Cards/CardThree';

const Article = () => {
    return (
        <div>
            <div className= "container mt-5">
                <div className= "row">
                    <div className= "col-4">
                        <CardOne className= "card-one" cardTitle= "Advertising Secrets" cardTime= "2 hours ago" cardText= "I’m not really sure how old I was when I got the gift for Christmas, but I remember thinking it was a pretty impressive piece of electronic hardware." icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" link_size= "col-8" icons_size= "col-4" />
                    </div>
                    <div className= "col-4">
                        <CardOne className= "card-one" cardTitle= "Advertising Secrets" cardTime= "2 hours ago" cardText= "I’m not really sure how old I was when I got the gift for Christmas, but I remember thinking it was a pretty impressive piece of electronic hardware." icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" link_size= "col-8" icons_size= "col-4" />
                    </div>
                    <div className= "col-4 mb-3">
                        <CardOne className= "card-one" cardTitle= "Advertising Secrets" cardTime= "2 hours ago" cardText= "I’m not really sure how old I was when I got the gift for Christmas, but I remember thinking it was a pretty impressive piece of electronic hardware." icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" link_size= "col-8" icons_size= "col-4" />
                    </div>

                    <div className= "col-8">
                        <CardOne className= "card-two" cardTitle= "There's A Rice Deal Out There For Everyone" cardTime= "2 hours ago" cardText= "You love having a second home but the mortgage is putting a crater in your wallet. Many second home owners turn to renting their property as a vacation rental to help defray the costs of ownership. How do you price a vacation home rental without overcharging but making enough to cover your costs? Do your research.
                            Find out what other owners of, similar sized homes in the area are charging." icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" link_size= "col-10" icons_size= "col-2" />
                    </div>
                    <div className= "col-4 mb-3">
                        <CardOne className= "card-one" cardTitle= "Advertising Secrets" cardTime= "2 hours ago" cardText= "I’m not really sure how old I was when I got the gift for Christmas, but I remember thinking it was a pretty impressive piece of electronic hardware." icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" link_size= "col-8" icons_size= "col-4" />
                    </div>
                    
                    <div className= "col-10 mb-3">
                        <CardTwo className= "card-three" cardTitle= "German Shepherd for Adaption" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" />
                    </div>

                    <div className= "col-10 mb-3">
                        <CardThree className= "card-four" cardTitle= "Is this statement, “i see him last night” can be understood as “I saw him last night”?" cardTime= "2 hours ago" cardText= "Audit Bureau of Circulations integrated the definition of this medium in its latest report. Legal rights are at least unclear for many common Internet activities, such as posting a picture that belongs to someone else to a social media account, covering a popular song on a YouTube video, or writing fanfiction. " icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Article;
