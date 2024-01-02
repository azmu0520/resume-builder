import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { data } from "../utilities/navbar";
import Login from "../components/Login";
import Register from "../components/Register";
import Template from "../components/Templates/Template";
const Root = () => {
  // useEffect(() => {
  //   navigate(token ? "/" : "/login");
  //   // eslint-disable-next-line
  // }, [token]);
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data?.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
        <Route path="templates/:id" element={<Template />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path={"*"} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
