import GenericHead from "../Generic/Header";
import { Cards, Wrap } from "./style";
import f1 from "../../assets/images/f1.png";
import f2 from "../../assets/images/f2.png";
import f3 from "../../assets/images/f3.png";
import f4 from "../../assets/images/f4.png";
import f5 from "../../assets/images/f5.png";
import f6 from "../../assets/images/f6.png";

export default function Features() {
  return (
    <Wrap>
      <GenericHead
        title={"Our Main Features"}
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
      />
      <Cards>
        <div className="card">
          <img src={f1} alt="f1" />
          <h3>Proven CV Templates to increase Hiring Chance</h3>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
            quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
            elit.
          </p>
        </div>
        <div className="card">
          <img src={f2} alt="f2" />
          <h3>Creative, Modern and Clean Templates Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
            quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
            elit.
          </p>
        </div>
        <div className="card">
          <img src={f3} alt="f3" />
          <h3>Easy and Intuitive Online CV and Resume Builder</h3>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
            quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
            elit.
          </p>
        </div>
        <div className="card">
          <img src={f4} alt="f4" />
          <h3>Free to use. Developed by hiring professionals.</h3>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
            quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
            elit.
          </p>
        </div>
        <div className="card">
          <img src={f5} alt="f5" />
          <h3>Recruiter Approved Phrases with Module Notification</h3>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
            quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
            elit.
          </p>
        </div>
        <div className="card">
          <img src={f6} alt="f6" />
          <h3>Fast Easy CV and Resume Formatting</h3>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque
            quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing
            elit.
          </p>
        </div>
      </Cards>
    </Wrap>
  );
}
