import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUsers, FaDog, FaBoxOpen, FaUserMd, FaCalendarCheck, FaExclamationCircle } from 'react-icons/fa';

const AdminDashboard = () => {
  const stats = {
    users: 152,
    pets: 78,
    products: 43,
    doctors: 19,
    appointments: 61,
    pendingApprovals: 7,
  };

  const cardStyle = "shadow-sm rounded p-4 text-white d-flex align-items-center justify-content-between";

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">🐾 Admin Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className={`${cardStyle} bg-primary`}>
            <div>
              <h5>Total Users</h5>
              <h2>{stats.users}</h2>
            </div>
            <FaUsers size={40} />
          </div>
        </div>

        <div className="col-md-4">
          <div className={`${cardStyle} bg-success`}>
            <div>
              <h5>Pets Listed</h5>
              <h2>{stats.pets}</h2>
            </div>
            <FaDog size={40} />
          </div>
        </div>

        <div className="col-md-4">
          <div className={`${cardStyle} bg-info`}>
            <div>
              <h5>Products</h5>
              <h2>{stats.products}</h2>
            </div>
            <FaBoxOpen size={40} />
          </div>
        </div>

        <div className="col-md-4">
          <div className={`${cardStyle} bg-warning`}>
            <div>
              <h5>Doctors</h5>
              <h2>{stats.doctors}</h2>
            </div>
            <FaUserMd size={40} />
          </div>
        </div>

        <div className="col-md-4">
          <div className={`${cardStyle} bg-secondary`}>
            <div>
              <h5>Appointments</h5>
              <h2>{stats.appointments}</h2>
            </div>
            <FaCalendarCheck size={40} />
          </div>
        </div>

        <div className="col-md-4">
          <div className={`${cardStyle} bg-danger`}>
            <div>
              <h5>Pending Approvals</h5>
              <h2>{stats.pendingApprovals}</h2>
            </div>
            <FaExclamationCircle size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
