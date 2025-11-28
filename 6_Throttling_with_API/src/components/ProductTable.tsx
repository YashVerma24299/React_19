export default function ProductTable({
  data,
  visible,
}: {
  data: any[];
  visible: number;
}) {
  return (
    <table className="max-w-5xl m-auto border-collapse bg-white">
      <thead>
        <tr>
          <th className="bg-gray-800 text-white px-4 py-2 border border-gray-300"
>#</th>
          <th className="bg-gray-800 text-white px-4 py-2 border border-gray-300"
 >Title</th>
          <th className="bg-gray-800 text-white px-4 py-2 border border-gray-300"
>Brand</th>
          <th className="bg-gray-800 text-white px-4 py-2 border border-gray-300"
>Price</th>
          <th className="bg-gray-800 text-white px-4 py-2 border border-gray-300"
>Rating</th>
        </tr>
      </thead>

      <tbody>
        {data.slice(0, visible).map((item, index) => (
          <tr className="even:bg-gray-200" key={item.id}>
            <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
            <td className="px-4 py-2 border border-gray-300">{item.title}</td>
            <td className="px-4 py-2 border border-gray-300">{item.brand}</td>
            <td className="px-4 py-2 border border-gray-300">${item.price}</td>
            <td className="px-4 py-2 border border-gray-300">{item.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
