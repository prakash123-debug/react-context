import React,{useContext,useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList';
import PostDetail from './PostDetail';
import PostStore from './PostStore';
import {PostStoreProvider} from './PostStore'
function App() {
  const [postList,setPostList]=useState([]);
  const [postId,setPostId]=useState('')
  return (
    <div className="App">
    <PostStoreProvider>
      <PostList />
      <PostDetail />
      </PostStoreProvider>
    </div>
  );
}

export default App;
