import React from "react";
import './Company.css';

export default function Root() {
  const triggerToast = (message, type) => {
    const event = new CustomEvent("showToast", { detail: { message, type } });
    window.dispatchEvent(event);
  };

  const handleUpdateDetails = () => {
    triggerToast("Company details updated successfully!", "success");
  };

  const handleAddBranch = () => {
    triggerToast("New branch added successfully!", "info");
  };

  const handleChangeLogo = () => {
    triggerToast("Company logo updated.", "info");
  };

  return (
    <section className="company-profile">
      <h1>Company Profile</h1>
      <div className="company-card">
        <h2>XYZ Corporation</h2>
        <p><strong>Industry:</strong> Technology</p>
        <p><strong>Address:</strong> 123 Main St, San Francisco, CA</p>
        <p><strong>Contact:</strong> info@xyzcorp.com</p>
        <div className="action-buttons">
          <button onClick={handleUpdateDetails} className="btn-primary">Edit Company Details</button>
          <button onClick={handleAddBranch} className="btn-secondary">Add New Branch</button>
          <button onClick={handleChangeLogo} className="btn-secondary">Change Logo</button>
        </div>
      </div>
    </section>
  );
}
