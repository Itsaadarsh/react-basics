import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


const App = () => {

  const [posts, setPosts] = useState([]);

  const handlePosts = (newPosts) => {
    setPosts(newPosts);
  }

  return(
    <div className="App">
      <UserInput posts={posts} handlePosts={handlePosts}/>
      {
        posts.map((post, index) => (
          <UserOutput key={index} post={post}/>
        ))
      }
    </div>
  );
}

export default App;