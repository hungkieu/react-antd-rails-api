import { signOutRequest } from "requests/authRequests";
import { useNavigate, Link } from "react-router-dom";
import { storage } from "utils";

const SignOut = () => {
  const navigate = useNavigate();
  signOutRequest().then(() => {
    storage.user.destroy();
    navigate("/");
  });

  return (
    <>
      <Link to="/">Home</Link>
    </>
  );
};

export default SignOut;
