import React, { useState, useEffect } from "react";
import CreateJob from "../../../components/CreateJob";
import { useFetchUser } from "../../../lib/user";
import Layout from "../../../components/layout";

const indexStack = () => {
  const [stackState, setStackState] = useState(false);
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      <h2>Your Stack</h2>
      <h3 onClick={() => setStackState(true)}>
        Add new company or job listing
      </h3>
      {stackState ? <CreateJob user={user} /> : null}
    </Layout>
  );
};

export default indexStack;
