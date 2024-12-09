
import './App.css';
import { Login } from './components/Login';
import{createBrowserRouter, RouterProvider,} from "react-router-dom"
import { CreateEvent } from './admins/CreateEvent';
import { RegisterParticipant } from './participants/RegisterParticipants';
import { Dashboard } from './admins/Dashboard';
import { ListUsers } from './admins/ListUsers';
import { ListTeams } from './admins/ListTeams';
import { ListEvents } from './admins/ListEvents';
import { RegisterTeam } from './participants/RegisterTeams';



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
  },
  {
    path: "/home",
    element: <Dashboard/>,
  },
  {
    path: "/event/list",
    element: <ListEvents/>,
  },
  {
    path: "/User/list",
    element: <ListUsers/>,
  },
  {
    path: "/team/list",
    element: <ListTeams/>,
  },
  {
    path: "/RegisterTeams",
    element: <RegisterTeam/>,
  }


]);

function App() {
  return (
    <RouterProvider router={router} />
   
  );
}

export default App;
