import { Button } from "@mui/material";
import { Cards, Wrap } from "./style";
import demo1 from "../../assets/images/demo-1.png";
import demo2 from "../../assets/images/demo-2.png";
import demo3 from "../../assets/images/demo-3.png";
import GenericHead from "../Generic/Header";

export default function Templates() {
  return (
    <Wrap>
      <GenericHead
        title={"Our Creative Templates"}
        p={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua`}
      />

      <Cards>
        <div className="card">
          <img src={demo1} alt="demo1" />
          <footer>
            <Button
              variant="outlined"
              style={{
                height: "45px",
              }}
            >
              See Template
            </Button>
            <Button variant="contained" style={{ height: "45px" }}>
              Use Template
            </Button>
          </footer>
        </div>
        <div className="card">
          <img src={demo2} alt="demo2" />
          <footer>
            <Button
              variant="outlined"
              style={{
                height: "45px",
              }}
            >
              See Template
            </Button>
            <Button variant="contained" style={{ height: "45px" }}>
              Use Template
            </Button>
          </footer>
        </div>
        <div className="card">
          <img src={demo3} alt="demo3" />
          <footer>
            <Button
              variant="outlined"
              style={{
                height: "45px",
              }}
            >
              See Template
            </Button>
            <Button variant="contained" style={{ height: "45px" }}>
              Use Template
            </Button>
          </footer>
        </div>
      </Cards>
    </Wrap>
  );
}
