import { Wrap } from "../Contact/style";
import Head from "../Head";
import img from "../../assets/images/login.jpg";
import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <Wrap>
      <Head img={img} title="Login" />
      <form style={{ marginTop: "50px", width: "50%" }}>
        <div className="input_group">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="input_group">
          <input type="password" name="password" placeholder="Password" />
        </div>

        <input type="submit" name="" id="" value={"Login"} />
        <NavLink to="/register">
          Dont have an account? <span> Sign up </span>
        </NavLink>
      </form>
    </Wrap>
  );
}
