import { useFetchUser } from "../../lib/user";
import Layout from "../../components/layout";
import Link from "next/link";
import EditUser from "../../components/EditUser";
import React, { useState } from "react";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);
  const { user, loading } = useFetchUser({ required: true });

  return (
    <Layout user={user}>
      {/* {firstName ? (
        <h1>Welcome to Your User Profile, {firstName}!</h1>
      ) : (
        <h1>Welcome to Your User Profile!</h1>
      )} */}
      <h1>Welcome to Your User Profile!</h1>
      <div className="profile-card">
        <div>
          <Link href="/user/stack">
            <a>See your Stack</a>
          </Link>
        </div>
        <button onClick={() => setShowProfile(true)}>Edit User Profile</button>
        {showProfile ? (
          <EditUser user={user} loading={loading}></EditUser>
        ) : null}
      </div>
    </Layout>
  );
};

export default Profile;
