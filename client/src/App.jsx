import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Routes>
       <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
