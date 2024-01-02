import { Wrap } from "../Contact/style";
import Head from "../Head";
import img from "../../assets/images/login.jpg";
import { NavLink } from "react-router-dom";
export default function Register() {
  return (
    <Wrap>
      <Head img={img} title="Register" />
      <form style={{ marginTop: "50px", width: "50%" }}>
        <div className="input_group">
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
          />
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
          />
        </div>
        <div className="input_group">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
        </div>

        <input type="submit" name="" id="" value={"Register"} />
        <NavLink to="/login">
          You have already account ? <span> Sign in </span>
        </NavLink>
      </form>
    </Wrap>
  );
}
