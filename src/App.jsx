import Quiz from "./Components/Quiz";
import Home from "./Components/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([

    
        {
          path:"/",
          element:<Home />
        },
    
        {
          path:"/quiz",
          element:<Quiz />
        },
    
  ]);

  return <RouterProvider router={router}/>
};

export default App;

