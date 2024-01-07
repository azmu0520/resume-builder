import { TextField } from "@mui/material";
import { ImageWrap, Item, Wrap } from "./style";
import upload from "../../../../assets/icons/upload.svg";
import { useState } from "react";
export default function Personal() {
  const [img, setImg] = useState("");
  const handleImage = (e) => {
    console.log(e);
  };
  const handleSubmit = () => {};
  return (
    <Wrap component="form" onSubmit={handleSubmit}>
      <h3>Tell us a little about yourself</h3>
      <p>
        Let us know who you are, how employers can get in touch with you, and
        what your profession is.
      </p>
      <h3>Contact Information</h3>
      <Item>
        <Item
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            name="first_name"
            variant="outlined"
            size="small"
            required
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            name="last_name"
            variant="outlined"
            size="small"
          />
        </Item>
        <ImageWrap>
          <div className="img">
            <input
              type="file"
              id="image_upload"
              hidden
              onChange={handleImage}
            />
            <label htmlFor="image_upload" title="Upload your photo">
              <img src={upload} alt="upload" />
            </label>
          </div>
        </ImageWrap>
      </Item>
      <TextField
        id="outlined-basic"
        label="Occupation"
        name="occupation"
        variant="outlined"
        size="small"
        className="mr_bt20"
        fullWidth={true}
      />
      <TextField
        id="outlined-basic"
        label="Address"
        name="address"
        variant="outlined"
        size="small"
        fullWidth={true}
      />
      <Item>
        <TextField
          id="outlined-basic"
          label="Phone"
          name="phone"
          type="number"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          name="email"
          variant="outlined"
          size="small"
        />
      </Item>
      <input type="submit" value={"asd"} />
    </Wrap>
  );
}
