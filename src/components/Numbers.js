
export default function () {
  const numbers = [1,2,3,4,5];

  return (
    <div className="numbers">
      <ul className="numbers--list">
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}