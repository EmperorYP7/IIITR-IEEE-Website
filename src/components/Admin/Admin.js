import React from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./Admin.css";
import "react-toastify/dist/ReactToastify.css";
import Events from './Events/Events';
import Members from './Members/Members';
import Notices from './Notices/Notices';
import Resources from './Resources/Resources';
import Gallery from './Gallery/Gallery';
import Conference from './Resources/Conference';

const Admin = (props) => {
  const token = jwt_decode(window.localStorage.getItem("token"));
  const history = useHistory();

  return (
    <div className="admin">
      <h1 style={{ paddingLeft: "1em" }}>Admin Dashboard</h1>
      <>
        <div style={{ margin: ".5em auto" }} className="admin-details">
          <div>
            <div style={{ marginBottom: "10px" }}>
              <label>username: </label>
              <b> {token.username}</b>
              <div
                className="logout-button"
                onClick={() => {
                  window.localStorage.clear();
                  history.push("/admin");
                }}
              >
                Logout
              </div>
            </div>
            <div>
              <label>Username: </label>
              <b> {token.username || "Admin"}</b>
            </div>
          </div>
        </div>
      </>
      <div>
          <Conference />
          <Events />
          <Gallery />
          <Members />
          <Notices />
          <Resources />
      </div>
    </div>
  );
};

export default Admin;
