import Header from "../widgets/Header";
import ContentPage from '../widgets/ContentPage';

function BlogPage(){

  let elem = (
    <div className="main-bg-div overflow-y-scroll scrollbar scrollbar-thumb-rounded-md scrollbar-thumb-mdd-green-strong scrollbar-thin scrollbar-track-gray-800">
      <Header />
      <ContentPage contentRefName="blog" contentType="blog-post" />
    </div>
  );

  return elem;
}

export default BlogPage;