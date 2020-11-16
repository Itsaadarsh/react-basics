import React, { useState } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


const App = () => {
  
  const [posts, setPosts] = useState([]);
  
  const handlePosts = (newPost) => {
    setPosts([...posts, newPost]);
  }
  
  return(
    <div style={style}>
      <UserInput handlePosts={handlePosts}/>
      {
        posts.map((post) => (
          
          <UserOutput key={post.id} post={post}/>
          ))
        }
    </div>
  );
}

const style = {
    "text-align": "center"
}

export default App;