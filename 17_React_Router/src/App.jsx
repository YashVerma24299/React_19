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
