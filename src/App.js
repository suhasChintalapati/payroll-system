import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './RootLayout'
import Login from './components/login/Login'
import About from './components/about/About'
import AddUser from './components/addUser/AddUser'
import UserList from './components/UserList/UserList'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  let x=5;
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<Login />
        },
        {
          path:"/About",
          element:<About />
        },
        {
          path:"/AddUser",
          element:<AddUser />
        },
        {
          path:"/UserList",
          element:<UserList />
        }
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
