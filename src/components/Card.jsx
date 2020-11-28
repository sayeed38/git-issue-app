import React from "react";
import "./styles.css";
function Card({ data }) {
  return (
    <div className="card">
      <h3 className="title">{data.title}</h3>
      <div className="content">
        <h6 className="sub-content">#{data.number}</h6>
        <h6 className="sub-content">
          {data.updated_at} by {data.user.login}
        </h6>
      </div>
    </div>
  );
}

export default Card;
