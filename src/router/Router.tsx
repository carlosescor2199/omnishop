import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from '../pages/authentication/signin/SignIn';
import SignUp from "../pages/authentication/signup/SignUp";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
