import { NavLink, Outlet } from "react-router-dom";
import { Container, Header, MuModal, OutletWrap, Wrap } from "./style";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.png";
import { data } from "../../utilities/navbar";
import { Button, Modal } from "@mui/material";
import Footer from "../Footer";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Wrap>
      <Container>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <MuModal>
            <div className="menu_links">
              {data.map(({ path, title }, i) => (
                <NavLink to={path} key={i}>
                  {title}
                </NavLink>
              ))}
              <Button
                variant="contained"
                style={{ maxHeight: "40px" }}
                className="btn"
              >
                <NavLink to="/login">LogIn</NavLink>
              </Button>
              <Button variant="contained" style={{ maxHeight: "40px" }}>
                <NavLink to="/register">SignUp</NavLink>
              </Button>
            </div>
          </MuModal>
        </Modal>
        <Header>
          <div className="logo">
            <img src={logo} alt="logo" /> Resume Builder
          </div>
          <img
            src={menu}
            alt="menu"
            className="menu"
            onClick={() => setOpen(true)}
          />
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
      </Container>
      <Footer />
    </Wrap>
  );
}
