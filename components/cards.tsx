// import { log } from "console";
// import { type } from "os";

type headP={
  title:string,
  cors:string,
}

function cards(props:headP) {
  return (
    <div className="card text-dark bg-light  ml-2  shadow p-3 mb-2  bg-body rounded border " style={{maxWidth: '25rem'}}>
  <div className="card-header h3 bg-dark-opacity-10 shadow-none p-3 mb-0  rounded">{props.title}</div>
  <div className="card-body">
    <h5 className="card-title">{props.cors}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

  );
}
export default cards;
