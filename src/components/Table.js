
export default function Table (props) {
  // Отримуємо всі можливі назви полів з об'єктів масиву
  const allFields = props.objects_list.reduce(
    (fields, obj) => [...fields, ...Object.keys(obj)],
    []
  );

  // Видаляємо дублікати та залишаємо лише унікальні назви полів
  const uniqueFields = [...new Set(allFields)];

  return (
    <table className="table">
      <thead>
        <tr className="table--tr">
          {uniqueFields.map((field) => (
            <th className="table--th" key={field}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.objects_list.map((item, index) => (
          <tr className="table--td" key={index}>
            {uniqueFields.map((field) => (
              <td className="table--td" key={field}>{item[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};