import theOllyLogo from "../assets/Color logo - no background 1.png";
import contactImg from "../assets/Group 1410084205.png";

const Support = () => {
  return (
    <div className="support-container">
      <nav>
        <img src={theOllyLogo} alt="the-olly-logo" />
      </nav>

      <section className="contact-section">
        <img src={contactImg} alt="contact img" />
        <div>
          <h1>Contact Us</h1>
          <div className="about-olly">
            <h3>The Olly</h3>
            <p>
              Olly makes exercise a social and enjoyable experience for kids,
              promoting healthy habits while they connect with friends in a fun,
              interactive environment. Download Olly today and start building a
              fitness routine that’s as engaging as it is effective!
            </p>
          </div>
          <p>If you are facing any problem, please reach out to us at</p>
          <p>
            E-Mail : <a href="mailto:ns@ollytheapp.com">ns@ollytheapp.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Support;
