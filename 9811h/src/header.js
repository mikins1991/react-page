import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <h3 className="link">
        <Link to="/home">Главная</Link>
      </h3>
      <h3 className="link">
        <Link to="/employees">Сотрудники</Link>
      </h3>
    </div>
  );
};

export default Header;
