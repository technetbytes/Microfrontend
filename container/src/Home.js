import React from 'react';

const Home = () => {
  console.log("Users component loaded");

  const triggerToast = (message, type) => {
    const event = new CustomEvent("showToast", { detail: { message, type } });
    window.dispatchEvent(event);
  };

  const handleAddUser = () => {
    triggerToast("New user added successfully!", "success");
  };

  const handleEditUser = () => {
    triggerToast("User details updated successfully!", "info");
  };

  const handleDeactivateUser = () => {
    triggerToast("User deactivated.", "error");
  };

  return (
    <div className="users-dashboard">
      <h1 className="page-title">User Management Dashboard</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <button className="btn-edit" onClick={handleEditUser}>Edit</button>
              <button className="btn-deactivate" onClick={handleDeactivateUser}>Deactivate</button>
            </td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>User</td>
            <td>Inactive</td>
            <td>
              <button className="btn-edit" onClick={handleEditUser}>Edit</button>
              <button className="btn-deactivate" onClick={handleDeactivateUser}>Deactivate</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn-add" onClick={handleAddUser}>Add New User</button>
    </div>
  );
};

export default Home;
