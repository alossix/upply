import { useFetchUser } from "../../lib/user";
import Layout from "../../components/layout";
import Link from "next/link";
import EditUser from "../../components/EditUser";
import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <div className="profile-page">
      {user ? (
        <Layout user={user} loading={loading}>
          <div className="profile-page-container">
            <h1>Welcome to Your User Profile!</h1>
            <div className="profile-card">
              <EditUser user={user} loading={loading}></EditUser>
            </div>
          </div>
        </Layout>
      ) : (
        <h3>Loading...</h3>
      )}
      <style jsx>{`
        .profile-page-container {
          max-width: 90vw;
          margin: 2rem auto;
        }
        h1 {
          padding: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Profile;
