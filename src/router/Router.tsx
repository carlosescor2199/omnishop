import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ingresando from "../pages/authentication/ingresando/Ingresando";
import RegistroCompleto from "../pages/authentication/registro-completo/RegistroCompleto";
import SignIn from "../pages/authentication/signin/SignIn";
import SignUp from "../pages/authentication/signup/SignUp";
import Home from "../pages/Home/Home";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ingresando"
          element={
            <ProtectedRoute>
              <Ingresando />
            </ProtectedRoute>
          }
        />
        <Route
          path="/registrocompleto"
          element={
            <ProtectedRoute>
              <RegistroCompleto />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
