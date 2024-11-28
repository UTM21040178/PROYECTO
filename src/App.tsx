
import './App.css';
import { Login } from './components/Login';
import{createBrowserRouter, RouterProvider,} from "react-router-dom"
import { CreateEvent } from './admins/CreateEvent';
import { RegisterParticipant } from './participants/RegisterParticipants';



const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <RegisterParticipant/>,
  },
  {
    path: "/recoverPassword",
    element:<div> hola desde pocoyo </div>,
  },
  {
    path: "/CreateEvent",
    element:<CreateEvent/>,
  }


]);

function App() {
  return (
    <RouterProvider router={router} />
   
  );
}

export default App;
