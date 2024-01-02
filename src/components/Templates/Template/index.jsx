import { Content, PDF, Temp1, Wrap } from "./style";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import img from "../../../assets/images/about.jpg";
import ReactDOMServer from "react-dom/server";

// Create styles

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
  const printHandler = () => {
    const printElement = ReactDOMServer.renderToString(pdfJSX());
    // const printElement = pdfJSX();

    html2pdf().from(printElement).save();
  };
  return (
    <Wrap>
      {/* <Content>Content</Content> */}
      <PDF>
        {pdfJSX()}
        <button onClick={printHandler}>Print</button>
      </PDF>
    </Wrap>
  );
}
