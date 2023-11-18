
export default function (props) {

  return (
    <div className="numbers">
      <ul className="numbers--list">
        {props.numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  ); 
}