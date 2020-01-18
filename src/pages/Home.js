import React, { Component } from "react";
import Form from "../form/Form";
import Recent from "../recent/Recent";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Form />
        <Recent />
      </div>
    );
  }
}
