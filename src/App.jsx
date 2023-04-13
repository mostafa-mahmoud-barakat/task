// import Parent from './body/parent';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Body from "./Navbar/body/body";
import Footer from "./footer/Footer";
import { createBrowserRouter } from "react-router-dom";
import Rout from "./Rout";
// import Root from 'react-router-dom'
import { RouterProvider } from "react-router-dom";
import AboutUS from "./AboutUS/AboutUS";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rout/>,
      children: [
        { index: true, element: <Body /> },
        { path: "/AboutUS", element: <AboutUS /> }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
