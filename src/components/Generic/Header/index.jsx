import { Wrap } from "./style";

export default function GenericHead({ title, p }) {
  return (
    <Wrap>
      <div className="spans">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h2>{title}</h2>
      <p>{p}</p>
    </Wrap>
  );
}
