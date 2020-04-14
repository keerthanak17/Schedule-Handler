import React, { Component } from "react";
import "./App.css";
import Header from "./screens/Header/Header";
import ZoneOverview from "./screens/Overview/ZoneOverview";
import ZoneEditor from "./screens/Editor/ZoneEditor";
import { schedules } from "./scheduleSample"; //Sample schedules to display in the overview page

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDegC: true,
      zoneList: null,
      schedulesList: schedules,
      schedule: null,
    };
  }

  async componentDidMount() {
    const url =
      "https://my-json-server.typicode.com/ivanturianytsia-envio/json-data/zones";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ zoneList: data }); //Pulled the zone list data
  }

  handleSubmit = (event) => {
    // Add a new schedule functionality - Not completed
    const schedules = this.state.schedulesList;
    const newSchedule = {
      //Currently experimenting with default values to these to see how scheduleList object can be updated.
      zones: [2, 3, 4],
      schedule_id: schedules.length + 1,
    };
    //Need to add - input validation & temp conversion between degree C & F according to global setting
  };

  handleTempChange = (event) => {
    //Globally change temperature from the header
    const isDegC = event.target.value === "degC";
    this.setState({ isDegC: isDegC });
  };

  render() {
    return (
      <div className="App">
        <Header
          isDegC={this.state.isDegC}
          handleTempChange={this.handleTempChange}
        />
        <ZoneOverview
          schedulesList={this.state.schedulesList}
          isDegC={this.state.isDegC} //Display degree C or degree F
        />
        <ZoneEditor
          isDegC={this.state.isDegC}
          scheduleNo={this.state.schedulesList.length}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
