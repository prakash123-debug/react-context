import React,{useContext,useEffect,useState} from 'react';
import PostStore from './PostStore'
import { useContextSelector } from 'use-context-selector';


const PostList = () => {
  // const data = useContext(PostStore);
  const postList = useContextSelector(PostStore,(context)=>{
        return context.postList;
  })

  const setPostId = useContextSelector(PostStore,(context)=>{
        return context.setPostId;
  })

  const setPostList = useContextSelector(PostStore,(context)=>{
        return context.setPostList;
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(res => setPostList(res))
  
  },[])
  return(

    <>

    <ul><h1>Post title</h1>

   {postList.map((titles,i)=>{
         return(
           <li className="bordered-class" onClick = {()=>{setPostId(titles.id)}} key={titles.id}>{titles.title}</li>
           )
       })}

    </ul>
    </>
   )
}

export default PostList