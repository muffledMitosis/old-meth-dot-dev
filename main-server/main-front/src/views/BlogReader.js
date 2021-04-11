import { useHistory, useParams } from 'react-router-dom'

// TODO: add markdown parser to display claps and stuff

function BlogReader(){

  const {id} = useParams();

  let elem = (
    <div className="main-bg-div general-text">
      {id}
    </div>
  );

  return elem;
}

export default BlogReader;