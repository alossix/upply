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
          <h1>Welcome to Your User Profile!</h1>
          <div className="profile-card">
            <div>
              <Link href="/user/stack">
                <a>See your Stack</a>
              </Link>
            </div>
            <EditUser user={user} loading={loading}></EditUser>
          </div>
        </Layout>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Profile;
