import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import Link from "next/link";

function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <section className="main-section">
        <div className="main-section-top">
          <div className="main-section-left">
            <h1>
              Stop relying on spreadsheets and start managing your job
              applications like a pro!
            </h1>
          </div>
          <div className="main-section-right">
            <img
              className="job-card"
              src="/jobcard.png"
              alt="upply jobcard"
            ></img>
          </div>
        </div>
        <div className="signup-button-section">
          <Link href="/api/login">
            <a>
              <button className="signup-button">Sign Up Now</button>
            </a>
          </Link>
        </div>
      </section>
      <section className="description-section">
        <div className="description-section-top">
          <h2>Never lose track of a job listing again</h2>
          <p>
            Upply is a <strong>card-based tracking system</strong>: Categorize,
            sort, update and stay on top of your applications so you never miss
            out on a chance to find the perfect&nbsp;job.
          </p>
        </div>
        <div className="description-section-bottom">
          <h3>
            <em>Didn't I see this job somewhere already?</em>
          </h3>
          <div className="logos-container">
            <img src="/glassdoor.png" alt="glassdoor"></img>
            <img src="/indeed.png" alt="indeed"></img>
            <img src="/linkedin.png" alt="linkedin"></img>
            <img src="/stackoverflow.png" alt="stackoverflow"></img>
          </div>
          <p>
            Track your job applications from all major job boards to prevent
            applying more than once:
            <br />
            GlassDoor, Indeed, LinkedIn, and StackOverflow
          </p>
        </div>
      </section>
      <style jsx>{`
        h1 {
          font-size: 3.5rem;
        }
        h2 {
          font-size: 2rem;
          padding-bottom: 1rem;
        }
        h3 {
          font-size: 1.5rem;
        }
        .main-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          // height: 25vh;
          justify-content: center;
        }
        .main-section-top {
          display: flex;
          margin: 6rem auto 1rem auto;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        .main-section-left {
          max-width: 335px;
        }
        .main-section-right {
          padding-left: 8rem;
        }
        .job-card {
          width: 300px;
        }
        .signup-button {
          font-weight: bold;
          color: #fff;
          font-size: 2rem;
          background-color: #000;
          padding: 1.6rem 4rem;
          margin: 6rem 0rem;
          cursor: pointer;
          border: 3px solid black;
          border-radius: 15px;
        }
        .signup-button:hover {
          color: #000;
          background-color: #fff;
        }
        .signup-button:focus {
          outline: none;
        }
        .description-section {
          width: 90vw;
          margin: auto;
          padding: 5rem;
          background-color: hsl(220, 60%, 91%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .description-section-top {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 50vw;
        }
        .description-section-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin: 3rem 0rem;
        }
        .logos-container img {
          width: 50px;
          margin: 1rem;
        }
        @media only screen and (max-width: 800px) {
          h1 {
            font-size: 3rem;
          }
          .main-section {
            width: 90vw;
            flex-direction: column;
            justify-content: space-around;
            // height: 60vh;
          }
          .main-section-top {
            display: flex;
            flex-direction: column;
            // margin: 1rem auto;
          }
          .main-section-left {
            max-width: 90vw;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .main-section-right {
            display: flex;
            justify-content: center;
            padding-left: 0rem;
            margin: 2rem 0rem;
          }
          .signup-button {
            margin: 1rem auto 5rem auto;
          }
          .description-section {
            width: 90vw;
            padding: 3rem 1rem;
          }
          .description-section-top {
            max-width: 90vw;
          }
        }
      `}</style>
    </Layout>
  );
}

export default Home;
