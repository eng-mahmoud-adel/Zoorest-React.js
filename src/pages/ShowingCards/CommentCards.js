import React from 'react';
import Comment from '../../components/Cards/Comments/Comment';
import LeaveComment from '../../components/Cards/Comments/LeaveComment';

const CommentCards = () => {
    return (
        <div>
            <div className= "container my-3">
                <div className= "row">
                    <div className= "col-10 mb-3">
                        <LeaveComment className= "leave-comment-card" cardTitle= "Leave a comment" cardText= "There are numerous success stories you will hear about businesses making it good on the internet . The troubling thing is, there are maybe a tenfold or even a hundredfold of stories inconsistent to theirs. Many have unsuccessfully launched a business venture that is internet based but only a handful shall succeed.hundredfold of stories inconsistent to theirs. Many have unsuccessfully launched a business venture that is internet based but only a handful shall succeed." />
                    </div>

                    <div className= "col-10 mb-3">
                        <Comment className= "comment-card" cardTime= "2 hours ago" cardText= "If a Google employee reveals that he or she intends to leave because they have *accepted*–not received–an offer from a talent competitor like Facebook, in some cases they will be “walked off” so that they will no longer have access to Google’s proprietary information. More important than having that employee leave the physical building is shutting off their employee account; and most tech knowledge workers can’t perform their jobs without access to the company’s Intranet, VPN, or email." icon= "fa fa-heart-o" number= "5555" />
                    </div>

                    <div className= "col-10 mb-3">
                        <Comment className= "comment-card" cardTime= "2 hours ago" cardText= "If a Google employee reveals that he or she intends to leave because they have *accepted*–not received–an offer from a talent competitor like Facebook, in some cases they will be “walked off” so that they will no longer have access to Google’s proprietary information. More important than having that employee leave the physical building is shutting off their employee account; and most tech knowledge workers can’t perform their jobs without access to the company’s Intranet, VPN, or email." icon= "fa fa-heart-o" number= "5555" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCards;
