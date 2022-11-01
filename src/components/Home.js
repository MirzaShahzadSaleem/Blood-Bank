import React from "react";
import './Home.css';
// import { useNavigate } from "react-router";
// import { useUserAuth } from "../../context/UserAuthContext";
// import { Link} from "react-router-dom";
import Donor from './Donor';
import Topbar from "./Topbar";
import Donate from "./Donate"
import { Routes, Route } from "react-router-dom";

const Home = () => {
  // const { logOut, user } = useUserAuth();
  // const navigate = useNavigate();
  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <div className="main">
    <Topbar />
    
    <div>
    <Routes>
    <Route path="/donor" element={<Donor />} />
    <Route path="/donate" element={<Donate />} />
    </Routes>
    </div>
      

      

    </div>
    
    // <div className="main" >
    // <h1>Blood Bank Application</h1>
    //   <div className="button">
    //     <button type="btn btn-primary">
    //       Donor
    //     </button>
    //   </div>
    // </div>
   



  //  <div className="logout">
  //  <button onClick={handleLogout}>
  //    Log out
  // <Link to="/donor">DONOR!</Link>
  //  </button>
  //  </div>
  
        
      
      
     
    
  );
};

export default Home;
