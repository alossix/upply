import { useFetchUser } from "../../lib/user";
import Layout from "../../components/layout";
import Link from "next/link";

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <h1>Your User Profile</h1>
      <div>
        <Link href="/user/stack">
          <a>See your Stack</a>
        </Link>
      </div>
    </div>
  );
}

function Profile() {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <ProfileCard user={user} />}
    </Layout>
  );
}

export default Profile;
