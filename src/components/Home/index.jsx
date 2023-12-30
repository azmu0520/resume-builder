import Features from "../Features";
import Opener from "../Opener";
import Pricing from "../Pricing";
import Success from "../Success";
import Templates from "../Templates";
import WhyUs from "../WhyUs";
import { Wrap } from "./style";

export default function Home() {
  return (
    <Wrap>
      <Opener />
      <WhyUs />
      <Pricing />
      <Templates />
      <Features />
      <Success />
    </Wrap>
  );
}
