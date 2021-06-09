import React,{useState,useContext,useEffect} from 'react'
import PostStore from './PostStore'
import { useContextSelector } from 'use-context-selector';

const PostDetail = () => {
  // const data = useContext(PostStore);

  const postId = useContextSelector(PostStore,(context)=>{
        return context.postId;
  })
  const [description,setDescription]=useState([])

    useEffect(() => {
      if(postId)
      {

        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
      .then(response => response.json())
      .then(res => setDescription(res))

      }

  },[postId])


  return(
  <>
       <h5>{description.title}</h5>
      <p>{description.body}</p>
      </>
  )
    }

    export default PostDetail;