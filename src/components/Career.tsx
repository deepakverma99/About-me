import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>College Starting year</h4>
                <h5>Invertis University, Bareilly</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            I began college on July 17, 
            2023. Passionate about computer applications, 
            they are eager to develop their technical skills and knowledge. 
            Dedicated to learning and growth, 
            they aim to build a strong foundation for a successful career in technology.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>College Ending year</h4>
                <h5>Invertis University, Bareilly</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
            After completing graduation, 
            I aim to contribute to software development by creating innovative and efficient applications. 
            They aspire to enhance user experiences, optimize system performance, 
            and develop solutions that address real-world challenges in technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

