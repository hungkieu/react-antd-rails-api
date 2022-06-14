import { Navigate } from "react-router-dom";
import { storage } from "utils";
import Layout from "./index";

const Auth = () => {
  const user = storage.user.get();
  if (!user) return <Navigate to="/sign_in" />;

  return <Layout />;
};

export default Auth;
