import React, { useState } from 'react'
import { render } from '@testing-library/react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useHistory, useParams } from 'react-router-dom'
import Header from '../widgets/Header';
import { db } from '../utils/fb';
import gfm from 'remark-gfm';
import { text } from 'body-parser';

// display claps and stuff

function RenderBlog(data){
  return <ReactMarkdown className="md-view" plugins={[gfm]}>{data}</ReactMarkdown>
}

function BlogReader(){

  const {id} = useParams();
  const [blogData, setBlogData] = useState(false);

  let blogRef = db.collection("blog").doc(String(id));

  if(!blogData){
    blogRef.get()
    .then(doc=>{
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'text'; 
      xhr.onload = function(event) {
        var md_text= xhr.response;
        setBlogData(md_text);
      };
      xhr.open('GET', doc.data()["contentBlobLocation"]);
      xhr.send();

    }).catch(e=>console.log(e));
  }

  let elem = (
    <div className="main-bg-div overflow-y-scroll">
      <Header />
      {RenderBlog(blogData)}
    </div>
  );

  return elem;
}

export default BlogReader;