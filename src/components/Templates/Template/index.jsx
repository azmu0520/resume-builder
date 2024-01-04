import { Content, PDF, Temp1, Wrap } from "./style";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import img from "../../../assets/images/about.jpg";
// import { Document, Page, Text, View } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 50,
  },
  header: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  item: {
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image src={img} style={styles.image} />
        {/* <Text>{props.personalData.name}</Text>
      <Text>{props.personalData.address}</Text>
      <Text>{props.personalData.email}</Text> */}
      </View>
      <View style={styles.section}>
        <Text>Education</Text>
        {/* {props.education.map((edu, index) => (
        <View key={index} style={styles.item}>
          <Text>{edu.institution}</Text>
          <Text>{edu.degree}</Text>
          <Text>{edu.graduationYear}</Text>
        </View>
      ))} */}
      </View>
      <View style={styles.section}>
        <Text>Experience</Text>
        {/* {props.experience.map((exp, index) => (
        <View key={index} style={styles.item}>
          <Text>{exp.company}</Text>
          <Text>{exp.title}</Text>
          <Text>
            {exp.startDate} - {exp.endDate}
          </Text>
        </View>
      ))} */}
      </View>
      <View style={styles.section}>
        <Text>Skills</Text>
        {/* <Text>{props.skills.join(", ")}</Text> */}
      </View>
    </Page>
  </Document>
);

export default function Template() {
  const pdfJSX = () => {
    return (
      <Temp1>
        <div className="info">
          <div className="img_wrap">
            <img src={img} alt="img" />
          </div>
          <h2>Contact</h2>

          <h4>Email</h4>
          <span>hello@reallygreatsite.com</span>

          <h4>Address</h4>
          <span>123 Anywhere St., Any City</span>

          <h2 className="edu">Education</h2>

          <h4>Enter Your Degree</h4>
          <span>University/College</span>

          <h4>Enter Your Degree</h4>
          <span>University/College</span>

          <h2 className="edu">Skills</h2>

          <ul>
            <li>UI/UX</li>
            <li>Visual Design</li>
            <li>Storyboards</li>
            <li>Storyboards</li>
          </ul>

          <h2 className="edu">Languages</h2>
          <ul className="lang">
            <li>English</li>
            <li>Uzbek</li>
          </ul>
        </div>
        <div className="description">
          <h1>Mariana Anderson</h1>
          <h3>Marketing Manager</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pharetra in lorem at laoreet. Donec hendrerit libero eget est
            tempor, quis tempus arcu elementum. In elementum elit at dui
            tristique feugiat. Mauris convallis, mi at mattis malesuada, neque
            nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc.
          </p>

          <div className="title">Experience</div>

          <div className="box">
            <div className="years">
              <span>2019</span> -<span>2020</span>
            </div>
            <div className="name">
              <span>Company Name </span> |
              <span>123 Anywhere St., Any City</span>
            </div>
            <div className="job_title">Job position here</div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="years">
              <span>2019</span> -<span>2020</span>
            </div>
            <div className="name">
              <span>Company Name </span> |
              <span>123 Anywhere St., Any City</span>
            </div>
            <div className="job_title">Job position here</div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra in lorem at laoreet. Donec hendrerit libero eget est
              </li>
            </ul>
          </div>

          <div className="title">PERSONAL PROJECTS</div>

          <div className="box">
            <div className="name">
              <span>Company Name </span> |
              <span>123 Anywhere St., Any City</span>
            </div>
          </div>
        </div>
      </Temp1>
    );
  };
  // const styles = StyleSheet.create({
  //   page: {
  //     flexDirection: "row",
  //   },
  //   section: {
  //     flexGrow: 1,
  //   },
  // });

  return (
    <Wrap>
      <PDFDownloadLink document={<MyDocument />} fileName="my-form.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </Wrap>
  );
}
