import MuiStepper from "./Stepper";
import { Content, PDF, Wrap } from "./style";

export default function Template() {
  return (
    <Wrap>
      <Content>
        <MuiStepper />
      </Content>
      <PDF>PDF</PDF>
    </Wrap>
  );
}
