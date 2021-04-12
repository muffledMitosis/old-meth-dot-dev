import { useHistory, useParams } from 'react-router-dom'
import Header from '../widgets/Header';

// TODO: add markdown parser to display claps and stuff

function RenderBlog(data){
  let elem = (
    <div>

    </div>
  );

  return elem;
}

function BlogReader(){

  const {id} = useParams();

  let elem = (
    <div className="main-bg-div general-text">
      <Header />
      {RenderBlog(id)}
    </div>
  );

  return elem;
}

export default BlogReader;