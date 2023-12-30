import { Button } from "@mui/material";
import { Cards, Content, Deliver, Wrap } from "./style";
import d1 from "../../assets/images/d1.png";
import d2 from "../../assets/images/d2.png";
import d3 from "../../assets/images/d3.png";
import cv from "../../assets/images/cv.png";
import check from "../../assets/images/check.png";
export default function WhyUs() {
  return (
    <>
      <Wrap>
        <Cards>
          <div className="card">
            <img src={d1} alt="d1" />
            <div className="text">
              <h3>Easy Online Resume Builder</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium modi assumenda.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={d2} alt="d2" />
            <div className="text">
              <h3>Step By Step Expert Tips</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium modi assumenda.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={d3} alt="d3" />
            <div className="text">
              <h3>Recruiter Approved Phrases</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium modi assumenda.
              </p>
            </div>
          </div>
        </Cards>
        <Content>
          <div className="spans">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h2>Why Choose Our Platform?</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nunc scelerisque in.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            eius molestiae facere, natus reprehenderit eaque eum, autem ipsam.
            Magni, error. Tempora odit laborum iure inventore possimus
            laboriosam qui nam. Fugit!
          </p>
          <Button variant="contained" style={{ height: "45px" }}>
            LETS BUILD YOUR CV
          </Button>
        </Content>
      </Wrap>

      <Deliver>
        <Content>
          <div className="spans">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2 className="h2">We Deliver The Best</h2>
          <div className="check">
            <img src={check} alt="check" />
            Proven CV Templates to increase Hiring Chance
          </div>
          <div className="check">
            <img src={check} alt="check" />
            Creative and Clean Templates Design
          </div>
          <div className="check">
            <img src={check} alt="check" />
            Easy and Intuitive Online CV Builder
          </div>
          <div className="check">
            <img src={check} alt="check" />
            Free to use. Developed by hiring professionals.
          </div>
          <div className="check">
            <img src={check} alt="check" />
            Fast Easy CV and Resume Formatting
          </div>
          <div className="check">
            <img src={check} alt="check" />
            Recruiter Approved Phrases.
          </div>
        </Content>
        <div className="img">
          <img src={cv} alt="cv" />
        </div>
      </Deliver>
    </>
  );
}
