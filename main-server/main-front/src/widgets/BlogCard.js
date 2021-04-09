function BlogCard(props){
  let elem = (
    <div>
      <img src={props.data["imgUrl"]} />
      <div>{props.data["mainHeader"]}</div>
      <div>Small info space</div>
      <div>{props.data["introText"]}</div>
    </div>
  );

  return elem;
}

export default BlogCard;