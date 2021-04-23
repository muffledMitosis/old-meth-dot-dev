import React, { useState } from 'react'
import { render } from '@testing-library/react';
import ReactMarkdown from 'react-markdown';
import { useHistory, useParams } from 'react-router-dom'
import Header from '../widgets/Header';
import { db } from '../utils/fb';
import gfm from 'remark-gfm';

// display claps and stuff

function RenderBlog(data){
  console.log(data);

  let dt = `
  # This is a H1
  ## This is a H2 
  ### This is a H3

  some paragraph trying to *explain* stuff **pretty important** do line breaks work? guess so lmao

  ## New topic
  explenation of new topic lmao

  ### Lists
  * [ ] todo
  * [x] done
  
  ---
   
  ### A table:
 
  | a | b |
  | - | - |
  | test | d |
  
  `;
  return <ReactMarkdown className="md-view" plugins={[gfm]}>{dt}</ReactMarkdown>
}

function BlogReader(){

  const {id} = useParams();
  const [blogData, setBlogData] = useState(false);

  let blogRef = db.collection("blog_posts").doc(String(id));

  if(!blogData){
    blogRef.get()
    .then(doc=>{
      setBlogData(doc.data());
    }).catch(e=>console.log(e));
  }

  let elem = (
    <div className="main-bg-div">
      <Header />
      {RenderBlog(blogData)}
    </div>
  );

  return elem;
}

export default BlogReader;