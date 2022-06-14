import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "containers/Home";
import SignIn from "containers/Auth/SignIn";
import SignUp from "containers/Auth/SignUp";
import SignOut from "containers/Auth/SignOut";
import Auth from "components/Layout/Auth";
import Layout from "components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/sign_in" element={<SignIn />}></Route>
          <Route path="/sign_up" element={<SignUp />}></Route>
          <Route path="/sign_out" element={<SignOut />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
