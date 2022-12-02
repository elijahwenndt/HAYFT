export default function Nav(props) {
  return (
    <div className="container my-3 sticky-top align-items-center justify-content-center mx-n5">
      <div
        className="row text-center align-items-center hover text-white bg-primary rounded w-100 p-2 mx"
        onClick={() => props.handleClick(props.text)}
      >
        <h4 className="col-2 fw-bold hover">
          HAYFT
        </h4>
        <div className="col-4 text-start hover">YourJourney</div>
        <div className="col-3 text-end hover">Sign up</div>
        <div className="col-3 text-start hover">Log in</div>
      </div>
    </div>
  );
}
