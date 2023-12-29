import { NavLink, Outlet } from "react-router-dom";
import { Header, OutletWrap, Wrap } from "./style";
import logo from "../../assets/images/logo.png";
import { data } from "../../utilities/navbar";
import { Button } from "@mui/material";
export default function Navbar() {
  return (
    <Wrap>
      <Header>
        <div className="logo">
          <img src={logo} alt="logo" /> Resume Builder
        </div>

        <div className="links">
          {data.map(({ path, title }, i) => (
            <NavLink to={path} key={i}>
              {title}
            </NavLink>
          ))}
          <Button variant="contained" style={{ maxHeight: "40px" }}>
            <NavLink to="/login">LogIn</NavLink>
          </Button>
          <Button variant="contained" style={{ maxHeight: "40px" }}>
            <NavLink to="/register">SignUp</NavLink>
          </Button>
        </div>
      </Header>
      <OutletWrap>
        <Outlet />
      </OutletWrap>
    </Wrap>
  );
}
