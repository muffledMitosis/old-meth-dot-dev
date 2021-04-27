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
  return <ReactMarkdown className="md-view" plugins={[gfm]}>{data}</ReactMarkdown>
}

function BlogReader(){

  const {id} = useParams();
  const [blogData, setBlogData] = useState(false);

  let blogRef = db.collection("blog_posts").doc(String(id));

  if(!blogData){
    blogRef.get()
    .then(doc=>{
      // setBlogData(doc.data());
      fetch(doc.data()["contentBlobLocation"])
        .then(res=>{
          res.text().then(text=>{
            setBlogData(text);
          });
        }).catch(e=>console.log(e));
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