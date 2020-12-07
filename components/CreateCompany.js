import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFetchUser } from "../lib/user";

const CreateCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyUrl, setCompanyUrl] = useState();
  const [logoUrl, setLogoUrl] = useState("https://upply.work/office.png");

  const user = useFetchUser({ required: true });
  const userIdFromAuth0 = user.identities.user_id;

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const formSubmit = await axios.post("https://upply.work/api/company", {
      companyName,
      companyLocation,
      companyUrl,
      logoUrl,
      userIdFromAuth0,
    });
  };

  return (
    <div className="stack-form">
      <h3>Add Company Info</h3>
      <form onSubmit={formSubmitHandler}>
        <label>
          Company Name:
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          ></input>
        </label>
        <label>
          Company Location:
          <input
            type="text"
            value={companyLocation}
            onChange={(e) => setCompanyLocation(e.target.value)}
          ></input>
        </label>
        <label>
          Company Website URL (optional):
          <input
            type="text"
            value={companyUrl}
            onChange={(e) => setCompanyUrl(e.target.value)}
          ></input>
        </label>
        <label>
          Company Logo URL (optional):
          <input
            type="text"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCompany;
