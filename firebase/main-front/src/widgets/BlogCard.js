function BlogCard(props){

  // TODO: Add proper styles
  let timestamp = props.data["timestamp"].toDate();

  let elem = (
    <div className="w-8/12 cursor-pointer pl-10" onClick={()=>window.location.href+="/"+btoa(props.data["mainHeader"])}>
      <img className="pl-6 mb-6 w-100" src={props.data["imgUrl"]} />
      <div className="card-h font-light text-2xl">{props.data["mainHeader"]}</div>
      <div className="general-text text-xs pl-1 my-2">{"Meth Munindradasa - " + timestamp.getFullYear() + '/' + (timestamp.getMonth()+1) + '/' + timestamp.getDate()}</div>
      <div className="general-text font-thin text-sm">{props.data["introText"]}</div>
    </div>
  );

  return elem;
}

export default BlogCard;