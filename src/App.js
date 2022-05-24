import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Login from './Pages/Authentication/Login';
import SingUp from './Pages/Authentication/SingUp';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import NoFound from './Pages/Shared/NoFound';
import Users from './Pages/Dashboard/Users';
import WoodenTools from './Pages/Home/WoodenTools';
import Reviews from './Pages/Home/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SingUp></SingUp>}></Route>
        <Route path='/woodenTools' element={<WoodenTools></WoodenTools>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/purchase/:purchaseId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
      <Route path='dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
        <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
        <Route path='addReview' element={<AddReview></AddReview>}></Route>
        <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
        <Route path='users' element={<Users></Users>}></Route>

      </Route>
      <Route path='*' element={<NoFound></NoFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
