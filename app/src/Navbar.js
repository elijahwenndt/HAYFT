export default function Nav(props) {
  return (
    <div className="container my-3 ">
      <div
        className="row text-center align-items-center hover text-white bg-primary rounded p-2"
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
