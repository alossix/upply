import React, { useState } from "react";
import axios from "axios";

const CreateCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyUrl, setCompanyUrl] = useState();
  const [logoUrl, setLogoUrl] = useState("https://upply.work/office.png");

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const formSubmit = await axios.post("http://localhost:3000/api/company", {
      companyName,
      companyLocation,
      companyUrl,
      logoUrl,
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
