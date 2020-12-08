import auth0 from "../../lib/auth0";

export default async function me(req, res) {
  console.log(`running /api/me.js`);
  console.log(req.body);
  try {
    await auth0.handleProfile(req, res);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
