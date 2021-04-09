import {db} from '../utils/fb';
import Header from "../widgets/Header";

function BlogPage(){

  let blogRef = db.collection("blog_posts");

  blogRef.get()
    .then(querySnapshot=>{
      querySnapshot.forEach(doc=>console.log(doc.data()));
    })
    .catch(e=>console.log(e));

  let elem = (
    <div className="main-bg-div">
      <Header />
      <div className="general-text">Bless me with the sweet release of death</div>
    </div>
  );

  return elem;
}

export default BlogPage;