import Head from "../components/Head";
import img from "../assets/images/contact.jpg";
import PP from "../components/Contact";

export default function Contact() {
  return (
    <>
      <Head img={img} title={"Contact Us"} />
      <PP />
    </>
  );
}
