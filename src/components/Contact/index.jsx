import { Button } from "@mui/material";
import GenericHead from "../Generic/Header";
import { Wrap } from "./style";

export default function Contact() {
  return (
    <Wrap>
      <GenericHead
        title="Contact With Us"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
      />

      <form>
        <div className="input_group">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="input_group">
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div className="input_group">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <Button
          variant="outlined"
          style={{
            height: "50px",
          }}
        >
          Get Started
        </Button>
      </form>
    </Wrap>
  );
}
