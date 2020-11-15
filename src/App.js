import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = () => {

  const [posts, setPosts] = useState([]);
  
  const handlePosts = (newPost) => {
    setPosts([...posts, newPost]);
  }

  return(
    <div className="App">
      <UserInput handlePosts={handlePosts}/>
      {
        posts.map((post) => (
          <UserOutput key={post.id} post={post}/>
        ))
      }
    </div>
  );
}

export default App;