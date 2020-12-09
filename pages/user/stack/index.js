import React, { useState, useEffect } from "react";
import CreateJob from "../../../components/CreateJob";
import { useFetchUser } from "../../../lib/user";
import Layout from "../../../components/layout";
import ShowJobs from "../../../components/ShowJobs";

const indexStack = () => {
  const { user, loading } = useFetchUser();

  return (
    <Layout>
      {user ? (
        <div className="stack-page">
          <h1>Your Application Stack</h1>
          <div className="show-jobs-outer-container">
            <ShowJobs user={user}></ShowJobs>
          </div>
          <div className="edit-job-container">
            <h2>Add a new job listing to your Stack</h2>
            <CreateJob user={user} />
          </div>
          <style jsx>{`
            h1,
            h2 {
              padding: 1rem 0rem;
            }
            .stack-page {
              display: flex;
            }
            .show-jobs-outer-container {
              align-items: center;
            }
          `}</style>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </Layout>
  );
};

export default indexStack;
