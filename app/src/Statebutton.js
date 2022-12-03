export default function StateButtons(props) {
    return (
      <div className="" onClick={() => props.handleClick(props.text)}>
        {props.text}
      </div>
    );
  }