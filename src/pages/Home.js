import React, { Component } from "react";
import PropTypes from "prop-types";
import Register from "../LoginRegister/Register";
import Login from "../LoginRegister/Login";
import { Box, Card, Tabs, Tab, Typography } from "@material-ui/core";

const loginRegisterDisplay = {
  margin: "15% auto",
  width: "55%"
};

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Card style={loginRegisterDisplay}>
          <Tabs>
            <Tab label="Register" />
            <Tab label="Login" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Register />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Login />
          </TabPanel>
        </Card>
      </div>
    );
  }
}
