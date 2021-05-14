import { useState } from 'react';
import {db} from '../utils/fb';
import BlogCard from './BlogCard';


function ContentPage(props){

  let contentRef = db.collection(props.contentRefName);
  const [content, setContent] = useState([]);

  contentRef.get()
    .then(querySnapshot=>{
      let docs = [];
      querySnapshot.forEach(doc=>docs.push(doc.data()));
      setContent(docs);
    })
    .catch(e=>console.log(e));

  let elem = (
        <div className="general-text grid gird-cols-1 lg:grid-cols-2">
          {content.map(cont => <div className="p-4 pl-10 pt-10" key={cont["mainHeader"]}> {props.contentType=="blog-post" ? <BlogCard data={cont} /> : <div>BROKEN LOL</div>}</div>)}
        </div>
  );

  return elem;
}

export default ContentPage;