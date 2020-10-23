import React from 'react'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import StoryReel from '../StoryReel/StoryReel'
import './Feed.css'
const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        image="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
        message="wow this works"
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        timestamp="this is a time stamps"
        username="Sonny Sangha"
      />
    </div>
  )
}

export default Feed
