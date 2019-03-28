import React from 'react'


const Tweet = (props) => {

  return(
    <div id="tweet-box">
        <div id="profile-photo">
          <img src={props.profilePhoto} />
        </div>

        <div id="tweet-content">
          <div id="user-info">
            <p id="username">{props.userName}</p><p id="screen-name">@{props.screenName}</p>
            </div>
            <div id="text">
            <p id="tweet-p">{props.text}</p>
        </div>
        <div id="image">
        <img src={props.image}/>
        </div>
        <div id="icons">
        <i className="fas fa-reply" onClick={props.handleReply}></i><i id={props.rtd} className="fas fa-retweet" onClick={props.handleRetweet}></i><span className="count">{props.rtCount}</span><i id={props.liked} className="fas fa-heart" onClick={props.handleLike}></i><span className="count">{props.likedCount}</span><i className="fas fa-ellipsis-h" onClick={props.handleMore}></i>
        </div>
      </div>

    </div>
  )

};

export default Tweet;
