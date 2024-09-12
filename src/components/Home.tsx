import { useNavigate } from "react-router-dom";
import theOllyLogo from "../assets/logo.png";
import appScreenshot1 from "../assets/file (2).png";
import appScreenshot2 from "../assets/file (3).png";
import appScreenshot3 from "../assets/file (4).png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <nav>
        <img src={theOllyLogo} alt="the-olly-logo" />
        <a onClick={() => navigate('/support')}>Contact Us</a>
      </nav>

      <section className="hero-section">
        <img src={appScreenshot1} alt="app-screenshot1" />
        <img src={appScreenshot2} alt="app-screenshot2" className="appScreenshot2"/>
      </section>

      <section className="text-section">
        <h1>The Olly</h1>
        <div>
          <p>
            Olly: Fun-Filled Group Exercise for Kids Olly is the ultimate app
            for bringing children together through fitness and fun. Designed for
            parents who want to encourage healthy habits, Olly makes it easy to
            organize group exercise sessions with up to five kids, right from
            your device. <br />
            <br />
            Key Features: <br />
            <br />
            <ul>
              <li>
                Group Video Calls: Schedule and host online video calls where
                kids can exercise together. Each group can have up to five
                children, with parents adding their kids and inviting others to
                join.
              </li>
              <li>
                Customizable Groups: Parents can add up to three of their own
                children to a group and invite other parents to add their
                children, making it easy to bring friends together for a shared
                workout.
              </li>
              <li>
                Guided Workouts: Once the call begins, kids are welcomed with an
                intro screen before being guided through fun and engaging
                exercises displayed on the screen.
              </li>
              <li>
                Interactive Leaderboard: After completing the workout, kids can
                see their rank on the leaderboard, adding a fun competitive
                element to keep them motivated.
              </li>
            </ul>
          </p>
          <img src={appScreenshot3} alt="app-screenshot3" />
        </div>
      </section>

      <footer>
        <div>
          <h3>Contact Us</h3>
          <p>
            E-Mail : <a href="mailto:ns@ollytheapp.com">ns@ollytheapp.com</a>
          </p>
        </div>
        <div>
          <h3>The Olly</h3>
          <p>
            Olly makes exercise a social and enjoyable experience for kids,
            promoting healthy habits while they connect with friends in a fun,
            interactive environment. Download Olly today and start building a
            fitness routine that’s as engaging as it is effective!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
