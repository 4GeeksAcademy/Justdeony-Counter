import React from "react";

const Card = ({ number }) => {
  return (
     <div className="card text-center" style={{ width: "6rem", height: "8rem", backgroundColor: "black", fontWeight: "bold", color: "yellow", boxShadow: "0 0 40px rgba(0, 0, 0, 1)" }}
     >
      <div className="card-body">
        <h2 className="card-title">{number}</h2>
      </div>
    </div>
  );
};

export default Card;
