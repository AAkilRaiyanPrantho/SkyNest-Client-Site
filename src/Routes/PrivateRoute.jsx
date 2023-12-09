import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Pages/AuthProviders/AuthProvider";







const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }


    if(user){
        return children;
    }
  return <Navigate to="/signIn"></Navigate>;
};

export default PrivateRoute;


