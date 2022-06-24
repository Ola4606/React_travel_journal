import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header--div">
      <FontAwesomeIcon icon= {faEarthAfrica} />
      <p className="header--title">my travel journal 2022 (😥)</p>
    </div>
  );
};

export default Header;
