import { Navigate } from "react-router-dom";
const PrivateLayout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?._id ? children : <Navigate to={"/login"} replace={true} />;
};

export default PrivateLayout;
