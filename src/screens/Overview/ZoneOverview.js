import React from "react";
import "./ZoneOverview.css";
import Schedule from "./Schedule";

const ZoneOverview = (props) => {
  return (
    <div className="ZoneOverview">
      <header>Zone Schedules List : </header>
      {props.schedulesList.map((schedule, key) => (
        <Schedule
          ScheduleId={schedule.schedule_id}
          ScheduleTime={schedule.time}
          ScheduleTempDegC={schedule.tempDegC}
          ScheduleTempDegF={schedule.tempDegF}
          ScheduleZones={schedule.zones}
          isDegC={props.isDegC}
          key={key}
        />
      ))}
    </div>
  );
};

export default ZoneOverview;
