// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from "../../lib/user";
import Layout from "../../components/layout";
import Link from "next/link";

function ProfileCard({ user }) {
  console.log(user);
  return (
    <>
      <h1>Profile</h1>
      <h2>Rich Text Profile Page Test</h2>

      <div>
        <h3>Profile (client rendered)</h3>
        <img src={user.picture} alt="user picture" />
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
        <Link href="/user/stack">
          <a>See your stack of applications</a>
        </Link>
      </div>
    </>
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
