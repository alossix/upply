import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";

function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <section className="main-section">
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
      </section>
      <section className="description-section">
        <div className="description-section-top">
          <h2>Never lose track of a job listing again</h2>
          <p>
            Upply is a <strong>card-based tracking system</strong>: Categorize,
            sort, update and stay on top of your applications <br />
            so you never miss out on a chance to find the perfect job.
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
          font-size: 2.5rem;
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
          align-items: center;
          height: 25vh;
          justify-content: center;
        }
        .main-section-left {
          width: 40%;
        }
        .job-card {
          width: 300px;
        }
        .description-section {
          height: 35vh;
          width: 80vw;
          margin: auto;
          padding: 0rem 5rem;
          background-color: hsl(220, 60%, 97%);
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
        }
        .description-section-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .logos-container img {
          width: 50px;
          margin: 1rem;
        }
        @media only screen and (max-width: 800px) {
          .main-section {
            width: 90vw;
            flex-direction: column;
            height: 80vh;
          }
          .main-section-left {
            width: 90vw;
          }
          .description-section {
            width: 90vw;
            height: 80vh;
          }
        }
      `}</style>
    </Layout>
  );
}

export default Home;
