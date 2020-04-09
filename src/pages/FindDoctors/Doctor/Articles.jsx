import React from 'react';
import Button from '../../../components/Buttons/Button/Button';
import Article from '../../../components/Cards/Articles/Article';

const Articles = () => {
    return (
        <div>
            <div className= "col-md-8 mx-auto mb-4">
                <Button text="+ Add New Article" color="btn btn-danger" size="btn-sm"/>
            </div>
            <div className= "row">
                    <div className= "col-4">
                        <Article className= "article-card" cardTitle= "Advertising Secrets" cardTime= "2 hours ago" cardText= "I’m not really sure how old I was when I got the gift for Christmas, but I remember thinking it was a pretty impressive piece of electronic hardware." icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" link_size= "col-8" icons_size= "col-4" />
                    </div>
                    <div className= "col-4">
                        <Article className= "article-card" cardTitle= "Advertising Secrets" cardTime= "2 hours ago" cardText= "I’m not really sure how old I was when I got the gift for Christmas, but I remember thinking it was a pretty impressive piece of electronic hardware." icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" link_size= "col-8" icons_size= "col-4" />
                    </div>
                    <div className= "col-4 mb-3">
                        <Article className= "article-card" cardTitle= "Advertising Secrets" cardTime= "2 hours ago" cardText= "I’m not really sure how old I was when I got the gift for Christmas, but I remember thinking it was a pretty impressive piece of electronic hardware." icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" link_size= "col-8" icons_size= "col-4" />
                    </div>

                    <div className= "col-8">
                        <Article className= "article-card-wide" cardTitle= "There's A Rice Deal Out There For Everyone" cardTime= "2 hours ago" cardText= "You love having a second home but the mortgage is putting a crater in your wallet. Many second home owners turn to renting their property as a vacation rental to help defray the costs of ownership. How do you price a vacation home rental without overcharging but making enough to cover your costs? Do your research.
                            Find out what other owners of, similar sized homes in the area are charging." icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" link_size= "col-10" icons_size= "col-2" />
                    </div>
                    <div className= "col-4 mb-3">
                        <Article className= "article-card" cardTitle= "Advertising Secrets" cardTime= "2 hours ago" cardText= "I’m not really sure how old I was when I got the gift for Christmas, but I remember thinking it was a pretty impressive piece of electronic hardware." icon_one= "fa fa-commenting-o" icon_two= "fa fa-heart-o" number_one= "2" number_two= "3" link_size= "col-8" icons_size= "col-4" />
                    </div>
                </div>
        </div>
    )
}

export default Articles;