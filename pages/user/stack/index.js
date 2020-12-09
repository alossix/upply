import React, { useState, useEffect } from "react";
import CreateJob from "../../../components/CreateJob";
import { useFetchUser } from "../../../lib/user";
import Layout from "../../../components/layout";
import ShowJobs from "../../../components/ShowJobs";

const indexStack = () => {
  const [stackState, setStackState] = useState(false);
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <div className="stack">
        <h2>Your Application Stack</h2>
        <button onClick={() => setStackState(!stackState)}>
          Add a new job listing to your stack!
        </button>
        {stackState ? <CreateJob user={user} /> : null}
        {user ? (
          <ShowJobs user={user}></ShowJobs>
        ) : (
          <h3 className="show-jobs-container">Loading...</h3>
        )}
      </div>
      <style jsx>{`
        .stack {
          width: 90vw;
        }
      `}</style>
    </Layout>
  );
};

export default indexStack;
