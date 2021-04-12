import React from 'react'
import { render } from '@testing-library/react';
import ReactMarkdown from 'react-markdown';
import { useHistory, useParams } from 'react-router-dom'
import Header from '../widgets/Header';

// TODO: add markdown parser to display claps and stuff

function RenderBlog(data){
  let dt = "# lmao, *lmao*";
  return <ReactMarkdown>{dt}</ReactMarkdown>
}

function BlogReader(){

  const {id} = useParams();

  // RenderBlog(id);

  let elem = (
    <div className="main-bg-div">
      <Header />
      {RenderBlog(id)}
    </div>
  );

  return elem;
}

export default BlogReader;