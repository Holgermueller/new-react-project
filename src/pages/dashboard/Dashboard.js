import React, { Component } from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import ItemDisplay from "./ItemDisplay";
import { connect } from "react-redux";

const dashCard = {
  margin: " 15% auto",
  width: "85%",
  backgroundColor: "#e7e4e4",
};

class Dashboard extends Component {
  render() {
    const { list } = this.props;

    return (
      <div className="dashboard">
        <Card style={dashCard}>
          <CardHeader title="Your wish list." />
          <CardContent>
            <ItemDisplay list={list} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list.itemsOnList,
  };
};

export default connect(mapStateToProps)(Dashboard);
