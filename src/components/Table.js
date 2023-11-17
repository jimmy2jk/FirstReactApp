
export default function Table ({objects_list}) {
  // Отримуємо всі можливі назви полів з об'єктів масиву
  const allFields = objects_list.reduce(
    (fields, obj) => [...fields, ...Object.keys(obj)],
    []
  );

  // Видаляємо дублікати та залишаємо лише унікальні назви полів
  const uniqueFields = [...new Set(allFields)];

  return (
    <table>
      <thead>
        <tr>
          {uniqueFields.map((field) => (
            <th key={field}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {objects_list.map((item, index) => (
          <tr key={index}>
            {uniqueFields.map((field) => (
              <td key={field}>{item[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};