import { deleteProduct, getApiData, updateProduct } from "../api/ApiData";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// useQuery -> Read
// useMutation -> Post, put , delete

function About() {
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getApiData,
    refetchOnWindowFocus: false,
    // staleTime: 1000000,  // toggle in comment and look at network tab -> no api call for 1000 second
    // stateTime and refetchInterval not use together
    // refetchInterval:1000,
    // refetchIntervalInBackground:true
  });

  const queryClient = useQueryClient();
  const handleDelete = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: (data, id) => {
      //queryClient.setQueryData -> used to get cached data  for specific query
      queryClient.setQueryData(["products"], (currData) => {
        return currData.filter((item) => item.id !== id);
      });
    },
  });
  const handleUpdate = useMutation({
    mutationFn: ({ id, updatedData }) => updateProduct({ id, updatedData }),
    onSuccess: (updatedItem) => {
      queryClient.setQueryData(["products"], (currData) =>
        currData.map((item) => {
          return item.id === updatedItem.id ? updatedItem : item;
        }),
      );
    },
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  // isLoading  → true ONLY on first API call (no cached data yet)
  // isFetching → true on background refetch (cached data already shown)
  if (isFetching) return <p className="p-6">Fetching...</p>;
  if (isError)
    return (
      <p className="p-6">Error: {error.message || "Something went wrong!"}</p>
    );

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">About Page</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 w-full rounded object-cover"
            />

            <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>

            <p className="mt-1 text-sm text-gray-600 line-clamp-2">
              {item.description}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="font-bold text-green-600">₹{item.price}</span>

              <span className="text-sm text-gray-500">⭐ {item.rating}</span>
            </div>

            <div className="flex justify-between w-full">
              <button
                className="mt-3 p-3 bg-gray-200 rounded cursor-pointer"
                onClick={() => handleDelete.mutate(item.id)}
              >
                Delete
              </button>
              <button
                className="mt-3 p-3 bg-blue-200 rounded cursor-pointer"
                onClick={() =>
                  handleUpdate.mutate({
                    id: item.id,
                    updatedData: {
                      price: item.price + 100, // example update
                      title: item.title + " (Updated)",
                    },
                  })
                }
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
