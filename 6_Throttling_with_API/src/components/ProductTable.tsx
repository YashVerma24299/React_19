export default function ProductTable({
  data,
  visible,
}: {
  data: any[];
  visible: number;
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
      </thead>

      <tbody>
        {data.slice(0, visible).map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.brand}</td>
            <td>${item.price}</td>
            <td>{item.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
