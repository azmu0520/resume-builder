import GenericHead from "../Generic/Header";
import { Card, Wrap } from "./style";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import { Carousel } from "@trendyol-js/react-carousel";

export default function Success() {
  return (
    <Wrap>
      <GenericHead
        title={"Your Success, Our Inspiration"}
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
      />
      <Carousel show={3.5} slide={3} swiping={true}>
        <Card>
          <div className="img_wrap">
            <img src={img1} alt="img1" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
          <h3>Muhammad Hijab</h3>
          <p>One Of Our Clients</p>
        </Card>
        <Card>
          <div className="img_wrap">
            <img src={img3} alt="img2" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
          <h3>Fatima Abdul</h3>
          <p>One Of Our Clients</p>‍
        </Card>

        <Card>
          <div className="img_wrap">
            <img src={img2} alt="img3" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
          <h3>Muhammad Hijab</h3>
          <p>One Of Our Clients</p>
        </Card>
        <Card>
          <div className="img_wrap">
            <img src={img1} alt="img1" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
          <h3>Muhammad Hijab</h3>
          <p>One Of Our Clients</p>
        </Card>
      </Carousel>
      {/* <Cards>
       
      </Cards> */}
    </Wrap>
  );
}
