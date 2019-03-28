import React from 'react';
import Tweet from '../components/Tweet'


const TwitterFeed = (props) => {
  let tweetArray = props.data.map((tweet) => {

    let imageFile
    if (tweet.entities.media != undefined) {
      imageFile = tweet.entities.media[0].media_url
    }
    let favorited
    let favoritedCount
    if (tweet.favorited) {
      favorited = "active"
      favoritedCount = tweet.favorite_count
    } else {
      favorited = "inactive"
    }

    let rtd
    let rtCount
    if (tweet.retweeted) {
      rtd = "rtd"
      rtCount = tweet.retweet_count
    } else {
      rtd = "not-rtd"
    }

    return <Tweet
              key={tweet.id_str}
              text={tweet.text}
              userName={tweet.user.name}
              screenName={tweet.user.screen_name}
              profilePhoto={tweet.user.profile_image_url}
              image={imageFile}
              liked={favorited}
              likedCount={favoritedCount}
              rtd = {rtd}
              rtCount = {rtCount}
              handleReply = { (event) => { alert('Reply.')} }
              handleRetweet = { (event) => { alert('Retweet.')} }
              handleLike = { (event) => { alert('Like.')} }
              handleMore = { (event) => { alert('More.')} }
            />
  })

  return(
    <div id="twitter-feed">
      {tweetArray}
    </div>
  )
};

export default TwitterFeed;
