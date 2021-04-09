import { useState } from 'react';
import {db} from '../utils/fb';
import BlogCard from '../widgets/BlogCard';
import Header from "../widgets/Header";

function BlogPage(){

  let blogRef = db.collection("blog_posts");
  const [blogs, setBlogs] = useState([]);

  blogRef.get()
    .then(querySnapshot=>{
      let docs = [];
      querySnapshot.forEach(doc=>docs.push(doc.data()));
      setBlogs(docs);
    })
    .catch(e=>console.log(e));

  let elem = (
    <div className="main-bg-div">
      <Header />
      <div>
        <ul className="general-text">
          {blogs.map(blog => <li key={blog["mainHeader"]}><BlogCard data={blog} /></li>)}
        </ul>
      </div>
    </div>
  );

  return elem;
}

export default BlogPage;