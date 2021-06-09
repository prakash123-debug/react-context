import React,{useState} from 'react'
import { createContext } from 'use-context-selector';

const PostStore = createContext();

export const PostStoreProvider = ({children}) => {
	 const [postList,setPostList]=useState([]);
  	const [postId,setPostId]=useState('');
  	return(
  	<PostStore.Provider value={{ postList,setPostList,postId,setPostId }} >
  		{children}
  	</PostStore.Provider>
  );
};

export default PostStore;