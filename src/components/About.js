import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I develop, design and code solutions, and I love what I do.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/toks.png"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} a Enterprise Architect and Developer based in Atlanta,
              USA. I build immersive infrastructure,microservice
              applications and architecture through carefully crafted code and user-centric
              solution.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Toks
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Lawal
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>07 July
                    {/*1987*/}
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    American
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>8 years
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    Atlanta
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Languages</span>
                    English
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>404 203-8915
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600" href={process.env.REACT_APP_SUPPORT_EMAIL}>Email</span>
                    tokunbolawal4@gmail.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Skype</span>
                    tokunbo.lawal1
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Linkedln</span>
                    linkedin/in/toks-lawal
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a href="img/Tokunbo Lawal_Resume.pdf" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  download my resume
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        snr. software developer
                        <span className="separator" />
                        <span className="font-weight-700">MyFit.ai</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Architecture Change Management and Product design activities follow TOGAF ADM.
                        Initial Development planning - Ubuntu server set up, web server configuration. Containers set and documentation.
                        Demonstration and proof of concept development - take steps to derive concept planning to implementation roadmap.
                        Hybrid app development collaboration with product team and iOS & Android store deployment.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2021 - 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        php developer
                        <span className="separator" />
                        <span className="font-weight-700">Intralot</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Developed and maintained complex PHP-based web applications for INTRALOT's digital platform for lottery gaming operations,
                        contributing to a 15% increase in website performance and a 20% reduction in load times,
                        resulting in an improved user experience for millions of lottery players
                        Collaborated with a cross-functional team to deliver and implement software applications, specialized utility programs
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2016 - 2021
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Developer,Product Owner <span>& Architect</span>
                        <span className="separator" />
                        <span className="font-weight-700">ChiefSoft Works</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Utilized Entity Framework to successfully implement robust and efficient web service APIs,
                        ensuring seamless integration and optimal performance within the system infrastructure.
                        Provided technical oversight to previously developed and approved architectural solutions;
                        drove innovation, developed, and reviewed the program and project level architectures
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2008 - 2012
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Computer Science Degree
                        <span className="separator" />
                        <span className="font-weight-700">
                          Yaba College of Technology
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Website Development (PHP) , Mobile Application Development , Database Design and Management,
                        Client-Side Scripting Language and Tools, Data Warehousing,  Data Structure & Algorithm, System Analysis and Development life-cycle
                        C/C#/C++, FORTRAN and COBOL Programming.Hardware/Software Troubleshooting.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2021 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Associates Degree
                        <span className="separator" />
                        <span className="font-weight-700">
                          Ivy Tech Community College
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Information Security Management.Information Technology · Jenkins · Integration · Linux · Metasploit · Middleware · Network Security
                        Risk Management · Security Management · Security Operations · Security+ · Software Development · Project Management · Agile Project Management
                        Computing logic · Digital Forensics · Mobile Applications.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2021 - 2021
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Certification Degree
                        <span className="separator" />
                        <span className="font-weight-700">
                          Military Career Academy
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Risk management, network and security components and architecture, implementing advanced authentication and cryptographic techniques,
                        implementing security for systems, applications, and storage, implementing security for cloud and virtualization technologies,
                        and utilizing security assessments and incident response.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">php</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">react</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">nodejs</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">wordpress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">angular js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">docker</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
