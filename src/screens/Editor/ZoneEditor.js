import React from "react";
import "./ZoneEditor.css";

const ZoneEditor = (props) => {
  return (
    <div className="ZoneEditor">
      <form onSubmit={props.handleSubmit}>
        <div className="InputTime">
          {"Input Time - "}
          <input type="number" />:
          <input type="number" />
          {" (24h format) "}
        </div>
        <div className="InputTemp">
          {"Input Temperature - "}
          <input type="number" />
        </div>
        <input type="submit" value="Add a new Schedule" />
      </form>
    </div>
  );
};

export default ZoneEditor;
