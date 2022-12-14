import { useContext } from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { AuthContext } from "./context/AuthContext/AuthContext";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";




function App() {

  const {user}= useContext(AuthContext);
 
  return (

      <Router>
        <Routes>

        <Route path="/"  element={  <Home /> } />
        <Route path="/hotels" element={   <List />  } />
        <Route path="/hotels/:id" element={  <Hotel />  } />
        <Route path="/login" element={<Login/>}  />

        </Routes>
      </Router>
  );
}

export default App;
