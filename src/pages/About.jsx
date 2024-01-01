import Head from "../components/Head";
import img from "../assets/images/about.jpg";
import WhyUs from "../components/WhyUs";

export default function About() {
  return (
    <>
      <Head img={img} title={"About Us"} />
      <WhyUs />
    </>
  );
}
