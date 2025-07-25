import React from "react";
import buySellImg from "../assets/BuySell.jpeg";
import vetImg from "../assets/appointments.jpg";
import productImg from "../assets/petproduct.jpg";
import adoptImg from "../assets/adopt.jpeg";

const Dashboard = () => {
  return (
    <div>
      {/* BANNER */}
      <div className="bg-light text-center py-5">
        <h1 className="display-4 fw-bold text-dark">Welcome to Cutipets!</h1>
        <p className="lead text-muted">Buy, sell, adopt, and care for pets all in one place</p>
      </div>

      {/* FEATURE SECTIONS */}
      <div className="container py-5">
        {/* Buy & Sell Pets */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={buySellImg} className="img-fluid rounded" alt="Buy & Sell Pets" />
          </div>
          <div className="col-md-6">
            <h2 className="text-primary">Buy & Sell Pets</h2>
            <p>Discover loving homes for your pets or bring home a new friend today.</p>
          </div>
        </div>

        {/* Veterinary Services */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img src={vetImg} className="img-fluid rounded" alt="Veterinary Services" />
          </div>
          <div className="col-md-6">
            <h2 className="text-success">Veterinary Services</h2>
            <p>Book appointments with verified doctors to ensure your pets stay healthy and happy.</p>
          </div>
        </div>

        {/* Pet Products */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={productImg} className="img-fluid rounded" alt="Pet Products" />
          </div>
          <div className="col-md-6">
            <h2 className="text-warning">Pet Products</h2>
            <p>Shop food, toys, medicine, clothing, and accessories for your pets at the best prices.</p>
          </div>
        </div>

        {/* Adopt a Pet */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img src={adoptImg} className="img-fluid rounded" alt="Adopt a Pet" />
          </div>
          <div className="col-md-6">
            <h2 className="text-danger">Adopt a Pet</h2>
            <p>Rescue and adopt pets for free from verified dog centers. Give them a second chance at life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
