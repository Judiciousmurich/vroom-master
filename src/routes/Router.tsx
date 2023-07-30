import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/auth">
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      
      <Route path="/" element={<HomeLayout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Route>
  )
);
