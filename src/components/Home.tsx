import theOllyLogo from "../assets/logo.png";
import appScreenshot1 from "../assets/file (2).png";
import appScreenshot2 from "../assets/file (3).png";
import appScreenshot3 from "../assets/file (4).png";
import playstoreButton from "../assets/playstore-button-logo.png";
import appstoreButton from "../assets/appstore-button-logo.png";
import playstoreLogo from "../assets/playstore-logo.png";
import appstoreLogo from "../assets/appstore-logo.png";

const Home = () => {
  return (
    <div className="container">
      <nav>
        <img src={theOllyLogo} alt="the-olly-logo" />
        <div className="app-download-buttons">
        <a href="https://play.google.com/store/apps/details?id=com.reytara.olly" target="_blank">
          <img src={playstoreButton} alt="playstore button" />
        </a>
        <a href="https://apps.apple.com/in/app/olly/id6480505963" target="_blank">
          <img src={appstoreButton} alt="appstore button" />
        </a>
        </div>

        <div className="app-download-logos">
        <a href="https://play.google.com/store/apps/details?id=com.reytara.olly" target="_blank">
          <img src={playstoreLogo} alt="playstore logo" />
        </a>
        <a href="https://apps.apple.com/in/app/olly/id6480505963" target="_blank">
          <img src={appstoreLogo} alt="appstore logo" />
        </a>
        </div>
      </nav>

      <section className="hero-section">
        <img src={appScreenshot1} alt="app-screenshot1" />
        <img
          src={appScreenshot2}
          alt="app-screenshot2"
          className="appScreenshot2"
        />
      </section>

      <section className="text-section">
        <h1>Olly</h1>
          <div>
          <p>
            Olly is an exciting new app designed to make our children physically
            active. Designed by a parent who wants his kids to get healthier,
            Olly curates and offers easy, daily-changing workouts for children
            and adolescents aged 5 to 15. The best part is that kids get to
            workout in real-time in peer groups of their own choosing, making
            the experience fun and challenging. <br /> <br /> Download Olly
            today and start building a fitness routine that’s as engaging as it
            is effective! <br /> <br />
            Children and adolescents aged 5 to 15 get forms groups of 5 together
            through fitness and fun. Designed for parents who want to encourage
            healthy habits, Olly makes it easy to organize group exercise
            sessions with up to five kids, right from your device. <br />
            <br />
            Key Features: <br />
            <br />
            <ul>
              <li>
                <span>Dedicated to Children:</span> Olly is the first fitness
                app dedicated to children. Olly makes exercise a social and
                enjoyable experience for kids, promoting healthy habits while
                connecting with friends in a fun, interactive environment.
              </li>
              <li>
                <span>Workout Anywhere:</span> All the Olly workouts are
                designed to be done without any equipment or location settings.
                Your child will only need a phone or tablet connected to data
                and can participate at home, outside or anywhere really.
              </li>
              <li>
                <span>Comfort of your own Group:</span> Parents can create a
                group and invite their friends to add their children to create a
                group of five kids. These groups can be formed for your child’s
                school friends, colony friends, cousins or anybody who your
                child gets along with. Add up to three of your own children.
                Groups of known users are safe and create bonhomie.
              </li>
              <li>
                <span>In Real Time:</span> Once the workout begins, all five users will be
                able to see each other exercising in real time through video
                screens on the app. Watching each other creates excitement and
                healthy competition, thereby motivating children to do better.
              </li>
              <li>
                <span>Schedule with Convenience:</span> Schedule your child’s workouts with convenience by setting a date, time and frequency on a shared calendar as per the group’s convenience. Fix a time slot that works for your child’s group and have the freedom to change at any time.
              </li>
              <li>
                <span>Curated Workouts:</span> Olly’s curated workouts have been designed by qualified physical trainers and physiotherapists keeping in mind an average child’s athletic abilities. The workouts are based on 16 foundational movements such as squat, sit-up, push-up, lunge that use only body weight. No special equipment or prior experience is required. Before the start of each workout, a demonstration video will explain how to attempt the workout.
              </li>
              <li>
                <span>Track Performance:</span> After completing the workout, the child and parent can track their performance in the workout by looking up the scores in a dedicated “Statistic” section. Here you will see your child’s absolute and relative performance to the best in the group. Over time the app will aggregate the child’s performance to provide a quantitative progress marker. This section also provides a fun, competitive element to children motivated.
              </li>
              <li>
                <span>Designed for Safety:</span> The app has been designed keeping in mind a parent’s privacy concerns. The app does not record any video or image. The app’s proprietary technology converts the video or image into data points to calculate workout scores. These scores for each user and group are stored for tracking performance. 
              </li>
            </ul>
            <br />
            Olly makes exercise a social and enjoyable experience for kids, promoting healthy habits while they connect with friends in a fun, interactive environment. 
            Download Olly today and start building a fitness routine that’s as engaging as it is effective! 
          </p>
          {/* <div> */}
          <img src={appScreenshot3} alt="app-screenshot3" />
          {/* </div> */}
        </div>
      </section>

      <footer>
        <div>
          <h3>Contact Us</h3>
          <p>
            <span>E-Mail :</span> <a href="mailto:ns@ollytheapp.com">ns@ollytheapp.com</a>
          </p>
          <p>
            <span>Organization Name : </span>Reytara Fitness (OPC) Private Limited
          </p>
          <p>
            <span>Address : </span> M-58 Market Greater Kailash 2, New Delhi 110048, India
          </p>
        </div>
        <div className="copyright">
          <span>
            &copy; 2024, Reytara Fitness (OPC) Private Limited
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
