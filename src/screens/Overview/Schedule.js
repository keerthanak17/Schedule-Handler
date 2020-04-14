import React from "react";
import "./Schedule.css";

const Schedule = (props) => {
  return (
    <div className="Schedule">
      {/* <div className="ScheduleId">Schedule No : {props.ScheduleId}</div> */}
      <div className="ScheduleTime">Schedule Time : {props.ScheduleTime}</div>
      {props.isDegC ? (
        <div className="ScheduleTempDegC">
          Schedule Temp in C : {props.ScheduleTempDegC}C
        </div>
      ) : (
        <div className="ScheduleTempDegF">
          Schedule Temp in F : {props.ScheduleTempDegC}F
        </div>
      )}
      <div className="ScheduleZonesList">
        Zone IDs :
        {props.ScheduleZones.map((zone, key) => (
          <div className="ScheduleZone" key={key}>
            {zone},
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
