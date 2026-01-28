import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./components/layout/AppLayout";
import {ErrorPage1, ErrorPage2} from "./pages/ErrorPage";
import {getApiData1, getApiData2} from './api/GetApiData'




function App() {
  // const routerrrr = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path='/' element={<Home/>}/>
  //       <Route path='/about' element={<About/>}/>
  //     </>
  //   )
  // )

  const fetchData=async()=>{
    const data1 = await getApiData1();
    const data2 = await getApiData2();
    return {data1, data2};
  }
  const routerrrr = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage1/>, // no header, no footer
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
          loader: fetchData,
        },
        // {
        //   path: "/about/:id",
        //   element: <About />
        // },
        // have header, have footer
        // {
        //   path: '*',
        //   element: <ErrorPage2/>
        // }
      ],
    },
  ]);

  return <RouterProvider router={routerrrr} />;
}

export default App;






// Use the NavLink instead of link
// https://reactrouter.com/api/components/NavLink










// import { useState } from "react";

// const data = [
//   {
//     id: 1,
//     title: "What is React?",
//     content: "React is a JavaScript library for building user interfaces."
//   },
//   {
//     id: 2,
//     title: "What is useState?",
//     content: "useState is a React Hook that lets you add state to function components."
//   },
//   {
//     id: 3,
//     title: "What is useCallback?",
//     content: "useCallback memoizes a function to prevent unnecessary re-renders."
//   }
// ];

// const Accordion = () => {
//   const [openId, setOpenId] = useState(null);

//   const toggleAccordion = (id) => {
//     setOpenId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 space-y-3">
//       {data.map((item) => (
//         <div
//           key={item.id}
//           className="border rounded-lg overflow-hidden"
//         >
//           {/* Header */}
//           <button
//             onClick={() => toggleAccordion(item.id)}
//             className=" flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium"
//           >
//             <span>{item.title}</span>
//             <span className="text-xl">
//               {openId === item.id ? "-" : "+"}
//             </span>
//           </button>

//           {/* Content */}
//           {openId === item.id && (
//             <div className="px-4 py-3 text-gray-600 bg-white">
//               {item.content}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;
