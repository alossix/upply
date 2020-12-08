import auth0 from "../../lib/auth0";

export default async function callback(req, res) {
  console.log(`running /api/callback.js`);
  try {
    await auth0.handleCallback(req, res, { redirectTo: "/user/landing" });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
