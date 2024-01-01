import { Wrap } from "./style";

export default function Head({ title, img }) {
  return (
    <Wrap img={img}>
      <h2>{title}</h2>
      <span>Home / {title}</span>
    </Wrap>
  );
}
