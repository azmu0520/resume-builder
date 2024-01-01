import { Cards, Wrap } from "./style";
import { Button } from "@mui/material";
import { Content } from "../WhyUs/style";

export default function Pricing() {
  return (
    <Wrap>
      <Cards>
        <Content className="item">
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
          <Button
            variant="outlined"
            style={{
              height: "60px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Lets Build CV</span>
            <span>with 7days of Free Trial</span>
          </Button>
          <div className="terms">Terms & Conditions</div>
          <p> subject to change with perior notice</p>
        </Content>

        <div className="card">
          <div className="header">
            <h1>9.9$</h1>
            <h5>/ month</h5>
          </div>
          <div className="details">
            <h2>Monthly Pack</h2>
            <p>
              You will be billed per month, and get unlimited access to all
              resume Templates and new added ones
            </p>
            <Button
              variant="outlined"
              style={{
                height: "50px",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="card">
          <div className="header">
            <h1>90$</h1>
            <h5>/ year</h5>
          </div>
          <div className="details">
            <h2>
              Annually Pack <span>save 20%</span>
            </h2>
            <p>
              You will be billed per year, and get unlimited access to all
              resume Templates and new added ones
            </p>
            <Button
              variant="outlined"
              style={{
                height: "50px",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </Cards>
    </Wrap>
  );
}
