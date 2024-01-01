import Head from "../components/Head";
import img from "../assets/images/templates.jpg";
import PP from "../components/Templates";
import Features from "../components/Features";

export default function Templates() {
  return (
    <>
      <Head img={img} title={"Templates"} />
      <PP />
      <Features />
    </>
  );
}
