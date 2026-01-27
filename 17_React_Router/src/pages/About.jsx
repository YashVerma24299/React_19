import { useLoaderData } from "react-router-dom"

function About() {
  const {data1,data2} =useLoaderData();
  console.log("data1", data1);
  console.log("data2", data2);
  
  const products = data1.products

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">About Page</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 w-full rounded object-cover"
            />

            <h2 className="mt-3 text-lg font-semibold">
              {item.title}
            </h2>

            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
              {item.description}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold text-green-600">
                ₹{item.price}
              </span>

              <span className="text-sm text-gray-500">
                ⭐ {item.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About
