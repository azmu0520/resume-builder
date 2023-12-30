import { Content, Image, Wrap } from "./style";
import dollar from "../../assets/icons/img-dollar.svg";
import banner from "../../assets/images/banner2.png";
import { Button } from "@mui/material";
export default function Opener() {
  return (
    <Wrap>
      <Content>
        <div className="sup_title">
          <img src={dollar} alt="dollar" />
          <span>Discover The Easiest ways to Build Your CV!</span>
        </div>
        <div className="title">Online CV Builder With Creative Templates.</div>
        <p>
          Our Perfect resume builder takes the hassle out of resume writing.
          Choose from several templates and follow easy prompts to create the
          perfect job-ready resume.
        </p>
        <div className="btn">
          <Button
            variant="contained"
            style={{ height: "45px", marginRight: "30px" }}
          >
            Choose Template
          </Button>
          <Button variant="contained" style={{ height: "45px" }}>
            Contact Us
          </Button>
        </div>
      </Content>
      <Image>
        <img src={banner} alt="banner" />
      </Image>
    </Wrap>
  );
}
