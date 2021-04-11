function BlogCard(props){

  // TODO: Add proper styles
  let elem = (
    <div className="w-8/12 cursor-pointer">
      <img className="pl-4 mb-6 w-100" src={props.data["imgUrl"]} />
      <div className="card-h font-light text-2xl">{props.data["mainHeader"]}</div>
      <div>{String(props.data["timestamp"])}</div>
      <div className="general-text font-thin text-xs">{props.data["introText"]}</div>
    </div>
  );

  return elem;
}

export default BlogCard;