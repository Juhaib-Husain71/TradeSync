import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {

  return (
    <>
     <Routes>
      <Route path="/*" element={
        <ProtectedRoute>
         <Home/>
        </ProtectedRoute>
      }/>
     </Routes>
    </>
  )
}

export default App
