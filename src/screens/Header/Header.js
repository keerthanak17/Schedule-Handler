import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      Schedule Handler
      <div className="selector">
        <div className="timeSelector">
          {/*Indicating to user the global time format*/}
          {"Time Format: "}
          24hr{" "}
          <input type="radio" name="timeFormat" value="24hr" defaultChecked />
        </div>
        <div className="tempSelector">
          {"Temperature Setting: "}
          degC{" "}
          <input
            type="radio"
            name="tempformat"
            value="degC"
            defaultChecked
            onChange={props.handleTempChange}
          />
          degF{" "}
          <input
            type="radio"
            name="tempformat"
            value="degF"
            onChange={props.handleTempChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
