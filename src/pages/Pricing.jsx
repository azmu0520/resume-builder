import Head from "../components/Head";
import img from "../assets/images/pricing.jpg";
import PP from "../components/Pricing";
import Features from "../components/Features";

export default function Pricing() {
  return (
    <>
      <Head img={img} title={"Pricing"} />
      <PP />
      <Features />
    </>
  );
}
