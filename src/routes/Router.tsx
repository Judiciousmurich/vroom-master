import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Cars from "../pages/Cars";
import Dealers from "../pages/Dealers";
import Messages from "../pages/Messages";
import History from "../pages/History";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/auth">
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      
      <Route path="/" element={<HomeLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="cars" element={<Cars />} />
        <Route path="dealers" element={<Dealers />} />
        <Route path="messages" element={<Messages />} />
        <Route path="history" element={<History/>} />
      </Route>
    </Route>
  )
);
