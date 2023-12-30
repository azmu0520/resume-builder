import { Wrap } from "./style";
import img from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import google from "../../assets/images/google.png";
import linkedin from "../../assets/images/linkedin.png";

export default function Footer() {
  return (
    <Wrap>
      <div className="item">
        <div className="img_wrap">
          <img src={img} alt="logo" /> Resume Builder
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          ducimus voluptatibus neque illo id repellat quisquam? Autem expedita
          earum quae laborum ipsum ad.
        </p>
        <div className="links">
          <a href="https://www.facebook.com/profile.php?id=100083552425348">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://github.com/azmu0520">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://mukhtorov-azizbek.netlify.app/">
            <img src={google} alt="google" />
          </a>
          <a href="https://www.linkedin.com/in/azizbek-mukhtorov/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="item">
        <div className="title">PRIVACY & TOS</div>
        <span>Advertiser Agreement</span>
        <span>Acceptable Use Policy</span>
        <span>Privacy Policy</span>
        <span>Technology Privacy</span>
        <span>Developer Agreement</span>
      </div>
      <div className="item">
        <div className="title">NAVIGATE</div>
        <span>Advertisers</span>
        <span>Developers</span>
        <span>Resources</span>
        <span>Company</span>
        <span>Connect</span>
      </div>
      <div className="item">
        <div className="title">CONTACT US</div>
        <span>Mail: azizbekbootcam@gmail.com</span>
        <span>Address: Warsaw , Poland</span>
        <span>Tel: +48 888 950-410</span>
      </div>
    </Wrap>
  );
}
